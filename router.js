(function bxRouter() {
  var _nav = false;

  function el(id) {
    return document.getElementById(id);
  }
  function visible(id) {
    var e = el(id);
    return !!(e && e.style && e.style.display && e.style.display !== "none");
  }
  function active(id) {
    var e = el(id);
    return !!(e && e.classList && e.classList.contains("active"));
  }
  function recoveryActive() {
    if (visible("resetPassModal")) return true;
    var combined = (window.location.hash || "") + "&" + (window.location.search || "");
    return combined.indexOf("type=recovery") >= 0 || combined.indexOf("error=") >= 0;
  }

  function currentPath() {
    if (visible("resetPassModal")) return null;
    if (visible("forgotPassModal")) return "/forgot-password";
    if (visible("adminModal")) return "/admin";
    if (active("loginModal")) {
      var reg = el("authBodyRegister");
      return reg && reg.style.display === "block" ? "/register" : "/login";
    }
    if (active("profilePage")) {
      var tab = document.querySelector(".profile-tab.active");
      return tab && tab.getAttribute("data-section") === "setari" ? "/settings" : "/profile";
    }
    if (active("systemsPage")) return "/systems";
    if (active("featuresPage")) return "/functions";
    return "/";
  }

  function syncPath(replace) {
    if (_nav) return;
    var p = currentPath();
    if (p === null) return;
    if (p === window.location.pathname) return;
    try {
      history[replace ? "replaceState" : "pushState"]({ bx: 1 }, "", p);
    } catch (e) {}
  }

  var OPEN = {
    "/systems": function () {
      if (typeof openSystemsPage === "function") openSystemsPage();
    },
    "/functions": function () {
      if (typeof openFeaturesPage === "function") openFeaturesPage();
    },
    "/login": function () {
      if (typeof openLogin === "function") openLogin();
      if (typeof showAuthMode === "function") showAuthMode("login");
    },
    "/register": function () {
      if (typeof openLogin === "function") openLogin();
      if (typeof showAuthMode === "function") showAuthMode("register");
    },
    "/forgot-password": function () {
      if (typeof forgotPass === "function") forgotPass();
    },
    "/profile": function () {
      if (typeof goProfile === "function") goProfile("profil");
    },
    "/settings": function () {
      if (typeof goProfile === "function") goProfile("setari");
    },
    "/admin": function () {
      if (typeof toggleAdmin === "function") toggleAdmin();
    },
  };

  function closeAllOverlays() {
    ["closeForgotModal", "closeAdmin", "closeLogin", "closeProfile", "closeSystemsPage", "closeFeaturesPage"].forEach(
      function (fn) {
        try {
          if (typeof window[fn] === "function") window[fn]();
        } catch (e) {}
      }
    );
  }

  function normalize(p) {
    if (!p) return "/";
    p = p.replace(/\/index\.html?$/i, "/");
    if (p.length > 1) p = p.replace(/\/+$/, "");
    return p || "/";
  }

  function dispatch(path, fromPop) {
    path = normalize(path);
    _nav = true;
    try {
      if (fromPop) closeAllOverlays();
      var op = OPEN[path];
      if (op) op();
    } finally {
      _nav = false;
    }
    if (!fromPop) {
      var cp = currentPath();
      if (cp === null) return;
      if (cp !== window.location.pathname) {
        try {
          history.replaceState({ bx: 1 }, "", cp);
        } catch (e) {}
      }
    }
  }

  function wrap(name, replace) {
    var orig = window[name];
    if (typeof orig !== "function") return;
    window[name] = function () {
      var r = orig.apply(this, arguments);
      syncPath(replace);
      return r;
    };
  }

  [
    "openSystemsPage",
    "closeSystemsPage",
    "openFeaturesPage",
    "closeFeaturesPage",
    "openLogin",
    "closeLogin",
    "forgotPass",
    "closeForgotModal",
    "goProfile",
    "closeProfile",
    "toggleAdmin",
    "closeAdmin",
    "showHome",
  ].forEach(function (n) {
    wrap(n, false);
  });
  ["showAuthMode", "switchProfileTab"].forEach(function (n) {
    wrap(n, true);
  });

  window.addEventListener("popstate", function () {
    dispatch(window.location.pathname, true);
  });

  function initRoute() {
    if (recoveryActive()) return;
    dispatch(window.location.pathname, false);
  }

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  ready(function () {
    setTimeout(initRoute, 450);
  });
})();
