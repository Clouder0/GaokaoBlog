(function (e) {
  function t(t) {
    for (
      var n, i, c = t[0], s = t[1], l = t[2], u = 0, p = [];
      u < c.length;
      u++
    )
      (i = c[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]),
        (r[i] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    d && d(t);
    while (p.length) p.shift()();
    return a.push.apply(a, l || []), o();
  }
  function o() {
    for (var e, t = 0; t < a.length; t++) {
      for (var o = a[t], n = !0, c = 1; c < o.length; c++) {
        var s = o[c];
        0 !== r[s] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = i((i.s = o[0]))));
    }
    return e;
  }
  var n = {},
    r = { app: 0 },
    a = [];
  function i(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function (e, t, o) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (i.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          i.d(
            o,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return o;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var d = s;
  a.push([0, "chunk-vendors"]), o();
})({
  0: function (e, t, o) {
    e.exports = o("56d7");
  },
  "00db": function (e, t, o) {
    "use strict";
    o("071a");
  },
  "071a": function (e, t, o) {
    var n = o("5c50");
    n.__esModule && (n = n.default),
      "string" === typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    var r = o("499e").default;
    r("5ee78312", n, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "404b": function (e, t, o) {
    var n = o("9b20");
    n.__esModule && (n = n.default),
      "string" === typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    var r = o("499e").default;
    r("582e4d5c", n, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "56d7": function (e, t, o) {
    "use strict";
    o.r(t);
    o("e260"), o("e6cf"), o("cca6"), o("a79d");
    var n = o("7a23"),
      r = { class: "setting" },
      a = Object(n["createVNode"])(
        "div",
        { style: { color: "#999" } },
        "是否显示内容中的@日期和@todo",
        -1
      ),
      i = { class: "dialog-footer" },
      c = Object(n["createTextVNode"])("完 成"),
      s = { id: "top-bar" },
      l = { class: "left-col logo" },
      d = Object(n["createVNode"])(
        "div",
        { class: "logo-name" },
        "Little Things",
        -1
      ),
      u = { class: "btn-group" },
      p = { class: "el-dropdown-link" },
      b = Object(n["createTextVNode"])("待办事项"),
      f = Object(n["createTextVNode"])("统计报告（todo）"),
      m = Object(n["createTextVNode"])("设置"),
      g = { class: "right-col top-actions" },
      h = { class: "notes-count" },
      v = { class: "btn-group" },
      x = { class: "el-dropdown-link" },
      k = Object(n["createTextVNode"])("按优先级排序"),
      w = Object(n["createTextVNode"])("按更新时间排序"),
      O = Object(n["createTextVNode"])("按创建时间排序");
    function j(e, t, o, j, y, _) {
      var N = Object(n["resolveComponent"])("el-option"),
        V = Object(n["resolveComponent"])("el-select"),
        C = Object(n["resolveComponent"])("el-form-item"),
        D = Object(n["resolveComponent"])("el-form"),
        S = Object(n["resolveComponent"])("el-button"),
        T = Object(n["resolveComponent"])("el-dialog"),
        P = Object(n["resolveComponent"])("icon-refresh"),
        L = Object(n["resolveComponent"])("icon-application-menu"),
        R = Object(n["resolveComponent"])("el-dropdown-item"),
        B = Object(n["resolveComponent"])("el-dropdown-menu"),
        z = Object(n["resolveComponent"])("el-dropdown"),
        M = Object(n["resolveComponent"])("icon-view-grid-card"),
        E = Object(n["resolveComponent"])("icon-view-grid-list"),
        I = Object(n["resolveComponent"])("icon-sort-two"),
        U = Object(n["resolveDirective"])("loading");
      return Object(n["withDirectives"])(
        (Object(n["openBlock"])(),
        Object(n["createBlock"])(
          "div",
          {
            id: "little-things",
            class: e.viewType,
            "element-loading-text": "拼命加载中",
          },
          [
            Object(n["createVNode"])("div", r, [
              Object(n["createVNode"])(
                T,
                {
                  title: "🍑 Little Things 设置",
                  modelValue: e.dialogVisible,
                  "onUpdate:modelValue":
                    t[4] ||
                    (t[4] = function (t) {
                      return (e.dialogVisible = t);
                    }),
                  width: "35%",
                  center: "",
                  "before-close": e.handleClose,
                },
                {
                  footer: Object(n["withCtx"])(function () {
                    return [
                      Object(n["createVNode"])("span", i, [
                        Object(n["createVNode"])(
                          S,
                          {
                            type: "primary",
                            onClick:
                              t[3] ||
                              (t[3] = function (t) {
                                return (e.dialogVisible = !1);
                              }),
                          },
                          {
                            default: Object(n["withCtx"])(function () {
                              return [c];
                            }),
                            _: 1,
                          }
                        ),
                      ]),
                    ];
                  }),
                  default: Object(n["withCtx"])(function () {
                    return [
                      Object(n["createVNode"])(
                        D,
                        {
                          ref: "setting",
                          model: e.setting,
                          "label-width": "100px",
                        },
                        {
                          default: Object(n["withCtx"])(function () {
                            return [
                              Object(n["createVNode"])(
                                C,
                                { label: "自动刷新" },
                                {
                                  default: Object(n["withCtx"])(function () {
                                    return [
                                      Object(n["createVNode"])(
                                        V,
                                        {
                                          modelValue: e.setting.refreshAlways,
                                          "onUpdate:modelValue":
                                            t[1] ||
                                            (t[1] = function (t) {
                                              return (e.setting.refreshAlways =
                                                t);
                                            }),
                                          placeholder: "是否自动刷新",
                                        },
                                        {
                                          default: Object(n["withCtx"])(
                                            function () {
                                              return [
                                                Object(n["createVNode"])(N, {
                                                  label: "自动刷新",
                                                  value: "yes",
                                                }),
                                                Object(n["createVNode"])(N, {
                                                  label: "手动刷新",
                                                  value: "no",
                                                }),
                                              ];
                                            }
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["modelValue"]
                                      ),
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                              Object(n["createVNode"])(
                                C,
                                { label: "内容显示" },
                                {
                                  default: Object(n["withCtx"])(function () {
                                    return [
                                      Object(n["createVNode"])(
                                        V,
                                        {
                                          modelValue: e.setting.rawContent,
                                          "onUpdate:modelValue":
                                            t[2] ||
                                            (t[2] = function (t) {
                                              return (e.setting.rawContent = t);
                                            }),
                                          placeholder: "显示@日期和@todo",
                                        },
                                        {
                                          default: Object(n["withCtx"])(
                                            function () {
                                              return [
                                                Object(n["createVNode"])(N, {
                                                  label: "显示",
                                                  value: "yes",
                                                }),
                                                Object(n["createVNode"])(N, {
                                                  label: "不显示",
                                                  value: "no",
                                                }),
                                              ];
                                            }
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ["modelValue"]
                                      ),
                                      a,
                                    ];
                                  }),
                                  _: 1,
                                }
                              ),
                            ];
                          }),
                          _: 1,
                        },
                        8,
                        ["model"]
                      ),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["modelValue", "before-close"]
              ),
            ]),
            Object(n["createVNode"])("div", s, [
              Object(n["createVNode"])("div", l, [
                d,
                Object(n["createVNode"])("div", u, [
                  Object(n["createVNode"])(P, {
                    theme: "outline",
                    size: "18",
                    class: "btn",
                    title: "刷新",
                    onClick:
                      t[5] ||
                      (t[5] = function (t) {
                        return e.getData("reload");
                      }),
                  }),
                  Object(n["createVNode"])(
                    z,
                    { trigger: "click" },
                    {
                      dropdown: Object(n["withCtx"])(function () {
                        return [
                          Object(n["createVNode"])(B, null, {
                            default: Object(n["withCtx"])(function () {
                              return [
                                Object(n["createVNode"])(
                                  R,
                                  {
                                    icon: "el-icon-tickets",
                                    onClick:
                                      t[6] ||
                                      (t[6] = function (t) {
                                        return e.changeViewType("list-view");
                                      }),
                                  },
                                  {
                                    default: Object(n["withCtx"])(function () {
                                      return [b];
                                    }),
                                    _: 1,
                                  }
                                ),
                                Object(n["createVNode"])(
                                  R,
                                  {
                                    icon: "el-icon-date",
                                    onClick:
                                      t[7] ||
                                      (t[7] = function (t) {
                                        return e.changeViewType("report");
                                      }),
                                  },
                                  {
                                    default: Object(n["withCtx"])(function () {
                                      return [f];
                                    }),
                                    _: 1,
                                  }
                                ),
                                Object(n["createVNode"])(
                                  R,
                                  {
                                    icon: "el-icon-setting",
                                    onClick:
                                      t[8] ||
                                      (t[8] = function (t) {
                                        return e.showSettingDialog();
                                      }),
                                  },
                                  {
                                    default: Object(n["withCtx"])(function () {
                                      return [m];
                                    }),
                                    _: 1,
                                  }
                                ),
                              ];
                            }),
                            _: 1,
                          }),
                        ];
                      }),
                      default: Object(n["withCtx"])(function () {
                        return [
                          Object(n["createVNode"])("span", p, [
                            Object(n["createVNode"])(L, {
                              theme: "outline",
                              size: "18",
                              class: "btn",
                              title: "视图切换",
                            }),
                          ]),
                        ];
                      }),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              Object(n["createVNode"])("div", g, [
                Object(n["createVNode"])(
                  "div",
                  h,
                  Object(n["toDisplayString"])(e.pageName),
                  1
                ),
                Object(n["createVNode"])("div", v, [
                  e.showCard
                    ? (Object(n["openBlock"])(),
                      Object(n["createBlock"])(M, {
                        key: 0,
                        theme: "outline",
                        size: "18",
                        class: "btn",
                        onClick:
                          t[9] ||
                          (t[9] = function (t) {
                            return e.switchToCard(!1);
                          }),
                      }))
                    : (Object(n["openBlock"])(),
                      Object(n["createBlock"])(E, {
                        key: 1,
                        theme: "outline",
                        size: "18",
                        class: "btn",
                        onClick:
                          t[10] ||
                          (t[10] = function (t) {
                            return e.switchToCard(!0);
                          }),
                      })),
                  Object(n["createVNode"])(
                    z,
                    { trigger: "click" },
                    {
                      dropdown: Object(n["withCtx"])(function () {
                        return [
                          Object(n["createVNode"])(B, null, {
                            default: Object(n["withCtx"])(function () {
                              return [
                                Object(n["createVNode"])(
                                  R,
                                  {
                                    icon: "el-icon-wind-power",
                                    onClick:
                                      t[11] ||
                                      (t[11] = function (t) {
                                        return e.changeOrderBy("priority");
                                      }),
                                  },
                                  {
                                    default: Object(n["withCtx"])(function () {
                                      return [k];
                                    }),
                                    _: 1,
                                  }
                                ),
                                Object(n["createVNode"])(
                                  R,
                                  {
                                    icon: "el-icon-date",
                                    onClick:
                                      t[12] ||
                                      (t[12] = function (t) {
                                        return e.changeOrderBy("updated_stamp");
                                      }),
                                  },
                                  {
                                    default: Object(n["withCtx"])(function () {
                                      return [w];
                                    }),
                                    _: 1,
                                  }
                                ),
                                Object(n["createVNode"])(
                                  R,
                                  {
                                    icon: "el-icon-date",
                                    onClick:
                                      t[13] ||
                                      (t[13] = function (t) {
                                        return e.changeOrderBy("created_stamp");
                                      }),
                                  },
                                  {
                                    default: Object(n["withCtx"])(function () {
                                      return [O];
                                    }),
                                    _: 1,
                                  }
                                ),
                              ];
                            }),
                            _: 1,
                          }),
                        ];
                      }),
                      default: Object(n["withCtx"])(function () {
                        return [
                          Object(n["createVNode"])("span", x, [
                            Object(n["createVNode"])(I, {
                              theme: "outline",
                              size: "18",
                              class: "btn",
                              title: "排序",
                            }),
                          ]),
                        ];
                      }),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ]),
            (Object(n["openBlock"])(),
            Object(n["createBlock"])(
              Object(n["resolveDynamicComponent"])(e.viewType),
              {
                compData: e.compData,
                id: "main-content",
                class: e.viewType + "-comp",
                counts: e.counts,
              },
              null,
              8,
              ["compData", "class", "counts"]
            )),
          ],
          2
        )),
        [[U, e.loading]]
      );
    }
    var y = o("1da1"),
      _ =
        (o("ac1f"),
        o("1276"),
        o("a15b"),
        o("159b"),
        o("5319"),
        o("841c"),
        o("96cf"),
        o("3fd4")),
      N = o("d4ec"),
      V = o("bee2"),
      C = o("262e"),
      D = o("2caf"),
      S = (o("caad"), o("4de4"), o("2532"), o("4dec")),
      T = o("53ca"),
      P = (o("fb6a"), new Date()),
      L = P.getDay(),
      R = P.getDate(),
      B = P.getMonth(),
      z = P.getYear();
    z += z < 2e3 ? 1900 : 0;
    var M = {
        strToTimeStamp: function (e) {
          var t = e.slice(0, 4),
            o = e.slice(4, 6),
            n = e.slice(6, 8),
            r = e.slice(8, 10),
            a = e.slice(10, 12),
            i = e.slice(12, 14),
            c = t + "-" + o + "-" + n + " " + r + ":" + a + ":" + i,
            s = new Date(c).getTime();
          return s;
        },
        getNowDay: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "string";
          return "string" == e ? this.formatDate(new Date()) : new Date();
        },
        getTomorrowDay: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "string",
            t = new Date(P.getFullYear(), B, R + 1);
          return "string" == e ? this.formatDate(t) : t;
        },
        getAfterTomorrowDay: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "string",
            t = new Date(P.getFullYear(), B, R + 2);
          return "string" == e ? this.formatDate(t) : t;
        },
        getStartDayOfWeek: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "string",
            t = L || 7,
            o = new Date(P.getFullYear(), B, R + 1 - t);
          return "string" == e ? this.formatDate(o) : o;
        },
        getEndDayOfWeek: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "string",
            t = L || 7,
            o = new Date(P.getFullYear(), B, R + 7 - t);
          return "string" == e ? this.formatDate(o) : o;
        },
        getStartDayOfMonth: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "string",
            t = new Date(z, B, 1);
          return "string" == e ? this.formatDate(t) : t;
        },
        getEndDayOfMonth: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "string",
            t = new Date(z, B, this.getMonthDays());
          return "string" == e ? this.formatDate(t) : t;
        },
        getMonthDays: function () {
          var e = new Date(z, B, 1),
            t = new Date(z, B + 1, 1),
            o = (t - e) / 864e5;
          return o;
        },
        formatDate: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          "object" != Object(T["a"])(e) && (e = new Date(1 * e));
          var o,
            n = e.getFullYear(),
            r = e.getMonth() + 1,
            a = e.getDate(),
            i = e.getHours(),
            c = e.getMinutes(),
            s = e.getSeconds(),
            l = ("0" + r).slice(-2),
            d = ("0" + a).slice(-2),
            u = ("0" + i).slice(-2),
            p = ("0" + c).slice(-2),
            b = ("0" + s).slice(-2);
          switch (t) {
            case 0:
              o = n + "-" + l + "-" + d;
              break;
            case 1:
              o = n + "-" + l + "-" + d + " " + u + ":" + p + ":" + b;
              break;
            case 2:
              o = n + "/" + l + "/" + d + " " + u + ":" + p + ":" + b;
              break;
            case 3:
              o = n + "/" + l + "/" + d;
              break;
            case 4:
              o = n < z ? n + "年" + r + "月" + a + "日" : r + "月" + a + "日";
              break;
            default:
              o = n + "年" + r + "月" + a + "日";
              break;
          }
          return o;
        },
      },
      E = { DateUtil: M },
      I = (function (e) {
        Object(C["a"])(o, e);
        var t = Object(D["a"])(o);
        function o() {
          var e;
          return (
            Object(N["a"])(this, o),
            (e = t.call(this, "database")),
            e
              .version(2)
              .stores({
                todos:
                  "&block_id, raw_content, pure_content, box, folder, doc, type, created, created_stamp, updated, updated_stamp, todo, priority, todo_index, priority_index, due, due_stamp,done,done_stamp",
              }),
            (e.todos = e.table("todos")),
            (e.today = new Date(new Date().toLocaleDateString()).getTime()),
            (e.tomorrow = E.DateUtil.getTomorrowDay("date").getTime()),
            (e.afterTomorrow =
              E.DateUtil.getAfterTomorrowDay("date").getTime()),
            (e.weekStart = E.DateUtil.getStartDayOfWeek("date").getTime()),
            (e.weekEnd = E.DateUtil.getEndDayOfWeek("date").getTime()),
            (e.monthStart = E.DateUtil.getStartDayOfMonth("date").getTime()),
            (e.monthEnd = E.DateUtil.getEndDayOfMonth("date").getTime()),
            e
          );
        }
        return (
          Object(V["a"])(o, [
            {
              key: "getTodos",
              value: (function () {
                var e = Object(y["a"])(
                  regeneratorRuntime.mark(function e(t, o) {
                    var n, r, a, i, c, s, l, d, u, p;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (n = ["inbox", "doing", "done", "someday"]),
                                (r = ["P0", "P1", "P2", "P3"]),
                                (i = this.today),
                                (c = this.tomorrow),
                                (s = this.afterTomorrow),
                                (l = this.weekStart),
                                (d = this.weekEnd),
                                (u = this.monthStart),
                                (p = this.monthEnd),
                                (t = t || "all"),
                                (o = o || "updated_stamp"),
                                "custom" == o &&
                                  (o = n.includes(t)
                                    ? "todo_index"
                                    : r.includes(t)
                                    ? "priority_index"
                                    : "updated_stamp"),
                                (e.t0 = t),
                                (e.next =
                                  "done" === e.t0
                                    ? 15
                                    : "today" === e.t0
                                    ? 17
                                    : "tomorrow" === e.t0
                                    ? 19
                                    : "week" === e.t0
                                    ? 21
                                    : "month" === e.t0
                                    ? 23
                                    : 25);
                              break;
                            case 15:
                              return (
                                (a = function (e) {
                                  return "done" == e.todo;
                                }),
                                e.abrupt("break", 27)
                              );
                            case 17:
                              return (
                                (a = function (e) {
                                  return (
                                    e.due_stamp >= i &&
                                    e.due_stamp < c &&
                                    "done" != e.todo
                                  );
                                }),
                                e.abrupt("break", 27)
                              );
                            case 19:
                              return (
                                (a = function (e) {
                                  return (
                                    e.due_stamp >= c &&
                                    e.due_stamp < s &&
                                    "done" != e.todo
                                  );
                                }),
                                e.abrupt("break", 27)
                              );
                            case 21:
                              return (
                                (a = function (e) {
                                  return (
                                    e.due_stamp >= l &&
                                    e.due_stamp < d &&
                                    "done" != e.todo
                                  );
                                }),
                                e.abrupt("break", 27)
                              );
                            case 23:
                              return (
                                (a = function (e) {
                                  return (
                                    e.due_stamp >= u &&
                                    e.due_stamp < p &&
                                    "done" != e.todo
                                  );
                                }),
                                e.abrupt("break", 27)
                              );
                            case 25:
                              return (
                                (a = function (e) {
                                  return "done" != e.todo;
                                }),
                                e.abrupt("break", 27)
                              );
                            case 27:
                              if (
                                (["inbox", "doing", "someday"].includes(t) &&
                                  (a = function (e) {
                                    return e.todo == t;
                                  }),
                                ["P0", "P1", "P2", "P3"].includes(t) &&
                                  (a = function (e) {
                                    return e.priority == t && "done" != e.todo;
                                  }),
                                "created_stamp" != o && "updated_stamp" != o)
                              ) {
                                e.next = 35;
                                break;
                              }
                              return (
                                (e.next = 32),
                                this.todos
                                  .orderBy(o)
                                  .filter(a)
                                  .reverse()
                                  .toArray()
                              );
                            case 32:
                              return e.abrupt("return", e.sent);
                            case 35:
                              return (
                                (e.next = 37),
                                this.todos.orderBy(o).filter(a).toArray()
                              );
                            case 37:
                              return e.abrupt("return", e.sent);
                            case 38:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t, o) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "getCounts",
              value: (function () {
                var e = Object(y["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    var o,
                      n = this;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!["inbox", "doing", "someday"].includes(t)) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 3),
                                this.todos
                                  .where({ todo: t })
                                  .and(function (e) {
                                    return "done" != e.todo;
                                  })
                                  .count()
                              );
                            case 3:
                              o = e.sent;
                            case 4:
                              if (!["P0", "P1", "P2", "P3"].includes(t)) {
                                e.next = 8;
                                break;
                              }
                              return (
                                (e.next = 7),
                                this.todos
                                  .where({ priority: t })
                                  .and(function (e) {
                                    return "done" != e.todo;
                                  })
                                  .count()
                              );
                            case 7:
                              o = e.sent;
                            case 8:
                              if ("done" != t) {
                                e.next = 12;
                                break;
                              }
                              return (
                                (e.next = 11),
                                this.todos.where({ todo: "done" }).count()
                              );
                            case 11:
                              o = e.sent;
                            case 12:
                              if ("today" != t) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.next = 15),
                                this.todos
                                  .filter(function (e) {
                                    return (
                                      e.due_stamp >= n.today &&
                                      e.due_stamp < n.tomorrow &&
                                      "done" != e.todo
                                    );
                                  })
                                  .count()
                              );
                            case 15:
                              o = e.sent;
                            case 16:
                              if ("tomorrow" != t) {
                                e.next = 20;
                                break;
                              }
                              return (
                                (e.next = 19),
                                this.todos
                                  .filter(function (e) {
                                    return (
                                      e.due_stamp >= n.tomorrow &&
                                      e.due_stamp < n.afterTomorrow &&
                                      "done" != e.todo
                                    );
                                  })
                                  .count()
                              );
                            case 19:
                              o = e.sent;
                            case 20:
                              if ("week" != t) {
                                e.next = 24;
                                break;
                              }
                              return (
                                (e.next = 23),
                                this.todos
                                  .filter(function (e) {
                                    return (
                                      e.due_stamp >= n.weekStart &&
                                      e.due_stamp < n.weekEnd &&
                                      "done" != e.todo
                                    );
                                  })
                                  .count()
                              );
                            case 23:
                              o = e.sent;
                            case 24:
                              if ("month" != t) {
                                e.next = 28;
                                break;
                              }
                              return (
                                (e.next = 27),
                                this.todos
                                  .filter(function (e) {
                                    return (
                                      e.due_stamp >= n.monthStart &&
                                      e.due_stamp < n.monthEnd &&
                                      "done" != e.todo
                                    );
                                  })
                                  .count()
                              );
                            case 27:
                              o = e.sent;
                            case 28:
                              if ("all" != t) {
                                e.next = 32;
                                break;
                              }
                              return (
                                (e.next = 31),
                                this.todos
                                  .filter(function (e) {
                                    return "done" != e.todo;
                                  })
                                  .count()
                              );
                            case 31:
                              o = e.sent;
                            case 32:
                              return e.abrupt("return", o);
                            case 33:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "setTodoStatus",
              value: function (e, t) {
                return this.todos.update(e, { todo: t });
              },
            },
            {
              key: "addTodo",
              value: function (e) {
                return this.todos.add(e);
              },
            },
            {
              key: "updateTodo",
              value: function (e, t) {
                return this.todos.update(e, t);
              },
            },
            {
              key: "deleteTodo",
              value: function (e) {
                return this.todos.delete(e);
              },
            },
            {
              key: "setTodoIndex",
              value: function (e, t) {
                return this.todos.update(e, { todo_index: t || 0 });
              },
            },
            {
              key: "setPriorityIndex",
              value: function (e, t) {
                return this.todos.update(e, { priority_index: t || 0 });
              },
            },
          ]),
          o
        );
      })(S["a"]),
      U = (o("d3b7"), o("3ca3"), o("ddb0"), o("b0c0"), o("bc3a")),
      A = o.n(U),
      $ = {
        IS_TEST: !1,
        TEST_URL: "http://127.0.0.1:6806",
        PROD_URL: "http://127.0.0.1:6806",
        database: "mydb5.3",
        table_name: "todo",
      };
    function F() {
      var e = W(),
        t = { system: $, user: e };
      return t;
    }
    function W() {
      try {
        return JSON.parse(localStorage.getItem("config"));
      } catch (e) {
        return (
          console.log("%c解析用户配置文件出错：", "color:red"),
          console.log(e),
          !1
        );
      }
    }
    function Y(e) {
      var t;
      return (
        (t = $.IS_TEST ? $.TEST_URL : $.PROD_URL),
        new Promise(function (o, n) {
          A.a
            .post(t + "/api/query/sql", { stmt: e })
            .then(function (e) {
              200 == e.status &&
                (0 == e.data.code
                  ? o(e.data.data)
                  : (console.log("服务端正常反应，出现其他错误"), n(e.data)));
            })
            .catch(function (e) {
              n(e);
            });
        })
      );
    }
    function q(e) {
      var t;
      return (
        (t = $.IS_TEST ? $.TEST_URL : $.PROD_URL),
        new Promise(function (o, n) {
          A.a
            .post(t + "/api/attr/setBlockAttrs", e)
            .then(function (t) {
              t && (console.log("设置块属性："), console.log(e), o(!0));
            })
            .catch(function (e) {
              n(e);
            });
        })
      );
    }
    function G() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = Object(y["a"])(
          regeneratorRuntime.mark(function e() {
            var t,
              o,
              n,
              r = arguments;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = r.length > 0 && void 0 !== r[0] ? r[0] : ""),
                        (e.prev = 1),
                        (o =
                          "select b.id ,b.type,b.content, b.box,b.path,b.created,b.updated, a.name as attr_name, a.value as attr_value from blocks as b left join attributes as a on b.id = a.block_id where b.type <> 'l' and ( a.name = 'custom-lz-todo' or a.name= 'custom-lz-priority' ) and b.path like '%" +
                          t +
                          "%' union select b.id ,b.type,b.content , b.box,b.path,b.created,b.updated, a.name as attr_name, a.value as attr_value from blocks as b left join attributes as a on b.id = a.block_id  where b.id in (select block_id from spans where (type = 'text' or type = 'tag') and (content like '%@20%' or content like '%@todo%') and path like '%" +
                          t +
                          "%')"),
                        (e.next = 5),
                        Y(o)
                      );
                    case 5:
                      if (((n = e.sent), 0 == n.length)) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", n);
                    case 10:
                      throw "远程数据请求结果为空";
                    case 11:
                      e.next = 16;
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e["catch"](1)), console.log(e.t0);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 13]]
            );
          })
        )),
        J.apply(this, arguments)
      );
    }
    o("466d"), o("99af");
    function X(e) {
      for (
        var t = window.location.search.substring(1), o = t.split("&"), n = 0;
        n < o.length;
        n++
      ) {
        var r = o[n].split("=");
        if (r[0] == e) return r[1];
      }
      return !1;
    }
    function H(e) {
      var t,
        o,
        n,
        r,
        a,
        i =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "element",
        c = F(),
        s = c.user,
        l = { danger: [""], warning: [""], success: [""], primary: [""] };
      s = s || l;
      var d = "background-color:",
        u = ["P0", "P1"].concat(s.danger),
        p = ["P2", "doing"].concat(s.warning),
        b = ["P3", "P4", "P5", "done"].concat(s.success),
        f = ["inbox"].concat(s.primary);
      return (
        "element" == i
          ? ((t = "info"),
            (o = "danger"),
            (n = "warning"),
            (r = "success"),
            (a = "primary"))
          : ((t = d + "#666666;"),
            (o = d + "#f56c6c;"),
            (n = d + "#e6a23c;"),
            (r = d + "#67c23a;"),
            (a = d + "#409eff;")),
        u.includes(e) && (t = o),
        p.includes(e) && (t = n),
        b.includes(e) && (t = r),
        f.includes(e) && (t = a),
        t
      );
    }
    var K = Object(n["withScopeId"])("data-v-5e17dd5e");
    Object(n["pushScopeId"])("data-v-5e17dd5e");
    var Q = { class: "left-col" },
      Z = { class: "todo-lists" },
      ee = Object(n["createVNode"])(
        "div",
        { class: "list-name primary" },
        "全部事项",
        -1
      ),
      te = { class: "list-group" },
      oe = Object(n["createVNode"])("div", { class: "list-head" }, "待办", -1),
      ne = Object(n["createVNode"])(
        "div",
        { class: "list-name normal" },
        "收集箱",
        -1
      ),
      re = Object(n["createVNode"])(
        "div",
        { class: "list-name warning" },
        "进行中",
        -1
      ),
      ae = Object(n["createVNode"])(
        "div",
        { class: "list-name primary" },
        "某天",
        -1
      ),
      ie = Object(n["createVNode"])(
        "div",
        { class: "list-name success" },
        "已完成",
        -1
      ),
      ce = { class: "list-group" },
      se = Object(n["createVNode"])("div", { class: "list-head" }, "日期", -1),
      le = Object(n["createVNode"])(
        "div",
        { class: "list-name danger" },
        "今天",
        -1
      ),
      de = Object(n["createVNode"])(
        "div",
        { class: "list-name warning" },
        "明天",
        -1
      ),
      ue = Object(n["createVNode"])(
        "div",
        { class: "list-name success" },
        "本周",
        -1
      ),
      pe = Object(n["createVNode"])(
        "div",
        { class: "list-name primary" },
        "本月",
        -1
      ),
      be = { class: "list-group" },
      fe = Object(n["createVNode"])(
        "div",
        { class: "list-head" },
        "优先级",
        -1
      ),
      me = Object(n["createVNode"])(
        "div",
        { class: "list-name danger" },
        "P0",
        -1
      ),
      ge = Object(n["createVNode"])(
        "div",
        { class: "list-name danger" },
        "P1",
        -1
      ),
      he = Object(n["createVNode"])(
        "div",
        { class: "list-name warning" },
        "P2",
        -1
      ),
      ve = Object(n["createVNode"])(
        "div",
        { class: "list-name success" },
        "P3",
        -1
      ),
      xe = { class: "right-col" },
      ke = { key: 0 },
      we = Object(n["createVNode"])(
        "span",
        { class: "el-checkbox__inner" },
        null,
        -1
      ),
      Oe = Object(n["createVNode"])(
        "input",
        { class: "el-checkbox__original", type: "checkbox", value: "false" },
        null,
        -1
      ),
      je = { style: { "flex-grow": "1" } },
      ye = { key: 0, class: "note-content" },
      _e = { key: 1, class: "note-content" },
      Ne = { class: "note-attrs" },
      Ve = { key: 0 },
      Ce = { key: 1, style: { height: "100%" } };
    Object(n["popScopeId"])();
    var De = K(function (e, t, o, r, a, i) {
        var c = Object(n["resolveComponent"])("draggable"),
          s = Object(n["resolveComponent"])("el-empty"),
          l = Object(n["resolveComponent"])("el-scrollbar");
        return (
          Object(n["openBlock"])(),
          Object(n["createBlock"])("div", null, [
            Object(n["createVNode"])("div", Q, [
              Object(n["createVNode"])("div", Z, [
                Object(n["createVNode"])(
                  "div",
                  {
                    class: ["all-lists", "all" == e.listName ? "chosen" : ""],
                    onClick:
                      t[1] ||
                      (t[1] = function (t) {
                        return e.clickList("all", "all");
                      }),
                  },
                  [
                    ee,
                    Object(n["createVNode"])(
                      "div",
                      {
                        class: [
                          "list-number",
                          e.counts.all > 0 ? "deeper" : "",
                        ],
                      },
                      Object(n["toDisplayString"])(
                        e.counts.all ? e.counts.all : 0
                      ),
                      3
                    ),
                  ],
                  2
                ),
                Object(n["createVNode"])("div", te, [
                  oe,
                  Object(n["createVNode"])("ul", null, [
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[2] ||
                          (t[2] = function (t) {
                            return e.clickList("todo", "inbox");
                          }),
                        class: "inbox" == e.listName ? "chosen" : "",
                      },
                      [
                        ne,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.inbox > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.inbox ? e.counts.inbox : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[3] ||
                          (t[3] = function (t) {
                            return e.clickList("todo", "doing");
                          }),
                        class: "doing" == e.listName ? "chosen" : "",
                      },
                      [
                        re,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.doing > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.doing ? e.counts.doing : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[4] ||
                          (t[4] = function (t) {
                            return e.clickList("todo", "someday");
                          }),
                        class: "someday" == e.listName ? "chosen" : "",
                      },
                      [
                        ae,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.someday > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.someday ? e.counts.someday : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[5] ||
                          (t[5] = function (t) {
                            return e.clickList("todo", "done");
                          }),
                        class: "done" == e.listName ? "chosen" : "",
                      },
                      [
                        ie,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.done > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.done ? e.counts.done : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                  ]),
                ]),
                Object(n["createVNode"])("div", ce, [
                  se,
                  Object(n["createVNode"])("ul", null, [
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[6] ||
                          (t[6] = function (t) {
                            return e.clickList("date", "today");
                          }),
                        class: "today" == e.listName ? "chosen" : "",
                      },
                      [
                        le,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.today > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.today ? e.counts.today : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[7] ||
                          (t[7] = function (t) {
                            return e.clickList("date", "tomorrow");
                          }),
                        class: "tomorrow" == e.listName ? "chosen" : "",
                      },
                      [
                        de,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.tomorrow > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.tomorrow ? e.counts.tomorrow : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[8] ||
                          (t[8] = function (t) {
                            return e.clickList("date", "week");
                          }),
                        class: "week" == e.listName ? "chosen" : "",
                      },
                      [
                        ue,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.week > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.week ? e.counts.week : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[9] ||
                          (t[9] = function (t) {
                            return e.clickList("date", "month");
                          }),
                        class: "month" == e.listName ? "chosen" : "",
                      },
                      [
                        pe,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.month > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.month ? e.counts.month : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                  ]),
                ]),
                Object(n["createVNode"])("div", be, [
                  fe,
                  Object(n["createVNode"])("ul", null, [
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[10] ||
                          (t[10] = function (t) {
                            return e.clickList("priority", "P0");
                          }),
                        class: "P0" == e.listName ? "chosen" : "",
                      },
                      [
                        me,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.P0 > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.P0 ? e.counts.P0 : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[11] ||
                          (t[11] = function (t) {
                            return e.clickList("priority", "P1");
                          }),
                        class: "P1" == e.listName ? "chosen" : "",
                      },
                      [
                        ge,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.P1 > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.P1 ? e.counts.P1 : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[12] ||
                          (t[12] = function (t) {
                            return e.clickList("priority", "P2");
                          }),
                        class: "P2" == e.listName ? "chosen" : "",
                      },
                      [
                        he,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.P2 > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.P2 ? e.counts.P2 : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                    Object(n["createVNode"])(
                      "li",
                      {
                        onClick:
                          t[13] ||
                          (t[13] = function (t) {
                            return e.clickList("priority", "P3");
                          }),
                        class: "P3" == e.listName ? "chosen" : "",
                      },
                      [
                        ve,
                        Object(n["createVNode"])(
                          "div",
                          {
                            class: [
                              "list-number",
                              e.counts.P3 > 0 ? "deeper" : "",
                            ],
                          },
                          Object(n["toDisplayString"])(
                            e.counts.P3 ? e.counts.P3 : 0
                          ),
                          3
                        ),
                      ],
                      2
                    ),
                  ]),
                ]),
              ]),
            ]),
            Object(n["createVNode"])("div", xe, [
              Object(n["createVNode"])(
                l,
                { native: !1 },
                {
                  default: K(function () {
                    return [
                      0 != e.compData.length
                        ? (Object(n["openBlock"])(),
                          Object(n["createBlock"])("div", ke, [
                            Object(n["createVNode"])(
                              c,
                              {
                                class: ["note-list", e.showCard],
                                list: e.compData,
                                disabled: !e.enableDrag,
                                "item-key": "name",
                                onStart:
                                  t[14] ||
                                  (t[14] = function (t) {
                                    return (e.dragging = !0);
                                  }),
                                onEnd:
                                  t[15] ||
                                  (t[15] = function (t) {
                                    return (e.dragging = !1);
                                  }),
                              },
                              {
                                item: K(function (t) {
                                  var o = t.element;
                                  return [
                                    Object(n["createVNode"])(
                                      "div",
                                      {
                                        class: [
                                          "list-item",
                                          e.getStyle("checked", o.todo),
                                        ],
                                        id: "block-" + o.block_id,
                                        onContextmenu: function (t) {
                                          return e.rightMenu(t, o.block_id);
                                        },
                                      },
                                      [
                                        Object(n["createVNode"])(
                                          "div",
                                          {
                                            class: [
                                              "checkbox",
                                              e.getStyle(
                                                "priority",
                                                o.priority
                                              ),
                                            ],
                                            onClick: function (t) {
                                              return e.setDone(
                                                o.block_id,
                                                o.todo
                                              );
                                            },
                                          },
                                          [
                                            Object(n["createVNode"])(
                                              "span",
                                              {
                                                class: [
                                                  "el-checkbox__input",
                                                  o.type,
                                                ],
                                              },
                                              [we, Oe],
                                              2
                                            ),
                                          ],
                                          10,
                                          ["onClick"]
                                        ),
                                        Object(n["createVNode"])("div", je, [
                                          "yes" == e.showRawContent
                                            ? (Object(n["openBlock"])(),
                                              Object(n["createBlock"])(
                                                "div",
                                                ye,
                                                Object(n["toDisplayString"])(
                                                  o.raw_content
                                                ),
                                                1
                                              ))
                                            : (Object(n["openBlock"])(),
                                              Object(n["createBlock"])(
                                                "div",
                                                _e,
                                                Object(n["toDisplayString"])(
                                                  o.pure_content
                                                ),
                                                1
                                              )),
                                          Object(n["createVNode"])("div", Ne, [
                                            Object(n["createVNode"])(
                                              "div",
                                              null,
                                              [
                                                Object(n["createVNode"])(
                                                  "span",
                                                  {
                                                    class: "doc",
                                                    onClick: function (t) {
                                                      return e.openNote(
                                                        o.block_id
                                                      );
                                                    },
                                                  },
                                                  "@" +
                                                    Object(
                                                      n["toDisplayString"]
                                                    )(o.doc),
                                                  9,
                                                  ["onClick"]
                                                ),
                                                o.due
                                                  ? (Object(n["openBlock"])(),
                                                    Object(n["createBlock"])(
                                                      "span",
                                                      Ve,
                                                      " @" +
                                                        Object(
                                                          n["toDisplayString"]
                                                        )(o.due),
                                                      1
                                                    ))
                                                  : Object(
                                                      n["createCommentVNode"]
                                                    )("", !0),
                                              ]
                                            ),
                                          ]),
                                        ]),
                                      ],
                                      42,
                                      ["id", "onContextmenu"]
                                    ),
                                  ];
                                }),
                                _: 1,
                              },
                              8,
                              ["class", "list", "disabled"]
                            ),
                          ]))
                        : (Object(n["openBlock"])(),
                          Object(n["createBlock"])("div", Ce, [
                            Object(n["createVNode"])(s, {
                              description: "暂无内容",
                              style: {
                                display: "flex",
                                "align-items": "center",
                                height: "100%",
                              },
                            }),
                          ])),
                    ];
                  }),
                  _: 1,
                }
              ),
            ]),
          ])
        );
      }),
      Se = (o("25f0"), o("b76a")),
      Te = o.n(Se),
      Pe = Object(n["defineComponent"])({
        name: "ListView",
        display: "ListView",
        order: 0,
        components: { draggable: Te.a },
        props: { compData: null, counts: null },
        computed: {
          showCard: function () {
            return this.$parent.showCard ? "h-list" : "v-list";
          },
          showRawContent: function () {
            return this.$parent.setting.rawContent;
          },
          listName: function () {
            return this.$parent.listName;
          },
          enableDrag: function () {
            return "custom" == this.$parent.order;
          },
        },
        data: function () {
          return { dragging: !1, preTodoStatus: {} };
        },
        methods: {
          openNote: function (e) {
            window.open("siyuan://notes/" + e, "_blank");
          },
          clickList: function (e, t) {
            this.$parent.clickList(e, t);
          },
          setDone: function (e, t) {
            var o = document.querySelector("#block-" + e);
            if (o.classList.contains("is-checked")) {
              o.classList.remove("is-checked");
              var n = this.preTodoStatus[e] ? this.preTodoStatus[e] : "inbox";
              this.$parent.setTodoStatus(e, n), delete this.preTodoStatus[e];
            } else
              (this.preTodoStatus[e] = t),
                o.classList.add("is-checked"),
                this.$parent.setTodoStatus(e, "done");
          },
          updateStatus: function (e, t, o) {
            var n = {};
            (n[t] = o),
              this.$parent.updateTodo(e, n),
              _["a"].success({ message: "操作成功", type: "success" });
          },
          saveIndex: function () {
            for (
              var e = this.$parent.listGroup, t = this.compData, o = 0;
              o < t.length;
              o++
            ) {
              var n = t[o]["block_id"],
                r = void 0,
                a = void 0;
              "todo" == e
                ? ((r = {
                    id: n,
                    attrs: { "custom-lz-todo-index": o.toString() },
                  }),
                  (a = { todo_index: o }))
                : ((r = {
                    id: n,
                    attrs: { "custom-lz-priority-index": o.toString() },
                  }),
                  (a = { priority_index: o })),
                q(r)
                  .then()
                  .catch(function (e) {
                    console.log(e);
                  }),
                this.$parent.updateTodo(n, a);
            }
          },
          getStyle: function (e, t) {
            return "priority" == e
              ? H(t)
              : "checked" == e
              ? "done" == t
                ? "is-checked"
                : ""
              : void 0;
          },
          rightMenu: function (e, t) {
            var o = this;
            e.preventDefault(),
              this.$contextmenu({
                x: e.x,
                y: e.y,
                items: [
                  {
                    label: "待办状态",
                    icon: "primary",
                    children: [
                      {
                        label: "Inbox",
                        icon: "normal",
                        onClick: function () {
                          o.updateStatus(t, "todo", "inbox");
                        },
                      },
                      {
                        label: "Doing",
                        icon: "warning",
                        onClick: function () {
                          o.updateStatus(t, "todo", "doing");
                        },
                      },
                      {
                        label: "Done",
                        icon: "success",
                        onClick: function () {
                          o.updateStatus(t, "todo", "done");
                        },
                      },
                      {
                        label: "Someday",
                        icon: "primary",
                        onClick: function () {
                          o.updateStatus(t, "todo", "someday");
                        },
                      },
                      {
                        label: "移除",
                        icon: "normal",
                        onClick: function () {
                          o.updateStatus(t, "todo", "");
                        },
                      },
                    ],
                  },
                  {
                    label: "优先级",
                    icon: "primary",
                    children: [
                      {
                        label: "P0",
                        icon: "danger",
                        onClick: function () {
                          o.updateStatus(t, "priority", "P0");
                        },
                      },
                      {
                        label: "P1",
                        icon: "danger",
                        onClick: function () {
                          o.updateStatus(t, "priority", "P1");
                        },
                      },
                      {
                        label: "P2",
                        icon: "warning",
                        onClick: function () {
                          o.updateStatus(t, "priority", "P2");
                        },
                      },
                      {
                        label: "P3",
                        icon: "success",
                        onClick: function () {
                          o.updateStatus(t, "priority", "P3");
                        },
                      },
                      {
                        label: "移除",
                        icon: "normal",
                        onClick: function () {
                          o.updateStatus(t, "priority", "");
                        },
                      },
                    ],
                  },
                ],
              });
            var n = document.querySelector(".mx-context-menu-host");
            n.addEventListener("click", function () {
              var e = document.querySelector(".mx-context-menu-host");
              e && e.remove();
            });
          },
        },
        watch: {
          compData: {
            handler: function () {
              "custom" != this.$parent.order ||
                ("todo" != this.$parent.listGroup &&
                  "priority" != this.$parent.listGroup) ||
                this.saveIndex();
            },
            deep: !0,
          },
        },
      });
    o("e700"), o("00db");
    (Pe.render = De), (Pe.__scopeId = "data-v-5e17dd5e");
    var Le = Pe,
      Re = Object(n["createStaticVNode"])(
        '<div class="left-col"><div class="todo-lists"><div class="all-lists"><div class="list-name primary">全部事项</div><div class="list-number">0</div></div><div class="list-group"><div class="list-head">待办</div><ul><li><div class="list-name normal">收集箱</div><div class="list-number">0</div></li><li><div class="list-name warning">进行中</div><div class="list-number">0</div></li><li><div class="list-name primary">某天</div><div class="list-number">0</div></li><li><div class="list-name success">已完成</div><div class="list-number">0</div></li></ul></div></div></div>',
        1
      ),
      Be = { class: "right-col" },
      ze = { class: "report-btn" },
      Me = Object(n["createVNode"])(
        "div",
        { class: "report-content" },
        " 该模块待开发... ",
        -1
      );
    function Ee(e, t, o, r, a, i) {
      var c = Object(n["resolveComponent"])("el-option"),
        s = Object(n["resolveComponent"])("el-select");
      return (
        Object(n["openBlock"])(),
        Object(n["createBlock"])("div", null, [
          Re,
          Object(n["createVNode"])("div", Be, [
            Object(n["createVNode"])("div", ze, [
              Object(n["createVNode"])(
                s,
                {
                  modelValue: e.value,
                  "onUpdate:modelValue":
                    t[1] ||
                    (t[1] = function (t) {
                      return (e.value = t);
                    }),
                  placeholder: "请选择",
                  size: "small",
                },
                {
                  default: Object(n["withCtx"])(function () {
                    return [
                      (Object(n["openBlock"])(!0),
                      Object(n["createBlock"])(
                        n["Fragment"],
                        null,
                        Object(n["renderList"])(e.options, function (e) {
                          return (
                            Object(n["openBlock"])(),
                            Object(n["createBlock"])(
                              c,
                              { key: e.value, label: e.label, value: e.value },
                              null,
                              8,
                              ["label", "value"]
                            )
                          );
                        }),
                        128
                      )),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["modelValue"]
              ),
            ]),
            Me,
          ]),
        ])
      );
    }
    var Ie = Object(n["defineComponent"])({
      data: function () {
        return {
          options: [
            { value: "选项1", label: "黄金糕" },
            { value: "选项2", label: "双皮奶" },
            { value: "选项3", label: "蚵仔煎" },
            { value: "选项4", label: "龙须面" },
            { value: "选项5", label: "北京烤鸭" },
          ],
          value: "",
        };
      },
    });
    o("d066a");
    Ie.render = Ee;
    var Ue = Ie,
      Ae = Object(n["defineComponent"])({
        name: "App",
        components: { ListView: Le, Report: Ue },
        computed: {
          pageName: function () {
            return "list-view" == this.viewType
              ? this.listName.toUpperCase() +
                  ": " +
                  this.counts[this.listName] +
                  " Notes"
              : "report" == this.viewType
              ? "报告"
              : "Todo";
          },
        },
        data: function () {
          return {
            blockId: "",
            widgetSetting: {},
            compData: [],
            counts: {},
            loading: !1,
            viewType: "list-view",
            listName: "all",
            listGroup: "all",
            showCard: !1,
            dialogVisible: !1,
            where: "all",
            order: "updated_stamp",
            setting: { refreshAlways: "no", rawContent: "no" },
          };
        },
        methods: {
          initWidget: function () {
            var e = this;
            return Object(y["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.getWidgetSetting();
                      case 2:
                        return (t.next = 4), e.getData("reload");
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getWidgetSetting: function () {
            var e = this;
            return Object(y["a"])(
              regeneratorRuntime.mark(function t() {
                var o, n, r, a;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((o = X("blockid")), !o)) {
                          t.next = 5;
                          break;
                        }
                        (e.blockId = o), (t.next = 7);
                        break;
                      case 5:
                        throw (
                          (_["a"].error("请在URL中配置块ID（blockid=XXX）"),
                          "url 中未配置 blockid 信息")
                        );
                      case 7:
                        return (
                          (n =
                            "SELECT b.id AS id, b.box AS box, b.type AS type, b.path AS path, a.name AS attrName, a.value AS attrValue FROM blocks AS b LEFT JOIN attributes AS a ON b.id = a.block_id WHERE b.id = '" +
                            e.blockId +
                            "'"),
                          (t.next = 10),
                          Y(n)
                        );
                      case 10:
                        if (((r = t.sent), 0 != r.length)) {
                          t.next = 13;
                          break;
                        }
                        throw "未查询到对应的块内容 BlockId:" + e.blockId;
                      case 13:
                        (a = r[0].path.split("/")),
                          a.pop(),
                          (a = a.join("/") + "/"),
                          (e.widgetSetting.folderPath = a),
                          console.log("获取用户之前保存的设置："),
                          r.forEach(function (t) {
                            var o = t.attrName;
                            "custom-lz-order-type" == o &&
                              ((e.widgetSetting.orderType = t.attrValue),
                              console.log(" * ordertype：" + e.orderType));
                          });
                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          getData: function () {
            var e = arguments,
              t = this;
            return Object(y["a"])(
              regeneratorRuntime.mark(function o() {
                var n, r, a;
                return regeneratorRuntime.wrap(function (o) {
                  while (1)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (
                          ((n = e.length > 0 && void 0 !== e[0] ? e[0] : "no"),
                          (t.loading = !0),
                          (r = t.widgetSetting.folderPath
                            ? t.widgetSetting.folderPath
                            : ""),
                          "reload" != n)
                        ) {
                          o.next = 6;
                          break;
                        }
                        return (o.next = 6), t.getRemote(r);
                      case 6:
                        return (o.next = 8), t.db.getTodos(t.where, t.order);
                      case 8:
                        if (((a = o.sent), (t.compData = a), "reload" != n)) {
                          o.next = 13;
                          break;
                        }
                        return (o.next = 13), t.getCounts();
                      case 13:
                        t.loading = !1;
                      case 14:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          getRemote: function (e) {
            var t = this;
            return Object(y["a"])(
              regeneratorRuntime.mark(function o() {
                var n, r, a, i, c, s, l, d, u, p;
                return regeneratorRuntime.wrap(function (o) {
                  while (1)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (o.next = 2), G(e);
                      case 2:
                        if (((n = o.sent), n)) {
                          o.next = 6;
                          break;
                        }
                        return (
                          _["a"].warning("文档内未检索到待办事项"),
                          o.abrupt("return", !1)
                        );
                      case 6:
                        t.db.todos.clear(), (r = 0);
                      case 8:
                        if (!(r < n.length)) {
                          o.next = 28;
                          break;
                        }
                        return (
                          (a = n[r]),
                          (i = t.date.strToTimeStamp(a.created)),
                          (c = t.date.strToTimeStamp(a.updated)),
                          (s = {
                            block_id: a.id,
                            box: a.box,
                            folder: t.parseFolderName(a.path),
                            doc: t.parseFileName(a.path).replace(".sy", ""),
                            type: a.type,
                            created: t.date.formatDate(i),
                            created_stamp: i,
                            updated: t.date.formatDate(c),
                            updated_stamp: c,
                          }),
                          (l =
                            /#?@([1-9]\d{3}-?(0[1-9]|1[0-2])-?(0[1-9]|[1-2][0-9]|3[0-1]))#?/),
                          (d = l.exec(a.content)),
                          (s.raw_content = a.content),
                          (s.pure_content = a.content
                            .replace(l, "")
                            .replace("@todo", "")),
                          d &&
                            ((u = d[1]),
                            (u = u.replace(
                              /^(\d{4})(\d{2})(\d{2})$/,
                              "$1-$2-$3"
                            )),
                            (p = new Date(u).getTime()),
                            (s.due = u),
                            (s.due_stamp = p)),
                          "custom-lz-todo" == a.attr_name && a.attr_value
                            ? (s.todo = a.attr_value)
                            : (s.todo = "null"),
                          "custom-lz-todo-index" == a.attr_name
                            ? (s.todo_index = parseInt(a.attr_value))
                            : (s.todo_index = 999),
                          "custom-lz-priority" == a.attr_name
                            ? (s.priority = a.attr_value)
                            : (s.priority = "null"),
                          "custom-lz-priority-index" == a.attr_name
                            ? (s.priority_index = parseInt(a.attr_value))
                            : (s.priority_index = 999),
                          -1 != a.content.search("@todo") &&
                            "null" == s.todo &&
                            (s.todo = "inbox"),
                          (o.next = 25),
                          t.saveToLocal(s)
                        );
                      case 25:
                        r++, (o.next = 8);
                        break;
                      case 28:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          getCounts: function () {
            var e = this;
            return Object(y["a"])(
              regeneratorRuntime.mark(function t() {
                var o, n, r, a, i;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (o = {}),
                          (n = [
                            "all",
                            "inbox",
                            "doing",
                            "done",
                            "someday",
                            "today",
                            "tomorrow",
                            "week",
                            "month",
                            "P0",
                            "P1",
                            "P2",
                            "P3",
                          ]),
                          (r = 0);
                      case 3:
                        if (!(r < n.length)) {
                          t.next = 12;
                          break;
                        }
                        return (a = n[r]), (t.next = 7), e.db.getCounts(a);
                      case 7:
                        (i = t.sent), (o[a] = i);
                      case 9:
                        r++, (t.next = 3);
                        break;
                      case 12:
                        e.counts = o;
                      case 13:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          parseFolderName: function (e) {
            var t = e.split("/"),
              o = t.length - 2;
            return t[o];
          },
          parseFileName: function (e) {
            var t = e.split("/"),
              o = t.length - 1;
            return t[o];
          },
          saveToLocal: function (e) {
            var t = this;
            return Object(y["a"])(
              regeneratorRuntime.mark(function o() {
                var n, r;
                return regeneratorRuntime.wrap(function (o) {
                  while (1)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (o.next = 2),
                          t.db.todos.where({ block_id: e.block_id }).toArray()
                        );
                      case 2:
                        if (((n = o.sent), 0 != n.length)) {
                          o.next = 8;
                          break;
                        }
                        return (o.next = 6), t.db.addTodo(e);
                      case 6:
                        o.next = 16;
                        break;
                      case 8:
                        return (
                          (r = e.block_id),
                          delete e.block_id,
                          "null" == e.todo && delete e.todo,
                          999 == e.todo_index && delete e.todo_index,
                          "null" == e.priority && delete e.priority,
                          999 == e.priority_index && delete e.priority_index,
                          (o.next = 16),
                          t.db.updateTodo(r, e)
                        );
                      case 16:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          changeViewType: function (e) {
            this.viewType = e;
          },
          clickList: function (e, t) {
            (this.listGroup = e),
              (this.listName = t),
              (this.where = t),
              (this.order = "updated"),
              this.getData();
          },
          changeOrderBy: function (e) {
            (this.order = e), this.getData();
          },
          setTodoStatus: function (e, t) {
            this.db.setTodoStatus(e, t);
            var o = e,
              n = { id: o, attrs: { "custom-lz-todo": t } };
            q(n)
              .then()
              .catch(function (e) {
                console.log(e);
              }),
              this.getCounts();
          },
          updateTodo: function (e, t) {
            this.db.updateTodo(e, t);
            var o = {};
            Object.prototype.hasOwnProperty.call(t, "todo") &&
              (o["custom-lz-todo"] = t.todo),
              Object.prototype.hasOwnProperty.call(t, "priority") &&
                (o["custom-lz-priority"] = t.priority),
              console.log(o);
            var n = { id: e, attrs: o };
            q(n)
              .then()
              .catch(function (e) {
                console.log(e);
              }),
              this.getCounts(),
              this.getData();
          },
          switchToCard: function (e) {
            this.showCard = !!e;
          },
          showSettingDialog: function () {
            this.dialogVisible = !0;
          },
          handleClose: function (e) {
            this.$confirm("确认关闭？")
              .then(function (t) {
                console.log(t), e();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
        },
        created: function () {
          (this.db = new I()), (this.date = E.DateUtil);
        },
        mounted: function () {
          this.initWidget();
        },
      });
    o("b8e9");
    Ae.render = j;
    var $e = Ae,
      Fe = (o("7dd6"), o("3ef0")),
      We = o.n(Fe),
      Ye = function (e) {
        e.use(_["b"], { locale: We.a });
      },
      qe = o("ff9f"),
      Ge = (o("793f"), o("5087"), o("fc61")),
      Je = o.n(Ge),
      Xe = Object(n["createApp"])($e);
    Xe.use(Je.a), Ye(Xe), Object(qe["a"])(Xe), Xe.mount("#app");
  },
  "5c50": function (e, t, o) {
    var n = o("24fb");
    (t = n(!1)),
      t.push([
        e.i,
        '.checkbox[data-v-5e17dd5e]{margin-right:5px}.danger .el-checkbox__inner[data-v-5e17dd5e]{border-color:#f56c6c;background-color:rgba(245,108,108,.12549019607843137)}.warning .el-checkbox__inner[data-v-5e17dd5e]{border-color:#e6a23c;background-color:rgba(230,162,60,.12549019607843137)}.success .el-checkbox__inner[data-v-5e17dd5e]{border-color:#67c23a;background-color:rgba(103,194,58,.12549019607843137)}.is-checked .el-checkbox__input .el-checkbox__inner[data-v-5e17dd5e]:after{transform:rotate(45deg) scaleY(1)}.is-checked .el-checkbox__input .el-checkbox__inner[data-v-5e17dd5e]{background-color:#cdcdcd!important;border-color:#cdcdcd!important}.el-checkbox__inner[data-v-5e17dd5e]:after{box-sizing:content-box;content:"";border:1px solid #fff;border-left:0;border-top:0;height:8px;width:3px;left:5px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);transition:transform .15s ease-in .05s;transform-origin:center}.el-checkbox__inner[data-v-5e17dd5e]{display:inline-block;position:relative;border:2px solid #bbb;border-radius:20px;box-sizing:border-box;width:18px;height:18px;background-color:#fff;z-index:1;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.el-checkbox[data-v-5e17dd5e]{margin:0;padding:0;color:#606266;font-weight:500;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:30px}.el-checkbox[data-v-5e17dd5e],.el-checkbox__input[data-v-5e17dd5e]{position:relative;cursor:pointer;display:inline-block;white-space:nowrap}.el-checkbox__input[data-v-5e17dd5e]{outline:none;line-height:1;vertical-align:middle}',
        "",
      ]),
      (e.exports = t);
  },
  6211: function (e, t, o) {
    var n = o("24fb");
    (t = n(!1)),
      t.push([
        e.i,
        '.tag{font-weight:700}.list-view-comp .left-col{border-top:1px solid #eee;padding:0;width:250px}.list-view-comp .right-col{padding-top:0}.all-lists{display:flex;align-items:center;justify-content:space-between;margin:8px 0 6px 0;padding:8px 25px 8px 15px;cursor:pointer}.all-lists:hover{background-color:#eee}.all-lists .list-name{font-weight:700}.all-lists.chosen{background-color:#eee}.todo-lists .list-number{color:#aaa;font-size:14px}.todo-lists .list-number.deeper{color:#666}.chosen .list-number{font-weight:700}.list-group{margin:10px 0}.list-group .list-head{font-weight:700;margin:5px 0;padding:0 15px}.list-group ul{margin:0;padding:0}.list-group li{list-style:none;margin:0;padding:6px 25px 6px 15px;display:flex;justify-content:space-between;align-items:center;cursor:pointer}.list-group li.chosen,.list-group li:hover{background-color:#eee}.list-group .list-name{position:relative;padding-left:25px}.list-group .list-name:before{content:"";width:8px;height:8px;background-color:#666;border-radius:10px;position:absolute;top:8px;left:10px}.right-col .v-list{display:flex;flex-direction:column}.right-col .h-list{display:flex;flex-direction:row;flex-wrap:wrap}.right-col .h-list .list-item{width:calc(33.33333% - 30px)}.right-col .h-list .list-item .note-content{max-height:100px;overflow:hidden;text-overflow:ellipsis}.list-item{padding:10px;margin:4px;background-color:#fff;border-radius:4px;box-shadow:0 0 3px rgba(0,0,0,.06);display:flex}.note-list{height:100%}.note-content{cursor:pointer;line-height:1.6em;word-break:break-all}.is-checked .note-content{color:#999;text-decoration:line-through}.note-attrs{margin-top:2px;font-size:13px;color:#aaa;display:flex;align-items:center;justify-content:space-between}.note-attrs .doc:hover{color:#555;cursor:pointer}.list-name.danger:before,.mx-context-menu-item .danger{background-color:#f56c6c!important}.list-name.warning:before,.mx-context-menu-item .warning{background-color:#e6a23c!important}.list-name.success:before,.mx-context-menu-item .success{background-color:#67c23a!important}.list-name.primary:before,.mx-context-menu-item .primary{background-color:#409eff!important}.list-name.normal:before,.mx-context-menu-item .normal{background-color:#666!important}',
        "",
      ]),
      (e.exports = t);
  },
  6731: function (e, t, o) {
    var n = o("6211");
    n.__esModule && (n = n.default),
      "string" === typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    var r = o("499e").default;
    r("34b61fe6", n, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "9b20": function (e, t, o) {
    var n = o("24fb");
    (t = n(!1)),
      t.push([
        e.i,
        "body{color:#535353}#little-things{font-size:15px;margin:15px;box-shadow:0 0 6px rgba(0,0,0,.2);min-width:500px;border-radius:6px;background-color:#fff;overflow:hidden}#top-bar{display:flex;height:50px}#main-content{display:flex;height:570px}.hidden{display:none!important}.left-col,.right-col{padding:15px}.left-col{width:220px;background-color:#fdfdfd;flex-shrink:0}.right-col{width:100%}.list-view .right-col{background-color:#daf1ef}.report .right-col{background-color:#f1e4da}.btn:hover{color:#0b8383;cursor:pointer}.logo{display:flex;flex-grow:0;align-items:center;justify-content:space-between}.logo .btn-group .btn{margin-left:8px}.logo-name{font-weight:bolder;font-size:16px}.top-actions{display:flex;flex-grow:1;align-items:center;justify-content:space-between}.top-actions .notes-count{font-size:14px;font-weight:700}.top-actions .btn-group .btn{margin-left:15px}.el-dropdown-menu__item{display:flex;align-items:center}.el-dropdown-menu__item .icon{height:30px}",
        "",
      ]),
      (e.exports = t);
  },
  b18e: function (e, t, o) {
    var n = o("f326");
    n.__esModule && (n = n.default),
      "string" === typeof n && (n = [[e.i, n, ""]]),
      n.locals && (e.exports = n.locals);
    var r = o("499e").default;
    r("46cd486a", n, !0, { sourceMap: !1, shadowMode: !1 });
  },
  b8e9: function (e, t, o) {
    "use strict";
    o("404b");
  },
  d066a: function (e, t, o) {
    "use strict";
    o("b18e");
  },
  e700: function (e, t, o) {
    "use strict";
    o("6731");
  },
  f326: function (e, t, o) {
    var n = o("24fb");
    (t = n(!1)),
      t.push([
        e.i,
        '.list-view-comp .left-col{border-top:1px solid #eee;padding:0;width:250px}.list-view-comp .right-col{padding-top:0}.all-lists{display:flex;align-items:center;justify-content:space-between;margin:8px 0 6px 0;padding:8px 25px 8px 15px;cursor:pointer}.all-lists:hover{background-color:#eee}.all-lists .list-name{font-weight:700}.all-lists.chosen{background-color:#eee}.todo-lists .list-number{color:#aaa;font-size:14px}.list-group{margin:10px 0}.list-group .list-head{font-weight:700;margin:5px 0;padding:0 15px}.list-group ul{margin:0;padding:0}.list-group li{list-style:none;margin:0;padding:6px 25px 6px 15px;display:flex;justify-content:space-between;align-items:center;cursor:pointer}.list-group li.chosen,.list-group li:hover{background-color:#eee}.list-group .list-name{position:relative;padding-left:25px}.list-group .list-name:before{content:"";width:8px;height:8px;background-color:#666;border-radius:10px;position:absolute;top:8px;left:10px}.report-content{padding:10px;margin:10px 0;border-radius:3px;background-color:#fff}',
        "",
      ]),
      (e.exports = t);
  },
});
