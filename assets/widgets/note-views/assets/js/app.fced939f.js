(function(e) {
    function t(t) {
        for (var n, c, i = t[0], l = t[1], d = t[2], u = 0, p = []; u < i.length; u++)
            c = i[u],
            Object.prototype.hasOwnProperty.call(a, c) && a[c] && p.push(a[c][0]),
            a[c] = 0;
        for (n in l)
            Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        s && s(t);
        while (p.length)
            p.shift()();
        return r.push.apply(r, d || []),
        o()
    }
    function o() {
        for (var e, t = 0; t < r.length; t++) {
            for (var o = r[t], n = !0, i = 1; i < o.length; i++) {
                var l = o[i];
                0 !== a[l] && (n = !1)
            }
            n && (r.splice(t--, 1),
            e = c(c.s = o[0]))
        }
        return e
    }
    var n = {}
      , a = {
        app: 0
    }
      , r = [];
    function c(t) {
        if (n[t])
            return n[t].exports;
        var o = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, c),
        o.l = !0,
        o.exports
    }
    c.m = e,
    c.c = n,
    c.d = function(e, t, o) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (c.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                c.d(o, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return o
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = i.push.bind(i);
    i.push = t,
    i = i.slice();
    for (var d = 0; d < i.length; d++)
        t(i[d]);
    var s = l;
    r.push([0, "chunk-vendors"]),
    o()
}
)({
    0: function(e, t, o) {
        e.exports = o("56d7")
    },
    "0378": function(e, t, o) {
        "use strict";
        o("40fa")
    },
    "2ce8": function(e, t, o) {
        "use strict";
        o("7a5c")
    },
    "40fa": function(e, t, o) {},
    "56d7": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("1da1")
          , a = (o("e260"),
        o("e6cf"),
        o("cca6"),
        o("a79d"),
        o("96cf"),
        o("7a23"))
          , r = Object(a["withScopeId"])("data-v-9bea6562");
        Object(a["pushScopeId"])("data-v-9bea6562");
        var c = {
            id: "app"
        }
          , i = {
            class: "setting"
        }
          , l = {
            style: {
                padding: "2px 4px",
                "border-radius": "2px",
                color: "#e6a23c",
                "background-color": "#fdf6ec"
            }
        }
          , d = {
            class: "dialog-footer"
        }
          , s = Object(a["createTextVNode"])("取 消")
          , u = Object(a["createTextVNode"])("确 定")
          , p = {
            id: "header"
        }
          , b = {
            class: "folder-infor"
        }
          , f = {
            class: "folder-name"
        }
          , m = {
            class: "total-number"
        }
          , g = {
            key: 0,
            style: {
                "font-size": "12px",
                padding: "2px 4px",
                "border-radius": "2px",
                color: "#e6a23c",
                "background-color": "#fdf6ec"
            }
        }
          , O = {
            class: "button-group"
        }
          , v = {
            id: "content",
            "element-loading-text": "拼命加载中"
        }
          , j = {
            key: 0,
            id: "page-nav"
        };
        Object(a["popScopeId"])();
        var h = r((function(e, t, o, n, h, y) {
            var k = Object(a["resolveComponent"])("el-input")
              , w = Object(a["resolveComponent"])("el-form-item")
              , V = Object(a["resolveComponent"])("el-form")
              , S = Object(a["resolveComponent"])("el-button")
              , N = Object(a["resolveComponent"])("el-dialog")
              , _ = Object(a["resolveComponent"])("el-option")
              , x = Object(a["resolveComponent"])("el-select")
              , C = Object(a["resolveComponent"])("el-empty")
              , T = Object(a["resolveComponent"])("el-pagination")
              , D = Object(a["resolveDirective"])("loading");
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", c, [Object(a["createVNode"])("div", i, [Object(a["createVNode"])(N, {
                title: "设置",
                modelValue: e.dialogVisible,
                "onUpdate:modelValue": t[4] || (t[4] = function(t) {
                    return e.dialogVisible = t
                }
                ),
                width: "40%"
            }, {
                footer: r((function() {
                    return [Object(a["createVNode"])("span", d, [Object(a["createVNode"])(S, {
                        onClick: t[2] || (t[2] = function(t) {
                            return e.saveSetting("cancle")
                        }
                        )
                    }, {
                        default: r((function() {
                            return [s]
                        }
                        )),
                        _: 1
                    }), Object(a["createVNode"])(S, {
                        type: "primary",
                        onClick: t[3] || (t[3] = function(t) {
                            return e.saveSetting("ok")
                        }
                        )
                    }, {
                        default: r((function() {
                            return [u]
                        }
                        )),
                        _: 1
                    })])]
                }
                )),
                default: r((function() {
                    return [Object(a["createVNode"])(V, {
                        ref: "setting",
                        model: e.setting,
                        "label-width": "120px"
                    }, {
                        default: r((function() {
                            return [Object(a["createVNode"])(w, {
                                label: "自定义 SQL"
                            }, {
                                default: r((function() {
                                    return [Object(a["createVNode"])(k, {
                                        type: "textarea",
                                        modelValue: e.setting.userSQL,
                                        "onUpdate:modelValue": t[1] || (t[1] = function(t) {
                                            return e.setting.userSQL = t
                                        }
                                        )
                                    }, null, 8, ["modelValue"])]
                                }
                                )),
                                _: 1
                            }), Object(a["createVNode"])(w, {
                                label: "当前执行 SQL"
                            }, {
                                default: r((function() {
                                    return [Object(a["createVNode"])("span", l, Object(a["toDisplayString"])(e.sql), 1)]
                                }
                                )),
                                _: 1
                            })]
                        }
                        )),
                        _: 1
                    }, 8, ["model"])]
                }
                )),
                _: 1
            }, 8, ["modelValue"])]), Object(a["createVNode"])("div", p, [Object(a["createVNode"])("div", b, [Object(a["createVNode"])("span", f, Object(a["toDisplayString"])(e.folderName), 1), Object(a["createVNode"])("span", m, Object(a["toDisplayString"])(e.totalNumber) + " 篇笔记", 1), e.customSQL ? (Object(a["openBlock"])(),
            Object(a["createBlock"])("span", g, "自定义查询")) : Object(a["createCommentVNode"])("", !0)]), Object(a["createVNode"])("div", O, [Object(a["createVNode"])(S, {
                size: "small",
                icon: "el-icon-setting",
                onClick: t[5] || (t[5] = function(t) {
                    return e.showSettingDialog()
                }
                )
            }), Object(a["createVNode"])(S, {
                size: "small",
                icon: "el-icon-refresh",
                onClick: t[6] || (t[6] = function(t) {
                    return e.getData()
                }
                )
            }), Object(a["createVNode"])(x, {
                modelValue: e.orderType,
                "onUpdate:modelValue": t[7] || (t[7] = function(t) {
                    return e.orderType = t
                }
                ),
                placeholder: "排序类型",
                size: "small",
                disabled: "KanbanView" === e.viewType,
                onChange: t[8] || (t[8] = function(t) {
                    return e.getData()
                }
                ),
                class: "set-order-type action-btn"
            }, {
                default: r((function() {
                    return [(Object(a["openBlock"])(!0),
                    Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(e.orderTypeOptions, (function(e) {
                        return Object(a["openBlock"])(),
                        Object(a["createBlock"])(_, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, ["label", "value"])
                    }
                    )), 128))]
                }
                )),
                _: 1
            }, 8, ["modelValue", "disabled"]), Object(a["createVNode"])(x, {
                modelValue: e.orderField,
                "onUpdate:modelValue": t[9] || (t[9] = function(t) {
                    return e.orderField = t
                }
                ),
                placeholder: "排序字段",
                size: "small",
                disabled: "KanbanView" === e.viewType,
                onChange: t[10] || (t[10] = function(t) {
                    return e.getData()
                }
                ),
                class: "set-order-type action-btn"
            }, {
                default: r((function() {
                    return [(Object(a["openBlock"])(!0),
                    Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(e.orderFieldOptions, (function(e) {
                        return Object(a["openBlock"])(),
                        Object(a["createBlock"])(_, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, ["label", "value"])
                    }
                    )), 128))]
                }
                )),
                _: 1
            }, 8, ["modelValue", "disabled"]), Object(a["createVNode"])(x, {
                modelValue: e.pageSize,
                "onUpdate:modelValue": t[11] || (t[11] = function(t) {
                    return e.pageSize = t
                }
                ),
                placeholder: "分页大小",
                size: "small",
                disabled: "CalendarView" === e.viewType || "KanbanView" === e.viewType,
                onChange: t[12] || (t[12] = function(t) {
                    return e.getData(!1)
                }
                ),
                class: "set-page-size action-btn"
            }, {
                default: r((function() {
                    return [(Object(a["openBlock"])(!0),
                    Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(e.pageSizeOptions, (function(e) {
                        return Object(a["openBlock"])(),
                        Object(a["createBlock"])(_, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, ["label", "value"])
                    }
                    )), 128))]
                }
                )),
                _: 1
            }, 8, ["modelValue", "disabled"]), Object(a["createVNode"])(x, {
                modelValue: e.viewType,
                "onUpdate:modelValue": t[13] || (t[13] = function(t) {
                    return e.viewType = t
                }
                ),
                placeholder: "视图类型",
                size: "small",
                onChange: t[14] || (t[14] = function(t) {
                    return e.getData()
                }
                ),
                class: "set-view-type action-btn"
            }, {
                default: r((function() {
                    return [(Object(a["openBlock"])(!0),
                    Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(e.viewTypeOptions, (function(e) {
                        return Object(a["openBlock"])(),
                        Object(a["createBlock"])(_, {
                            key: e.value,
                            label: e.label,
                            value: e.value
                        }, null, 8, ["label", "value"])
                    }
                    )), 128))]
                }
                )),
                _: 1
            }, 8, ["modelValue"])])]), Object(a["withDirectives"])(Object(a["createVNode"])("div", v, [e.compData ? (Object(a["openBlock"])(),
            Object(a["createBlock"])(a["KeepAlive"], {
                key: 0
            }, [(Object(a["openBlock"])(),
            Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e.viewType), {
                data: e.compData
            }, null, 8, ["data"]))], 1024)) : (Object(a["openBlock"])(),
            Object(a["createBlock"])(C, {
                key: 1,
                description: "内容为空"
            }))], 512), [[D, e.loading]]), e.showPageNav ? (Object(a["openBlock"])(),
            Object(a["createBlock"])("div", j, [Object(a["createVNode"])(T, {
                small: "",
                "hide-on-single-page": "",
                layout: "prev, pager, next",
                "current-page": e.currentPage,
                "onUpdate:current-page": t[15] || (t[15] = function(t) {
                    return e.currentPage = t
                }
                ),
                "page-size": e.pageSize,
                total: e.totalNumber,
                onNextClick: e.setPageNumber,
                onCurrentChange: e.setPageNumber
            }, null, 8, ["current-page", "page-size", "total", "onNextClick", "onCurrentChange"])])) : Object(a["createCommentVNode"])("", !0)])
        }
        ))
          , y = (o("ac1f"),
        o("1276"),
        o("a15b"),
        o("159b"),
        o("fb6a"),
        o("3fd4"))
          , k = (o("d3b7"),
        o("3ca3"),
        o("ddb0"),
        o("b0c0"),
        o("5319"),
        o("bc3a"))
          , w = o.n(k)
          , V = (o("466d"),
        o("841c"),
        o("99af"),
        o("caad"),
        o("2532"),
        {
            IS_TEST: !1,
            TEST_URL: "http://127.0.0.1:6806",
            PROD_URL: "http://127.0.0.1:6806",
            priorityHigh: ["P0"],
            priorityMedium: [],
            priorityLow: [],
            todoInbox: [],
            todoDoing: [],
            todoDone: [],
            todoSomeday: [],
            viewTypeOptions: [{
                value: "CardView",
                label: "卡片视图"
            }, {
                value: "ListView",
                label: "列表视图"
            }, {
                value: "TableView",
                label: "表格视图"
            }, {
                value: "CalendarView",
                label: "日历视图"
            }, {
                value: "KanbanView",
                label: "看板视图"
            }],
            orderFieldOptions: [{
                value: "created",
                label: "创建日期"
            }, {
                value: "updated",
                label: "更新日期"
            }],
            orderTypeOptions: [{
                value: "ASC",
                label: "升序"
            }, {
                value: "DESC",
                label: "降序"
            }],
            pageSizeOptions: [{
                value: 6,
                label: "分页：6"
            }, {
                value: 10,
                label: "分页：10"
            }, {
                value: 20,
                label: "分页：20"
            }]
        });
        function S() {
            var e = N()
              , t = {
                system: V,
                user: e
            };
            return t
        }
        function N() {
            try {
                return JSON.parse(localStorage.getItem("config"))
            } catch (e) {
                return console.log("%c解析用户配置文件出错：", "color:red"),
                console.log(e),
                !1
            }
        }
        function _(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
            "none" == t ? console.log(e) : console.log("%c" + e, "color:" + t)
        }
        function x(e, t) {
            t = arguments[1] ? arguments[1] : 1;
            for (var o = 0; o < e.length; o++) {
                var n = e[o].ial
                  , a = /background-image:url\(assets\/(.*)\);{1}?/
                  , r = n.match(a);
                if (r) {
                    var c = "http://127.0.0.1:6806/assets/";
                    e[o].cover = "background-image:url('" + c + r[1] + "');"
                } else {
                    var i = /background-image:(.*?)["|;]/
                      , l = n.match(i);
                    e[o].cover = l ? "background-image:" + l[1] : null
                }
                var d = e[o].created
                  , s = e[o].updated;
                e[o].new_created = C(d, t),
                e[o].new_updated = C(s, t)
            }
            return e
        }
        function C(e, t) {
            t = arguments[1] ? arguments[1] : 0;
            var o = e.slice(0, 4)
              , n = e.slice(4, 6)
              , a = e.slice(6, 8)
              , r = new Date
              , c = parseInt(o)
              , i = r.getFullYear();
            i = parseInt(i);
            var l = "";
            switch (t) {
            case 1:
                l = c < i ? o + " 年 " + parseInt(n) + " 月 " + parseInt(a) + " 日" : parseInt(n) + " 月 " + parseInt(a) + " 日";
                break;
            case 2:
                l = o + " 年 " + parseInt(n) + " 月 " + parseInt(a) + " 日";
                break;
            case 3:
                l = o + "/" + n + "/" + a;
                break;
            default:
                l = o + "-" + n + "-" + a
            }
            return l
        }
        function T(e) {
            for (var t = window.location.search.substring(1), o = t.split("&"), n = 0; n < o.length; n++) {
                var a = o[n].split("=");
                if (a[0] == e)
                    return a[1]
            }
            return !1
        }
        function D(e) {
            var t, o, n, a, r, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "element", i = S(), l = i.user, d = {
                danger: [""],
                warning: [""],
                success: [""],
                primary: [""]
            };
            l = l || d;
            var s = "background-color:"
              , u = ["P0", "P1"].concat(l.danger)
              , p = ["P2", "doing"].concat(l.warning)
              , b = ["P3", "done"].concat(l.success)
              , f = ["someday"].concat(l.primary);
            return "element" == c ? (t = "info",
            o = "danger",
            n = "warning",
            a = "success",
            r = "primary") : (t = s + "#666666;",
            o = s + "#f56c6c;",
            n = s + "#e6a23c;",
            a = s + "#67c23a;",
            r = s + "#409eff;"),
            u.includes(e) && (t = o),
            p.includes(e) && (t = n),
            b.includes(e) && (t = a),
            f.includes(e) && (t = r),
            t
        }
        function B(e) {
            var t;
            return t = V.IS_TEST ? V.TEST_URL : V.PROD_URL,
            new Promise((function(o, n) {
                w.a.post(t + "/api/query/sql", {
                    stmt: e
                }).then((function(e) {
                    200 == e.status && (0 == e.data.code ? o(e.data.data) : (_("服务端正常反应，出现其他错误"),
                    n(e.data)))
                }
                )).catch((function(e) {
                    n(e)
                }
                ))
            }
            ))
        }
        function z(e) {
            return I.apply(this, arguments)
        }
        function I() {
            return I = Object(n["a"])(regeneratorRuntime.mark((function e(t) {
                var o, n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            o = regeneratorRuntime.mark((function e(o) {
                                var n, a, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1)
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = t[o].id,
                                            a = "SELECT * FROM attributes WHERE block_id = '" + n + "'",
                                            e.next = 4,
                                            B(a);
                                        case 4:
                                            r = e.sent,
                                            r.forEach((function(e) {
                                                var n = e.name;
                                                n = n.replace(/-/g, "_"),
                                                t[o][n] = e.value
                                            }
                                            ));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            n = 0;
                        case 2:
                            if (!(n < t.length)) {
                                e.next = 7;
                                break
                            }
                            return e.delegateYield(o(n), "t0", 4);
                        case 4:
                            n++,
                            e.next = 2;
                            break;
                        case 7:
                            return e.abrupt("return", t);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            I.apply(this, arguments)
        }
        function P(e) {
            var t;
            return t = V.IS_TEST ? V.TEST_URL : V.PROD_URL,
            new Promise((function(o, n) {
                w.a.post(t + "/api/attr/setBlockAttrs", e).then((function(t) {
                    t && (_("设置块属性："),
                    _(e),
                    o(!0))
                }
                )).catch((function(e) {
                    n(e)
                }
                ))
            }
            ))
        }
        function L(e, t, o, n, r, c) {
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", null, "dash")
        }
        var E = {
            props: {
                data: null
            },
            methods: {
                openNote: function(e) {
                    window.open("siyuan://blocks/" + e, "_blank")
                }
            }
        };
        E.render = L;
        var R = E
          , F = Object(a["withScopeId"])("data-v-59439bab");
        Object(a["pushScopeId"])("data-v-59439bab");
        var A = {
            id: "table-view"
        }
          , Q = {
            key: 1,
            class: "tip-text"
        }
          , M = Object(a["createTextVNode"])("P0")
          , U = Object(a["createTextVNode"])("P1")
          , K = Object(a["createTextVNode"])("P2")
          , q = Object(a["createTextVNode"])("P3")
          , W = Object(a["createTextVNode"])("remove")
          , H = {
            key: 1,
            class: "tip-text"
        }
          , J = Object(a["createTextVNode"])("inbox")
          , X = Object(a["createTextVNode"])("doing")
          , Y = Object(a["createTextVNode"])("someday")
          , G = Object(a["createTextVNode"])("done")
          , $ = Object(a["createTextVNode"])("remove")
          , Z = Object(a["createVNode"])("div", {
            style: {
                "font-size": "14px",
                color: "#AAA",
                padding: "8px 5px 0 0"
            }
        }, [Object(a["createVNode"])("strong", null, "注意："), Object(a["createTextVNode"])("表格内「优先级」「待办事项」快捷筛选功能仅展示该分页内筛选后的内容")], -1);
        Object(a["popScopeId"])();
        var ee = F((function(e, t, o, n, r, c) {
            var i = Object(a["resolveComponent"])("el-table-column")
              , l = Object(a["resolveComponent"])("el-tag")
              , d = Object(a["resolveComponent"])("el-dropdown-item")
              , s = Object(a["resolveComponent"])("el-dropdown-menu")
              , u = Object(a["resolveComponent"])("el-dropdown")
              , p = Object(a["resolveComponent"])("el-table");
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", A, [Object(a["createVNode"])(p, {
                data: o.data,
                border: "",
                style: {
                    width: "100%"
                }
            }, {
                default: F((function() {
                    return [Object(a["createVNode"])(i, {
                        prop: "content",
                        label: "标题",
                        sortable: "",
                        "min-width": "150"
                    }, {
                        default: F((function(e) {
                            return [Object(a["createVNode"])("div", {
                                class: "title",
                                onClick: function(t) {
                                    return c.openNote(e.row.id)
                                }
                            }, [Object(a["createVNode"])("span", null, Object(a["toDisplayString"])(e.row.content), 1)], 8, ["onClick"])]
                        }
                        )),
                        _: 1
                    }), Object(a["createVNode"])(i, {
                        prop: "new_created",
                        label: "创建日期",
                        width: "150"
                    }), Object(a["createVNode"])(i, {
                        prop: "new_updated",
                        label: "更新日期",
                        width: "150"
                    }), Object(a["createVNode"])(i, {
                        prop: "custom_lz_priority",
                        label: "优先级",
                        filters: [{
                            text: "P0",
                            value: "P0"
                        }, {
                            text: "P1",
                            value: "P1"
                        }, {
                            text: "P2",
                            value: "P2"
                        }, {
                            text: "P3",
                            value: "P3"
                        }],
                        "filter-method": c.filterPriority,
                        "filter-placement": "bottom-end",
                        width: "90",
                        align: "center"
                    }, {
                        default: F((function(e) {
                            return [Object(a["createVNode"])(u, {
                                trigger: "click",
                                onCommand: c.setStatus
                            }, {
                                dropdown: F((function() {
                                    return [Object(a["createVNode"])(s, null, {
                                        default: F((function() {
                                            return [Object(a["createVNode"])(d, {
                                                command: e.row.id + "|priority|P0"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: c.getStyle("P0")
                                                    }, {
                                                        default: F((function() {
                                                            return [M]
                                                        }
                                                        )),
                                                        _: 1
                                                    }, 8, ["type"])]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|priority|P1"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: c.getStyle("P1")
                                                    }, {
                                                        default: F((function() {
                                                            return [U]
                                                        }
                                                        )),
                                                        _: 1
                                                    }, 8, ["type"])]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|priority|P2"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: c.getStyle("P2")
                                                    }, {
                                                        default: F((function() {
                                                            return [K]
                                                        }
                                                        )),
                                                        _: 1
                                                    }, 8, ["type"])]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|priority|P3"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: c.getStyle("P3")
                                                    }, {
                                                        default: F((function() {
                                                            return [q]
                                                        }
                                                        )),
                                                        _: 1
                                                    }, 8, ["type"])]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|priority|"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: "info"
                                                    }, {
                                                        default: F((function() {
                                                            return [W]
                                                        }
                                                        )),
                                                        _: 1
                                                    })]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"])]
                                        }
                                        )),
                                        _: 2
                                    }, 1024)]
                                }
                                )),
                                default: F((function() {
                                    return [Object(a["createVNode"])("span", {
                                        class: "el-dropdown-link",
                                        id: "priority-" + e.row.id
                                    }, [e.row.custom_lz_priority ? (Object(a["openBlock"])(),
                                    Object(a["createBlock"])(l, {
                                        key: 0,
                                        type: c.getStyle(e.row.custom_lz_priority),
                                        "disable-transitions": ""
                                    }, {
                                        default: F((function() {
                                            return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.custom_lz_priority), 1)]
                                        }
                                        )),
                                        _: 2
                                    }, 1032, ["type"])) : (Object(a["openBlock"])(),
                                    Object(a["createBlock"])("span", Q, "点击设置"))], 8, ["id"])]
                                }
                                )),
                                _: 2
                            }, 1032, ["onCommand"])]
                        }
                        )),
                        _: 1
                    }, 8, ["filter-method"]), Object(a["createVNode"])(i, {
                        prop: "custom_lz_todo",
                        label: "待办",
                        width: "120",
                        align: "center",
                        filters: [{
                            text: "inbox",
                            value: "inbox"
                        }, {
                            text: "doing",
                            value: "doing"
                        }, {
                            text: "done",
                            value: "done"
                        }, {
                            text: "someday",
                            value: "someday"
                        }],
                        "filter-method": c.filterTodo,
                        "filter-placement": "bottom-end"
                    }, {
                        default: F((function(e) {
                            return [Object(a["createVNode"])(u, {
                                trigger: "click",
                                onCommand: c.setStatus
                            }, {
                                dropdown: F((function() {
                                    return [Object(a["createVNode"])(s, null, {
                                        default: F((function() {
                                            return [Object(a["createVNode"])(d, {
                                                command: e.row.id + "|todo|inbox"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: "info"
                                                    }, {
                                                        default: F((function() {
                                                            return [J]
                                                        }
                                                        )),
                                                        _: 1
                                                    })]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|todo|doing"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: "warning"
                                                    }, {
                                                        default: F((function() {
                                                            return [X]
                                                        }
                                                        )),
                                                        _: 1
                                                    })]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|todo|someday"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: "primary"
                                                    }, {
                                                        default: F((function() {
                                                            return [Y]
                                                        }
                                                        )),
                                                        _: 1
                                                    })]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|todo|done"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: "success"
                                                    }, {
                                                        default: F((function() {
                                                            return [G]
                                                        }
                                                        )),
                                                        _: 1
                                                    })]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"]), Object(a["createVNode"])(d, {
                                                command: e.row.id + "|todo|"
                                            }, {
                                                default: F((function() {
                                                    return [Object(a["createVNode"])(l, {
                                                        type: "info"
                                                    }, {
                                                        default: F((function() {
                                                            return [$]
                                                        }
                                                        )),
                                                        _: 1
                                                    })]
                                                }
                                                )),
                                                _: 2
                                            }, 1032, ["command"])]
                                        }
                                        )),
                                        _: 2
                                    }, 1024)]
                                }
                                )),
                                default: F((function() {
                                    return [Object(a["createVNode"])("span", {
                                        class: "el-dropdown-link",
                                        id: "todo-" + e.row.id
                                    }, [e.row.custom_lz_todo ? (Object(a["openBlock"])(),
                                    Object(a["createBlock"])(l, {
                                        key: 0,
                                        type: c.getStyle(e.row.custom_lz_todo),
                                        "disable-transitions": ""
                                    }, {
                                        default: F((function() {
                                            return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.row.custom_lz_todo), 1)]
                                        }
                                        )),
                                        _: 2
                                    }, 1032, ["type"])) : (Object(a["openBlock"])(),
                                    Object(a["createBlock"])("span", H, "点击设置"))], 8, ["id"])]
                                }
                                )),
                                _: 2
                            }, 1032, ["onCommand"])]
                        }
                        )),
                        _: 1
                    }, 8, ["filter-method"]), Object(a["createVNode"])(i, {
                        prop: "memo",
                        label: "备注"
                    }, {
                        default: F((function(e) {
                            return [e.row.memo ? (Object(a["openBlock"])(),
                            Object(a["createBlock"])("span", {
                                key: 0,
                                onClick: function(t) {
                                    return c.setMemo(e.row.id)
                                },
                                id: "memo-" + e.row.id,
                                class: "memo"
                            }, Object(a["toDisplayString"])(e.row.memo), 9, ["onClick", "id"])) : (Object(a["openBlock"])(),
                            Object(a["createBlock"])("span", {
                                key: 1,
                                class: "tip-text",
                                onClick: function(t) {
                                    return c.setMemo(e.row.id)
                                },
                                id: "memo-" + e.row.id
                            }, "点击设置", 8, ["onClick", "id"]))]
                        }
                        )),
                        _: 1
                    })]
                }
                )),
                _: 1
            }, 8, ["data"]), Z])
        }
        ))
          , te = {
            props: {
                data: null
            },
            methods: {
                openNote: function(e) {
                    window.open("siyuan://blocks/" + e, "_blank")
                },
                getStyle: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "element";
                    return D(e, t)
                },
                filterPriority: function(e, t) {
                    return t.custom_lz_priority == e
                },
                filterTodo: function(e, t) {
                    return t.custom_lz_todo === e
                },
                setStatus: function(e) {
                    var t = e.split("|")
                      , o = t[1]
                      , n = this.getStyle(t[2])
                      , a = document.querySelector("#" + o + "-" + t[0]);
                    "" == t[2] ? a.innerHTML = '<span class="el-tag el-tag--info el-tag--light">设置</span>' : a.innerHTML = '<span class="el-tag el-tag--' + n + ' el-tag--light">' + t[2] + "</span>",
                    "priority" == t[1] ? P({
                        id: t[0],
                        attrs: {
                            "custom-lz-priority": t[2]
                        }
                    }) : P({
                        id: t[0],
                        attrs: {
                            "custom-lz-todo": t[2]
                        }
                    })
                },
                setMemo: function(e) {
                    this.$prompt("请输入备注", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消"
                    }).then((function(t) {
                        var o = t.value;
                        o = o || "",
                        P({
                            id: e,
                            attrs: {
                                memo: o
                            }
                        }).then((function() {
                            var t = document.querySelector("#memo-" + e);
                            t.classList.remove("tip-text"),
                            t.innerHTML = o
                        }
                        ))
                    }
                    )).catch((function() {
                        return !1
                    }
                    ))
                }
            }
        };
        o("0378"),
        o("2ce8");
        te.render = ee,
        te.__scopeId = "data-v-59439bab";
        var oe = te
          , ne = Object(a["withScopeId"])("data-v-54046c16");
        Object(a["pushScopeId"])("data-v-54046c16");
        var ae = {
            id: "list-view"
        }
          , re = {
            class: "title"
        }
          , ce = {
            class: "information"
        };
        Object(a["popScopeId"])();
        var ie = ne((function(e, t, o, n, r, c) {
            var i = Object(a["resolveComponent"])("el-tag");
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", ae, [(Object(a["openBlock"])(!0),
            Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(o.data, (function(e) {
                return Object(a["openBlock"])(),
                Object(a["createBlock"])("div", {
                    class: "list-item",
                    key: e.id,
                    onClick: function(t) {
                        return c.openNote(e.id)
                    }
                }, [Object(a["createVNode"])("div", re, Object(a["toDisplayString"])(e.content), 1), Object(a["createVNode"])("div", ce, [e.custom_lz_priority ? (Object(a["openBlock"])(),
                Object(a["createBlock"])(i, {
                    key: 0,
                    type: c.getStyle(e.custom_lz_priority),
                    size: "medium"
                }, {
                    default: ne((function() {
                        return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.custom_lz_priority), 1)]
                    }
                    )),
                    _: 2
                }, 1032, ["type"])) : Object(a["createCommentVNode"])("", !0), e.custom_lz_todo ? (Object(a["openBlock"])(),
                Object(a["createBlock"])(i, {
                    key: 1,
                    type: c.getStyle(e.custom_lz_todo),
                    size: "medium"
                }, {
                    default: ne((function() {
                        return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.custom_lz_todo), 1)]
                    }
                    )),
                    _: 2
                }, 1032, ["type"])) : Object(a["createCommentVNode"])("", !0)])], 8, ["onClick"])
            }
            )), 128))])
        }
        ))
          , le = {
            props: {
                data: null
            },
            methods: {
                openNote: function(e) {
                    window.open("siyuan://notes/" + e, "_blank")
                },
                getStyle: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "element";
                    return D(e, t)
                }
            }
        };
        o("e94d");
        le.render = ie,
        le.__scopeId = "data-v-54046c16";
        var de = le
          , se = Object(a["withScopeId"])("data-v-bba9c952");
        Object(a["pushScopeId"])("data-v-bba9c952");
        var ue = {
            id: "card-view"
        }
          , pe = {
            class: "list"
        }
          , be = {
            class: "note-content"
        }
          , fe = {
            class: "title"
        }
          , me = {
            class: "date"
        }
          , ge = {
            class: "date"
        };
        Object(a["popScopeId"])();
        var Oe = se((function(e, t, o, n, r, c) {
            var i = Object(a["resolveComponent"])("el-tag")
              , l = Object(a["resolveComponent"])("el-card");
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", ue, [Object(a["createVNode"])("div", pe, [(Object(a["openBlock"])(!0),
            Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(o.data, (function(e) {
                return Object(a["openBlock"])(),
                Object(a["createBlock"])("div", {
                    class: "card",
                    key: e.id,
                    onClick: function(t) {
                        return c.openNote(e.id)
                    }
                }, [Object(a["createVNode"])(l, {
                    "body-style": {
                        padding: "0px"
                    },
                    shadow: "hover"
                }, {
                    default: se((function() {
                        return [Object(a["createVNode"])("div", {
                            class: "cover",
                            style: e.cover
                        }, null, 4), Object(a["createVNode"])("div", be, [Object(a["createVNode"])("div", fe, Object(a["toDisplayString"])(e.content), 1), Object(a["createVNode"])("div", me, "创建日期：" + Object(a["toDisplayString"])(e.new_created), 1), Object(a["createVNode"])("div", ge, "更新日期：" + Object(a["toDisplayString"])(e.new_updated), 1), e.custom_lz_todo ? (Object(a["openBlock"])(),
                        Object(a["createBlock"])(i, {
                            key: 0,
                            class: "tag",
                            type: c.getStyle(e.custom_lz_todo),
                            size: "small",
                            effect: "dark"
                        }, {
                            default: se((function() {
                                return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.custom_lz_todo), 1)]
                            }
                            )),
                            _: 2
                        }, 1032, ["type"])) : Object(a["createCommentVNode"])("", !0), e.custom_lz_priority ? (Object(a["openBlock"])(),
                        Object(a["createBlock"])(i, {
                            key: 1,
                            class: "tag",
                            type: c.getStyle(e.custom_lz_priority),
                            size: "small",
                            effect: "dark"
                        }, {
                            default: se((function() {
                                return [Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.custom_lz_priority), 1)]
                            }
                            )),
                            _: 2
                        }, 1032, ["type"])) : Object(a["createCommentVNode"])("", !0)])]
                    }
                    )),
                    _: 2
                }, 1024)], 8, ["onClick"])
            }
            )), 128))])])
        }
        ))
          , ve = {
            props: {
                data: null
            },
            methods: {
                openNote: function(e) {
                    window.open("siyuan://blocks/" + e, "_blank")
                },
                getStyle: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "element";
                    return D(e, t)
                }
            }
        };
        o("a08d");
        ve.render = Oe,
        ve.__scopeId = "data-v-bba9c952";
        var je = ve
          , he = Object(a["withScopeId"])("data-v-0620f0d2");
        Object(a["pushScopeId"])("data-v-0620f0d2");
        var ye = {
            id: "calendar-view"
        };
        Object(a["popScopeId"])();
        var ke = he((function(e, t, o, n, r, c) {
            var i = Object(a["resolveComponent"])("calendar-item")
              , l = Object(a["resolveComponent"])("el-calendar");
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", ye, [Object(a["createVNode"])(l, null, {
                dateCell: he((function(e) {
                    var t = e.data;
                    return [Object(a["createVNode"])("div", null, Object(a["toDisplayString"])(t.day.split("-").slice(2).join("")), 1), Object(a["createVNode"])(i, {
                        data: c.getData(t.day, "data"),
                        num: c.getData(t.day, "num"),
                        maxShow: r.maxShow
                    }, null, 8, ["data", "num", "maxShow"])]
                }
                )),
                _: 1
            })])
        }
        ))
          , we = Object(a["withScopeId"])("data-v-6dc3a9d1");
        Object(a["pushScopeId"])("data-v-6dc3a9d1");
        var Ve = {
            class: "circle"
        }
          , Se = {
            class: "title"
        }
          , Ne = {
            key: 0,
            class: "more"
        }
          , _e = Object(a["createTextVNode"])("有 ")
          , xe = Object(a["createTextVNode"])(" 条笔记未展示");
        Object(a["popScopeId"])();
        var Ce = we((function(e, t, o, n, r, c) {
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", null, [(Object(a["openBlock"])(!0),
            Object(a["createBlock"])(a["Fragment"], null, Object(a["renderList"])(c.listData, (function(e) {
                return Object(a["openBlock"])(),
                Object(a["createBlock"])("div", {
                    class: "note",
                    key: e.id,
                    onClick: function(t) {
                        return c.openNote(e.id)
                    }
                }, [Object(a["createVNode"])("div", Ve, [Object(a["createVNode"])("span", {
                    class: "circle_inner",
                    style: c.getStyle(e.custom_lz_priority)
                }, null, 4)]), Object(a["createVNode"])("div", Se, Object(a["toDisplayString"])(e.content), 1)], 8, ["onClick"])
            }
            )), 128)), 0 != o.num ? (Object(a["openBlock"])(),
            Object(a["createBlock"])("span", Ne, [_e, Object(a["createVNode"])("strong", null, Object(a["toDisplayString"])(o.num), 1), xe])) : Object(a["createCommentVNode"])("", !0)])
        }
        ))
          , Te = {
            props: {
                data: null,
                num: null,
                maxShow: null
            },
            computed: {
                listData: function() {
                    var e = this.maxShow
                      , t = this.data
                      , o = null;
                    return t && t.length && (o = t.length > e ? t.slice(0, e) : this.data),
                    o
                }
            },
            methods: {
                openNote: function(e) {
                    window.open("siyuan://blocks/" + e, "_blank")
                },
                getStyle: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "priority";
                    return D(e, t)
                }
            }
        };
        o("781f");
        Te.render = Ce,
        Te.__scopeId = "data-v-6dc3a9d1";
        var De = Te
          , Be = {
            components: {
                CalendarItem: De
            },
            data: function() {
                return {
                    maxShow: 10
                }
            },
            props: {
                data: Array,
                orderField: String
            },
            methods: {
                getData: function(e, t) {
                    var o = null
                      , n = null
                      , a = this.parseData(this.data);
                    e = e.replace(/-/g, "");
                    var r = Object.prototype.hasOwnProperty.call(a, e);
                    return r ? (n = a[e]["num"],
                    o = a[e]["data"],
                    n > this.maxShow ? n -= this.maxShow : n = 0) : (o = null,
                    n = 0),
                    "data" == t ? o : n
                },
                parseData: function(e) {
                    for (var t = {}, o = "", n = 0; n < e.length; n++) {
                        o = "created" == this.orderField ? e[n].created.substring(0, 8) : e[n].updated.substring(0, 8),
                        "--" == o && (o = "none");
                        var a = Object.prototype.hasOwnProperty.call(t, o);
                        if (a) {
                            var r = t[o]["num"]
                              , c = t[o]["data"];
                            c[r] = e[n],
                            r++,
                            t[o] = {
                                num: r,
                                data: c
                            }
                        } else {
                            var i = [e[n]];
                            t[o] = {
                                num: 1,
                                data: i
                            }
                        }
                    }
                    return t
                }
            }
        };
        o("df08"),
        o("9e6d");
        Be.render = ke,
        Be.__scopeId = "data-v-0620f0d2";
        var ze = Be
          , Ie = Object(a["withScopeId"])("data-v-fe8bfa2a");
        Object(a["pushScopeId"])("data-v-fe8bfa2a");
        var Pe = {
            class: "kanban"
        }
          , Le = {
            class: "col inbox-list"
        }
          , Ee = Object(a["createVNode"])("div", {
            class: "head"
        }, "收集箱 INBOX", -1)
          , Re = {
            class: "col doing-list"
        }
          , Fe = Object(a["createVNode"])("div", {
            class: "head"
        }, " 进行中 DOING", -1)
          , Ae = {
            class: "col done-list"
        }
          , Qe = Object(a["createVNode"])("div", {
            class: "head"
        }, "已完成 DONE", -1)
          , Me = {
            class: "col someday-list"
        }
          , Ue = Object(a["createVNode"])("div", {
            class: "head"
        }, "某天 SOMEDAY", -1);
        Object(a["popScopeId"])();
        var Ke = Ie((function(e, t, o, n, r, c) {
            var i = Object(a["resolveComponent"])("draggable");
            return Object(a["openBlock"])(),
            Object(a["createBlock"])("div", Pe, [Object(a["createVNode"])("div", Le, [Ee, Object(a["createVNode"])(i, {
                class: "inbox",
                list: r.inbox,
                group: "todolist",
                onChange: c.handleInboxEvent,
                itemKey: "id"
            }, {
                item: Ie((function(e) {
                    var t = e.element;
                    return [Object(a["createVNode"])("div", {
                        class: "list-group-item",
                        id: t.id,
                        onClick: function(e) {
                            return c.openNote(t.id)
                        },
                        title: "单击打开文档，按住可拖动"
                    }, Object(a["toDisplayString"])(t.content), 9, ["id", "onClick"])]
                }
                )),
                _: 1
            }, 8, ["list", "onChange"])]), Object(a["createVNode"])("div", Re, [Fe, Object(a["createVNode"])(i, {
                class: "doing",
                list: r.doing,
                group: "todolist",
                onChange: c.handleDoingEvent,
                itemKey: "id"
            }, {
                item: Ie((function(e) {
                    var t = e.element;
                    return [Object(a["createVNode"])("div", {
                        class: "list-group-item",
                        id: t.id,
                        onClick: function(e) {
                            return c.openNote(t.id)
                        },
                        title: "单击打开文档，按住可拖动"
                    }, Object(a["toDisplayString"])(t.content), 9, ["id", "onClick"])]
                }
                )),
                _: 1
            }, 8, ["list", "onChange"])]), Object(a["createVNode"])("div", Ae, [Qe, Object(a["createVNode"])(i, {
                class: "done",
                list: r.done,
                group: "todolist",
                onChange: c.handleDoneEvent,
                itemKey: "id"
            }, {
                item: Ie((function(e) {
                    var t = e.element;
                    return [Object(a["createVNode"])("div", {
                        class: "list-group-item",
                        id: t.id,
                        onClick: function(e) {
                            return c.openNote(t.id)
                        },
                        title: "单击打开文档，按住可拖动"
                    }, Object(a["toDisplayString"])(t.content), 9, ["id", "onClick"])]
                }
                )),
                _: 1
            }, 8, ["list", "onChange"])]), Object(a["createVNode"])("div", Me, [Ue, Object(a["createVNode"])(i, {
                class: "someday",
                list: r.someday,
                group: "todolist",
                onChange: c.handleSomedayEvent,
                itemKey: "id"
            }, {
                item: Ie((function(e) {
                    var t = e.element;
                    return [Object(a["createVNode"])("div", {
                        class: "list-group-item",
                        id: t.id,
                        onClick: function(e) {
                            return c.openNote(t.id)
                        },
                        title: "单击打开文档，按住可拖动"
                    }, Object(a["toDisplayString"])(t.content), 9, ["id", "onClick"])]
                }
                )),
                _: 1
            }, 8, ["list", "onChange"])])])
        }
        ))
          , qe = (o("25f0"),
        o("b76a"))
          , We = o.n(qe)
          , He = {
            name: "todo-list",
            display: "Todo List",
            order: 1,
            components: {
                draggable: We.a
            },
            props: {
                data: null
            },
            data: function() {
                return {
                    saveIndex: !0,
                    firstLoading: !0,
                    someday: [],
                    doing: [],
                    done: [],
                    inbox: []
                }
            },
            methods: {
                openNote: function(e) {
                    window.open("siyuan://blocks/" + e, "_blank")
                },
                handleAddedEvent: function(e, t) {
                    if (Object.prototype.hasOwnProperty.call(e, "added")) {
                        var o = {
                            id: e.added.element.id,
                            attrs: {
                                "custom-lz-todo": t
                            }
                        };
                        P(o).then().catch((function(e) {
                            console.log(e)
                        }
                        ))
                    }
                },
                handleInboxEvent: function(e) {
                    this.handleAddedEvent(e, "inbox")
                },
                handleDoingEvent: function(e) {
                    this.handleAddedEvent(e, "doing")
                },
                handleDoneEvent: function(e) {
                    this.handleAddedEvent(e, "done")
                },
                handleSomedayEvent: function(e) {
                    this.handleAddedEvent(e, "someday")
                },
                parseData: function() {
                    var e = this.data
                      , t = []
                      , o = []
                      , n = []
                      , a = [];
                    if (e)
                        for (var r = 0; r < e.length; r++) {
                            var c = e[r].custom_lz_todo;
                            "someday" == c && t.push(e[r]),
                            "doing" == c && o.push(e[r]),
                            "done" == c && n.push(e[r]),
                            "someday" != c && "doing" != c && "done" != c && a.push(e[r])
                        }
                    else
                        console.log("文档数据为空！");
                    this.someday = this.sortData(t),
                    this.doing = this.sortData(o),
                    this.done = this.sortData(n),
                    this.inbox = this.sortData(a)
                },
                saveSortIndex: function(e) {
                    if (this.firstLoading && console.log("初始数据导入时将不会上传排序位置"),
                    0 != e.length && !this.firstLoading) {
                        console.log("上传排序位置："),
                        console.log(e);
                        for (var t = 0; t < e.length; t++) {
                            var o = e[t]["id"]
                              , n = {
                                id: o,
                                attrs: {
                                    "custom-lz-todo-index": t.toString()
                                }
                            };
                            P(n).then().catch((function(e) {
                                console.log(e)
                            }
                            ))
                        }
                    }
                },
                sortData: function(e) {
                    if (e) {
                        for (var t = e, o = e.length, n = 0; n < o; n++)
                            for (var a = 0; a < o - 1 - n; a++) {
                                var r = parseInt(t[a]["custom_lz_todo_index"])
                                  , c = parseInt(t[a + 1]["custom_lz_todo_index"]);
                                if (r = r || 0,
                                c = c || 0,
                                r > c) {
                                    var i = t[a + 1];
                                    t[a + 1] = t[a],
                                    t[a] = i
                                }
                            }
                        return t
                    }
                    return console.log("待排序数组为空"),
                    !1
                }
            },
            watch: {
                data: function() {
                    this.parseData()
                },
                inbox: {
                    handler: function() {
                        this.saveIndex && this.saveSortIndex(this.inbox)
                    },
                    deep: !0
                },
                doing: {
                    handler: function() {
                        this.saveIndex && this.saveSortIndex(this.doing)
                    },
                    deep: !0
                },
                done: {
                    handler: function() {
                        this.saveIndex && this.saveSortIndex(this.done)
                    },
                    deep: !0
                },
                someday: {
                    handler: function() {
                        this.saveIndex && this.saveSortIndex(this.someday)
                    },
                    deep: !0
                }
            },
            created: function() {
                this.parseData(),
                this.firstLoading = !1
            }
        };
        o("f8ef");
        He.render = Ke,
        He.__scopeId = "data-v-fe8bfa2a";
        var Je = He
          , Xe = Object(a["defineComponent"])({
            name: "App",
            components: {
                Dashboard: R,
                CardView: je,
                ListView: de,
                TableView: oe,
                CalendarView: ze,
                KanbanView: Je
            },
            data: function() {
                return {
                    blockId: null,
                    attributes: null,
                    noteBox: null,
                    folderPath: null,
                    folderName: "思源笔记",
                    viewType: "CardView",
                    pageSize: 6,
                    pageOffset: 0,
                    currentPage: 2,
                    totalNumber: 0,
                    orderField: "updated",
                    orderType: "DESC",
                    totalData: null,
                    pageData: null,
                    compData: null,
                    dialogVisible: !1,
                    viewTypeOptions: null,
                    orderTypeOptions: null,
                    orderFieldOptions: null,
                    pageSizeOptions: null,
                    loading: !1,
                    customSQL: null,
                    sql: "",
                    setting: {
                        userSQL: null
                    }
                }
            },
            computed: {
                showPageNav: function() {
                    return "CalendarView" != this.viewType && "KanbanView" != this.viewType
                }
            },
            methods: {
                initWidget: function() {
                    var e = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function t() {
                        var o;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    e.viewTypeOptions = V.viewTypeOptions,
                                    e.orderTypeOptions = V.orderTypeOptions,
                                    e.orderFieldOptions = V.orderFieldOptions,
                                    e.pageSizeOptions = V.pageSizeOptions,
                                    o = T("blockid"),
                                    !o) {
                                        t.next = 10;
                                        break
                                    }
                                    e.blockId = o,
                                    t.next = 12;
                                    break;
                                case 10:
                                    throw y["a"].error("请在URL中配置块ID（blockid=XXX）"),
                                    "url 中未配置 blockid 信息";
                                case 12:
                                    return t.next = 14,
                                    e.getWidgetSettings(e.blockId);
                                case 14:
                                    if (!t.sent) {
                                        t.next = 16;
                                        break
                                    }
                                    e.getData();
                                case 16:
                                    t.next = 23;
                                    break;
                                case 18:
                                    t.prev = 18,
                                    t.t0 = t["catch"](0),
                                    e.loading = !1,
                                    console.log("%c[initWidget]挂件初始化出错：", "color: red"),
                                    _(t.t0);
                                case 23:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 18]])
                    }
                    )))()
                },
                getWidgetSettings: function(e) {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function o() {
                        var n, a, r, c;
                        return regeneratorRuntime.wrap((function(o) {
                            while (1)
                                switch (o.prev = o.next) {
                                case 0:
                                    return n = "SELECT b.id AS id, b.box AS box, b.type AS type, b.path AS path, a.name AS attrName, a.value AS attrValue FROM blocks AS b LEFT JOIN attributes AS a ON b.id = a.block_id WHERE b.id = '" + e + "'",
                                    o.prev = 1,
                                    o.next = 4,
                                    B(n);
                                case 4:
                                    if (a = o.sent,
                                    0 != a.length) {
                                        o.next = 7;
                                        break
                                    }
                                    throw "未查询到对应的块内容 BlockId:" + e;
                                case 7:
                                    return t.attributes = a,
                                    t.noteBox = a[0].box,
                                    r = a[0].path.split("/"),
                                    r.pop(),
                                    r = r.join("/") + "/",
                                    t.folderPath = r,
                                    c = t.parseFolderName(r),
                                    c && (t.folderName = c),
                                    _("获取用户之前保存的设置："),
                                    a.forEach((function(e) {
                                        var o = e.attrName;
                                        "custom-lz-order-type" == o && (t.orderType = e.attrValue,
                                        console.log(" * ordertype：" + t.orderType)),
                                        "custom-lz-order-field" == o && (t.orderField = e.attrValue,
                                        console.log(" * orderfield：" + t.orderField)),
                                        "custom-lz-page-size" == o && (t.pageSize = parseInt(e.attrValue),
                                        console.log(" * pagesize：" + t.pageSize)),
                                        "custom-lz-view-type" == o && (t.viewType = e.attrValue,
                                        console.log(" * viewtype：" + t.viewType)),
                                        "custom-lz-user-sql" == o && (t.customSQL = e.attrValue,
                                        t.setting.userSQL = e.attrValue,
                                        console.log(" * userSQL：" + t.setting.userSQL))
                                    }
                                    )),
                                    o.abrupt("return", !0);
                                case 20:
                                    o.prev = 20,
                                    o.t0 = o["catch"](1),
                                    console.log("%c[getWidgetSettings]获取挂件块属性出错：", "color: red"),
                                    _(o.t0);
                                case 24:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, null, [[1, 20]])
                    }
                    )))()
                },
                parseFolderName: function(e) {
                    var t = e.split("/")
                      , o = t.length - 2;
                    return t[o]
                },
                createSQL: function() {
                    var e = ""
                      , t = "";
                    this.noteBox && (e = " AND box='" + this.noteBox + "'"),
                    this.folderPath && (t = " AND path LIKE '%" + this.folderPath + "%'"),
                    "降序" == this.orderType && (this.orderType = "DESC"),
                    "升序" == this.orderType && (this.orderType = "ASC");
                    var o, n = " ORDER BY " + this.orderField + " " + this.orderType;
                    n = "";
                    return o = this.customSQL ? this.customSQL + n : "SELECT * FROM blocks WHERE type='d'" + e + t + n,
                    this.sql = o,
                    o
                },
                getData: function() {
                    var e = arguments
                      , t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function o() {
                        var n, a, r, c;
                        return regeneratorRuntime.wrap((function(o) {
                            while (1)
                                switch (o.prev = o.next) {
                                case 0:
                                    if (n = !(e.length > 0 && void 0 !== e[0]) || e[0],
                                    o.prev = 1,
                                    !n) {
                                        o.next = 27;
                                        break
                                    }
                                    return V.IS_TEST || (t.loading = !0),
                                    a = t.createSQL(),
                                    o.next = 7,
                                    B(a);
                                case 7:
                                    return r = o.sent,
                                    r = x(r, 3),
                                    o.next = 11,
                                    z(r);
                                case 11:
                                    if (c = o.sent,
                                    V.IS_TEST || (t.loading = !1),
                                    !(c.length > 0)) {
                                        o.next = 24;
                                        break
                                    }
                                    t.totalData = c,
                                    t.pageData = t.parsePage(t.totalData),
                                    t.totalNumber = c.length,
                                    _("数据查询SQL：" + a),
                                    _("获得全量数据："),
                                    _(t.totalData),
                                    _("获取分页数据："),
                                    _(t.pageData),
                                    o.next = 25;
                                    break;
                                case 24:
                                    throw "未取得符合条件的数据";
                                case 25:
                                    o.next = 29;
                                    break;
                                case 27:
                                    _("采用数组分页，加载分页数据无需再次请求网络"),
                                    t.pageData = t.parsePage(t.totalData);
                                case 29:
                                    "KanbanView" == t.viewType || "CalendarView" == t.viewType ? t.compData = t.totalData : t.compData = t.pageData,
                                    o.next = 37;
                                    break;
                                case 32:
                                    o.prev = 32,
                                    o.t0 = o["catch"](1),
                                    t.loading = !1,
                                    console.log("%c[getData]获取数据出错：", "color: red"),
                                    _(o.t0);
                                case 37:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o, null, [[1, 32]])
                    }
                    )))()
                },
                parsePage: function(e) {
                    var t = this.pageOffset + this.pageSize;
                    return console.log("当前分页： " + this.pageOffset + " - " + t),
                    e.slice(this.pageOffset, this.pageOffset + this.pageSize)
                },
                setPageNumber: function(e) {
                    this.pageOffset = (e - 1) * this.pageSize,
                    this.getData(!1)
                },
                showSettingDialog: function() {
                    this.dialogVisible = !0
                },
                saveSetting: function(e) {
                    var t = this;
                    "ok" == e ? P({
                        id: this.blockId,
                        attrs: {
                            "custom-lz-user-sql": this.setting.userSQL
                        }
                    }).then((function() {
                        t.customSQL = t.setting.userSQL,
                        t.dialogVisible = !1,
                        t.getData("reload")
                    }
                    )) : (this.setting.userSQL = this.customSQL,
                    this.dialogVisible = !1)
                }
            },
            mounted: function() {
                this.initWidget()
            },
            watch: {
                viewType: function() {
                    var e = this.blockId
                      , t = this.viewType
                      , o = {
                        id: e,
                        attrs: {
                            "custom-lz-view-type": t
                        }
                    };
                    P(o).then().catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                orderType: function() {
                    var e = this.blockId
                      , t = this.orderType
                      , o = {
                        id: e,
                        attrs: {
                            "custom-lz-order-type": t
                        }
                    };
                    P(o).then().catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                pageSize: function() {
                    var e = this.blockId
                      , t = "" + this.pageSize
                      , o = {
                        id: e,
                        attrs: {
                            "custom-lz-page-size": t
                        }
                    };
                    P(o).then().catch((function(e) {
                        console.log(e)
                    }
                    ))
                },
                orderField: function() {
                    var e = this.blockId
                      , t = this.orderField
                      , o = {
                        id: e,
                        attrs: {
                            "custom-lz-order-field": t
                        }
                    };
                    P(o).then().catch((function(e) {
                        console.log(e)
                    }
                    ))
                }
            }
        });
        o("e2ad");
        Xe.render = h,
        Xe.__scopeId = "data-v-9bea6562";
        var Ye = Xe
          , Ge = (o("7dd6"),
        o("3ef0"))
          , $e = o.n(Ge)
          , Ze = function(e) {
            e.use(y["b"], {
                locale: $e.a
            })
        };
        function et() {
            return tt.apply(this, arguments)
        }
        function tt() {
            return tt = Object(n["a"])(regeneratorRuntime.mark((function e() {
                var t, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            w.a.get("./config.json").then((function(e) {
                                t = e.data
                            }
                            )).catch((function(e) {
                                alert("获取用户配置文件出错，可能会导致部分功能不可用"),
                                console.log("%c获取配置文件出错:" + e, "color:red")
                            }
                            ));
                        case 2:
                            o = Object(a["createApp"])(Ye),
                            Ze(o),
                            localStorage.setItem("config", JSON.stringify(t)),
                            o.mount("#app");
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            tt.apply(this, arguments)
        }
        window.onload = et()
    },
    "6abc": function(e, t, o) {},
    "74e4": function(e, t, o) {},
    "781f": function(e, t, o) {
        "use strict";
        o("e69e")
    },
    "7a5c": function(e, t, o) {},
    "9e6d": function(e, t, o) {
        "use strict";
        o("cb90")
    },
    a08d: function(e, t, o) {
        "use strict";
        o("aa0f")
    },
    aa0f: function(e, t, o) {},
    cb90: function(e, t, o) {},
    df08: function(e, t, o) {
        "use strict";
        o("74e4")
    },
    e1be: function(e, t, o) {},
    e2ad: function(e, t, o) {
        "use strict";
        o("e1be")
    },
    e69e: function(e, t, o) {},
    e94d: function(e, t, o) {
        "use strict";
        o("f13b")
    },
    f13b: function(e, t, o) {},
    f8ef: function(e, t, o) {
        "use strict";
        o("6abc")
    }
});

