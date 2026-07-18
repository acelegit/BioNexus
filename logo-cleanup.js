(function () {
  function removeDarkBg(d, threshold, softness) {
    for (var i = 0; i < d.length; i += 4) {
      var maxC = Math.max(d[i], d[i + 1], d[i + 2]);
      if (maxC <= threshold) d[i + 3] = 0;
      else if (maxC < softness)
        d[i + 3] = Math.round(((maxC - threshold) / (softness - threshold)) * 255);
    }
  }
  function removeLightBg(d, threshold, softness) {
    for (var i = 0; i < d.length; i += 4) {
      var r = d[i],
        g = d[i + 1],
        b = d[i + 2];
      var minC = Math.min(r, g, b);
      var avg = (r + g + b) / 3;
      if (minC >= threshold && avg >= threshold) d[i + 3] = 0;
      else if (minC > softness && avg > softness) {
        var k = (minC - softness) / (threshold - softness);
        d[i + 3] = Math.round(d[i + 3] * (1 - k));                                
      } 
    }
  }
  function process(img, mode, onDone) {
    try {
      var c = document.createElement("canvas");
      c.width = img.naturalWidth || img.width;
      c.height = img.naturalHeight || img.height;
      if (!c.width || !c.height) {
        onDone && onDone();
        return false;
      }
      var ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var imgData = ctx.getImageData(0, 0, c.width, c.height);
      if (mode === "light") removeLightBg(imgData.data, 240, 215);
      else if (mode === "white-strict") removeLightBg(imgData.data, 248, 240);
      else if (mode === "none") {
        onDone && onDone();
        return false;
      } else removeDarkBg(imgData.data, 30, 60);
      ctx.putImageData(imgData, 0, 0);
      var newSrc = c.toDataURL("image/png");
      var decoded = false;
      function settle() {
        if (decoded) return;
        decoded = true;
        onDone && onDone();
      }
      img.addEventListener("load", settle, { once: true });
      img.addEventListener("error", settle, { once: true });
      img.src = newSrc;
      setTimeout(settle, 1500);
      return true;
    } catch (e) {
      console.warn("Bg removal skipped for", img.src, e.message);
      onDone && onDone();
      return false;
    }
  }
  var pendingCount = 0,
    initialized = false;
  function bump() {
    pendingCount++;
  }
  function done() {
    pendingCount--;
    if (initialized && pendingCount <= 0) {
      if (typeof window.__appReady === "function") window.__appReady("cleanup");
    }
  }
  function whenReadyTracked(img, mode) {
    if (!img) return;
    bump();
    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      img.classList.add("cleaned");
      done();
    }
    var run = function () {
      if (img.dataset.cleanedDone === "1") {
        finish();
        return;
      }
      img.dataset.cleanedDone = "1";
      process(img, mode, function () {
        finish();
      });
    };
    if (img.complete && img.naturalWidth) run();
    else {
      img.addEventListener("load", run, { once: true });
      img.addEventListener("error", finish, { once: true });
    }
    setTimeout(finish, 4000);
  }
  function init() {
    var sun = document.querySelector(".solar-sun");
    if (sun) whenReadyTracked(sun, "dark");
    document
      .querySelectorAll('img[data-clean-bg]:not([data-clean-bg="checkerboard"])')
      .forEach(function (img) {
        whenReadyTracked(img, img.getAttribute("data-clean-bg"));
      });
    initialized = true;
    if (pendingCount <= 0 && typeof window.__appReady === "function") window.__appReady("cleanup");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
