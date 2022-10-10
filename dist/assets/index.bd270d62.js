const ic = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
};
ic();
function oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Re = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  cc = Symbol.for("react.profiler"),
  fc = Symbol.for("react.provider"),
  dc = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  hc = Symbol.for("react.memo"),
  vc = Symbol.for("react.lazy"),
  jo = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jo && e[jo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gu = Object.assign,
  Zu = {};
function ot(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Zu),
    (this.updater = t || Xu);
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = ot.prototype;
function Vi(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Zu),
    (this.updater = t || Xu);
}
var Bi = (Vi.prototype = new Ju());
Bi.constructor = Vi;
Gu(Bi, ot.prototype);
Bi.isPureReactComponent = !0;
var Uo = Array.isArray,
  qu = Object.prototype.hasOwnProperty,
  Hi = { current: null },
  bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      qu.call(n, r) && !bu.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gt,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Hi.current,
  };
}
function gc(e, n) {
  return {
    $$typeof: Gt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var $o = /\/+/g;
function El(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? wc("" + e.key)
    : n.toString(36);
}
function wr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gt:
          case uc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + El(o, 0) : r),
      Uo(l)
        ? ((t = ""),
          e != null && (t = e.replace($o, "$&/") + "/"),
          wr(l, n, t, "", function (f) {
            return f;
          }))
        : l != null &&
          (Wi(l) &&
            (l = gc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace($o, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Uo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + El(i, u);
      o += wr(i, n, t, s, l);
    }
  else if (((s = yc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + El(i, u++)), (o += wr(i, n, t, s, l));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function tr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function Sc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Sr = { transition: null },
  kc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Sr,
    ReactCurrentOwner: Hi,
  };
M.Children = {
  map: tr,
  forEach: function (e, n, t) {
    tr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      tr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = ot;
M.Fragment = sc;
M.Profiler = cc;
M.PureComponent = Vi;
M.StrictMode = ac;
M.Suspense = mc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
M.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = Hi.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      qu.call(n, s) &&
        !bu.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: dc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fc, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = es;
M.createFactory = function (e) {
  var n = es.bind(null, e);
  return (n.type = e), n;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: pc, render: e };
};
M.isValidElement = Wi;
M.lazy = function (e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: Sc };
};
M.memo = function (e, n) {
  return { $$typeof: hc, type: e, compare: n === void 0 ? null : n };
};
M.startTransition = function (e) {
  var n = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = n;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, n) {
  return se.current.useCallback(e, n);
};
M.useContext = function (e) {
  return se.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
M.useEffect = function (e, n) {
  return se.current.useEffect(e, n);
};
M.useId = function () {
  return se.current.useId();
};
M.useImperativeHandle = function (e, n, t) {
  return se.current.useImperativeHandle(e, n, t);
};
M.useInsertionEffect = function (e, n) {
  return se.current.useInsertionEffect(e, n);
};
M.useLayoutEffect = function (e, n) {
  return se.current.useLayoutEffect(e, n);
};
M.useMemo = function (e, n) {
  return se.current.useMemo(e, n);
};
M.useReducer = function (e, n, t) {
  return se.current.useReducer(e, n, t);
};
M.useRef = function (e) {
  return se.current.useRef(e);
};
M.useState = function (e) {
  return se.current.useState(e);
};
M.useSyncExternalStore = function (e, n, t) {
  return se.current.useSyncExternalStore(e, n, t);
};
M.useTransition = function () {
  return se.current.useTransition();
};
M.version = "18.2.0";
(function (e) {
  e.exports = M;
})(Re);
const Ec = oc(Re.exports);
var Xl = {},
  ns = { exports: {} },
  we = {},
  ts = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(x, z) {
    var T = x.length;
    x.push(z);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        Z = x[Q];
      if (0 < l(Z, z)) (x[Q] = z), (x[T] = Z), (T = Q);
      else break e;
    }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var z = x[0],
      T = x.pop();
    if (T !== z) {
      x[0] = T;
      e: for (var Q = 0, Z = x.length, er = Z >>> 1; Q < er; ) {
        var gn = 2 * (Q + 1) - 1,
          kl = x[gn],
          wn = gn + 1,
          nr = x[wn];
        if (0 > l(kl, T))
          wn < Z && 0 > l(nr, kl)
            ? ((x[Q] = nr), (x[wn] = T), (Q = wn))
            : ((x[Q] = kl), (x[gn] = T), (Q = gn));
        else if (wn < Z && 0 > l(nr, T)) (x[Q] = nr), (x[wn] = T), (Q = wn);
        else break e;
      }
    }
    return z;
  }
  function l(x, z) {
    var T = x.sortIndex - z.sortIndex;
    return T !== 0 ? T : x.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    f = [],
    h = 1,
    p = null,
    m = 3,
    g = !1,
    S = !1,
    w = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = t(f); z !== null; ) {
      if (z.callback === null) r(f);
      else if (z.startTime <= x)
        r(f), (z.sortIndex = z.expirationTime), n(s, z);
      else break;
      z = t(f);
    }
  }
  function v(x) {
    if (((w = !1), d(x), !S))
      if (t(s) !== null) (S = !0), wl(E);
      else {
        var z = t(f);
        z !== null && Sl(v, z.startTime - x);
      }
  }
  function E(x, z) {
    (S = !1), w && ((w = !1), c(N), (N = -1)), (g = !0);
    var T = m;
    try {
      for (
        d(z), p = t(s);
        p !== null && (!(p.expirationTime > z) || (x && !Pe()));

      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Z = Q(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === t(s) && r(s),
            d(z);
        } else r(s);
        p = t(s);
      }
      if (p !== null) var er = !0;
      else {
        var gn = t(f);
        gn !== null && Sl(v, gn.startTime - z), (er = !1);
      }
      return er;
    } finally {
      (p = null), (m = T), (g = !1);
    }
  }
  var C = !1,
    _ = null,
    N = -1,
    W = 5,
    R = -1;
  function Pe() {
    return !(e.unstable_now() - R < W);
  }
  function at() {
    if (_ !== null) {
      var x = e.unstable_now();
      R = x;
      var z = !0;
      try {
        z = _(!0, x);
      } finally {
        z ? ct() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var ct;
  if (typeof a == "function")
    ct = function () {
      a(at);
    };
  else if (typeof MessageChannel < "u") {
    var Io = new MessageChannel(),
      lc = Io.port2;
    (Io.port1.onmessage = at),
      (ct = function () {
        lc.postMessage(null);
      });
  } else
    ct = function () {
      L(at, 0);
    };
  function wl(x) {
    (_ = x), C || ((C = !0), ct());
  }
  function Sl(x, z) {
    N = L(function () {
      x(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), wl(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (x) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var T = m;
      m = z;
      try {
        return x();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, z) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var T = m;
      m = x;
      try {
        return z();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (x, z, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? Q + T : Q))
          : (T = Q),
        x)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (x = {
          id: h++,
          callback: z,
          priorityLevel: x,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > Q
          ? ((x.sortIndex = T),
            n(f, x),
            t(s) === null &&
              x === t(f) &&
              (w ? (c(N), (N = -1)) : (w = !0), Sl(v, T - Q)))
          : ((x.sortIndex = Z), n(s, x), S || g || ((S = !0), wl(E))),
        x
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (x) {
      var z = m;
      return function () {
        var T = m;
        m = z;
        try {
          return x.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(rs);
(function (e) {
  e.exports = rs;
})(ts);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ls = Re.exports,
  ge = ts.exports;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  Rt = {};
function Rn(e, n) {
  bn(e, n), bn(e + "Capture", n);
}
function bn(e, n) {
  for (Rt[e] = n, e = 0; e < n.length; e++) is.add(n[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  xc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ao = {},
  Vo = {};
function Cc(e) {
  return Gl.call(Vo, e)
    ? !0
    : Gl.call(Ao, e)
    ? !1
    : xc.test(e)
    ? (Vo[e] = !0)
    : ((Ao[e] = !0), !1);
}
function _c(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nc(e, n, t, r) {
  if (n === null || typeof n > "u" || _c(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ae(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ne[n] = new ae(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ne[n] = new ae(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Qi, Ki);
  ne[n] = new ae(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, n, t, r) {
  var l = ne.hasOwnProperty(n) ? ne[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Nc(n, t, l, r) && (t = null),
    r || l === null
      ? Cc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ze = ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Fn = Symbol.for("react.portal"),
  In = Symbol.for("react.fragment"),
  Xi = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  Gi = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Zi = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  ss = Symbol.for("react.offscreen"),
  Bo = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bo && e[Bo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  xl;
function wt(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      xl = (n && n[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var Cl = !1;
function _l(e, n) {
  if (!e || Cl) return "";
  Cl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (f) {
          r = f;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Pc(e) {
  switch (e.tag) {
    case 5:
      return wt(e.type);
    case 16:
      return wt("Lazy");
    case 13:
      return wt("Suspense");
    case 19:
      return wt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case Fn:
      return "Portal";
    case Zl:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case us:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Gi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zi:
        return (
          (n = e.displayName || null), n !== null ? n : bl(e.type) || "Memo"
        );
      case qe:
        (n = e._payload), (e = e._init);
        try {
          return bl(e(n));
        } catch {}
    }
  return null;
}
function zc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(n);
    case 8:
      return n === Xi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function as(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Tc(e) {
  var n = as(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Tc(e));
}
function cs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Mr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, n) {
  var t = n.checked;
  return B({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t != null ? t : e._wrapperState.initialChecked,
  });
}
function Ho(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = pn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function fs(e, n) {
  (n = n.checked), n != null && Yi(e, "checked", n, !1);
}
function ni(e, n) {
  fs(e, n);
  var t = pn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? ti(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ti(e, n.type, pn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Wo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function ti(e, n, t) {
  (n !== "number" || Mr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Yn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ri(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qo(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (St(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: pn(t) };
}
function ds(e, n) {
  var t = pn(n.value),
    r = pn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Ko(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ps(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function li(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ps(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  ms = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Ot(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Lc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xt).forEach(function (e) {
  Lc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
  });
});
function hs(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (xt.hasOwnProperty(e) && xt[e])
    ? ("" + n).trim()
    : n + "px";
}
function vs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = hs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Mc = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ii(e, n) {
  if (n) {
    if (Mc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function oi(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Xn = null,
  Gn = null;
function Yo(e) {
  if ((e = qt(e))) {
    if (typeof si != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = ol(n)), si(e.stateNode, e.type, n));
  }
}
function ys(e) {
  Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function gs() {
  if (Xn) {
    var e = Xn,
      n = Gn;
    if (((Gn = Xn = null), Yo(e), n)) for (e = 0; e < n.length; e++) Yo(n[e]);
  }
}
function ws(e, n) {
  return e(n);
}
function Ss() {}
var Nl = !1;
function ks(e, n, t) {
  if (Nl) return e(n, t);
  Nl = !0;
  try {
    return ws(e, n, t);
  } finally {
    (Nl = !1), (Xn !== null || Gn !== null) && (Ss(), gs());
  }
}
function Dt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = ol(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var ai = !1;
if (Ke)
  try {
    var dt = {};
    Object.defineProperty(dt, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", dt, dt),
      window.removeEventListener("test", dt, dt);
  } catch {
    ai = !1;
  }
function Rc(e, n, t, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, f);
  } catch (h) {
    this.onError(h);
  }
}
var Ct = !1,
  Rr = null,
  Or = !1,
  ci = null,
  Oc = {
    onError: function (e) {
      (Ct = !0), (Rr = e);
    },
  };
function Dc(e, n, t, r, l, i, o, u, s) {
  (Ct = !1), (Rr = null), Rc.apply(Oc, arguments);
}
function Fc(e, n, t, r, l, i, o, u, s) {
  if ((Dc.apply(this, arguments), Ct)) {
    if (Ct) {
      var f = Rr;
      (Ct = !1), (Rr = null);
    } else throw Error(y(198));
    Or || ((Or = !0), (ci = f));
  }
}
function On(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), (n.flags & 4098) !== 0 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Es(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Xo(e) {
  if (On(e) !== e) throw Error(y(188));
}
function Ic(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = On(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Xo(l), e;
        if (i === r) return Xo(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function xs(e) {
  return (e = Ic(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Cs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var _s = ge.unstable_scheduleCallback,
  Go = ge.unstable_cancelCallback,
  jc = ge.unstable_shouldYield,
  Uc = ge.unstable_requestPaint,
  K = ge.unstable_now,
  $c = ge.unstable_getCurrentPriorityLevel,
  qi = ge.unstable_ImmediatePriority,
  Ns = ge.unstable_UserBlockingPriority,
  Dr = ge.unstable_NormalPriority,
  Ac = ge.unstable_LowPriority,
  Ps = ge.unstable_IdlePriority,
  tl = null,
  $e = null;
function Vc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Wc,
  Bc = Math.log,
  Hc = Math.LN2;
function Wc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bc(e) / Hc) | 0)) | 0;
}
var or = 64,
  ur = 4194304;
function kt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = kt(u)) : ((i &= o), i !== 0 && (r = kt(i)));
  } else (o = t & ~l), o !== 0 ? (r = kt(o)) : i !== 0 && (r = kt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    (n & l) === 0 &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if (((r & 4) !== 0 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Oe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function Qc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kc(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? ((u & t) === 0 || (u & r) !== 0) && (l[o] = Qc(u, n))
      : s <= n && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zs() {
  var e = or;
  return (or <<= 1), (or & 4194240) === 0 && (or = 64), e;
}
function Pl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Oe(n)),
    (e[n] = t);
}
function Yc(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Oe(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function bi(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Oe(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var D = 0;
function Ts(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Ls,
  eo,
  Ms,
  Rs,
  Os,
  di = !1,
  sr = [],
  ln = null,
  on = null,
  un = null,
  Ft = new Map(),
  It = new Map(),
  en = [],
  Xc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zo(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      Ft.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      It.delete(n.pointerId);
  }
}
function pt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = qt(n)), n !== null && eo(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function Gc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (ln = pt(ln, e, n, t, r, l)), !0;
    case "dragenter":
      return (on = pt(on, e, n, t, r, l)), !0;
    case "mouseover":
      return (un = pt(un, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Ft.set(i, pt(Ft.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), It.set(i, pt(It.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Ds(e) {
  var n = En(e.target);
  if (n !== null) {
    var t = On(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Es(t)), n !== null)) {
          (e.blockedOn = n),
            Os(e.priority, function () {
              Ms(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = pi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ui = r), t.target.dispatchEvent(r), (ui = null);
    } else return (n = qt(t)), n !== null && eo(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Jo(e, n, t) {
  kr(e) && t.delete(n);
}
function Zc() {
  (di = !1),
    ln !== null && kr(ln) && (ln = null),
    on !== null && kr(on) && (on = null),
    un !== null && kr(un) && (un = null),
    Ft.forEach(Jo),
    It.forEach(Jo);
}
function mt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Zc)));
}
function jt(e) {
  function n(l) {
    return mt(l, e);
  }
  if (0 < sr.length) {
    mt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && mt(ln, e),
      on !== null && mt(on, e),
      un !== null && mt(un, e),
      Ft.forEach(n),
      It.forEach(n),
      t = 0;
    t < en.length;
    t++
  )
    (r = en[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
    Ds(t), t.blockedOn === null && en.shift();
}
var Zn = Ze.ReactCurrentBatchConfig,
  Ir = !0;
function Jc(e, n, t, r) {
  var l = D,
    i = Zn.transition;
  Zn.transition = null;
  try {
    (D = 1), no(e, n, t, r);
  } finally {
    (D = l), (Zn.transition = i);
  }
}
function qc(e, n, t, r) {
  var l = D,
    i = Zn.transition;
  Zn.transition = null;
  try {
    (D = 4), no(e, n, t, r);
  } finally {
    (D = l), (Zn.transition = i);
  }
}
function no(e, n, t, r) {
  if (Ir) {
    var l = pi(e, n, t, r);
    if (l === null) jl(e, n, r, jr, t), Zo(e, r);
    else if (Gc(l, e, n, t, r)) r.stopPropagation();
    else if ((Zo(e, r), n & 4 && -1 < Xc.indexOf(e))) {
      for (; l !== null; ) {
        var i = qt(l);
        if (
          (i !== null && Ls(i),
          (i = pi(e, n, t, r)),
          i === null && jl(e, n, r, jr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else jl(e, n, r, null, t);
  }
}
var jr = null;
function pi(e, n, t, r) {
  if (((jr = null), (e = Ji(r)), (e = En(e)), e !== null))
    if (((n = On(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Es(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (jr = e), null;
}
function Fs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($c()) {
        case qi:
          return 1;
        case Ns:
          return 4;
        case Dr:
        case Ac:
          return 16;
        case Ps:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  to = null,
  Er = null;
function Is() {
  if (Er) return Er;
  var e,
    n = to,
    t = n.length,
    r,
    l = "value" in tn ? tn.value : tn.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function xr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function qo() {
  return !1;
}
function Se(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ar
        : qo),
      (this.isPropagationStopped = qo),
      this
    );
  }
  return (
    B(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    n
  );
}
var ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = Se(ut),
  Jt = B({}, ut, { view: 0, detail: 0 }),
  bc = Se(Jt),
  zl,
  Tl,
  ht,
  rl = B({}, Jt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ht &&
            (ht && e.type === "mousemove"
              ? ((zl = e.screenX - ht.screenX), (Tl = e.screenY - ht.screenY))
              : (Tl = zl = 0),
            (ht = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tl;
    },
  }),
  bo = Se(rl),
  ef = B({}, rl, { dataTransfer: 0 }),
  nf = Se(ef),
  tf = B({}, Jt, { relatedTarget: 0 }),
  Ll = Se(tf),
  rf = B({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lf = Se(rf),
  of = B({}, ut, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uf = Se(of),
  sf = B({}, ut, { data: 0 }),
  eu = Se(sf),
  af = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ff = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function df(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = ff[e]) ? !!n[e] : !1;
}
function lo() {
  return df;
}
var pf = B({}, Jt, {
    key: function (e) {
      if (e.key) {
        var n = af[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = xr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? cf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? xr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? xr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mf = Se(pf),
  hf = B({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nu = Se(hf),
  vf = B({}, Jt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  yf = Se(vf),
  gf = B({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wf = Se(gf),
  Sf = B({}, rl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  kf = Se(Sf),
  Ef = [9, 13, 27, 32],
  io = Ke && "CompositionEvent" in window,
  _t = null;
Ke && "documentMode" in document && (_t = document.documentMode);
var xf = Ke && "TextEvent" in window && !_t,
  js = Ke && (!io || (_t && 8 < _t && 11 >= _t)),
  tu = String.fromCharCode(32),
  ru = !1;
function Us(e, n) {
  switch (e) {
    case "keyup":
      return Ef.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $s(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function Cf(e, n) {
  switch (e) {
    case "compositionend":
      return $s(n);
    case "keypress":
      return n.which !== 32 ? null : ((ru = !0), tu);
    case "textInput":
      return (e = n.data), e === tu && ru ? null : e;
    default:
      return null;
  }
}
function _f(e, n) {
  if (jn)
    return e === "compositionend" || (!io && Us(e, n))
      ? ((e = Is()), (Er = to = tn = null), (jn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return js && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Nf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function lu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Nf[e.type] : n === "textarea";
}
function As(e, n, t, r) {
  ys(r),
    (n = Ur(n, "onChange")),
    0 < n.length &&
      ((t = new ro("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Nt = null,
  Ut = null;
function Pf(e) {
  Js(e, 0);
}
function ll(e) {
  var n = An(e);
  if (cs(n)) return e;
}
function zf(e, n) {
  if (e === "change") return n;
}
var Vs = !1;
if (Ke) {
  var Ml;
  if (Ke) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"),
        (Rl = typeof iu.oninput == "function");
    }
    Ml = Rl;
  } else Ml = !1;
  Vs = Ml && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  Nt && (Nt.detachEvent("onpropertychange", Bs), (Ut = Nt = null));
}
function Bs(e) {
  if (e.propertyName === "value" && ll(Ut)) {
    var n = [];
    As(n, Ut, e, Ji(e)), ks(Pf, n);
  }
}
function Tf(e, n, t) {
  e === "focusin"
    ? (ou(), (Nt = n), (Ut = t), Nt.attachEvent("onpropertychange", Bs))
    : e === "focusout" && ou();
}
function Lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(Ut);
}
function Mf(e, n) {
  if (e === "click") return ll(n);
}
function Rf(e, n) {
  if (e === "input" || e === "change") return ll(n);
}
function Of(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Fe = typeof Object.is == "function" ? Object.is : Of;
function $t(e, n) {
  if (Fe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !Fe(e[l], n[l])) return !1;
  }
  return !0;
}
function uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, n) {
  var t = uu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = uu(t);
  }
}
function Hs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Hs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Ws() {
  for (var e = window, n = Mr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Mr(e.document);
  }
  return n;
}
function oo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Df(e) {
  var n = Ws(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Hs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && oo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = su(t, i));
        var o = su(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ff = Ke && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  mi = null,
  Pt = null,
  hi = !1;
function au(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  hi ||
    Un == null ||
    Un !== Mr(r) ||
    ((r = Un),
    "selectionStart" in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pt && $t(Pt, r)) ||
      ((Pt = r),
      (r = Ur(mi, "onSelect")),
      0 < r.length &&
        ((n = new ro("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Un))));
}
function cr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var $n = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Ol = {},
  Qs = {};
Ke &&
  ((Qs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  "TransitionEvent" in window || delete $n.transitionend.transition);
function il(e) {
  if (Ol[e]) return Ol[e];
  if (!$n[e]) return e;
  var n = $n[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Qs) return (Ol[e] = n[t]);
  return e;
}
var Ks = il("animationend"),
  Ys = il("animationiteration"),
  Xs = il("animationstart"),
  Gs = il("transitionend"),
  Zs = new Map(),
  cu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, n) {
  Zs.set(e, n), Rn(n, [e]);
}
for (var Dl = 0; Dl < cu.length; Dl++) {
  var Fl = cu[Dl],
    If = Fl.toLowerCase(),
    jf = Fl[0].toUpperCase() + Fl.slice(1);
  hn(If, "on" + jf);
}
hn(Ks, "onAnimationEnd");
hn(Ys, "onAnimationIteration");
hn(Xs, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Gs, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Et =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Uf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));
function fu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Fc(r, n, void 0, e), (e.currentTarget = null);
}
function Js(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          fu(l, u, f), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          fu(l, u, f), (i = s);
        }
    }
  }
  if (Or) throw ((e = ci), (Or = !1), (ci = null), e);
}
function I(e, n) {
  var t = n[Si];
  t === void 0 && (t = n[Si] = new Set());
  var r = e + "__bubble";
  t.has(r) || (qs(n, e, 2, !1), t.add(r));
}
function Il(e, n, t) {
  var r = 0;
  n && (r |= 4), qs(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      is.forEach(function (t) {
        t !== "selectionchange" && (Uf.has(t) || Il(t, !1, e), Il(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || ((n[fr] = !0), Il("selectionchange", !1, n));
  }
}
function qs(e, n, t, r) {
  switch (Fs(n)) {
    case 1:
      var l = Jc;
      break;
    case 4:
      l = qc;
      break;
    default:
      l = no;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !ai ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function jl(e, n, t, r, l) {
  var i = r;
  if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = En(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ks(function () {
    var f = i,
      h = Ji(t),
      p = [];
    e: {
      var m = Zs.get(e);
      if (m !== void 0) {
        var g = ro,
          S = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = mf;
            break;
          case "focusin":
            (S = "focus"), (g = Ll);
            break;
          case "focusout":
            (S = "blur"), (g = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = bo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = nf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = yf;
            break;
          case Ks:
          case Ys:
          case Xs:
            g = lf;
            break;
          case Gs:
            g = wf;
            break;
          case "scroll":
            g = bc;
            break;
          case "wheel":
            g = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = nu;
        }
        var w = (n & 4) !== 0,
          L = !w && e === "scroll",
          c = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              c !== null && ((v = Dt(a, c)), v != null && w.push(Vt(a, v, d)))),
            L)
          )
            break;
          a = a.return;
        }
        0 < w.length &&
          ((m = new g(m, S, null, t, h)), p.push({ event: m, listeners: w }));
      }
    }
    if ((n & 7) === 0) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            t !== ui &&
            (S = t.relatedTarget || t.fromElement) &&
            (En(S) || S[Ye]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((S = t.relatedTarget || t.toElement),
              (g = f),
              (S = S ? En(S) : null),
              S !== null &&
                ((L = On(S)), S !== L || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = f)),
          g !== S)
        ) {
          if (
            ((w = bo),
            (v = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = nu),
              (v = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (L = g == null ? m : An(g)),
            (d = S == null ? m : An(S)),
            (m = new w(v, a + "leave", g, t, h)),
            (m.target = L),
            (m.relatedTarget = d),
            (v = null),
            En(h) === f &&
              ((w = new w(c, a + "enter", S, t, h)),
              (w.target = d),
              (w.relatedTarget = L),
              (v = w)),
            (L = v),
            g && S)
          )
            n: {
              for (w = g, c = S, a = 0, d = w; d; d = Dn(d)) a++;
              for (d = 0, v = c; v; v = Dn(v)) d++;
              for (; 0 < a - d; ) (w = Dn(w)), a--;
              for (; 0 < d - a; ) (c = Dn(c)), d--;
              for (; a--; ) {
                if (w === c || (c !== null && w === c.alternate)) break n;
                (w = Dn(w)), (c = Dn(c));
              }
              w = null;
            }
          else w = null;
          g !== null && du(p, m, g, w, !1),
            S !== null && L !== null && du(p, L, S, w, !0);
        }
      }
      e: {
        if (
          ((m = f ? An(f) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var E = zf;
        else if (lu(m))
          if (Vs) E = Rf;
          else {
            E = Lf;
            var C = Tf;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Mf);
        if (E && (E = E(e, f))) {
          As(p, E, t, h);
          break e;
        }
        C && C(e, m, f),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            ti(m, "number", m.value);
      }
      switch (((C = f ? An(f) : window), e)) {
        case "focusin":
          (lu(C) || C.contentEditable === "true") &&
            ((Un = C), (mi = f), (Pt = null));
          break;
        case "focusout":
          Pt = mi = Un = null;
          break;
        case "mousedown":
          hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hi = !1), au(p, t, h);
          break;
        case "selectionchange":
          if (Ff) break;
        case "keydown":
        case "keyup":
          au(p, t, h);
      }
      var _;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        jn
          ? Us(e, t) && (N = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (js &&
          t.locale !== "ko" &&
          (jn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && jn && (_ = Is())
            : ((tn = h),
              (to = "value" in tn ? tn.value : tn.textContent),
              (jn = !0))),
        (C = Ur(f, N)),
        0 < C.length &&
          ((N = new eu(N, e, null, t, h)),
          p.push({ event: N, listeners: C }),
          _ ? (N.data = _) : ((_ = $s(t)), _ !== null && (N.data = _)))),
        (_ = xf ? Cf(e, t) : _f(e, t)) &&
          ((f = Ur(f, "onBeforeInput")),
          0 < f.length &&
            ((h = new eu("onBeforeInput", "beforeinput", null, t, h)),
            p.push({ event: h, listeners: f }),
            (h.data = _)));
    }
    Js(p, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Dt(e, t)),
      i != null && r.unshift(Vt(e, i, l)),
      (i = Dt(e, n)),
      i != null && r.push(Vt(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function du(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = Dt(t, i)), s != null && o.unshift(Vt(t, s, u)))
        : l || ((s = Dt(t, i)), s != null && o.push(Vt(t, s, u)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var $f = /\r\n?/g,
  Af = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $f,
      `
`
    )
    .replace(Af, "");
}
function dr(e, n, t) {
  if (((n = pu(n)), pu(e) !== n && t)) throw Error(y(425));
}
function $r() {}
var vi = null,
  yi = null;
function gi(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0,
  Vf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mu = typeof Promise == "function" ? Promise : void 0,
  Bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mu < "u"
      ? function (e) {
          return mu.resolve(null).then(e).catch(Hf);
        }
      : wi;
function Hf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), jt(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  jt(n);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function hu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var st = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + st,
  Bt = "__reactProps$" + st,
  Ye = "__reactContainer$" + st,
  Si = "__reactEvents$" + st,
  Wf = "__reactListeners$" + st,
  Qf = "__reactHandles$" + st;
function En(e) {
  var n = e[Ue];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ye] || t[Ue])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = hu(e); e !== null; ) {
          if ((t = e[Ue])) return t;
          e = hu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function qt(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ol(e) {
  return e[Bt] || null;
}
var ki = [],
  Vn = -1;
function vn(e) {
  return { current: e };
}
function j(e) {
  0 > Vn || ((e.current = ki[Vn]), (ki[Vn] = null), Vn--);
}
function F(e, n) {
  Vn++, (ki[Vn] = e.current), (e.current = n);
}
var mn = {},
  ie = vn(mn),
  de = vn(!1),
  Pn = mn;
function et(e, n) {
  var t = e.type.contextTypes;
  if (!t) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  j(de), j(ie);
}
function vu(e, n, t) {
  if (ie.current !== mn) throw Error(y(168));
  F(ie, n), F(de, t);
}
function bs(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, zc(e) || "Unknown", l));
  return B({}, t, r);
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Pn = ie.current),
    F(ie, e),
    F(de, de.current),
    !0
  );
}
function yu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = bs(e, n, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(de),
      j(ie),
      F(ie, e))
    : j(de),
    F(de, t);
}
var Be = null,
  ul = !1,
  $l = !1;
function ea(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function Kf(e) {
  (ul = !0), ea(e);
}
function yn() {
  if (!$l && Be !== null) {
    $l = !0;
    var e = 0,
      n = D;
    try {
      var t = Be;
      for (D = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (ul = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), _s(qi, yn), l);
    } finally {
      (D = n), ($l = !1);
    }
  }
  return null;
}
var Bn = [],
  Hn = 0,
  Br = null,
  Hr = 0,
  ke = [],
  Ee = 0,
  zn = null,
  He = 1,
  We = "";
function Sn(e, n) {
  (Bn[Hn++] = Hr), (Bn[Hn++] = Br), (Br = e), (Hr = n);
}
function na(e, n, t) {
  (ke[Ee++] = He), (ke[Ee++] = We), (ke[Ee++] = zn), (zn = e);
  var r = He;
  e = We;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Oe(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Oe(n) + l)) | (t << l) | r),
      (We = i + e);
  } else (He = (1 << i) | (t << l) | r), (We = e);
}
function uo(e) {
  e.return !== null && (Sn(e, 1), na(e, 1, 0));
}
function so(e) {
  for (; e === Br; )
    (Br = Bn[--Hn]), (Bn[Hn] = null), (Hr = Bn[--Hn]), (Bn[Hn] = null);
  for (; e === zn; )
    (zn = ke[--Ee]),
      (ke[Ee] = null),
      (We = ke[--Ee]),
      (ke[Ee] = null),
      (He = ke[--Ee]),
      (ke[Ee] = null);
}
var ye = null,
  ve = null,
  U = !1,
  Me = null;
function ta(e, n) {
  var t = xe(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function gu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ye = e), (ve = sn(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = zn !== null ? { id: He, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = xe(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (U) {
    var n = ve;
    if (n) {
      var t = n;
      if (!gu(e, n)) {
        if (Ei(e)) throw Error(y(418));
        n = sn(t.nextSibling);
        var r = ye;
        n && gu(e, n)
          ? ta(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e));
      }
    } else {
      if (Ei(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ye = e);
    }
  }
}
function wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function pr(e) {
  if (e !== ye) return !1;
  if (!U) return wu(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !gi(e.type, e.memoizedProps))),
    n && (n = ve))
  ) {
    if (Ei(e)) throw (ra(), Error(y(418)));
    for (; n; ) ta(e, n), (n = sn(n.nextSibling));
  }
  if ((wu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ve = sn(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = ve; e; ) e = sn(e.nextSibling);
}
function nt() {
  (ve = ye = null), (U = !1);
}
function ao(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var Yf = Ze.ReactCurrentBatchConfig;
function Te(e, n) {
  if (e && e.defaultProps) {
    (n = B({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Wr = vn(null),
  Qr = null,
  Wn = null,
  co = null;
function fo() {
  co = Wn = Qr = null;
}
function po(e) {
  var n = Wr.current;
  j(Wr), (e._currentValue = n);
}
function Ci(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Jn(e, n) {
  (Qr = e),
    (co = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & n) !== 0 && (fe = !0), (e.firstContext = null));
}
function _e(e) {
  var n = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Wn === null)) {
      if (Qr === null) throw Error(y(308));
      (Wn = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Wn = Wn.next = e;
  return n;
}
var xn = null;
function mo(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function la(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), mo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Xe(e, r)
  );
}
function Xe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var be = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (O & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Xe(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), mo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Xe(e, t)
  );
}
function Cr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t);
  }
}
function Su(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Kr(e, n, t, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), o === null ? (i = f) : (o.next = f), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = f) : (u.next = f),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (h = f = s = null), (u = i);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            w = u;
          switch (((m = n), (g = t), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                p = S.call(g, p, m);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (m = typeof S == "function" ? S.call(g, p, m) : S),
                m == null)
              )
                break e;
              p = B({}, p, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((f = h = g), (s = p)) : (h = h.next = g),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = h),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Ln |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function ku(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var oa = new ls.Component().refs;
function _i(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : B({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? On(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = fn(e),
      i = Qe(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = an(e, i, l)),
      n !== null && (De(n, e, l, r), Cr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = fn(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = an(e, i, l)),
      n !== null && (De(n, e, l, r), Cr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = ue(),
      r = fn(e),
      l = Qe(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = an(e, l, r)),
      n !== null && (De(n, e, r, t), Cr(n, e, r));
  },
};
function Eu(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !$t(t, r) || !$t(l, i)
      : !0
  );
}
function ua(e, n, t) {
  var r = !1,
    l = mn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = pe(n) ? Pn : ie.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? et(e, l) : mn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = sl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function xu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && sl.enqueueReplaceState(n, n.state, null);
}
function Ni(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = oa), ho(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = pe(n) ? Pn : ie.current), (l.context = et(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (_i(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && sl.enqueueReplaceState(l, l.state, null),
      Kr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            u === oa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cu(e) {
  var n = e._init;
  return n(e._payload);
}
function sa(e) {
  function n(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
    }
  }
  function t(c, a) {
    if (!e) return null;
    for (; a !== null; ) n(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = dn(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function i(c, a, d) {
    return (
      (c.index = d),
      e
        ? ((d = c.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Kl(d, c.mode, v)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function s(c, a, d, v) {
    var E = d.type;
    return E === In
      ? h(c, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            Cu(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = vt(c, a, d)), (v.return = c), v)
      : ((v = Lr(d.type, d.key, d.props, null, c.mode, v)),
        (v.ref = vt(c, a, d)),
        (v.return = c),
        v);
  }
  function f(c, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Yl(d, c.mode, v)), (a.return = c), a)
      : ((a = l(a, d.children || [])), (a.return = c), a);
  }
  function h(c, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Nn(d, c.mode, v, E)), (a.return = c), a)
      : ((a = l(a, d)), (a.return = c), a);
  }
  function p(c, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Kl("" + a, c.mode, d)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = Lr(a.type, a.key, a.props, null, c.mode, d)),
            (d.ref = vt(c, null, a)),
            (d.return = c),
            d
          );
        case Fn:
          return (a = Yl(a, c.mode, d)), (a.return = c), a;
        case qe:
          var v = a._init;
          return p(c, v(a._payload), d);
      }
      if (St(a) || ft(a))
        return (a = Nn(a, c.mode, d, null)), (a.return = c), a;
      mr(c, a);
    }
    return null;
  }
  function m(c, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(c, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(c, a, d, v) : null;
        case Fn:
          return d.key === E ? f(c, a, d, v) : null;
        case qe:
          return (E = d._init), m(c, a, E(d._payload), v);
      }
      if (St(d) || ft(d)) return E !== null ? null : h(c, a, d, v, null);
      mr(c, d);
    }
    return null;
  }
  function g(c, a, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (c = c.get(d) || null), u(a, c, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return (c = c.get(v.key === null ? d : v.key) || null), s(a, c, v, E);
        case Fn:
          return (c = c.get(v.key === null ? d : v.key) || null), f(a, c, v, E);
        case qe:
          var C = v._init;
          return g(c, a, d, C(v._payload), E);
      }
      if (St(v) || ft(v)) return (c = c.get(d) || null), h(a, c, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function S(c, a, d, v) {
    for (
      var E = null, C = null, _ = a, N = (a = 0), W = null;
      _ !== null && N < d.length;
      N++
    ) {
      _.index > N ? ((W = _), (_ = null)) : (W = _.sibling);
      var R = m(c, _, d[N], v);
      if (R === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && R.alternate === null && n(c, _),
        (a = i(R, a, N)),
        C === null ? (E = R) : (C.sibling = R),
        (C = R),
        (_ = W);
    }
    if (N === d.length) return t(c, _), U && Sn(c, N), E;
    if (_ === null) {
      for (; N < d.length; N++)
        (_ = p(c, d[N], v)),
          _ !== null &&
            ((a = i(_, a, N)), C === null ? (E = _) : (C.sibling = _), (C = _));
      return U && Sn(c, N), E;
    }
    for (_ = r(c, _); N < d.length; N++)
      (W = g(_, c, N, d[N], v)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? N : W.key),
          (a = i(W, a, N)),
          C === null ? (E = W) : (C.sibling = W),
          (C = W));
    return (
      e &&
        _.forEach(function (Pe) {
          return n(c, Pe);
        }),
      U && Sn(c, N),
      E
    );
  }
  function w(c, a, d, v) {
    var E = ft(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (E = null), _ = a, N = (a = 0), W = null, R = d.next();
      _ !== null && !R.done;
      N++, R = d.next()
    ) {
      _.index > N ? ((W = _), (_ = null)) : (W = _.sibling);
      var Pe = m(c, _, R.value, v);
      if (Pe === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && Pe.alternate === null && n(c, _),
        (a = i(Pe, a, N)),
        C === null ? (E = Pe) : (C.sibling = Pe),
        (C = Pe),
        (_ = W);
    }
    if (R.done) return t(c, _), U && Sn(c, N), E;
    if (_ === null) {
      for (; !R.done; N++, R = d.next())
        (R = p(c, R.value, v)),
          R !== null &&
            ((a = i(R, a, N)), C === null ? (E = R) : (C.sibling = R), (C = R));
      return U && Sn(c, N), E;
    }
    for (_ = r(c, _); !R.done; N++, R = d.next())
      (R = g(_, c, N, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? N : R.key),
          (a = i(R, a, N)),
          C === null ? (E = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        _.forEach(function (at) {
          return n(c, at);
        }),
      U && Sn(c, N),
      E
    );
  }
  function L(c, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === In &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === In)) {
                  if (C.tag === 7) {
                    t(c, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Cu(E) === C.type)
                ) {
                  t(c, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = vt(c, C, d)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                t(c, C);
                break;
              } else n(c, C);
              C = C.sibling;
            }
            d.type === In
              ? ((a = Nn(d.props.children, c.mode, v, d.key)),
                (a.return = c),
                (c = a))
              : ((v = Lr(d.type, d.key, d.props, null, c.mode, v)),
                (v.ref = vt(c, a, d)),
                (v.return = c),
                (c = v));
          }
          return o(c);
        case Fn:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(c, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  t(c, a);
                  break;
                }
              else n(c, a);
              a = a.sibling;
            }
            (a = Yl(d, c.mode, v)), (a.return = c), (c = a);
          }
          return o(c);
        case qe:
          return (C = d._init), L(c, a, C(d._payload), v);
      }
      if (St(d)) return S(c, a, d, v);
      if (ft(d)) return w(c, a, d, v);
      mr(c, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
          : (t(c, a), (a = Kl(d, c.mode, v)), (a.return = c), (c = a)),
        o(c))
      : t(c, a);
  }
  return L;
}
var tt = sa(!0),
  aa = sa(!1),
  bt = {},
  Ae = vn(bt),
  Ht = vn(bt),
  Wt = vn(bt);
function Cn(e) {
  if (e === bt) throw Error(y(174));
  return e;
}
function vo(e, n) {
  switch ((F(Wt, n), F(Ht, e), F(Ae, bt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = li(n, e));
  }
  j(Ae), F(Ae, n);
}
function rt() {
  j(Ae), j(Ht), j(Wt);
}
function ca(e) {
  Cn(Wt.current);
  var n = Cn(Ae.current),
    t = li(n, e.type);
  n !== t && (F(Ht, e), F(Ae, t));
}
function yo(e) {
  Ht.current === e && (j(Ae), j(Ht));
}
var A = vn(0);
function Yr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if ((n.flags & 128) !== 0) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Al = [];
function go() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var _r = Ze.ReactCurrentDispatcher,
  Vl = Ze.ReactCurrentBatchConfig,
  Tn = 0,
  V = null,
  X = null,
  J = null,
  Xr = !1,
  zt = !1,
  Qt = 0,
  Xf = 0;
function te() {
  throw Error(y(321));
}
function wo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Fe(e[t], n[t])) return !1;
  return !0;
}
function So(e, n, t, r, l, i) {
  if (
    ((Tn = i),
    (V = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? qf : bf),
    (e = t(r, l)),
    zt)
  ) {
    i = 0;
    do {
      if (((zt = !1), (Qt = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (J = X = null),
        (n.updateQueue = null),
        (_r.current = ed),
        (e = t(r, l));
    } while (zt);
  }
  if (
    ((_r.current = Gr),
    (n = X !== null && X.next !== null),
    (Tn = 0),
    (J = X = V = null),
    (Xr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function ko() {
  var e = Qt !== 0;
  return (Qt = 0), e;
}
function je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (V.memoizedState = J = e) : (J = J.next = e), J;
}
function Ne() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var n = J === null ? V.memoizedState : J.next;
  if (n !== null) (J = n), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (V.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Kt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Bl(e) {
  var n = Ne(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      f = i;
    do {
      var h = f.lane;
      if ((Tn & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var p = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (V.lanes |= h),
          (Ln |= h);
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? (o = r) : (s.next = u),
      Fe(r, n.memoizedState) || (fe = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Ln |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = Ne(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Fe(i, n.memoizedState) || (fe = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function fa() {}
function da(e, n) {
  var t = V,
    r = Ne(),
    l = n(),
    i = !Fe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Eo(ha.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Yt(9, ma.bind(null, t, r, l, n), void 0, null),
      q === null)
    )
      throw Error(y(349));
    (Tn & 30) !== 0 || pa(t, n, l);
  }
  return l;
}
function pa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ma(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), va(n) && ya(e);
}
function ha(e, n, t) {
  return t(function () {
    va(n) && ya(e);
  });
}
function va(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Fe(e, t);
  } catch {
    return !0;
  }
}
function ya(e) {
  var n = Xe(e, 1);
  n !== null && De(n, e, 1, -1);
}
function _u(e) {
  var n = je();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = Jf.bind(null, V, e)),
    [n.memoizedState, e]
  );
}
function Yt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ga() {
  return Ne().memoizedState;
}
function Nr(e, n, t, r) {
  var l = je();
  (V.flags |= e),
    (l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r));
}
function al(e, n, t, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && wo(r, o.deps))) {
      l.memoizedState = Yt(n, t, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Yt(1 | n, t, i, r));
}
function Nu(e, n) {
  return Nr(8390656, 8, e, n);
}
function Eo(e, n) {
  return al(2048, 8, e, n);
}
function wa(e, n) {
  return al(4, 2, e, n);
}
function Sa(e, n) {
  return al(4, 4, e, n);
}
function ka(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Ea(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), al(4, 4, ka.bind(null, n, e), t)
  );
}
function xo() {}
function xa(e, n) {
  var t = Ne();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ca(e, n) {
  var t = Ne();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function _a(e, n, t) {
  return (Tn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = t))
    : (Fe(t, n) || ((t = zs()), (V.lanes |= t), (Ln |= t), (e.baseState = !0)),
      n);
}
function Gf(e, n) {
  var t = D;
  (D = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), n();
  } finally {
    (D = t), (Vl.transition = r);
  }
}
function Na() {
  return Ne().memoizedState;
}
function Zf(e, n, t) {
  var r = fn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pa(e))
  )
    za(n, t);
  else if (((t = la(e, n, t, r)), t !== null)) {
    var l = ue();
    De(t, e, r, l), Ta(t, n, r);
  }
}
function Jf(e, n, t) {
  var r = fn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Pa(e)) za(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, o))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), mo(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = la(e, n, l, r)),
      t !== null && ((l = ue()), De(t, e, r, l), Ta(t, n, r));
  }
}
function Pa(e) {
  var n = e.alternate;
  return e === V || (n !== null && n === V);
}
function za(e, n) {
  zt = Xr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Ta(e, n, t) {
  if ((t & 4194240) !== 0) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t);
  }
}
var Gr = {
    readContext: _e,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  qf = {
    readContext: _e,
    useCallback: function (e, n) {
      return (je().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: _e,
    useEffect: Nu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Nr(4194308, 4, ka.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Nr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Nr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = je();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = je();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = Zf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = je();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: _u,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (je().memoizedState = e);
    },
    useTransition: function () {
      var e = _u(!1),
        n = e[0];
      return (e = Gf.bind(null, e[1])), (je().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = V,
        l = je();
      if (U) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), q === null)) throw Error(y(349));
        (Tn & 30) !== 0 || pa(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Nu(ha.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yt(9, ma.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = je(),
        n = q.identifierPrefix;
      if (U) {
        var t = We,
          r = He;
        (t = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Qt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = Xf++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  bf = {
    readContext: _e,
    useCallback: xa,
    useContext: _e,
    useEffect: Eo,
    useImperativeHandle: Ea,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Ca,
    useReducer: Bl,
    useRef: ga,
    useState: function () {
      return Bl(Kt);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var n = Ne();
      return _a(n, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Kt)[0],
        n = Ne().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  ed = {
    readContext: _e,
    useCallback: xa,
    useContext: _e,
    useEffect: Eo,
    useImperativeHandle: Ea,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Ca,
    useReducer: Hl,
    useRef: ga,
    useState: function () {
      return Hl(Kt);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var n = Ne();
      return X === null ? (n.memoizedState = e) : _a(n, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Kt)[0],
        n = Ne().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function lt(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Pc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Wl(e, n, t) {
  return {
    value: e,
    source: null,
    stack: t != null ? t : null,
    digest: n != null ? n : null,
  };
}
function Pi(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var nd = typeof WeakMap == "function" ? WeakMap : Map;
function La(e, n, t) {
  (t = Qe(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Jr || ((Jr = !0), (ji = r)), Pi(e, n);
    }),
    t
  );
}
function Ma(e, n, t) {
  (t = Qe(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Pi(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Pi(e, n),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function Pu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = hd.bind(null, e, n, t)), n.then(e, e));
}
function zu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tu(e, n, t, r, l) {
  return (e.mode & 1) === 0
    ? (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Qe(-1, 1)), (n.tag = 2), an(t, n, 1))),
          (t.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var td = Ze.ReactCurrentOwner,
  fe = !1;
function oe(e, n, t, r) {
  n.child = e === null ? aa(n, null, t, r) : tt(n, e.child, t, r);
}
function Lu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Jn(n, l),
    (r = So(e, n, t, r, i, l)),
    (t = ko()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : (U && t && uo(n), (n.flags |= 1), oe(e, n, r, l), n.child)
  );
}
function Mu(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Mo(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ra(e, n, i, r, l))
      : ((e = Lr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : $t), t(o, r) && e.ref === n.ref)
    )
      return Ge(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = dn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ra(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($t(i, r) && e.ref === n.ref)
      if (((fe = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (fe = !0);
      else return (n.lanes = e.lanes), Ge(e, n, l);
  }
  return zi(e, n, t, r, l);
}
function Oa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((n.mode & 1) === 0)
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Kn, he),
        (he |= t);
    else {
      if ((t & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          F(Kn, he),
          (he |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        F(Kn, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      F(Kn, he),
      (he |= r);
  return oe(e, n, l, t), n.child;
}
function Da(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function zi(e, n, t, r, l) {
  var i = pe(t) ? Pn : ie.current;
  return (
    (i = et(n, i)),
    Jn(n, l),
    (t = So(e, n, t, r, i, l)),
    (r = ko()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : (U && r && uo(n), (n.flags |= 1), oe(e, n, t, l), n.child)
  );
}
function Ru(e, n, t, r, l) {
  if (pe(t)) {
    var i = !0;
    Vr(n);
  } else i = !1;
  if ((Jn(n, l), n.stateNode === null))
    Pr(e, n), ua(n, t, r), Ni(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var s = o.context,
      f = t.contextType;
    typeof f == "object" && f !== null
      ? (f = _e(f))
      : ((f = pe(t) ? Pn : ie.current), (f = et(n, f)));
    var h = t.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && xu(n, o, r, f)),
      (be = !1);
    var m = n.memoizedState;
    (o.state = m),
      Kr(n, r, o, l),
      (s = n.memoizedState),
      u !== r || m !== s || de.current || be
        ? (typeof h == "function" && (_i(n, t, h, r), (s = n.memoizedState)),
          (u = be || Eu(n, t, u, r, m, s, f))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = f),
          (r = u))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      ia(e, n),
      (u = n.memoizedProps),
      (f = n.type === n.elementType ? u : Te(n.type, u)),
      (o.props = f),
      (p = n.pendingProps),
      (m = o.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = pe(t) ? Pn : ie.current), (s = et(n, s)));
    var g = t.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && xu(n, o, r, s)),
      (be = !1),
      (m = n.memoizedState),
      (o.state = m),
      Kr(n, r, o, l);
    var S = n.memoizedState;
    u !== p || m !== S || de.current || be
      ? (typeof g == "function" && (_i(n, t, g, r), (S = n.memoizedState)),
        (f = be || Eu(n, t, f, r, m, S, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = f))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Ti(e, n, t, r, i, l);
}
function Ti(e, n, t, r, l, i) {
  Da(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && yu(n, t, !1), Ge(e, n, i);
  (r = n.stateNode), (td.current = n);
  var u =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = tt(n, e.child, null, i)), (n.child = tt(n, null, u, i)))
      : oe(e, n, u, i),
    (n.memoizedState = r.state),
    l && yu(n, t, !0),
    n.child
  );
}
function Fa(e) {
  var n = e.stateNode;
  n.pendingContext
    ? vu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && vu(e, n.context, !1),
    vo(e, n.containerInfo);
}
function Ou(e, n, t, r, l) {
  return nt(), ao(l), (n.flags |= 256), oe(e, n, t, r), n.child;
}
var Li = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, n, t) {
  var r = n.pendingProps,
    l = A.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(A, l & 1),
    e === null)
  )
    return (
      xi(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((n.mode & 1) === 0
            ? (n.lanes = 1)
            : e.data === "$!"
            ? (n.lanes = 8)
            : (n.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = dl(o, r, 0, null)),
              (e = Nn(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Mi(t)),
              (n.memoizedState = Li),
              e)
            : Co(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return rd(e, n, o, r, u, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      (o & 1) === 0 && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = dn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dn(u, i)) : ((i = Nn(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Mi(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Li),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dn(i, { mode: "visible", children: r.children })),
    (n.mode & 1) === 0 && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Co(e, n) {
  return (
    (n = dl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function hr(e, n, t, r) {
  return (
    r !== null && ao(r),
    tt(n, e.child, null, t),
    (e = Co(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function rd(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Wl(Error(y(422)))), hr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = dl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Nn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        (n.mode & 1) !== 0 && tt(n, e.child, null, o),
        (n.child.memoizedState = Mi(o)),
        (n.memoizedState = Li),
        i);
  if ((n.mode & 1) === 0) return hr(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Wl(i, r, void 0)), hr(e, n, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), De(r, e, l, -1));
    }
    return Lo(), (r = Wl(Error(y(421)))), hr(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = vd.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (ve = sn(l.nextSibling)),
      (ye = n),
      (U = !0),
      (Me = null),
      e !== null &&
        ((ke[Ee++] = He),
        (ke[Ee++] = We),
        (ke[Ee++] = zn),
        (He = e.id),
        (We = e.overflow),
        (zn = n)),
      (n = Co(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Du(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Ci(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function ja(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, n, r.children, t), (r = A.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Du(e, t, n);
        else if (e.tag === 19) Du(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(A, r), (n.mode & 1) === 0)) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Yr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Ql(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Ql(n, !0, t, null, i);
        break;
      case "together":
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Pr(e, n) {
  (n.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ge(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Ln |= n.lanes),
    (t & n.childLanes) === 0)
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = dn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = dn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function ld(e, n, t) {
  switch (n.tag) {
    case 3:
      Fa(n), nt();
      break;
    case 5:
      ca(n);
      break;
    case 1:
      pe(n.type) && Vr(n);
      break;
    case 4:
      vo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      F(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(A, A.current & 1), (n.flags |= 128), null)
          : (t & n.child.childLanes) !== 0
          ? Ia(e, n, t)
          : (F(A, A.current & 1),
            (e = Ge(e, n, t)),
            e !== null ? e.sibling : null);
      F(A, A.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return ja(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Oa(e, n, t);
  }
  return Ge(e, n, t);
}
var Ua, Ri, $a, Aa;
Ua = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Ri = function () {};
$a = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Cn(Ae.current);
    var i = null;
    switch (t) {
      case "input":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $r);
    }
    ii(t, r);
    var o;
    t = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Rt.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(f, t)), (t = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Rt.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && I("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(f, s));
    }
    t && (i = i || []).push("style", t);
    var f = i;
    (n.updateQueue = f) && (n.flags |= 4);
  }
};
Aa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function yt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function id(e, n, t) {
  var r = n.pendingProps;
  switch ((so(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(n), null;
    case 1:
      return pe(n.type) && Ar(), re(n), null;
    case 3:
      return (
        (r = n.stateNode),
        rt(),
        j(de),
        j(ie),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
              ((n.flags |= 1024), Me !== null && (Ai(Me), (Me = null)))),
        Ri(e, n),
        re(n),
        null
      );
    case 5:
      yo(n);
      var l = Cn(Wt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        $a(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return re(n), null;
        }
        if (((e = Cn(Ae.current)), pr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Ue] = n), (r[Bt] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Et.length; l++) I(Et[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Ho(r, i), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              Qo(r, i), I("invalid", r);
          }
          ii(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Rt.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  I("scroll", r);
            }
          switch (t) {
            case "input":
              lr(r), Wo(r, i, !0);
              break;
            case "textarea":
              lr(r), Ko(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ps(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Ue] = n),
            (e[Bt] = r),
            Ua(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = oi(t, r)), t)) {
              case "dialog":
                I("cancel", e), I("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Et.length; l++) I(Et[l], e);
                l = r;
                break;
              case "source":
                I("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (l = r);
                break;
              case "details":
                I("toggle", e), (l = r);
                break;
              case "input":
                Ho(e, r), (l = ei(e, r)), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                Qo(e, r), (l = ri(e, r)), I("invalid", e);
                break;
              default:
                l = r;
            }
            ii(t, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? vs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Ot(e, s)
                    : typeof s == "number" && Ot(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Rt.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && I("scroll", e)
                      : s != null && Yi(e, i, s, o));
              }
            switch (t) {
              case "input":
                lr(e), Wo(e, r, !1);
                break;
              case "textarea":
                lr(e), Ko(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return re(n), null;
    case 6:
      if (e && n.stateNode != null) Aa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = Cn(Wt.current)), Cn(Ae.current), pr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Ue] = n),
            (i = r.nodeValue !== t) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ue] = n),
            (n.stateNode = r);
      }
      return re(n), null;
    case 13:
      if (
        (j(A),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
          ra(), nt(), (n.flags |= 98560), (i = !1);
        else if (((i = pr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ue] = n;
          } else
            nt(),
              (n.flags & 128) === 0 && (n.memoizedState = null),
              (n.flags |= 4);
          re(n), (i = !1);
        } else Me !== null && (Ai(Me), (Me = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return (n.flags & 128) !== 0
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            (n.mode & 1) !== 0 &&
              (e === null || (A.current & 1) !== 0
                ? G === 0 && (G = 3)
                : Lo())),
          n.updateQueue !== null && (n.flags |= 4),
          re(n),
          null);
    case 4:
      return (
        rt(), Ri(e, n), e === null && At(n.stateNode.containerInfo), re(n), null
      );
    case 10:
      return po(n.type._context), re(n), null;
    case 17:
      return pe(n.type) && Ar(), re(n), null;
    case 19:
      if ((j(A), (i = n.memoizedState), i === null)) return re(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yt(i, !1);
        else {
          if (G !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = n.child; e !== null; ) {
              if (((o = Yr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    yt(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return F(A, (A.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > it &&
            ((n.flags |= 128), (r = !0), yt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              yt(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return re(n), null;
          } else
            2 * K() - i.renderingStartTime > it &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), yt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = K()),
          (n.sibling = null),
          (t = A.current),
          F(A, r ? (t & 1) | 2 : t & 1),
          n)
        : (re(n), null);
    case 22:
    case 23:
      return (
        To(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && (n.mode & 1) !== 0
          ? (he & 1073741824) !== 0 &&
            (re(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : re(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function od(e, n) {
  switch ((so(n), n.tag)) {
    case 1:
      return (
        pe(n.type) && Ar(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        rt(),
        j(de),
        j(ie),
        go(),
        (e = n.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((n.flags = (e & -65537) | 128), n)
          : null
      );
    case 5:
      return yo(n), null;
    case 13:
      if ((j(A), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        nt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return j(A), null;
    case 4:
      return rt(), null;
    case 10:
      return po(n.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  le = !1,
  ud = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Qn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        H(e, n, r);
      }
    else t.current = null;
}
function Oi(e, n, t) {
  try {
    t();
  } catch (r) {
    H(e, n, r);
  }
}
var Fu = !1;
function sd(e, n) {
  if (((vi = Ir), (e = Ws()), oo(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            f = 0,
            h = 0,
            p = e,
            m = null;
          n: for (;;) {
            for (
              var g;
              p !== t || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break n;
              if (
                (m === t && ++f === l && (u = o),
                m === i && ++h === r && (s = o),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (yi = { focusedElem: e, selectionRange: t }, Ir = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (k = e);
    else
      for (; k !== null; ) {
        n = k;
        try {
          var S = n.alternate;
          if ((n.flags & 1024) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    L = S.memoizedState,
                    c = n.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? w : Te(n.type, w),
                      L
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          H(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
  return (S = Fu), (Fu = !1), S;
}
function Tt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Oi(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Di(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Va(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Va(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Ue], delete n[Bt], delete n[Si], delete n[Wf], delete n[Qf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Iu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ba(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fi(e, n, t), e = e.sibling; e !== null; ) Fi(e, n, t), (e = e.sibling);
}
function Ii(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, n, t), e = e.sibling; e !== null; ) Ii(e, n, t), (e = e.sibling);
}
var b = null,
  Le = !1;
function Je(e, n, t) {
  for (t = t.child; t !== null; ) Ha(e, n, t), (t = t.sibling);
}
function Ha(e, n, t) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(tl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      le || Qn(t, n);
    case 6:
      var r = b,
        l = Le;
      (b = null),
        Je(e, n, t),
        (b = r),
        (Le = l),
        b !== null &&
          (Le
            ? ((e = b),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : b.removeChild(t.stateNode));
      break;
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (t = t.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, t)
              : e.nodeType === 1 && Ul(e, t),
            jt(e))
          : Ul(b, t.stateNode));
      break;
    case 4:
      (r = b),
        (l = Le),
        (b = t.stateNode.containerInfo),
        (Le = !0),
        Je(e, n, t),
        (b = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && Oi(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, n, t);
      break;
    case 1:
      if (
        !le &&
        (Qn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(t, n, u);
        }
      Je(e, n, t);
      break;
    case 21:
      Je(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((le = (r = le) || t.memoizedState !== null), Je(e, n, t), (le = r))
        : Je(e, n, t);
      break;
    default:
      Je(e, n, t);
  }
}
function ju(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new ud()),
      n.forEach(function (r) {
        var l = yd.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function ze(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Le = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        Ha(i, o, l), (b = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        H(l, n, f);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Wa(n, e), (n = n.sibling);
}
function Wa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(n, e), Ie(e), r & 4)) {
        try {
          Tt(3, e, e.return), cl(3, e);
        } catch (w) {
          H(e, e.return, w);
        }
        try {
          Tt(5, e, e.return);
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 1:
      ze(n, e), Ie(e), r & 512 && t !== null && Qn(t, t.return);
      break;
    case 5:
      if (
        (ze(n, e),
        Ie(e),
        r & 512 && t !== null && Qn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ot(l, "");
        } catch (w) {
          H(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && fs(l, i),
              oi(u, o);
            var f = oi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                p = s[o + 1];
              h === "style"
                ? vs(l, p)
                : h === "dangerouslySetInnerHTML"
                ? ms(l, p)
                : h === "children"
                ? Ot(l, p)
                : Yi(l, h, p, f);
            }
            switch (u) {
              case "input":
                ni(l, i);
                break;
              case "textarea":
                ds(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Yn(l, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yn(l, !!i.multiple, i.defaultValue, !0)
                      : Yn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Bt] = i;
          } catch (w) {
            H(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ze(n, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ze(n, e), Ie(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          jt(n.containerInfo);
        } catch (w) {
          H(e, e.return, w);
        }
      break;
    case 4:
      ze(n, e), Ie(e);
      break;
    case 13:
      ze(n, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Po = K())),
        r & 4 && ju(e);
      break;
    case 22:
      if (
        ((h = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((le = (f = le) || h), ze(n, e), (le = f)) : ze(n, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !h && (e.mode & 1) !== 0)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (p = k = h; k !== null; ) {
              switch (((m = k), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tt(4, m, m.return);
                  break;
                case 1:
                  Qn(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (t = m.return);
                    try {
                      (n = r),
                        (S.props = n.memoizedProps),
                        (S.state = n.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      H(r, t, w);
                    }
                  }
                  break;
                case 5:
                  Qn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    $u(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (k = g)) : $u(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = hs("display", o)));
              } catch (w) {
                H(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = f ? "" : p.memoizedProps;
              } catch (w) {
                H(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ze(n, e), Ie(e), r & 4 && ju(e);
      break;
    case 21:
      break;
    default:
      ze(n, e), Ie(e);
  }
}
function Ie(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ba(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ot(l, ""), (r.flags &= -33));
          var i = Iu(e);
          Ii(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Iu(e);
          Fi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function ad(e, n, t) {
  (k = e), Qa(e);
}
function Qa(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = vr;
        var f = le;
        if (((vr = o), (le = s) && !f))
          for (k = l; k !== null; )
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Au(l)
                : s !== null
                ? ((s.return = o), (k = s))
                : Au(l);
        for (; i !== null; ) (k = i), Qa(i), (i = i.sibling);
        (k = l), (vr = u), (le = f);
      }
      Uu(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = l), (k = i))
        : Uu(e);
  }
}
function Uu(e) {
  for (; k !== null; ) {
    var n = k;
    if ((n.flags & 8772) !== 0) {
      var t = n.alternate;
      try {
        if ((n.flags & 8772) !== 0)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              le || cl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !le)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Te(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && ku(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                ku(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var f = n.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && jt(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (n.flags & 512 && Di(n));
      } catch (m) {
        H(n, n.return, m);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function $u(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Au(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            cl(4, n);
          } catch (s) {
            H(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(n, l, s);
            }
          }
          var i = n.return;
          try {
            Di(n);
          } catch (s) {
            H(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Di(n);
          } catch (s) {
            H(n, o, s);
          }
      }
    } catch (s) {
      H(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (k = u);
      break;
    }
    k = n.return;
  }
}
var cd = Math.ceil,
  Zr = Ze.ReactCurrentDispatcher,
  _o = Ze.ReactCurrentOwner,
  Ce = Ze.ReactCurrentBatchConfig,
  O = 0,
  q = null,
  Y = null,
  ee = 0,
  he = 0,
  Kn = vn(0),
  G = 0,
  Xt = null,
  Ln = 0,
  fl = 0,
  No = 0,
  Lt = null,
  ce = null,
  Po = 0,
  it = 1 / 0,
  Ve = null,
  Jr = !1,
  ji = null,
  cn = null,
  yr = !1,
  rn = null,
  qr = 0,
  Mt = 0,
  Ui = null,
  zr = -1,
  Tr = 0;
function ue() {
  return (O & 6) !== 0 ? K() : zr !== -1 ? zr : (zr = K());
}
function fn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (O & 2) !== 0 && ee !== 0
    ? ee & -ee
    : Yf.transition !== null
    ? (Tr === 0 && (Tr = zs()), Tr)
    : ((e = D),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fs(e.type))),
      e);
}
function De(e, n, t, r) {
  if (50 < Mt) throw ((Mt = 0), (Ui = null), Error(y(185)));
  Zt(e, t, r),
    ((O & 2) === 0 || e !== q) &&
      (e === q && ((O & 2) === 0 && (fl |= t), G === 4 && nn(e, ee)),
      me(e, r),
      t === 1 &&
        O === 0 &&
        (n.mode & 1) === 0 &&
        ((it = K() + 500), ul && yn()));
}
function me(e, n) {
  var t = e.callbackNode;
  Kc(e, n);
  var r = Fr(e, e === q ? ee : 0);
  if (r === 0)
    t !== null && Go(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Go(t), n === 1))
      e.tag === 0 ? Kf(Vu.bind(null, e)) : ea(Vu.bind(null, e)),
        Bf(function () {
          (O & 6) === 0 && yn();
        }),
        (t = null);
    else {
      switch (Ts(r)) {
        case 1:
          t = qi;
          break;
        case 4:
          t = Ns;
          break;
        case 16:
          t = Dr;
          break;
        case 536870912:
          t = Ps;
          break;
        default:
          t = Dr;
      }
      t = ba(t, Ka.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Ka(e, n) {
  if (((zr = -1), (Tr = 0), (O & 6) !== 0)) throw Error(y(327));
  var t = e.callbackNode;
  if (qn() && e.callbackNode !== t) return null;
  var r = Fr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n) n = br(e, r);
  else {
    n = r;
    var l = O;
    O |= 2;
    var i = Xa();
    (q !== e || ee !== n) && ((Ve = null), (it = K() + 500), _n(e, n));
    do
      try {
        pd();
        break;
      } catch (u) {
        Ya(e, u);
      }
    while (1);
    fo(),
      (Zr.current = i),
      (O = l),
      Y !== null ? (n = 0) : ((q = null), (ee = 0), (n = G));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = fi(e)), l !== 0 && ((r = l), (n = $i(e, l)))), n === 1)
    )
      throw ((t = Xt), _n(e, 0), nn(e, r), me(e, K()), t);
    if (n === 6) nn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !fd(l) &&
          ((n = br(e, r)),
          n === 2 && ((i = fi(e)), i !== 0 && ((r = i), (n = $i(e, i)))),
          n === 1))
      )
        throw ((t = Xt), _n(e, 0), nn(e, r), me(e, K()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kn(e, ce, Ve);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((n = Po + 500 - K()), 10 < n))
          ) {
            if (Fr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wi(kn.bind(null, e, ce, Ve), n);
            break;
          }
          kn(e, ce, Ve);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * cd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(kn.bind(null, e, ce, Ve), r);
            break;
          }
          kn(e, ce, Ve);
          break;
        case 5:
          kn(e, ce, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === t ? Ka.bind(null, e) : null;
}
function $i(e, n) {
  var t = Lt;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256),
    (e = br(e, n)),
    e !== 2 && ((n = ce), (ce = t), n !== null && Ai(n)),
    e
  );
}
function Ai(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function fd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function nn(e, n) {
  for (
    n &= ~No,
      n &= ~fl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Oe(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Vu(e) {
  if ((O & 6) !== 0) throw Error(y(327));
  qn();
  var n = Fr(e, 0);
  if ((n & 1) === 0) return me(e, K()), null;
  var t = br(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fi(e);
    r !== 0 && ((n = r), (t = $i(e, r)));
  }
  if (t === 1) throw ((t = Xt), _n(e, 0), nn(e, n), me(e, K()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    kn(e, ce, Ve),
    me(e, K()),
    null
  );
}
function zo(e, n) {
  var t = O;
  O |= 1;
  try {
    return e(n);
  } finally {
    (O = t), O === 0 && ((it = K() + 500), ul && yn());
  }
}
function Mn(e) {
  rn !== null && rn.tag === 0 && (O & 6) === 0 && qn();
  var n = O;
  O |= 1;
  var t = Ce.transition,
    r = D;
  try {
    if (((Ce.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Ce.transition = t), (O = n), (O & 6) === 0 && yn();
  }
}
function To() {
  (he = Kn.current), j(Kn);
}
function _n(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Vf(t)), Y !== null))
    for (t = Y.return; t !== null; ) {
      var r = t;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          rt(), j(de), j(ie), go();
          break;
        case 5:
          yo(r);
          break;
        case 4:
          rt();
          break;
        case 13:
          j(A);
          break;
        case 19:
          j(A);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          To();
      }
      t = t.return;
    }
  if (
    ((q = e),
    (Y = e = dn(e.current, null)),
    (ee = he = n),
    (G = 0),
    (Xt = null),
    (No = fl = Ln = 0),
    (ce = Lt = null),
    xn !== null)
  ) {
    for (n = 0; n < xn.length; n++)
      if (((t = xn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    xn = null;
  }
  return e;
}
function Ya(e, n) {
  do {
    var t = Y;
    try {
      if ((fo(), (_r.current = Gr), Xr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((Tn = 0),
        (J = X = V = null),
        (zt = !1),
        (Qt = 0),
        (_o.current = null),
        t === null || t.return === null)
      ) {
        (G = 1), (Xt = n), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          s = n;
        if (
          ((n = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            h = u,
            p = h.tag;
          if ((h.mode & 1) === 0 && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = zu(o);
          if (g !== null) {
            (g.flags &= -257),
              Tu(g, o, u, i, n),
              g.mode & 1 && Pu(i, f, n),
              (n = g),
              (s = f);
            var S = n.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(s), (n.updateQueue = w);
            } else S.add(s);
            break e;
          } else {
            if ((n & 1) === 0) {
              Pu(i, f, n), Lo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var L = zu(o);
          if (L !== null) {
            (L.flags & 65536) === 0 && (L.flags |= 256),
              Tu(L, o, u, i, n),
              ao(lt(s, u));
            break e;
          }
        }
        (i = s = lt(s, u)),
          G !== 4 && (G = 2),
          Lt === null ? (Lt = [i]) : Lt.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var c = La(i, s, n);
              Su(i, c);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (cn === null || !cn.has(d))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var v = Ma(i, u, n);
                Su(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Za(t);
    } catch (E) {
      (n = E), Y === t && t !== null && (Y = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Xa() {
  var e = Zr.current;
  return (Zr.current = Gr), e === null ? Gr : e;
}
function Lo() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null ||
      ((Ln & 268435455) === 0 && (fl & 268435455) === 0) ||
      nn(q, ee);
}
function br(e, n) {
  var t = O;
  O |= 2;
  var r = Xa();
  (q !== e || ee !== n) && ((Ve = null), _n(e, n));
  do
    try {
      dd();
      break;
    } catch (l) {
      Ya(e, l);
    }
  while (1);
  if ((fo(), (O = t), (Zr.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), G;
}
function dd() {
  for (; Y !== null; ) Ga(Y);
}
function pd() {
  for (; Y !== null && !jc(); ) Ga(Y);
}
function Ga(e) {
  var n = qa(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    n === null ? Za(e) : (Y = n),
    (_o.current = null);
}
function Za(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), (n.flags & 32768) === 0)) {
      if (((t = id(t, n, he)), t !== null)) {
        Y = t;
        return;
      }
    } else {
      if (((t = od(t, n)), t !== null)) {
        (t.flags &= 32767), (Y = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    }
    if (((n = n.sibling), n !== null)) {
      Y = n;
      return;
    }
    Y = n = e;
  } while (n !== null);
  G === 0 && (G = 5);
}
function kn(e, n, t) {
  var r = D,
    l = Ce.transition;
  try {
    (Ce.transition = null), (D = 1), md(e, n, t, r);
  } finally {
    (Ce.transition = l), (D = r);
  }
  return null;
}
function md(e, n, t, r) {
  do qn();
  while (rn !== null);
  if ((O & 6) !== 0) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (Yc(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    ((t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0) ||
      yr ||
      ((yr = !0),
      ba(Dr, function () {
        return qn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    (t.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = D;
    D = 1;
    var u = O;
    (O |= 4),
      (_o.current = null),
      sd(e, t),
      Wa(t, e),
      Df(yi),
      (Ir = !!vi),
      (yi = vi = null),
      (e.current = t),
      ad(t),
      Uc(),
      (O = u),
      (D = o),
      (Ce.transition = i);
  } else e.current = t;
  if (
    (yr && ((yr = !1), (rn = e), (qr = l)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    Vc(t.stateNode),
    me(e, K()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = ji), (ji = null), e);
  return (
    (qr & 1) !== 0 && e.tag !== 0 && qn(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Ui ? Mt++ : ((Mt = 0), (Ui = e))) : (Mt = 0),
    yn(),
    null
  );
}
function qn() {
  if (rn !== null) {
    var e = Ts(qr),
      n = Ce.transition,
      t = D;
    try {
      if (((Ce.transition = null), (D = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (qr = 0), (O & 6) !== 0))
          throw Error(y(331));
        var l = O;
        for (O |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if ((k.flags & 16) !== 0) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (k = f; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tt(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (k = p);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var m = h.sibling,
                        g = h.return;
                      if ((Va(h), h === f)) {
                        k = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (k = m);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var L = w.sibling;
                    (w.sibling = null), (w = L);
                  } while (w !== null);
                }
              }
              k = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && o !== null)
            (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tt(9, i, i.return);
                }
              var c = i.sibling;
              if (c !== null) {
                (c.return = i.return), (k = c);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var d = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && d !== null)
            (d.return = o), (k = d);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, u);
                  }
                } catch (E) {
                  H(u, u.return, E);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (k = v);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((O = l), yn(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(tl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = t), (Ce.transition = n);
    }
  }
  return !1;
}
function Bu(e, n, t) {
  (n = lt(t, n)),
    (n = La(e, n, 1)),
    (e = an(e, n, 1)),
    (n = ue()),
    e !== null && (Zt(e, 1, n), me(e, n));
}
function H(e, n, t) {
  if (e.tag === 3) Bu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Bu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = lt(t, e)),
            (e = Ma(n, e, 1)),
            (n = an(n, e, 1)),
            (e = ue()),
            n !== null && (Zt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function hd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = ue()),
    (e.pingedLanes |= e.suspendedLanes & t),
    q === e &&
      (ee & t) === t &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - Po)
        ? _n(e, 0)
        : (No |= t)),
    me(e, n);
}
function Ja(e, n) {
  n === 0 &&
    ((e.mode & 1) === 0
      ? (n = 1)
      : ((n = ur), (ur <<= 1), (ur & 130023424) === 0 && (ur = 4194304)));
  var t = ue();
  (e = Xe(e, n)), e !== null && (Zt(e, n, t), me(e, t));
}
function vd(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ja(e, t);
}
function yd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ja(e, t);
}
var qa;
qa = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
    else {
      if ((e.lanes & t) === 0 && (n.flags & 128) === 0)
        return (fe = !1), ld(e, n, t);
      fe = (e.flags & 131072) !== 0;
    }
  else (fe = !1), U && (n.flags & 1048576) !== 0 && na(n, Hr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Pr(e, n), (e = n.pendingProps);
      var l = et(n, ie.current);
      Jn(n, t), (l = So(null, n, r, e, l, t));
      var i = ko();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            pe(r) ? ((i = !0), Vr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(n),
            (l.updater = sl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Ni(n, r, e, t),
            (n = Ti(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && uo(n), oe(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Pr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = wd(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            n = zi(null, n, r, e, t);
            break e;
          case 1:
            n = Ru(null, n, r, e, t);
            break e;
          case 11:
            n = Lu(null, n, r, e, t);
            break e;
          case 14:
            n = Mu(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        zi(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Ru(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Fa(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          ia(e, n),
          Kr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = lt(Error(y(423)), n)), (n = Ou(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = lt(Error(y(424)), n)), (n = Ou(e, n, r, t, l));
            break e;
          } else
            for (
              ve = sn(n.stateNode.containerInfo.firstChild),
                ye = n,
                U = !0,
                Me = null,
                t = aa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((nt(), r === l)) {
            n = Ge(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ca(n),
        e === null && xi(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gi(r, l) ? (o = null) : i !== null && gi(r, i) && (n.flags |= 32),
        Da(e, n),
        oe(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && xi(n), null;
    case 13:
      return Ia(e, n, t);
    case 4:
      return (
        vo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = tt(n, null, r, t)) : oe(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Lu(e, n, r, l, t)
      );
    case 7:
      return oe(e, n, n.pendingProps, t), n.child;
    case 8:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          F(Wr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Fe(i.value, o)) {
            if (i.children === l.children && !de.current) {
              n = Ge(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, t & -t)), (s.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var h = f.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (f.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      Ci(i.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= t),
                  (u = o.alternate),
                  u !== null && (u.lanes |= t),
                  Ci(o, t, n),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Jn(n, t),
        (l = _e(l)),
        (r = r(l)),
        (n.flags |= 1),
        oe(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Te(r, n.pendingProps)),
        (l = Te(r.type, l)),
        Mu(e, n, r, l, t)
      );
    case 15:
      return Ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Pr(e, n),
        (n.tag = 1),
        pe(r) ? ((e = !0), Vr(n)) : (e = !1),
        Jn(n, t),
        ua(n, r, l),
        Ni(n, r, l, t),
        Ti(null, n, r, !0, e, t)
      );
    case 19:
      return ja(e, n, t);
    case 22:
      return Oa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function ba(e, n) {
  return _s(e, n);
}
function gd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xe(e, n, t, r) {
  return new gd(e, n, t, r);
}
function Mo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wd(e) {
  if (typeof e == "function") return Mo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gi)) return 11;
    if (e === Zi) return 14;
  }
  return 2;
}
function dn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = xe(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Lr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Mo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case In:
        return Nn(t.children, l, i, n);
      case Xi:
        (o = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = xe(12, t, n, l | 2)), (e.elementType = Zl), (e.lanes = i), e
        );
      case Jl:
        return (e = xe(13, t, n, l)), (e.elementType = Jl), (e.lanes = i), e;
      case ql:
        return (e = xe(19, t, n, l)), (e.elementType = ql), (e.lanes = i), e;
      case ss:
        return dl(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case os:
              o = 10;
              break e;
            case us:
              o = 9;
              break e;
            case Gi:
              o = 11;
              break e;
            case Zi:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = xe(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function Nn(e, n, t, r) {
  return (e = xe(7, e, r, n)), (e.lanes = t), e;
}
function dl(e, n, t, r) {
  return (
    (e = xe(22, e, r, n)),
    (e.elementType = ss),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, n, t) {
  return (e = xe(6, e, null, n)), (e.lanes = t), e;
}
function Yl(e, n, t) {
  return (
    (n = xe(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Sd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ro(e, n, t, r, l, i, o, u, s) {
  return (
    (e = new Sd(e, n, t, u, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = xe(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function kd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ec(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (pe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (pe(t)) return bs(e, t, n);
  }
  return n;
}
function nc(e, n, t, r, l, i, o, u, s) {
  return (
    (e = Ro(t, r, !0, e, l, i, o, u, s)),
    (e.context = ec(null)),
    (t = e.current),
    (r = ue()),
    (l = fn(t)),
    (i = Qe(r, l)),
    (i.callback = n != null ? n : null),
    an(t, i, l),
    (e.current.lanes = l),
    Zt(e, l, r),
    me(e, r),
    e
  );
}
function pl(e, n, t, r) {
  var l = n.current,
    i = ue(),
    o = fn(l);
  return (
    (t = ec(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Qe(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = an(l, n, o)),
    e !== null && (De(e, l, o, i), Cr(e, l, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Oo(e, n) {
  Hu(e, n), (e = e.alternate) && Hu(e, n);
}
function Ed() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Do(e) {
  this._internalRoot = e;
}
ml.prototype.render = Do.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  pl(e, n, null, null);
};
ml.prototype.unmount = Do.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Mn(function () {
      pl(null, e, null, null);
    }),
      (n[Ye] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Rs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
    en.splice(t, 0, e), t === 0 && Ds(e);
  }
};
function Fo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wu() {}
function xd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = el(o);
        i.call(f);
      };
    }
    var o = nc(n, r, e, 0, null, !1, !1, "", Wu);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      At(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = el(s);
      u.call(f);
    };
  }
  var s = Ro(e, 0, !1, null, null, !1, !1, "", Wu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    At(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      pl(n, s, t, r);
    }),
    s
  );
}
function vl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(o);
        u.call(s);
      };
    }
    pl(n, o, e, l);
  } else o = xd(t, n, e, l, r);
  return el(o);
}
Ls = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 &&
          (bi(n, t | 1), me(n, K()), (O & 6) === 0 && ((it = K() + 500), yn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ue();
          De(r, e, 1, l);
        }
      }),
        Oo(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var n = Xe(e, 134217728);
    if (n !== null) {
      var t = ue();
      De(n, e, 134217728, t);
    }
    Oo(e, 134217728);
  }
};
Ms = function (e) {
  if (e.tag === 13) {
    var n = fn(e),
      t = Xe(e, n);
    if (t !== null) {
      var r = ue();
      De(t, e, n, r);
    }
    Oo(e, n);
  }
};
Rs = function () {
  return D;
};
Os = function (e, n) {
  var t = D;
  try {
    return (D = e), n();
  } finally {
    D = t;
  }
};
si = function (e, n, t) {
  switch (n) {
    case "input":
      if ((ni(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(y(90));
            cs(r), ni(r, l);
          }
        }
      }
      break;
    case "textarea":
      ds(e, t);
      break;
    case "select":
      (n = t.value), n != null && Yn(e, !!t.multiple, n, !1);
  }
};
ws = zo;
Ss = Mn;
var Cd = { usingClientEntryPoint: !1, Events: [qt, An, ol, ys, gs, zo] },
  gt = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  _d = {
    bundleType: gt.bundleType,
    version: gt.version,
    rendererPackageName: gt.rendererPackageName,
    rendererConfig: gt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gt.findFiberByHostInstance || Ed,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (tl = gr.inject(_d)), ($e = gr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cd;
we.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fo(n)) throw Error(y(200));
  return kd(e, n, null, t);
};
we.createRoot = function (e, n) {
  if (!Fo(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = tc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Ro(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ye] = n.current),
    At(e.nodeType === 8 ? e.parentNode : e),
    new Do(n)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = xs(n)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Mn(e);
};
we.hydrate = function (e, n, t) {
  if (!hl(n)) throw Error(y(200));
  return vl(null, e, n, !0, t);
};
we.hydrateRoot = function (e, n, t) {
  if (!Fo(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    o = tc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = nc(n, null, e, 1, t != null ? t : null, l, !1, i, o)),
    (e[Ye] = n.current),
    At(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new ml(n);
};
we.render = function (e, n, t) {
  if (!hl(n)) throw Error(y(200));
  return vl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Mn(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = zo;
we.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!hl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return vl(e, n, t, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  n(), (e.exports = we);
})(ns);
var Qu = ns.exports;
(Xl.createRoot = Qu.createRoot), (Xl.hydrateRoot = Qu.hydrateRoot);
var yl = { exports: {} },
  gl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd = Re.exports,
  Pd = Symbol.for("react.element"),
  zd = Symbol.for("react.fragment"),
  Td = Object.prototype.hasOwnProperty,
  Ld = Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Md = { key: !0, ref: !0, __self: !0, __source: !0 };
function rc(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = "" + t),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) Td.call(n, r) && !Md.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Pd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ld.current,
  };
}
gl.Fragment = zd;
gl.jsx = rc;
gl.jsxs = rc;
(function (e) {
  e.exports = gl;
})(yl);
const Rd = yl.exports.Fragment,
  P = yl.exports.jsx,
  $ = yl.exports.jsxs,
  Od = ({
    day: e,
    prevStep: n,
    nextStep: t,
    meetingData: r,
    participantName: l,
    openFilter: i,
  }) => {
    const o = r.events.event1.participants[l],
      u = { Su: 0, M: 48, Tu: 96, W: 144, Th: 192, F: 240, Sa: 288 },
      s = (w) => o.filter((c) => c % 2 == 0).map((c) => (c - u[e]) / 2 - 9),
      f = (w) => {
        const L = w.map((d) => (d + 9) * 2 + u[e]);
        for (var c = [], a = 0; a < w.length; a++)
          c.push(L[a]), c.push(L[a] + 1);
        return c;
      },
      h = () => {
        r.events.event1.participants[l] = f(p);
      },
      [p, m] = Re.exports.useState(s()),
      g = [];
    for (let w = 0; w < 9; w++) g.push(`${w + 9}:00`);
    const S = (w, L) => (L.includes(w) ? L.filter((c) => c !== w) : [w, ...L]);
    return $("div", {
      style: {
        display: "grid",
        gridTemplateRows: "10% 70% 20%",
        height: "100vh",
        justifyContent: "center",
      },
      children: [
        $("h1", {
          style: { padding: "20px" },
          children: ["Select ", e, " Availability "],
        }),
        P("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          },
          children: g.map((w, L) =>
            P(
              "div",
              {
                className: "card ",
                onClick: () => m(S(L, p)),
                style: {
                  backgroundColor: p.includes(L) ? "lightgreen" : "white",
                },
                children: w,
              },
              L
            )
          ),
        }),
        $("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            marginTop: "10px",
          },
          children: [
            $("div", {
              style: {
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                width: "100%",
              },
              children: [
                P("button", {
                  style: { borderRadius: "4px", width: "100%" },
                  onClick: () => {
                    n(), h();
                  },
                  children: "Previous Day",
                }),
                P("button", {
                  style: { borderRadius: "4px", width: "100%" },
                  onClick: () => {
                    t(), h();
                  },
                  children: "Next Day",
                }),
              ],
            }),
            P("button", {
              style: { borderRadius: "4px", padding: "0px 20px" },
              onClick: () => {
                h(), i();
              },
              children: "Submit",
            }),
          ],
        }),
      ],
    });
  },
  Dd = ({ children: e, step: n }) => {
    const t = Re.exports.Children.toArray(e);
    return P(Rd, { children: t[n] });
  },
  Fd = ({ handleChange: e, values: n, nextStep: t, openFilter: r }) =>
    $("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "15rem",
        alignItems: "center",
      },
      children: [
        P("h1", {
          style: { display: "flex", justifyContent: "center", padding: "20px" },
          children: "Swarm Meeting 3",
        }),
        $("label", {
          children: [
            "Name",
            P("input", {
              style: {
                display: "block",
                borderRadius: "4px",
                padding: "5px 10px",
              },
              type: "text",
              placeholder: "Enter username here",
              value: n.username,
              onChange: (l) => e(l.currentTarget.value),
            }),
          ],
        }),
        $("div", {
          style: { display: "flex", flexDirection: "column", gap: "10px" },
          children: [
            P("button", {
              style: {
                borderRadius: "4px",
                padding: "5px 40px",
                backgroundColor: "#4A6BA0",
                color: "white",
              },
              onClick: r,
              children: "Find Times",
            }),
            P("button", {
              style: {
                borderRadius: "4px",
                padding: "5px 40px",
                backgroundColor: "#4A6BA0",
                color: "white",
              },
              onClick: t,
              children: "Select Times",
            }),
          ],
        }),
      ],
    }),
  Id = ({ event: e, openFilter: n }) => {
    const [t, r] = Re.exports.useState({ day: 0, step: 0, username: "" }),
      l = () => {
        const { step: h } = t;
        r({ ...t, step: h - 1, day: u - 1 });
      },
      i = () => {
        const { step: h } = t;
        r({ ...t, step: h + 1, day: u + 1 });
      },
      { step: o, day: u } = t,
      { username: s } = t,
      f = { username: s };
    return $(Dd, {
      step: t.step,
      children: [
        P(Fd, {
          handleChange: (h) => r({ ...t, username: h }),
          nextStep: i,
          values: f,
          openFilter: n,
        }),
        e.events.event1.dayOption.map(([h]) =>
          P(
            Od,
            {
              day: h,
              prevStep: l,
              nextStep: i,
              meetingData: e,
              openFilter: n,
              participantName: f.username || "unknown",
            },
            h
          )
        ),
      ],
    });
  },
  jd = (e, n, t, r) => {
    let l = Array(336)
      .fill()
      .map(() => Array(0));
    Object.entries(e).map(([o, u]) => {
      u.forEach((s) => {
        l[s].push(o);
      });
    });
    let i = [];
    return (
      l.forEach((o, u) => {
        Bd(l, n, u, t, r) &&
          i.push({ participants: o, startTime: u, endTime: u + n - 1 });
      }),
      i
    );
  },
  nl = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  Ud = (e, n, t) => (n >= e.length ? !1 : t.every((r) => e[n].includes(r))),
  $d = (e) => nl.findIndex((n) => e === n),
  Ad = (e, n) => Math.floor(e / 48) === $d(n),
  Vd = (e, n) => n.some((t) => Ad(e, t)),
  Bd = (e, n, t, r, l) => {
    for (let i = t; i < t + n; i++) if (!(Ud(e, i, r) && Vd(i, l))) return !1;
    return !0;
  },
  Ku = (e) => {
    const n = (e % 48) * 30,
      t = n % 60,
      r = Math.floor(n / 60);
    return `${r < 10 ? "0" + r.toString() : r}:${t == 0 ? "00" : t}`;
  },
  Hd = (e) => Math.floor(e / 48),
  Wd = ({ meeting_info: e }) =>
    $("div", {
      className: "card m-1 p-2",
      children: [
        P("div", {
          className: "card-title",
          children: $("h2", {
            children: [
              nl[Hd(e.startTime)],
              " ",
              Ku(e.startTime),
              "-",
              Ku(e.endTime + 1),
            ],
          }),
        }),
        P("div", {
          className: "card-body",
          children: $("div", {
            className: "participants",
            children: [
              "Participants",
              e.participants.map((n) => $("div", { children: ["- ", n] })),
            ],
          }),
        }),
      ],
    }),
  Qd = [
    { display: "30 min", length: 1 },
    { display: "1 hr", length: 2 },
    { display: "2 hrs", length: 4 },
  ],
  Kd = ({ data: e }) => {
    const n = Object.keys(e.events.event1.participants),
      t = [...nl],
      r = [...n],
      [l, i] = Re.exports.useState(1),
      [o, u] = Re.exports.useState(t),
      [s, f] = Re.exports.useState(r),
      h = jd(e.events.event1.participants, l, s, o);
    return $("div", {
      className: "container",
      children: [
        P("h1", { children: "Filter Time Slots" }),
        $("div", {
          id: "filter-bar",
          style: { display: "flex", justifyContent: "center", gap: "10px" },
          children: [
            $("div", {
              className: "dropdown",
              children: [
                P("button", {
                  type: "button",
                  className: "btn btn-primary dropdown-toggle",
                  id: "meetingLength",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  children: "Meeting Length",
                }),
                P("div", {
                  className: "dropdown-menu",
                  "aria-labelledby": "dropdownMenuButton",
                  children: Qd.map((p, m) =>
                    P(
                      "a",
                      {
                        className: "dropdown-item",
                        href: "#",
                        onClick: () => {
                          i(p.length);
                        },
                        children: p.display,
                      },
                      m
                    )
                  ),
                }),
              ],
            }),
            P("button", {
              type: "button",
              className: "btn btn-primary",
              "data-toggle": "modal",
              "data-target": "#dayModal",
              children: "Days",
            }),
            P("div", {
              className: "modal fade",
              id: "dayModal",
              tabIndex: "-1",
              role: "dialog",
              "aria-labelledby": "dayModalLabel",
              "aria-hidden": "true",
              children: P("div", {
                className: "modal-dialog modal-dialog-centered",
                role: "document",
                children: $("div", {
                  className: "modal-content",
                  children: [
                    $("div", {
                      className: "modal-header",
                      children: [
                        P("h5", {
                          className: "modal-title",
                          id: "dayModalLabel",
                          children: "Select Days",
                        }),
                        P("button", {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                          children: P("span", {
                            "aria-hidden": "true",
                            children: "\xD7",
                          }),
                        }),
                      ],
                    }),
                    P("div", {
                      className: "modal-body",
                      children: nl.map((p, m) =>
                        $(
                          "div",
                          {
                            children: [
                              P("input", {
                                style: { marginRight: "5px" },
                                id: p,
                                type: "checkbox",
                                defaultChecked: !0,
                                onClick: () => {
                                  o.includes(p)
                                    ? u(o.filter((g) => g !== p))
                                    : u([...o, p]);
                                },
                              }),
                              P("label", { htmlFor: p, children: p }),
                            ],
                          },
                          m
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
            P("button", {
              type: "button",
              className: "btn btn-primary",
              "data-toggle": "modal",
              "data-target": "#memberModal",
              children: "Members",
            }),
            P("div", {
              className: "modal fade",
              id: "memberModal",
              tabIndex: "-1",
              role: "dialog",
              "aria-labelledby": "memberModalLabel",
              "aria-hidden": "true",
              children: P("div", {
                className: "modal-dialog modal-dialog-centered",
                role: "document",
                children: $("div", {
                  className: "modal-content",
                  children: [
                    $("div", {
                      className: "modal-header",
                      children: [
                        P("h5", {
                          className: "modal-title",
                          id: "memberModalLabel",
                          children: "Select Members",
                        }),
                        P("button", {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close",
                          children: P("span", {
                            "aria-hidden": "true",
                            children: "\xD7",
                          }),
                        }),
                      ],
                    }),
                    P("div", {
                      className: "modal-body",
                      children: n.map((p, m) =>
                        $(
                          "div",
                          {
                            children: [
                              P("input", {
                                style: { marginRight: "5px" },
                                id: p,
                                type: "checkbox",
                                defaultChecked: !0,
                                onClick: () => {
                                  s.includes(p)
                                    ? f(s.filter((g) => g !== p))
                                    : f([...s, p]);
                                },
                              }),
                              P("label", { htmlFor: p, children: p }),
                            ],
                          },
                          m
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        $("div", {
          children: [
            P("h3", { children: "Suggested Times:" }),
            $("div", {
              children: [
                " ",
                h.length === 0
                  ? P("p", {
                      children: "No meeting times meet the given criteria.",
                    })
                  : h.map((p) => P(Wd, { meeting_info: p })),
              ],
            }),
          ],
        }),
      ],
    });
  };
let Yu = {
  events: {
    event1: {
      name: "CS 397 Meeting",
      participants: {
        Yousef: [],
        TH: [20, 21, 22, 23, 24, 25, 30],
        Max: [18, 19, 20, 21],
        Nikhil: [22, 23, 30, 31],
      },
      time: "10:10-11:30",
      location: "Tech LR1",
      dayOption: ["M", "W"],
    },
  },
};
const Yd = () => {
  const [e, n] = Re.exports.useState(!1);
  return e
    ? P(Kd, { data: Yu })
    : P(Id, { event: Yu, openFilter: () => n(!0) });
};
const Xd = Xl.createRoot(document.getElementById("root"));
Xd.render(P(Ec.StrictMode, { children: P(Yd, {}) }));
