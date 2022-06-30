"use strict";
var n = Object.create;
var e = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var a = Object.getPrototypeOf,
  d = Object.prototype.hasOwnProperty;
var m = (o, p) => {
    for (var r in p) e(o, r, { get: p[r], enumerable: !0 });
  },
  i = (o, p, r, c) => {
    if ((p && typeof p == "object") || typeof p == "function")
      for (let t of l(p))
        !d.call(o, t) &&
          t !== r &&
          e(o, t, {
            get: () => p[t],
            enumerable: !(c = f(p, t)) || c.enumerable,
          });
    return o;
  };
var P = (o, p, r) => (
    (r = o != null ? n(a(o)) : {}),
    i(
      p || !o || !o.__esModule
        ? e(r, "default", { value: o, enumerable: !0 })
        : r,
      o
    )
  ),
  g = (o) => i(e({}, "__esModule", { value: !0 }), o);
var x = {};
m(x, { default: () => u });
module.exports = g(x);
var s = P(require("react")),
  k = (o) => s.default.createElement(s.default.Fragment, null, "ok"),
  u = k;
//# sourceMappingURL=index.cjs.js.map
