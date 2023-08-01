(function(){
"use strict";
"use strict";

var y = function y() {
  var r = document.createElement("link").relList;if (r && r.supports && r.supports("modulepreload")) return;var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll('link[rel="modulepreload"]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var t = _step.value;
      i(t);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  new MutationObserver(function (t) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = t[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var e = _step2.value;
        if (e.type === "childList") {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = e.addedNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _u = _step3.value;
              _u.tagName === "LINK" && _u.rel === "modulepreload" && i(_u);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }).observe(document, { childList: !0, subtree: !0 });function o(t) {
    var e = {};return t.integrity && (e.integrity = t.integrity), t.referrerpolicy && (e.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? e.credentials = "include" : t.crossorigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e;
  }function i(t) {
    if (t.ep) return;t.ep = !0;var e = o(t);fetch(t.href, e);
  }
};y();var A = document.querySelectorAll(".accordion__button");A.forEach(function (n) {
  n.addEventListener("click", function () {
    var r = n.parentNode.nextElementSibling;n.setAttribute("aria-expanded", n.getAttribute("aria-expanded") === "false" ? "true" : "false"), r.hidden = !r.hidden;
  });
});var m = document.querySelector(".nav-toggle"),
    g = document.getElementById("mobile-close"),
    c = document.querySelector(".nav-mobile");m.addEventListener("click", function () {
  m.setAttribute("aria-expanded", !0), c.toggleAttribute("hidden", !1), c.setAttribute("aria-hidden", !1);
});g.addEventListener("click", function () {
  m.setAttribute("aria-expanded", !1), c.toggleAttribute("hidden", !0), c.setAttribute("aria-hidden", !0);
});var v = document.querySelector(".nav-secondary"),
    p = v.querySelector(".nav"),
    f = p.querySelectorAll(".nav-item"),
    h = v.querySelector(".nav-more"),
    l = h.querySelector(".nav-item--more"),
    s = l.querySelector(".nav-item--more_link"),
    d = l.querySelector(".more-menu"),
    a = [];function L(n) {
  n.preventDefault(), s.classList.contains("open") ? (d.classList.add("hidden"), s.classList.remove("open"), s.setAttribute("aria-expanded", !1), s.setAttribute("aria-label", "More"), d.setAttribute("aria-hidden", !0)) : (d.classList.remove("hidden"), s.classList.add("open"), s.setAttribute("aria-expanded", !0), s.setAttribute("aria-label", "Less"), d.setAttribute("aria-hidden", !1));
}function b() {
  var n = window.innerWidth,
      r = Array.from(f).reduce(function (o, i) {
    return o + i.offsetWidth;
  }, 0);if (n < r + l.offsetWidth) {
    var o = p.offsetWidth - l.offsetWidth,
        i = Array.from(f).filter(function (e) {
      return e.offsetLeft + e.offsetWidth <= o;
    });Array.from(f).filter(function (e) {
      return !i.includes(e);
    }).forEach(function (e) {
      d.appendChild(e), a.push(e);
    });
  } else a.reverse().forEach(function (o) {
    p.appendChild(o);
  }), a.length = 0;a.length ? h.removeAttribute("hidden") : h.setAttribute("hidden", !0);
}b();function x(n, r) {
  var o = void 0;return function () {
    var i = this,
        t = arguments;clearTimeout(o), o = setTimeout(function () {
      n.apply(i, t);
    }, r);
  };
}window.addEventListener("resize", x(b, 250));s.addEventListener("click", L);
})();