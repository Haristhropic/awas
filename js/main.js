/* ==========================================================================
   THE LIVING ATELIER — MOTION, ARRIVALS, LIVE REQUEST
   ========================================================================== */
(function () {
  'use strict';
  var doc = document;
  doc.documentElement.classList.add('js');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn) {
    if (doc.readyState !== 'loading') fn();
    else doc.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    /* Hero shutter */
    var shutters = [].slice.call(doc.querySelectorAll('.shutter'));
    if (!reduce) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          shutters.forEach(function (s) { s.classList.add('ready'); });
        });
      });
    } else {
      shutters.forEach(function (s) { s.classList.add('ready'); });
    }

    /* Scroll arrivals */
    var targets = [].slice.call(doc.querySelectorAll('[data-arrive]'));
    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.classList.add('arrived'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('arrived');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
      targets.forEach(function (t) { io.observe(t); });
    }

    /* Live request router */
    var run = doc.getElementById('run-request');
    var op = doc.getElementById('op');
    var out = doc.getElementById('request-path');
    if (run && op && out) {
      run.addEventListener('click', function () {
        var read = op.value === 'read';
        var stages = read
          ? ['Ingress', 'Runtime', 'Cache (hit)']
          : ['Ingress', 'Runtime', 'Cache (miss)', 'Storage'];
        out.innerHTML = '';
        stages.forEach(function (s, i) {
          var li = doc.createElement('li');
          li.textContent = (i + 1) + '. ' + s;
          li.style.transitionDelay = (i * 60) + 'ms';
          out.appendChild(li);
        });
      });
    }
  });
})();
