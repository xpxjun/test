(window.webpackJsonp = window.webpackJsonp || []).push([
    ["drawRule2"], {
        2326: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMABfrsLgHyx+OXaTcQ9u7p3dWzJxQLA8C7rmNVTkg7I824pJ2EQ0AY5cKokYuHf3NfWiEaem8c6BxkcQAAAghJREFUSMfNltlyqkAQQHsUZRGRRUgEJC4xJmpuzNr//2e3QoJMAz1h8pTzZlcdx16mR/j7iOXR9BDvF3miq0a2hxVXr1rqJEQZS8M2Qmxw3Ved29hm10sdpUPsYNOrTg/Yid/jWGeKDD9nSwqlJ08s3h2CGmeABI1eJTaqeFO58RqVRMCzX6ndK+C58VHNkneNe2wweOh7sNEaSLOwyFcZGu6/5EA/93etAjL6OwRbq1mzsHtwScx74dwPCym2ANiSSM65boCUJwC4I5ETO1dmo0MZAIigV8KjA3Wn5bJ5QonxDTDcUnc8KS/1GCVSzn3ucsEmN3HEuMWgy43k6JTr0uuM5ltAyYLWvhth0jovv+cNJQIR5bmRtOUjErLv8JoMW3nb/HSkLtZ7tQOxi4WgEz1GmSMAybiJTRJe0dVYpRUhw0SSH1EmcAGA9Fj1VBl0n18m0B1z8qyWN8xyc5Alhoohs2NMXv6ACpQI6ybOkWcOFVJqVh2FjHcH9REhXrgjN5RltrvMSb1nHkFiiwqGTrPP64TKSm4vTfE+EzkJfrFQaIpid85doGSoJgQF7lQte6DihGqUchxId3il+6dmXxmz88hvyQdQI1Lz82V3YgCLiPSV5n33axRbJzvQn+vGuWfQ4I0WqwAd9nLXgxfQI63dbQy6vA+wxF/CLzA2Q/TWzwL+AP8BvW9MWApGNNsAAAAASUVORK5CYII="
        },
        "2d57": function(t, e, i) {
            "use strict";
            i("890f")
        },
        "349e": function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAe1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NgkbwAAAAKHRSTlMA5dMVBPHcyiQeGg/69r+llmtQLgrr4dnFsod4W0A2EtC0oYx/cVZH87WxZAAAALFJREFUOMvl0FkSgjAQRdEGZAgzioCg4iz7X6GoeUQrpDfA/SLNKYo0Lbd1PVgF8RXDO17th08Wb2Tc/8DUjImBHkbznMzdaA4JTIeRaC9dP29uGG3c8VQFyhxdmJZQ812H0M2VpuTEC+WHtzA5qVyldINyTG2HKLBwyla/qEyV0g2KfLzxKzztYGaUblSO/W9SGEalJc0Weso0MIzyIzIm5O1PjMEex42yiXOcZD0trRdxnSpdsyEMrgAAAABJRU5ErkJggg=="
        },
        "39ce": function(t, e, i) {
            "use strict";
            var s = (i("5df3"), i("4f7f"), i("7514"), i("75fc")),
                n = (i("55dd"), i("6762"), i("2fdb"), i("a481"), i("456d"), i("ac6a"), i("26e2")),
                a = i("6b43"),
                o = "numBgType",
                r = {
                    "奇": [1, 3, 5, 7, 9],
                    "偶": [0, 2, 4, 6, 8],
                    "大": [5, 6, 7, 8, 9],
                    "小": [0, 1, 2, 3, 4]
                },
                c = {};
            Object.keys(r).forEach((function(t) {
                c[r[t].join("_")] = t
            }));
            var l = {
                    name: "popDrawNumSelector",
                    components: {
                        Popup: n.a
                    },
                    data: function() {
                        return {
                            popCellIndex: 0,
                            color: "",
                            selectedNums: [],
                            curPost: "",
                            onClose: new Function,
                            numBgType: a.a.get(o) || 1,
                            selectType: 1,
                            selectTypeNum: ""
                        }
                    },
                    computed: {
                        popType: function() {
                            var t = this.popCellIndex;
                            return 0 === t ? 1 : t > 4 ? 3 : 2
                        },
                        numsHeshu: function() {
                            for (var t = [], e = 0; e <= 36;) t.push(e++);
                            return t
                        },
                        numsTen: function() {
                            for (var t = [], e = 0; e <= 9;) t.push(e++);
                            return t
                        },
                        numsFourteen: function() {
                            var t = [],
                                e = 0,
                                i = 9;
                            for (7 === this.popCellIndex && (i = 14); e <= i;) t.push(e++);
                            return t
                        },
                        danshuangTypes: function() {
                            return [{
                                post: "奇",
                                text: "奇"
                            }, {
                                post: "偶",
                                text: "偶"
                            }, {
                                post: "大",
                                text: "大"
                            }, {
                                post: "小",
                                text: "小"
                            }, {
                                post: "X",
                                text: "X"
                            }]
                        },
                        danshuangTypes1: function() {
                            var t = this.danshuangTypes.concat();
                            return t.slice(0, t.length - 1)
                        },
                        heshuTypes: function() {
                            var t = [],
                                e = this.popCellIndex;
                            return 1 === e && t.push({
                                type: "22",
                                post: "1001",
                                text: "头尾合"
                            }, {
                                type: "26",
                                post: "1100",
                                text: "千百合"
                            }, {
                                type: "27",
                                post: "1010",
                                text: "千十合"
                            }), 2 === e && t.push({
                                type: "23",
                                post: "0110",
                                text: "中肚合"
                            }, {
                                type: "26",
                                post: "1100",
                                text: "千百合"
                            }, {
                                type: "28",
                                post: "0101",
                                text: "百个合"
                            }), 3 === e && t.push({
                                type: "23",
                                post: "0110",
                                text: "中肚合"
                            }, {
                                type: "27",
                                post: "1010",
                                text: "千十合"
                            }, {
                                type: "29",
                                post: "0011",
                                text: "十个合"
                            }), 4 === e && t.push({
                                type: "22",
                                post: "1001",
                                text: "头尾合"
                            }, {
                                type: "28",
                                post: "0101",
                                text: "百个合"
                            }, {
                                type: "29",
                                post: "0011",
                                text: "十个合"
                            }), t.push({
                                post: "shashu",
                                text: "杀"
                            }, {
                                type: "24",
                                post: "wenma",
                                text: "稳码"
                            }), t
                        },
                        prevPosIndexs: function() {
                            var t = [];
                            return this.curPost.replace(/1/g, (function(e, i) {
                                t.push(i)
                            })), t.length < 1 && "wenma" !== this.curPost && t.push(this.popCellIndex - 1), t
                        },
                        prevContent: function() {
                            var t = this;
                            return function(e) {
                                var i = t.curPost,
                                    s = t.prevPosIndexs.includes(e),
                                    n = s ? t.selectedNums : [];
                                if ("X" === i) return s ? ["X"] : [];
                                if (n.length > 0) {
                                    n = n.concat().sort();
                                    var a = [],
                                        o = t.curPostItem.text || "";
                                    o && a.push(o);
                                    var r = n.slice(0, 3);
                                    a.push(r.join(""));
                                    var c = n.slice(3, 6);
                                    return c.length > 0 && a.push(c.join("")), a
                                }
                                return []
                            }
                        },
                        prevContentWenma: function() {
                            var t = this.selectedNums;
                            return t.length > 0 ? (t = t.concat().sort(), ["稳上一码：".concat(t.join(""))]) : []
                        },
                        selectedNumLenLimit: function() {
                            return ["wenma", "shashu"].includes(this.curPost) ? 2 : 6
                        },
                        curPostItem: function() {
                            var t = this;
                            return [].concat(Object(s.a)(this.danshuangTypes), Object(s.a)(this.heshuTypes)).find((function(e) {
                                return e.post === t.curPost
                            })) || {}
                        },
                        isNumBgSolid: function() {
                            return 1 === this.numBgType
                        }
                    },
                    mounted: function() {
                        this.popup = this.$refs.popup
                    },
                    methods: {
                        show: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.popCellIndex = t.popCellIndex, this.color = t.color, this.selectedNums = [], this.curPost = "", this.onClose = t.onClose || Function, this.popup.handleShow({
                                onClose: this.onClose
                            })
                        },
                        close: function() {
                            this.popup.handleClose()
                        },
                        confirm: function() {
                            if (2 === this.popType && 2 !== this.selectType)
                                if ("X" !== this.curPost && this.selectedNums.length < 1) this.$msgbox.show("请至少选择一个号码");
                                else {
                                    var t = this.curPostItem,
                                        e = this.prevPosIndexs,
                                        i = t.type;
                                    i || (i = "shashu" == this.curPost ? ["18", "19", "20", "21"][e[0]] : ["14", "15", "16", "17"][e[0]]);
                                    var s = {
                                        post: this.curPost,
                                        postIndexs: e,
                                        color: this.color,
                                        content: "wenma" === this.curPost ? this.prevContentWenma : this.prevContent(e[0]),
                                        type: i,
                                        title: t.text || "",
                                        contentValue: this.selectedNums.sort().join(";"),
                                        numBgType: this.numBgType
                                    };
                                    this.$emit("handleConfirmDrawNum", s), this.close()
                                } else this.selectTypeNum ? (this.$emit("handleConfirmDrawNum", this.selectTypeNum), this.close()) : this.$msgbox.show("请至少选择一个号码")
                        },
                        handleSelectType: function() {
                            this.selectType = 1 === this.selectType ? 2 : 1
                        },
                        handleSelectNum: function(t, e) {
                            if (e) {
                                if ("X" === this.curPost) return;
                                var i = this.selectedNums;
                                if (i.includes(t)) {
                                    var n = new Set(i);
                                    n.delete(t), this.selectedNums = Object(s.a)(n)
                                } else {
                                    if (i.length >= this.selectedNumLenLimit) {
                                        var a = "wenma" === this.curPost ? "稳码" : "shashu" === this.curPost ? "杀数" : "";
                                        return void this.$msgbox.show("".concat(a, "最多选择").concat(this.selectedNumLenLimit, "位数字"))
                                    }
                                    this.selectedNums.push(t)
                                }
                            } else this.close(), this.$emit("handleConfirmDrawNum", t)
                        },
                        handleSelectSimpleNum: function(t) {
                            this.$emit("handleConfirmDrawNum", t), this.close()
                        },
                        handleSelectItem: function(t) {
                            this.curPost !== t.post ? this.curPost = t.post : this.curPost = ""
                        },
                        handleNumBgType: function(t) {
                            this.numBgType = t, a.a.set(o, t)
                        }
                    },
                    watch: {
                        selectedNums: function(t) {
                            var e = t.concat().sort().join("_"),
                                i = this.curPost;
                            if (!i || i in r) {
                                var s = c[e];
                                this.curPost = s || ""
                            }
                        },
                        curPost: function(t) {
                            t in r ? this.selectedNums = r[t].concat() : "X" === t ? this.selectedNums = [] : ("shashu" === t || "wenma" === t) && (this.selectedNums = this.selectedNums.slice(0, 2))
                        }
                    }
                },
                u = (i("83b3"), i("2877")),
                h = Object(u.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("Popup", {
                        ref: "popup",
                        attrs: {
                            type: "slideUp",
                            prevent: !0
                        }
                    }, [s("div", {
                        staticClass: "wrapper"
                    }, [s("div", {
                        staticClass: "title"
                    }, [s("span", [t._v("数字选择器")]), 2 === t.popType ? s("div", {
                        staticClass: "btnChange flex",
                        on: {
                            click: t.handleSelectType
                        }
                    }, [2 === t.selectType ? s("img", {
                        attrs: {
                            src: i("e3eb")
                        }
                    }) : t._e(), 1 === t.selectType ? s("img", {
                        attrs: {
                            src: i("2120")
                        }
                    }) : t._e()]) : t._e()]), 1 === t.popType ? s("div", {
                        staticClass: "board"
                    }, [s("div", {
                        staticClass: "secTitle"
                    }, [t._v("选择条件")]), s("div", {
                        staticClass: "numbers flex justify-start"
                    }, t._l(t.numsHeshu, (function(e) {
                        return s("i", {
                            key: e + t.uuid(),
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "combTitle"
                    }, [t._v("选择对数")]), s("div", {
                        staticClass: "combs circle flex justify-start"
                    }, [s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("0/5")
                            }
                        }
                    }, [t._v("0/5")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("1/6")
                            }
                        }
                    }, [t._v("1/6")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("2/7")
                            }
                        }
                    }, [t._v("2/7")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("3/8")
                            }
                        }
                    }, [t._v("3/8")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("4/9")
                            }
                        }
                    }, [t._v("4/9")])]), s("div", {
                        staticClass: "combTitle"
                    }, [t._v("奇偶大小")]), s("div", {
                        staticClass: "combs flex justify-start"
                    }, t._l(t.danshuangTypes1, (function(e, i) {
                        return s("i", {
                            key: i + t.uuid(),
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e.text)
                                }
                            }
                        }, [t._v(t._s(e.text))])
                    })), 0)]) : t._e(), 2 === t.popType ? s("div", {
                        staticClass: "board"
                    }, [2 === t.selectType ? [s("div", {
                        staticClass: "secTitle"
                    }, [t._v("选择条件")]), s("div", {
                        staticClass: "numbers numTen flex justify-start"
                    }, t._l(t.numsTen, (function(e) {
                        return s("i", {
                            key: e + t.uuid(),
                            staticClass: "item flex",
                            class: {
                                on: t.selectTypeNum === e
                            },
                            on: {
                                click: function(i) {
                                    return t.handleSelectSimpleNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "combTitle"
                    }, [t._v("选择对数")]), s("div", {
                        staticClass: "combs circle flex justify-start"
                    }, [s("i", {
                        staticClass: "item flex",
                        class: {
                            on: "0/5" === t.selectTypeNum
                        },
                        on: {
                            click: function(e) {
                                return t.handleSelectSimpleNum("0/5")
                            }
                        }
                    }, [t._v("0/5")]), s("i", {
                        staticClass: "item flex",
                        class: {
                            on: "1/6" === t.selectTypeNum
                        },
                        on: {
                            click: function(e) {
                                return t.handleSelectSimpleNum("1/6")
                            }
                        }
                    }, [t._v("1/6")]), s("i", {
                        staticClass: "item flex",
                        class: {
                            on: "2/7" === t.selectTypeNum
                        },
                        on: {
                            click: function(e) {
                                return t.handleSelectSimpleNum("2/7")
                            }
                        }
                    }, [t._v("2/7")]), s("i", {
                        staticClass: "item flex",
                        class: {
                            on: "3/8" === t.selectTypeNum
                        },
                        on: {
                            click: function(e) {
                                return t.handleSelectSimpleNum("3/8")
                            }
                        }
                    }, [t._v("3/8")]), s("i", {
                        staticClass: "item flex",
                        class: {
                            on: "4/9" === t.selectTypeNum
                        },
                        on: {
                            click: function(e) {
                                return t.handleSelectSimpleNum("4/9")
                            }
                        }
                    }, [t._v("4/9")])]), s("div", {
                        staticClass: "combTitle"
                    }, [t._v("单双大小")]), s("div", {
                        staticClass: "combs flex justify-start"
                    }, t._l(t.danshuangTypes, (function(e, i) {
                        return s("i", {
                            key: i + t.uuid(),
                            staticClass: "item flex",
                            class: {
                                on: t.selectTypeNum === e.text
                            },
                            on: {
                                click: function(i) {
                                    return t.handleSelectSimpleNum(e.text)
                                }
                            }
                        }, [t._v(t._s(e.text))])
                    })), 0)] : [s("div", {
                        staticClass: "combTitle"
                    }, [t._v("选择条件")]), s("div", {
                        staticClass: "combs flex justify-start firstCombs"
                    }, t._l(t.heshuTypes, (function(e, i) {
                        return s("i", {
                            key: i + t.uuid(),
                            staticClass: "item flex",
                            class: {
                                on: t.curPost === e.post
                            },
                            on: {
                                click: function(i) {
                                    return t.handleSelectItem(e)
                                }
                            }
                        }, [t._v(t._s(e.text))])
                    })), 0), s("div", {
                        staticClass: "combs flex justify-start"
                    }, t._l(t.danshuangTypes, (function(e, i) {
                        return s("i", {
                            key: i + t.uuid(),
                            staticClass: "item flex",
                            class: {
                                on: t.curPost === e.post
                            },
                            on: {
                                click: function(i) {
                                    return t.handleSelectItem(e)
                                }
                            }
                        }, [t._v(t._s(e.text))])
                    })), 0), s("div", {
                        staticClass: "numbers numTen flex justify-start"
                    }, t._l(t.numsTen, (function(e) {
                        return s("i", {
                            key: e + t.uuid(),
                            staticClass: "item flex",
                            class: {
                                on: t.selectedNums.includes(e)
                            },
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e, !0)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "combTitle flex justify-start"
                    }, [s("div", [t._v("效果预览")]), s("div", {
                        staticClass: "checkbox flex",
                        class: {
                            on: t.isNumBgSolid
                        },
                        on: {
                            click: function(e) {
                                return t.handleNumBgType(1)
                            }
                        }
                    }, [s("img", {
                        staticClass: "icon",
                        attrs: {
                            src: i("694c"),
                            alt: ""
                        }
                    }), s("img", {
                        staticClass: "icon dis",
                        attrs: {
                            src: i("4073"),
                            alt: ""
                        }
                    }), s("i", [t._v("实心")])]), s("div", {
                        staticClass: "checkbox flex",
                        class: {
                            on: !t.isNumBgSolid
                        },
                        on: {
                            click: function(e) {
                                return t.handleNumBgType(2)
                            }
                        }
                    }, [s("img", {
                        staticClass: "icon",
                        attrs: {
                            src: i("694c"),
                            alt: ""
                        }
                    }), s("img", {
                        staticClass: "icon dis",
                        attrs: {
                            src: i("4073"),
                            alt: ""
                        }
                    }), s("i", [t._v("空心")])])]), s("div", {
                        staticClass: "preview"
                    }, ["wenma" === t.curPost ? s("div", {
                        staticClass: "wrap wenma flex"
                    }, [s("div", {
                        staticClass: "item flex flex-column",
                        style: {
                            color: t.isNumBgSolid ? "#fff" : t.color,
                            borderColor: t.color,
                            background: t.isNumBgSolid ? t.color : "#fff"
                        }
                    }, t._l(t.prevContentWenma, (function(e) {
                        return s("span", {
                            key: e + t.uuid()
                        }, [t._v(t._s(e))])
                    })), 0)]) : s("div", {
                        staticClass: "wrap flex"
                    }, t._l([0, 1, 2, 3], (function(e) {
                        return s("div", {
                            key: e + t.uuid(),
                            staticClass: "item flex flex-column",
                            style: {
                                color: t.isNumBgSolid ? "#fff" : t.color,
                                borderColor: t.prevPosIndexs.includes(e) ? t.color : "#f5f6f8",
                                background: t.prevPosIndexs.includes(e) ? t.isNumBgSolid ? t.color : "#fff" : "#f5f6f8",
                                fontSize: 1 === t.prevContent(e).length ? "0.2rem" : 2 === t.prevContent(e).length ? "0.17rem" : "0.15rem"
                            }
                        }, t._l(t.prevContent(e), (function(e) {
                            return s("span", {
                                key: e + t.uuid()
                            }, [t._v(t._s(e))])
                        })), 0)
                    })), 0), s("div", {
                        staticClass: "postName flex",
                        class: {
                            hide: "wenma" === t.curPost
                        }
                    }, [s("span", {
                        staticClass: "item flex"
                    }, [t._v("A")]), s("span", {
                        staticClass: "item flex"
                    }, [t._v("B")]), s("span", {
                        staticClass: "item flex"
                    }, [t._v("C")]), s("span", {
                        staticClass: "item flex"
                    }, [t._v("D")])])]), s("div", {
                        staticClass: "buttons flex"
                    }, [s("div", {
                        staticClass: "item flex",
                        on: {
                            click: t.confirm
                        }
                    }, [t._v("确    定")])])]], 2) : t._e(), 3 === t.popType ? s("div", {
                        staticClass: "board"
                    }, [s("div", {
                        staticClass: "secTitle"
                    }, [t._v("选择条件")]), s("div", {
                        staticClass: "numbers numTen flex justify-start"
                    }, t._l(t.numsFourteen, (function(e) {
                        return s("i", {
                            key: e + t.uuid(),
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "combTitle"
                    }, [t._v("选择对数")]), s("div", {
                        staticClass: "combs circle flex justify-start"
                    }, [s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("0/5")
                            }
                        }
                    }, [t._v("0/5")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("1/6")
                            }
                        }
                    }, [t._v("1/6")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("2/7")
                            }
                        }
                    }, [t._v("2/7")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("3/8")
                            }
                        }
                    }, [t._v("3/8")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("4/9")
                            }
                        }
                    }, [t._v("4/9")])]), s("div", {
                        staticClass: "combTitle"
                    }, [t._v("奇偶大小")]), s("div", {
                        staticClass: "combs flex justify-start"
                    }, t._l(t.danshuangTypes, (function(e, i) {
                        return s("i", {
                            key: i + t.uuid(),
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e.text)
                                }
                            }
                        }, [t._v(t._s(e.text))])
                    })), 0)]) : t._e()])])
                }), [], !1, null, "a2f77e88", null);
            e.a = h.exports
        },
        "3e90": function(t, e, i) {},
        "48d6": function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMA+gUJ/M32hkQ4A+7cvrA+F/OXUEox6Ligkn1kViwM2Ix4dHBhXCkQ8ODSx7Soaicf48KkmiQdHKq/vTvhAAACW0lEQVRIx9WW6XqiMBSGExBBNkFwX7Auda12GXW4/xubanMISWgS5k+ffr/kwCtnD+g3aDb5yHAeB+v6aPsvzon6Zj00sfKSBnVQB1DQszb63M95PWmipo1zQX80PfYBqA2bHYbxbe/rx0KD7WZltO8gh/x01OypHO2xi5BLsu4ZSpcHJdRyHv+mG/LVoqg3du+mS0yuz6pwe5R9iR4mw4JrBZs26WsnxDYkhuarnF01Cja4EdsELIo6LajLtktsly2xHOSptgs0ToiJBuxdNdkdnZ4R2BJN1opo8qFfhprskS4MY68V8FPBfhhIcDqWVmlcsB2XWi9Q9bGMTRoFWzbDKgmlG7LJslx7bCMJe/YqWfNNw+mNX+QKTEy2AglrBMCGbtl+I7Fg2b7tAPtuMnbYCXMJuwQ227BbmxSgN5MkGorU4/ogVGcrgsWBW+yNFrHv3e+T9Q5O8+dnyCzbmbNKBffnwNr8KiuX6TyI761y4jaWUCTQC7nxGcxsiGEPVQbsbzj2laSx/xk8PbRwVNH3ze534bTRAqrBZX4FthXPmh60DbgvrBOf+1gQx+lkASY8CQGLLXQkMcJYVQzdG3QHLwPGW/JVsQQDrxYPBSRraXlg4zweIVFrFm2MoB8ixr+bIRk0KGQCR90e8VK9uddFaAeTPU2mKnhaYvdXep2G9042FbRFU7WhB0Ijg06RqoXJ4/YjJwcmB1utT7hG+BWgiXNGSCW3vU6i6rIfUB1NGBa3dTmx7J42C6NLlZ1roRAzVK6m3B2wc0MTEU/gXYr+R9MjxtbSRD+vf+xE64FQLHSzAAAAAElFTkSuQmCC"
        },
        "48f9": function(t, e, i) {
            "use strict";
            i("6084")
        },
        "5aea": function(t, e, i) {},
        "5b0f": function(t, e, i) {
            "use strict";
            i("9391")
        },
        6084: function(t, e, i) {},
        "83b3": function(t, e, i) {
            "use strict";
            i("8b14")
        },
        8615: function(t, e, i) {
            var s = i("5ca1"),
                n = i("504c")(!1);
            s(s.S, "Object", {
                values: function(t) {
                    return n(t)
                }
            })
        },
        "890f": function(t, e, i) {},
        "8b14": function(t, e, i) {},
        "8bfe": function(t, e, i) {
            "use strict";
            var s = {
                    name: "popSaveDrawRule",
                    components: {
                        Popup: i("26e2").a
                    },
                    data: function() {
                        return {
                            onSaveLocal: Function,
                            onSaveFavorite: Function
                        }
                    },
                    props: {
                        cpType: {
                            type: String,
                            default: "1"
                        }
                    },
                    mounted: function() {
                        this.popup = this.$refs.popup
                    },
                    methods: {
                        show: function(t) {
                            this.onSaveLocal = t.onSaveLocal || Function, this.onSaveFavorite = t.onSaveFavorite || Function, this.popup.handleShow()
                        },
                        close: function() {
                            this.popup.handleClose()
                        },
                        handleSaveLocal: function() {
                            this.onSaveLocal(), this.close()
                        },
                        handleSaveFavorite: function() {
                            this.onSaveFavorite(), this.close()
                        }
                    }
                },
                n = (i("2d57"), i("2877")),
                a = Object(n.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("Popup", {
                        ref: "popup"
                    }, [i("div", {
                        staticClass: "wrapper"
                    }, [t.cpType <= 2 ? i("div", {
                        staticClass: "row flex justify-between",
                        on: {
                            click: t.handleSaveFavorite
                        }
                    }, [i("div", {
                        staticClass: "left flex flex-column items-start"
                    }, [i("span", [t._v("保存到“我的收藏”")]), i("span", {
                        staticClass: "remark"
                    }, [t._v("不占手机内存，永久保存，建议选择")])]), i("i", {
                        staticClass: "iconfont"
                    }, [t._v("")])]) : t._e(), i("div", {
                        staticClass: "row flex justify-between",
                        on: {
                            click: t.handleSaveLocal
                        }
                    }, [i("span", [t._v("保存到手机相册")]), i("i", {
                        staticClass: "iconfont"
                    }, [t._v("")])])])])
                }), [], !1, null, "464dd61e", null);
            e.a = a.exports
        },
        9391: function(t, e, i) {},
        "94cf": function(t, e, i) {
            "use strict";
            var s = (i("8e6e"), i("456d"), i("ac6a"), i("bd86")),
                n = (i("c5f6"), i("c9d9")),
                a = i("2f62"),
                o = i("ed08");

            function r(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(i), !0).forEach((function(e) {
                        Object(s.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var l = {
                    name: "Ch5DrawWaterMark",
                    data: function() {
                        return {
                            isOpen: !1,
                            MarkType: n.g
                        }
                    },
                    props: {
                        name: {
                            type: String,
                            default: "图规我要发"
                        },
                        type: {
                            type: Number,
                            default: n.g.CaiYouQuan
                        },
                        count: {
                            type: Number,
                            default: -1
                        },
                        isJiShu: {
                            type: Number,
                            default: 0
                        },
                        section: {
                            type: Number,
                            default: 0
                        },
                        warterType: {
                            type: Number,
                            default: n.g.HG
                        }
                    },
                    computed: c(c({}, Object(a.c)({
                        watermark: function(t) {
                            return t.watermark
                        }
                    })), {}, {
                        markStyle: function() {
                            return this.isJiShu ? "\n                        margin-bottom: 0.2rem;\n                        margin-left: 0.7rem;\n                       " : "\n                        margin-bottom: 0.2rem;\n                        margin-left: 2.2rem;\n                     "
                        }
                    }),
                    methods: {
                        removeEmoji: o.G
                    },
                    watch: {
                        watermark: {
                            handler: function(t) {
                                var e = this;
                                if (t)
                                    for (var i in t) Object.hasOwnProperty.call(t, i) && (this[i] = t[i], "sy" === i && t.sy.forEach((function(t) {
                                        "zng" === t.key && e.warterType === n.g.ZNG && (e.isOpen = 1 === t.open), "hg" === t.key && e.warterType === n.g.HG && (e.isOpen = 1 === t.open)
                                    })))
                            },
                            deep: !0,
                            immediate: !0
                        }
                    },
                    mounted: function() {}
                },
                u = (i("be96"), i("2877")),
                h = Object(u.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.isOpen ? i("div", {
                        staticClass: "water-bg"
                    }, [i("div", {
                        staticClass: "content flex flex-column justify-start items-start",
                        style: "padding-top:" + (t.type == t.MarkType.MingRenTang ? "0.2rem" : "0.3rem")
                    }, t._l(-1 != t.count ? t.count : [t.MarkType.MingRenTang, t.MarkType.DaShiDetail, t.MarkType.LongStatDetail, t.MarkType.FameMore].includes(t.type) ? 2 : 6, (function(e) {
                        return i("div", {
                            key: e,
                            staticClass: "mark flex flex-column justify-start items-center",
                            style: "color: #816fff1a; font-size: 0.14rem; -webkit-text-stroke: 1px " + t.titleBoardColor1 + "; " + t.markStyle
                        }, [i("span", [t._v(t._s(t.removeEmoji(e % 2 ? t.title : t.name)))])])
                    })), 0)]) : t._e()
                }), [], !1, null, "5789a6e3", null);
            e.a = h.exports
        },
        "9e8e": function(t, e, i) {
            "use strict";
            i("3e90")
        },
        a196: function(t, e, i) {},
        b274: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAkCAMAAABbsy/+AAAAn1BMVEUAAAD/zQByUwB2WAD/zAD/zQCTcAD/zQCoggD/zAD/zABTOQB2VgD1xADmtgBYPQCrhACRbQDwvwCXcwDruwB9XABeQgCLaQBcQAD9ygBiRgDouADgsgDDmQBsTgD6yADbrQC7kgDiswDInACFZACAYABmSQD3xQDUpwCkfgDerwDAlgB5WQByUgCxiQCdeADYqgC2jQDFmwBaPwDQpADEbHuuAAAACnRSTlMA8/PtyL2hZS8ZFxiEMwAAAtNJREFUSMe9l+uSmkAQRt3NJpv0Bw4XuepycVEQRLy9/7NlZoKsoEBtyvL8kMKCOdNN98BMOL9eXfTgbmN6BC9v7xPB7x8YZGXQQ/j5h8u4a8RGD7LxHGKUmB7D++QVo2zpMbxNXIzi0mN4maDByTxqCLMEDfQgvmSJRy08Z1AWmlszpA6pekXaL2MzovmiYU40YwMy1QJgqdTGxxV2v6wimjI0sClR1S8zSmAFlMZ/yU78Np07XAm36nzEU59sHgAbOgDBvCOrpjXVgGxDtACUtM69AiyJNj2yzAdMfiwY/H1btqEarV9mq0QOkDXDAQ6Rat+TGbqYnEecT8atxrUscGrKfplGFLUWphUQEWm3Mu/gAqyoz84nwI697z2zRT18zUW9uJHtS3AU84IiTy837rQrdn0yg8jCmq5YwyIybmQmgErDF6YuEyNIpx3U+7IdH3iNmBpirA0+0xuZceJhHK0vYh6sn5LgEx0+egpkSpQztm+yxVhONL1TIJFHXbwlfUuGgId8hD8jycwXF6rB99ZGLjvPGrJ+mVwaN3WjpYroFy/BHdlSuSVqZCJGIzEz0fgDMtmOCRziOLX6nizCLeeWTIQ0JkNBpJYrbtFkUj9wVzbXBQxMHh35u2zJDsB+VMYifoV4dHW5tGRtirraj+sjCVoyEywdlYli50QMZ9kI/bKZC0sUZaiA7bsy1YZC4zJsQ2nZ8WG2GJCtYIuylRfb045sA2hqzmWMDcqge+oWukzFgOxwmXM4i2XT1MyKQqXihJOhI9DEJAZl8F0ooRiuXxZWDGvNdKzAhsT56u7FQQEQqwkDUO7mwzLIvs4YWvS+ju0ysYAdCc5WwOR/Imq1cMTJNh+WmTzbNoZkVaAkeqXFn7lIYBqsMxIYDICbxCH9w9B8BOFIZHleogMNsVQvj3J3zL1WwouIWjz1I/Wpn99P3Vg8c8v03M3gU7e5fwEZHcEqsnh20wAAAABJRU5ErkJggg=="
        },
        bd6c: function(t, e, i) {
            "use strict";
            var s = (i("8615"), i("ac6a"), i("6762"), i("96cf"), i("3b8d")),
                n = i("26e2"),
                a = i("a6f8"),
                o = i("ed08"),
                r = {
                    name: "popSaveDrawRule",
                    components: {
                        Popup: n.a
                    },
                    data: function() {
                        return {
                            isShare: !0,
                            textarea: "",
                            limit: {},
                            cpType: "1",
                            rectTextInfos: {},
                            getImgUrl: Function
                        }
                    },
                    mounted: function() {
                        this.popup = this.$refs.popup
                    },
                    methods: {
                        show: function(t) {
                            var e = this;
                            this.cpType = t.cpType, this.rectTextInfos = t.rectTextInfos, this.getImgUrl = t.getImgUrl || Function, this.isShare = !0, this.textarea = "", this.reqFavoriteSum((function() {
                                e.popup.handleShow()
                            }))
                        },
                        close: function() {
                            this.popup.handleClose()
                        },
                        confirm: function() {
                            var t = Object(s.a)(regeneratorRuntime.mark((function t() {
                                var e = this;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            this.$loading(), setTimeout(Object(s.a)(regeneratorRuntime.mark((function t() {
                                                var i;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, e.getImgUrl();
                                                        case 2:
                                                            i = t.sent, e.reqFavorite(i);
                                                        case 4:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            }))), 300);
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        onKeydown: function(t) {
                            var e = t.keyCode;
                            this.textarea.length >= 50 && ![8, 37, 38, 39, 40].includes(e) && t.preventDefault()
                        },
                        onInputChange: function() {
                            this.textarea.length > 50 && (this.textarea = this.textarea.substr(0, 50), this.$confirm("超出字数限制"))
                        },
                        handleCheckShare: function() {
                            this.isShare = !this.isShare
                        },
                        formatDataJson: function() {
                            var t = {};
                            return this.rectTextInfos.forEach((function(e) {
                                var i = e.type;
                                t[i] || "X" === e.post || (t[i] = {
                                    type: i,
                                    title: e.title,
                                    contentValue: e.contentValue
                                })
                            })), JSON.stringify(Object.values(t))
                        },
                        reqFavorite: function() {
                            var t = Object(s.a)(regeneratorRuntime.mark((function t(e) {
                                var i, s, n, r, c, l, u = this;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return i = Object(o.a)(e), s = Object(o.b)(e), n = new File([i], new Date + "." + s), t.next = 5, a.a.favoriteRule({
                                                cpType: this.cpType,
                                                remark: this.textarea,
                                                share: this.isShare ? "1" : "0",
                                                dataJson: this.formatDataJson(),
                                                desTag: "desTag",
                                                reqExtra: {
                                                    upload: {
                                                        avatarFile: n
                                                    }
                                                }
                                            });
                                        case 5:
                                            r = t.sent, c = r.state, l = r.rspMsg, "1" === c ? (this.close(), this.$confirm("收藏成功", {
                                                buttonNames: ["取消", "查看我的收藏"],
                                                confirm: function() {
                                                    u.$router.push({
                                                        path: "/favoriteDrawRule",
                                                        query: {
                                                            cpType: u.cpType
                                                        }
                                                    })
                                                }
                                            })) : "2" === c && (this.close(), this.$confirm(l || "每期限收藏10个，提高成长值可收藏100个", {
                                                buttonNames: ["关闭", " 查看成长值"],
                                                confirm: function() {
                                                    u.$router.push({
                                                        path: "/vip"
                                                    })
                                                }
                                            })), this.$closeLoading();
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        reqFavoriteSum: function() {
                            var t = Object(s.a)(regeneratorRuntime.mark((function t(e) {
                                var i, s, n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.$loading(), t.next = 3, a.a.favoriteSum({
                                                cpType: this.cpType
                                            });
                                        case 3:
                                            i = t.sent, s = i.state, n = i.result, "1" === s && (this.limit = n || {}, e()), this.$closeLoading();
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }
                },
                c = (i("9e8e"), i("2877")),
                l = Object(c.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("Popup", {
                        ref: "popup"
                    }, [i("div", {
                        staticClass: "wrapper"
                    }, [i("div", {
                        staticClass: "title"
                    }, [t._v("保存到“我的收藏”")]), i("div", {
                        staticClass: "tip"
                    }, [t._v("\n      " + t._s(t.cpTypeName()) + " 第" + t._s(t.limit.showIssue) + "期，可收藏数量 "), i("i", {
                        staticClass: "red"
                    }, [t._v(t._s(t.limit.count) + "/" + t._s(t.limit.maxCount))])]), i("div", {
                        staticClass: "textarea"
                    }, [i("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.textarea,
                            expression: "textarea"
                        }],
                        attrs: {
                            placeholder: "便于后续查找，请简单描述规律信息，让自己不错过任何机会，限50字"
                        },
                        domProps: {
                            value: t.textarea
                        },
                        on: {
                            blur: t.handleBlur,
                            input: [function(e) {
                                e.target.composing || (t.textarea = e.target.value)
                            }, t.onInputChange],
                            keydown: t.onKeydown
                        }
                    })]), i("div", {
                        staticClass: "remark flex justify-start"
                    }, [i("div", {
                        staticClass: "checkbox flex",
                        on: {
                            click: t.handleCheckShare
                        }
                    }, [t.isShare ? i("i", {
                        staticClass: "iconfont check"
                    }, [t._v("")]) : i("i", {
                        staticClass: "iconfont"
                    }, [t._v("")])]), i("span", [t._v("赠人玫瑰，手留余香，")]), i("span", {
                        staticClass: "link",
                        on: {
                            click: function(e) {
                                return t.handleOutLink("drawRuleShare")
                            }
                        }
                    }, [t._v("查看分享须知")])]), i("div", {
                        staticClass: "buttons flex"
                    }, [i("div", {
                        staticClass: "item flex",
                        on: {
                            click: t.close
                        }
                    }, [t._v("关    闭")]), i("div", {
                        staticClass: "item flex",
                        on: {
                            click: t.confirm
                        }
                    }, [t._v("确    定")])])])])
                }), [], !1, null, "397ea751", null);
            e.a = l.exports
        },
        be96: function(t, e, i) {
            "use strict";
            i("5aea")
        },
        d05a: function(t, e, i) {
            "use strict";
            i("a196")
        },
        d7cb: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = (i("8e6e"), i("456d"), i("28a5"), i("7618")),
                n = (i("7f7f"), i("96cf"), i("3b8d")),
                a = (i("ac6a"), i("c5f6"), i("bd86")),
                o = i("7e6f"),
                r = (i("ffc1"), i("20d6"), i("5df3"), i("768b")),
                c = (i("55dd"), i("2fdb"), i("6762"), i("7514"), i("7a94")),
                l = (i("3b2b"), i("a481"), i("6c7b"), i("4f7f"), i("ed08")),
                u = i("6b43");

            function h(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(i), !0).forEach((function(e) {
                        Object(a.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            c.fabric.Object.prototype.objectCaching = !1, c.fabric.Object.prototype.selectable = !1;
            var d, p, v, m, g, x, y, C, w, b, S, T = {},
                k = /iphone/gi.test(navigator.userAgent),
                D = ["#fe0000", "#0000fe", "#6600ff", "#ff7f29", "#5eb95e", "#a45d34", "#19d6cf", "#00000a", "#f4cc03", "#bfff3f", "#a300a8", "#00ff01"],
                M = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                },
                B = {
                    color: "",
                    strokeWidth: 2,
                    mutipleType: 2,
                    mutipleGap: 0,
                    mutipleNum: 1,
                    colorMuti: !1,
                    isShowDragDot: !0,
                    numType: 0,
                    fontType: 1,
                    numBgType: u.a.get("numBgType") || 1
                },
                j = function(t) {
                    return p && p.isForPc ? 100 * Number(t) : Object(l.F)(t)
                },
                A = {
                    init: function(t) {
                        C = t.operation, p = t, v = t.drawMode, w = p.scale
                    },
                    setCanvas: function(t, e) {
                        d = t, M.top = 0 + p.cellH + t.incrementH, M.right = d.getWidth() - B.strokeWidth * w, M.bottom = d.getHeight() - B.strokeWidth * w - p.cellH, T = {}, d.midDot ? y = d.midDot : (y = G(), d.midDot = y, d.add(y)), d.renderAll(), d.freeBrush = d.freeBrush || new c.fabric.PencilBrush(d), d.freeBrush.color = B.color, d.freeBrush.width = B.strokeWidth * w, d.cleanBrush = d.cleanBrush || new c.fabric.PencilBrush(d), d.cleanBrush.color = q("#00ffec", .3), d.cleanBrush.width = 6, e && this.setDrawMode(v)
                    },
                    bringSomeFront: function() {
                        if ("clean" !== v) {
                            var t = p.curCanvasObj,
                                e = function(e, i) {
                                    var s = e.drawType ? e.getBoundingRect() : e,
                                        n = i.top + s.top,
                                        a = n + s.height,
                                        o = t.top,
                                        r = o + d.height;
                                    return n < o || n > r || a < o || a > r
                                };
                            p.canvasList.forEach((function(i) {
                                i !== t && i.canvas.getObjects().forEach((function(s) {
                                    if (s)
                                        if ("text" === s.drawType) {
                                            var n = s,
                                                a = n.textBackGroup,
                                                o = i.top - t.top;
                                            if (e({
                                                    top: a.top,
                                                    height: a.item(1).height
                                                }, i)) return;
                                            n.remove(), n.set({
                                                top: o + n.top
                                            }), n.ocanvas = d, n.docTop = d.docTop, n.setCoords(), a.set({
                                                top: o + a.top
                                            }), a.ocanvas = d, a.setCoords(), I(n), O(n, a)
                                        } else if (["circleNum"].includes(s.drawType)) {
                                        if (e(s, i)) return;
                                        var r = s.ocanvas;
                                        r.remove(s), s.ocanvas = d, s.docTop = d.docTop, s.set({
                                            top: s.top + r.docTop - d.docTop,
                                            opacity: s.opacity
                                        }), _(s.ocanvas.midDot, s)
                                    } else if ("rectText" === s.drawType) {
                                        if (e(s, i)) return;
                                        var c = s.ocanvas;
                                        s.remove(!0), s.ocanvas = d, s.docTop = d.docTop, s.set({
                                            top: s.top + c.docTop - d.docTop
                                        }), s.create()
                                    } else if (["curveLine", "line", "free"].includes(s.drawType)) {
                                        if (!s.linePath) return;
                                        var l = s.linePath.map((function(t) {
                                                return t.y
                                            })),
                                            u = Math.min.apply(Math, l),
                                            h = Math.max.apply(Math, l);
                                        if (e({
                                                top: u,
                                                height: h - u
                                            }, i)) return;
                                        var f = s.ocanvas;
                                        s.remove(!0);
                                        var p = d.docTop - f.docTop;
                                        s.ocanvas = d, s.docTop = d.docTop, s.set({
                                            top: s.top - p
                                        }), s.setCoords(), s.linePath && (s.linePath = s.linePath.map((function(t) {
                                            var e = t.y - p;
                                            return {
                                                x: t.x,
                                                y: e
                                            }
                                        }))), O(s.ocanvas.midDot, s)
                                    } else if (["rect", "circle"].includes(s.drawType)) {
                                        if (e(s, i)) return;
                                        var v = s.ocanvas;
                                        s.remove();
                                        var m = d.docTop - v.docTop;
                                        s.ocanvas = d, s.docTop = d.docTop, s.set({
                                            top: s.top - m
                                        }), s.setCoords(), O(s.ocanvas.midDot, s)
                                    } else ["dragCurveDot"].includes(s.drawType) && s.remove()
                                }))
                            }))
                        }
                    },
                    setDrawMode: function(t) {
                        v = t, d && ("free" === v ? (d.freeDrawingBrush = d.freeBrush, d.isDrawingMode = !0) : "clean" === v ? (d.freeDrawingBrush = d.cleanBrush, d.isDrawingMode = !0) : d.isDrawingMode = !1, this.bringSomeFront())
                    },
                    setCommon: function(t) {
                        B = Object.assign(B, t), p && (w = p.scale), d && (d.freeBrush.color = B.color, d.freeBrush.width = B.strokeWidth * w)
                    },
                    getCommon: function() {
                        return B
                    },
                    eventStart: function(t) {
                        var e = t.target;
                        e && "dragCurveDot" === e.drawType && 1 === e.opacity && (m = v, v = "dragCurve"), g = d.getPointer(t.e), N[v].start(g, t)
                    },
                    eventMove: function(t) {
                        var e = d.getPointer(t.e);
                        e.x = Math.min(Math.max(e.x, M.left), M.right), e.y = Math.min(Math.max(e.y, M.top), M.bottom), parseInt(e.x) === parseInt(g.x) && parseInt(e.y) === parseInt(g.y) || N[v].move(e, t)
                    },
                    eventObjMoving: function(t) {
                        var e = t.target;
                        "dragCurveDot" === e.drawType && e.dispatch()
                    },
                    eventEnd: function(t) {
                        (x = d.getPointer(t.e)).x = Math.min(Math.max(x.x, M.left), M.right), x.y = Math.min(Math.max(x.y, M.top), M.bottom), N[v].end(x, t), Math.abs(x.x - g.x) < 4 && Math.abs(x.y - g.y) < 4 && N[v].click(x, t)
                    },
                    eventIsClick: function(t) {
                        return (x = t || x).x = Math.min(Math.max(x.x, M.left), M.right), x.y = Math.min(Math.max(x.y, M.top), M.bottom), Math.abs(x.x - g.x) < 4 && Math.abs(x.y - g.y) < 4
                    }
                },
                W = function(t) {
                    var e = t.start;
                    t.start = function(t, i) {
                        if (d.hasDrawed = !0, "free" !== v && "clean" !== v && "text" !== v) {
                            if ("text" !== v) {
                                if (p.inputIsShow) return T.inputDisappearing = !0, p.inputIsShow = !1, void(T.stopForTextbox = !0);
                                if (T.deOrSelectedText = !1, T.selectedText || T.deselectedText) return T.selectedText = null, T.deselectedText = null, T.deOrSelectedText = !0, void(T.stopForTextbox = !0)
                            }
                            i.target && "text" === i.target.drawType && "text" !== v && "clean" !== v && "free" !== v ? T.stopForTextbox = !0 : e && e(t, i)
                        } else e && e(t, i)
                    };
                    var i = t.move;
                    t.move = function(t, e) {
                        d.hasDrawed = !0, "free" !== v && "clean" !== v && "text" !== v && T.stopForTextbox || i && i(t, e)
                    };
                    var s = t.end;
                    t.end = function(t, e) {
                        if (d.hasDrawed = !0, "free" !== v && "clean" !== v && "text" !== v) {
                            if (T.stopForTextbox1 = !1, T.stopForTextbox) return T.stopForTextbox = !1, void(T.stopForTextbox1 = !0);
                            s && s(t, e)
                        } else s && s(t, e)
                    };
                    var n = t.click;
                    return t.click = function(t, e) {
                        if (d.hasDrawed = !0, "free" !== v && "clean" !== v && "text" !== v) {
                            if (T.inputDisappearing) T.inputDisappearing = !1;
                            else if (!T.deOrSelectedText) {
                                var i = e.target || {};
                                T.textboxOpt = e;
                                var s = d.getActiveObject() || {};
                                if ("text" === s.drawType && s.isClickBtn(t, e, "T")) s.changeTextBg(e);
                                else {
                                    if ("text" === i.drawType && !T.deOrSelectedText && i === d.getActiveObject()) {
                                        T.textbox = i;
                                        var a = i.textBackGroup.item(1).stroke;
                                        p.showInput(i.text, a)
                                    }
                                    if (T.stopForTextbox1) T.stopForTextbox1 = !1;
                                    else if (!e.target || "text" !== e.target.drawType || "text" === v || "clean" === v || "free" === v) {
                                        var o = T.selectedText;
                                        o && o.isClickBtn(d.getPointer(e.e), e, "T") || n && n(t, e)
                                    }
                                }
                            }
                        } else n && n(t, e)
                    }, t
                },
                N = {
                    free: W({
                        start: function() {
                            T.linePath = []
                        },
                        move: function(t) {
                            T.linePath.push(g);
                            var e = T.linePath,
                                i = e[e.length - 1] || g;
                            (Math.abs(t.x - i.x) >= 3 || Math.abs(t.y - i.y) >= 3) && T.linePath.push(t)
                        },
                        end: function() {
                            var t = d.getObjects(),
                                e = t[t.length - 1];
                            e && (e.ocanvas = d, e.drawType = "free", e.linePath = T.linePath, e.docTop = d.docTop, e.remove = function() {
                                e.ocanvas.isDrawingMode ? (e.ocanvas.isDrawingMode = !1, e.ocanvas.remove(e), e.setCoords(), e.ocanvas = d, setTimeout((function() {
                                    e.ocanvas.isDrawingMode = !0
                                }), 10)) : (e.ocanvas.remove(e), e.setCoords(), e.ocanvas = d)
                            }, e.setCoords(), e.opStates = [], C.add(e))
                        },
                        click: function(t) {
                            d.isDrawingMode = !1;
                            var e = d.getObjects(),
                                i = e[e.length - 1];
                            i && (d.remove(i), C.pop()), Q(t), setTimeout((function() {
                                d.isDrawingMode = !0
                            }), 10)
                        }
                    }),
                    line: W({
                        start: function() {
                            T.lineDraws = null
                        },
                        move: function(t) {
                            if (T.lineDraws) T.lineDraws.forEach((function(e) {
                                e.line.set({
                                    x2: t.x,
                                    y2: t.y - e.durY
                                })
                            })), d.renderAll();
                            else {
                                T.lineDraws = [];
                                for (var e = 0; e < 1; e++) {
                                    var i = (B.mutipleGap + 1) * e * p.cellH,
                                        s = p.getCell({
                                            x: t.x,
                                            y: t.y - i
                                        });
                                    if (s) {
                                        var n = [s.coord.x, s.coord.y, s.coord.x, s.coord.y],
                                            a = L(n, B.color, B.strokeWidth * w);
                                        T.lineDraws.push({
                                            durY: i,
                                            line: a
                                        }), O(y, a)
                                    }
                                }
                            }
                        },
                        end: function(t) {
                            if (T.lineDraws) {
                                T.lineDraws.forEach((function(e) {
                                    var i = p.getCell({
                                        x: t.x,
                                        y: t.y - e.durY
                                    });
                                    if (i) {
                                        var s = {
                                            x: i.coord.x,
                                            y: i.coord.y
                                        };
                                        e.line.set({
                                            x2: s.x,
                                            y2: s.y
                                        }), d.renderAll(), e.line.linePath = tt(g, s)
                                    }
                                }));
                                var e = T.lineDraws.map((function(t) {
                                    return t.line
                                }));
                                e.opStates = [], C.add(e)
                            }
                        },
                        click: function(t) {
                            Q(t)
                        }
                    }),
                    intelLine: W({
                        start: function(t) {
                            T.intelLineMoved = !1, T.intelLineMovedEnd = !1, T.intelLineCoordSHasCircleNum = $(t), T.lineDraws = []
                        },
                        move: function(t) {
                            if (T.intelLineMoved = !0, !A.eventIsClick(t))
                                if (T.lineDraws.length < 1)
                                    for (var e = 0; e < B.mutipleNum; e++) {
                                        var i = (B.mutipleGap + 1) * e * p.cellH,
                                            s = p.getCell({
                                                x: t.x,
                                                y: t.y - i
                                            });
                                        if (s) {
                                            var n = st(e),
                                                a = F(s, !1, !1, {
                                                    color: n
                                                });
                                            s.rectText && a.set({
                                                opacity: 0
                                            });
                                            var o = [s.coord.x, s.coord.y, s.coord.x, s.coord.y],
                                                r = P(o, null, null, n);
                                            r.line.startCircleNum = a, a.lines.push(r.line), T.lineDraws.push({
                                                durY: i,
                                                circleNum: a,
                                                cLine: r
                                            }), r.add()
                                        }
                                    } else T.lineDraws.forEach((function(e) {
                                        e.cLine.setEndCoord({
                                            x: t.x,
                                            y: t.y - e.durY
                                        })
                                    })), d.renderAll()
                        },
                        end: function(t) {
                            if (T.intelLineMoved && (T.intelLineMoved = !1, T.intelLineMovedEnd = !0), T.lineDraws) {
                                T.lineDraws.forEach((function(e, i) {
                                    var s = {
                                            x: t.x,
                                            y: t.y - e.durY
                                        },
                                        n = p.getCell(s),
                                        a = e.cLine;
                                    if (n) {
                                        var o = p.stages[n.level].selectCell,
                                            r = a.setEndCoord(n.coord, !0, o),
                                            c = F(n, !1, !1, {
                                                color: st(i)
                                            });
                                        if (n.rectText && c.set({
                                                opacity: 0
                                            }), a.line.endCircleNum = c, c.lines.push(a.line), (p.getCell(g) !== n || o && !A.eventIsClick()) && o && n.circleNum && 0 !== n.circleNum.opacity)(n.circleNum.objects || n.circleNum._objects)[1].text || p.showNumDialog(n, (function() {
                                            r && (r.remove(), I(r), r.disappear())
                                        }))
                                    } else a.setEndCoord(s, !0, !1)
                                }));
                                var e = T.lineDraws.map((function(t) {
                                        return t.cLine.line
                                    })),
                                    i = {
                                        drawType: "opAddCurveLine",
                                        ocanvas: d,
                                        opStates: [],
                                        set: function() {},
                                        remove: function() {
                                            e.forEach((function(t) {
                                                return t.remove()
                                            }))
                                        },
                                        create: function() {
                                            e.forEach((function(t) {
                                                return t.create()
                                            }))
                                        }
                                    };
                                C.add(i)
                            }
                        },
                        click: function(t) {
                            T.intelLineMovedEnd || (T.intelLineCoordSHasCircleNum, Q(t))
                        }
                    }),
                    text: W({
                        start: function() {
                            if (p.inputIsShow && (T.inputDisappearing = !0, p.inputIsShow = !1), T.deOrSelectedText = !1, T.selectedText || T.deselectedText) return T.selectedText = null, T.deselectedText = null, void(T.deOrSelectedText = !0)
                        },
                        click: function(t, e) {
                            if (T.inputDisappearing) T.inputDisappearing = !1;
                            else if (!T.deOrSelectedText) {
                                var i = e.target || {};
                                T.textboxOpt = e;
                                var s = d.getActiveObject() || {};
                                if ("text" === s.drawType && s.isClickBtn(t, e, "T")) s.changeTextBg(e);
                                else if ("text" === i.drawType) {
                                    if (i === d.getActiveObject()) {
                                        T.textbox = i;
                                        var n = i.textBackGroup.item(1).stroke;
                                        p.showInput(i.text, n)
                                    }
                                } else T.textbox = null, T.newTextCoord = t, p.showInput()
                            }
                        }
                    }),
                    clean: W({
                        start: function() {
                            T.clean = {
                                cleanObjs: new Set,
                                isCleaning: !1,
                                endTime: T.clean && T.clean.endTime
                            }
                        },
                        move: function(t) {
                            var e = T.clean;
                            e.isCleaning || e.endTime && +new Date - e.endTime < 100 || (e.isCleaning = !0, p.canvasList.forEach((function(i) {
                                var s = i.canvas;
                                if (s !== d) {
                                    var n = p.curCanvasObj.top + t.y - i.top;
                                    n < 0 || n > s.height || (s.getObjects().forEach((function(i) {
                                        if (0 !== i.opacity && Z(i, {
                                                x: t.x,
                                                y: n
                                            })) {
                                            var s = i.drawType;
                                            "text" === s ? (e.cleanObjs.add(i), (i = i.textBackGroup).set("opacity", .3)) : "textBackGroup" !== s && (e.cleanObjs.add(i), i.set("opacity", .3))
                                        }
                                    })), s.requestRenderAll())
                                }
                            })), setTimeout((function() {
                                e.isCleaning = !1
                            }), 30))
                        },
                        end: function() {
                            d.hasDrawed = !1, T.clean.endTime = +new Date, p.canvasList.forEach((function(t) {
                                t.canvas.getObjects().forEach((function(t) {
                                    delete t.cleanTrace
                                }))
                            })), d.clear();
                            var t = T.clean.cleanObjs;
                            if (t.size > 0) {
                                var e = function() {
                                    t.forEach((function(t) {
                                        "curveLine" === t.drawType ? t.remove(!0) : t.remove()
                                    }))
                                };
                                e();
                                var i = {
                                    drawType: "opClean",
                                    ocanvas: d,
                                    opStates: [function() {
                                        e()
                                    }],
                                    set: function() {},
                                    remove: function() {
                                        t.forEach((function(t) {
                                            it(t)
                                        }))
                                    },
                                    create: function() {
                                        e()
                                    }
                                };
                                C.add(i)
                            }
                        }
                    }),
                    rect: W({
                        start: function() {
                            T.rect = null
                        },
                        move: function(t) {
                            if (!T.rect) {
                                var e = q(B.color, .5);
                                t = {
                                    x: t.x - 3,
                                    y: t.y - 3
                                }, T.rect = R(t, {
                                    fill: e,
                                    stroke: e,
                                    strokeWidth: 0
                                }), O(y, T.rect)
                            }
                            var i = t.x - g.x,
                                s = t.y - g.y;
                            T.rect.set({
                                width: i,
                                height: s
                            }).setCoords(), d.renderAll()
                        },
                        end: function() {
                            if (T.rect) {
                                if (A.eventIsClick()) return void T.rect.ocanvas.remove(T.rect);
                                T.rect.opStates = [], C.add(T.rect)
                            }
                        },
                        click: function(t) {
                            Q(t)
                        }
                    }),
                    rectTran: W({
                        start: function() {
                            T.rect = null
                        },
                        move: function(t) {
                            T.rect || (t = {
                                x: t.x - 3,
                                y: t.y - 3
                            }, T.rect = R(t), O(y, T.rect));
                            var e = t.x - g.x,
                                i = t.y - g.y;
                            T.rect.set({
                                width: e,
                                height: i
                            }).setCoords(), d.renderAll()
                        },
                        end: function() {
                            if (T.rect) {
                                if (A.eventIsClick()) return void T.rect.ocanvas.remove(T.rect);
                                T.rect.opStates = [], C.add(T.rect)
                            }
                        },
                        click: function(t) {
                            Q(t)
                        }
                    }),
                    circle: W({
                        start: function() {
                            T.circle = null
                        },
                        move: function(t) {
                            if (!T.circle) {
                                var e = q(B.color, .5);
                                t = {
                                    x: t.x - 3,
                                    y: t.y - 3
                                }, T.circle = E(t, {
                                    fill: e,
                                    stroke: e,
                                    strokeWidth: 0
                                }), O(y, T.circle)
                            }
                            var i = t.x - g.x,
                                s = t.y - g.y,
                                n = i > 0 ? "left" : "right",
                                a = s > 0 ? "top" : "bottom";
                            T.circle.set({
                                rx: Math.abs(i / 2),
                                ry: Math.abs(s / 2),
                                originX: n,
                                originY: a
                            }).setCoords(), d.renderAll()
                        },
                        end: function() {
                            if (T.circle) {
                                if (A.eventIsClick()) return void T.circle.ocanvas.remove(T.circle);
                                T.circle.opStates = [], C.add(T.circle)
                            }
                        },
                        click: function(t) {
                            Q(t)
                        }
                    }),
                    circleTran: W({
                        start: function() {
                            T.circle = null
                        },
                        move: function(t) {
                            T.circle || (t = {
                                x: t.x - 3,
                                y: t.y - 3
                            }, T.circle = E(t), O(y, T.circle));
                            var e = t.x - g.x,
                                i = t.y - g.y,
                                s = e > 0 ? "left" : "right",
                                n = i > 0 ? "top" : "bottom";
                            T.circle.set({
                                rx: Math.abs(e / 2),
                                ry: Math.abs(i / 2),
                                originX: s,
                                originY: n
                            }).setCoords(), d.renderAll()
                        },
                        end: function() {
                            if (T.circle) {
                                if (A.eventIsClick()) return void T.circle.ocanvas.remove(T.circle);
                                T.circle.opStates = [], C.add(T.circle)
                            }
                        },
                        click: function(t) {
                            Q(t)
                        }
                    }),
                    dragCurve: W({
                        start: function(t, e) {
                            e.target.clearTimer()
                        },
                        end: function(t, e) {
                            v = m, e.target.disappear()
                        }
                    })
                },
                O = function(t, e) {
                    var i = t.ocanvas || d;
                    i.insertAt(e, i.getObjects().indexOf(t), !1), i.renderAll(), i.hasDrawed = !0
                },
                _ = function(t, e) {
                    var i = t.ocanvas || d;
                    i.insertAt(e, i.getObjects().indexOf(t) + 1, !1), i.renderAll(), i.hasDrawed = !0
                },
                I = function(t) {
                    var e = t.ocanvas || d;
                    e.add(t), e.renderAll(), e.hasDrawed = !0
                },
                L = function(t, e, i) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        n = new c.fabric.Line(t, f({
                            fill: e,
                            stroke: e,
                            strokeWidth: i,
                            originX: "center",
                            originY: "center"
                        }, s));
                    return n.ocanvas = d, n.drawType = "line", n.docTop = d.docTop, n.remove = function() {
                        var t = n.ocanvas;
                        t.remove(n), n.ocanvas = t
                    }, n
                },
                P = function(t, e, s, n) {
                    var a, o, r, l = t[0],
                        u = t[1],
                        h = t[2],
                        f = t[3],
                        v = e ? e[0] : (l + h) / 2,
                        m = e ? e[1] : (u + f) / 2,
                        g = n || B.color,
                        x = new c.fabric.Path("M ".concat(l, " ").concat(u, " Q ").concat(v, " ").concat(m, " ").concat(h, " ").concat(f), {
                            fill: "",
                            stroke: g,
                            strokeWidth: B.strokeWidth * w
                        });
                    x.drawType = "curveLine", x.ocanvas = d, x.docTop = d.docTop, x.docTopForLoadJson = d.docTop, x.remove = function(t) {
                        if (!t) {
                            var e = x.startCircleNum;
                            e && e.remove(x);
                            var i = x.endCircleNum;
                            i && i.remove(x)
                        }
                        var s = x.ocanvas;
                        s.remove(x), x.ocanvas = s
                    }, x.create = function() {
                        var t = x.docTop - x.ocanvas.docTop;
                        o += t, x.path[1][1] = a, x.path[1][2] = o, x.path[0][2] += t, x.path[1][4] += t, O(x.ocanvas.midDot, x);
                        var e = x.startCircleNum,
                            i = x.endCircleNum;
                        x.startCircleNum = e.create(), x.startCircleNum.lines.push(x), x.endCircleNum = i.create(), x.endCircleNum.lines.push(x), x.ocanvas.renderAll()
                    };
                    var y, S = "boolean" == typeof s ? s : B.isShowDragDot && 1 === B.mutipleNum;
                    S && (b && (b.clearTimer(), b.remove()), x.dragDot = b = r = new c.fabric.Group([new c.fabric.Circle({
                        radius: 15,
                        fill: "transparent",
                        stroke: "transparent",
                        strokeWidth: 0,
                        originX: "center",
                        originY: "center"
                    })], {
                        left: v,
                        top: m,
                        hasBorders: !1,
                        hasControls: !1,
                        originX: "center",
                        originY: "center",
                        selectable: !0
                    }), U(i("f6f2")).then((function(t) {
                        r.add(t.scale(.47).set({
                            originX: "center",
                            originY: "center"
                        }))
                    })), r.drawType = "dragCurveDot", r.ocanvas = d, r.line = x, r.dispatch = function() {
                        var t = Math.min(Math.max(r.left, M.left), M.right),
                            e = Math.min(Math.max(r.top, M.top), M.bottom),
                            i = J(l, u, t, e, h, f);
                        x.path[1][1] = i.x, x.path[1][2] = i.y
                    }, r.clearTimer = function() {
                        clearTimeout(y)
                    }, r.remove = function() {
                        var t = r.ocanvas;
                        t.remove(r), r.ocanvas = t
                    }, r.disappear = function() {
                        clearTimeout(y), y = setTimeout((function() {
                            r.remove()
                        }), 3e3)
                    }, r.on("moved", (function() {
                        x.linePath = et({
                            x: x.path[0][1],
                            y: x.path[0][2]
                        }, {
                            x: x.path[1][1],
                            y: x.path[1][2]
                        }, {
                            x: x.path[1][3],
                            y: x.path[1][4]
                        });
                        var t = a,
                            e = o,
                            i = a = x.path[1][1],
                            s = o = x.path[1][2],
                            n = {
                                drawType: "opDragCurveLine",
                                ocanvas: d,
                                opStates: [],
                                set: function() {},
                                remove: function() {
                                    a = x.path[1][1] = t, o = x.path[1][2] = e, x.dragDot.remove(), x.ocanvas.renderAll()
                                },
                                create: function() {
                                    a = x.path[1][1] = i, o = x.path[1][2] = s, x.dragDot.remove(), x.ocanvas.renderAll()
                                }
                            };
                        C.add(n)
                    })));
                    var T, k = function(t, e, i, s, n) {
                            var a = Math.PI / 180,
                                o = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - e, 2)),
                                r = o / 2 / Math.cos(n * a),
                                c = Math.asin((s - e) / o);
                            return 0 !== n ? (c = i - t < 0 ? Math.PI - c : c, c += i - t < 0 ? n * a : -n * a) : (c = i - t < 0 ? Math.PI - c : c, c -= n * a), {
                                x: t + Math.cos(c) * r,
                                y: e + Math.sin(c) * r
                            }
                        },
                        D = function(t, e, i) {
                            var s = p.getCell({
                                    x: l,
                                    y: u
                                }),
                                n = p.getCell({
                                    x: e,
                                    y: i
                                }),
                                a = p.getCell(t);
                            return !(a == s || a == n || !$(t))
                        },
                        j = function(t, e) {
                            var i = [24, -24, 0][B.mutipleType],
                                s = k(l, u, t, e, i);
                            if (2 === B.mutipleType) return s;
                            if (V(s) || (s = k(l, u, t, e, -i)), S) {
                                0 === i && function(t, e) {
                                    var i = p.getCell({
                                            x: l,
                                            y: u
                                        }),
                                        s = p.getCell({
                                            x: t,
                                            y: e
                                        });
                                    if (!i || !s) return !1;
                                    var n = i.coord,
                                        a = s.coord,
                                        o = a.x - n.x,
                                        r = a.y - n.y,
                                        c = Math.atan(r / o);
                                    if (Math.abs(r) > Math.abs(o))
                                        for (var h = r / Math.abs(r), f = h * p.cellH; Math.abs(f) < Math.abs(r);) {
                                            var d = f / Math.tan(c),
                                                v = {
                                                    x: n.x + d,
                                                    y: n.y + f
                                                },
                                                m = p.getCell(v);
                                            if ($(v) && m != s && m != i) return !0;
                                            f += h * p.cellH
                                        } else
                                            for (var g = o / Math.abs(o), x = g * p.eCellW; Math.abs(x) < Math.abs(o);) {
                                                var y = x * Math.tan(c),
                                                    C = {
                                                        x: n.x + x,
                                                        y: n.y + y
                                                    },
                                                    w = p.getCell(C);
                                                if ($(C) && w != s && w != i) return !0;
                                                x += g * p.eCellW
                                            }
                                    return !1
                                }(t, e) && (s = k(l, u, t, e, 24), V(s) || (s = k(l, u, t, e, -24)));
                                for (var n = 1; D(s, t, e) && n <= 20;) {
                                    var a = 0 === i ? 24 : i;
                                    a += a / Math.abs(a) * n * 5;
                                    var o = k(l, u, t, e, a);
                                    if (!V(o)) break;
                                    s = o, n++
                                }
                            }
                            return s
                        };
                    return {
                        line: x,
                        dragDot: r,
                        add: function() {
                            O(x.ocanvas.midDot, x), r && _(x.ocanvas.midDot, r)
                        },
                        setEndCoord: function(t, e, i) {
                            T && T.set("opacity", 0);
                            var s = t.x,
                                n = t.y,
                                c = p.getCell({
                                    x: l,
                                    y: u
                                }),
                                d = p.getCell(t);
                            if (c === d) return x.set("opacity", 0), void(r && r.set("opacity", 0));
                            if (1 === B.mutipleNum && !d.rectText) {
                                var v = d.circleNum;
                                if (v) {
                                    if (0 === v.opacity) {
                                        var m, g, y = d.index,
                                            C = p.theme;
                                        0 === y ? (m = C.statBgColor, g = C.statColor) : y <= 4 ? (m = C.frontBgColor, g = C.frontColor) : (m = C.endBgColor, g = C.endColor), (T = v).set({
                                            opacity: .7,
                                            top: d.coord.y
                                        }), T.item(0).set({
                                            fill: ot() ? B.color : m,
                                            stroke: ot() ? "#fff" : B.color
                                        }), T.item(1).set({
                                            fill: ot() ? "#fff" : g
                                        })
                                    }
                                } else(T = F(d)).set("opacity", .7)
                            }
                            var w = j(s, n),
                                b = J(l, u, w.x, w.y, s, n);
                            return x.path[1][1] = b.x, x.path[1][2] = b.y, x.path[1][3] = h = s, x.path[1][4] = f = n, x.set("opacity", 1), r && r.set({
                                left: w.x,
                                top: w.y,
                                opacity: 1
                            }), e && (x.linePath = et({
                                x: x.path[0][1],
                                y: x.path[0][2]
                            }, {
                                x: x.path[1][1],
                                y: x.path[1][2]
                            }, {
                                x: x.path[1][3],
                                y: x.path[1][4]
                            }), a = b.x, o = b.y, r && !i && (r.remove(), I(r), r.disappear())), r
                        }
                    }
                },
                R = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = new c.fabric.Rect(Object.assign({
                            width: 1,
                            height: 1,
                            left: t.x,
                            top: t.y,
                            fill: "transparent",
                            stroke: B.color,
                            strokeWidth: B.strokeWidth * w
                        }, e));
                    return i.ocanvas = d, i.drawType = "rect", i.docTop = d.docTop, i.remove = function() {
                        var t = i.ocanvas;
                        t.remove(i), i.canvas = t
                    }, i
                },
                E = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = new c.fabric.Ellipse(Object.assign({
                            rx: 1,
                            ry: 1,
                            left: t.x,
                            top: t.y,
                            fill: "transparent",
                            stroke: B.color,
                            strokeWidth: B.strokeWidth * w
                        }, e));
                    return i.ocanvas = d, i.drawType = "circle", i.docTop = d.docTop, i.remove = function() {
                        var t = i.ocanvas;
                        t.remove(i), i.ocanvas = t
                    }, i
                },
                F = function t(e, i, s, n) {
                    var a, o, r, l, u = e.coord,
                        h = e.num,
                        v = e.index,
                        m = e.circleNum,
                        g = B.color,
                        x = 0,
                        y = f({}, p.font);
                    Object.keys(y).forEach((function(t) {
                        var e = y[t];
                        y[t] = parseFloat(e)
                    }));
                    var w = p.theme,
                        b = p.scale;
                    if (n && (g = n.color || g, h = void 0 === n.num ? h : n.num, p.setCircleNum(e, h)), 0 === v) a = y.statRadius, o = y.statCircleFont, r = w.statBgColor, l = w.statColor;
                    else if (v <= 4) {
                        a = y.frontRadius, o = y.frontCircleFont;
                        var S = {
                            fontSizeFen: y.frontCircleFont - j(.07 * b),
                            fontSizeStr: y.frontCircleFont - j(.08 * b)
                        };
                        isNaN(Number(h)) ? o = /\//.test(h) ? S.fontSizeFen : S.fontSizeStr : (o = y.frontCircleFont, x = k ? 0 : 1), r = w.frontBgColor, l = w.frontColor
                    } else {
                        a = y.endRadius, o = y.endCircleFont;
                        var T = {
                            fontSizeFen: y.endCircleFont - j(.09 * b),
                            fontSizeStr: y.endCircleFont - j(.08 * b)
                        };
                        if (isNaN(Number(h))) o = /\//.test(h) ? T.fontSizeFen : T.fontSizeStr;
                        else {
                            var D = h > 9 ? .02 : 0;
                            o = y.endCircleFont - j(D)
                        }
                        r = w.endBgColor, l = w.endColor
                    }
                    if (m) {
                        var M = m.item(0).numType;
                        if (s) {
                            if (m.item(0).set({
                                    fill: ot(M) ? g : r,
                                    stroke: ot(M) ? "#fff" : g
                                }), m.item(1).set({
                                    fill: ot(M) ? "#fff" : l,
                                    fontSize: o,
                                    text: h,
                                    top: x
                                }), m.set({
                                    top: u.y,
                                    opacity: Math.abs(1 - m.opacity)
                                }), m.ocanvas.renderAll(), i) {
                                var A = {
                                    drawType: "opClickNum",
                                    ocanvas: d,
                                    opStates: [],
                                    set: function() {},
                                    remove: function() {
                                        (m = e.circleNum).set({
                                            opacity: Math.abs(1 - m.opacity)
                                        }), m.ocanvas.renderAll()
                                    },
                                    create: function() {
                                        (m = e.circleNum).set({
                                            opacity: Math.abs(1 - m.opacity)
                                        }), m.ocanvas.renderAll()
                                    }
                                };
                                C.add(A)
                            }
                            return m
                        }
                        m.ocanvas.remove(m), m.ocanvas = d, m.item(0).set({
                            fill: ot(M) ? g : r,
                            stroke: ot(M) ? "#fff" : g
                        }), m.item(1).set({
                            fill: ot(M) ? "#fff" : l,
                            fontSize: o,
                            text: h,
                            top: x
                        }), m.set({
                            top: u.y,
                            opacity: 1
                        })
                    } else {
                        var W = at(g, a, r),
                            N = new c.fabric.Text(h, {
                                fontFamily: "Times New Roman",
                                fontWeight: "bold",
                                lineHeight: 1,
                                fontSize: o,
                                fill: ot() ? "#fff" : l,
                                originX: "center",
                                originY: "center",
                                top: x
                            });
                        (m = e.circleNum = new c.fabric.Group([W, N], {
                            width: 2 * a,
                            height: 2 * a,
                            left: u.x,
                            top: u.y,
                            originX: "center",
                            originY: "center",
                            opacity: n && "number" == typeof n.opacity ? n.opacity : 1
                        })).ocanvas = n && n.ocanvas ? n.ocanvas : d, m.drawType = "circleNum", m.lines = [], m.docTop = m.ocanvas.docTop
                    }
                    m.remove = function(t) {
                        if (m)
                            if (t) {
                                var e = m.lines.findIndex((function(e) {
                                    return e === t
                                }));
                                e > -1 && m.lines.splice(e, 1), m.lines.length < 1 && (m.set({
                                    opacity: 0
                                }), m.ocanvas.renderAll())
                            } else m.set({
                                opacity: 0
                            }), m.ocanvas.renderAll()
                    };
                    var O = m.item(0).fill;
                    return m.create = function() {
                        var t = m.docTop - m.ocanvas.docTop;
                        return m.set({
                            top: m.top + t,
                            opacity: 1
                        }), m.item(0).set("fill", O), m.ocanvas.renderAll(), m
                    }, m.adaptNumType = function() {
                        var e = m.item(0),
                            i = e.numType,
                            s = ot(i) ? e.fill : e.stroke,
                            n = m.ocanvas,
                            a = {
                                x: m.left,
                                y: m.top
                            };
                        n.remove(m);
                        var o = p.getCell(a, {
                            top: n.docTop,
                            canvas: n
                        });
                        o.circleNum = null;
                        var r = t(o, !1, !1, {
                                ocanvas: n,
                                color: s,
                                opacity: m.opacity
                            }),
                            c = m.lines;
                        r.lines = c, c.forEach((function(t) {
                            t.startCircleNum === m && (t.startCircleNum = r), t.endCircleNum === m && (t.endCircleNum = r)
                        }))
                    }, _(m.ocanvas.midDot, m), i && (m.opStates = [], C.add(m)), m
                },
                z = function(t, e, s) {
                    var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = 8 * w,
                        o = a + 8 * w,
                        r = 12 * w,
                        l = 5 * w,
                        u = s ? q(s, 1) : B.color,
                        h = [u, "transparent"],
                        f = ["#fff", u],
                        v = 0,
                        m = new c.fabric.IText(e, {
                            left: t.x,
                            top: t.y,
                            fill: f[0],
                            strokeWidth: 0,
                            stroke: "#fff",
                            fontSize: 20 * w,
                            cornerStyle: "circle",
                            cornerColor: "transparent",
                            borderColor: "transparent",
                            cornerSize: 2 * r,
                            transparentCorners: !0,
                            padding: o,
                            editingBorderColor: "transparent",
                            rotatingPointOffset: l,
                            editable: !1,
                            minScaleLimit: .6,
                            selectable: !0
                        });
                    m.drawType = "text", m.ocanvas = d, m.docTop = d.docTop, m.setControlsVisibility({
                        bl: !1,
                        br: !0,
                        mb: !1,
                        ml: !1,
                        mr: !1,
                        mt: !1,
                        tl: !1,
                        tr: !1,
                        mtr: !0
                    }), I(m);
                    var g, x, y, b, S = new c.fabric.Rect({
                            width: m.width + 2 * a,
                            height: m.height + 2 * a,
                            fill: h[0],
                            rx: 5 * w,
                            ry: 5 * w,
                            originX: "center",
                            originY: "center"
                        }),
                        k = new c.fabric.Rect({
                            width: m.width + 2 * o,
                            height: m.height + 2 * o,
                            rx: 5 * w,
                            ry: 5 * w,
                            fill: "transparent",
                            stroke: u,
                            strokeWidth: 1 * w,
                            originX: "center",
                            originY: "center",
                            visible: !1
                        }),
                        D = m.getPointByOrigin("center", "center"),
                        M = new c.fabric.Group([S, k], {
                            left: D.x,
                            top: D.y,
                            originX: "center",
                            originY: "center"
                        });
                    M.drawType = "textBackGroup", M.textbox = m, M.ocanvas = d, M.docTop = d.docTop, m.textBackGroup = M, O(m, M), Promise.all([U(i("dc97")), U(i("e28e"))]).then((function(t) {
                        g = new c.fabric.Group([new c.fabric.Circle({
                            radius: r,
                            fill: u,
                            originX: "center",
                            originY: "center"
                        }), t[0].scale(.5 * w).set({
                            originX: "center",
                            originY: "center"
                        })], {
                            left: 0,
                            top: -k.height / 2 - l,
                            originX: "center",
                            originY: "center",
                            visible: !1
                        }), x = new c.fabric.Group([new c.fabric.Circle({
                            radius: r,
                            fill: u,
                            originX: "center",
                            originY: "center"
                        }), new c.fabric.Text("透", {
                            fontFamily: "sans-serif",
                            fontSize: 14 * w,
                            fill: "#fff",
                            originX: "center",
                            originY: "center"
                        })], {
                            left: -k.width / 2,
                            top: k.height / 2,
                            originX: "center",
                            originY: "center",
                            visible: !1
                        }), y = new c.fabric.Group([new c.fabric.Circle({
                            radius: r,
                            fill: u,
                            originX: "center",
                            originY: "center"
                        }), t[1].scale(.48 * w).set({
                            originX: "center",
                            originY: "center"
                        })], {
                            left: k.width / 2,
                            top: k.height / 2,
                            originX: "center",
                            originY: "center",
                            visible: !1
                        }), M.add(g, x, y)
                    })), m.fireChangeText = function(t, e) {
                        e = e || B.color, h = [e, "transparent"], f = ["#fff", e], t && m.set({
                            text: t
                        }), m.changeTextBg(null, !1, v), k.set({
                            stroke: e
                        }), g.item(0).set({
                            fill: e
                        }), x.item(0).set({
                            fill: e
                        }), y.item(0).set({
                            fill: e
                        }), A(), d.renderAll()
                    }, m.changeTextBg = function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = arguments.length > 2 ? arguments[2] : void 0;
                        if (v = "number" == typeof i ? i : 1 - v, W(), S.set({
                                fill: h[v]
                            }), m.set({
                                fill: f[v]
                            }), x && x.item(1).set("text", ["透", "实"][v]), e) {
                            m.ocanvas.setActiveObject(m, t.e);
                            var s = v,
                                n = {
                                    drawType: "opChangeTextBg",
                                    ocanvas: d,
                                    opStates: [function() {}],
                                    set: function() {},
                                    remove: function() {
                                        m.changeTextBg(t, !1, 1 - s)
                                    },
                                    create: function() {
                                        m.changeTextBg(t, !1, s)
                                    }
                                };
                            C.add(n)
                        }
                        m.ocanvas.renderAll()
                    }, m.isClickBtn = function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "T",
                            s = m.getPointByOrigin("center", "center"),
                            n = k.getScaledWidth(),
                            a = k.getScaledHeight(),
                            o = M.angle,
                            c = 2 * Math.PI / 360,
                            u = a / 2 + l,
                            h = Math.sqrt(Math.pow(a / 2, 2) + Math.pow(n / 2, 2)),
                            f = 360 * Math.atan(n / a) / (2 * Math.PI) + o,
                            d = {
                                x: s.x + Math.sin(o * c) * u,
                                y: s.y - Math.cos(o * c) * u
                            },
                            p = {
                                x: s.x - Math.sin(f * c) * h,
                                y: s.y + Math.cos(f * c) * h
                            },
                            v = {
                                x: s.x + n / 2,
                                y: s.y + a / 2
                            },
                            g = {
                                R: d,
                                T: p,
                                S: v
                            };
                        if (Math.abs(t.x - g[i].x) <= r && Math.abs(t.y - g[i].y) <= r) {
                            if ("T" === i) return !0;
                            if ("R" === i) return !0;
                            if ("S" === i) return !0
                        }
                        return !1
                    }, m.remove = function() {
                        var t = m.ocanvas;
                        t.remove(M), t.remove(m), m.ocanvas = t, M.ocanvas = t
                    }, m.create = function(t) {
                        m.remove();
                        var e = t || b || {},
                            i = e.docTop,
                            s = e.text,
                            n = e.scaleX,
                            a = e.scaleY,
                            o = e.tw,
                            r = e.th,
                            c = e.tbw,
                            l = e.tbh,
                            u = e.coordL,
                            p = e.coordO,
                            v = e.angle,
                            g = e.bgColorIndex,
                            x = i - d.docTop;
                        m.rotate(v), M.rotate(v), m.set({
                            text: s,
                            left: u.x,
                            top: x + u.y,
                            scaleX: n,
                            scaleY: a,
                            fill: f[g]
                        }), M.item(0).set({
                            opacity: 1,
                            fill: h[g]
                        }), A(o, r, {
                            x: p.x,
                            y: x + p.y
                        }, c, l), m.ocanvas = d, M.ocanvas = d, I(m), O(m, M)
                    }, m.showClickBtn = function(t) {
                        k.visible = t, g.visible = t, y.visible = t, x.visible = t
                    }, m.refresh = function() {
                        setTimeout((function() {
                            A(), m.ocanvas.renderAll()
                        }), g ? 50 : 0)
                    };
                    var j = function(t, e) {
                            g && g.set({
                                left: 0,
                                top: -e / 2 - l
                            }), x && x.set({
                                left: -t / 2,
                                top: e / 2
                            }), y && y.set({
                                left: t / 2,
                                top: e / 2
                            })
                        },
                        A = function(t, e, i, s, n) {
                            t = t || m.getScaledWidth(), e = e || m.getScaledHeight();
                            var r = d.getWidth() - 2 * o - 5;
                            if (t > r) {
                                var c = r / m.width;
                                m.set({
                                    scaleX: c,
                                    scaleY: c
                                }), t = m.getScaledWidth(), e = m.getScaledHeight()
                            }
                            i = i || m.getPointByOrigin("center", "center"), S.set({
                                width: t + 2 * a,
                                height: e + 2 * a
                            }), k.set({
                                width: t + 2 * o,
                                height: e + 2 * o
                            }), M.set({
                                opacity: 1,
                                left: i.x,
                                top: i.y
                            }), s = s || k.getScaledWidth(), n = n || k.getScaledHeight(), j(s, n)
                        };
                    m.on("selected", (function(t) {
                        T.selectedText = m, T.selectedOpt = t, m.showClickBtn(!0)
                    })), m.on("deselected", (function(t) {
                        T.deselectedText = m, T.selectedOpt = null, t.e && m.isClickBtn(d.getPointer(t.e), t, "T") && !t.e.fromOperation ? m.changeTextBg(t) : m.showClickBtn(!1), m.ocanvas.renderAll()
                    })), m.on("moving", (function() {
                        m.setCoords(!1, !0);
                        var t = m.getPointByOrigin("left", "top"),
                            e = m.getPointByOrigin("center", "center"),
                            i = nt({
                                w: k.getScaledWidth() + l,
                                h: k.getScaledHeight() + l,
                                center: e,
                                angle: m.angle
                            }),
                            s = {
                                left: 0,
                                right: p.drawW - i.width + 0,
                                top: p.curCanvasObj.incrementH + p.cellH + 0,
                                bottom: d.height - p.cellH - i.height + 0
                            },
                            n = Math.min(Math.max(i.x, s.left), s.right),
                            a = Math.min(Math.max(i.y, s.top), s.bottom),
                            o = t.x - i.x,
                            r = t.y - i.y;
                        t.x = n + o, t.y = a + r, m.set({
                            left: t.x,
                            top: t.y
                        }), e = m.getPointByOrigin("center", "center"), M.set({
                            left: e.x,
                            top: e.y
                        })
                    })), m.on("scaling", (function() {
                        A()
                    })), m.on("rotating", (function(t) {
                        M.rotate(t.target.angle)
                    }));
                    var W = function(t) {
                        return b = {
                            docTop: m.ocanvas.docTop,
                            text: m.text,
                            scaleX: m.scaleX,
                            scaleY: m.scaleY,
                            tw: m.getScaledWidth(),
                            th: m.getScaledHeight(),
                            tbw: k.getScaledWidth(),
                            tbh: k.getScaledHeight(),
                            coordL: m.getPointByOrigin("left", "top"),
                            coordO: m.getPointByOrigin("center", "center"),
                            angle: "number" != typeof t ? m.angle : t,
                            bgColorIndex: v
                        }
                    };
                    return m.on("scaled", (function() {
                        C.add(), m.setCoords(!1, !1), S.setCoords(!1, !1), M.setCoords(!1, !1)
                    })), m.on("rotated", (function(t) {
                        var e = t.target.angle;
                        C.add(e), m.setCoords(!1, !0), S.setCoords(!1, !0), M.setCoords(!1, !0)
                    })), m.on("moved", (function() {
                        C.add(), m.setCoords(!1, !0), S.setCoords(!1, !0), M.setCoords(!1, !0)
                    })), n && C.add(), m
                },
                H = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        s = t.coord,
                        n = void 0 === s ? {
                            x: 0,
                            y: 0
                        } : s,
                        a = e.color,
                        o = e.post,
                        r = e.postIndexs,
                        l = e.content,
                        u = p,
                        h = u.fCellW,
                        f = u.cellH,
                        v = u.statW,
                        m = u.theme,
                        g = [p.getCell({
                            x: v + h / 2,
                            y: n.y
                        }), p.getCell({
                            x: v + h + h / 2,
                            y: n.y
                        }), p.getCell({
                            x: v + 2 * h + h / 2,
                            y: n.y
                        }), p.getCell({
                            x: v + 3 * h + h / 2,
                            y: n.y
                        })],
                        x = [];
                    "wenma" === o ? g.forEach((function(t) {
                        var e = t.rectText;
                        e && (e.remove(), x.push(e))
                    })) : r.map((function(t) {
                        return g[t]
                    })).forEach((function(t) {
                        var e = t.rectText;
                        e && (e.remove(), x.push(e))
                    }));
                    var y = [],
                        b = B.numBgType,
                        S = 1 === b ? a : m.frontBgColor,
                        T = 1 === b ? "#fff" : a;
                    if ("X" === o) {
                        t.circleNum && t.circleNum.set({
                            opacity: 0
                        });
                        var k = 20 * w,
                            D = h - 4 * w,
                            M = f - 4 * w,
                            j = new c.fabric.Group([new c.fabric.Rect({
                                width: D,
                                height: M,
                                fill: S,
                                originX: "left",
                                originY: "top"
                            }), new c.fabric.Textbox(l[0], {
                                fontFamily: "sans-serif",
                                fontSize: k,
                                fontWeight: "bold",
                                lineHeight: 1,
                                fill: T,
                                textAlign: "center",
                                width: D,
                                top: (M - k) / 2
                            })], {
                                left: n.x - D / 2 - 1 * w,
                                top: n.y - M / 2,
                                originX: "left",
                                originY: "top",
                                numBgType: b
                            });
                        t.rectText = j, j.cells = [t], y.push(j)
                    } else if ("wenma" === o) {
                        t.circleNum && t.circleNum.set({
                            opacity: 0
                        });
                        var A = 20 * w,
                            W = 4 * h - 6 * w,
                            N = f - 4 * w,
                            O = new c.fabric.Group([new c.fabric.Rect({
                                width: W,
                                height: N,
                                fill: S,
                                stroke: a,
                                strokeWidth: 1 * w,
                                originX: "left",
                                originY: "top"
                            }), new c.fabric.Textbox(l[0], {
                                fontFamily: "sans-serif",
                                fontSize: A,
                                fontWeight: "bold",
                                lineHeight: 1,
                                fill: T,
                                textAlign: "center",
                                width: W,
                                top: (N - A) / 2
                            })], {
                                left: v + 1 * w,
                                top: n.y - N / 2,
                                originX: "left",
                                originY: "top",
                                numBgType: b
                            });
                        g.forEach((function(t) {
                            t.rectText = O
                        })), O.cells = g, y.push(O)
                    } else {
                        var I = l.length,
                            L = [{
                                fontSize: 20 * w,
                                lineHeight: 1
                            }, {
                                fontSize: 16 * w,
                                lineHeight: 1
                            }, {
                                fontSize: 13 * w,
                                lineHeight: 1
                            }],
                            P = L[I - 1].fontSize;
                        2 === I && isNaN(parseInt(l[0])) && l[0].length > 2 && (P = 13 * w);
                        var R = L[I - 1].lineHeight,
                            E = h - 4 * w,
                            F = f - 4 * w,
                            z = function(t) {
                                var e = v + h * t + 1 * w,
                                    i = new c.fabric.Group([new c.fabric.Rect({
                                        width: E,
                                        height: F,
                                        fill: S,
                                        stroke: a,
                                        strokeWidth: 1 * w,
                                        originX: "left",
                                        originY: "top"
                                    }), new c.fabric.Textbox(l.join("\r\n"), {
                                        fontFamily: "sans-serif",
                                        fontSize: P,
                                        fontWeight: "bold",
                                        lineHeight: R,
                                        fill: T,
                                        textAlign: "justify-center",
                                        width: E,
                                        top: (F - I * R * P) / 2 - (3 === I)
                                    })], {
                                        left: e,
                                        top: n.y - F / 2,
                                        originX: "left",
                                        originY: "top",
                                        numBgType: b
                                    });
                                return g[t].rectText = i, i.cells = r.map((function(t) {
                                    return g[t]
                                })), i.cellIndex = t, i
                            };
                        r.forEach((function(t) {
                            var e = z(t);
                            y.push(e)
                        }))
                    }
                    if (y.forEach((function(t) {
                            if (t.drawType = "rectText", t.cellTextInfo = e, t.ocanvas = d, t.remove = function(e) {
                                    var i = t.cells;
                                    e && !isNaN(t.cellIndex) && (i = [g[t.cellIndex]]), i.forEach((function(t) {
                                        var e = t.rectText;
                                        e && (e.ocanvas.remove(e), t.rectText = null)
                                    }))
                                }, t.create = function() {
                                    if (_(t.ocanvas.midDot, t), isNaN(t.cellIndex)) t.cells.forEach((function(e) {
                                        e.rectText = t, e.circleNum && (e.circleNum.remove(), e.circleNum = null)
                                    }));
                                    else {
                                        var e = g[t.cellIndex];
                                        e.rectText = t, e.circleNum && (e.circleNum.remove(), e.circleNum = null)
                                    }
                                }, !isNaN(t.cellIndex)) {
                                var i = g[t.cellIndex];
                                i.circleNum && i.circleNum.set({
                                    opacity: 0
                                })
                            }
                            d.add(t)
                        })), i) {
                        var H = {
                            drawType: "opRectText",
                            ocanvas: d,
                            opStates: [],
                            set: function() {},
                            remove: function() {
                                y.forEach((function(t) {
                                    t.remove()
                                })), x.forEach((function(t) {
                                    t.create()
                                }))
                            },
                            create: function() {
                                t.circleNum && t.circleNum.set({
                                    opacity: 0
                                }), x.forEach((function(t) {
                                    t.remove()
                                })), y.forEach((function(t) {
                                    t.create()
                                }))
                            }
                        };
                        C.add(H)
                    }
                },
                X = function() {
                    var t = d && d.getActiveObject();
                    t && "text" === t.drawType && (t.textBackGroup.item(1).stroke !== B.color && t.fireChangeText())
                },
                G = function() {
                    var t = R({
                        x: 0,
                        y: 0
                    }, {
                        width: 1,
                        height: 1,
                        opacity: 0,
                        stroke: "transparent",
                        strokeWidth: 0
                    });
                    return t.drawType = "midDot", t.ocanvas = d, t
                },
                Q = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = p.getCell(t),
                        s = i.rectText,
                        n = i.level;
                    if (p.stages[n].selectCell) {
                        if (s) {
                            var a = s.ocanvas;
                            s.remove();
                            var o = {
                                drawType: "opRectText",
                                ocanvas: a,
                                opStates: [],
                                set: function() {},
                                remove: function() {
                                    s.create()
                                },
                                create: function() {
                                    s.remove()
                                }
                            };
                            return void C.add(o)
                        }
                        var r = !0;
                        F(i, r, !e, {
                            num: ""
                        }), i.circleNum && 0 !== i.circleNum.opacity && p.showNumDialog(i)
                    } else e || F(i, !0, !0)
                },
                Y = function() {
                    if (T.selectedOpt) {
                        var t = T.selectedOpt.e;
                        t.fromOperation = !0, d.discardActiveObject(t)
                    }
                },
                U = function() {
                    var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise((function(t) {
                                        0 !== e.indexOf("data") && (e += (e.indexOf("?") > -1 ? "&" : "?") + "rand=" + +new Date), c.fabric.Image.fromURL(e, (function(e) {
                                            t(e)
                                        }), {
                                            crossOrigin: "anonymous"
                                        })
                                    })));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                q = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        i = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
                    if (t = t.trim().toLowerCase(), i.test(t)) {
                        4 === t.length && (t = t.split("").map((function(t, e) {
                            return 0 === e ? t : t + t
                        })).join(""));
                        for (var s = [], n = 1; n < 7; n += 2) s.push(parseInt("0x" + t.slice(n, n + 2)));
                        return "rgba(" + s.join(",") + "," + e + ")"
                    }
                    return /^(rgba)/.test(t) ? t.replace(new RegExp("(,\\s*[\\d\\.]*\\s*\\))$"), ",".concat(e, ")")) : /^(rgb)/.test(t) ? t.replace(/rgb/, "rgba").replace(/\)$/, ",".concat(e, ")")) : t
                },
                J = function(t, e, i, s, n, a) {
                    var o = Math.abs(Math.sqrt(Math.pow(Math.abs(Math.round(i - t)), 2) + Math.pow(Math.abs(Math.round(s - e)), 2))),
                        r = Math.abs(Math.sqrt(Math.pow(Math.abs(Math.round(n - i)), 2) + Math.pow(Math.abs(Math.round(a - s)), 2))),
                        c = Math.abs(o / (o + r));
                    return {
                        x: (i - (1 - c) * (1 - c) * t - c * c * n) / (2 * c * (1 - c)),
                        y: (s - (1 - c) * (1 - c) * e - c * c * a) / (2 * c * (1 - c))
                    }
                },
                V = function(t) {
                    return t.x >= M.left && t.x <= M.right && t.y >= 0 && t.y <= M.bottom
                },
                $ = function(t) {
                    var e = p.getCell(t);
                    return !(!e || !e.circleNum || 1 !== e.circleNum.opacity) && e
                },
                Z = function(t, e) {
                    var i = function(t, e) {
                        if (1 !== t.opacity) return !1;
                        if ("free" === t.drawType || "line" === t.drawType || "curveLine" === t.drawType) {
                            if (!t.linePath) return !1;
                            for (var i = t.linePath.length, s = !1, n = 0; n < i - 1; n++) {
                                var a = t.linePath[n];
                                if (Math.abs(e.x - a.x) < 6 && Math.abs(e.y - a.y) < 6) {
                                    s = !0;
                                    break
                                }
                            }
                            return s
                        }
                        return t.containsPoint(e)
                    }(t, e);
                    if (i) return !0;
                    var s = !1;
                    if ("line" === t.drawType) s = !0;
                    else if ("curveLine" === t.drawType) {
                        var n = t.linePath.length,
                            a = t.linePath[0],
                            o = t.linePath[n - 1],
                            r = {
                                x: (a.x + o.x) / 2,
                                y: (a.y + o.y) / 2
                            },
                            c = t.linePath[Math.floor(n / 2)];
                        Math.abs(c.x - r.x) < 10 && Math.abs(c.y - r.y) < 10 && (s = !0)
                    }
                    if (s) {
                        t.cleanTrace = t.cleanTrace || [], t.cleanTrace.push(e);
                        var l = t.linePath.length,
                            u = t.linePath[0],
                            h = t.linePath[l - 1];
                        return K(t.cleanTrace, u, h)
                    }
                    return i
                },
                K = function(t, e, i) {
                    var s = !1;
                    if (e.x === i.x)
                        for (var n, a = Math.min(e.y, i.y), o = Math.max(e.y, i.y), r = 0; r < t.length; r++) {
                            var c = t[r],
                                l = c.x - e.x;
                            if (void 0 !== n && n * l <= 0 && c.y <= o && c.y >= a) {
                                s = !0;
                                break
                            }
                            n = l
                        } else if (e.y === i.y)
                            for (var u, h = Math.min(e.x, i.x), f = Math.max(e.x, i.x), d = 0; d < t.length; d++) {
                                var p = t[d],
                                    v = p.y - e.y;
                                if (void 0 !== u && u * v <= 0 && p.x <= f && p.x >= h) {
                                    s = !0;
                                    break
                                }
                                u = v
                            }
                        return s
                },
                tt = function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                        s = [t],
                        n = e.x - t.x,
                        a = e.y - t.y,
                        o = Math.atan(a / n);
                    if (Math.abs(a) > Math.abs(n))
                        for (var r = a / Math.abs(a), c = r * i; Math.abs(c) < Math.abs(a);) {
                            var l = c / Math.tan(o);
                            s.push({
                                x: t.x + l,
                                y: t.y + c
                            }), c += r * i
                        } else
                            for (var u = n / Math.abs(n), h = u * i; Math.abs(h) < Math.abs(n);) {
                                var f = h * Math.tan(o);
                                s.push({
                                    x: t.x + h,
                                    y: t.y + f
                                }), h += u * i
                            }
                    return s.push(e), s
                },
                et = function(t, e, i) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
                        n = tt(t, e, s),
                        a = tt(e, i, 1),
                        o = function(t, e, i) {
                            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) / Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2))
                        };
                    n = n.map((function(i) {
                        return i.ratio = o(t, i, e), i
                    }));
                    var r = [],
                        c = n.shift();
                    a.forEach((function(t) {
                        var s = o(e, t, i);
                        c && Math.abs(s - c.ratio) < .01 && (r.push([c, t]), c = n.shift())
                    }));
                    var l = [];
                    return r.forEach((function(t) {
                        var e = t[0],
                            i = t[1],
                            s = tt(e, i, 1).find((function(t) {
                                var s = o(e, t, i);
                                return Math.abs(s - e.ratio) < .01
                            }));
                        s && l.push(s)
                    })), l
                },
                it = function(t) {
                    if (t.set({
                            opacity: 1
                        }), ["circleNum", "curveLine", "text", "rectText", "opClean", "opChangeTextBg", "opClickNum", "opAddCurveLine", "opDragCurveLine", "opChangeText", "opRectText"].indexOf(t.drawType) > -1) t.create();
                    else {
                        var e = (t.docTop || t.ocanvas.docTop) - t.ocanvas.docTop;
                        t.set({
                            top: t.top + e
                        }), O(t.ocanvas.midDot, t)
                    }
                },
                st = function(t) {
                    if (B.colorMuti) {
                        var e = D.findIndex((function(t) {
                            return t === B.color
                        }));
                        return D[(t + e) % D.length]
                    }
                    return B.color
                },
                nt = function(t) {
                    var e = function(t) {
                            var e = (t = t || {
                                    w: 0,
                                    h: 0,
                                    center: {},
                                    angle: 0
                                }).center,
                                i = t.w,
                                s = t.h,
                                n = t.angle,
                                a = 2 * Math.PI / 360,
                                o = Math.sqrt(Math.pow(s / 2, 2) + Math.pow(i / 2, 2)),
                                r = 360 * Math.atan(i / s) / (2 * Math.PI),
                                c = 360 - r + n,
                                l = r + n,
                                u = 180 - r + n,
                                h = 180 + r + n;
                            return [{
                                x: e.x + Math.sin(c * a) * o,
                                y: e.y - Math.cos(c * a) * o
                            }, {
                                x: e.x + Math.sin(l * a) * o,
                                y: e.y - Math.cos(l * a) * o
                            }, {
                                x: e.x + Math.sin(u * a) * o,
                                y: e.y - Math.cos(u * a) * o
                            }, {
                                x: e.x + Math.sin(h * a) * o,
                                y: e.y - Math.cos(h * a) * o
                            }]
                        }(t),
                        i = Math.min(e[0].x, e[1].x, e[2].x, e[3].x),
                        s = Math.max(e[0].x, e[1].x, e[2].x, e[3].x),
                        n = Math.min(e[0].y, e[1].y, e[2].y, e[3].y);
                    return {
                        width: s - i,
                        height: Math.max(e[0].y, e[1].y, e[2].y, e[3].y) - n,
                        x: i,
                        y: n
                    }
                },
                at = function(t, e, i) {
                    var s, n = B.numType,
                        a = B.fontType,
                        o = 3 * w;
                    switch (n) {
                        case 0:
                            s = new c.fabric.Circle({
                                numType: n,
                                fontType: a,
                                radius: e,
                                fill: t,
                                stroke: "#fff",
                                strokeWidth: o,
                                shadow: "rgba(0,0,0,0.8) 0px 0px 10px",
                                originX: "center",
                                originY: "center"
                            });
                            break;
                        case 1:
                            s = new c.fabric.Circle({
                                numType: n,
                                fontType: a,
                                radius: e,
                                fill: i,
                                stroke: t,
                                strokeWidth: o,
                                shadow: "rgba(0,0,0,0.8) 0px 0px 10px",
                                originX: "center",
                                originY: "center"
                            });
                            break;
                        case 2:
                            s = new c.fabric.Rect({
                                numType: n,
                                fontType: a,
                                width: 2 * e,
                                height: 2 * e,
                                fill: t,
                                stroke: "#fff",
                                strokeWidth: o,
                                shadow: "rgba(0,0,0,0.8) 0px 0px 10px",
                                originX: "center",
                                originY: "center"
                            });
                            break;
                        case 3:
                            s = new c.fabric.Rect({
                                numType: n,
                                fontType: a,
                                width: 2 * e,
                                height: 2 * e,
                                fill: i,
                                stroke: t,
                                strokeWidth: o,
                                shadow: "rgba(0,0,0,0.8) 0px 0px 10px",
                                originX: "center",
                                originY: "center"
                            });
                            break;
                        default:
                            s = new c.fabric.Circle({
                                numType: n,
                                fontType: a,
                                radius: e,
                                fill: t,
                                stroke: "#fff",
                                strokeWidth: o,
                                shadow: "rgba(0,0,0,0.8) 0px 0px 10px",
                                originX: "center",
                                originY: "center"
                            })
                    }
                    return s
                },
                ot = function(t) {
                    return 0 === (t = "number" == typeof t ? t : B.numType) || 2 === t
                },
                rt = A,
                ct = i("75fc"),
                lt = function(t, e, i) {
                    t.path = (t.path || []).map((function(t) {
                        return t.forEach((function(e, s) {
                            /^\d/.test(e) && (t[s] = e * i)
                        })), t
                    }));
                    var s = t.path.join(" "),
                        n = new c.fabric.Path(s, {
                            left: t.left * i,
                            top: t.top * i,
                            fill: "",
                            stroke: t.stroke,
                            strokeWidth: t.strokeWidth * i
                        });
                    n.ocanvas = e, n.drawType = "free", n.linePath = (t.linePath || []).map((function(t) {
                        return t.x = t.x * i, t.y = t.y * i, t
                    })), n.remove = function() {
                        n.ocanvas.remove(n), n.ocanvas = e
                    }, n.setCoords(), e.add(n)
                },
                ut = function(t, e, i) {
                    var s = L([(t.left + t.x1) * i, (t.top + t.y1) * i, (t.left + t.x2) * i, (t.top + t.y2) * i], t.fill, t.strokeWidth * i);
                    s.linePath = (t.linePath || []).map((function(t) {
                        return t.x = t.x * i, t.y = t.y * i, t
                    })), O(e.midDot, s)
                },
                ht = function(t, e, i) {
                    var s = R({
                        x: t.left * i,
                        y: t.top * i
                    }, {
                        fill: t.fill,
                        stroke: t.stroke,
                        strokeWidth: t.strokeWidth * i,
                        width: t.width * i,
                        height: t.height * i,
                        originX: t.originX,
                        originY: t.originY
                    });
                    O(e.midDot, s)
                },
                ft = function(t, e, i) {
                    var s = E({
                        x: t.left * i,
                        y: t.top * i
                    }, {
                        rx: t.rx * i,
                        ry: t.ry * i,
                        fill: t.fill,
                        stroke: t.stroke,
                        strokeWidth: t.strokeWidth * i,
                        originX: t.originX,
                        originY: t.originY
                    });
                    O(e.midDot, s)
                },
                dt = function(t, e, i) {
                    if (!t) return null;
                    var s = {
                            x: t.left * i,
                            y: t.top * i
                        },
                        n = S.getCell(s);
                    if (!n) return null;
                    var a = t.objects[0].numType,
                        o = 0 === a || 2 === a;
                    return F(n, !1, !1, {
                        radius: t.objects[0].radius * i,
                        fontSize: t.objects[1].fontSize * i,
                        color: o ? t.objects[0].fill : t.objects[0].stroke,
                        num: t.objects[1].text
                    })
                },
                pt = function(t, e, i) {
                    var s = t.path,
                        n = e.docTop - t.docTopForLoadJson * i,
                        a = s[0][1] * i,
                        o = s[0][2] * i - n,
                        r = s[1][3] * i,
                        c = s[1][4] * i - n,
                        l = s[1][1] * i,
                        u = s[1][2] * i - n,
                        h = P([a, o, r, c], [l, u], !1);
                    h.add(), h.line.set({
                        stroke: t.stroke,
                        strokeWidth: t.strokeWidth * i,
                        linePath: (t.linePath || []).map((function(t) {
                            return t.x = t.x * i, t.y = t.y * i, t
                        }))
                    })
                },
                vt = function(t, e, i) {
                    var s = t.left,
                        n = t.top,
                        a = t.text,
                        o = t.fill,
                        r = t.angle,
                        c = t.scaleX,
                        l = t.scaleY,
                        u = t.textBackGroup.objects || t.textBackGroup._objects,
                        h = (u[2].objects || u[2]._objects)[0].fill,
                        f = z({
                            x: s * i,
                            y: n * i
                        }, a, h, !1),
                        d = f.textBackGroup;
                    f.rotate(r), d.rotate(r), f.set({
                        scaleX: c,
                        scaleY: l
                    }), f.changeTextBg(null, !1, o === h ? 1 : 0), f.refresh()
                },
                mt = function(t, e, i) {
                    var s = t.top,
                        n = t.cellTextInfo;
                    s *= i;
                    var a = S,
                        o = a.fCellW,
                        r = a.cellH,
                        c = a.statW,
                        l = c + o / 2;
                    "X" === n.post && (l = c + n.postIndexs[0] * o + o / 2);
                    var u = S.getCell({
                        x: l,
                        y: s + r / 2
                    });
                    H(u, n, !1)
                },
                gt = function(t, e, i) {
                    var s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        n = arguments.length > 4 ? arguments[4] : void 0,
                        a = S = i,
                        o = a.scale,
                        r = a.cellH,
                        c = t.jsons,
                        l = t.lastIssue,
                        u = t.scale,
                        h = void 0 === u ? 1 : u,
                        f = o / h,
                        d = (Number(e) - Number(l)) * r,
                        p = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                            S.$nextTick((function() {
                                var i = S.canvas;
                                t.forEach((function(t) {
                                    if (0 !== t.opacity) switch (t.drawType) {
                                        case "free":
                                            lt(t, i, f);
                                            break;
                                        case "line":
                                            ut(t, i, f);
                                            break;
                                        case "rect":
                                            ht(t, i, f);
                                            break;
                                        case "circle":
                                            ft(t, i, f);
                                            break;
                                        case "circleNum":
                                            dt(t, i, f);
                                            break;
                                        case "curveLine":
                                            pt(t, i, f);
                                            break;
                                        case "text":
                                            vt(t, i, f);
                                            break;
                                        case "rectText":
                                            mt(t, i, f)
                                    }
                                })), e()
                            }))
                        };
                    if (s) c.forEach((function(t) {
                        var e = t.docTop,
                            i = t.incrementH,
                            s = t.objects;
                        e = Math.floor(e * f), i *= f, e -= d, S.newCanvas(!0, i, e), p(s)
                    }));
                    else {
                        var v = c.length,
                            m = 0,
                            g = function t(e) {
                                if (e > v - 1) n();
                                else {
                                    var i = c[e],
                                        s = i.docTop,
                                        a = i.incrementH,
                                        o = i.objects;
                                    s = Math.floor(s * f), a *= f, s -= d, S.adaptCanvas(a, s, (function() {
                                        p(o, (function() {
                                            t(++e)
                                        }))
                                    }))
                                }
                            };
                        g(m)
                    }
                },
                xt = function(t) {
                    this.drawBoard = t, this.stack = [], this.resumeStack = []
                };
            Object.assign(xt.prototype, {
                add: function() {
                    var t = this.drawBoard.exportJson();
                    this.stack.push(t), this.resumeStack = []
                },
                pop: function() {
                    this.stack.pop()
                },
                clear: function() {
                    this.stack = [], this.resumeStack = []
                },
                cancel: function() {
                    bt(this.drawBoard);
                    var t = this.stack.pop();
                    t && this.resumeStack.push(t);
                    var e = this.stack[this.stack.length - 1];
                    e && wt(e, this.drawBoard)
                },
                resume: function() {
                    var t = this.resumeStack.pop();
                    t && (this.stack.push(t), bt(this.drawBoard), wt(t, this.drawBoard))
                },
                destroyed: function() {
                    this.drawBoard = null, this.stack = null, this.resumeStack = null
                }
            });
            var yt, Ct, wt = function(t, e) {
                    var i = e.stagesData,
                        s = i[i.length - 6].issue;
                    gt({
                        lastIssue: s,
                        jsons: t,
                        scale: e.scale,
                        fixedScrollBottom: e.curScrollBottom
                    }, s, e, !1, (function() {
                        if ("clean" === e.drawMode) {
                            var t = e.canvasList.filter((function(t) {
                                return t.canvas.isCleanCanvas
                            }))[0];
                            t && (e.curCanvasObj = t, e.curCanvasObj.zIndex = e.nextCanvasZIndex(), e.canvas = e.curCanvasObj.canvas, rt.setCanvas(e.canvas, !1))
                        } else e.newCanvas()
                    }))
                },
                bt = function(t) {
                    t.canvasList.forEach((function(t) {
                        var e = t.canvas;
                        if (e) {
                            var i = ["midDot"],
                                s = e.getObjects().filter((function(t) {
                                    return !i.includes(t.drawType)
                                }));
                            e.remove.apply(e, Object(ct.a)(s)), e.isDrawingMode && (e.isDrawingMode = !1, setTimeout((function() {
                                e.isDrawingMode = !0
                            }), 60))
                        }
                    })), t.cells = {}
                },
                St = xt,
                Tt = function() {
                    var t = Object(n.a)(regeneratorRuntime.mark((function t(e, i) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    Ct = e.firstIssue, (yt = i).clearForCloud(), yt.scrollToBottom(), yt.$loading(), setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                        var i, s, n, a, o, r, c, l, u, h, f, d, p, v, m, g, x, y, C, w, b, S;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, Nt(!0, yt.canvasH);
                                                case 2:
                                                    i = e.itemData, s = i.regular, n = void 0 === s ? [] : s, a = i.hit, o = i.comment, r = e.issue, Bt(r, a), jt(r, o, a), c = 0;
                                                case 8:
                                                    if (!(c < n.length)) {
                                                        t.next = 30;
                                                        break
                                                    }
                                                    if (l = n[c], u = "#" + l.color, h = l.numberlist || [], f = [], d = !1, !h.some((function(t) {
                                                            return r - t.issue > 80
                                                        }))) {
                                                        t.next = 17;
                                                        break
                                                    }
                                                    return t.abrupt("break", 30);
                                                case 17:
                                                    for (p = 0; p < h.length; p++) v = h[p], m = At(v.issue, v.index), f.push({
                                                        coord: m,
                                                        isDrawCircleNum: "0" !== v.circlestyle
                                                    }), m.y - yt.canvas.docTop <= yt.cellH && (d = !0);
                                                    if (g = Wt(f), !d) {
                                                        t.next = 22;
                                                        break
                                                    }
                                                    return t.next = 22, Nt(!0, g.height, g.offsetDocTop);
                                                case 22:
                                                    for (x = [], y = 0; y < f.length; y++) C = f[y], w = C.coord, b = yt.canvas.docTop, S = w.y - b, w = {
                                                        x: w.x,
                                                        y: parseInt(S)
                                                    }, C.isDrawCircleNum && (Dt(w, u), x.push(w));
                                                    return t.next = 26, Mt(x, u);
                                                case 26:
                                                    "0" !== l.regionstyle && kt(g.circle, u);
                                                case 27:
                                                    c++, t.next = 8;
                                                    break;
                                                case 30:
                                                    yt.$closeLoading();
                                                case 31:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    }))), 10);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, i) {
                        return t.apply(this, arguments)
                    }
                }(),
                kt = function(t, e) {
                    var i = E({
                        x: t.x,
                        y: t.y - yt.canvas.docTop
                    }, {
                        rx: t.rx,
                        ry: t.ry,
                        stroke: e,
                        strokeWidth: 2,
                        originX: "center",
                        originY: "center"
                    });
                    O(i.ocanvas.midDot, i)
                },
                Dt = function(t, e) {
                    var i = yt.getCell(t);
                    return i ? F(i, !1, !1, {
                        color: e
                    }) : null
                },
                Mt = function(t, e) {
                    t.length < 1 || new Promise((function(i) {
                        t.reduce((function(t, i) {
                            return t && i && function(t, e, i) {
                                var s = L([t.x, t.y, e.x, e.y], i, 2);
                                O(s.ocanvas.midDot, s)
                            }(t, i, e), i
                        })), setTimeout((function() {
                            yt.$nextTick((function() {
                                i(!0)
                            }))
                        }), 0)
                    }))
                },
                Bt = function(t, e) {
                    yt.setIssueStatus(t, e)
                },
                jt = function(t, e, i) {
                    var s = yt,
                        n = s.cellH,
                        a = s.statW,
                        o = s.canvasW,
                        r = At(t, 0).y - yt.canvas.docTop,
                        l = {
                            left: a + 5,
                            top: parseInt(r + n / 2 + 10),
                            width: parseInt(o - a - 80),
                            fill: "0" === i ? "#888888" : "#fd3d44",
                            fontFamily: "sans-serif",
                            fontSize: 17,
                            fontWeight: "bold",
                            splitByGrapheme: !0
                        };
                    e = e.replace(/\\n/g, "\r\n");
                    var u = new c.fabric.Textbox(e, l),
                        h = yt.canvas;
                    u.ocanvas = h, h.add(u)
                },
                At = function(t, e) {
                    var i = yt,
                        s = i.cellH,
                        n = i.statW,
                        a = i.fCellW,
                        o = i.eCellW,
                        r = ["", n / 2, n + a / 2, n + 1 * a + a / 2, n + 2 * a + a / 2, n + 3 * a + a / 2, n + 4 * a + o / 2, n + 4 * a + 1 * o + o / 2, n + 4 * a + 2 * o + o / 2][e],
                        c = (Number(t) - Number(Ct)) * s + s / 2;
                    return {
                        x: parseInt(r),
                        y: parseInt(c)
                    }
                },
                Wt = function(t) {
                    var e = Math.min.apply(Math, Object(ct.a)(t.map((function(t) {
                            return t.coord.x
                        })))),
                        i = Math.max.apply(Math, Object(ct.a)(t.map((function(t) {
                            return t.coord.x
                        })))),
                        s = Math.min.apply(Math, Object(ct.a)(t.map((function(t) {
                            return t.coord.y
                        })))),
                        n = Math.max.apply(Math, Object(ct.a)(t.map((function(t) {
                            return t.coord.y
                        })))),
                        a = yt,
                        o = a.cellH,
                        r = i - e + a.fCellW,
                        c = n - s + o,
                        l = yt.canvas.docTop,
                        u = yt.canvasH + c,
                        h = parseInt(l - u + n - l + o / 2);
                    return {
                        width: r,
                        height: c,
                        circle: {
                            rx: parseInt(r / 2),
                            ry: parseInt(c / 2),
                            x: parseInt((i - e) / 2 + e),
                            y: parseInt((n - s) / 2 + s)
                        },
                        offsetDocTop: h
                    }
                },
                Nt = function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    new Promise((function(t) {
                        var i;
                        (i = yt).newCanvas.apply(i, e), setTimeout((function() {
                            yt.$nextTick((function() {
                                t(!0)
                            }))
                        }), 10)
                    }))
                },
                Ot = {
                    load: Tt
                },
                _t = i("d39b"),
                It = i("229e"),
                Lt = i("3191"),
                Pt = i("a6f8"),
                Rt = i("07a5"),
                Et = i("94cf"),
                Ft = i("2f62");

            function zt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function Ht(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? zt(Object(i), !0).forEach((function(e) {
                        Object(a.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : zt(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var Xt = function(t) {
                    return Object.assign(t, {
                        click: !0,
                        selectable: !1,
                        evented: !1
                    })
                },
                Gt = 100,
                Qt = {
                    name: "DrawBoard",
                    props: ["canvasW", "canvasH", "stages", "cpType", "isForPc", "isForCloud", "themeInfo", "scale"],
                    components: {
                        WaterMark: Et.a
                    },
                    data: function() {
                        return {
                            drawMode: "intelLine",
                            isLockup: !1,
                            isMaskDrawArea: !1,
                            isStartDrawing: !1,
                            width: 0,
                            height: 0,
                            canvasList: [],
                            canvasBgList: [],
                            canvasEmptyList: [],
                            isTouchingStages: !1,
                            cells: {},
                            inputText: "",
                            inputIsShow: !1,
                            inputColor: "",
                            comColor: q(rt.getCommon().color, .7),
                            curScrollBottom: 0,
                            fixedScrollBottom: 0,
                            y: 0,
                            lastIssueStatus: {
                                issue: "",
                                hit: ""
                            },
                            theme: {}
                        }
                    },
                    computed: Ht(Ht({}, Object(Ft.c)({
                        drawRuleSetted: function(t) {
                            return t.drawRuleSetted
                        }
                    })), {}, {
                        drawSet: function() {
                            return this.drawRuleSetted[this.cpType] || {
                                isShowDate: !0
                            }
                        },
                        drawConfig: function() {
                            var t = this,
                                e = Object(l.c)(_t.a[this.cpType]);
                            return Object.keys(e).forEach((function(i) {
                                var s = e[i];
                                e[i] = Object(l.F)(parseFloat(s)) * t.scale + "px"
                            })), e
                        },
                        font: function() {
                            var t = this,
                                e = this.drawSet.fontType || 0,
                                i = Object(l.c)(_t.b[this.cpType][e]);
                            return Object.keys(i).forEach((function(e) {
                                var s = i[e];
                                i[e] = Object(l.F)(parseFloat(s)) * t.scale + "px"
                            })), i
                        },
                        lastBoldLineIndex: function() {
                            for (var t, e = this.stages.length - 1; e >= 0; e--) {
                                var i = this.stages[e];
                                if (i.issue && i.issue % 4 == 0) {
                                    t = e;
                                    break
                                }
                            }
                            return t
                        },
                        cellH: function() {
                            return 50 * this.scale
                        },
                        stageW: function() {
                            var t = [142, 142][this.cpType - 1];
                            return this.width * t / 750
                        },
                        drawW: function() {
                            return this.width - this.stageW
                        },
                        statW: function() {
                            var t = [60, 60][this.cpType - 1];
                            return Math.round(this.width * t / 750)
                        },
                        frontW: function() {
                            var t = [352, 440][this.cpType - 1];
                            return Math.round(this.width * t / 750)
                        },
                        fCellW: function() {
                            return Math.round(this.frontW / 4)
                        },
                        endW: function() {
                            return this.drawW - this.statW - this.frontW
                        },
                        eCellW: function() {
                            var t = [3, 1][this.cpType - 1];
                            return Math.round(this.endW / t)
                        },
                        lineBoldW: function() {
                            return 4 * this.width / 750
                        },
                        lineW: function() {
                            var t = Math.round(1 * this.width / 750);
                            return Math.max(t, 1)
                        }
                    }),
                    created: function() {
                        this.operation = new St(this), this.theme = this.themeInfo || Rt.a["custom-2"]
                    },
                    mounted: function() {
                        var t = this;
                        this.width = this.canvasW * this.scale, this.height = this.stages.length * this.cellH, this.$nextTick((function() {
                            rt.init(t), t.bs = new It.a(".drawBoard", {
                                click: !0,
                                tap: "tap",
                                probeType: 3,
                                useTransition: !0,
                                bounce: {
                                    top: !1,
                                    bottom: !1,
                                    left: !1,
                                    right: !1
                                }
                            }), t.bs.on("scroll", t.handleScroll), t.bs.on("scrollEnd", t.handleScrollEnd), t.bs._enable = function() {
                                t.bs && (t.bs.refresh(), t.bs.enable())
                            }, t.bs._disable = function() {
                                t.bs && (t.bs.refresh(), t.bs.disable())
                            }, t.bs._stop = function() {
                                t.bs && (t.bs.refresh(), t.bs.stop())
                            }, t.initLoad()
                        })), this.cellLefts = [{
                            index: 0,
                            key: "sum",
                            left: [0, this.statW]
                        }, {
                            index: 1,
                            key: "one",
                            left: [this.statW, this.statW + this.fCellW]
                        }, {
                            index: 2,
                            key: "two",
                            left: [this.statW + this.fCellW, this.statW + 2 * this.fCellW]
                        }, {
                            index: 3,
                            key: "three",
                            left: [this.statW + 2 * this.fCellW, this.statW + 3 * this.fCellW]
                        }, {
                            index: 4,
                            key: "four",
                            left: [this.statW + 3 * this.fCellW, this.drawW - this.endW]
                        }, {
                            index: 5,
                            key: "five",
                            left: [this.statW + this.frontW, this.statW + this.frontW + this.eCellW]
                        }], 1 == this.cpType && this.cellLefts.push({
                            index: 6,
                            key: "six",
                            left: [this.statW + this.frontW + this.eCellW, this.statW + this.frontW + 2 * this.eCellW]
                        }, {
                            index: 7,
                            key: "seven",
                            left: [this.statW + this.frontW + 2 * this.eCellW, this.drawW]
                        }), this.textarea = this.$refs.textarea, this.calcTextarea = this.$refs.calcTextarea, this.stagesData = JSON.parse(JSON.stringify(this.stages))
                    },
                    methods: {
                        tranWidth: function(t) {
                            return t * this.width / 750
                        },
                        getCell: function(t, e) {
                            e = e || this.curCanvasObj;
                            var i, s = t.x,
                                n = e.top + t.y,
                                a = Math.floor(n / this.cellH);
                            if (a < 0 || a > this.stagesData.length - 1) return null;
                            if (!(i = s <= 0 ? this.cellLefts[0] : s >= this.drawW ? this.cellLefts[this.cellLefts.length - 1] : this.cellLefts.find((function(t) {
                                    return t.left[0] <= s && s <= t.left[1]
                                })))) return null;
                            var o = "" + a + i.index,
                                r = this.cells[o] || {};
                            return r.circleNum = r.circleNum || null, r.rectText = r.rectText || null, r.canvas = e.canvas, r.index = i.index, r.level = a, r.num = this.stagesData[a][i.key], r.coord = {
                                x: (i.left[0] + i.left[1]) / 2,
                                y: a * this.cellH + this.cellH / 2 - e.top
                            }, this.cells[o] = r
                        },
                        initLoad: function() {
                            var t = this;
                            this.isForCloud || this.loadDrawRuleJson(), this.$nextTick((function() {
                                t.scrollToBottom()
                            }))
                        },
                        scrollToBottom: function() {
                            this.bs && this.bs.scrollToElement(this.$refs.bottom, 0)
                        },
                        isLineBold: function(t, e) {
                            var i = !1;
                            return i = "1" === this.cpType ? t.localIssue && t.localIssue % 4 == 0 : t.localIssue && t.localIssue % 4 == 3, "2" === this.cpType && 0 === this.drawSet.splitLineType && (i = Math.abs(e - this.lastBoldLineIndex) % 4 == 0), "2" === this.cpType && 1 === this.drawSet.splitLineType && (i = t.localIssue && t.localIssue % 4 == 0), i
                        },
                        nextCanvasZIndex: function() {
                            return ++Gt
                        },
                        loadDrawRuleJson: function() {
                            var t = "progress" + this.cpType;
                            u.a.remove(t), t = "drawRuleJson" + this.cpType;
                            var e = u.a.get(t),
                                i = this.stagesData[this.stagesData.length - 6].issue;
                            e && e.lastIssue && e.lastIssue === i ? (gt(e, i, this), this.curScrollBottom = e.fixedScrollBottom) : u.a.remove(t)
                        },
                        loadCloud: function(t) {
                            Ot.load(t, this)
                        },
                        newCanvas: function(t, e, i) {
                            var s = this,
                                n = e || this.calcCanvasIncrH(),
                                a = i || -Math.round(this.bs.y) - this.cellH - n;
                            if (t || !this.curCanvasObj || this.curCanvasObj.top !== a) {
                                var o = this.curCanvasObj && this.curCanvasObj.canvas;
                                if (!t && o && !o.hasDrawed) return this.curCanvasObj.top = a, this.curCanvasObj.zIndex = this.nextCanvasZIndex(), this.curCanvasObj.canvas.docTop = a, void rt.bringSomeFront();
                                if (!t) {
                                    this.calcEmptyCanvas();
                                    var r = this.calcCanvasIncrH(),
                                        l = this.canvasEmptyList.find((function(t) {
                                            return r === t.incrementH
                                        }));
                                    if (l) return this.curCanvasObj = l, this.curCanvasObj.top = a, this.curCanvasObj.zIndex = this.nextCanvasZIndex(), this.curCanvasObj.canvas.docTop = a, this.curCanvasObj.canvas.incrementH = l.incrementH, this.canvas = this.curCanvasObj.canvas, rt.setCanvas(this.canvas, void 0 === i), void this.bs.refresh()
                                }
                                var u = {
                                    id: "canvas" + this.uuid(),
                                    zIndex: this.nextCanvasZIndex(),
                                    top: a,
                                    incrementH: n
                                };
                                this.canvasList.push(u), this.$nextTick((function() {
                                    s.canvas && (s.canvas.isDrawingMode = !1), s.canvas = u.canvas = new c.fabric.Canvas(u.id, {
                                        backgroundColor: "transparent",
                                        selection: !1,
                                        docTop: a,
                                        incrementH: n,
                                        isCleanCanvas: "clean" === s.drawMode
                                    }), s.canvas.setWidth(s.drawW), s.canvas.setHeight(s.canvasH + 2 * s.cellH + n), s.curCanvasObj = u, rt.setCanvas(s.canvas, void 0 === i), s.bindCanvasEvent(), s.bs.refresh()
                                }))
                            }
                        },
                        adaptCanvas: function(t, e, i) {
                            var s, n = this,
                                a = function(i) {
                                    var s = i.incrementH,
                                        n = i.top;
                                    return !i.canvas.isCleanCanvas && s === t && n === e
                                };
                            if (a(this.curCanvasObj)) i();
                            else {
                                for (var o = 0; o < this.canvasList.length; o++) {
                                    var r = this.canvasList[o];
                                    if (a(r)) {
                                        s = r;
                                        break
                                    }
                                }
                                if (s) this.curCanvasObj = s, this.curCanvasObj.zIndex = this.nextCanvasZIndex(), this.canvas = this.curCanvasObj.canvas, rt.setCanvas(this.canvas, !1), i();
                                else {
                                    var l = e,
                                        u = t,
                                        h = {
                                            id: "canvas" + this.uuid(),
                                            zIndex: this.nextCanvasZIndex(),
                                            top: l,
                                            incrementH: u
                                        };
                                    this.canvasList.push(h), this.$nextTick((function() {
                                        n.canvas = h.canvas = new c.fabric.Canvas(h.id, {
                                            backgroundColor: "transparent",
                                            selection: !1,
                                            docTop: l,
                                            incrementH: u
                                        }), n.canvas.setWidth(n.drawW), n.canvas.setHeight(n.canvasH + 2 * n.cellH + u), n.curCanvasObj = h, rt.setCanvas(n.canvas, !1), n.bindCanvasEvent(), n.bs.refresh(), i()
                                    }))
                                }
                            }
                        },
                        calcEmptyCanvas: function() {
                            var t = [];
                            this.canvasList.forEach((function(e) {
                                if (e.canvas)
                                    for (var i = e.canvas.getObjects(), s = 0; s < i.length; s++) {
                                        var n = i[s];
                                        if (1 === n.opacity && "dragCurveDot" !== n.drawType) {
                                            t.push(e.id);
                                            break
                                        }
                                    }
                            })), this.canvasEmptyList = this.canvasList.filter((function(e) {
                                return !t.includes(e.id)
                            }))
                        },
                        calcCanvasIncrH: function() {
                            var t = rt.getCommon(),
                                e = t.mutipleGap,
                                i = t.mutipleNum;
                            return i <= 1 ? 0 : (i - 1) * (e + 1) * this.cellH
                        },
                        lockup: function(t) {
                            return this.isLockup = "boolean" == typeof t ? t : !this.isLockup, this.isLockup ? (this.bs.enable(), this.isMaskDrawArea = !0) : (this.bs.disable(), this.isMaskDrawArea = !1, this.newCanvas()), this.isLockup
                        },
                        setDrawMode: function(t) {
                            var e = this;
                            this.canvas && (this.canvas.isDrawingMode = !1, this.canvas.renderAll());
                            var i = this.drawMode;
                            "clean" === t ? (this.drawMode = t, rt.setDrawMode(t), this.newCanvas(!0)) : "clean" === i ? (this.canvasList.pop(), this.newCanvas(!0), this.$nextTick((function() {
                                e.drawMode = t, rt.setDrawMode(t)
                            }))) : (this.drawMode = t, rt.setDrawMode(t))
                        },
                        setCommon: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = !1,
                                i = rt.getCommon();
                            t.mutipleNum && t.mutipleNum != i.mutipleNum && (e = !0), rt.setCommon(t), t.color && (this.comColor = q(t.color, .7), X()), e && this.newCanvas(!0)
                        },
                        initCommonSet: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.drawMode;
                            e && (delete t.drawMode, this.drawMode = e, rt.setDrawMode(e)), rt.setCommon(Ht({
                                mutipleType: 2,
                                mutipleGap: 0,
                                mutipleNum: 1,
                                colorMuti: !1,
                                isShowDragDot: !0
                            }, t)), t.color && (this.comColor = q(t.color, .7), X())
                        },
                        clear: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.canvasList.forEach((function(t) {
                                var e = t.canvas;
                                e && e.wrapperEl && e.wrapperEl.parentNode && (e.clear(), e.dispose())
                            })), this.canvasList = [], this.cells = {}, this.operation.clear(), t || (u.a.remove("progress" + this.cpType), u.a.remove("drawRuleJson" + this.cpType));
                            var e = ["sum", "one", "two", "three", "four", "five", "six", "seven"],
                                i = this.stagesData[this.stagesData.length - 6];
                            e.forEach((function(t) {
                                i[t] = ""
                            })), this.newCanvas(!0)
                        },
                        clearForCloud: function() {
                            this.canvasList.forEach((function(t) {
                                var e = t.canvas;
                                e && (e.clear(), e.dispose())
                            })), this.canvasList = [], this.cells = {}, this.curCanvasObj = null
                        },
                        setTheme: function(t, e, i) {
                            this.theme = t, this.setCommon({
                                numType: e,
                                fontType: i
                            }), this.canvasList.forEach((function(e) {
                                e.canvas.getObjects().forEach((function(e) {
                                    e && ("rectText" === e.drawType && 2 === e.numBgType && (e.item(0).set({
                                        fill: t.frontBgColor
                                    }), e.ocanvas.renderAll()), "circleNum" === e.drawType && (e.adaptNumType(), e.ocanvas.renderAll()))
                                }))
                            }))
                        },
                        exportJson: function() {
                            var t = [];
                            return this.canvasList.forEach((function(e) {
                                var i = e.canvas.toJSON(["drawType", "startCircleNum", "endCircleNum", "linePath", "textBackGroup", "cellIndex", "cellTextInfo", "docTop", "docTopForLoadJson", "numType", "numBgType", "fontType"]);
                                i.incrementH = e.incrementH, i.docTop = e.top, t.push(i)
                            })), t
                        },
                        exportImg: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e, i) {
                                var s, n, a, o, r, u, h, f, d, p = this,
                                    v = arguments;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (s = !(v.length > 2 && void 0 !== v[2]) || v[2], n = {
                                                    id: "drawBg" + this.uuid()
                                                }, a = 0, i && (a = 110 * this.scale), this.canvasBgList.push(n), this.canvasBg = new c.fabric.StaticCanvas(n.id), this.canvasBg.setWidth(this.width), this.canvasBg.setHeight(this.height + a), this.drawBg(), o = this.drawObjs(), r = o.minTop, u = o.canvasObjs, r = r - r % this.cellH - 1 * this.cellH, r = Math.max(0, r), h = this.height - r, f = Object(l.r)().height, h < f && (r = this.height - f, h = f), e || this.drawWater(r, h), !i) {
                                                t.next = 19;
                                                break
                                            }
                                            return t.next = 19, this.drawQrcode(r, h);
                                        case 19:
                                            if (u.forEach((function(t) {
                                                    return t.bringToFront()
                                                })), d = this.canvasBg.toDataURL({
                                                    format: "jpeg",
                                                    enableRetinaScaling: !0,
                                                    top: r,
                                                    height: h + a
                                                }), this.canvasBg.clear(), this.canvasBg.dispose(), this.canvasBgList.pop(), u.forEach((function(t) {
                                                    t.set({
                                                        left: t.left - p.stageW,
                                                        top: t.top - (t.ocanvas ? t.ocanvas.docTop : 0)
                                                    }), t.setCoords(), t.ocanvas.renderAll()
                                                })), !s) {
                                                t.next = 30;
                                                break
                                            }
                                            return t.next = 29, this.reqUploadImg(d);
                                        case 29:
                                            d = t.sent;
                                        case 30:
                                            return t.abrupt("return", d);
                                        case 31:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e, i) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        exportImgForCloud: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                                var i, s, n, a, o, r, u, h, f = this;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return i = {
                                                id: "drawBg" + this.uuid()
                                            }, s = 110, this.canvasBgList.push(i), this.canvasBg = new c.fabric.StaticCanvas(i.id), this.canvasBg.setWidth(this.width), this.canvasBg.setHeight(this.height + s), this.drawBg(), n = this.drawObjs(), a = n.minTop, o = n.canvasObjs, t.next = 10, this.drawIssueStatus();
                                        case 10:
                                            return a = a - a % this.cellH - 1 * this.cellH, a = Math.max(0, a), r = this.height - a, u = Object(l.r)().height, r < u && (a = this.height - u, r = u), t.next = 17, this.drawQrcode(a, r, e);
                                        case 17:
                                            return o.forEach((function(t) {
                                                return t.bringToFront()
                                            })), h = this.canvasBg.toDataURL({
                                                format: "jpeg",
                                                enableRetinaScaling: !0,
                                                top: a,
                                                height: r + s
                                            }), this.canvasBg.clear(), this.canvasBg.dispose(), this.canvasBgList.pop(), o.forEach((function(t) {
                                                t.set({
                                                    left: t.left - f.stageW,
                                                    top: t.top - (t.ocanvas ? t.ocanvas.docTop : 0)
                                                }), t.ocanvas.renderAll()
                                            })), t.next = 25, this.reqUploadImg(h);
                                        case 25:
                                            return h = t.sent, t.abrupt("return", h);
                                        case 27:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        drawBg: function() {
                            var t = this,
                                e = this.stages,
                                i = this.width,
                                s = this.height,
                                n = this.stageW,
                                a = this.statW,
                                o = this.frontW,
                                r = this.endW,
                                l = this.fCellW,
                                u = this.eCellW,
                                h = this.cellH,
                                f = this.theme,
                                d = f.stageBgColor,
                                p = f.statBgColor,
                                v = f.frontBgColor,
                                m = f.endBgColor,
                                g = f.stageColor,
                                x = f.statColor,
                                y = f.frontColor,
                                C = f.endColor,
                                w = f.lineBoldColor,
                                b = f.lineColor,
                                S = parseFloat(this.drawConfig.stageSize),
                                T = parseFloat(this.drawConfig.stageDateSize),
                                k = parseFloat(this.font.stat),
                                D = parseFloat(this.font.front),
                                M = parseFloat(this.font.end),
                                B = parseFloat(this.font.endLastCell),
                                j = this.lineBoldW,
                                A = this.lineW;
                            this.shouldTopObjs = [];
                            var W = [],
                                N = new c.fabric.Rect(Xt({
                                    width: n,
                                    height: s,
                                    left: 0,
                                    top: 0,
                                    fill: d
                                })),
                                O = new c.fabric.Rect(Xt({
                                    width: a,
                                    height: s,
                                    left: n,
                                    top: 0,
                                    fill: p
                                })),
                                _ = new c.fabric.Rect(Xt({
                                    width: o,
                                    height: s,
                                    left: n + a,
                                    top: 0,
                                    fill: v
                                })),
                                I = new c.fabric.Rect(Xt({
                                    width: r,
                                    height: s,
                                    left: i - r,
                                    top: 0,
                                    fill: m
                                }));
                            W.push(N, O, _, I);
                            var P = function(t, e) {
                                    return new c.fabric.Text(t, Xt(Ht({
                                        fontFamily: "Times New Roman",
                                        fontWeight: "bold",
                                        originX: "center",
                                        originY: "center"
                                    }, e)))
                                },
                                R = this.lastIssueStatus,
                                E = R.issue,
                                F = R.hit,
                                z = E && "2" !== F;
                            e.forEach((function(e, i) {
                                var s = y,
                                    r = C;
                                z && e.localIssue === E && (s = "#fd3d44", r = "#fd3d44");
                                var c = "",
                                    f = h / 2 + i * h,
                                    d = 0;
                                t.drawSet.isShowDate && e.pubtime && (c = t.dateMMDDW_(e.pubtime), f = 20 * t.scale + i * h, d = 35 * t.scale + i * h);
                                var p = P(e.issue, {
                                        fontSize: S,
                                        fill: g,
                                        left: n / 2,
                                        top: f
                                    }),
                                    v = P(c, {
                                        fontSize: T,
                                        fill: g,
                                        left: n / 2,
                                        top: d
                                    });
                                t.shouldTopObjs.push(p, v);
                                var m = P(e.sum, {
                                        fontSize: k,
                                        fill: x,
                                        left: n + a / 2,
                                        top: h / 2 + i * h
                                    }),
                                    w = P(e.one, {
                                        fontSize: D,
                                        fill: s,
                                        left: n + a + l / 2,
                                        top: h / 2 + i * h
                                    }),
                                    b = P(e.two, {
                                        fontSize: D,
                                        fill: s,
                                        left: n + a + l + l / 2,
                                        top: h / 2 + i * h
                                    }),
                                    j = P(e.three, {
                                        fontSize: D,
                                        fill: s,
                                        left: n + a + 2 * l + l / 2,
                                        top: h / 2 + i * h
                                    }),
                                    A = P(e.four, {
                                        fontSize: D,
                                        fill: s,
                                        left: n + a + 3 * l + l / 2,
                                        top: h / 2 + i * h
                                    }),
                                    N = P(e.five, {
                                        fontSize: M,
                                        fill: r,
                                        left: n + a + o + u / 2,
                                        top: h / 2 + i * h
                                    });
                                if (W.push(p, v, m, w, b, j, A, N), 1 == t.cpType) {
                                    var O = P(e.six, {
                                            fontSize: M,
                                            fill: r,
                                            left: n + a + o + u + u / 2,
                                            top: h / 2 + i * h
                                        }),
                                        _ = P(e.seven, {
                                            fontSize: B,
                                            fill: r,
                                            left: n + a + o + 2 * u + u / 2,
                                            top: h / 2 + i * h
                                        });
                                    W.push(O, _)
                                }
                            }));
                            var H = [],
                                X = function(e, i) {
                                    var s = t.cellH * (i + 1);
                                    if (t.isLineBold(e, i)) {
                                        var n = new c.fabric.Line([0, s - A, t.width, s - A], {
                                            fill: w,
                                            stroke: w,
                                            strokeWidth: j,
                                            selectable: !1,
                                            evented: !1
                                        });
                                        return H.push(n), n
                                    }
                                    var a = new c.fabric.Line([0, s, t.width, s], {
                                        fill: b,
                                        stroke: b,
                                        strokeWidth: A,
                                        selectable: !1,
                                        evented: !1
                                    });
                                    return ["vip-2", "vip-3", "master-2"].includes(t.theme.type) && H.push(a), a
                                };
                            this.stages.forEach((function(t, e) {
                                W.push(X(t, e))
                            }));
                            var G = this.stageW,
                                Q = this.stageW + this.statW - j,
                                Y = this.stageW + this.statW + this.fCellW - A,
                                U = this.stageW + this.statW + 2 * this.fCellW - A,
                                q = this.stageW + this.statW + 3 * this.fCellW - A,
                                J = this.stageW + this.statW + this.frontW - A,
                                V = this.stageW + this.statW + this.frontW + this.eCellW,
                                $ = this.stageW + this.statW + this.frontW + 2 * this.eCellW,
                                Z = {
                                    originX: "left",
                                    originY: "center"
                                };
                            W.push(L([0, 0, 0, this.height], b, A, Z)), W.push(L([G, 0, G, this.height], w, j, Z)), W.push(L([Q, 0, Q, this.height], w, j, Z)), W.push(L([Y, 0, Y, this.height], b, A, Z)), W.push(L([U, 0, U, this.height], b, A, Z)), W.push(L([q, 0, q, this.height], b, A, Z)), W.push(L([J, 0, J, this.height], w, j, Z)), W.push(L([V, 0, V, this.height], b, A, Z)), 1 == this.cpType && W.push(L([$, 0, $, this.height], b, A, Z)), this.canvasBg.add.apply(this.canvasBg, W), H.forEach((function(t) {
                                t.bringToFront()
                            }))
                        },
                        drawObjs: function() {
                            var t = this;
                            Y();
                            var e = [],
                                i = this.height,
                                s = 0;
                            this.canvasList.forEach((function(n) {
                                n.canvas.getObjects().forEach((function(a) {
                                    if (0 !== a.opacity && "dragCurveDot" !== a.drawType) {
                                        var o = a.top + n.top,
                                            r = a.left + t.stageW;
                                        a.set({
                                            left: r,
                                            top: o
                                        });
                                        var c = a.getBoundingRect();
                                        i = Math.min(i, o), s = Math.max(s, o + c.height), e.push(a)
                                    }
                                }))
                            }));
                            var n = function(t) {
                                var e = t.drawType;
                                return "text" === e || "textBackGroup" === e ? 4 : "rectText" === e ? 3 : "circleNum" === e ? 2 : 1
                            };
                            return e.sort((function(t, e) {
                                return n(t) - n(e)
                            })), this.canvasBg.add.apply(this.canvasBg, e), this.shouldTopObjs.forEach((function(t) {
                                return t.bringToFront()
                            })), {
                                minTop: i,
                                maxTop: s,
                                canvasObjs: e
                            }
                        },
                        drawWater: function(t, e) {
                            for (var i = t, s = t + e, n = [], a = (this.$store.state.userinfo || {}).name, o = this.scale, r = function(t, e) {
                                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "图规我要发";
                                    if (!(e > s - 100 * o)) {
                                        var a = "".concat(i, "\r\nwww.ryqxc.com"),
                                            r = new c.fabric.Textbox(a, {
                                                left: t,
                                                top: e,
                                                width: 125 * o,
                                                fill: "rgba(154, 115, 216, 0.3)",
                                                textAlign: "center",
                                                fontFamily: "sans-serif",
                                                fontSize: 15 * o,
                                                fontWeight: "bold",
                                                splitByGrapheme: !0,
                                                angle: -45,
                                                originX: "left",
                                                originY: "top"
                                            });
                                        n.push(r)
                                    }
                                }, l = i + 100 * o; l < s - 100 * o;) r(this.stageW + this.statW, l), r(this.stageW + this.statW + 130 * o, l + 100 * o, a), l += 6 * this.cellH;
                            this.canvasBg.add.apply(this.canvasBg, n)
                        },
                        drawQrcode: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e, s, n) {
                                var a, o, l, u, h, f, d, p, v, m, g, x, y, C, w, b, S, T, k, D, M, B, j, A, W, N, O, _, I, L, P, R, E;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return a = this.scale, l = e + s + (o = 110 * a) - o, u = 0, h = [], f = this.$store.state.userinfo || {}, d = f.upk, p = f.name, v = f.ossThumbUrl, m = f.vip, g = f.qxcdashi, x = f.plwdashi, y = f.daren, t.next = 9, this.reqQrcode(n);
                                        case 9:
                                            return C = t.sent, w = v || this.defaultHeader, t.next = 13, Promise.all([U(C), U(w)]);
                                        case 13:
                                            if (b = t.sent, S = Object(r.a)(b, 2), T = S[0], k = S[1], T.scale(o / T.width), T.set({
                                                    left: 0,
                                                    top: 0
                                                }), h.push(T), D = 68 * a, "www.ryqxc.com 七星彩+排列五", M = new c.fabric.Textbox("www.ryqxc.com 七星彩+排列五", {
                                                    fontFamily: "sans-serif",
                                                    fontSize: 12 * a,
                                                    fill: "#159bff",
                                                    textAlign: "center",
                                                    width: this.width - 100 * a,
                                                    left: 100 * a,
                                                    top: D
                                                }), "扫描二维码，来《图规我要发》关注我", (B = new c.fabric.Textbox("扫描二维码，来《图规我要发》关注我", {
                                                    fontFamily: "sans-serif",
                                                    fontSize: 12 * a,
                                                    fill: "#333",
                                                    textAlign: "center",
                                                    width: this.width - 100 * a,
                                                    left: 100 * a,
                                                    top: D + 20 * a
                                                })).setSelectionStyles({
                                                    fill: "#159bff"
                                                }, 7, 14), h.push(M, B), !n) {
                                                t.next = 38;
                                                break
                                            }
                                            j = new c.fabric.Text(n.title, {
                                                fontFamily: "sans-serif",
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                fill: "#fd3d44",
                                                left: 135,
                                                top: 15
                                            }), h.push(j), 50, (A = function(t, e) {
                                                var i = new c.fabric.Group([new c.fabric.Rect({
                                                    width: 50,
                                                    height: 20,
                                                    rx: 5,
                                                    ry: 5,
                                                    fill: "#f5f6f8",
                                                    strokeWidth: 0,
                                                    originX: "left",
                                                    originY: "top"
                                                }), new c.fabric.Textbox(t, {
                                                    fontFamily: "sans-serif",
                                                    fontSize: 10,
                                                    fill: "#888",
                                                    textAlign: "center",
                                                    lineHeight: 20,
                                                    width: 50,
                                                    top: 4
                                                })], {
                                                    left: e,
                                                    top: 38,
                                                    originX: "left",
                                                    originY: "top"
                                                });
                                                h.push(i)
                                            })("对应规", 135), A("合数规", 190), A("铁杀规", 245), A("更多规", 300), t.next = 66;
                                            break;
                                        case 38:
                                            if (!d) {
                                                t.next = 63;
                                                break
                                            }
                                            if (W = 40 * a / k.width, k.scale(W).set({
                                                    left: 130 * a,
                                                    top: 13 * a,
                                                    clipTo: function(t) {
                                                        t.arc(0, 0, 20 * a / W, 0, 2 * Math.PI, !0)
                                                    }
                                                }), h.push(k), "1" !== m) {
                                                t.next = 49;
                                                break
                                            }
                                            return N = i("b274"), t.next = 46, U(N);
                                        case 46:
                                            (O = t.sent).scale(32 * a / O.width).set({
                                                left: 145 * a,
                                                top: 48 * a
                                            }), h.push(O);
                                        case 49:
                                            if (_ = function(t) {
                                                    var e = 1 === t ? "七星彩大师" : "排列五大师",
                                                        i = 1 === t ? 180 * a : g ? 255 * a : 180 * a,
                                                        s = new c.fabric.Group([new c.fabric.Rect({
                                                            width: 70 * a,
                                                            height: 20 * a,
                                                            rx: 5 * a,
                                                            ry: 5 * a,
                                                            fill: "#f5f6f8",
                                                            strokeWidth: 0,
                                                            originX: "left",
                                                            originY: "top"
                                                        }), new c.fabric.Textbox(e, {
                                                            fontFamily: "sans-serif",
                                                            fontSize: 10 * a,
                                                            fill: "#888",
                                                            textAlign: "center",
                                                            lineHeight: 20 * a,
                                                            width: 70 * a,
                                                            top: 4 * a
                                                        })], {
                                                            left: i,
                                                            top: 35 * a,
                                                            originX: "left",
                                                            originY: "top"
                                                        });
                                                    h.push(s)
                                                }, g && _(1), x && _(2), I = new c.fabric.Text(p, {
                                                    fontFamily: "sans-serif",
                                                    fontSize: 14 * a,
                                                    fontWeight: "bold",
                                                    fill: "1" === m ? "#fca800" : "#333",
                                                    left: 180 * a,
                                                    top: g || x ? 13 * a : 26 * a
                                                }), h.push(I), "1" !== y) {
                                                t.next = 61;
                                                break
                                            }
                                            return L = i("27cd"), t.next = 58, U(L);
                                        case 58:
                                            (P = t.sent).scale(28 * a / P.height).set({
                                                left: 180 * a + I.width + 5 * a,
                                                top: 7 * a
                                            }), h.push(P);
                                        case 61:
                                            t.next = 66;
                                            break;
                                        case 63:
                                            "未登录，匿名用户", R = new c.fabric.Textbox("未登录，匿名用户", {
                                                fontFamily: "sans-serif",
                                                fontSize: 14 * a,
                                                fontWeight: "bold",
                                                fill: "#333",
                                                textAlign: "center",
                                                width: this.width - 100 * a,
                                                left: 100 * a,
                                                top: 25 * a
                                            }), h.push(R);
                                        case 66:
                                            E = new c.fabric.Group([new c.fabric.Rect({
                                                width: this.width,
                                                height: o,
                                                fill: "#fff",
                                                strokeWidth: 0,
                                                originX: "left",
                                                originY: "top"
                                            })].concat(h), {
                                                left: u,
                                                top: l,
                                                originX: "left",
                                                originY: "top"
                                            }), this.canvasBg.add(E);
                                        case 68:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e, i, s) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        drawIssueStatus: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t() {
                                var e, s, n, a, o, r, c, l;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = this.lastIssueStatus, s = e.issue, n = e.hit, s && "2" !== n) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return a = this.stages.findIndex((function(t) {
                                                return t.localIssue === s
                                            })), o = a * this.cellH + (this.cellH - 40) / 2, r = (this.stageW - 40) / 2, c = i("512c"), "0" === n && (c = i("7423")), t.next = 10, U(c);
                                        case 10:
                                            (l = t.sent).set({
                                                left: r,
                                                top: o
                                            }), l.scale(40 / l.height), this.canvasBg.add(l);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        setIssueStatus: function(t, e) {
                            this.lastIssueStatus = {
                                issue: t,
                                hit: e
                            }
                        },
                        showInput: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                i = arguments.length > 1 ? arguments[1] : void 0;
                            this.inputColor = e ? i : this.comColor, this.inputText = e, this.inputIsShow = !0, this.$nextTick((function() {
                                t.resetTextareaH(), t.textarea.focus()
                            }))
                        },
                        resetTextareaH: function() {
                            this.textarea.style.height = this.calcTextarea.scrollHeight - 0 + "px"
                        },
                        selectNum: function(t) {
                            t && (this.setCircleNum(this.curNumSelectCell, t), F(this.curNumSelectCell, !0, !1))
                        },
                        setCircleNum: function(t, e) {
                            var i = t.level,
                                s = t.index;
                            this.stagesData[i][
                                ["sum", "one", "two", "three", "four", "five", "six", "seven"][s]
                            ] = e, t.num = e
                        },
                        selectRectText: function(t) {
                            rt.setCommon({
                                numBgType: t.numBgType
                            }), H(this.curNumSelectCell, t)
                        },
                        showNumDialog: function(t) {
                            var e = this,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                            this.isLockup = !0, this.curNumSelectCell = t, this.$emit("handleShowNumDialog", {
                                index: t.index,
                                onClose: function() {
                                    i(), e.isLockup = !1
                                }
                            })
                        },
                        cancel: function() {
                            var t = this;
                            this.bs.stop(), setTimeout((function() {
                                t.operation.cancel(), b && b.remove()
                            }), 60)
                        },
                        resume: function() {
                            var t = this;
                            this.bs.stop(), setTimeout((function() {
                                t.operation.resume()
                            }), 60)
                        },
                        bindCanvasEvent: function() {
                            var t = this,
                                e = !1,
                                i = this.$parent;
                            this.canvas.on({
                                "mouse:down": function(s) {
                                    e = i.isShowColorSelect || i.isShowModeSelect, t.isLockup || e ? t.$emit("handleCloseSelector") : (t.isStartDrawing = !0, t.bs._stop(), rt.eventStart(s))
                                },
                                "mouse:move": function(i) {
                                    t.isLockup || e || t.isForPc && !t.isStartDrawing || rt.eventMove(i)
                                },
                                "mouse:up": function(i) {
                                    t.isStartDrawing = !1, t.isLockup || e || rt.eventEnd(i)
                                },
                                "object:moving": function(i) {
                                    t.isLockup || e || t.isForPc && !t.isStartDrawing || rt.eventObjMoving(i)
                                }
                            })
                        },
                        bindForPcEvent: function() {
                            var t = this,
                                e = this.$refs.stagesMask;
                            e.addEventListener("mousedown", (function() {
                                t.bs._enable()
                            })), e.addEventListener("mouseup", (function() {
                                t.bs._disable()
                            }))
                        },
                        handleTouchStartStage: function() {
                            this.isStartDrawing || (this.isTouchingStages = !0, this.bs._enable()), this.bs._enable()
                        },
                        handleTouchEndStage: function() {
                            this.isTouchingStages = !1
                        },
                        handleMousedownStage: function() {
                            this.isForPc && this.handleTouchStartStage()
                        },
                        handleMouseupStage: function() {
                            this.isForPc && this.handleTouchEndStage()
                        },
                        handleScroll: function() {},
                        handleScrollEnd: function() {
                            var t = this;
                            if (!this.bs.pending && !this.isLockup) {
                                if (this.isForCloud) return this.bs._enable(), void(this.isMaskDrawArea = !0);
                                clearTimeout(this.removeMaskTimer), this.removeMaskTimer = setTimeout((function() {
                                    t.isMaskDrawArea = !1
                                }), 500), this.isTouchingStages || (this.newCanvas(), this.bs._disable()), this.curScrollBottom = this.height + this.bs.y
                            }
                        },
                        handleInput: function(t) {
                            var e = this,
                                i = t.target;
                            i.scrollTop = 0, i.style.height = i.scrollHeight - 0 + "px", setTimeout((function() {
                                e.resetTextareaH()
                            }), 0)
                        },
                        handleBlur: function() {
                            this.inputIsShow = !1;
                            for (var t = this.inputText.trim(), e = [], i = this.$refs.inputCalcSpaceW, s = "", n = 0; n < t.length; n++) {
                                var a = t[n];
                                if ("\n" === a) e.push(s), s = "";
                                else {
                                    var o = s + a,
                                        r = o.split("").map((function(t) {
                                            return "<i>".concat(t = " " === t ? "&nbsp;" : t, "</i>")
                                        })).join("");
                                    i.innerHTML = r;
                                    for (var c = -1, l = 0, u = i.children, h = 0; h < u.length; h++) {
                                        var f = u[h].offsetTop;
                                        if (l && l !== f) {
                                            c = h;
                                            break
                                        }
                                        l = f
                                    }
                                    c > -1 ? (e.push(o.substring(0, c)), s = o.substring(c)) : s = o
                                }
                            }
                            "" !== s && e.push(s), t = e.join("\n"), this.inputText = t,
                                function(t) {
                                    if (T.textbox)
                                        if (t) {
                                            var e = T.textbox.textBackGroup.item(1).stroke;
                                            T.textbox.fireChangeText(t, e)
                                        } else T.textbox.remove();
                                    else t && z(T.newTextCoord, t)
                                }(t), window.scroll(0, 0)
                        },
                        reqQrcode: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                                var i, s, n, a, o, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return i = this.$store.state.userinfo || {}, s = i.inviteCode, n = i.upk, a = e ? "intel" === e.from ? {
                                                c: "h5",
                                                m: "law",
                                                msgUrl: encodeURI("tugui://law?type=" + e.cpType)
                                            } : {
                                                c: "h5",
                                                m: "yungui",
                                                msgUrl: encodeURI("tugui://yungui?type=" + e.cpType)
                                            } : n ? {
                                                c: "h5",
                                                m: "",
                                                inviteCode: s,
                                                msgUrl: encodeURI("tugui://user?upk=" + n)
                                            } : {
                                                c: "h5",
                                                m: "",
                                                msgUrl: encodeURI("tugui://main?page=0")
                                            }, a = Object.entries(a).map((function(t) {
                                                return t.join("=")
                                            })).join("&"), t.next = 5, Lt.a.qrcode({
                                                cpType: "1",
                                                content: this.getENV().domain + "/landing/index.html#/?" + a,
                                                height: "400",
                                                width: "400"
                                            });
                                        case 5:
                                            return o = t.sent, r = o.result, t.abrupt("return", r.qrcodeUrl);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        reqUploadImg: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                                var i, s, n, a, o;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return i = Object(l.a)(e), t.next = 3, this.compressPic(i, {
                                                maxWidth: 720
                                            });
                                        case 3:
                                            return i = t.sent, s = Object(l.b)(e), n = new File([i], new Date + "." + s), t.next = 9, Pt.a.uploadImg({
                                                cpType: String(this.cpType),
                                                desTag: "desTag",
                                                reqExtra: {
                                                    upload: {
                                                        avatarFile: n
                                                    }
                                                }
                                            });
                                        case 9:
                                            if (a = t.sent, o = a.result, "1" !== a.state) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.abrupt("return", o.imgUrl);
                                        case 16:
                                            return this.$msgbox.show("生成图片失败"), t.abrupt("return", "");
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }
                },
                Yt = (i("5b0f"), i("2877")),
                Ut = Object(Yt.a)(Qt, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "drawBoard",
                        style: {
                            width: t.canvasW + "px",
                            height: t.canvasH + "px"
                        },
                        on: {
                            touchmove: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, [s("div", {
                        staticClass: "container"
                    }, [s("div", {
                        staticClass: "bg flex",
                        class: t.theme.type,
                        style: {
                            width: t.width + "px",
                            height: t.height + "px",
                            margin: "0 auto"
                        }
                    }, [s("div", {
                        staticClass: "stageBg",
                        style: {
                            width: t.stageW + "px",
                            background: t.theme.stageBgColor
                        }
                    }), s("div", {
                        staticClass: "statBg",
                        style: {
                            width: t.statW + "px",
                            background: t.theme.statBgColor
                        }
                    }), s("div", {
                        staticClass: "frontBg",
                        style: {
                            width: t.frontW + "px",
                            background: t.theme.frontBgColor
                        }
                    }), s("div", {
                        staticClass: "endBg",
                        style: {
                            width: t.endW + "px",
                            background: t.theme.endBgColor
                        }
                    }), s("div", {
                        staticClass: "wrapper"
                    }, [t._l(t.stages, (function(e, n) {
                        return s("div", {
                            key: e.issue + t.uuid(),
                            staticClass: "row flex",
                            class: {
                                redText: t.lastIssueStatus.issue === e.localIssue
                            },
                            style: {
                                width: "100%",
                                height: t.cellH + "px"
                            }
                        }, [s("div", {
                            staticClass: "stage flex flex-column",
                            style: {
                                fontSize: t.drawConfig.stageSize,
                                width: t.stageW + "px",
                                color: t.theme.stageColor
                            }
                        }, [s("span", [t._v(t._s(e.issue))]), t.drawSet.isShowDate ? s("span", {
                            staticClass: "date",
                            style: {
                                fontSize: t.drawConfig.stageDateSize,
                                marginTop: t.drawConfig.stageDateMt
                            }
                        }, [t._v(t._s(t._f("dateMMDDW_")(e.pubtime)))]) : t._e()]), s("div", {
                            staticClass: "stat flex",
                            style: {
                                width: t.statW + "px",
                                color: t.theme.statColor,
                                fontSize: t.font.stat
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.sum) + "\n\t\t\t\t\t")]), s("div", {
                            staticClass: "front flex",
                            style: {
                                width: t.fCellW + "px",
                                color: t.theme.frontColor,
                                fontSize: t.font.front
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.one) + "\n\t\t\t\t\t")]), s("div", {
                            staticClass: "front flex",
                            style: {
                                width: t.fCellW + "px",
                                color: t.theme.frontColor,
                                fontSize: t.font.front
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.two) + "\n\t\t\t\t\t")]), s("div", {
                            staticClass: "front flex",
                            style: {
                                width: t.fCellW + "px",
                                color: t.theme.frontColor,
                                fontSize: t.font.front
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.three) + "\n\t\t\t\t\t")]), s("div", {
                            staticClass: "front flex",
                            style: {
                                width: t.fCellW + "px",
                                color: t.theme.frontColor,
                                fontSize: t.font.front
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.four) + "\n\t\t\t\t\t")]), s("div", {
                            staticClass: "end flex",
                            style: {
                                width: t.eCellW + "px",
                                color: t.theme.endColor,
                                fontSize: t.font.end
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.five) + "\n\t\t\t\t\t")]), 1 == t.cpType ? [s("div", {
                            staticClass: "end flex",
                            style: {
                                width: t.eCellW + "px",
                                color: t.theme.endColor,
                                fontSize: t.font.end
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.six) + "\n\t\t\t\t\t\t")]), s("div", {
                            staticClass: "end flex",
                            style: {
                                width: t.eCellW + "px",
                                color: t.theme.endColor,
                                fontSize: t.font.endLastCell
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.seven) + "\n\t\t\t\t\t\t")])] : t._e(), t.lastIssueStatus.issue === e.localIssue ? ["1" === t.lastIssueStatus.hit ? s("img", {
                            staticClass: "hitIcon",
                            style: {
                                left: (t.stageW - 40) / 2 + "px"
                            },
                            attrs: {
                                src: i("512c")
                            }
                        }) : t._e(), "0" === t.lastIssueStatus.hit ? s("img", {
                            staticClass: "hitIcon",
                            style: {
                                left: (t.stageW - 40) / 2 + "px"
                            },
                            attrs: {
                                src: i("7423")
                            }
                        }) : t._e()] : t._e(), n % 4 == 0 ? s("WaterMark", {
                            attrs: {
                                isJiShu: n / 4 % 2,
                                count: 1
                            }
                        }) : t._e()], 2)
                    })), s("div", {
                        ref: "bottom",
                        staticClass: "bottom",
                        style: {
                            bottom: t.fixedScrollBottom + "px"
                        }
                    })], 2), t.scale < 1 ? s("div", {
                        staticClass: "lineV bold",
                        style: {
                            left: "0px",
                            width: "1px",
                            background: t.theme.lineBoldColor
                        }
                    }) : t._e(), s("div", {
                        staticClass: "lineV bold",
                        style: {
                            left: t.stageW + "px",
                            width: t.lineBoldW + "px",
                            background: t.theme.lineBoldColor
                        }
                    }), s("div", {
                        staticClass: "lineV bold",
                        style: {
                            left: t.stageW + t.statW - t.lineBoldW + "px",
                            width: t.lineBoldW + "px",
                            background: t.theme.lineBoldColor
                        }
                    }), s("div", {
                        staticClass: "lineV",
                        style: {
                            left: t.stageW + t.statW + t.fCellW - t.lineW + "px",
                            width: t.lineW + "px",
                            background: t.theme.lineColor
                        }
                    }), s("div", {
                        staticClass: "lineV",
                        style: {
                            left: t.stageW + t.statW + 2 * t.fCellW - t.lineW + "px",
                            width: t.lineW + "px",
                            background: t.theme.lineColor
                        }
                    }), s("div", {
                        staticClass: "lineV",
                        style: {
                            left: t.stageW + t.statW + 3 * t.fCellW - t.lineW + "px",
                            width: t.lineW + "px",
                            background: t.theme.lineColor
                        }
                    }), s("div", {
                        staticClass: "lineV bold",
                        style: {
                            left: t.stageW + t.statW + t.frontW - t.lineW + "px",
                            width: t.lineBoldW + "px",
                            background: t.theme.lineBoldColor
                        }
                    }), 1 == t.cpType ? [s("div", {
                        staticClass: "lineV",
                        style: {
                            left: t.stageW + t.statW + t.frontW + t.eCellW + "px",
                            width: t.lineW + "px",
                            background: t.theme.lineColor
                        }
                    }), s("div", {
                        staticClass: "lineV",
                        style: {
                            left: t.stageW + t.statW + t.frontW + 2 * t.eCellW + "px",
                            width: t.lineW + "px",
                            background: t.theme.lineColor
                        }
                    })] : t._e(), t.scale < 1 ? s("div", {
                        staticClass: "lineV",
                        style: {
                            left: t.stageW + t.statW + t.frontW + t.endW - .5 + "px",
                            width: "1px",
                            background: t.theme.lineBoldColor
                        }
                    }) : t._e(), t._l(t.stages, (function(e, i) {
                        return s("div", {
                            key: e.localIssue + t.uuid(),
                            class: ["lineH", t.isLineBold(e, i) ? "bold" : ""],
                            style: {
                                left: "0px",
                                top: (i + 1) * t.cellH + (t.isLineBold(e, i) ? 0 - t.lineW : 0) + "px",
                                width: t.width + "px",
                                height: (t.isLineBold(e, i) ? t.lineBoldW : t.lineW) + "px",
                                background: t.isLineBold(e, i) ? t.theme.lineBoldColor : t.theme.lineColor
                            }
                        })
                    }))], 2), t._l(t.canvasList, (function(e) {
                        return s("div", {
                            key: "wrap" + e.id,
                            staticClass: "canvas",
                            style: {
                                left: t.stageW + (t.canvasW - t.width) / 2 + "px",
                                top: e.top + "px",
                                "z-index": e.zIndex
                            }
                        }, [s("canvas", {
                            attrs: {
                                id: e.id
                            }
                        })])
                    }))], 2), s("div", {
                        staticClass: "emptyLeft",
                        style: {
                            left: "0",
                            width: (t.canvasW - t.width) / 2 + "px",
                            height: t.height + "px"
                        },
                        on: {
                            touchstart: t.handleTouchStartStage,
                            touchend: t.handleTouchEndStage,
                            mousedown: t.handleMousedownStage,
                            mouseup: t.handleMouseupStage
                        }
                    }), s("div", {
                        staticClass: "emptyRight",
                        style: {
                            left: t.width + (t.canvasW - t.width) / 2 + "px",
                            width: (t.canvasW - t.width) / 2 + "px",
                            height: t.height + "px"
                        },
                        on: {
                            touchstart: t.handleTouchStartStage,
                            touchend: t.handleTouchEndStage,
                            mousedown: t.handleMousedownStage,
                            mouseup: t.handleMouseupStage
                        }
                    }), s("div", {
                        staticClass: "stagesMask",
                        style: {
                            left: (t.canvasW - t.width) / 2 + "px",
                            width: t.stageW + "px",
                            height: t.height + "px"
                        },
                        on: {
                            touchstart: t.handleTouchStartStage,
                            touchend: t.handleTouchEndStage,
                            mousedown: t.handleMousedownStage,
                            mouseup: t.handleMouseupStage
                        }
                    }), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isMaskDrawArea,
                            expression: "isMaskDrawArea"
                        }],
                        staticClass: "drawAreaMask",
                        style: {
                            left: t.stageW + (t.canvasW - t.width) / 2 + "px",
                            width: t.width - t.stageW + "px",
                            height: t.height + "px"
                        }
                    }), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticClass: "canvasBg"
                    }, t._l(t.canvasBgList, (function(t) {
                        return s("canvas", {
                            key: t.id,
                            attrs: {
                                id: t.id
                            }
                        })
                    })), 0), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.inputIsShow,
                            expression: "inputIsShow"
                        }],
                        staticClass: "input",
                        style: {
                            borderColor: t.inputColor
                        }
                    }, [s("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.inputText,
                            expression: "inputText"
                        }],
                        ref: "textarea",
                        style: {
                            borderColor: t.inputColor,
                            color: t.inputColor
                        },
                        domProps: {
                            value: t.inputText
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.inputText = e.target.value)
                            }, t.handleInput],
                            blur: t.handleBlur
                        }
                    })]), s("div", {
                        ref: "inputCalc",
                        staticClass: "input calcInput"
                    }, [s("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.inputText,
                            expression: "inputText"
                        }],
                        ref: "calcTextarea",
                        domProps: {
                            value: t.inputText
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.inputText = e.target.value)
                            }
                        }
                    })]), s("div", {
                        staticClass: "inputCalcSpace"
                    }, [s("div", {
                        ref: "inputCalcSpaceW",
                        staticClass: "wrap"
                    })])])
                }), [], !1, null, "69c0eec4", null).exports,
                qt = i("39ce"),
                Jt = i("8bfe"),
                Vt = i("bd6c"),
                $t = i("ae97"),
                Zt = i("c9d9"),
                Kt = i("d376"),
                te = i("f24b"),
                ee = i("41cb"),
                ie = i("dcfb");

            function se(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function ne(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? se(Object(i), !0).forEach((function(e) {
                        Object(a.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : se(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var ae = {},
                oe = {
                    name: "drawRule2",
                    mixins: [o.a],
                    components: {
                        DrawBoard: Ut,
                        PopDrawNumSelector: qt.a,
                        PopSaveDrawRule: Jt.a,
                        PopFavoriteDrawRule: Vt.a,
                        DrawRuleSet: ie.a
                    },
                    props: ["cpType"],
                    data: function() {
                        return {
                            toolH: 50,
                            canvasW: 0,
                            canvasH: 0,
                            drawH: 0,
                            stages: [],
                            isLockup: !1,
                            colors: ["#fe0000", "#0000fe", "#6600ff", "#ff7f29", "#5eb95e", "#a45d34", "#19d6cf", "#00000a", "#f4cc03", "#bfff3f", "#a300a8", "#00ff01"],
                            drawModes: {
                                intelLine: {
                                    name: "智能线",
                                    img: i("51204")
                                },
                                line: {
                                    name: "直线",
                                    img: i("0adf")
                                },
                                free: {
                                    name: "自由线",
                                    img: i("daff")
                                },
                                text: {
                                    name: "添加文字",
                                    img: i("2468")
                                },
                                clean: {
                                    name: "橡皮擦",
                                    img: i("b464")
                                },
                                circle: {
                                    name: "实心圆形",
                                    img: i("1b24")
                                },
                                rect: {
                                    name: "实心矩形",
                                    img: i("0a35")
                                },
                                circleTran: {
                                    name: "空心圆形",
                                    img: i("33e0")
                                },
                                rectTran: {
                                    name: "空心矩形",
                                    img: i("5881")
                                }
                            },
                            penW: [6, 4, 2],
                            isShowColorSelect: !1,
                            isShowModeSelect: !1,
                            curColor: "#fe0000",
                            curPenType: 2,
                            curDrawMode: "intelLine",
                            isShowNumSelect: !1,
                            isShowNumSelectW: !1,
                            isShowTotalNumSelect: !1,
                            intelData: {
                                type: 2,
                                gap: 0,
                                muti: 1,
                                colorMuti: !1,
                                isShowDragDot: !0,
                                numType: 0
                            },
                            isShowIntelSet: !1,
                            isShowIntelSetW: !1,
                            isLoadedData: !1,
                            hasUsedDraw: !0 === u.a.get("hasUsedDraw"),
                            theme: {},
                            isAddWater: !1,
                            lastIssue: "",
                            moveLockBtnCoord: "",
                            isChangeScale: !1
                        }
                    },
                    computed: ne(ne({}, Object(Ft.c)({
                        drawRuleSetted: function(t) {
                            return t.drawRuleSetted
                        }
                    })), {}, {
                        cacheComSetKey: function() {
                            return "drawRuleComSet" + this.cpType
                        },
                        drawRuleSettedSelf: function() {
                            return this.drawRuleSetted[this.cpType] || {}
                        },
                        lockImg: function() {
                            return this.isLockup ? i("e1db") : i("b1ac")
                        },
                        isIntelGapDisable: function() {
                            return this.intelData.muti < 2
                        },
                        stageW: function() {
                            var t = [142, 142][this.cpType - 1];
                            return Object(l.r)().width * t / 750
                        },
                        colorSelectLeft: function() {
                            return (this.stageW - Object(l.F)(.5)) / 2
                        },
                        isShowLockBtn: function() {
                            return !0
                        },
                        lockBtnCoord: function() {
                            var t = this.drawRuleSettedSelf.lockBtnPost || 0;
                            return this.moveLockBtnCoord ? this.moveLockBtnCoord : 0 === t ? {
                                x: Object(l.F)(3.75) / 2 - Object(l.F)(.2),
                                y: Object(l.r)().height - Object(l.F)(.55)
                            } : 1 === t ? {
                                x: Object(l.F)(.15),
                                y: Object(l.F)(1.6)
                            } : {
                                x: Object(l.F)(3.2),
                                y: Object(l.F)(1.6)
                            }
                        },
                        scale: function() {
                            return this.drawRuleSettedSelf.scaleSize || 1
                        }
                    }),
                    created: function() {
                        this.canvasW = Object(l.r)().width, this.canvasH = Object(l.r)().height - this.toolH, this.initCacheComSet(), ae = Object.assign({}, this.intelData), this.initSetted(!0)
                    },
                    mounted: function() {
                        var t = this;
                        this.$store.dispatch("refreshUserinfo"), this.init(), setTimeout((function() {
                            var e = t.drawRuleSettedSelf.lockBtnPost || 0;
                            t.moveLockBtnCoord = 0 === e ? {
                                x: Object(l.F)(3.75) / 2 - Object(l.F)(.2),
                                y: Object(l.r)().height - Object(l.F)(.55)
                            } : 1 === e ? {
                                x: Object(l.F)(.15),
                                y: Object(l.F)(1.6)
                            } : {
                                x: Object(l.F)(3.2),
                                y: Object(l.F)(1.6)
                            }
                        }), 300)
                    },
                    beforeRouteLeave: function(t, e, i) {
                        i()
                    },
                    activated: function() {
                        this.activatedSum++, this.activatedSum > 1 && (this.$store.dispatch("refreshUserinfo"), this.init())
                    },
                    methods: {
                        setShareConfig: function() {
                            var t = Zt.c.staticAddress;
                            return {
                                title: "画规神器",
                                desc: "大师达人都在用的画规工具",
                                link: window.location.href,
                                imgUrl: t + i("9d64")
                            }
                        },
                        init: function() {
                            var t = this;
                            this.reqPrizeTable((function(e, i, s) {
                                var n = i !== t.lastIssue;
                                t.lastIssue = i;
                                var a = t.formatStage(e, i, s);
                                if (!(n || a || t.isChangeScale)) return t.$closeLoading(), void(t.isLockup && t.lockup(!1));
                                t.isLoadedData = !1, (a || t.isChangeScale) && t.drawBoard && (t.isChangeScale && (t.isChangeScale = !1), t.drawBoard.clear());
                                var o = Object(ee.b)() ? 0 : 150;
                                setTimeout((function() {
                                    t.canvasH = Object(l.r)().height - t.toolH, t.isLockup = !1, t.isLoadedData = !0, t.$nextTick((function() {
                                        t.drawBoard = t.$refs.drawBoard;
                                        var e = t.drawRuleSettedSelf.numType;
                                        t.intelData.numType = "number" == typeof e ? e : 0, t.drawBoard.initCommonSet({
                                            color: t.curColor,
                                            strokeWidth: t.penW[t.curPenType],
                                            numType: t.intelData.numType,
                                            mutipleType: t.intelData.type,
                                            mutipleGap: t.intelData.gap,
                                            mutipleNum: t.intelData.muti,
                                            colorMuti: t.intelData.colorMuti,
                                            isShowDragDot: t.intelData.isShowDragDot,
                                            drawMode: t.curDrawMode
                                        });
                                        var i = t.setShareConfig();
                                        $t.a.updateShareConfig(i), u.a.set("hasUsedDraw", !0), t.$closeLoading()
                                    }))
                                }), o)
                            }))
                        },
                        initSetted: function(t) {
                            var e = this.drawRuleSettedSelf,
                                i = e.isAddWater,
                                s = e.themeType,
                                n = e.numType,
                                a = void 0 === n ? 0 : n,
                                o = e.fontType,
                                r = void 0 === o ? 1 : o;
                            s ? ("boolean" == typeof i && (this.isAddWater = i), t && (this.theme = Rt.a[s], this.drawBoard && this.drawBoard.setTheme(this.theme, a, r))) : this.theme = Rt.a["vip-3"]
                        },
                        resumeThemeRight: function() {
                            var t = this.drawRuleSettedSelf.themeType,
                                e = this.userinfo || {},
                                i = e.vipLevel,
                                s = e.qxcdashi,
                                n = e.plwdashi;
                            if (/vip/.test(t))(!i || i < 1) && this.resumeThemeTypeToCustom();
                            else if (/master/.test(t)) {
                                (1 === Number(this.cpType) ? s : n) || this.resumeThemeTypeToCustom()
                            }
                        },
                        initCacheComSet: function() {
                            var t = u.a.get(this.cacheComSetKey);
                            t && (this.curColor = t.curColor, this.curPenType = t.curPenType, this.intelData = t.intelData)
                        },
                        resumeThemeTypeToCustom: function() {
                            var t = "custom-2",
                                e = this.drawRuleSettedSelf;
                            this.theme = Rt.a[t], this.$store.dispatch("setDrawRuleSetted", Object(a.a)({}, this.cpType, ne(ne({}, e), {}, {
                                themeType: t
                            })))
                        },
                        saveCacheComSet: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            u.a.set(this.cacheComSetKey, ne({
                                curColor: this.curColor,
                                curPenType: this.curPenType,
                                intelData: this.intelData
                            }, t))
                        },
                        toolClose: function() {
                            "seo" === this.$route.query.from && window.history.back(), this.toolCacheJson(), this.handleRouteBack(), this.$nextTick((function() {}))
                        },
                        toolClear: function() {
                            var t = this;
                            this.handleReport("画规标题菜单点击", "清除"), this.$confirm("清除所有绘制内容？", {
                                buttonNames: ["取消", "清除"],
                                confirm: function() {
                                    t.drawBoard.clear()
                                }
                            }), Y()
                        },
                        toolCancel: function() {
                            this.handleReport("画规标题菜单点击", "撤销"), this.drawBoard.cancel()
                        },
                        toolResume: function() {
                            this.handleReport("画规标题菜单点击", "恢复"), this.drawBoard.resume()
                        },
                        toolSaveImg: function() {
                            var t = this;
                            this.handleReport("画规标题菜单点击", "保存"), this.$refs.popSaveDrawRule.show({
                                onSaveLocal: function() {
                                    t.saveImg(t.isAddWater)
                                },
                                onSaveFavorite: function() {
                                    if (t.isLogin) {
                                        var e = [];
                                        t.drawBoard.canvasList.forEach((function(t) {
                                            t.canvas.getObjects().forEach((function(t) {
                                                t && "rectText" === t.drawType && e.push(t.cellTextInfo)
                                            }))
                                        })), t.$refs.popFavoriteDrawRule.show({
                                            cpType: t.cpType,
                                            rectTextInfos: e,
                                            getImgUrl: function() {
                                                var e = Object(n.a)(regeneratorRuntime.mark((function e() {
                                                    var i;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return t.toolCacheJson(), e.next = 3, t.drawBoard.exportImg(t.isAddWater, !1, !1);
                                                            case 3:
                                                                return i = e.sent, e.abrupt("return", i);
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function() {
                                                    return e.apply(this, arguments)
                                                }
                                            }()
                                        })
                                    } else t.$tipLogin()
                                }
                            })
                        },
                        toolShare: function() {
                            this.handleReport("画规标题菜单点击", "分享"), this.saveImg(this.isAddWater, !0)
                        },
                        toolSet: function() {
                            var t = this;
                            this.drawBoard && this.drawBoard.calcEmptyCanvas();
                            var e = this.drawBoard && this.drawBoard.canvasEmptyList.length,
                                i = this.drawBoard && this.drawBoard.canvasList.length;
                            this.$refs.drawRuleSet.show({
                                cpType: this.cpType,
                                isDrawboardClear: e === i,
                                intelData: this.intelData,
                                sure: function(e) {
                                    t.intelData = e.intelData, t.handleCloseSelector(), t.handleCloseIntelSet(!0)
                                },
                                cancel: function() {}
                            })
                        },
                        toolCacheJson: function() {
                            var t = this.drawBoard && this.drawBoard.exportJson && this.drawBoard.exportJson instanceof Function ? this.drawBoard.exportJson() : "",
                                e = this.drawBoard.curScrollBottom,
                                i = "drawRuleJson" + this.cpType;
                            u.a.set(i, {
                                lastIssue: this.lastIssue,
                                jsons: t,
                                scale: this.scale,
                                fixedScrollBottom: e
                            })
                        },
                        lockup: function(t) {
                            this.isLockup = this.drawBoard.lockup(t)
                        },
                        drawMode: function(t) {
                            this.drawBoard.setDrawMode(t)
                        },
                        setMutiple: function(t) {
                            this.drawBoard.setCommon({
                                mutipleNum: t
                            })
                        },
                        saveImg: function(t, e) {
                            var i = this;
                            this.$loading("图片生成中", !0), setTimeout(Object(n.a)(regeneratorRuntime.mark((function s() {
                                var n;
                                return regeneratorRuntime.wrap((function(s) {
                                    for (;;) switch (s.prev = s.next) {
                                        case 0:
                                            return i.toolCacheJson(), s.next = 3, i.drawBoard.exportImg(t, e);
                                        case 3:
                                            n = s.sent, i.$closeLoading(!0), i.$router.push({
                                                path: "/drawRuleToImg",
                                                query: {
                                                    imgUrl: n,
                                                    type: 0
                                                }
                                            });
                                        case 6:
                                        case "end":
                                            return s.stop()
                                    }
                                }), s)
                            }))), 400)
                        },
                        handleCloseGuide: function() {
                            this.hasUsedDraw = !0
                        },
                        handleLockup: function(t) {
                            this.lockup(t), this.$msgbox.show(this.isLockup ? "滚动模式" : "画规模式"), Y()
                        },
                        handleMoveLockBtn: function(t) {
                            var e = t.touches[0],
                                i = e.pageX,
                                s = e.pageY,
                                n = {
                                    x: [0, Object(l.F)(3.35)],
                                    y: [50, Object(l.r)().height - Object(l.F)(.4)]
                                },
                                a = Math.min(Math.max(i, n.x[0]), n.x[1]),
                                o = Math.min(Math.max(s, n.y[0]), n.y[1]);
                            this.moveLockBtnCoord = {
                                x: a,
                                y: o
                            }
                        },
                        handleShowColors: function() {
                            this.isShowColorSelect = !this.isShowColorSelect, this.isShowColorSelect && (this.isShowModeSelect = !1)
                        },
                        handleSelectColor: function(t) {
                            this.handleReport("画规颜色选项点击", t), this.curColor = t, this.saveCacheComSet(), this.drawBoard.setCommon({
                                color: t
                            }), this.isShowColorSelect = !1
                        },
                        handleSelectPen: function(t) {
                            this.handleReport("画规颜色选项点击", ["粗笔", "中笔", "细笔"][t]), this.curPenType = t, this.saveCacheComSet(), this.drawBoard.setCommon({
                                strokeWidth: this.penW[t]
                            }), this.isShowColorSelect = !1
                        },
                        handleShowModeSelect: function() {
                            this.handleReport("画规绘制选项点击"), this.isShowModeSelect = !this.isShowModeSelect, this.isShowModeSelect && (this.isShowColorSelect = !1), Y()
                        },
                        handleCloseSelector: function() {
                            this.isShowColorSelect = !1, this.isShowModeSelect = !1
                        },
                        handleSelectDrawMode: function(t) {
                            this.curDrawMode = t, this.drawBoard.setDrawMode(t), this.isShowModeSelect = !1, this.lockup(!1), this.handleReport("画规绘制选项点击", this.drawModes[t].name)
                        },
                        handleSelectNum: function(t) {
                            this.handleCloseNumDialog(), this.drawBoard.selectNum(String(t))
                        },
                        handleShowNumDialog: function(t) {
                            this.$refs.popDrawNumSelector.show({
                                popCellIndex: t.index,
                                color: this.curColor,
                                onClose: t.onClose
                            })
                        },
                        handleCloseNumDialog: function() {
                            this.$refs.popDrawNumSelector.close()
                        },
                        handleConfirmDrawNum: function(t) {
                            "object" === Object(s.a)(t) ? this.drawBoard.selectRectText(t) : this.drawBoard.selectNum(String(t))
                        },
                        handleIntelShowDragDot: function() {
                            this.intelData.isShowDragDot = !this.intelData.isShowDragDot
                        },
                        handleIntelColorMuti: function(t) {
                            t.target.classList.contains("item") && (this.intelData.colorMuti = 1 === parseInt(t.target.dataset.v))
                        },
                        handleIntelType: function(t) {
                            t.target.classList.contains("item") && (this.intelData.type = parseInt(t.target.dataset.v))
                        },
                        handleIntelGap: function(t) {
                            t.target.classList.contains("item") && this.intelData.muti > 1 && (this.intelData.gap = parseInt(t.target.dataset.v))
                        },
                        handleIntelMuti: function(t) {
                            t.target.classList.contains("item") && (this.intelData.muti = parseInt(t.target.dataset.v), 1 === this.intelData.muti && (this.intelData.colorMuti = !1))
                        },
                        handleCloseIntelSet: function(t) {
                            var e = this;
                            this.isShowIntelSetW = !1, setTimeout((function() {
                                e.isShowIntelSet = !1
                            }), 200), t ? (this.drawBoard.setCommon({
                                mutipleType: this.intelData.type,
                                mutipleGap: this.intelData.gap,
                                mutipleNum: this.intelData.muti,
                                colorMuti: this.intelData.colorMuti,
                                isShowDragDot: this.intelData.isShowDragDot
                            }), ae = Object.assign({}, this.intelData), this.saveCacheComSet()) : (this.drawBoard.setCommon({
                                mutipleType: ae.type,
                                mutipleGap: ae.gap,
                                mutipleNum: ae.muti,
                                colorMuti: ae.colorMuti,
                                isShowDragDot: ae.isShowDragDot
                            }), Object.assign(this.intelData, ae))
                        },
                        handleShowIntelSet: function() {
                            this.isShowIntelSet = !0, this.handleCloseSelector()
                        },
                        handleDbclick: function(t) {
                            t.preventDefault()
                        },
                        formatStage: function(t, e, i) {
                            var s = this,
                                n = this.drawRuleSettedSelf.stageLength || 60,
                                a = n !== this.stages.length - 6;
                            t = t.slice(0, n).reverse();
                            var o = function(t, e, i, s, n) {
                                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
                                    return {
                                        selectCell: i,
                                        issue: t,
                                        localIssue: e,
                                        pubtime: a,
                                        sum: s,
                                        one: n[0] || "",
                                        two: n[1] || "",
                                        three: n[2] || "",
                                        four: n[3] || "",
                                        five: n[4] || "",
                                        six: n[5] || "",
                                        seven: n[6] || ""
                                    }
                                },
                                r = t.map((function(t) {
                                    var e = t.num.substr(0, 6),
                                        i = t.num.substr(6),
                                        n = e.split("");
                                    i && n.push(i);
                                    var a = String("1" === s.cpType ? t.issue : t.countryIssue),
                                        r = String(parseInt(t.sum));
                                    return o(a, String(t.issue), !1, r, n, t.pubtime)
                                })),
                                c = i ? i.issue : e;
                            r.push(o(e, c, !0, "", []));
                            for (var l = 0; l < 5; l++) r.push(o("", "", !1, "", []));
                            return this.stages = r, a
                        },
                        reqPrizeTable: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                                var i, s, n, a, o;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.$loading(), t.next = 3, Kt.a.prizeTable({
                                                cpType: this.cpType
                                            });
                                        case 3:
                                            if (i = t.sent, s = i.result, n = s.data || [], a = String(Number(n[0].issue) + 1), "2" !== this.cpType) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 10, this.reqStage("2");
                                        case 10:
                                            o = t.sent, a = o.countryIssue;
                                        case 12:
                                            e(n, a, o);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        reqStage: function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                                var i, s;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, te.a.lastestStage({
                                                cpType: e
                                            });
                                        case 2:
                                            return i = t.sent, s = i.result, t.abrupt("return", s);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    },
                    watch: {
                        isShowNumSelect: function(t) {
                            var e = this;
                            setTimeout((function() {
                                e.isShowNumSelectW = t
                            }), 10)
                        },
                        isShowIntelSet: function(t) {
                            var e = this;
                            setTimeout((function() {
                                e.isShowIntelSetW = t
                            }), 10)
                        },
                        isIntelGapDisable: function(t) {
                            t && (this.intelData.gap = 0)
                        },
                        drawRuleSettedSelf: {
                            deep: !0,
                            handler: function(t, e) {
                                var i = t.themeType !== e.themeType || t.numType !== e.numType || t.fontType !== e.fontType;
                                this.initSetted(i), t.lockBtnPost !== e.lockBtnPost && (this.moveLockBtnCoord = ""), t.scaleSize !== e.scaleSize && (this.isChangeScale = !0)
                            }
                        },
                        userinfo: {
                            deep: !0,
                            handler: function(t, e) {
                                (t.vipLevel !== e.vipLevel || t.qxcdashi !== e.qxcdashi || t.plwdashi !== e.plwdashi) && this.resumeThemeRight()
                            }
                        }
                    }
                },
                re = (i("d05a"), Object(Yt.a)(oe, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "container",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        on: {
                            dblclick: t.handleDbclick
                        }
                    }, [s("div", {
                        staticClass: "tool",
                        style: {
                            height: t.toolH + "px"
                        }
                    }, [s("div", {
                        staticClass: "wrapper flex",
                        style: {
                            height: t.toolH + "px",
                            background: t.theme.toolBg,
                            color: t.theme.toolColor
                        }
                    }, [s("div", {
                        staticClass: "item flex flex-column",
                        on: {
                            click: t.toolClose
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), s("span", [t._v("关闭")])]), s("div", {
                        staticClass: "splitLine",
                        style: {
                            background: t.theme.toolColor
                        }
                    }), s("div", {
                        staticClass: "item flex flex-column opBtn",
                        on: {
                            click: t.toolCancel
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), s("span", [t._v("撤销")])]), s("div", {
                        staticClass: "item flex flex-column opBtn",
                        on: {
                            click: t.toolResume
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), s("span", [t._v("恢复")])]), s("div", {
                        staticClass: "item flex flex-column opBtn",
                        on: {
                            click: t.toolClear
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), s("span", [t._v("清除")])]), s("div", {
                        staticClass: "item flex flex-column opBtn",
                        on: {
                            click: t.toolShare
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), s("span", [t._v("分享")])]), s("div", {
                        staticClass: "item flex flex-column opBtn",
                        on: {
                            click: t.toolSaveImg
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), s("span", [t._v("保存")])]), s("div", {
                        staticClass: "item flex flex-column opBtn",
                        on: {
                            click: t.toolSet
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")]), s("span", [t._v("设置")])])])]), t.isLoadedData ? s("DrawBoard", {
                        ref: "drawBoard",
                        attrs: {
                            canvasW: t.canvasW,
                            canvasH: t.canvasH,
                            stages: t.stages,
                            cpType: t.cpType,
                            themeInfo: t.theme,
                            scale: t.scale
                        },
                        on: {
                            handleShowNumDialog: t.handleShowNumDialog,
                            handleCloseSelector: t.handleCloseSelector
                        }
                    }) : t._e(), t.isShowLockBtn ? s("div", {
                        staticClass: "lockBtn flex",
                        style: {
                            left: t.lockBtnCoord.x + "px",
                            top: t.lockBtnCoord.y + "px"
                        },
                        on: {
                            click: t.handleLockup,
                            touchmove: function(e) {
                                return e.preventDefault(), t.handleMoveLockBtn.apply(null, arguments)
                            }
                        }
                    }, [s("img", {
                        attrs: {
                            src: t.lockImg
                        }
                    })]) : t._e(), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLockup,
                            expression: "!isLockup"
                        }],
                        staticClass: "colorSelect",
                        class: {
                            show: t.isShowColorSelect
                        },
                        style: {
                            left: t.colorSelectLeft + "px"
                        }
                    }, [s("div", {
                        staticClass: "button flex",
                        on: {
                            click: t.handleShowColors
                        }
                    }, [s("span", {
                        staticClass: "flex",
                        style: {
                            background: t.curColor
                        }
                    }, [0 === t.curPenType ? s("img", {
                        attrs: {
                            src: i("2326")
                        }
                    }) : t._e(), 1 === t.curPenType ? s("img", {
                        attrs: {
                            src: i("48d6")
                        }
                    }) : t._e(), 2 === t.curPenType ? s("img", {
                        attrs: {
                            src: i("efec")
                        }
                    }) : t._e()])]), s("div", {
                        staticClass: "colorItems",
                        on: {
                            touchmove: function(t) {
                                t.stopPropagation()
                            }
                        }
                    }, t._l(t.colors, (function(e) {
                        return s("div", {
                            key: e,
                            staticClass: "item flex",
                            style: {
                                background: e
                            },
                            on: {
                                click: function(i) {
                                    return t.handleSelectColor(e)
                                }
                            }
                        }, [t.curColor === e ? s("img", {
                            attrs: {
                                src: i("349e")
                            }
                        }) : t._e()])
                    })), 0), s("div", {
                        staticClass: "penTypes"
                    }, [s("div", {
                        staticClass: "wrapper flex justify-start"
                    }, [s("div", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectPen(0)
                            }
                        }
                    }, [s("span", {
                        staticClass: "wrap flex",
                        style: {
                            background: 0 === t.curPenType ? t.curColor : "transparent"
                        }
                    }, [s("img", {
                        attrs: {
                            src: i("2326"),
                            alt: ""
                        }
                    })])]), s("div", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectPen(1)
                            }
                        }
                    }, [s("span", {
                        staticClass: "wrap flex",
                        style: {
                            background: 1 === t.curPenType ? t.curColor : "transparent"
                        }
                    }, [s("img", {
                        attrs: {
                            src: i("48d6"),
                            alt: ""
                        }
                    })])]), s("div", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectPen(2)
                            }
                        }
                    }, [s("span", {
                        staticClass: "wrap flex",
                        style: {
                            background: 2 === t.curPenType ? t.curColor : "transparent"
                        }
                    }, [s("img", {
                        attrs: {
                            src: i("efec"),
                            alt: ""
                        }
                    })])])])])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLockup,
                            expression: "!isLockup"
                        }],
                        staticClass: "drawSelect",
                        on: {
                            touchmove: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, t._l(Object.keys(t.drawModes), (function(e) {
                        return s("div", {
                            key: e,
                            class: ["item flex justify-end", t.isShowModeSelect ? "show" : ""]
                        }, [s("div", {
                            staticClass: "text flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectDrawMode(e)
                                }
                            }
                        }, [t._v(t._s(t.drawModes[e].name))]), s("div", {
                            staticClass: "icon flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectDrawMode(e)
                                }
                            }
                        }, [s("img", {
                            attrs: {
                                src: t.drawModes[e].img
                            }
                        })])])
                    })), 0), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLockup,
                            expression: "!isLockup"
                        }],
                        staticClass: "drawSelect intelSet",
                        on: {
                            touchmove: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, [s("div", {
                        class: ["item flex justify-end", t.isShowModeSelect ? "show" : ""]
                    }, [s("div", {
                        staticClass: "textSet flex justify-start",
                        on: {
                            click: t.toolSet
                        }
                    }, [s("span", [t._v("设置")]), s("span", {
                        staticClass: "line"
                    })]), s("div", {
                        staticClass: "icon flex",
                        on: {
                            click: t.handleShowModeSelect
                        }
                    }, [s("img", {
                        attrs: {
                            src: t.drawModes[t.curDrawMode].img
                        }
                    })])])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShowNumSelect,
                            expression: "isShowNumSelect"
                        }],
                        class: {
                            "numSelect flex": !0, show: t.isShowNumSelectW
                        },
                        on: {
                            click: function(e) {
                                return e.target !== e.currentTarget ? null : t.handleCloseNumDialog.apply(null, arguments)
                            },
                            touchmove: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, [t.isShowTotalNumSelect ? s("div", {
                        staticClass: "wrapper totalNumSelect"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._v("选择号码")]), s("div", {
                        staticClass: "numbers flex justify-start"
                    }, t._l([0, 1, 2, 3, 4, 5, 6], (function(e) {
                        return s("i", {
                            key: e + "totalNum",
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "numbers flex justify-start"
                    }, t._l([7, 8, 9, 10, 11, 12, 13], (function(e) {
                        return s("i", {
                            key: e + "totalNum",
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "numbers flex justify-start"
                    }, t._l([14, 15, 16, 17, 18, 19, 20], (function(e) {
                        return s("i", {
                            key: e + "totalNum",
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "numbers flex justify-start"
                    }, t._l([21, 22, 23, 24, 25, 26, 27], (function(e) {
                        return s("i", {
                            key: e + "totalNum",
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "numbers flex justify-start"
                    }, t._l([28, 29, 30, 31, 32, 33, 34], (function(e) {
                        return s("i", {
                            key: e + "totalNum",
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "numbers flex justify-start"
                    }, t._l([35, 36], (function(e) {
                        return s("i", {
                            key: e + "totalNum",
                            staticClass: "item flex",
                            on: {
                                click: function(i) {
                                    return t.handleSelectNum(e)
                                }
                            }
                        }, [t._v(t._s(e))])
                    })), 0), s("div", {
                        staticClass: "title"
                    }, [t._v("选择单双大小")]), s("div", {
                        staticClass: "numbers dubble flex justify-start"
                    }, [s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("单")
                            }
                        }
                    }, [t._v("单")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("双")
                            }
                        }
                    }, [t._v("双")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("大")
                            }
                        }
                    }, [t._v("大")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("小")
                            }
                        }
                    }, [t._v("小")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("X")
                            }
                        }
                    }, [t._v("X")])]), s("span", {
                        staticClass: "close",
                        on: {
                            click: t.handleCloseNumDialog
                        }
                    }, [s("img", {
                        attrs: {
                            src: i("2093")
                        }
                    })])]) : s("div", {
                        staticClass: "wrapper"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._v("选择号码")]), s("div", {
                        staticClass: "numbers flex"
                    }, [s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(0)
                            }
                        }
                    }, [t._v("0")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(1)
                            }
                        }
                    }, [t._v("1")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(2)
                            }
                        }
                    }, [t._v("2")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(3)
                            }
                        }
                    }, [t._v("3")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(4)
                            }
                        }
                    }, [t._v("4")])]), s("div", {
                        staticClass: "numbers flex"
                    }, [s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(5)
                            }
                        }
                    }, [t._v("5")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(6)
                            }
                        }
                    }, [t._v("6")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(7)
                            }
                        }
                    }, [t._v("7")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(8)
                            }
                        }
                    }, [t._v("8")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum(9)
                            }
                        }
                    }, [t._v("9")])]), s("div", {
                        staticClass: "title"
                    }, [t._v("选择对数")]), s("div", {
                        staticClass: "numbers dubble flex justify-start"
                    }, [s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("0/5")
                            }
                        }
                    }, [t._v("0/5")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("1/6")
                            }
                        }
                    }, [t._v("1/6")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("2/7")
                            }
                        }
                    }, [t._v("2/7")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("3/8")
                            }
                        }
                    }, [t._v("3/8")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("4/9")
                            }
                        }
                    }, [t._v("4/9")])]), s("div", {
                        staticClass: "title"
                    }, [t._v("选择单双大小")]), s("div", {
                        staticClass: "numbers dubble flex justify-start"
                    }, [s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("单")
                            }
                        }
                    }, [t._v("单")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("双")
                            }
                        }
                    }, [t._v("双")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("大")
                            }
                        }
                    }, [t._v("大")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("小")
                            }
                        }
                    }, [t._v("小")]), s("i", {
                        staticClass: "item flex",
                        on: {
                            click: function(e) {
                                return t.handleSelectNum("X")
                            }
                        }
                    }, [t._v("X")])]), s("span", {
                        staticClass: "close",
                        on: {
                            click: t.handleCloseNumDialog
                        }
                    }, [s("img", {
                        attrs: {
                            src: i("2093")
                        }
                    })])])]), s("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isShowIntelSet,
                            expression: "isShowIntelSet"
                        }],
                        class: {
                            "intelSetting flex items-end": !0, show: t.isShowIntelSetW
                        },
                        on: {
                            click: function(e) {
                                return e.target !== e.currentTarget ? null : t.handleCloseIntelSet()
                            },
                            touchmove: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, [s("div", {
                        staticClass: "wrapper"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._v("智能笔设置")]), s("div", {
                        staticClass: "row flex justify-between"
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("开关")]), s("span", {
                        staticClass: "tipText flex flex1 justify-start"
                    }, [t._v("号码连接的拖拽点")]), s("div", {
                        staticClass: "end flex"
                    }, [s("img", {
                        staticClass: "dragDot",
                        attrs: {
                            src: i("f6f2")
                        }
                    }), s("span", {
                        class: {
                            btnSwitch: !0, on: t.intelData.isShowDragDot
                        },
                        on: {
                            click: t.handleIntelShowDragDot
                        }
                    }, [s("i")])])]), s("div", {
                        staticClass: "row flex justify-start",
                        on: {
                            click: t.handleIntelColorMuti
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("颜色")]), s("div", {
                        staticClass: "btns flex"
                    }, t._l(["单色笔", "多色笔"], (function(e, i) {
                        return s("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 0 === i || t.intelData.muti > 1,
                                expression: "index === 0 || intelData.muti > 1"
                            }],
                            key: e,
                            class: {
                                "item flex": !0, on: Number(t.intelData.colorMuti) === i
                            },
                            attrs: {
                                "data-v": i
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        staticClass: "row flex justify-start",
                        on: {
                            click: t.handleIntelType
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("线形")]), s("div", {
                        staticClass: "btns flex"
                    }, t._l(["上曲线", "下曲线", "直线"], (function(e, i) {
                        return s("div", {
                            key: e,
                            class: {
                                "item flex": !0, on: t.intelData.type === i
                            },
                            attrs: {
                                "data-v": i
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        class: {
                            "row flex justify-start": !0, disable: t.isIntelGapDisable
                        },
                        on: {
                            click: t.handleIntelGap
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("间隔")]), s("div", {
                        staticClass: "btns flex btnsEq"
                    }, t._l([0, 1, 2, 3, 4], (function(e) {
                        return s("div", {
                            key: e,
                            class: {
                                "item flex": !0, on: t.intelData.gap === e
                            },
                            attrs: {
                                "data-v": e
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e) + " 期\n\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        staticClass: "row flex justify-start",
                        on: {
                            click: t.handleIntelMuti
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("笔数")]), s("div", {
                        staticClass: "btns flex btnsEq"
                    }, t._l([1, 2, 3, 4, 5], (function(e) {
                        return s("div", {
                            key: e,
                            class: {
                                "item flex": !0, on: t.intelData.muti === e
                            },
                            attrs: {
                                "data-v": e
                            }
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e) + " 笔\n\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        staticClass: "button flex",
                        on: {
                            click: function(e) {
                                return t.handleCloseIntelSet(!0)
                            }
                        }
                    }, [t._v("确定")])])]), t.hasUsedDraw ? t._e() : s("div", {
                        staticClass: "fristGuide flex flex-column"
                    }, [s("div", {
                        staticClass: "mask1",
                        style: {
                            height: t.toolH + "px"
                        }
                    }), s("div", {
                        staticClass: "mask2 flex flex1"
                    }, [s("div", {
                        staticClass: "left flex flex-column",
                        style: {
                            width: t.stageW + "px"
                        }
                    }, [s("img", {
                        staticClass: "img1",
                        attrs: {
                            src: i("87aa")
                        }
                    }), s("img", {
                        staticClass: "img2",
                        attrs: {
                            src: i("548f")
                        }
                    })]), s("div", {
                        staticClass: "right flex1"
                    }, [s("div", {
                        staticClass: "text1 flex flex-column"
                    }, [t._v("期号列表可上下移动")]), s("div", {
                        staticClass: "text2 flex",
                        on: {
                            click: t.handleCloseGuide
                        }
                    }, [t._v("知道了")])])])]), s("PopDrawNumSelector", {
                        ref: "popDrawNumSelector",
                        on: {
                            handleConfirmDrawNum: t.handleConfirmDrawNum
                        }
                    }), s("PopSaveDrawRule", {
                        ref: "popSaveDrawRule"
                    }), s("PopFavoriteDrawRule", {
                        ref: "popFavoriteDrawRule"
                    }), s("DrawRuleSet", {
                        ref: "drawRuleSet"
                    })], 1)
                }), [], !1, null, "2ae11e36", null));
            e.default = re.exports
        },
        dcfb: function(t, e, i) {
            "use strict";
            var s = (i("8e6e"), i("ac6a"), i("456d"), i("6762"), i("2fdb"), i("bd86")),
                n = i("26e2"),
                a = i("7e6f"),
                o = i("2f62"),
                r = i("c9d9");

            function c(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(i), !0).forEach((function(e) {
                        Object(s.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var u = new function() {
                    return {
                        leftList: [{
                            id: 0,
                            title: "奖表",
                            isSelect: !0
                        }, {
                            id: 1,
                            title: "通用",
                            isSelect: !1
                        }, {
                            id: 2,
                            title: "皮肤",
                            isSelect: !1
                        }, {
                            id: 3,
                            title: "字体间距",
                            isSelect: !1
                        }, {
                            id: 4,
                            title: "号码样式",
                            isSelect: !1
                        }, {
                            id: 5,
                            title: "智能线",
                            isSelect: !1
                        }],
                        right: {
                            themeList: [
                                [{
                                    id: 1,
                                    title: "蓝",
                                    type: "custom-1"
                                }, {
                                    id: 2,
                                    title: "绿",
                                    type: "custom-2"
                                }, {
                                    id: 3,
                                    title: "黑",
                                    type: "custom-3"
                                }, {
                                    id: 4,
                                    title: "白",
                                    type: "custom-4"
                                }],
                                [{
                                    id: 5,
                                    title: "素棕",
                                    type: "vip-1"
                                }, {
                                    id: 6,
                                    title: "金黄",
                                    type: "vip-2"
                                }, {
                                    id: 7,
                                    title: "浅蓝",
                                    type: "vip-3"
                                }, {
                                    id: 8,
                                    title: "淡白",
                                    type: "vip-4"
                                }],
                                [{
                                    id: 9,
                                    title: "玫瑰",
                                    type: "master-1"
                                }, {
                                    id: 10,
                                    title: "百合",
                                    type: "master-2"
                                }, {
                                    id: 11,
                                    title: "牡丹",
                                    type: "master-3"
                                }, {
                                    id: 12,
                                    title: "杜鹃",
                                    type: "master-4"
                                }]
                            ],
                            p3f3ThemeList: [
                                [{
                                    id: 1,
                                    title: "绿",
                                    type: "custom-2"
                                }, {
                                    id: 2,
                                    title: "红",
                                    type: "master-3"
                                }, {
                                    id: 3,
                                    title: "黑",
                                    type: "custom-3"
                                }, {
                                    id: 4,
                                    title: "金",
                                    type: "custom-6"
                                }]
                            ]
                        },
                        titles: {
                            1: "七星彩",
                            2: "排列五",
                            4: "福彩3D",
                            5: "排列三"
                        }
                    }
                },
                h = ["custom-2", "vip-3", "master-3", "custom-6"],
                f = {
                    name: "Ch5DrawRuleSet",
                    mixins: [a.a],
                    components: {
                        Popup: n.a
                    },
                    data: function() {
                        return {
                            leftList: u.leftList,
                            themeList: u.right.themeList,
                            titles: u.titles,
                            p3f3ThemeList: u.right.p3f3ThemeList,
                            selectLeftIndex: 0,
                            isAddWater: !1,
                            isShowDate: !0,
                            isShowLock: !0,
                            isShowColorCircle: !0,
                            themeType: "",
                            themeTypeTemp: "",
                            numType: 0,
                            stageLength: 60,
                            fontType: 1,
                            splitLineType: 2,
                            lockBtnPost: 0,
                            scaleSize: 1,
                            isDrawboardClear: !1,
                            issueType: 0,
                            intelData: {
                                type: 2,
                                gap: 0,
                                muti: 1,
                                colorMuti: !1,
                                isShowDragDot: !0,
                                numType: 0
                            },
                            cpType: "1",
                            CPTYPE: r.a,
                            sure: function() {},
                            cancel: function() {},
                            leftThemeType: "",
                            rightThemeType: ""
                        }
                    },
                    computed: l(l({}, Object(o.c)({
                        drawRuleSetted: function(t) {
                            return t.drawRuleSetted
                        }
                    })), {}, {
                        vip: function() {
                            return this.userinfo.vip || 0
                        },
                        isIntelGapDisable: function() {
                            return this.intelData.muti < 2
                        },
                        isP3AndF3: function() {
                            return ["4", "5"].includes(this.cpType)
                        },
                        themeImg: function() {
                            var t = ["7", "5"][(this.cpType > 2 ? this.cpType - 2 : this.cpType) - 1] + this.themeTypeShow;
                            return i("3997")("./".concat(t, ".png"))
                        },
                        themeTypeShow: function() {
                            return this.themeTypeTemp || this.themeType
                        },
                        numTypeImg: function() {
                            var t = "numType" + this.numType;
                            return i("3997")("./".concat(t, ".png"))
                        }
                    }),
                    mounted: function() {},
                    methods: {
                        show: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.cpType = e.cpType, this.cpType !== r.a.QI && (this.selectLeftIndex = 1), this.sure = e.sure, this.cancel = e.cancel, this.isDrawboardClear = e.isDrawboardClear, this.intelData = e.intelData, this.$refs.popup.handleShow({
                                onShow: function() {
                                    t.sureCallBack()
                                },
                                onClose: function() {
                                    t.sureCallBack()
                                }
                            }), this.$nextTick((function() {
                                t.initData()
                            }))
                        },
                        initData: function() {
                            if (this.$store.dispatch("refreshUserinfo"), this.drawRuleSetted) {
                                var t = this.drawRuleSetted[this.cpType];
                                if (t) {
                                    var e = t.isAddWater,
                                        i = t.isShowDate,
                                        s = t.isShowLock,
                                        n = t.isShowColorCircle,
                                        a = t.themeType,
                                        o = t.stageLength,
                                        r = t.numType,
                                        c = t.fontType,
                                        l = t.splitLineType,
                                        u = t.lockBtnPost,
                                        f = t.scaleSize,
                                        d = t.leftThemeType,
                                        p = t.rightThemeType,
                                        v = t.issueType;
                                    this.isAddWater = "boolean" != typeof e || e, this.isShowDate = "boolean" != typeof i || i, this.isShowLock = "boolean" != typeof s || s, this.isShowColorCircle = "boolean" != typeof n || n, this.stageLength = o || 60;
                                    var m = h[{
                                        1: 0,
                                        2: 1,
                                        5: 2,
                                        4: 3
                                    }[this.cpType]];
                                    this.themeType = a || m, this.leftThemeType = d || m, this.rightThemeType = p || m, this.numType = r || 0, this.fontType = "number" == typeof c ? c : 1, this.splitLineType = l || 0, this.lockBtnPost = u || 0, this.scaleSize = f || 1, this.issueType = v || 0
                                } else this.setCustormThemeType()
                            } else this.setCustormThemeType()
                        },
                        setCustormThemeType: function() {
                            var t = h[{
                                1: 0,
                                2: 1,
                                5: 2,
                                4: 3
                            }[this.cpType]];
                            this.themeType = t, this.leftThemeType = t, this.rightThemeType = t
                        },
                        handleIntelMuti: function(t) {
                            t.target.classList.contains("item") && (this.intelData.muti = parseInt(t.target.dataset.v), 1 === this.intelData.muti && (this.intelData.colorMuti = !1, this.intelData.gap = 0))
                        },
                        handleIntelGap: function(t) {
                            t.target.classList.contains("item") && this.intelData.muti > 1 && (this.intelData.gap = parseInt(t.target.dataset.v))
                        },
                        handleIntelType: function(t) {
                            t.target.classList.contains("item") && (this.intelData.type = parseInt(t.target.dataset.v))
                        },
                        handleIntelColorMuti: function(t) {
                            t.target.classList.contains("item") && this.intelData.muti > 1 && (this.intelData.colorMuti = 1 === parseInt(t.target.dataset.v))
                        },
                        handleIntelShowDragDot: function() {
                            this.intelData.isShowDragDot = !this.intelData.isShowDragDot
                        },
                        handleLeftItem: function(t) {
                            this.selectLeftIndex = t
                        },
                        setDrawRuleSetted: function() {
                            this.$store.dispatch("setDrawRuleSetted", Object(s.a)({}, this.cpType, {
                                isAddWater: this.isAddWater,
                                isShowDate: this.isShowDate,
                                isShowLock: this.isShowLock,
                                themeType: this.themeType,
                                isShowColorCircle: this.isShowColorCircle,
                                numType: this.numType,
                                fontType: this.fontType,
                                splitLineType: this.splitLineType,
                                scaleSize: this.scaleSize,
                                stageLength: this.stageLength,
                                lockBtnPost: this.lockBtnPost,
                                leftThemeType: this.leftThemeType,
                                rightThemeType: this.rightThemeType,
                                issueType: this.issueType
                            }))
                        },
                        handleSetWater: function() {
                            var t = this;
                            1 !== parseInt(this.vip) ? (this.$confirm("开通钻石会员才能关闭水印噢", {
                                buttonNames: ["取消", "了解钻石会员"],
                                confirm: function() {
                                    t.$router.push("/superVip")
                                }
                            }), this.isAddWater = !1) : this.isAddWater = !this.isAddWater, this.setDrawRuleSetted()
                        },
                        handleSetDateShow: function() {
                            this.isShowDate = !this.isShowDate, this.setDrawRuleSetted()
                        },
                        handleSetLockShow: function() {
                            this.isShowLock = !this.isShowLock, this.setDrawRuleSetted()
                        },
                        handleSetColorCircle: function() {
                            this.isShowColorCircle = !this.isShowColorCircle, this.setDrawRuleSetted()
                        },
                        sureCallBack: function() {
                            this.sure && this.sure({
                                intelData: this.intelData
                            })
                        },
                        handleSetStageLength: function(t) {
                            var e = this;
                            if (this.stageLength !== t) {
                                if (this.isDrawboardClear) return this.stageLength = t, this.setDrawRuleSetted(), void this.sureCallBack();
                                this.$confirm("切换期数，会清空当前画板数据，确定切换吗？", {
                                    buttonNames: ["取消", "确定"],
                                    confirm: function() {
                                        e.stageLength = t, e.setDrawRuleSetted(), e.isDrawboardClear = !0, e.sureCallBack()
                                    }
                                })
                            }
                        },
                        handleSetNumType: function(t) {
                            this.numType = t, this.setDrawRuleSetted()
                        },
                        handleSetFontType: function(t) {
                            this.fontType = t, this.setDrawRuleSetted()
                        },
                        handleSetIssueType: function(t) {
                            this.issueType = t, this.setDrawRuleSetted()
                        },
                        handleSetSplitLineType: function(t) {
                            this.splitLineType = t, this.setDrawRuleSetted()
                        },
                        handleSetLockBtnPost: function(t) {
                            this.lockBtnPost = t, this.setDrawRuleSetted()
                        },
                        handleSetScaleSize: function(t) {
                            var e = this;
                            if (this.scaleSize !== t) {
                                if (this.isDrawboardClear) return this.scaleSize = t, this.setDrawRuleSetted(), void this.sureCallBack();
                                this.$confirm("切换画板缩放比例，会清空当前画板数据，确定切换吗？", {
                                    buttonNames: ["取消", "确定"],
                                    confirm: function() {
                                        e.scaleSize = t, e.setDrawRuleSetted(), e.isDrawboardClear = !0, e.sureCallBack()
                                    }
                                })
                            }
                        },
                        handleSelectTheme: function(t) {
                            this.handleReport("画规设置皮肤点击", t), this.themeTypeTemp = t, this.themeType = t, this.setDrawRuleSetted()
                        },
                        handleSelectF3p3Theme: function(t, e) {
                            this.handleReport("画规设置皮肤点击", e), 0 === t ? this.leftThemeType = e : this.rightThemeType = e, this.setDrawRuleSetted()
                        },
                        handleToVip: function() {
                            this.isLogin ? this.$router.push("/vip") : this.$tipLogin()
                        }
                    }
                },
                d = (i("48f9"), i("2877")),
                p = Object(d.a)(f, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("Popup", {
                        ref: "popup",
                        staticClass: "popup flex flex-column justify-end",
                        attrs: {
                            type: "slideUp",
                            prevent: "true"
                        }
                    }, [s("div", {
                        staticClass: "wrap flex flex-column justify-start"
                    }, [s("span", {
                        staticClass: "title"
                    }, [t._v(t._s(t.titles[t.cpType]) + "设置")]), s("div", {
                        staticClass: "content flex justify-start items-start"
                    }, [s("div", {
                        staticClass: "left flex flex-column justify-start"
                    }, t._l(t.leftList, (function(e, i) {
                        return s("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.CPTYPE.QI == t.cpType && 0 == i || 0 != i,
                                expression: "(CPTYPE.QI == cpType && index == 0) || index != 0"
                            }],
                            key: i,
                            staticClass: "item flex",
                            class: {
                                on: t.selectLeftIndex == i
                            },
                            on: {
                                click: function(e) {
                                    return t.handleLeftItem(i)
                                }
                            }
                        }, [t.selectLeftIndex == i ? s("div", {
                            staticClass: "line"
                        }) : t._e(), s("span", {
                            class: {
                                on: t.selectLeftIndex == i
                            }
                        }, [t._v(t._s(e.title))])])
                    })), 0), s("div", {
                        staticClass: "right flex flex-column justify-start"
                    }, [0 == t.selectLeftIndex && t.CPTYPE.QI == t.cpType ? [s("div", {
                        staticClass: "right-0 flex flex-column justify-start items-start"
                    }, [s("div", {
                        staticClass: "secTitle"
                    }, [t._v("期号显示")]), s("div", {
                        staticClass: "stageLength flex justify-between"
                    }, [s("div", {
                        staticClass: "item flexC",
                        class: {
                            on: 0 === t.issueType
                        },
                        staticStyle: {
                            "font-size": "13px"
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetIssueType(0)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t国家期号\n\t\t\t\t\t\t\t")]), s("div", {
                        staticClass: "item flexC",
                        class: {
                            on: 1 === t.issueType
                        },
                        staticStyle: {
                            "font-size": "13px"
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetIssueType(1)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t自增期号\n\t\t\t\t\t\t\t")])])])] : t._e(), 1 == t.selectLeftIndex ? [s("div", {
                        staticClass: "right-one flex flex-column justify-start"
                    }, [s("div", {
                        staticClass: "item flex justify-between"
                    }, [s("span", {
                        staticClass: "lf",
                        staticStyle: {
                            "font-size": "0.15rem"
                        }
                    }, [t._v("期数")]), s("div", {
                        staticClass: "rt"
                    }, [s("div", {
                        staticClass: "issue flex"
                    }, [s("div", {
                        staticClass: "it flexC",
                        class: {
                            on: 40 === t.stageLength
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetStageLength(40)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t\t40期\n\t\t\t\t\t\t\t\t\t")]), s("div", {
                        staticClass: "it flexC",
                        class: {
                            on: 60 === t.stageLength
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetStageLength(60)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t\t60期\n\t\t\t\t\t\t\t\t\t")]), s("div", {
                        staticClass: "it flexC",
                        class: {
                            on: 80 === t.stageLength
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetStageLength(80)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t\t80期\n\t\t\t\t\t\t\t\t\t")])])])]), s("div", {
                        staticClass: "item",
                        staticStyle: {
                            "margin-top": "0.2rem"
                        }
                    }, [s("div", {
                        staticClass: "water flex justify-between"
                    }, [s("div", {
                        staticClass: "lf flex flex-column justify-between items-start"
                    }, [s("div", {
                        staticClass: "tp flex"
                    }, [s("span", [t._v("关闭水印")]), s("img", {
                        attrs: {
                            src: i("b274")
                        }
                    })]), s("span", {
                        staticClass: "bt",
                        staticStyle: {
                            "font-size": "0.12rem"
                        }
                    }, [t._v("分享或保存时，会添加昵称防抄袭")])]), s("div", {
                        staticClass: "rt"
                    }, [s("span", {
                        staticClass: "btnSwitch small flex",
                        class: {
                            on: t.isAddWater
                        },
                        on: {
                            click: t.handleSetWater
                        }
                    }, [s("i")])])])]), s("div", {
                        staticClass: "item flex justify-between"
                    }, [s("div", {
                        staticClass: "lf flex flex-column items-start"
                    }, [s("span", {
                        staticClass: "text"
                    }, [t._v("日期")]), s("span", {
                        staticClass: "remark",
                        staticStyle: {
                            color: "#bbbbbb",
                            "margin-top": "0.05rem",
                            "font-size": "0.12rem"
                        }
                    }, [t._v("显示月/日、星期")])]), s("div", {
                        staticClass: "rt flex"
                    }, [s("span", {
                        staticClass: "btnSwitch small flex",
                        class: {
                            on: t.isShowDate
                        },
                        on: {
                            click: t.handleSetDateShow
                        }
                    }, [s("i")])])]), s("div", {
                        staticClass: "scale flex flex-column items-start"
                    }, [s("div", {
                        staticClass: "secTitle",
                        staticStyle: {
                            "font-size": "0.14rem"
                        }
                    }, [t._v("画板缩放比例")]), s("div", {
                        staticClass: "scaleSizes flex"
                    }, t._l([.5, .6, .7, .8, .9, 1], (function(e) {
                        return s("span", {
                            key: "size" + e,
                            staticClass: "it flexC",
                            class: {
                                on: e === t.scaleSize
                            },
                            on: {
                                click: function(i) {
                                    return t.handleSetScaleSize(e)
                                }
                            }
                        }, [t._v(t._s(100 * e) + "%\n\t\t\t\t\t\t\t\t")])
                    })), 0)])])] : t._e(), 2 == t.selectLeftIndex ? [s("div", {
                        staticClass: "right-two flex flex-column justify-start items-start"
                    }, [t.isP3AndF3 ? [s("div", {
                        staticClass: "ct3 flex flex-column"
                    }, t._l(t.p3f3ThemeList, (function(e, i) {
                        return s("div", {
                            key: i,
                            staticClass: "item flex flex-column"
                        }, [s("span", {
                            staticClass: "secTitle"
                        }, [t._v(t._s("默认皮肤"))]), s("div", {
                            staticClass: "row flex"
                        }, t._l(e, (function(e, n) {
                            return s("div", {
                                key: n,
                                staticClass: "it flex",
                                class: {
                                    on: 0 == i && t.leftThemeType == e.type || 1 == i && t.rightThemeType == e.type
                                },
                                on: {
                                    click: function(s) {
                                        return t.handleSelectF3p3Theme(i, e.type)
                                    }
                                }
                            }, [s("span", [t._v(t._s(e.title))])])
                        })), 0)])
                    })), 0)] : [s("div", {
                        staticClass: "tp flex justify-start items-end"
                    }, [s("span", {
                        staticClass: "title"
                    }, [t._v("默认皮肤"), s("i", {
                        staticStyle: {
                            color: "#bbbbbb",
                            "font-size": "0.12rem"
                        }
                    }, [t._v("（12款皮肤免费使用）")])])]), s("div", {
                        staticClass: "ct flex flex-column"
                    }, t._l(t.themeList, (function(e, i) {
                        return s("div", {
                            key: i,
                            staticClass: "row flex"
                        }, t._l(e, (function(e, i) {
                            return s("div", {
                                key: i,
                                staticClass: "item flex",
                                class: {
                                    on: t.themeTypeShow === e.type
                                },
                                on: {
                                    click: function(i) {
                                        return t.handleSelectTheme(e.type)
                                    }
                                }
                            }, [s("span", [t._v(t._s(e.title))])])
                        })), 0)
                    })), 0)]], 2)] : t._e(), 3 == t.selectLeftIndex ? [s("div", {
                        staticClass: "right-three flex flex-column justify-start items-start"
                    }, [s("span", {
                        staticClass: "title"
                    }, [t._v("只有单奖表才可以设置字体和行高")]), s("div", {
                        staticClass: "secTitle"
                    }, [t._v("字体")]), s("div", {
                        staticClass: "stageLength flex justify-between"
                    }, [s("div", {
                        staticClass: "item flexC",
                        class: {
                            on: 0 === t.fontType
                        },
                        staticStyle: {
                            "font-size": "13px"
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetFontType(0)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t标准\n\t\t\t\t\t\t\t")]), s("div", {
                        staticClass: "item flexC",
                        class: {
                            on: 1 === t.fontType
                        },
                        staticStyle: {
                            "font-size": "13px"
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetFontType(1)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t大号\n\t\t\t\t\t\t\t")]), s("div", {
                        staticClass: "item flexC",
                        class: {
                            on: 2 === t.fontType
                        },
                        staticStyle: {
                            "font-size": "13px"
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetFontType(2)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t超大号\n\t\t\t\t\t\t\t")])]), "2" == t.cpType ? [s("div", {
                        staticClass: "secTitle"
                    }, [t._v("四期分割线")]), s("div", {
                        staticClass: "splitLineTypes stageLength flex"
                    }, [s("div", {
                        staticClass: "item flex",
                        class: {
                            on: 2 === t.splitLineType
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetSplitLineType(2)
                            }
                        }
                    }, [s("span", {
                        staticClass: "text"
                    }, [t._v("常用分割")])]), s("div", {
                        staticClass: "item flex",
                        class: {
                            on: 0 === t.splitLineType
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetSplitLineType(0)
                            }
                        }
                    }, [s("span", {
                        staticClass: "text"
                    }, [t._v("本年分割")])]), s("div", {
                        staticClass: "item flex",
                        class: {
                            on: 1 === t.splitLineType
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetSplitLineType(1)
                            }
                        }
                    }, [s("span", {
                        staticClass: "text"
                    }, [t._v("全部分割")])])])] : t._e()], 2)] : t._e(), 4 == t.selectLeftIndex ? [s("div", {
                        staticClass: "right-four flex flex-column justify-start items-start"
                    }, [s("div", {
                        staticClass: "secTitle"
                    }, [t._v("点击号码的样式")]), s("div", {
                        staticClass: "numTypes flex"
                    }, [s("div", {
                        staticClass: "item flex flex-column",
                        class: {
                            on: 0 === t.numType
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetNumType(0)
                            }
                        }
                    }, [s("div", {
                        staticClass: "imgs flex"
                    }, [s("img", {
                        staticClass: "img",
                        attrs: {
                            src: i("5104")
                        }
                    }), s("img", {
                        staticClass: "img on",
                        attrs: {
                            src: i("a547")
                        }
                    })]), s("div", {
                        staticClass: "text"
                    }, [t._v("实心圆")])]), s("div", {
                        staticClass: "item flex flex-column",
                        class: {
                            on: 2 === t.numType
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetNumType(2)
                            }
                        }
                    }, [s("div", {
                        staticClass: "imgs flex"
                    }, [s("img", {
                        staticClass: "img",
                        attrs: {
                            src: i("8f58")
                        }
                    }), s("img", {
                        staticClass: "img on",
                        attrs: {
                            src: i("86f2")
                        }
                    })]), s("div", {
                        staticClass: "text"
                    }, [t._v("实心方")])]), s("div", {
                        staticClass: "item flex flex-column",
                        class: {
                            on: 1 === t.numType
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetNumType(1)
                            }
                        }
                    }, [s("div", {
                        staticClass: "imgs flex"
                    }, [s("img", {
                        staticClass: "img",
                        attrs: {
                            src: i("fbe6")
                        }
                    }), s("img", {
                        staticClass: "img on",
                        attrs: {
                            src: i("94ce")
                        }
                    })]), s("div", {
                        staticClass: "text"
                    }, [t._v("空心圆")])]), s("div", {
                        staticClass: "item flex flex-column",
                        class: {
                            on: 3 === t.numType
                        },
                        on: {
                            click: function(e) {
                                return t.handleSetNumType(3)
                            }
                        }
                    }, [s("div", {
                        staticClass: "imgs flex"
                    }, [s("img", {
                        staticClass: "img",
                        attrs: {
                            src: i("7c37")
                        }
                    }), s("img", {
                        staticClass: "img on",
                        attrs: {
                            src: i("2cac")
                        }
                    })]), s("div", {
                        staticClass: "text"
                    }, [t._v("空心方")])])]), s("div", {
                        staticClass: "secTitle"
                    }, [t._v("画规/滚动 按钮位置")]), s("div", {
                        staticClass: "lockBtnPost flex"
                    }, [s("div", {
                        staticClass: "item flex flex-column",
                        on: {
                            click: function(e) {
                                return t.handleSetLockBtnPost(0)
                            }
                        }
                    }, [s("div", {
                        staticClass: "img flex"
                    }, [s("img", {
                        attrs: {
                            src: i("07f5")
                        }
                    })]), s("div", {
                        staticClass: "text"
                    }, [t._v("底部")]), s("span", {
                        staticClass: "checkbox flex",
                        class: {
                            on: 0 === t.lockBtnPost
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")])])]), s("div", {
                        staticClass: "item flex flex-column",
                        on: {
                            click: function(e) {
                                return t.handleSetLockBtnPost(1)
                            }
                        }
                    }, [s("div", {
                        staticClass: "img flex"
                    }, [s("img", {
                        attrs: {
                            src: i("b7f7")
                        }
                    })]), s("div", {
                        staticClass: "text"
                    }, [t._v("左上")]), s("span", {
                        staticClass: "checkbox flex",
                        class: {
                            on: 1 === t.lockBtnPost
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")])])]), s("div", {
                        staticClass: "item flex flex-column",
                        on: {
                            click: function(e) {
                                return t.handleSetLockBtnPost(2)
                            }
                        }
                    }, [s("div", {
                        staticClass: "img flex"
                    }, [s("img", {
                        attrs: {
                            src: i("713b")
                        }
                    })]), s("div", {
                        staticClass: "text"
                    }, [t._v("右上")]), s("span", {
                        staticClass: "checkbox flex",
                        class: {
                            on: 2 === t.lockBtnPost
                        }
                    }, [s("i", {
                        staticClass: "iconfont"
                    }, [t._v("")])])])])])] : t._e(), 5 == t.selectLeftIndex ? [s("div", {
                        staticClass: "right-five flex flex-column justify-start items-start"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._v("此设置仅对“智能线”有效")]), s("div", {
                        staticClass: "row flex justify-between"
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("拖拽开关")]), s("div", {
                        staticClass: "end flex"
                    }, [s("img", {
                        staticClass: "dragDot",
                        attrs: {
                            src: i("f6f2")
                        }
                    }), s("span", {
                        class: {
                            small: !0, btnSwitch: !0, on: t.intelData.isShowDragDot
                        },
                        on: {
                            click: t.handleIntelShowDragDot
                        }
                    }, [s("i")])])]), s("div", {
                        staticClass: "row flex justify-between",
                        on: {
                            click: t.handleIntelColorMuti
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("颜色")]), s("div", {
                        staticClass: "btns flex"
                    }, t._l(["单色笔", "多色笔"], (function(e, i) {
                        return s("div", {
                            key: e,
                            class: {
                                "item flex": !0, on: Number(t.intelData.colorMuti) === i, disable: t.isIntelGapDisable && 0 === i
                            },
                            attrs: {
                                "data-v": i
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        staticClass: "row flex justify-between",
                        on: {
                            click: t.handleIntelType
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("线形")]), s("div", {
                        staticClass: "btns flex"
                    }, t._l([{
                        title: "直线",
                        index: 2
                    }, {
                        title: "上曲线",
                        index: 0
                    }, {
                        title: "下曲线",
                        index: 1
                    }], (function(e) {
                        return s("div", {
                            key: e.index,
                            class: {
                                "item flex": !0, on: t.intelData.type === e.index
                            },
                            staticStyle: {
                                width: "33.33%"
                            },
                            attrs: {
                                "data-v": e.index
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.title) + "\n\t\t\t\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        class: {
                            "row flex justify-between": !0
                        },
                        on: {
                            click: t.handleIntelGap
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("间隔")]), s("div", {
                        staticClass: "btns flex btnsEq"
                    }, t._l([0, 1, 2, 3, 4], (function(e) {
                        return s("div", {
                            key: e,
                            class: {
                                "item flex": !0, on: t.intelData.gap === e, disable: t.isIntelGapDisable
                            },
                            staticStyle: {
                                width: "20%"
                            },
                            attrs: {
                                "data-v": e
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e) + " 期\n\t\t\t\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        staticClass: "row flex justify-between",
                        on: {
                            click: t.handleIntelMuti
                        }
                    }, [s("div", {
                        staticClass: "name"
                    }, [t._v("笔数")]), s("div", {
                        staticClass: "btns flex btnsEq"
                    }, t._l([1, 2, 3, 4, 5], (function(e) {
                        return s("div", {
                            key: e,
                            class: {
                                "item flex": !0, on: t.intelData.muti === e
                            },
                            staticStyle: {
                                width: "20%"
                            },
                            attrs: {
                                "data-v": e
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e) + " 笔\n\t\t\t\t\t\t\t\t")])
                    })), 0)]), s("div", {
                        staticClass: "tips"
                    }, [t._v("注：当比数大于1笔时才可以选择间隔、颜色")])])] : t._e()], 2)])])])
                }), [], !1, null, "668b5042", null);
            e.a = p.exports
        },
        efec: function(t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMABvEPK/rlGuDWCgL89MHJ9u67rmA/FNzQcGmFdlZQOjEjIR7qt6emioF8XEigmpdkSja0RSWpkjii97daAAACkUlEQVRIx9SU226CQBCGFQF3RRDxCEWrVGPqoUY0Nd/7v1iTpiZyaGa5dO/2n3yzmdmZv/UaJ4u3iv583JxsLwL+TtoQ7SUKgL47BL/X6NXEBRieb72WF8F7A/aiAfSh/XvbwcQY/bgCzC+Pu4bMEPViH1AH7yHYoAzZ9QAI06cOneHNjB37wDZ7LiKEtQna+QaGi4K2g5MJa2sg6ha0I4Qm7Vr64KReQZu6sDdg98CmPA1X0G15pk7AoFtSY3BWcqsi4FR+I3cgEdnpAPisZFQwEtmuBqe6tSOYdcSpUhAeqwNjUvDaBWtS3Q8LYhN2k1f1CAJPqlfBxq7qCfiZ1GcN1qompyX/UmcOVl4T2EEgzVUAYZ3H3MCxBdcYgXOpSzqTHeAOHOoCKcwEu03+8/OpBUvBYPtwr418QST4xk+xZbeiIBSF0ZPmb6aZlUZYQWVaUTHQMOv9X2zIsiw8ot20roTjh3BY7m8rsOlVnjg49belhmBVax/Asf6ih+BXT8U/GBi14Qw0SYm4kNZmD0jtG4Oi1taRL5/GG8hqrfQgkkjw8/Lh3mE2e5uoKSgXUU1QFnNkAs7+1Xq5QCuHweT+fPHI0d9a4CQkpHAsl150tmD1PE/AsmW3sYbu7ekI+KO8NEq6OTW/6ryYAYZXlJ4HJWVS/Sxk/EJ+2DWBLDe/T78nGuHjqFdRFFDmxVbhNVz5bm/GGujLR9elzcILSERnBkTGU7hDs/AS3DgChoVkqtZ4/7P75JweZRtDIBqSAejxixTNl959kJztkjQKTm6rMe2Ktizu0ix11q3DO9hdxRuA2TocwDjvAMJL67AFqpoA7kS0xkcZh8C2I9qjA6BNxSdsAcyF+AjDJdzZ4uv8A5BBXyvEiSYbAAAAAElFTkSuQmCC"
        }
    }
]);