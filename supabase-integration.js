(function () {
  var SUPABASE_URL = "https://wzjmjerqegbtofctcdvb.supabase.co";
  var SUPABASE_KEY = "sb_publishable_G9K2cCYA5eA4cuT0ygiPJQ_uDhQuP_Z";

  if (typeof window.supabase === "undefined" || !window.supabase.createClient) {
    console.warn("[Supabase] SDK not loaded — staying on localStorage");
    return;
  }
  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  window.sb = sb;

  var CURRENT_USER = null;
  var CURRENT_PROFILE = null;

  function escHTML(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  async function refreshSession() {
    try {
      var sess = await sb.auth.getSession();
      var user = sess.data.session ? sess.data.session.user : null;
      if (!user) {
        CURRENT_USER = null;
        CURRENT_PROFILE = null;
        localStorage.removeItem("bionexus_current");
        return null;
      }
      var pr = await sb.from("profiles").select("*").eq("id", user.id).maybeSingle();
      if (pr.error) console.warn("[Supabase] profile fetch:", pr.error);
      CURRENT_PROFILE = pr.data || null;
      CURRENT_USER = {
        id: user.id,
        user: (CURRENT_PROFILE && CURRENT_PROFILE.username) || user.email.split("@")[0],
        email: user.email,
      };
      localStorage.setItem("bionexus_current", JSON.stringify(CURRENT_USER));
      return CURRENT_USER;
    } catch (e) {
      console.error("[Supabase] refreshSession:", e);
      return null;
    }
  }

  window.getCurrentUser = function () {
    return CURRENT_USER;
  };
  window.setCurrentUser = function (u) {};
  window.getUsers = function () {
    return [];
  };
  window.saveUsers = function (u) {};

  window.doLogin = async function () {
    var u = document.getElementById("loginUser").value.trim();
    var p = document.getElementById("loginPass").value;
    var err = document.getElementById("loginError");
    var btn = document.getElementById("loginSubmitBtn");
    err.textContent = "";
    if (!u || !p) {
      err.textContent = "Completează ambele câmpuri.";
      return;
    }
    var email = u;
    if (!u.includes("@")) {
      var lookup = await sb.from("profiles").select("username,id").eq("username", u).maybeSingle();
      if (!lookup.data) {
        err.textContent =
          "Folosește emailul pentru autentificare (sau verifică numele de utilizator).";
        return;
      }
      err.textContent = "Te rog autentifică-te cu adresa de email, nu cu numele de utilizator.";
      return;
    }
    btn.disabled = true;
    var orig = btn.textContent;
    btn.innerHTML = '<span class="auth-spin"></span> Se verifică...';
    var res = await sb.auth.signInWithPassword({ email: email, password: p });
    if (res.error) {
      err.textContent =
        res.error.message === "Invalid login credentials"
          ? "Email sau parolă greșită."
          : res.error.message;
      btn.disabled = false;
      btn.textContent = orig || "Conectare";
      return;
    }
    await refreshSession();
    if (typeof applyUserBadge === "function") applyUserBadge();
    closeLogin();
    if (typeof showHome === "function") showHome();
  };

  window.doRegister = async function () {
    var u = document.getElementById("regUser").value.trim();
    var e = document.getElementById("regEmail").value.trim();
    var p = document.getElementById("regPass").value;
    var pc = document.getElementById("regPassConf").value;
    var terms = document.getElementById("regTerms").checked;
    var hp = document.getElementById("regWebsite");
    var captchaOk =
      typeof window.captchaIsValid === "function"
        ? window.captchaIsValid()
        : (document.getElementById("regHuman") || {}).value === "1";
    var err = document.getElementById("regError");
    var btn = document.getElementById("regSubmitBtn");
    err.textContent = "";
    err.style.color = "";
    if (hp && hp.value.length > 0) {
      err.textContent = "Verificare eșuată";
      return;
    }
    if (!u || !e || !p || !pc) {
      err.textContent = "Completează toate câmpurile.";
      return;
    }
    if (u.length < 3) {
      err.textContent = "Numele de utilizator: minim 3 caractere.";
      return;
    }
    if (!/.+@.+\..+/.test(e)) {
      err.textContent = "Adresa de email este invalidă.";
      return;
    }
    if (p.length < 8) {
      err.textContent = "Parola: minim 8 caractere.";
      return;
    }
    if (p !== pc) {
      err.textContent = "Parolele nu coincid.";
      return;
    }
    if (!terms) {
      err.textContent = "Trebuie să accepți Termenii.";
      return;
    }
    if (!captchaOk) {
      err.textContent = "Completează verificarea de securitate corect.";
      if (typeof window.captchaVerify === "function") window.captchaVerify();
      var ce = document.getElementById("captchaA");
      if (ce) ce.focus();
      return;
    }
    var taken = await sb.from("profiles").select("id").eq("username", u).maybeSingle();
    if (taken.data) {
      err.textContent = "Acest nume de utilizator este deja folosit.";
      return;
    }
    btn.disabled = true;
    var orig = btn.textContent;
    btn.innerHTML = '<span class="auth-spin"></span> Se creează contul...';
    var res = await sb.auth.signUp({ email: e, password: p, options: { data: { username: u } } });
    if (res.error) {
      err.textContent = res.error.message || "Eroare la înregistrare.";
      btn.disabled = false;
      btn.textContent = orig || "Creează cont";
      return;
    }
    if (res.data.user && !res.data.session) {
      err.style.color = "#6ee7b7";
      err.textContent = "Cont creat! Verifică emailul pentru confirmare, apoi conectează-te.";
      btn.disabled = false;
      btn.textContent = orig || "Creează cont";
      setTimeout(function () {
        showAuthMode("login");
      }, 2500);
      return;
    }
    await refreshSession();
    if (CURRENT_USER && CURRENT_PROFILE) {
      if (!CURRENT_PROFILE.username) {
        await sb.from("profiles").upsert({ id: CURRENT_USER.id, username: u });
        await refreshSession();
      }
    }
    if (typeof applyUserBadge === "function") applyUserBadge();
    closeLogin();
    if (typeof showHome === "function") showHome();
  };

  window.doLogout = async function () {
    await sb.auth.signOut();
    CURRENT_USER = null;
    CURRENT_PROFILE = null;
    localStorage.removeItem("bionexus_current");
    location.reload();
  };

  window.forgotPass = function () {
    var modal = document.getElementById("forgotPassModal");
    if (!modal) return;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    var emailEl = document.getElementById("forgotEmail");
    var loginInput = document.getElementById("loginUser");
    if (emailEl) {
      if (loginInput && loginInput.value && loginInput.value.includes("@"))
        emailEl.value = loginInput.value;
      else emailEl.value = "";
      var msg = document.getElementById("forgotMsg");
      if (msg) {
        msg.textContent = "";
        msg.style.color = "";
      }
      setTimeout(function () {
        emailEl.focus();
      }, 200);
    }
  };
  window.closeForgotModal = function () {
    var modal = document.getElementById("forgotPassModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "hidden";
    if (document.getElementById("loginModal").classList.contains("active"))
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  };
  window.sendForgotEmail = async function () {
    var email = document.getElementById("forgotEmail").value.trim();
    var msg = document.getElementById("forgotMsg");
    var btn = document.getElementById("forgotSubmitBtn");
    msg.style.color = "";
    msg.textContent = "";
    if (!email) {
      msg.textContent = "Introdu o adresă de email.";
      return;
    }
    if (!/.+@.+\..+/.test(email)) {
      msg.textContent = "Adresa de email este invalidă.";
      return;
    }
    btn.disabled = true;
    var orig = btn.textContent;
    btn.innerHTML = '<span class="auth-spin"></span> Se trimite...';
    var redirectTo = window.location.origin + window.location.pathname;
    var res = await sb.auth.resetPasswordForEmail(email, { redirectTo: redirectTo });
    if (res.error) {
      msg.textContent = res.error.message;
      btn.disabled = false;
      btn.textContent = orig || "Trimite linkul de resetare";
      return;
    }
    msg.style.color = "#6ee7b7";
    msg.innerHTML = "✓ Email trimis cu succes. Verifică inbox-ul (și folderul spam).";
    btn.innerHTML = "Email trimis ✓";
    setTimeout(function () {
      closeForgotModal();
      btn.disabled = false;
      btn.textContent = orig || "Trimite linkul de resetare";
    }, 2500);
  };

  window.changePassword = async function () {
    var cur = document.getElementById("settingsCurPass").value;
    var nw = document.getElementById("settingsNewPass").value;
    var cf = document.getElementById("settingsConfPass").value;
    var msg = document.getElementById("settingsPassMsg");
    msg.className = "settings-msg";
    msg.textContent = "";
    if (!cur || !nw || !cf) {
      msg.classList.add("err");
      msg.textContent = "Completează toate câmpurile.";
      return;
    }
    if (nw.length < 8) {
      msg.classList.add("err");
      msg.textContent = "Parola nouă: minim 8 caractere.";
      return;
    }
    if (nw !== cf) {
      msg.classList.add("err");
      msg.textContent = "Parolele nu coincid.";
      return;
    }
    if (!CURRENT_USER) {
      msg.classList.add("err");
      msg.textContent = "Nu ești autentificat.";
      return;
    }
    var check = await sb.auth.signInWithPassword({ email: CURRENT_USER.email, password: cur });
    if (check.error) {
      msg.classList.add("err");
      msg.textContent = "Parola actuală e greșită.";
      return;
    }
    var upd = await sb.auth.updateUser({ password: nw });
    if (upd.error) {
      msg.classList.add("err");
      msg.textContent = upd.error.message;
      return;
    }
    msg.classList.add("ok");
    msg.textContent = "Parolă schimbată cu succes.";
    document.getElementById("settingsCurPass").value = "";
    document.getElementById("settingsNewPass").value = "";
    document.getElementById("settingsConfPass").value = "";
  };

  window.getProfileData = function (username) {
    if (!CURRENT_PROFILE) return {};
    return {
      avatar: CURRENT_PROFILE.avatar_url || null,
      xp: CURRENT_PROFILE.xp || 0,
      bonesViewed: CURRENT_PROFILE.bones_viewed || [],
      sectionsVisited: CURRENT_PROFILE.sections_visited || [],
      chatbotUses: CURRENT_PROFILE.chatbot_uses || 0,
      quizPlays: CURRENT_PROFILE.quiz_plays || { easy: 0, medium: 0, hard: 0 },
      quizPerfect: CURRENT_PROFILE.quiz_perfect || { easy: 0, medium: 0, hard: 0 },
      daysActive: CURRENT_PROFILE.days_active || [],
    };
  };
  window.saveProfileData = async function (p, username) {
    if (!CURRENT_USER) return;
    var upd = {};
    if (p.avatar !== undefined) upd.avatar_url = p.avatar;
    if (p.xp !== undefined) upd.xp = p.xp;
    if (p.bonesViewed !== undefined) upd.bones_viewed = p.bonesViewed;
    if (p.sectionsVisited !== undefined) upd.sections_visited = p.sectionsVisited;
    if (p.chatbotUses !== undefined) upd.chatbot_uses = p.chatbotUses;
    if (p.quizPlays !== undefined) upd.quiz_plays = p.quizPlays;
    if (p.quizPerfect !== undefined) upd.quiz_perfect = p.quizPerfect;
    if (p.daysActive !== undefined) upd.days_active = p.daysActive;
    await sb.from("profiles").update(upd).eq("id", CURRENT_USER.id);
    await refreshSession();
  };

  window.getProgress = function (user) {
    if (!CURRENT_PROFILE) return {};
    return {
      bonesViewed: CURRENT_PROFILE.bones_viewed || [],
      sectionsVisited: CURRENT_PROFILE.sections_visited || [],
      chatbotUses: CURRENT_PROFILE.chatbot_uses || 0,
      quizPlays: CURRENT_PROFILE.quiz_plays || { easy: 0, medium: 0, hard: 0 },
      quizPerfect: CURRENT_PROFILE.quiz_perfect || { easy: 0, medium: 0, hard: 0 },
      daysActive: CURRENT_PROFILE.days_active || [],
      xp: CURRENT_PROFILE.xp || 0,
      joinDate: CURRENT_PROFILE.created_at
        ? new Date(CURRENT_PROFILE.created_at).getTime()
        : Date.now(),
    };
  };
  window.saveProgress = async function (p, user) {
    if (!CURRENT_USER) return;
    await sb
      .from("profiles")
      .update({
        bones_viewed: p.bonesViewed,
        sections_visited: p.sectionsVisited,
        chatbot_uses: p.chatbotUses,
        quiz_plays: p.quizPlays,
        quiz_perfect: p.quizPerfect,
        days_active: p.daysActive,
        xp: p.xp,
      })
      .eq("id", CURRENT_USER.id);
    if (CURRENT_PROFILE) {
      CURRENT_PROFILE.bones_viewed = p.bonesViewed;
      CURRENT_PROFILE.sections_visited = p.sectionsVisited;
      CURRENT_PROFILE.chatbot_uses = p.chatbotUses;
      CURRENT_PROFILE.quiz_plays = p.quizPlays;
      CURRENT_PROFILE.quiz_perfect = p.quizPerfect;
      CURRENT_PROFILE.days_active = p.daysActive;
      CURRENT_PROFILE.xp = p.xp;
    }
  };

  window.onAvatarPick = async function (ev) {
    var f = ev.target.files && ev.target.files[0];
    if (!f || !CURRENT_USER) return;
    var ext = (f.name.split(".").pop() || "png").toLowerCase();
    var path = CURRENT_USER.id + "/avatar-" + Date.now() + "." + ext;
    var up = await sb.storage
      .from("avatars")
      .upload(path, f, { cacheControl: "3600", upsert: true });
    if (up.error) {
      alert("Eroare upload: " + up.error.message);
      return;
    }
    var pub = sb.storage.from("avatars").getPublicUrl(path);
    var url = pub.data.publicUrl;
    await sb.from("profiles").update({ avatar_url: url }).eq("id", CURRENT_USER.id);
    if (CURRENT_PROFILE) CURRENT_PROFILE.avatar_url = url;
    var avA = document.getElementById("profileAvatar");
    if (avA) {
      avA.style.backgroundImage = "url(" + url + ")";
      avA.style.backgroundSize = "cover";
      avA.style.backgroundPosition = "center";
      avA.textContent = "";
    }
    if (typeof applyUserBadge === "function") applyUserBadge();
  };

  window.saveName = async function () {
    var newName = document.getElementById("profileNameInput").value.trim();
    if (!newName || newName.length < 2) {
      alert("Nume invalid (min. 2 caractere).");
      return;
    }
    if (!CURRENT_USER) {
      alert("Nu ești conectat.");
      return;
    }
    var taken = await sb
      .from("profiles")
      .select("id")
      .eq("username", newName)
      .neq("id", CURRENT_USER.id)
      .maybeSingle();
    if (taken.data) {
      alert("Acest nume este deja folosit.");
      return;
    }
    var upd = await sb.from("profiles").update({ username: newName }).eq("id", CURRENT_USER.id);
    if (upd.error) {
      alert("Eroare: " + upd.error.message);
      return;
    }
    if (CURRENT_PROFILE) CURRENT_PROFILE.username = newName;
    CURRENT_USER.user = newName;
    document.getElementById("profileName").textContent = newName;
    var av = document.getElementById("profileAvatar");
    if (av && !av.style.backgroundImage) av.textContent = newName.charAt(0).toUpperCase();
    if (typeof applyUserBadge === "function") applyUserBadge();
    if (typeof cancelEditName === "function") cancelEditName();
  };

  function formatRevDate(ts) {
    var d = new Date(ts),
      now = new Date(),
      diff = (now - d) / 1000;
    if (diff < 60) return "acum câteva secunde";
    if (diff < 3600) return "acum " + Math.floor(diff / 60) + " min";
    if (diff < 86400) return "acum " + Math.floor(diff / 3600) + " h";
    if (diff < 7 * 86400) return "acum " + Math.floor(diff / 86400) + " zile";
    return d.toLocaleDateString("ro-RO", { day: "numeric", month: "short", year: "numeric" });
  }
  function renderStars(n) {
    var s = "";
    for (var i = 1; i <= 5; i++) s += i <= n ? "★" : "☆";
    return s;
  }

  window.submitReview = async function () {
    var msg = document.getElementById("reviewsFormMsg");
    msg.className = "reviews-form-msg";
    msg.textContent = "";
    if (!CURRENT_USER) {
      msg.classList.add("err");
      msg.textContent = "Trebuie să fii conectat.";
      return;
    }
    if (!REVIEW_SELECTED_RATING) {
      msg.classList.add("err");
      msg.textContent = "Alege un rating (1-5 stele).";
      return;
    }
    var txt = document.getElementById("reviewsFormText").value.trim();
    if (txt.length < 10) {
      msg.classList.add("err");
      msg.textContent = "Recenzia: minim 10 caractere.";
      return;
    }
    if (txt.length > 600) {
      msg.classList.add("err");
      msg.textContent = "Recenzia depășește 600 caractere.";
      return;
    }
    var existing = await sb
      .from("reviews")
      .select("id")
      .eq("user_id", CURRENT_USER.id)
      .maybeSingle();
    if (existing.data) {
      if (!confirm("Ai deja o recenzie publicată. Suprascrii cu cea nouă?")) return;
      await sb.from("reviews").delete().eq("user_id", CURRENT_USER.id);
    }
    var ins = await sb.from("reviews").insert({
      user_id: CURRENT_USER.id,
      username: CURRENT_USER.user,
      avatar_url: CURRENT_PROFILE ? CURRENT_PROFILE.avatar_url : null,
      rating: REVIEW_SELECTED_RATING,
      text: txt,
    });
    if (ins.error) {
      msg.classList.add("err");
      msg.textContent = ins.error.message;
      return;
    }
    msg.classList.add("ok");
    msg.textContent = "Recenzie publicată!";
    document.getElementById("reviewsFormText").value = "";
    REVIEW_SELECTED_RATING = 0;
    if (typeof updateRevStars === "function") updateRevStars();
    if (typeof updateRevChar === "function") updateRevChar();
    await refreshReviewsList();
    setTimeout(function () {
      msg.textContent = "";
      msg.className = "reviews-form-msg";
    }, 2500);
  };

  window.deleteReview = async function (id) {
    if (!confirm("Ștergi această recenzie?")) return;
    var del = await sb.from("reviews").delete().eq("id", id);
    if (del.error) {
      alert(del.error.message);
      return;
    }
    await refreshReviewsList();
  };

  async function refreshReviewsList() {
    try {
      var res = await sb.from("reviews").select("*").order("created_at", { ascending: false });
      if (res.error) {
        console.warn("Reviews fetch:", res.error);
        return;
      }
      var all = res.data || [];
      var list = document.getElementById("reviewsList");
      var empty = document.getElementById("reviewsEmpty");
      if (!list) return;
      list.innerHTML = "";
      if (all.length === 0) {
        if (empty) empty.style.display = "block";
      } else {
        if (empty) empty.style.display = "none";
      }
      all.forEach(function (r) {
        var card = document.createElement("div");
        card.className = "review-card";
        var avInline = "";
        if (r.avatar_url)
          avInline =
            ' style="background-image:url(' +
            escHTML(r.avatar_url) +
            ');background-size:cover;background-position:center"';
        var delBtn =
          CURRENT_USER && CURRENT_USER.id === r.user_id
            ? '<button class="review-delete" onclick="deleteReview(\'' +
              r.id +
              '\')" title="Șterge">&times;</button>'
            : "";
        card.innerHTML =
          '<div class="review-head"><div class="review-avatar"' +
          avInline +
          ">" +
          (r.avatar_url ? "" : escHTML(r.username.charAt(0).toUpperCase())) +
          '</div><div class="review-meta"><div class="review-name">' +
          escHTML(r.username) +
          '</div><div class="review-date">' +
          formatRevDate(new Date(r.created_at).getTime()) +
          '</div></div><div class="review-stars">' +
          renderStars(r.rating) +
          "</div>" +
          delBtn +
          '</div><div class="review-text">' +
          escHTML(r.text) +
          "</div>";
        list.appendChild(card);
      });
      var avg = 0;
      var sumR = 0;
      if (all.length) {
        all.forEach(function (r) {
          sumR += Number(r.rating) || 0;
        });
        avg = sumR / all.length;
      }
      var avgNum = document.getElementById("reviewsAvgNum");
      var avgStars = document.getElementById("reviewsAvgStars");
      var avgCount = document.getElementById("reviewsAvgCount");
      var lang = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
      if (avgNum) {
        if (all.length) {
          avgNum.innerHTML =
            avg.toFixed(1) +
            '<span style="font-size:.45em;color:#94a3b8;margin-left:4px;font-weight:600">/ 5</span>';
        } else {
          avgNum.textContent = "—";
        }
      }
      if (avgStars)
        avgStars.innerHTML = all.length
          ? renderStars(Math.round(avg))
          : '<span style="color:#475569">' + renderStars(0) + "</span>";
      if (avgCount) {
        if (all.length) {
          var lbl =
            lang === "en"
              ? all.length === 1
                ? "review"
                : "reviews"
              : all.length === 1
                ? "recenzie"
                : "recenzii";
          avgCount.innerHTML =
            '<b style="color:#cbd5e1">' +
            all.length +
            "</b> " +
            lbl +
            " &middot; " +
            (lang === "en" ? "thank you!" : "mulțumim!");
        } else {
          avgCount.textContent = lang === "en" ? "No reviews yet" : "Încă nicio recenzie";
        }
      }
      if (typeof refreshReviewsForm === "function") refreshReviewsForm();
    } catch (e) {
      console.error("refreshReviewsList:", e);
    }
  }
  window.refreshReviewsList = refreshReviewsList;

  if (typeof window.applyUserBadge === "function") {
    var orig = window.applyUserBadge;
    window.applyUserBadge = function () {
      orig.apply(this, arguments);
      if (typeof refreshReviewsList === "function") refreshReviewsList();
    };
  }

  sb.auth.onAuthStateChange(function (event, session) {
    if (event === "SIGNED_OUT") {
      CURRENT_USER = null;
      CURRENT_PROFILE = null;
      localStorage.removeItem("bionexus_current");
      if (typeof applyUserBadge === "function") applyUserBadge();
    }
  });

  document.addEventListener("DOMContentLoaded", async function () {
    await refreshSession();
    if (typeof applyUserBadge === "function") applyUserBadge();
    refreshReviewsList();
    var ufield = document.getElementById("regEmail");
    if (ufield) ufield.placeholder = "tu@email.com";
    var loginInput = document.getElementById("loginUser");
    if (loginInput) {
      loginInput.placeholder = "tu@email.com";
      loginInput.type = "email";
    }
    var loginLabel = document.querySelector('#authBodyLogin label[data-i18n="login.user"]');
    if (loginLabel) loginLabel.textContent = "Adresă de email";
  });

  var RECOVERY_PENDING = false;

  function detectRecoveryFromUrl() {
    var hash = window.location.hash || "";
    var qs = window.location.search || "";
    var combined = hash + "&" + qs;
    if (combined.indexOf("type=recovery") >= 0 || combined.indexOf("error=") >= 0) {
      return true;
    }
    return false;
  }

  function openResetModal() {
    var modal = document.getElementById("resetPassModal");
    if (!modal) return;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    var p = document.getElementById("resetNewPass");
    if (p)
      setTimeout(function () {
        p.focus();
      }, 200);
  }
  function closeResetModal() {
    var modal = document.getElementById("resetPassModal");
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "";
  }

  window.cancelReset = async function () {
    closeResetModal();
    if (history.replaceState) {
      history.replaceState(null, "", window.location.pathname);
    }
    await sb.auth.signOut();
    location.reload();
  };

  window.performReset = async function () {
    var nw = document.getElementById("resetNewPass").value;
    var cf = document.getElementById("resetConfPass").value;
    var msg = document.getElementById("resetMsg");
    var btn = document.getElementById("resetSubmitBtn");
    msg.style.color = "";
    msg.textContent = "";
    if (!nw || !cf) {
      msg.textContent = "Completează ambele câmpuri.";
      return;
    }
    if (nw.length < 8) {
      msg.textContent = "Parola: minim 8 caractere.";
      return;
    }
    if (nw !== cf) {
      msg.textContent = "Parolele nu coincid.";
      return;
    }
    btn.disabled = true;
    var orig = btn.textContent;
    btn.innerHTML = '<span class="auth-spin"></span> Se salvează...';
    var res = await sb.auth.updateUser({ password: nw });
    if (res.error) {
      msg.textContent = res.error.message;
      btn.disabled = false;
      btn.textContent = orig || "Salvează parola nouă";
      return;
    }
    msg.style.color = "#6ee7b7";
    msg.textContent = "Parolă schimbată cu succes! Te redirectăm...";
    if (history.replaceState) {
      history.replaceState(null, "", window.location.pathname);
    }
    setTimeout(function () {
      closeResetModal();
      RECOVERY_PENDING = false;
      refreshSession().then(function () {
        if (typeof applyUserBadge === "function") applyUserBadge();
        if (typeof showHome === "function") showHome();
      });
    }, 1200);
  };

  sb.auth.onAuthStateChange(function (event, session) {
    if (event === "PASSWORD_RECOVERY") {
      RECOVERY_PENDING = true;
      setTimeout(openResetModal, 200);
    }
  });

  if (detectRecoveryFromUrl()) {
    RECOVERY_PENDING = true;
    setTimeout(function () {
      sb.auth.getSession().then(function (r) {
        if (r.data.session) openResetModal();
      });
    }, 400);
  }

  console.log("[Supabase] Connected to", SUPABASE_URL);
})();
