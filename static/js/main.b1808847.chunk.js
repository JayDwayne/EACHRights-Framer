(this["webpackJsonpavatar-liwenliang"] = this["webpackJsonpavatar-liwenliang"] || []).push([
    [0], {
        122: function(e, t, a) { e.exports = a.p + "static/media/avatar.6eb26c0f.jpg" },
        123: function(e, t, a) { e.exports = a.p + "static/media/border.e59de9b2.png" },
        136: function(e, t, a) { e.exports = a(280) },
        141: function(e, t, a) {},
        144: function(e, t, a) {},
        280: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(3),
                i = a.n(o),
                c = (a(141), a(59)),
                l = a(282),
                s = a(8),
                d = a(283),
                u = a(41),
                m = a(121),
                h = a.n(m),
                g = (a(142), a(143), a(144), a(122)),
                p = a.n(g),
                f = a(123),
                w = a.n(f);
            var v = function() {
                var e = Object(n.useRef)(),
                    t = Object(n.useRef)(),
                    a = Object(n.useState)(),
                    o = Object(c.a)(a, 2),
                    i = o[0],
                    m = o[1],
                    g = Object(n.useState)(),
                    f = Object(c.a)(g, 2),
                    v = f[0],
                    b = f[1],
                    E = Object(n.useState)({ unit: "%", width: 100, aspect: 1 }),
                    y = Object(c.a)(E, 2),
                    j = y[0],
                    x = y[1];
                return r.a.createElement("div", { className: "App" }, r.a.createElement("header", { className: "App-header" }, r.a.createElement("h1", { style: { color: "white" } }, "EACHRights Frame"), r.a.createElement("img", { src: p.a, style: { width: 200, height: 200, marginBottom: 30 } }), r.a.createElement("img", { ref: e, src: w.a, style: { width: 2e3, height: 2e3, display: "none" } }), r.a.createElement(l.a.Dragger, {
                    beforeUpload: function(e) {
                        var t = new FileReader;
                        return t.onload = function(e) {
                            var a = new Image;
                            a.onload = function() { return b(t.result) }, a.src = e.target.result
                        }, t.readAsDataURL(e), !1
                    },
                    accept: "image/*",
                    showUploadList: !1,
                    style: { backgroundColor: "gray", borderRadius: 4, opacity: .5, border: "2px dashed white" }
                }, r.a.createElement("div", { style: { cursor: "pointer", color: "white", margin: "30px 100px" } }, r.a.createElement(s.a, { type: "upload", style: { fontSize: 50 } }), r.a.createElement("p", { style: { fontSize: 20 } }, "Please click to upload your picture. EACHRights™"))), r.a.createElement(d.a, { visible: i, footer: null, onCancel: function() { return m() } }, r.a.createElement("img", { src: i, style: { maxWidth: "100%" } })), r.a.createElement(d.a, {
                    visible: v,
                    footer: r.a.createElement(u.a, {
                        type: "primary",
                        onClick: function() {
                            var a = t.current,
                                n = a.naturalWidth / a.width,
                                r = a.naturalHeight / a.height,
                                o = document.createElement("canvas");
                            o.width = 2e3, o.height = 2e3;
                            var i = o.getContext("2d");
                            i.drawImage(a, j.x * n, j.y * r, j.width * n, j.height * r, 0, 0, 2e3, 2e3), i.drawImage(e.current, 0, 0);
                            // for (var c = i.getImageData(0, 0, o.width, o.height), l = c.data, s = 0; s < l.length; s += 4) {
                            //     var d = (l[s] + l[s + 1] + l[s + 2]) / 3;
                            //     l[s] = l[s + 1] = l[s + 2] = d
                            // }
                            // i.putImageData(c, 0, 0);
                            var u = document.createElement("a");
                            u.download = "EACHRights-Post-.png", u.href = o.toDataURL("image/png"), u.click(), b(), m(u.href)
                        }
                    }, "Click to download! EACHRights™"),
                    onCancel: function() { return b() }
                }, r.a.createElement(h.a, { src: v, crop: j, ruleOfThirds: !0, onChange: x, onImageLoaded: function(e) { return t.current = e } }))))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(r.a.createElement(v, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) { e.unregister() }))
        }
    },
    [
        [136, 1, 2]
    ]
]);
//# sourceMappingURL=main.b1808847.chunk.js.map