function Variant() {
    function a() {
        f(), g(), h(), i()
    }

    function b() {
        mr_variant.wp.saveType = "manual", q(".viu"), K("all"), Lc.wp.saveHTML(generateSource(wp_data.current_page.post_id), "manual")
    }

    function c() {
        v() || Ic || (mr_variant.wp.saveType = "auto", K("all"), Lc.wp.saveHTML(generateSource(Db()), "auto"))
    }

    function d(a) {
        var c = wc(".vfj .vrv"),
            d = wc(".vdm .vrv");
        window.localStorage.clear(), zb(), xb(a), mr_variant.wp.renderNavContainer(c.data("default").value), mr_variant.wp.renderFooter(d.data("default").value), g(wp_data.current_page.post_title), f(), h(), i(), Kc.dropdown.resetToDefault(c), Kc.dropdown.resetToDefault(d), rb(), b()
    }

    function e(a) {
        var b = a;
        sb(b.postId), wc.modal.close(), window.localStorage.clear(), zb(), mr_variant.wp.updateWpData(b.postId, mr_variant.wp.load), g(b.title)
    }

    function f() {
        history.replaceState(wp_data.current_page.post_id, wp_data.current_page.post_id, he.decode(wp_data.current_page.variant_url))
    }

    function g(a) {
        a = he.decode(_.isUndefined(a) ? wp_data.current_page.post_title : a), window.document.title = a + " - Variant"
    }

    function h() {
        wc(".vrz a").attr("data-href", he.decode(wp_data.current_page.wp_edit_url))
    }

    function i() {
        wc(".vrt").attr("href", he.decode(wp_data.current_page.url))
    }

    function j() {
        Ic = !1
    }

    function k() {
        Ic = !0
    }

    function l(a) {
        var b, c, d, e = "",
            f = "",
            g = ["class"];
        return b = a.get(0), c = _.pairs(_.reduce(b.attributes, function(a, b) {
            return a[b.name] = b.value, a
        }, {})), c.forEach(function(a) {
            var b = a[0],
                c = a[1];
            _.contains(b, g) || ("data-shortcode-name" === b && (d = c), 0 === b.indexOf("data-param") && (f = f + ("" !== f ? " " : "") + b.replace("data-param-", "") + '="' + c + '"'))
        }), e = "[" + d + ("" !== f ? " " : "") + f + "]"
    }

    function m(a) {
        var b, c, d, e;
        ac(a) && (b = l(a), c = wc(a), Lc.wp.renderShortcode(b, c.attr("vic"))), _.isUndefined(a.html) || _.isUndefined(a.target) || (d = wc(".variant-shortcode." + a.target), e = d.closest("section, header, footer").attr("vic"), d.html(a.html).addClass("vru"), d.css("min-height", "auto"), wb(), mr.documentReady(mr.setContext(".viu ." + e)), mr.windowLoad(mr.setContext(".viu  ." + e)))
    }

    function n(a, b) {
        return b = _.isUndefined(b) ? !1 : !0, a.find("div.variant-shortcode").each(function() {
            var a = l(wc(this)),
                c = wc(this);
            b && c.empty(), b ? c.append(a) : (c.before(a), c.remove())
        }), a
    }

    function o(a) {
        return a = wc("<div>").append(a), a.find(".nav-container").remove(), a.find("footer").remove(), a = n(a, !0), a.html().replace(/(\n|\t)/g, "")
    }

    function p(a) {
        Array.isArray(a) ? jc.options = jc.options.concat(a) : _.isObject(a) && jc.options.push(a)
    }

    function q(a) {
        wc(a).addClass("loading")
    }

    function r(a) {
        wc(a).removeClass("loading")
    }

    function s() {
        _.isUndefined(wp_data.config.autosave_interval) || (_.isUndefined(this.wp.autoSaveTimer) || clearInterval(this.wp.autoSaveTimer), parseInt(wp_data.config.autosave_interval, 10) > 0 && (u(), this.wp.autoSaveTimer = setInterval(c, 1e3 * parseInt(wp_data.config.autosave_interval, 10) * 60)))
    }

    function t() {
        this.wp.pauseAutoSave = !0
    }

    function u() {
        this.wp.pauseAutoSave = !1
    }

    function v() {
        return this.wp.pauseAutoSave
    }

    function w() {
        Db() ? (wc(".vet span").html("Load " + wc.localStorage(oc + ".vhg")), wc(".vhe").removeClass("vih")) : wc.localStorage(oc + ".state.veu") ? (wc(".vet span").removeClass("vih"), wc(".vhe").removeClass("vih")) : wc(".vhd").removeClass("vih"), Gc && wc(".vah, .vdi, .vgy").remove()
    }

    function x() {
        var a = Tb("demo");
        if (null !== a) {
            var b = new XMLHttpRequest;
            b.open("GET", "../demos/" + a + ".variant", !0), b.responseType = "blob", b.onload = function(a) {
                var c = [b.response];
                ta(c, !0)
            }, b.onerror = function(a) {
                Gb("Could not load specified demo file.")
            }, b.send()
        }
    }

    function y() {
        var a = wc("body");
        lc = wc("#blank-veu").html(), wc(".viu").html(wc("#veu").html()), mc = wc("#veu"), nc = wc(".viu"), oc = "undefined" !== a.attr("mrv_namespace") ? a.attr("mrv_namespace") : "mrv_variant.default", pc = a.attr("mrv_contentTarget") ? wc("#veu " + a.attr("mrv_contentTarget")) : mc, qc = a.attr("mrv_contentTarget") ? wc(".viu " + a.attr("mrv_contentTarget")) : nc, rc = a.attr("mrv_navTarget") ? wc("#veu " + a.attr("mrv_navTarget")) : pc, sc = a.attr("mrv_navTarget") ? wc(".viu " + a.attr("mrv_navTarget")) : qc, tc = a.attr("mrv_footerTarget") ? wc("#veu " + a.attr("mrv_footerTarget")) : pc, uc = a.attr("mrv_footerTarget") ? wc(".viu " + a.attr("mrv_footerTarget")) : qc
    }

    function z() {
        var a = window.navigator.userAgent,
            b = a.indexOf("MSIE "),
            c = 0;
        (b > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && (wc("#if-ie").removeClass("vih"), c = 1), 0 === c && setTimeout(function() {
            wc(".vhc").addClass("vba"), wc(".vhv").removeClass("vba"), setTimeout(function() {
                wc(".vhc").remove(), w(), Eb()
            }, 300)
        }, 100)
    }

    function A(a) {
        wc("head").append('<link class="viw" href="theme/css/' + a + '" rel="alternate stylesheet" type="text/css" media="all">')
    }

    function B() {
        var a;
        try {
            a = JSON.parse(wc(".vaz").html()), wc(".vho").eq(2).removeClass("vih"), C("Original", a.original.colours, "theme"), wc(".vay").attr("viq", a.original.originalFileName + ".css").attr("vhx", a.original.originalFileName + ".css"), wc(a.schemes).each(function() {
                C(this.name, this.colours, "theme-" + this.name), A("theme-" + this.name.toLowerCase() + ".css")
            }), wc(".viw").remove(), wc(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function C(a, b, c) {
        var d, e = "",
            f = a + ": ",
            g = 100 / b.length;
        wc(b).each(function(a, b) {
            e += '<div class="vax" style="width: ' + g + "%; background-color: " + b + '"></div>', f += " " + b
        }), d = '<li title="' + f + '" class="vhu" viz="' + c.toLowerCase() + '.css">', wc(".vay").append(d + e + "</li>")
    }

    function D(a, b) {
        try {
            var c = (JSON.parse(wc(".vaz").html()), a),
                d = wc('[href*="' + wc(".vay").attr("vhx") + '"]').attr("href"),
                e = wc(".vay").attr("vhx");
            c = d.replace(e, c), wc('[href*="' + wc(".vay").attr("vhx") + '"]').attr("href", c), wc(".vay").attr("vhx", a), b === !0 && wb()
        } catch (f) {}
    }

    function E(a) {
        var b, c, d, e, f = wc(".viu ." + a),
            g = !1;
        return f.is(".medium-editor-element") && (g = !0, bc.removeElements(f.get(0)), f.removeClass("medium-editor-element").removeAttr("data-medium-editor-element").removeAttr("data-medium-editor-editor-index").removeAttr("medium-editor-index")), wc("#veu ." + a).attr("vht") ? a = "parent" === wc("#veu ." + a).attr("vht") ? wc("#veu ." + a).parent().attr("vic") : wc("#veu ." + a).closest(wc("#veu ." + a).attr("vht")).attr("vic") : wc("#veu ." + a).closest(".vpe").length && (a = wc("#veu ." + a).closest(".vpe").attr("vic")), b = wc(".viu ." + a).not("ul.slides .clone ." + a).clone(), c = wc("#veu ." + a).clone(), d = (new Date).getTime(), e = "vjs-" + d, b.find(".vnw").remove(), b.attr("vic", e), c.attr("vic", e), b.alterClass("vjs-*", ""), c.alterClass("vjs-*", ""), b.addClass(e), c.addClass(e), b.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(a) {
            var b = "vjs-" + d + "-" + a,
                c = wc(this);
            c.attr("vic", b), c.alterClass("vjs-*", ""), c.addClass(b)
        }), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, iframe, blockquote, figcaption, tbody, tr, td, th, form, label, address").each(function(a) {
            var b = "vjs-" + d + "-" + a,
                c = wc(this);
            c.attr("vic", b), c.alterClass("vjs-*", ""), c.addClass(b)
        }), b.addClass("vpf").insertAfter(wc(".viu ." + a)), g === !0 && bc.addElements([b.get(0), f.get(0)]), c.insertAfter(wc("#veu ." + a)), wb(), wc(".vhw").hide(), wc("#veu ." + a).is(Ac) ? void Pc(a) : void wc(".viu ." + a).parents().each(function() {
            return wc(this).is(Bc) ? (Pc(a), !1) : void 0
        })
    }

    function F(a, b) {
        var c, d = "undefined" != typeof b ? b : !1,
            e = wc(".viu ." + a).parents(),
            f = wc("#veu ." + a).is(Ac) ? !0 : !1;
        wc("#veu ." + a).attr("vht") ? a = "parent" === wc("#veu ." + a).attr("vht") ? wc("#veu ." + a).parent().attr("vic") : wc("#veu ." + a).closest(wc("#veu ." + a).attr("vht")).attr("vic") : wc("#veu ." + a).closest(".vpe").length && (a = wc("#veu ." + a).closest(".vpe").attr("vic")), c = wc("#veu ." + a).attr("vjw") ? wc("#veu ." + a).closest("nav, section, header, footer").find(wc("#veu ." + a).attr("vjw")).attr("vic") : a, d === !0 && (wc(".viu ." + a).remove(), wc("#veu ." + a).remove()), wc(".vdv").length ? (wc(".viu ." + a + ", .viu ." + c).addClass("vjb").removeClass("vjm"), wc("#veu ." + a + ", #veu ." + c).addClass("vjb").removeClass("vjm")) : (wc(".viu ." + a + ", .viu ." + c).addClass("vib").removeClass("vjm"), wc("#veu ." + a + ", #veu ." + c).addClass("vib").removeClass("vjm")), f ? Pc(a) : e.each(function() {
            return wc(this).is(Bc) ? (Pc(a), !1) : void 0
        }), wb(), wc(".vhw").hide()
    }

    function G(a) {
        var b = wc("#veu ." + a),
            c = wc(".viu ." + a),
            d = wc("#veu ." + Wb(b)),
            e = wc(".viu ." + Wb(c));
        b.is(":first-child") || (b.detach().insertBefore(d), c.detach().find(".vnw").remove(), c.insertBefore(e), wb(), b.is(Ac) ? Pc(a) : c.parents().each(function() {
            return wc(this).is(Bc) ? (Pc(a), !1) : void 0
        }))
    }

    function H(a) {
        var b = wc("#veu ." + a),
            c = wc(".viu ." + a),
            d = b.next(),
            e = c.next();
        b.is(":last-child") || (b.detach().insertAfter(d), c.detach().find(".vnw").remove(), c.insertAfter(e), wb(), b.is(Ac) ? Pc(a) : c.parents().each(function() {
            return wc(this).is(Bc) ? (Pc(a), !1) : void 0
        }))
    }

    function I(a) {
        var b = wc("." + a);
        if (wc(b).is("p , div, span, figure, article, img"))
            if (wc(b).is('[class*="medium-"]') || wc(b).parent().is('div [class*="medium-"]')) {
                if (wc(b).parent().is('div [class*="medium-"]') && (b = wc(b).parent()), !wc(b).hasClass("medium-12")) {
                    if (b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-12");
                    if (b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-11");
                    if (b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-10");
                    if (b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-9");
                    if (b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-8");
                    if (b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-7");
                    if (b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-6");
                    if (b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-5");
                    if (b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-4");
                    if (b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-3");
                    if (b.hasClass("medium-1")) return void b.removeClass("medium-1").addClass("medium-2")
                }
            } else if (wc(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || wc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if (wc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = wc(b).parent()), !wc(b).hasClass("col-xs-12")) {
                if (b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-12");
                if (b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-11");
                if (b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-10");
                if (b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-9");
                if (b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-8");
                if (b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-7");
                if (b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-6");
                if (b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-5");
                if (b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-4");
                if (b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-3");
                if (b.hasClass("col-xs-1")) return void b.removeClass("col-xs-1").addClass("col-xs-2")
            }
        } else if (wc(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || wc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if (wc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = wc(b).parent()), !wc(b).hasClass("col-sm-12")) {
                if (b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-12");
                if (b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-11");
                if (b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-10");
                if (b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-9");
                if (b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-8");
                if (b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-7");
                if (b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-6");
                if (b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-5");
                if (b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-4");
                if (b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-3");
                if (b.hasClass("col-sm-1")) return void b.removeClass("col-sm-1").addClass("col-sm-2")
            }
        } else if ((wc(b).is('[class*="col-md-"]') || wc(b).parent().is('div [class*="col-md-"]')) && (wc(b).parent().is('div [class*="col-md-"]') && (b = wc(b).parent()), !wc(b).hasClass("col-md-12"))) {
            if (b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-12");
            if (b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-11");
            if (b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-10");
            if (b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-9");
            if (b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-8");
            if (b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-7");
            if (b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-6");
            if (b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-5");
            if (b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-4");
            if (b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-3");
            if (b.hasClass("col-md-1")) return void b.removeClass("col-md-1").addClass("col-md-2")
        }
        wb()
    }

    function J(a) {
        var b = wc("." + a);
        if (wc(b).is("p , div, span, figure, article, img"))
            if (wc(b).is('[class*="medium-"]') || wc(b).parent().is('div [class*="medium-"]')) {
                if (wc(b).parent().is('div [class*="medium-"]') && (b = wc(b).parent()), !wc(b).hasClass("medium-1")) {
                    if (b.hasClass("medium-12")) return void b.removeClass("medium-12").addClass("medium-11");
                    if (b.hasClass("medium-11")) return void b.removeClass("medium-11").addClass("medium-10");
                    if (b.hasClass("medium-10")) return void b.removeClass("medium-10").addClass("medium-9");
                    if (b.hasClass("medium-9")) return void b.removeClass("medium-9").addClass("medium-8");
                    if (b.hasClass("medium-8")) return void b.removeClass("medium-8").addClass("medium-7");
                    if (b.hasClass("medium-7")) return void b.removeClass("medium-7").addClass("medium-6");
                    if (b.hasClass("medium-6")) return void b.removeClass("medium-6").addClass("medium-5");
                    if (b.hasClass("medium-5")) return void b.removeClass("medium-5").addClass("medium-4");
                    if (b.hasClass("medium-4")) return void b.removeClass("medium-4").addClass("medium-3");
                    if (b.hasClass("medium-3")) return void b.removeClass("medium-3").addClass("medium-2");
                    if (b.hasClass("medium-2")) return void b.removeClass("medium-2").addClass("medium-1")
                }
            } else if (wc(b).is('[class*="col-xs-"]:not([class*="col-md-"])') || wc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])')) {
            if (wc(b).parent().is('div [class*="col-xs-"]:not([class*="col-md-"])') && (b = wc(b).parent()), !wc(b).hasClass("col-xs-1")) {
                if (b.hasClass("col-xs-12")) return void b.removeClass("col-xs-12").addClass("col-xs-11");
                if (b.hasClass("col-xs-11")) return void b.removeClass("col-xs-11").addClass("col-xs-10");
                if (b.hasClass("col-xs-10")) return void b.removeClass("col-xs-10").addClass("col-xs-9");
                if (b.hasClass("col-xs-9")) return void b.removeClass("col-xs-9").addClass("col-xs-8");
                if (b.hasClass("col-xs-8")) return void b.removeClass("col-xs-8").addClass("col-xs-7");
                if (b.hasClass("col-xs-7")) return void b.removeClass("col-xs-7").addClass("col-xs-6");
                if (b.hasClass("col-xs-6")) return void b.removeClass("col-xs-6").addClass("col-xs-5");
                if (b.hasClass("col-xs-5")) return void b.removeClass("col-xs-5").addClass("col-xs-4");
                if (b.hasClass("col-xs-4")) return void b.removeClass("col-xs-4").addClass("col-xs-3");
                if (b.hasClass("col-xs-3")) return void b.removeClass("col-xs-3").addClass("col-xs-2");
                if (b.hasClass("col-xs-2")) return void b.removeClass("col-xs-2").addClass("col-xs-1")
            }
        } else if (wc(b).is('[class*="col-sm-"]:not([class*="col-md-"])') || wc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])')) {
            if (wc(b).parent().is('div [class*="col-sm-"]:not([class*="col-md-"])') && (b = wc(b).parent()), !wc(b).hasClass("col-sm-1")) {
                if (b.hasClass("col-sm-12")) return void b.removeClass("col-sm-12").addClass("col-sm-11");
                if (b.hasClass("col-sm-11")) return void b.removeClass("col-sm-11").addClass("col-sm-10");
                if (b.hasClass("col-sm-10")) return void b.removeClass("col-sm-10").addClass("col-sm-9");
                if (b.hasClass("col-sm-9")) return void b.removeClass("col-sm-9").addClass("col-sm-8");
                if (b.hasClass("col-sm-8")) return void b.removeClass("col-sm-8").addClass("col-sm-7");
                if (b.hasClass("col-sm-7")) return void b.removeClass("col-sm-7").addClass("col-sm-6");
                if (b.hasClass("col-sm-6")) return void b.removeClass("col-sm-6").addClass("col-sm-5");
                if (b.hasClass("col-sm-5")) return void b.removeClass("col-sm-5").addClass("col-sm-4");
                if (b.hasClass("col-sm-4")) return void b.removeClass("col-sm-4").addClass("col-sm-3");
                if (b.hasClass("col-sm-3")) return void b.removeClass("col-sm-3").addClass("col-sm-2");
                if (b.hasClass("col-sm-2")) return void b.removeClass("col-sm-2").addClass("col-sm-1")
            }
        } else if ((wc(b).is('[class*="col-md-"]') || wc(b).parent().is('div [class*="col-md-"]')) && (wc(b).parent().is('div [class*="col-md-"]') && (b = wc(b).parent()), !wc(b).hasClass("col-md-1"))) {
            if (b.hasClass("col-md-12")) return void b.removeClass("col-md-12").addClass("col-md-11");
            if (b.hasClass("col-md-11")) return void b.removeClass("col-md-11").addClass("col-md-10");
            if (b.hasClass("col-md-10")) return void b.removeClass("col-md-10").addClass("col-md-9");
            if (b.hasClass("col-md-9")) return void b.removeClass("col-md-9").addClass("col-md-8");
            if (b.hasClass("col-md-8")) return void b.removeClass("col-md-8").addClass("col-md-7");
            if (b.hasClass("col-md-7")) return void b.removeClass("col-md-7").addClass("col-md-6");
            if (b.hasClass("col-md-6")) return void b.removeClass("col-md-6").addClass("col-md-5");
            if (b.hasClass("col-md-5")) return void b.removeClass("col-md-5").addClass("col-md-4");
            if (b.hasClass("col-md-4")) return void b.removeClass("col-md-4").addClass("col-md-3");
            if (b.hasClass("col-md-3")) return void b.removeClass("col-md-3").addClass("col-md-2");
            if (b.hasClass("col-md-2")) return void b.removeClass("col-md-2").addClass("col-md-1")
        }
        wb()
    }

    function K(a) {
        if (_b()) return void L();
        var b, c, d, e, f, g, h, i, j, k, l, m, n, p, q, r = [],
            s = new Date;
        return _b() || (b = new JSZip, wc("#vhl .viy").length) ? ("all" === a ? (wc("#vhl .viy").each(function() {
            r.push(wc(this).attr("viy"))
        }), c = "variant-exported-" + Sb(s.toDateString())) : r.push(a), r.forEach(function(a, c) {
            d = wc.localStorage(oc + ".state.veu." + a), g = wc.localStorage(oc + ".state.vem." + a) || "", h = wc.localStorage(oc + ".vhf." + a), i = wc.localStorage(oc + "vmp." + a), j = wc.localStorage(oc + ".vkp." + a) || "", k = wc('#vhl [viy="' + a + '"]').attr("vjh") || "", l = wc('#vhl [viy="' + a + '"]').attr("page-title"), l = "undefined" != typeof l ? l : "", e = wc.localStorage(oc + ".state.page-meta-description-mrv." + a) || "", f = wc.localStorage(oc + ".state.page-google-analytics-id-mrv." + a) || "", _b() && (d = o(d)), m = {
                stateID: a,
                templateName: oc,
                pageName: k,
                pageTitle: l,
                colourScheme: h,
                fontOption: i,
                bodyClasses: j,
                layoutMap: g,
                masterHtml: d,
                metaDescription: e,
                googleAnalyticsID: f
            }, n = JSON.stringify(m), _b() || b.file(Sb(k) + "-" + s.getTime() + ".page", n)
        }), void(_b() || (b.file(oc + ".navs", wc("#vbn").html()), b.file(oc + ".footers", wc("#vbl").html()), "all" !== a && (c = Sb(k)), Gc && (q = b.generate({
            type: "base64",
            compression: "deflate"
        }), wc.localStorage("allpages", q)), Gc || (p = b.generate({
            type: "blob",
            compression: "deflate"
        }), saveAs(p, c + ".variant"))))) : void Gb("Export .variant file", "There is nothing to export.<br /><br />Save at least one page before exporting.")
    }

    function L() {
        var a, b, c, d, e, f, g, h = new Date;
        a = "" + wp_data.current_page.post_id, b = o(wc("#veu").html()), c = wc(".vem").html(), d = wp_data.current_page.post_title, e = wp_data.current_page.post_title, f = {
            templateName: oc,
            stateID: a,
            pageName: d,
            pageTitle: e,
            layoutMap: c,
            masterHtml: b
        }, g = JSON.stringify(f), _.isArray(mr_variant.wp.debug) || (mr_variant.wp.debug = []), mr_variant.wp.debug.push({
            time: h,
            output: f
        }), Lc.wp.saveVariant(g, mr_variant.wp.saveType)
    }

    function M() {
        var a;
        try {
            a = JSON.parse(wc(".vmq").html()), wc(".vmy").removeClass("vih"), wc(".vmz").text(a.title), N(a.originalSet), wc(a.optionalSets).each(function() {
                N(this)
            }), wc(".vnb").removeClass("empty-vmd")
        } catch (b) {
            return
        }
    }

    function N(a) {
        var b = wc("<li>").addClass("vmv").attr("vmw", a.setName);
        a.css.length > 0 ? b.attr("vmo", a.css) : b.attr("vmo", "vir"), wc(a.fonts).each(function() {
            b.append(wc("<img>").attr("src", "img/fonts/" + Sb(this.fontName) + ".png"))
        }), wc(".vms").append(b)
    }

    function O(a, b) {
        try {
            if (_.isString(a)) {
                var c = (JSON.parse(wc(".vmq").html()), wc("[vmw=" + a + "]").attr("vmo"));
                wc("head link.vmx").remove(), wc("head").append('<link class="vmx" href="' + c + '" rel="stylesheet" type="text/css">').append('<link class="vmx" href="../css/font-' + Sb(a) + '.css" rel="stylesheet" type="text/css">'), wc(".vms").attr("vmr", a), wc(".vmv.vhr").removeClass("vhr"), wc('.vmv[vmw="' + a + '"]').addClass("vhr"), b === !0 && wb()
            }
        } catch (d) {}
    }

    function P() {
        var a = X(),
            b = a.attr("vhy"),
            c = Z();
        c.attr("class", a.attr("class")), wc("#vbl ." + b).html(c.html()).attr("class", a.attr("class")), wc("#vbl .vjb").removeClass("vjb"), wc.localStorage(oc + ".vbm", wc("#vbl").html())
    }

    function Q(a) {
        wc(".vfb").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                wc(".vfy").val(""), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function R() {
        var a, b = (new Date).getTime(),
            c = "vhy-" + b,
            d = wc(".vfz").val();
        wc(".vdm").closest(".vho").find(".vly").text(d), wc(".vfz").val(""), wc("#veu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), wc(".viu footer").removeClass("vir").addClass("vhz").addClass(c).attr("vhy", c).attr("vie", d), wc("#vbl").append(wc("#veu footer").clone()), a = wc("#vbl").html(), wc.localStorage(oc + ".vbm", a), S(wc("." + c)), P(), U(c, !0), wb()
    }

    function S(a) {
        wc(".vdm").append('<li class="vdl" vid="' + wc(a).attr("vhy") + '" vdn="' + wc(a).attr("vhy") + '" vit="vhz"><span>' + wc(a).attr("vie") + '</span><span class="vbx oi" data-glyph="x"></span></li>')
    }

    function T() {
        if (_b()) {
            var a = Kc.dropdown.render(wp_data.footer_layouts, wp_data.footer_layouts_default);
            wc(".vdm").append(a)
        } else wc("#vbl").append(wc.localStorage(oc + ".vbm")), wc("#vbl footer").each(function() {
            S(wc(this))
        })
    }

    function U(a, b) {
        var c = (W(), X()),
            d = Y(),
            e = Z(),
            f = b === !0 ? !0 : !1,
            g = "";
        e.remove(), c.remove(), wc("#vbl [vhy=" + a + "]").length ? (g = Xb(wc("#vbl [vhy=" + a + "]").get(0), !0), d.append(g), aa($(a))) : wc("#vdk section#" + a).length ? (g = wc("#vdk section#" + a).html(), d.append(g), d.find("footer").addClass("vir").attr("footer-id", a), kb(d.find("footer")), aa($(a))) : aa(Mc.ui.sidebar.footerOptionsListText), f && (wb(), Pc())
    }

    function V() {
        wc("#veu footer").remove(), wc(".viu footer").remove(), Eb(), Fb(), wb(), Pc()
    }

    function W() {
        return wc(uc.selector)
    }

    function X() {
        return W().find("footer").first()
    }

    function Y() {
        return wc(tc.selector)
    }

    function Z() {
        return Y().find("footer").first()
    }

    function $(a) {
        return wc('[vhy="' + a + '"]').attr("vie") || wc("#vdk #" + a).attr("vbr")
    }

    function aa(a) {
        var b = wc(".vdm").siblings(".vly");
        _.isUndefined(a) ? b.text(Mc.ui.sidebar.footerOptionsListText) : b.text(a)
    }

    function ba() {
        var a, b = wc("<div>").append(wc(".vpi").val()),
            c = wc("#veu").find("." + wc(".vpj").val()),
            d = c.closest("section"),
            e = "",
            f = null,
            g = null;
        return wc(Cc).each(function(a, b) {
            e += (a > 0 ? ", " : " ") + b.name
        }), wc(b).find("form[action]:first").length ? (g = wc(b).find("form[action]:first"), wc(Cc).each(function(a, b) {
            return g.attr("action").toLowerCase().includes(b.action) ? (f = b.handler, !1) : void 0
        }), f ? (a = f(b, c), a ? (a.insertBefore(c), F(c.attr("vic")), kb(d), Pc(c.attr("vic")), !0) : !1) : (Ib("Please use an embed code from: " + e + ".", "warning", null, 7e3), !1)) : (Ib("No valid form found in your embed code.", "warning"), !1)
    }

    function ca(a, b) {
        var c = wc(a).find("form[action]:first"),
            d = wc("<form></form>"),
            e = !1,
            f = !1,
            g = null,
            h = null,
            i = !1,
            j = null,
            k = null,
            l = null,
            m = null,
            n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = wc("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = wc("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = wc("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = wc("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? (Ib('The form you are embedding will not fit. Use "Super Slim" form instead.', "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find("label, input, textarea").each(function() {
            var a = wc(this),
                j = null,
                k = null,
                o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden");
            else if (e === !0)
                if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d);
                else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]')) return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d));
            else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : (Ib("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function da(a, b) {
        var c = wc(a).find("form[action]:first"),
            d = wc("<form></form>"),
            e = !1,
            f = !1,
            g = null,
            h = null,
            i = !1,
            j = null,
            k = null,
            l = null,
            m = null,
            n = null;
        return k = b.find('input[type="text"]:first').parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (l = !0, g = wc("<div>").addClass(k.attr("class")).alterClass("vjs-*", "")), b.find('[class*="col-"] [type="submit"]').length && (m = !0, h = wc("<div>").addClass(b.find('[type="submit"]').parent().attr("class")).alterClass("vjs-*", "")), b.find("div.input-with-icon").length && (f = wc("<div>").addClass("input-with-icon"), k = b.find("div.input-with-icon").parent(), k.is('[class*="col-sm-"], [class*="col-md-"]') && (n = !0, g = wc("<div>").addClass(k.attr("class")).alterClass("vjs-*", ""), f.wrap(g)), j = b.find("div.input-with-icon:first i"), j.clone().appendTo(f), f.children().removeAttr("vic"), f.children().alterClass("vjs-*", ""), f.find("input").remove(), e = !0), b.is(".form--merge") && (i = !0, c.find('input[type="email"], input[type="text"]').not('[tabindex="-1"]').length > 1) ? (Ib("The form you are embedding will not fit. Use a single field instead.", "warning"), null) : (d.attr("class", b.attr("class")), d.alterClass("vjs-*", ""), d.removeAttr("vic"), d.attr("action", c.attr("action")), c.find("input, textarea, select").length ? (c.find('label, input, textarea, button[type="submit"]').each(function() {
            var a = wc(this),
                j = null,
                k = null,
                o = null;
            if (a.parent().is('[aria-hidden="true"]')) a.removeAttr("id"), j = a.parent().clone(), j.appendTo(d), d.find('[aria-hidden="true"]').addClass("hidden");
            else if (e === !0)
                if (a.is('input[type="text"], input[type="email"]')) j = f.clone(), k = j.find("i:first"), c.find('label[for="' + a.attr("id") + '"]').insertBefore(k), a.insertAfter(k), n === !0 ? g.clone().append(j).appendTo(d) : j.appendTo(d);
                else if (a.is("label")) {
                if (d.find('.input-with-icon input[id="' + a.attr("for") + '"]')) return !0
            } else a.is('[type="submit"]') && (o = a.clone(), i && (o.attr("class", b.find('[type="submit"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), m === !0 ? h.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d));
            else o = a.clone(), i && (a.is('[type="submit"]') ? o.attr("class", b.find('[type="submit"]').attr("class")) : o.attr("class", b.find('input[type="' + o.attr("type") + '"]').attr("class")), o.alterClass("validate-*", ""), o.alterClass("vjs-*", "")), l === !0 ? g.clone().append(o.removeAttr("id")).appendTo(d) : o.removeAttr("id").appendTo(d)
        }), d) : (Ib("No valid form elements found in the provided embed code.", "warning"), null))
    }

    function ea() {
        var a;
        if (wc("#vpb").length) try {
            return a = JSON.parse(wc("#vpb").html()).dynamicCSS
        } catch (b) {
            return []
        }
    }

    function fa() {
        var a;
        if (wc("#vpa").length) try {
            return a = JSON.parse(wc("#vpa").html()).dynamicScripts
        } catch (b) {
            return []
        }
    }

    function ga() {
        var a, b = "",
            c = wc('<ul class="voj">'),
            d = wc('<ul class="vrj">');
        if (wc("#voi").length) try {
            return a = JSON.parse(wc("#voi").html()).iconPacks, a.forEach(function(a) {
                c.append(wc("<li><span>" + a.name + "</span></li>")), b = '<li class="vou"><span class="vot">' + a.name + '</span> <span class="vom">' + a.icons.length + ' icons </span><span class="voo"><a target="_blank" href="' + a.url + '">more info</a></span></li>', b += '<li class="vov">', a.icons.forEach(function(c) {
                    b += '<div class="vam" data-icon-name="' + c + '" data-icon-type="' + (_.isUndefined(a.type) ? "class" : a.type) + '" von="' + c.toLowerCase().replace(a.iconPrefix, "") + '"><i class="icon ' + a.iconClass + (_.isUndefined(a.type) ? " " + c : "text" === a.type ? "" : " " + c) + '" icon-class="' + a.iconClass + (_.isUndefined(a.type) ? " " + c : "text" === a.type ? "" : " " + c) + '" title="' + c + '">' + (_.isUndefined(a.type) ? "" : "text" === a.type ? c : "") + "</i></div>"
                }), b += "</li>", d.append(b)
            }), wc(c).find("li:first").addClass("vhr"), wc(d).find("li.vou:first, li.vov:first").addClass("vhr"), wc(".vce").html("").append(c).append(d), a
        } catch (e) {
            return JSON.parse('{"iconPacks":[]}')
        }
    }

    function ha(a, b, c, d) {
        var e, f = "string" == typeof c && "" !== c ? c : "div",
            g = "undefined" != typeof d && "string" == typeof d && "" !== d ? d + " " : "";
        return e = wc("<" + f + ' data-glyph="' + a + '" class="' + g + 'oi vnv" title="' + b + '"></' + f + ">")
    }

    function ia(a, b) {
        var c, d = wc(".viu ." + b);
        d.width();
        return c = ha("star", "Edit Icon"), wc(c).off("click").on("click", function(b) {
            return ja(wc("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
        }).attr("vof", wc("." + a).attr("vic")), b === !1 ? c : void 0
    }

    function ja(a) {
        wc(".vcd").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            minHeight: 620,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                wc("#vgo").val(a), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), ma(), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function ka(a) {
        wc(".vce").addClass("vri"), wc(".vcd ul.vrj div.vam").addClass("vih"), wc(".vcd ul.vrj div.vam span.vor").remove(), wc('.vcd ul.vrj div.vam[von*="' + a + '"]').each(function() {
            var b = wc(this);
            b.append('<span class="vor">' + b.attr("von").replace(a, "<strong>" + a + "</strong>") + "</span>"), b.removeClass("vih")
        }), ma()
    }

    function la() {
        wc(".vce").removeClass("vri"), wc(".vcd .vrj li div.vam.vih").removeClass("vih"), wc(".vok").val(""), wc(".vcd .vol").addClass("vih"), wc(".vcd ul.vrj div.vam span.vor").remove(), ma()
    }

    function ma() {
        var a, b = !0;
        wc(".vow").remove(), wc(".vcd ul.vrj li.vov").each(function(c, d) {
            a = wc(this).find("div.vam:not(.vih)").length, 0 === a ? wc(this).addClass("vih").prev().addClass("vih") : (a > 70 ? wc(".vce").addClass("vrk") : wc(".vce").removeClass("vrk"), wc(this).removeClass("vih").prev().removeClass("vih"), b = !1), wc(".vcd .vrj li span.vom").eq(c).text(a + " icon" + (a > 1 ? "s" : "") + " " + ("" !== wc(".vok").val() ? "found" : "in this pack") + " ")
        }), b && (wc(".vce").append('<span class="vow">None Found</span>'), wc(".vce").removeClass("vrk"))
    }

    function na(a) {
        if (_b()) {
            Lc.wp.editImageID = a;
            var b = {},
                c = wc("#veu img." + a);
            b.imageID = a, b.imageElement = c.get(0), b.imageSrc = c.attr("src"), b.imageAlt = c.attr("alt"), Lc.wp.editImage(b)
        } else wc(".vcl").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                var b = wc("." + a),
                    c = b.is("img"),
                    d = b.is("a"),
                    e = c ? b.attr("src") : d ? b.attr("href") : "",
                    f = c ? b.attr("alt") : d ? b.attr("data-title") : "";
                wc(".vdx").html(wc("#vdp").html()), wc(".vcp").attr("src", e), wc(".vcm .veb").text(c ? wc("." + a).get(0).naturalWidth + "x" + wc("." + a).get(0).naturalHeight + " pixels" : ""), wc(".vco").val(e.replace("../img/", "img/")), wc(".vck").val(a), wc(".vcf").val(f), wc(".vdx .vdy").each(function() {
                    var a = wc(this).find("img").get(0),
                        b = wc(this).find(".vec");
                    b.text(a.naturalWidth + "x" + a.naturalHeight)
                }), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    qa(), wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function oa(a) {
        var b, c, d, e = a.target.files;
        for (d = wc(".vdx .vmh").first(), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), d.children().length > d.next(".vdx .vmh").children().length && (d = d.next(".vdx .vmh")), b = 0, c = e[b]; b < e.length; b++) c = e[b], wc('#vdp [vis="' + c.name + '"]').length || (wc('#vdp [vis="' + c.name + '"]').remove(), wc(d).prepend('<div class="vdy"><img class="vcj" src="../img/' + c.name + '" vis="' + c.name + '" onerror="window.mr_variant.chooserImageError(this)"/><span class="vjn"></span><span class="vec"></span></div>')), d = wc(d).is(".vdx .vmh:last") ? wc(".vdx .vmh:first") : wc(d).next(".vdx .vmh");
        qa()
    }

    function pa() {
        if (!_b()) {
            var a = wc("<div />").addClass("vmh"),
                b = wc("<div />").addClass("vmh"),
                c = wc("<div />").addClass("vmh"),
                d = "";
            if (wc.localStorage(oc + ".gallery.images")) wc("#vdp").html(wc.localStorage(oc + ".gallery.images")), wc("#vdp div").each(function() {
                wc(this).find("img").length || wc(this).remove(), wc(this).hasClass("no-image") && wc(this).remove()
            });
            else {
                var e = wc(".vdz").attr("vbv").split(",");
                e.forEach(function(e, f) {
                    d = '<div class="vdy"><img class="vcj" delay-src="../img/' + e + '" vis="' + e + '" onerror="window.mr_variant.defaultImageError(this)"/><span class="vec"></span></div>', f % 3 === 0 ? c.append(d) : f % 2 === 0 ? b.append(d) : a.append(d), wc("#vdp").append(a).append(b).append(c)
                })
            }
        }
    }

    function qa() {
        wc.localStorage(oc + ".gallery.images", wc(".vdx").html()), wc("#vdp").html(wc(".vdx").html())
    }

    function ra(a) {
        var b = wc(a).find("img");
        b.attr("src", ""), b.attr("src", "../img/" + b.attr("vis")), b.css("display", "inline"), wc(a).removeClass("no-image"), wc(a).find(".vjn, .vec").html("")
    }

    function sa(a, b, c, d, e) {
        var f, g = "undefined" != typeof c && "string" == typeof c && "" !== c ? c : "div",
            h = "undefined" != typeof d && "string" == typeof d && "" !== d ? d : "",
            i = b !== !1 ? wc(".viu ." + b) : !1,
            j = i ? i.outerWidth() : null,
            k = "10px",
            l = i && "img" === i.prop("tagName").toLowerCase() ? !0 : !1,
            m = i && "absolute" === i.css("position") ? !0 : !1,
            n = ha(_.isString(e) ? e : "image", "Edit Image", g, h),
            o = wc('<div class="vnu"></div>'),
            p = wc('<div class="vnw"></div>');
        if (wc(n).unbind("click").bind("click", function(b) {
                return na(wc("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
            }).attr("vof", wc("." + a).attr("vic")), 100 >= j && (k = "2px"), b !== !1) {
            if (l) return m ? !0 : (f = i.parent(), i.parent().is(".vnu") || (f = o, "" !== i.css("float") && f.css("float", i.css("float")), "" !== i.css("padding") ? f.css("padding", i.css("padding")) : ("" !== i.css("padding-left") && (f.css("padding-left", i.css("padding-left")), i.css("padding-left", "0px")), "" !== i.css("padding-right") && (f.css("padding-right", i.css("padding-right")), i.css("padding-right", "0px"))), "" !== i.css("margin-right") && (f.css("margin-right", i.css("margin-right")), i.css("margin-right", "0px")), "" !== i.css("margin-left") && (f.css("margin-left", i.css("margin-left")), i.css("margin-left", "0px")), i.hasClass("pull-right") && f.addClass("pull-right"), i.hasClass("pull-left") && f.addClass("pull-left"), f.css("max-width", j), i.wrap(f)), wc(p).css("padding", k).css("width", i.innerWidth()).append(n), i.parent().append(p), !0);
            wc(p).css("padding", k).css("width", j).append(n), i.append(p)
        }
        return b === !1 ? n : void 0
    }

    function ta(a, b) {
        if (_b()) return void ua(a, b);
        var c = "undefined" != typeof a.target ? a.target.files : a,
            d = "";
        b = b === !0 ? !0 : !1;
        for (var e = 0; e < c.length; e++) {
            var f = new FileReader,
                g = c[e];
            f.onload = function(a) {
                return function(c) {
                    try {
                        var e = new JSZip(c.target.result),
                            f = '<span class="vjl">Imported the following:</span>',
                            g = '<span class="vjl">Excluded these:</span>',
                            h = "<ul>",
                            i = "<ul>";
                        wc.each(e.files, function(a, b) {
                            var c, e, f, g;
                            b.name === oc + ".navs" ? (c = b.asText().trim(), c = wc('<div id="vrl" />').html(c), wc(c).children().each(function() {
                                wc('#vbn [via="' + wc(this).attr("via") + '"]').length ? i += "<li>Nav - " + wc(this).attr("vio") + " (already exists)</li>" : (Da(wc(this)), wc("#vbn").append(wc(this)), wc.localStorage(oc + ".vbo", wc("#vbn").html()), h += "<li>Nav - " + wc(this).attr("vio") + "</li>")
                            })) : b.name === oc + ".footers" ? (e = b.asText().trim(), e = wc('<div id="vjj" />').html(e), wc(e).find("footer").each(function() {
                                wc('#vbl [vhy="' + wc(this).attr("vhy") + '"]').length ? i += "<li>Footer - " + wc(this).attr("vie") + " (already exists)</li>" : (S(wc(this)), wc("#vbl").append(wc(this)), wc.localStorage(oc + ".custom-footers", wc("#vbl").html()), h += "<li>Footer - " + wc(this).attr("vie") + "</li>")
                            })) : (g = JSON.parse(b.asText()), g.templateName === oc ? wc('#vhl [viy="' + g.stateID + '"]').length ? i += "<li>Page - " + g.pageName + " (already exists)</li>" : (h += "<li>Page - " + g.pageName + "</li>", f = g.stateID, wc("#vhl").append('<li class="viy" viy="' + g.stateID + '" vjh="' + g.pageName + '" page-title="' + g.pageTitle + '"></li>'), _a(g.pageName, g.stateID), wc.localStorage(oc + ".state.veu." + f, g.masterHtml), wc.localStorage(oc + ".state.vem." + f, g.layoutMap), wc.localStorage(oc + ".vhf." + f, g.colourScheme), wc.localStorage(oc + "vmp." + f, g.fontOption), wc.localStorage(oc + ".vkp." + f, g.bodyClasses), wc.localStorage(oc + ".state.page-meta-description-mrv." + f, g.metaDescription), wc.localStorage(oc + ".state.page-google-analytics-id-mrv." + f, g.googleAnalyticsID), wc.localStorage(oc + ".vhj." + f, g.pageTitle)) : i += "<li>Page - " + g.pageName + " (not designed for this template)</li>", d = {
                                id: g.stateID,
                                name: g.pageName
                            })
                        }), wc.localStorage(oc + ".vhk", wc("#vhl").html()), h += "</ul>", i += "</ul>", "<ul></ul>" !== h && (h = f + h), "<ul></ul>" !== i && (i = g + i), b ? (wc(".vhe").remove(), yb(d.id)) : Gb("Import", h + "<br />" + i), setTimeout(function() {
                            wc(".vfw").find(".ves").length ? wc(".vfw").removeClass("empty-vfw") : wc(".vfw").addClass("empty-vfw")
                        }, 100)
                    } catch (c) {
                        Gb("Page Import Error", "Error reading " + a.name + " : <br /><br />" + c.message)
                    }
                }
            }(g), f.readAsArrayBuffer(g)
        }
        wc(".vef").val("")
    }

    function ua(a, b) {
        b = b === !0 ? !0 : !1, _.isUndefined(a.newpage) ? (a.templateName === oc && (wc(".vhe").remove(), stateID = a.stateID, wc('#vhl li[viy="' + a.stateID + '"]').remove(), wc("#vhl").append('<li class="viy" viy="' + a.stateID + '" vjh="' + a.pageName + '" page-title="' + a.pageTitle + '"></li>'), sb(wp_data.post_id), wc.localStorage(oc + ".state.veu." + stateID, a.masterHtml), wc.localStorage(oc + ".state.vem." + stateID, a.layoutMap), wc.localStorage(oc + ".vhf." + stateID, a.colourScheme), wc.localStorage(oc + "vmp." + stateID, a.fontOption), wc.localStorage(oc + ".vkp." + stateID, a.bodyClasses), wc.localStorage(oc + ".state.page-meta-description-mrv." + stateID, a.metaDescription), wc.localStorage(oc + ".state.page-google-analytics-id-mrv." + stateID, a.googleAnalyticsID)), stateToLoadNow = {
            id: a.stateID,
            name: a.pageName
        }, wc.localStorage(oc + ".vhk", wc("#vhl").html()), yb(stateToLoadNow.id), k()) : d(a.newpage)
    }

    function va(a) {
        var b = wc("." + a);
        return _b() ? void mr_variant.wp.editLink(b.attr("href"), b.text(), b.attr("target"), b.attr("vic")) : void wc(".vcw").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                wc(".vgp").addClass("vih");
                var b = wc("." + a);
                b.hasClass("ven") ? wc(".vcq").text("for Lightbox Image") : ya(), wc(".vcu").val(wc("." + a).attr("href").replace("../img/", "img/")), wc(".vcv").val(a), wc(".vcz").removeAttr("selected"), "undefined" != typeof wc("." + a).attr("target") ? wc(".vcy").val(wc("." + a).attr("target")) : wc(".vcy").val("_self"), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function wa() {
        var a = wc("." + wc(".vcv").val()),
            b = wc(".vcu").val(),
            c = wc(".vcy").val();
        a.hasClass("ven") && (a.find("img[alt]").length && a.attr("data-title", a.find("img").attr("alt")), "img/" === b.substring(0, 4) && (b = b.replace("img/", "../img/"))), a.removeClass("inner-link").attr("href", b).attr("target", c), -1 !== b.indexOf("#") && a.addClass("inner-link"), wb()
    }

    function xa(a) {
        var b, c, d;
        wc("[vik=" + wc(a).parent().parent().attr("vbq") + "]").length ? (c = wc("[vik=" + wc(a).parent().parent().attr("vbq") + "]").attr("id"), d = wc('.viu[href="#' + wc("[vik=" + wc(a).parent().parent().attr("vbq") + "]").attr("id") + '"], #veu [href="#' + wc("[vik=" + wc(a).parent().parent().attr("vbq") + "]").attr("id") + '"]'), d.attr("href", "#" + Sb(wc(a).text())), Ea(), wc("[vik=" + wc(a).parent().parent().attr("vbq") + "]").attr("id", Sb(wc(a).text())).attr("vij", wc(a).text())) : (b = wc("." + wc(a).parent().parent().attr("vbq")), b.before('<a id="' + Sb(wc(a).text()) + '" class="in-page-link" vij="' + wc(a).text() + '" vik="' + wc(a).parent().parent().attr("vbq") + '"></a>'))
    }

    function ya() {
        var a;
        wc(".vgp").addClass("vih");
        var b = wc(pc).find(".in-page-link");
        b.length && (a = '<option value="">Select an in-page navigation link</option>', b.each(function() {
            var b = wc(this);
            a += '<option value="#' + b.attr("id") + '">' + b.attr("vij") + "</option>"
        }), wc(".veh").html(a), wc(".vgp").removeClass("vih"))
    }

    function za() {
        _.isObject(bc) && bc.destroy(), yc = [], wc('.viu [contenteditable="true"]').filter(cc).not(dc).each(function(a, b) {
            yc.push(wc(this).get(0))
        }), bc = new MediumEditor(yc, {
            paste: {
                cleanPastedHTML: !0,
                unwrapTags: ["span", "a", "div", "p", "h1", "h2", "h3", "h4", "h5", "h6", "ol", "ul", "li", "address", "form", "iframe", "blockquote", "figure", "section", "header", "footer"]
            },
            toolbar: {
                allowMultiParagraphSelection: !0,
                buttons: ["bold", "italic", "underline", "strikethrough", "anchor"]
            }
        }), bc.subscribe("showToolbar", function(a, b) {
            var c = wc(b);
            c.closest(".voh").addClass("medium-editor-active-mrv")
        }), bc.subscribe("hideToolbar", function(a, b) {
            var c = wc(b);
            c.closest(".voh").removeClass("medium-editor-active-mrv")
        })
    }

    function Aa(a) {
        wc(".vfc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                wc(".vga").val(""), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Ba() {
        var a, b = (new Date).getTime(),
            c = "via-" + b,
            d = wc(".vgb").val(),
            e = Ma(),
            f = Ja();
        wc(".vfj").closest(".vho").find(".vly").text(d), wc(".vgb").val(""), e.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), f.removeClass("vir").addClass("vhz").addClass(c).attr("via", c).attr("vio", d), wc("#vbn").append(e.clone()), a = wc("#vbn").html(), wc.localStorage(oc + ".vbo", a), Da(wc("." + c)), Ea(), Fa(c, !0), wb()
    }

    function Ca() {
        if (_b()) {
            var a = Kc.dropdown.render(wp_data.header_layouts, wp_data.header_layouts_default);
            wc(".vfj").append(a)
        } else wc("#vbn").append(wc.localStorage(oc + ".vbo")), wc("#vbn").children().each(function() {
            Da(wc(this))
        })
    }

    function Da(a) {
        wc(".vfj").append('<li class="vfi" nav-id="' + wc(a).attr("via") + '" vit="vhz"><span>' + wc(a).attr("vio") + '</span><span class="vby oi" data-glyph="x"></span></li>')
    }

    function Ea() {
        var a = Ja(),
            b = a.attr("via"),
            c = wc("#veu ." + b);
        c.attr("class", a.attr("class")), wc("#vbn ." + b).html(c.html()).attr("class", a.attr("class")), wc("#vbn .vjb").removeClass("vjb"), wc.localStorage(oc + ".vbo", wc("#vbn").html())
    }

    function Fa(a, b) {
        var c, d, e = (Ia(), Ja()),
            f = La(),
            g = Ma(),
            h = b === !0 ? !0 : !1;
        g.remove(), e.remove(), wc("#vbn [via=" + a + "]").length ? (c = Xb(wc("#vbn [via=" + a + "]").get(0), !0), f.prepend(c), Ha(wc("#vbn [via=" + a + "]").attr("nav-id")), Oa(Na(a))) : wc("section.vev#" + a).length ? (c = wc("#" + a).clone(), wc(c).find("script.options").remove(), f.prepend(c.html()), g = Ma(), g.addClass("vir").attr("nav-id", a), g.find(".modal-container, .notification-container").length && (d = (new Date).getTime(), g.find(".modal-container, .notification-container").attr("vqj", a + "-" + d).addClass("vir")), kb(g), Ha(a), Oa(Na(a))) : Oa(Mc.ui.sidebar.navOptionsListText), h && (wb(), Pc())
    }

    function Ga() {
        Ma().remove(), Ja().remove(), Eb(), Fb(), wb(), Pc()
    }

    function Ha(a) {
        var b = La(),
            c = Ia();
        arguments.length || (a = Ma().attr("nav-id")), wc(".vmm").closest(".vkq").remove();
        try {
            var d = JSON.parse(wc("#" + a + " script.options").html());
            wc("<div>").addClass("vkq").append('<div class="vlq"><span>Nav Options</span></div>').append('<div class="vmd"><ul class="vmm"></ul></div>').appendTo(".vmb");
            if (wc.isArray(d.options)) wc(d.options).each(function(a, d) {
                var e = "undefined" != typeof d.target ? d.target : "";
                Za(d, ".vmm", c.selector + " nav " + e + ", " + b.selector + " nav " + e, !0)
            });
            else {
                var e = "undefined" != typeof d.options.target ? d.options.target : "";
                Za(d.options, ".vmm", c.selector + " nav  " + e + ", " + b.selector + " nav  " + e, !0)
            }
        } catch (f) {
            return
        }
    }

    function Ia() {
        return wc(sc.selector)
    }

    function Ja() {
        return Ia().children().not("a").first()
    }

    function Ka() {
        return Ja().attr("vic")
    }

    function La() {
        return wc(rc.selector)
    }

    function Ma() {
        return La().children().not("a").first()
    }

    function Na(a) {
        return wc('[via="' + a + '"]').attr("vio") || wc("#vgg .vev#" + a).attr("vbr")
    }

    function Oa(a) {
        wc(".vfj").siblings(".vly").text(a)
    }

    function Pa() {
        try {
            return JSON.parse(wc("#vnd").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function Qa() {
        try {
            var a = JSON.parse(wc("#vkk").html());
            wc("<div>").addClass("vkq").append('<div class="vlq"><span>Page Options</span></div>').append('<div class="vmd"><ul class="vkx"></ul></div>').appendTo(".vmb");
            wc.isArray(a.options) ? wc(a.options).each(function() {
                Za(this, ".vkx", "body, #vkk", !0)
            }) : Za(a.options, ".vkx", "body, #vkk", !0)
        } catch (b) {
            return
        }
    }

    function Ra() {
        try {
            return JSON.parse(wc("#voy").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function Sa(a, b) {
        var c, d = wc("." + a),
            e = "";
        hc.options.forEach(function(a) {
            c = a.disposableSelector || a.selector, "undefined" != typeof a.closest && (d = wc("." + wc(d).closest(a.closest).attr("vic"))), "undefined" != typeof a.menu && (e = "." + a.menu), wc(d).is(c) && (Za(a, ".vnc" + e, d.selector, !0), "undefined" != typeof b && b === !0 && wc(".vnc" + e).removeClass("vih"))
        })
    }

    function Ta(a) {
        var b = wc("." + a);
        wc("ul.vnc li").remove(), wc(ic.options).each(function() {
            b.is(this.selector) && Va(b, this)
        })
    }

    function Ua(a) {
        a = "undefined" != typeof a ? a : "", wc("#vkk").removeAttr("class").addClass(a), wc("body").addClass(a), wc(".vkx .vky").each(function() {
            wc(this).find(".vks").removeClass("vkr"), -1 !== a.indexOf(wc(this).attr("optionalclass")) ? wc(this).find(".choice-button-on").addClass("vkr") : (wc(this).find(".choice-button-off").addClass("vkr"), wc("body").removeClass(wc(this).attr("optionalclass")))
        }), wc(".vkx .vkz").each(function() {
            wc(this).find(".vkt").removeClass("vku"), -1 !== a.indexOf(wc(this).attr("optionalclass")) ? wc(this).find(".vkt").addClass("vku") : wc("body").removeClass(wc(this).attr("optionalclass"))
        }), wc(".vkx .vkv").removeClass("vkw"), wc('.vkx .vkv[optionalclass=" "]').addClass("vkw"), wc(".vkx .vkv").each(function() {
            -1 !== a.indexOf(wc(this).attr("optionalclass")) && " " !== wc(this).attr("optionalclass") ? (wc(this).addClass("vkw"), wc('.vkx .vkv[optionalclass=" "]').removeClass("vkw")) : wc("body").removeClass(wc(this).attr("optionalclass"))
        })
    }

    function Va(a, b, c) {
        var d, e, f, g, h = b || a.data("vip");
        d = wc(a).find(h.selector + "[" + h.attribute + "]").length ? wc("#veu " + wc(a).attr("vic")).find(h.selector + "[" + h.attribute + "]") : wc("#veu ." + wc(a).attr("vic")), f = "undefined" != typeof h.modalInputIcon ? h.modalInputIcon : "pencil", g = "undefined" != typeof h.refresh ? h.refresh : "false", e = d.attr(h.attribute), wc(".vbk").text(h.modalTitle), wc(".vbh").text(h.modalIntro), wc(".vbf").text(h.modalInputLabel), wc(".vkh").attr("data-glyph", f), wc(".vbg").val(e), wc(".vbe").val(wc(d).attr("vic")).attr("vnn", g), wc(".vbc").val(h.attribute), wc(".vbk").text(h.modalTitle), "string" != typeof c && c === !0 ? Wa() : wc(a).is("section, header") ? wc(".vgk").text(h.buttonText).attr("data-glyph", f).removeClass("vih") : wc(".vdh").text(h.buttonText).attr("data-glyph", f).removeClass("vih")
    }

    function Wa() {
        wc(".vbi").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Xa() {
        var a = wc("#veu ." + wc(".vbe").val()),
            b = wc(".vbg").val(),
            c = wc(".vbc").val();
        wc(a).closest("[data-vip]").data("vip"); - 1 !== b.indexOf("<") && (!wc(b).is("iframe") || "src" !== c && "no-src" !== c && "data-src" !== c || (b = wc(b).attr("src"), "//" === b.substring(0, 2) && (b = "https:" + b), -1 !== b.indexOf("youtube.com") && (b += "?showinfo=0&rel=0&modestbranding=1", a.hasClass("youtube-bg-iframe") && (b += "&enablejsapi=1&autoplay=1&controls=0&loop=1&iv_load_policy=3")), -1 !== b.indexOf("vimeo.com") && (b += "?badge=0&title=0&byline=0"))), wc(a).is("iframe") && "no-src" === c ? (wc(a).attr(c, b), wc(".viu ." + wc(".vbe").val()).attr("src", b)) : (wc(a).attr(c, b), wc(".viu ." + wc(".vbe").val()).attr(c, b)), wb(), "true" === wc(".vbe").attr("vnn") && Pc(a.attr("vic")), wc(".vbe").removeAttr("refresh")
    }

    function Ya(a, b, c) {
        var d, e = a.modalInputIcon || "pencil";
        return d = wc('<div data-glyph="' + e + '" class="oi vnv" title="' + a.buttonText + '"></div>'), d.addClass("vno"), d.data("vnq", a), d.attr("vnr", c), b === !1 ? d : void wc(b).append(d)
    }

    function Za(a, b, c, d) {
        var e, f = "undefined" != typeof d ? d : !1,
            g = "on" === a.initial ? "on" : "off",
            h = wc("<li>"),
            i = wc("<div>"),
            j = "";
        return c = "undefined" != typeof c ? c : !1, e = "undefined" != typeof a.refresh && "true" === a.refresh ? "refresh" : "", h.addClass("vmk"), a.title && h.append("<span>" + a.title + "</span>"), "choice" === a.type && ("on" === g && f === !0 && wc(c).addClass(a["class"]), i.addClass("vky").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<div class="vks choice-button-on ' + e + " " + ("on" === g && f === !0 ? "vkr" : "") + (wc(c).hasClass(a["class"]) && f !== !0 ? "vkr" : "") + '">' + a.onText + "</div>"), i.append('<div class="vks choice-button-off ' + e + " " + ("off" === g && f === !0 ? "vkr" : "") + (wc(c).hasClass(a["class"]) || f === !0 ? "" : "vkr") + '">' + a.offText + "</div>"), h.append(i)), "toggle" === a.type && ("on" === g && f === !0 && wc(c).addClass(a["class"]), j = "on" === g && f === !0 ? " vku" : "", j = "auto" === a.initial && wc(c).hasClass(a["class"]) ? " vku" : j, i.addClass("vkz").attr("optionalclass", a["class"]).attr("classtarget", c), i.append('<span class="oi" data-glyph="' + a.icon + '"></span><span>' + a.text + "</span>"), i.append('<div class="vkt' + j + " " + e + '"><div class="vmi"></div></div>'), h.append(i)), "multi" === a.type && (i.addClass("vmj").attr("classtarget", c), wc.each(a.classes, function(b, c) {
            i.append('<div class="vkv ' + e + " " + (a.initial === b + 1 && f === !0 ? "vkw" : "") + '" optionalclass="' + ("" !== c["class"] ? c["class"] : " ") + '">' + c.text + "</div>")
        }), h.append(i)), "undefined" != typeof a.submenu && (wc(b).find('li.vnk[submenu-name="' + a.submenu + '"]').length || wc(b).append('<li class="vnk" submenu-name="' + a.submenu + '"><span class="vnl">' + a.submenu + "</span><ul></ul></li>"), b = wc(b).find('li.vnk[submenu-name="' + a.submenu + '"] ul')), b === !1 ? h : void wc(b).append(h)
    }

    function $a(a) {
        "" !== a && (_b() ? (mr_variant.wp.newPage(a), mr_variant.wp.newPageName = a) : xb(!0), wc.modal.close())
    }

    function _a(a, b, c) {
        var d;
        _b() ? (d = wc('<div class="ves" data-post-id="' + b + '"><span class="vfx">' + a + "</span></div>"), d.data(c), wc(".vfw").append(d)) : (wc(".vfw").prepend('<div class="ves" vjh="' + a + '" state-id="' + b + '"><span class="oi vdj" data-glyph="data-transfer-download"></span><span class="vfx">' + a + '</span><span class="vbz oi" data-glyph="x"></span><span class="vpy oi" data-glyph="pencil"></span></div>'), Gc && wc(".vdj").remove()), wc(".vfw").removeClass("empty-vfw")
    }

    function ab(a) {
        "undefined" != typeof a && (wc('.ves[state-id="' + a + '"]').remove(), setTimeout(function() {
            wc(".vfw").find(".ves").length ? wc(".vfw").removeClass("empty-vfw") : wc(".vfw").addClass("empty-vfw")
        }, 50))
    }

    function bb(a) {
        var b = cb("Page");
        a && zb(), wc(".vhe").addClass("vih"), xb(b)
    }

    function cb(a) {
        var b, c = [];
        return wc("#vhl li").each(function() {
            c.push(wc(this).attr("vjh"))
        }), b = a.split(" ").length > 1 ? parseInt(a.split(" ").pop()) : 0, _.contains(c, a) ? cb(a.split(" ")[0] + " " + (b + 1)) : a
    }

    function db(a) {
        return a === wc.localStorage(oc + ".vhh")
    }

    function eb() {
        Nb(), zb(), wc(".vhe").removeClass("vih"), wc(".vet").addClass("vih"), wc.localStorage(oc + ".vhh", ""), wc.localStorage(oc + ".vhg", "")
    }

    function fb() {
        wc(".vqm").removeClass("vhr"), wc(".viu, .viu .vrh").removeClass("vrh")
    }

    function gb() {
        try {
            return JSON.parse(wc("#variant-section-vgu").html())
        } catch (a) {
            return JSON.parse('{"options":[]}')
        }
    }

    function hb(a) {
        var b, c = wc(".viu ." + a),
            d = (wc("#veu ." + a), c.attr("vic")),
            e = wc(".vqm"),
            f = c.position(),
            g = c.offset(),
            h = Ia(),
            i = Math.max(h.children().not(Ec).first().outerHeight(!0), h.find(".nav-bar:nth-of-type(1)").outerHeight(!0), wc(".viu .nav-container:nth-of-type(1)").outerHeight(!0)),
            j = h.children().not(Ec).first().css("position"),
            k = wc(".viu nav .nav-bar").css("position"),
            l = wc(".viu"),
            m = c.width(),
            n = (wc(".vqm").width(), wc(window).width(), wc(window).height(), Math.round(g.left + m));
        wc.find('.section-vgw[vnt="' + d + '"]').length || (wc(".viu .section-vgw").remove(), b = wc("<div />").addClass("section-vgw").append('<span class="vnm oi" data-glyph="cog"></span>'), b.attr("vnt", d), c.is(":first-child") || "absolute" !== j && "fixed" !== j && "fixed" !== k && "absolute" !== k || (i = 0), b.css("top", Math.round(f.top + 10 + i)), b.appendTo(l), e.attr("vnt", d), b.css("left", n - b.width()))
    }

    function ib(a) {
        var b, c, d = wc(".viu ." + a),
            e = wc("#veu ." + a),
            f = d.attr("vbq"),
            g = wc(".vhv .vqm"),
            h = g.find(".vqp"),
            i = g.find(".vqn span"),
            j = {
                title: "Visible On",
                type: "multi",
                selector: "section, header, footer",
                explainer: "Select the device sizes which this section should appear on.",
                required: !0,
                options: [{
                    html: '<span class="oi" data-glyph="phone"></span>',
                    onClass: "",
                    onTitle: "Shown on mobile",
                    offClass: "hidden-xs",
                    offTitle: "Hidden on mobile"
                }, {
                    html: '<span class="oi" data-glyph="tablet"></span>',
                    onClass: "",
                    onTitle: "Shown on tablet",
                    offClass: "hidden-sm",
                    offTitle: "Hidden on tablet"
                }, {
                    html: '<span class="oi" data-glyph="monitor"></span>',
                    onClass: "",
                    onTitle: "Shown on desktop",
                    offClass: "hidden-md hidden-lg",
                    offTitle: "Hidden on desktop"
                }],
                targetID: a,
                targetSelector: "." + a,
                target: wc(".viu ." + a + ", #veu ." + a),
                masterTarget: wc("#veu ." + a)
            };
        h.empty(), d.is("section") && (b = wc('.vjc .vem .vaa[vbq="' + f + '"] div.vab span').text()), d.is("footer") && (b = d.is("[vhy]") ? wc('.vdm li.vdl[vid="' + d.attr("vhy") + '"] span').text() : wc('.vdm li.vdl[vid="' + d.attr("footer-id") + '"] ').text()), i.text(b), h.append(zc.choice.render(j)), c = d.find("img[vic]").not(".voh img, .slider li img"), c.length && h.append(zc.images.render(c)), wc(jc.options).each(function(a, b) {
            var c, f, i, j, k, l;
            if (e.is(b.selector)) c = d;
            else {
                if (!e.find(b.selector).length) return;
                c = e.find(b.selector)
            }
            i = c.attr("vic"), j = "." + i, k = wc(".viu " + j + ", #veu " + j), l = wc("#veu " + j), "undefined" != typeof b.group ? (f = wc("<div>").addClass("vqr"), f.append(zc.controlTitle.render(b.title)), wc(b.group).each(function(a, b) {
                b.targetID = i, b.targetSelector = j, b.target = k, b.masterTarget = l, f.append(zc[b.type].render(b, c, g))
            }), h.append(f)) : (b.targetID = i, b.targetSelector = j, b.target = k, b.masterTarget = l, h.append(zc[b.type].render(b, c, g)))
        }), g.find('input[type="text"]').each(function() {
            var a = g.data();
            a.focussedElementAttribute === wc(this).data("attribute") && a.focussedElementValue === wc(this).val() && (wc(this).focus(), wc(this).selectRange(a.cursorPosition))
        })
    }

    function jb(a) {
        var b = a.find(".vab span").text(),
            c = a.attr("vbq"),
            d = wc('.viu [vbq="' + c + '"]'),
            e = d.attr("vic"),
            f = wc('.vqm.vhr[vnt="' + e + '"] .vqn span');
        f.length && f.text(b)
    }

    function kb(a) {
        var b = (new Date).getTime(),
            c = wc(a),
            d = "vjs-" + b;
        return c.is("section, nav, header, footer, .divider-background") && (c.is("[vic]") || (c.attr("vic", d), c.addClass(d))), c.find("p, span, a, h1, h2, h3, h4, h5, h6, strong, em, ul, li, div, i, img, section, header, figure, video, iframe, input, button, textarea, blockquote, figcaption, tbody, tr, td, th, form, label, address").not(".vog, [vic], .wysiwyg *").each(function(a) {
            var b = d + "-" + a,
                c = wc(this);
            c.attr("vic", b), c.addClass(b), c.is("nav, nav li, .slides > li, .slides .owl-item > li, .slides .flickity-slider > li, ul, div, i, img, section, header, figure, .veo, video, iframe, input, textarea, form, tbody, tr, td, .vjx, .variant-shortcode, .variant-shortcode *") || (c.addClass("vir"), c.attr("contenteditable", "true")), c.is("span, a, strong, em, i") ? 0 === c.parent().text().replace(wc(this).text(), "").replace(/\s/g, "").length && c.parent().removeAttr("contenteditable") : c.parent().removeAttr("contenteditable")
        }), b
    }

    function lb() {
        var a = wc(".vgm"),
            b = "",
            c = wc(".vgi"),
            d = "";
        thumbnailPath = "img/sections/", _b() && (thumbnailPath = wp_data.config.section_img_url), wc("#vgg .vim").each(function(a) {
            var c, e = wc(this),
                f = e.attr("vbp").split(","),
                g = "";
            f.forEach(function(a) {
                -1 === d.indexOf(a) && (d += '<div class="vgh" vbp="' + a + '">' + a + "</div>")
            }), c = e.attr("icons"), "undefined" != typeof c && c !== !1 && (c = e.attr("icons").split(","), c.forEach(function(a) {
                g += '<img class="vgj" src="img/' + a + '.png" />'
            })), b += '<div class="vgl" vbp="' + wc(this).attr("vbp") + '" vgv="' + wc(this).attr("id") + '"><img delay-src="' + thumbnailPath + wc(this).attr("id") + '.jpg"/>' + g + '<span class="vjl">' + wc(this).attr("vbr") + "</span></div>"
        }), a.html(b), c.append(d)
    }

    function mb(a) {
        var b, c, d, e, f = wc("#" + a).find("section, header, footer").clone(),
            g = kb(wc(f)),
            h = a + "-" + g;
        d = wc(f).attr("vbq", h).addClass(h), tc.selector != pc.selector ? d.appendTo(pc) : (b = wc(pc).find("footer"), b.length ? d.insertBefore(b) : d.appendTo(pc)), wc(".vem").append('<div class="vaa data-vfs="' + a + '" vbq="' + a + "-" + g + '"><div class="vab"><span class="vir" contenteditable="true">' + wc("#" + a).attr("vbr") + '</span></div><i class="vca variant-icon variant-close-circle" vbq="' + a + "-" + g + '"></i></div>'), qb(), wb(), Pc(a + "-" + g), Eb(), c = wc(".vem"), e = c[0].scrollHeight, c.animate({
            scrollTop: e
        }, 480)
    }

    function nb() {
        var a = wc(qc.selector),
            b = wc(pc.selector),
            c = a.find("footer"),
            d = b.find("footer");
        wc(".vem .vaa").each(function() {
            var e = wc(this).attr("vbq"),
                f = b.find("." + e),
                g = f.clone(),
                h = b.find("[vik=" + e + "]"),
                i = h.clone();
            h.remove(), d.length ? i.insertBefore(d) : i.appendTo(b), f.remove(), d.length ? g.insertBefore(d) : g.appendTo(b), f = a.find("." + e), g = f.clone(), h = a.find("[vik=" + e + "]"), i = h.clone(), h.remove(), c.length ? i.insertBefore(c) : i.appendTo(a), f.remove(), c.length ? g.insertBefore(c) : g.appendTo(a)
        }), wb(), Pc()
    }

    function ob() {
        wc(".global-vfr").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function pb() {
        wc(".vjq").removeClass("vgq"), wc(".vad").toggleClass("vgq")
    }

    function qb() {
        wc(".vem").sortable({
            items: "> .vaa",
            revert: !1,
            cursor: "move",
            opacity: .7,
            delay: 150,
            cancel: "[contenteditable]",
            update: function() {
                nb()
            }
        })
    }

    function rb() {
        wc(".vkm").addClass("vjz"), wc(".vlh").trigger("click"), wc(".vlv").hasClass("vmf") || wc(".vac").trigger("click")
    }

    function sb(a) {
        wc(".ves.vqb").removeClass("vqb"), _b() ? wc('.vfw [data-post-id="' + a + '"]').addClass("vqb") : wc('.ves[state-id="' + a + '"]').addClass("vqb")
    }

    function tb(a) {
        var b, c, d, e, f = wc(".viu ul.slides." + a),
            g = wc(f).parents(".slider"),
            h = f.parents(".slider[data-items]").length ? f.parents(".slider[data-items]").attr("data-items") : 0,
            i = h > 1 ? f.find(".owl-item.active").length : 0,
            j = Ia(),
            k = j.children().first().css("position"),
            l = j.children().first().find(".nav-bar").css("position"),
            m = f.find(" > li, .owl-item > li, .flickity-slider > li").not(".clone").length,
            n = g.length && i > 1 && m > i ? !0 : !1,
            o = 0;
        "absolute" !== k && "fixed" !== k && "absolute" !== l && "fixed" !== l || !f.closest("section").is(".viu section:nth-of-type(1), .viu header:nth-of-type(1)") || (o = Math.max(j.children().first().outerHeight(!0), wc(".viu .nav-container").outerHeight(!0), j.children().first().find(".nav-bar").outerHeight(!0))), f.find(" > li, .owl-item > li, .flickity-slider > li").not(".clone").each(function(a) {
            var b, c, d = wc(this),
                e = "",
                g = "",
                h = "",
                i = "",
                j = "",
                k = "",
                l = "";
            b = wc('<div class="vnw"></div>'), b.css("top", o + 10), f.find("img").length || b.addClass("vny"), f.find("li > p, li > span").length && b.addClass("vny"), d.find(".vnv").length || (m > 1 && (e = ha("arrow-thick-left", "Show Previous Slide"), wc(e).unbind("click").bind("click", function(a) {
                try {
                    f.parent().flexslider("prev")
                } catch (b) {}
                try {
                    f.closest(".slider").flexslider("prev")
                } catch (b) {}
                try {
                    f.trigger("prev.owl.carousel")
                } catch (b) {}
                try {
                    f.flickity("previous")
                } catch (b) {}
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), g = ha("arrow-thick-right", "Show next Slide"), wc(g).unbind("click").bind("click", function(a) {
                try {
                    f.parent().flexslider("next")
                } catch (b) {}
                try {
                    f.closest(".slider").flexslider("next")
                } catch (b) {}
                try {
                    f.trigger("next.owl.carousel")
                } catch (b) {}
                try {
                    f.flickity("next")
                } catch (b) {}
                return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), h = ha("minus", "Delete Slide"), wc(h).unbind("click").bind("click", function(a) {
                return F(d.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            })), c = ha("plus", "Clone Slide"), wc(c).unbind("click").bind("click", function(a) {
                return E(d.attr("vic")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
            }), d.find(" > div.background-image-holder img").length && (k = sa(d.find(" > div.background-image-holder img").attr("vic"), !1)), 1 === d.find("img").length && (k = sa(d.find("img").attr("vic"), !1), d.find("img").closest("a[data-lightbox]").length && (j = sa(d.find("img").closest("a[data-lightbox]").attr("vic"), !1, null, null, "link-intact"))), 1 === d.find("video").length && (l = Pb(d.find("video").attr("vic"), !1)), 1 === d.find("i").length && (i = ia(d.find("i").attr("vic"), !1)), b.append(e).append(h).append(k).append(j).append(l).append(i).append(c).append(g), d.prepend(b))
        }), n && (c = wc('<div class="vob vnw"></div>'), e = ha("arrow-thick-left", "Show Previous Slide"), wc(e).unbind("click").bind("click", function(a) {
            try {
                f.trigger("prev.owl.carousel")
            } catch (b) {}
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(c), b = wc('<div class="voc vnw"></div>'), d = ha("arrow-thick-right", "Show next Slide"), wc(d).unbind("click").bind("click", function(a) {
            try {
                f.trigger("next.owl.carousel")
            } catch (b) {}
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }).appendTo(b), g.prepend(b).prepend(c))
    }

    function ub() {
        _b() ? wc(wp_data.all_pages).each(function(a, b) {
            _a(b.title, b.ID, b)
        }) : (wc("#vhl").html(wc.localStorage(oc + ".vhk")), wc("#vhl li").each(function() {
            _a(wc(this).attr("vjh"), wc(this).attr("viy"))
        }))
    }

    function vb(a) {
        wc(".vge").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                "undefined" != typeof a ? "vpz" === a ? wc(".vgf").attr("vpz", "true") : "vhd" === a && wc(".vgf").attr("vhd", "true") : wc(".vgf").val(""), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb(), wc(".vgf").val(""), wc(".vgf").removeAttr("viy").removeAttr("vqa")
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function wb() {
        Hc || bb();
        var a = Db(),
            b = wc(".vei").val(),
            c = wc(".vpp").val(),
            d = wc(".vpq").val();
        wc(".vhe").addClass("vih"), Ea(), P(), wc.localStorage(oc + ".vhh") ? (wc.localStorage(oc + ".state.veu." + a, wc("#veu").html()), wc.localStorage(oc + ".state.vem." + a, wc(".vem").html()), wc.localStorage(oc + ".vhj." + a, b), wc.localStorage(oc + ".state.page-meta-description-mrv." + a, c), wc.localStorage(oc + ".state.page-google-analytics-id-mrv." + a, d), wc.localStorage(oc + ".vhf." + a, wc(".vay").attr("vhx")), wc.localStorage(oc + "vmp." + a, wc(".vms").attr("vmr")), wc.localStorage(oc + ".vkp." + a, "undefined" != typeof wc("#vkk").attr("class") ? wc("#vkk").attr("class") : " ")) : (wc.localStorage(oc + ".state.veu", wc("#veu").html()), wc.localStorage(oc + ".state.vem", wc(".vem").html()), wc.localStorage(oc + ".vhj", b), wc.localStorage(oc + ".state.page-meta-description-mrv", c), wc.localStorage(oc + ".state.page-google-analytics-id-mrv", d),
            wc.localStorage(oc + ".vhf", wc(".vay").attr("vhx")), wc.localStorage(oc + "vmp", wc(".vms").attr("vmr")), wc.localStorage(oc + ".vkp", "undefined" != typeof wc("#vkk").attr("class") ? wc("#vkk").attr("class") : " ")), _b() && j()
    }

    function xb(a) {
        var b, c, d = wc(".vgf"),
            e = "string" == typeof a ? a : d.val();
        if ("true" === d.attr("vhd") && (zb(), setTimeout(function() {
                var a = wc(".vge .vjl");
                a.text(a.attr("vpx")).removeAttr("vpx");
                var b = wc(".vge .vew p:first");
                b.text(b.attr("vpx")).removeAttr("vpx")
            }, 500), rb()), "true" === d.attr("vpz")) return b = d.attr("viy"), c = d.attr("vqa"), setTimeout(function() {
            var a = wc(".vge .vjl");
            a.text(a.attr("vpx")).removeAttr("vpx");
            var b = wc(".vge .vew p:first");
            b.text(b.attr("vpx")).removeAttr("vpx")
        }, 500), wc('.ves[state-id="' + b + '"]').attr("vjh", e).find("span.vfx").text(e), d.removeAttr("viy"), Ib("Renamed page: " + c + " to <strong>" + e + "</strong>", "check", "success"), wc('#vhl [viy="' + b + '"]').attr("vjh", e), Db() === b && (wc.localStorage(oc + ".vhg", e), wc(".vcr").text(e)), void wc.localStorage(oc + ".vhk", wc("#vhl").html());
        var f = (new Date).getTime(),
            g = "undefined" != typeof wc(".vei").val() ? wc(".vei").val() : Fc,
            h = "" !== wc(".vpp").val() ? wc(".vpp").val() : "",
            i = "" !== wc(".vpq").val() ? wc(".vpq").val() : "";
        b = _b() ? wp_data.current_page.post_id : "viy-" + f, wc("#vhl").append('<li class="viy" viy="' + b + '" vjh="' + e + '" page-title="' + wc(".vei").val() + '"></li>'), _a(e, b), wc('#vhl [viy="' + Db() + '"]').attr("page-title", wc(".vei").val()), wc.localStorage(oc + ".vhk", wc("#vhl").html()), wc.localStorage(oc + ".state.veu." + b, wc("#veu").html()), wc.localStorage(oc + ".state.vem." + b, wc(".vem").html()), wc.localStorage(oc + ".vhj." + b, g), wc.localStorage(oc + ".state.page-meta-description-mrv." + b, h), wc.localStorage(oc + ".state.page-google-analytics-id-mrv." + b, i), wc.localStorage(oc + ".vhf." + b, wc(".vay").attr("vhx")), wc.localStorage(oc + "vmp." + b, wc(".vms").attr("vmr")), wc.localStorage(oc + ".vkp." + b, wc("#vkk").attr("class")), wc.localStorage(oc + ".vhh", b), wc.localStorage(oc + ".vhg", e), wc(".vcr").text(e).removeClass("vih"), sb(_b() ? wp_data.current_page.post_id : b), Mb(), Ib("Created page: <strong>" + e + "</strong>", "check", "success")
    }

    function yb(b) {
        wc(".vei").removeClass("vlx"), wc(".vhe").addClass("vih");
        var c, d, e, f, g, h, i, j, k, l, m = _.isUndefined(b) ? Db() : b,
            n = Cb(m);
        g = ".state.veu." + m, f = ".state.vem." + m, h = ".vhf." + m, i = "vmp." + m, j = ".vkp." + m, k = ".state.page-meta-description-mrv." + m, l = ".state.page-google-analytics-id-mrv." + m, c = Bb(m), "" === c && (wc(".vei").val("Edit Title Tag"), document.title = "Variant HTML Builder by Medium Rare"), wc.localStorage(oc + g) && (wc(".vcr").text(n).removeClass("vih"), wc(".vei").val(c), document.title = c || Fc, wc(".vpp").val(wc.localStorage(oc + k)), wc(".vpq").val(wc.localStorage(oc + l)), wc("#veu").html(wc.localStorage(oc + g)), wc(".vem").html(wc.localStorage(oc + f) || ""), d = _.isUndefined(Ma().attr("via")) ? Ma().attr("nav-id") : Ma().attr("via"), Fa(d), e = _.isUndefined(Z().attr("vhy")) ? Z().attr("footer-id") : Z().attr("vhy"), U(e), Ua(wc.localStorage(oc + j)), D(wc.localStorage(oc + h), !1), O(wc.localStorage(oc + i), !1), qb(), y(), Ha(), sb(_b() ? wp_data.post_id : m), wc.localStorage(oc + ".vhh", m), wc.localStorage(oc + ".vhg", n), _b() && (a(), s()), Mb(), Pc()), wc(".vem").find(".vaa").length ? wc(".vem").removeClass("empty-vem") : wc(".vem").addClass("empty-vem")
    }

    function zb() {
        wc(".vhe").addClass("vih"), Ea(), P(), wc("#veu").html(lc), wc(".viu").html(lc), y(), wc(".vem").html("").addClass("empty-vem"), wc(".vei").val(""), wc(".vpq").val(""), wc(".vpp").val(""), wc(".vfj").siblings(".vly").text("Navigation Type"), wc(".vdm").siblings(".vly").text("Footer Type"), wc(".vgf").removeAttr("vhd")
    }

    function Ab(a) {
        var b;
        db(a) && eb(), wc("#vhl [viy=" + a + "]").remove(), wc.localStorage(oc + ".vhk", wc("#vhl").html()), b = wc.localStorage.io(oc + ".state.veu." + a), b.remove(), b = wc.localStorage.io(oc + ".state.vem." + a), b.remove(), ab(a)
    }

    function Bb(a) {
        return wc.localStorage(oc + ".vhj." + a) || ""
    }

    function Cb(a) {
        return wc('#vhl li.viy[viy="' + a + '"]').attr("vjh")
    }

    function Db() {
        return _b() ? wp_data.current_page.post_id : wc.localStorage(oc + ".vhh")
    }

    function Eb() {
        var a;
        wc(".vhv").css("height", wc(window).height()), a = wc(".vlv").height() - wc(".vlv .vlq").height() - wc(".vlv .vls").height() - wc(".vlv .vlw").height() - 2 * wc(".vlv .vho").height() - wc(".vac").height() - 64, wc(".vem").css("max-height", a);
        var b = wc(window).height() - wc(".vem").outerHeight(!1) - wc(".vlv .vls").height() - wc(".vlz").height() - 9;
        wc(".vgm").css("height", b);
        var c = wc(window).height() - wc(".vlo .vls").height() - wc(".vlo .vlq").height() - wc(".vgc").height() - 32;
        wc(".vfw").css("max-height", c), Jb()
    }

    function Fb() {
        void 0 !== window.mr_parallax && (setTimeout(window.mr_parallax.profileParallaxElements, 100), void 0 !== window.mr_parallax.callback && wc(".viu .parallax").each(function() {
            window.mr_parallax.callback(this)
        }))
    }

    function Gb(a, b) {
        a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", wc(".vag").text(a), wc(".vae").html(b), wc(".vaf").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Hb(a, b, c, d, e) {
        "function" == typeof d && "undefined" != typeof c && (a = "undefined" != typeof a ? a : "", b = "undefined" != typeof b ? b : "", wc(".vqe").text(a), wc(".vqf").html(b), wc(".vqc").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                wc(".vqc .vqd").text(c).on("click", d), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                _.isUndefined(e) || "function" != typeof e || e(), wc(".vqc .vqd").off("click"), setTimeout(function() {
                    wc.modal.close(), Eb(), wc(".vqc .vqd").text("")
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        }))
    }

    function Ib(a, b, c, d) {
        var e, f = "undefined" != typeof a && "" !== a ? a : "",
            g = wc("body div.vrn"),
            h = wc("<div>").addClass("vrm"),
            i = (new Date).getTime(),
            j = "notification-" + i;
        b = "undefined" != typeof b ? b : !1, d = "undefined" != typeof d ? parseInt(d) : 5e3, c = "undefined" != typeof c ? c : "", wc("div.vrn").length || (wc("body").append(wc('<div class="vrn"></div>')), g = "body div.vrn"), b && (e = wc('<span class="oi">').attr("data-glyph", b), h.append(e)), h.append("<span>" + f + "</span>"), h.addClass(j).addClass("vhr"), h.addClass(c), wc(g).append(h), setTimeout(function() {
            wc(".vrm." + j).fadeOut(700, function() {
                wc(this).remove()
            })
        }, d)
    }

    function Jb() {
        wc("#simplemodal-container").draggable({
            handle: ".vfa"
        })
    }

    function Kb() {
        wc(".vjy").unbind("click").click(function() {
            return !1
        })
    }

    function Lb() {
        wc(".viu form").unbind("submit").bind("submit", function(a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), wc('.viu button[type="submit"]').unbind("click").bind("click", function(a) {
            return a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        })
    }

    function Mb() {
        wc(".vgc, .vlt, .vdq, .vah, .vdi").removeClass("vqg"), Hc = !0
    }

    function Nb() {
        wc(".vgc, .vlt, .vdq, .vah, .vdi").addClass("vqg"), Hc = !1
    }

    function Ob() {
        Kc.tooltip = {}, Kc.tooltip.element = null, wc(document).on("mouseenter touchstart", "[data-mrv-tooltip]", function() {
            null === Kc.tooltip.element && (Kc.tooltip.element = wc('<div class="mrv-tooltip"></div>').appendTo("body"));
            var a = wc(this),
                b = Math.round(a.offset().top),
                c = Math.round(a.offset().left) + a.outerWidth(!0),
                d = a.attr("data-mrv-tooltip");
            Kc.tooltip.trigger = a, Kc.tooltip.element.css("top", b).css("left", c).addClass("mrv-active").text(d)
        }), wc(document).on("mouseleave", "[data-mrv-tooltip]", function() {
            Kc.tooltip.close()
        }), wc(document).on("touchstart", function(a) {
            wc(a.target).is(Kc.tooltip.trigger) || Kc.tooltip.close()
        }), Kc.tooltip.close = function() {
            Kc.tooltip.element.removeClass("mrv-active")
        }, Kc.dropdown = {}, Kc.dropdown.render = function(a, b) {
            var c = wc("<div>"),
                d = wc("<div>"),
                e = wc("<span>"),
                f = wc("<ul>");
            return c.addClass("vrv").addClass("vry"), d.addClass("vrw"), f.addClass("vrx").attr("vrf", a.length), wc(a).each(function(a, d) {
                var g = wc("<li>"),
                    h = wc("<span>"),
                    i = "undefined" != typeof d.text ? d.text : "";
                "undefined" != typeof d.colourClass && (f.addClass("vqz"), g.addClass(d.colourClass)), "" !== i && (h.attr("data-mrv-tooltip", i), h.text(i)), c.data("value", b.value), e.text(b.text), c.data("default", b), g.data(d), g.on("click", Kc.dropdown.handle), g.append(h), f.append(g)
            }), c.data(a), d.append(e), c.append(d), c.append(f), c
        }, Kc.dropdown.active = null, Kc.dropdown.handle = function(a) {
            _.isUndefined(a.type) || ("click" === a.type, a = wc(this));
            var b = a.data();
            Kc.dropdown.active && (Kc.dropdown.active.find(".vrw span").text(b.text), Kc.dropdown.closeActive()), "undefined" != typeof b.callback && $b(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Pc(b.targetID)
        }, wc(document).on("click touchstart", ".vrv", function(a) {
            var b = wc(this),
                c = wc(a.target);
            return Kc.dropdown.active && Kc.dropdown.active.is(b) && c.is(".vrw, .vrw *") ? Kc.dropdown.closeActive() : Kc.dropdown.open(b), !1
        }), wc(document).on("click touchstart", function(a) {
            Kc.dropdown.closeActive()
        }), Kc.dropdown.open = function(a) {
            Kc.dropdown.closeActive(), Kc.dropdown.active = a, a.addClass("vhr")
        }, Kc.dropdown.closeActive = function() {
            null !== Kc.dropdown.active && (Kc.dropdown.active.removeClass("vhr"), Kc.dropdown.active = null)
        }, Kc.dropdown.resetToDefault = function(a) {
            var b;
            a = wc(a), b = a.data("default"), a.data("value", b.value), a.find(".vrw span").text(b.text)
        }
    }

    function Pb(a, b) {
        var c, d = wc(".viu ." + b);
        d.width();
        return c = ha("video", "Edit Video"), wc(c).unbind("click").bind("click", function(b) {
            return Qb(wc("." + a).attr("vic")), b.stopPropagation && b.stopPropagation(), b.returnValue = !1, !1
        }).attr("vof", wc("." + a).attr("vic")), b === !1 ? c : void 0
    }

    function Qb(a) {
        wc(".vde").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                wc(".vdd").val(a), wc(".vda").val(wc("." + a + ' > source[type="video/mp4"]').attr("src").replace("../video/", "video/")), wc(".vdg").val(wc("." + a + ' > source[type="video/webm"]').attr("src").replace("../video/", "video/")), wc(".vdb").val(wc("." + a + ' > source[type="video/ogg"]').attr("src").replace("../video/", "video/")), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    }

    function Rb() {
        var a = wc(".vda").val(),
            b = wc(".vdg").val(),
            c = wc(".vdb").val(),
            d = wc("." + wc(".vdd").val()),
            e = wc(".vdd").val();
        a.length && "video/" === a.substring(0, 6) && (a = a.replace("video/", "../video/")), b.length && "video/" === b.substring(0, 6) && (b = b.replace("video/", "../video/")), c.length && "video/" === c.substring(0, 6) && (c = c.replace("video/", "../video/")), d.find('source[type="video/mp4"]').attr("src", a), d.find('source[type="video/webm"]').attr("src", b), d.find('source[type="video/ogg"]').attr("src", c), Pc(e), wb()
    }

    function Sb(a) {
        return a.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-")
    }

    function Tb(a) {
        return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null
    }

    function Ub(a, b) {
        var c = a.attr("vic"),
            d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").first().attr("vic");
        return c === e ? !0 : !1
    }

    function Vb(a, b) {
        var c = a.attr("vic"),
            d = "undefined" != typeof b ? b : "",
            e = a.parent().children(d).not(".vib, .vjb").last().attr("vic");
        return c === e ? !0 : !1
    }

    function Wb(a) {
        var b = a.attr("vic"),
            c = a.parent().children().not(".vib, .vjb"),
            d = c.index(a),
            e = d > 0 ? c.eq(d - 1).attr("vic") : b;
        return e
    }

    function Xb(a, b) {
        if (!a || !a.tagName) return "";
        var c, d, e = document.createElement("div");
        return e.appendChild(a.cloneNode(!1)), c = e.innerHTML, b && (d = c.indexOf(">") + 1, c = c.substring(0, d) + a.innerHTML + c.substring(d)), e = null, c
    }

    function Yb(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(),
                c = b.getRangeAt(0),
                d = document.createElement("br");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }

    function Zb(a) {
        if (window.getSelection) {
            a.stopPropagation();
            var b = window.getSelection(),
                c = b.getRangeAt(0),
                d = document.createTextNode(" ");
            return c.deleteContents(), c.insertNode(d), c.setStartAfter(d), c.setEndAfter(d), c.collapse(!1), b.removeAllRanges(), b.addRange(c), !1
        }
        return !0
    }

    function $b(a, b, c) {
        var d, e;
        c = [].slice.call(arguments).splice(2), d = a.split("."), e = d.pop();
        for (var f = 0; f < d.length; f++) b = b[d[f]];
        return b[e].apply(b, c)
    }

    function _b() {
        return "undefined" != typeof window.wp_data
    }

    function ac(a) {
        return "undefined" != typeof a.selector ? !0 : !1
    }
    var bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc = window.jQuery,
        xc = "",
        yc = [],
        zc = {},
        Ac = ".vnn, ul.slides > li, ul.slides .owl-item > li, ul.slides .flickity-slider > li , .masonry .project, .accordion li, .accordion, .masonry__item, .variant-shortcode",
        Bc = ".vnn, .grid-layout, .tabbed-content, .tabs",
        Cc = [{
            name: "Campaign Monitor",
            action: "createsend.com",
            handler: da
        }, {
            name: "MailChimp",
            action: "list-manage.com",
            handler: ca
        }],
        Dc = ".variant-disable-vjr, .flickity-prev-next-button, div.flickity-viewport, div.flickity-slider, li.slide *:not(a), .variant-shortcode *",
        Ec = '[class*="notification"]',
        Fc = "Edit Page Title",
        Gc = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0,
        Hc = !1,
        Ic = !0,
        Jc = {},
        Kc = {},
        Lc = this,
        Mc = {
            ui: {
                sidebar: {
                    navOptionsListText: "Nav Type",
                    footerOptionsListText: "Footer Type"
                }
            }
        };
    kc = new Date, this.removeIconButtons = !0, _b() && (Lc.wp = {}), wc(".vkg").text(kc.getFullYear()), Ob(), _b() && (window.localStorage.clear(), wc(".vhe").remove(), wc(".vpn.vlp").remove(), wc(".vlj, .vmb.vlp").remove(), wc(".vpo").removeAttr("title").append('<i class="material-icons">&#xE161;</i>').find("span[data-glyph]").remove(), wc(".vpo").attr("data-mrv-tooltip", "Save Page"), wc(".vpo").off("click").on("click", b).on("click", function() {
        q(".viu")
    }).removeClass("vpo").addClass("vrr"), wc('<li class="vrs">').append('<a class="vrt" data-mrv-tooltip="View page in new tab" target="_blank" href="' + he.decode(wp_data.current_page.url) + '">').find("a").append('<i class="material-icons">&#xE89E;</i>').end().insertAfter(".vrr"), wc(".vlf > ul").append('<li data-mrv-tooltip="Exit to WordPress" class="vrz"><a data-href="' + he.decode(wp_data.current_page.wp_edit_url) + '"><i class="material-icons">&#xE879;</i></a></li>'), wc(".vgc").remove(), wc(".vjc .vlt").remove(), wc(".vjc .vdq").remove(), wc(".vjc .vlm").remove(), wc(".ved").remove(), wc(".vpt").attr("data-mrv-tooltip", "Create New Page"), wc(".vrz").on("click", function() {
        Ic === !0 ? window.location.href = he.decode(wp_data.current_page.wp_edit_url) : (t(), Hb("You have unsaved changes.", "Proceed without saving?", "Proceed", function() {
            window.location.href = he.decode(wp_data.current_page.wp_edit_url)
        }, function() {
            u()
        }))
    }), Jc["interface"] = {}, Jc["interface"].sidebarButtons = ".vrr, .vrs, .vrz", Lc.variantNotification = Ib, Mc.ui.sidebar.navOptionsListText = "Navigation:", Mc.ui.sidebar.footerOptionsListText = "Footer:", this.wpNewPage = d, this.wpSwitchPage = e, this.setUnsaved = j, this.setSaved = k, this.renderShortCode = m, this.loadShortcodeOptions = p, this.reloadShortcodes = function(a, b) {
        var c, d, e, f;
        c = _.isUndefined(a) ? "" : a, d = wc("#veu .vru" + c), d.removeClass("vru"), e = wc(".viu .vru" + c), f = e.outerHeight(!0), e.removeClass("vru"), b && b()
    }, wc(window).on("load", function() {
        _b() && (Lc.wp.saveImage = function(a, b) {
            Lc.wp.newSrc = a, Lc.wp.newAlt = b, setImageSrc()
        })
    }), Lc.wp.saveImage = function(a) {}, wc(document).on("click", ".vfj .vrx li", function() {
        mr_variant.wp.updateHeader(wc(this).data("value"))
    }), wc(document).on("click", ".vdm .vrx li", function() {
        mr_variant.wp.updateFooter(wc(this).data("value"))
    }), this.renderNavContainer = function(a) {
        var b = (Ia(), La(), wc("#veu")),
            c = wc(".viu");
        b.find(".nav-container").remove(), c.find(".nav-container").remove(), b.find(".main-container").before(a), c.find(".main-container").before(a), y(), Qc(), r(".nav-container")
    }, this.renderFooter = function(a) {
        var b = W(),
            c = X(),
            d = Y(),
            e = Z();
        e.remove(), d.append(a), c.remove(), b.append(a), Qc(), r(".main-container footer, .main-container, .viu")
    },
    this.startLoading = q, this.stopLoading = r), wc("#blank-veu").html(wc("#veu").html()), y(),
    wc(window).resize(Eb), Eb(), lb(), pa(), ec = ga(), fc = ea(), gc = fa(), ub(), Ca(), T(), B(), M(), Qa(), hc = Ra(), ic = Pa(), jc = gb(), wc(window).load(function () {
        z(), wc("[delay-src]").each(function(a, b) {
            b = wc(this), b.attr("src", b.attr("delay-src")).removeAttr("delay-src")
        }), ec.forEach(function(a) {
            var b = a.headString;
            b = b.replace("href=&quot;css/", 'href="theme/css/').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'), wc("head").prepend(b)
        }), _b() || x()
    });
    try {
        wc.isFunction(generateSource)
    } catch (Nc) {
        wc(".vml").removeClass("vih"), wc(".vdq, .vah, .vgy").click(function() {
            Gb("Demo Only", 'Getting HTML in the demo is disabled.<br /><br />You may export your page in a .variant file and import it when you <a href="https://themeforest.net/item/stack-multipurpose-html-with-page-builder/19337626?ref=medium_rare" target="_blank">purchase the full version</a>.')
        })
    }
    wc(".vfw").find(".ves").length && wc(".vfw").removeClass("empty-vfw"), wc(document).on("click", ".vhu", function() {
        D(wc(this).attr("viz"), !0)
    }), wc(document).bind("mouseup", function(a) {
        wc(a.target).closest(".vnc, .vnj").length || 1 === a.which && (a.ctrlKey || (wc(".vhw").hide(), wc(".vni").removeClass("vhr")))
    }), wc(document).on("click", ".vav", function() {
        wc(".vhw").hide()
    }), wc(document).on("click", ".vkd", function() {
        wc(".vkd").remove()
    }), wc(document).on("contextmenu", "[vic]", function(a) {
        if (a.stopPropagation && a.stopPropagation(), a.shiftKey) return !0;
        if (wc(this).is(Dc)) return !1;
        wc(".vaw").removeClass("vih"), wc(".vcg").text("Edit Image"), wc(".vct").text("Edit Link"), wc(".vfq").addClass("vih");
        var b, c, d, e, f, g, h, i, j, k, l, m, n = wc(this).attr("vic"),
            o = wc("#veu ." + n),
            p = (wc(o).closest("section"), {
                SECTION: "Section",
                LI: "List Item",
                H1: "Heading",
                H2: "Heading",
                H3: "Heading",
                H4: "Heading",
                H5: "Heading",
                H6: "Heading",
                P: "Paragraph",
                SPAN: "Span",
                UL: "Unordered List",
                DIV: "Div",
                IMG: "Image",
                STRONG: "Strong Text",
                EM: "Emphasised Text",
                I: "Icon",
                A: "Link",
                INPUT: "Input",
                BLOCKQUOTE: "Quote",
                FIGCAPTION: "Caption",
                TD: "Teble Cell",
                TH: "Table Heading",
                FORM: "Form",
                ADDRESS: "Address"
            });
        return wc(".vau").text(p[o.get(0).tagName]).removeClass("vih"), wc(o).data("vip") ? Va(o, !1, !1) : wc(o).closest("[data-vip]").length && Va(wc(o).closest("[data-vip]"), !1, !1), Ta(n), o.is("p , span, h1, h2, h3, h4, h5, h6, strong, em, li:not(ul.slides > li, ul.slides .owl-item > li, ul.slides .flickity-slider > li), ul, div, blockquote, figcaption, address") && (wc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), wc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        })), o.is("a") && (wc(".vct").removeClass("vih"), wc(".vct").unbind("click").bind("click", function() {
            va(o.attr("vic"))
        }), wc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), wc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        }), o.parent().is("nav li") && !o.parent().is("nav li:last-child") && (wc(".vqh").removeClass("vih"), wc(".vqh").unbind("click").bind("click", function() {
            H(o.parent().attr("vic"))
        })), o.parent().is("nav li") && !o.parent().is("nav li:first-child") && (wc(".vqi").removeClass("vih"), wc(".vqi").unbind("click").bind("click", function() {
            G(o.parent().attr("vic"))
        }))), o.closest("a:not(.vog)").length && (wc(".vct").removeClass("vih"), o.closest("a").hasClass("ven") && (wc(".vau").text("Lightbox Thumbnail"), wc(".vct").text("Edit Lightbox Link"), wc(".vcg").text("Edit Thumbnail Image")), i = o.closest("a").attr("vic"), wc(".vct").unbind("click").bind("click", function() {
            va(i)
        })), o.closest("section, header").find(".video-wrapper").children("video").length && (o.is(".overlay") && (wc(".vau").text("Video Background"), wc(".var").addClass("vih"), wc(".vbw").addClass("vih")), d = o.closest("section, header").find(".video-wrapper").children("video"), wc(".vdc").removeClass("vih"), wc(".vdc").unbind("click").bind("click", function() {
            Qb(wc(d).attr("vic"))
        }), o.closest("section, header").find(".background-image-holder").children(".background-image").length && (wc(".vcg").text("Edit Poster Image"), wc(".vcg").removeClass("vih"), wc(".vcg").unbind("click").bind("click", function() {
            na(o.closest("section, header").find(".background-image-holder").children(".background-image").attr("vic"))
        })), o.closest(".divider-background").find(".background-image").length && (wc(".vcg").text("Edit Poster Image"), wc(".vcg").removeClass("vih"), wc(".vcg").unbind("click").bind("click", function() {
            na(o.closest(".divider-background").find(".background-image").attr("vic"))
        }))), o.closest(".slides li").find(".video-wrapper").children("video").length && (o.is(".overlay") && (wc(".vau").text("Video Slide Background"), wc(".var").addClass("vih"), wc(".vbw").addClass("vih")), d = o.closest(".slides li").find(".video-wrapper").children("video"), wc(".vcg").text("Edit Poster Image"), wc(".vdc").removeClass("vih"), wc(".vdc").unbind("click").bind("click", function() {
            Qb(wc(d).attr("vic"))
        })), o.closest("video").length && (wc(".vau").text("Video"), wc(".var").addClass("vih"), wc(".vbw").addClass("vih"), d = o.closest("video"), wc(".vdc").removeClass("vih"), wc(".vdc").unbind("click").bind("click", function() {
            Qb(wc(d).attr("vic"))
        })), o.closest(".slides li").find(".video-wrapper").children("video").length && o.closest(".slides li").find(".background-image-holder").children(".background-image").length && (wc(".vcg").text("Edit Poster Image"), wc(".vcg").removeClass("vih"), wc(".vcg").unbind("click").bind("click", function() {
            na(o.closest(".slides li").find(".background-image-holder").children(".background-image").attr("vic"))
        })), o.is("p , div, span, figure, article, img") && (o.closest('[class*="medium-"]').length && (h = o.closest('[class*="medium-"]'), h.hasClass("medium-12") || (wc(".veg").removeClass("vih"), wc(".veg").unbind("click").bind("click", function() {
            I(h.attr("vic"))
        })), h.hasClass("medium-1") || (wc(".vbt").removeClass("vih"), wc(".vbt").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        }))), o.parent().is('div [class*="medium-"]') && (o.parent().hasClass("medium-1") || (wc(".vbt").removeClass("vih"), wc(".vbt").unbind("click").bind("click", function() {
            J(o.attr("vic"))
        })), o.parent().hasClass("medium-12") || (wc(".veg").removeClass("vih"), wc(".veg").unbind("click").bind("click", function() {
            I(o.attr("vic"))
        }))), o.closest('[class*="col-md-"]').length && (h = o.closest('[class*="col-md-"]'), h.hasClass("col-md-12") || (wc(".veg").removeClass("vih"), wc(".veg").unbind("click").bind("click", function() {
            I(h.attr("vic"))
        })), h.hasClass("col-md-1") || (wc(".vbt").removeClass("vih"), wc(".vbt").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        }))), o.closest('[class*="col-sm-"]:not([class*="col-md-"])').length && (h = o.closest('[class*="col-sm-"]:not([class*="col-md-"])'), h.hasClass("col-sm-12") || (wc(".veg").removeClass("vih"), wc(".veg").unbind("click").bind("click", function() {
            I(h.attr("vic"))
        })), h.hasClass("col-sm-1") || (wc(".vbt").removeClass("vih"), wc(".vbt").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        }))), o.closest('[class*="col-xs-"]:not([class*="col-md-"])').length && (h = o.closest('[class*="col-xs-"]:not([class*="col-md-"])'), h.hasClass("col-xs-12") || (wc(".veg").removeClass("vih"), wc(".veg").unbind("click").bind("click", function() {
            I(h.attr("vic"))
        })), h.hasClass("col-xs-1") || (wc(".vbt").removeClass("vih"), wc(".vbt").unbind("click").bind("click", function() {
            J(h.attr("vic"))
        })))), o.is(".cover-wrapper, .hover-state") && (b = o.closest("figure").find("img").get(0), c = o.closest("a").first(), wc(b).is("img") && (wc(".vcg").removeClass("vih"), wc(".vcg").unbind("click").bind("click", function() {
            na(wc(b).attr("vic"))
        })), o.closest("figure").length && (j = o.closest("figure").attr("vic"), j.length && (wc(".var").unbind("click").bind("click", function() {
            E(j)
        }), wc(".vbw").unbind("click").bind("click", function() {
            F(j)
        })))), (o.parents("nav, header").length || o.is("nav") || o.is("header")) && (o.is("nav, header") ? (g = o.attr("nav-id"), wc(".vau").text("Nav"), wc(".vaw").addClass("vih")) : (g = o.closest("nav").attr("nav-id"), wc(".vau").text("Nav > " + wc(".vau").text())), wc(".vfe").removeClass("vih"), wc(".vfg[nav-id=" + g + "]").each(function() {
            wc(".viu nav").hasClass(wc(this).attr("nav-class")) || wc(this).removeClass("vih")
        }), wc(".vhw .vaw").not(".vih").length || wc(".vfe .vfm").removeClass("vih")), o.closest(".hover-background").length && (b = o.closest("section").find(".hover-background .background-image").get(0), wc(b).is("img") && (wc(".vcg").text("Edit Background Image").removeClass("vih"), wc(".vcg").unbind("click").bind("click", function() {
            na(wc(b).attr("vic"))
        })), wc(o).closest(".hover-background").find(".foreground-image-holder .background-image").each(function(a) {
            var b = a + 1,
                c = wc(this);
            e = wc(".vcg").clone(), e.removeClass("vcg").addClass("vkd edit-foreground-" + b), e.text("Edit Layer " + b + " Image"), wc(this).attr("src"), e.unbind("click").bind("click", function() {
                na(c.attr("vic"))
            }), e.insertBefore(wc(".vcg"))
        })), o.is("i") && (wc(".vau").text("Icon"), wc(".vcc").removeClass("vih"), wc(".vcc").unbind("click").bind("click", function() {
            ja(o.attr("vic"))
        }), wc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), wc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        })), o.is("img") && (wc(".vcg").removeClass("vih"), wc(".vcg").unbind("click").bind("click", function() {
            na(o.attr("vic"))
        }), wc(".var").unbind("click").bind("click", function() {
            E(o.attr("vic"))
        }), wc(".vbw").unbind("click").bind("click", function() {
            F(o.attr("vic"))
        })), o.is("section") && (wc(".vau").text("Section"), wc(".var").unbind("click").addClass("vih"), wc(".vbw").unbind("click").addClass("vih")), o.is("header") && (wc(".vau").text("Section"), wc(".var").unbind("click").addClass("vih"), wc(".vbw").unbind("click").addClass("vih")), o.closest(".veo").length && (f = wc(o).closest(".veo"), b = wc(o).closest(".veo").find("img"), wc(".vcg").removeClass("vih"), wc(".vcg").unbind("click").bind("click", function() {
            na(b.attr("vic"))
        }), wc(".var").removeClass("vih").unbind("click").bind("click", function() {
            E(f.attr("vic"))
        }), wc(".vbw").removeClass("vih").unbind("click").bind("click", function() {
            F(f.attr("vic"))
        })), o.hasClass("vns") && wc(".var").unbind("click").addClass("vih"), Sa(n, !0), k = wc("body > .vhw"), k.find(".vaw:not(.vih)").length ? (l = wc(window).width(), m = wc(window).height(), a.pageX + k.outerWidth() > l ? k.css("left", l - k.outerWidth()) : k.css("left", a.pageX), a.pageY + k.outerHeight() > m ? k.css("top", m - k.outerHeight()) : k.css("top", a.pageY), Eb(), k.show()) : k.hide(), !1
    }), wc(document).on("click", ".vdi:not(.vqg)", function() {
        K("all")
    }), wc(document).on("click", ".vmv", function() {
        O(wc(this).attr("vmw"), !0)
    }), wc(".vfy").on("click", function() {
        "" !== wc(".vfz").val() && (R(), wc.modal.close())
    }), wc(".vfz").keyup(function(a) {
        13 === a.keyCode && "" !== wc(".vfz").val() && (R(), wc.modal.close())
    }), wc(document).on("keyup paste input", "footer.vir", function() {
        var a = wc(this);
        Q(a)
    }), wc(document).on("keyup paste input", "footer.vhz", function() {
        P()
    }), wc(document).on("keyup paste input", ".vfz", function() {
        "" !== wc(this).val() ? wc(".vfy").show() : wc(".vfy").hide()
    }), wc(".vfl").click(function() {
        wc(this).closest(".vho").removeClass("vhr");
        var a = wc(this).text();
        wc(this).closest(".vho").find(".vly").text(a), V()
    }), wc(document).on("click", ".vbx", function() {
        var a = wc(this).parent().attr("vid");
        wc(this).parent().remove(), wc("." + a).remove(), P()
    }), wc(document).on("click", ".vdl", function() {
        U(wc(this).attr("vid"), !0), wc(this).closest(".vho").removeClass("vhr"), wc(".vhe").addClass("vih");
        var a = wc(this).text();
        wc(this).closest(".vho").find(".vly").text(a)
    }), wc(".vpk").on("click", function() {
        ba() === !0 && wc.modal.close()
    });
    var Oc = function(a) {
        wc(".vph").modal({
            autoResize: !0,
            overlayClose: !0,
            opacity: 0,
            overlayCss: {
                "background-color": "#3e3e3e"
            },
            closeClass: "vex",
            onShow: function() {
                wc(".vpj").val(a), setTimeout(function() {
                    wc(".simplemodal-container").addClass("vko"), wc(".simplemodal-overlay").addClass("vko")
                }, 100), Eb()
            },
            onClose: function() {
                setTimeout(function() {
                    wc.modal.close(), Eb()
                }, 300), wc(".simplemodal-container").removeClass("vko"), wc(".simplemodal-overlay").removeClass("vko")
            }
        })
    };
    Lc.promptEditForm = Oc, wc(document).on("keyup paste input", ".vcd .vok", function() {
        var a = wc(".vcd .vok").val();
        "" !== a ? (ka(a), wc(".vcd .vol").removeClass("vih")) : la()
    }), wc(document).on("click", ".voj li:not(.vhr)", function() {
        var a = wc(this);
        wc(".voj li.vhr, .vrj li.vhr").removeClass("vhr"), a.addClass("vhr"), wc(".vrj li.vou").eq(a.index()).addClass("vhr"), wc(".vrj li.vov").eq(a.index()).addClass("vhr")
    }), wc(document).on("click", ".vcd .vol", function() {
        la()
    }), wc(document).on("click", ".viu i", function() {
        var a = wc(this);
        a.hasClass("catch-double-click") ? ja(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300))
    }), wc(document).on("click", "div.vam", function() {
        var a = wc("." + wc("#vgo").val()),
            b = wc(this),
            c = b.find("i"),
            d = b.attr("data-icon-type");
        b.attr("data-icon-name");
        a.hasClass("icon-large") && a.addClass("keep-large-icon").removeClass("icon-large"), a.hasClass("icon-lg") && a.addClass("keep-lg-icon").removeClass("icon-lg"), a.hasClass("icon--lg") && a.addClass("keep--lg-icon").removeClass("icon--lg"), a.hasClass("icon-sm") && a.addClass("keep-sm-icon").removeClass("icon-sm"), a.hasClass("icon--sm") && a.addClass("keep--sm-icon").removeClass("icon--sm"), a.hasClass("icon--xs") && a.addClass("keep--xs-icon").removeClass("icon--xs"), ec.forEach(function(b) {
            "" !== b.iconPrefix && a.alterClass(b.iconPrefix + "*", ""), a.removeClass(b.iconClass)
        }), a.html("text" === d ? b.attr("data-icon-name") : ""), a.addClass(c.attr("icon-class")), a.hasClass("keep-large-icon") && a.removeClass("keep-large-icon").addClass("icon-large"), a.hasClass("keep-lg-icon") && a.removeClass("keep-lg-icon").addClass("icon-lg"), a.hasClass("keep--lg-icon") && a.removeClass("keep--lg-icon").addClass("icon--lg"), a.hasClass("keep-sm-icon") && a.removeClass("keep-sm-icon").addClass("icon-sm"), a.hasClass("keep--sm-icon") && a.removeClass("keep--sm-icon").addClass("icon--sm"), a.hasClass("keep--xs-icon") && a.removeClass("keep--xs-icon").addClass("icon--xs"), ma(), wb()
    }), wc(".vcn").on("click", function() {
        setImageSrc(), wc.modal.close()
    }), wc(".vco").get(0).addEventListener("drop", function(a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        wc(".vco").val(b), wc(".vcp").attr("src", b)
    }, !1), wc(".vcp").get(0).addEventListener("drop", function(a) {
        a.stopPropagation(), a.preventDefault();
        var b = a.dataTransfer.getData("URL");
        wc(".vco").val(b), wc(".vcp").attr("src", b)
    }, !1), wc(".vco").get(0).addEventListener("dragover", function(a) {
        a.preventDefault(), a.stopPropagation()
    }, !1), wc(".vco, .vcf").keyup(function(a) {
        13 === a.keyCode && (setImageSrc(), wc.modal.close())
    }), wc(".vhp").click(function() {
        wc(".vdz,.vcl").toggleClass("vhr")
    }), wc(".vcp").click(function() {
        wc(".vhp").trigger("click")
    }), wc(".vch").change(function(a) {
        oa(a)
    }), wc(".vee").click(function() {
        wc(".vch").focus().trigger("click")
    }), wc(document).on("click", ".vcj", function() {
        var a = wc(this).get(0);
        wc(".vco").val(wc(this).attr("src").replace("../img/", "img/")), wc(".vcp").attr("src", wc(this).attr("src")), wc(".veb").text(a.naturalWidth + "x" + a.naturalHeight + " pixels"), wc(".vdz,.vcl").toggleClass("vhr")
    }), wc(document).on("click", ".no-image", function() {
        ra(this)
    }), wc(document).on("click", ".viu img", function() {
        var a = wc(this);
        a.hasClass("catch-double-click") ? na(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300))
    }), wc(document).on("mouseenter", ".viu img[vic]:not(.viu ul.slides > li > img, .viu ul.slides .owl-item img, ul.slides .flickity-slider > li img, .voh img, ul.flickr-feed img )", function(a) {
        wc('[vof="' + wc(this).attr("vic") + '"]').length || sa(wc(this).attr("vic"), wc(this).attr("vic"))
    }), wc(document).on("mouseenter", '.viu div[class*="col-"]', function(a) {
        var b = wc(this);
        b.find(".image-holder, .background-image-holder:not(.voh .background-image-holder, .viu .slides > li > img, .viu .slides .owl-item img, ul.slides .flickity-slider > li img, .viu .slides > li > .background-image-holder, .viu .slides .owl-item > li > .background-image-holder, .viu ul.slides .flickity-slider > li > .background-image-holder, .viu section > .background-image-holder, .viu header > .background-image-holder, .viu footer > .background-image-holder)").filter("[vic]").each(function() {
            var a = wc(this);
            a.closest('div[class*="col-"]').find("div.hover-state").length && !a.closest('div[class*="col-"]').find("div.hover-state").find(".vnv").length ? wc('[vof="' + a.find("img").attr("vic") + '"]').length || sa(a.find("img").attr("vic"), a.closest('div[class*="col-"]').find(".hover-state").attr("vic")) : a.find(".vnv").length || wc('[vof="' + a.find("img").attr("vic") + '"]').length || sa(a.find("img").attr("vic"), a.attr("vic"))
        })
    }), setImageSrc = function() {
        var a = _b(),
            b = a ? Lc.wp.editImageID : wc(".vck").val(),
            c = a ? Lc.wp.newSrc : wc(".vco").val(),
            d = a ? Lc.wp.newAlt : wc(".vcf").val(),
            e = wc("." + b),
            f = b,
            g = a ? wp_data.imgPath : "../img/";
        "img/" === c.substring(0, 4) && (c = c.replace("img/", g)), e.is("img") && (e.attr("src", c), e.attr("alt", d)), e.is("a") && (e.attr("href", c), e.attr("data-title", d)), e.closest("a.ven").length && e.closest("a.ven").attr("data-title", e.attr("alt")).attr("href", c), e.is(".background-image, .background-image-holder img") ? Pc(f) : e.parents().find(Bc).length && Pc(f), _b() && (Lc.wp.editImageID = null, Lc.wp.newSrc = null, Lc.wp.newAlt = null), wb()
    }, this.chooserImageError = function(a) {
        wc(a).parent().addClass("no-image"), wc(a).parent().find(".vjn").html("Copy <strong>" + wc(a).attr("vis") + "</strong> to your img folder then click here to refresh."), wc(a).css("display", "none")
    }, this.defaultImageError = function(a) {
        wc(a).parent().remove(), wc(a).remove()
    }, wc(".ved").click(function() {
        wc(".vef").focus().trigger("click")
    }), wc(".vef").change(function(a) {
        "variant" === wc(this).val().split(".").pop() ? ta(a) : Gb("Please select a .variant file", "Variant cannot import plain HTML files. <br /><br />You can import .variant files that have been exported from Variant here, or by someone else.")
    }), wc(".veh").change(function(a) {
        wc(".vcu").val(wc(this).val())
    }), wc(".vcu").keyup(function(a) {
        13 === a.keyCode && "" !== wc(".vcu").val() && (wa(), wc.modal.close())
    }), wc(".vcx").on("click", function() {
        wa(), wc.modal.close()
    }), wc(document).on("click", ".viu a, .viu nav a, .viu header a", function() {
        var a = wc(this);
        return a.hasClass("catch-double-click") ? va(a.attr("vic")) : (a.addClass("catch-double-click"), setTimeout(function() {
            a.removeClass("catch-double-click")
        }, 300)), !1
    }), cc = "p,h1,h2,h3,h4,h5,h6,span.h1,span.h2,span.h3,span.h4,span.h5,span.h6", dc = "div, .typed-text, .countdown, .btn__text, .wysiwyg *", wc(document).on("mouseenter", ".viu .voh:not(.vib, .vjb)", function(a) {
        var b, c, d, e, f, g, h = "",
            i = wc(".viu ." + wc(this).attr("vic")),
            j = i.parent().find(".voh").not(".vjb , .vib").length > 1 ? !0 : !1,
            k = Ub(i, ".voh"),
            l = Vb(i, ".voh");
        b = wc('<div class="vnw"></div>'), j && !k && (e = ha("arrow-thick-left", "Sort Previous"), wc(e).unbind("click").bind("click", function(a) {
            return G(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(e)), j && (c = ha("minus", "Delete"), wc(c).unbind("click").bind("click", function(a) {
            return F(i.attr("vic"), i.is(".vrp")), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(c)), g = i.find("img:not(.vib)"), g.each(function() {
            var a = wc(this);
            b.append(sa(a.attr("vic"), !1))
        }), ic.options.forEach(function(a) {
            i.is(a.selector) && (f = Ya(a, !1, i.attr("vic")), b.append(f)), i.find(a.selector).length && (f = Ya(a, !1, i.find(a.selector).first().attr("vic")), b.append(f))
        }), d = ha("plus", "Clone"), wc(d).unbind("click").bind("click", function(a) {
            return E(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(d), j && !l && (h = ha("arrow-thick-right", "Sort Next"), wc(h).unbind("click").bind("click", function(a) {
            return H(i.attr("vic"), !0), a.stopPropagation && a.stopPropagation(), a.returnValue = !1, !1
        }), b.append(h)), i.append(b)
    }), wc(document).on("keyup paste input", ".vgb", function() {
        "" !== wc(this).val() ? wc(".vga").removeClass("vih") : wc(".vga").addClass("vih")
    }), wc(".vgb").keyup(function(a) {
        13 === a.keyCode && "" !== wc(".vgb").val() && (Ba(), wc.modal.close())
    }), wc(".vga").on("click", function() {
        Ba(), wc.modal.close()
    }), wc(document).on("keyup paste input", '.nav-container .vhz [contenteditable="true"], header.vhz [contenteditable], [vqj].modal-container.vhz [contenteditable]', function() {
        Ea()
    }), wc(document).on("keyup paste input focus mousedown mouseup", ".nav-container .vir[nav-id] [contenteditable], header.vir, [vqj].modal-container.vir", function() {
        var a = wc(this);
        a.is("[vqj]") && wc('#veu [vqj="' + a.attr("vqj") + '"]').removeClass("vir").addClass("vhz"), Aa(wc(this)), wc(this).removeClass("vir").addClass("vhz")
    }), wc(".vfo").click(function() {
        wc(".vmm").closest(".vkq").remove(), wc(this).closest(".vho").removeClass("vhr");
        var a = wc(this).text();
        wc(this).closest(".vho").find(".vly").text(a), Ga()
    }), wc(document).on("click", ".vby", function() {
        var a = wc(this).parent().attr("nav-id");
        wc(this).parent().remove(), wc("." + a).remove(), Ea()
    }), wc(document).on("click", ".vfi", function() {
        Fa(wc(this).attr("nav-id"), !0), wc(this).closest(".vho").removeClass("vhr");
        var a = wc(this).text();
        wc(this).closest(".vho").find(".vly").text(a)
    }), wc(document).on("click", ".vfg", function() {
        var a = wc("." + Ka());
        wc(".vev").each(function() {
            var b = wc(this).data("vff");
            b.forEach(function(b) {
                a.removeClass(b.className)
            })
        }), a.addClass(wc(this).attr("nav-class")), wb(), Pc()
    }), wc(".vgk").click(Wa), wc(".vdh").click(Wa), wc(document).on("click", ".vks", function() {
        var a = wc(this).parent().attr("optionalclass"),
            b = wc(this).parent().attr("classtarget");
        wc(this).hasClass("vkr") || (wc(this).parent().find(".vks").toggleClass("vkr"), wc(this).hasClass("choice-button-on") ? wc(b).addClass(a) : wc(b).removeClass(a)), wc(b).each(function() {
            "" === wc(this).attr("class") && wc(this).removeAttr("class")
        }), wc(this).hasClass("refresh") && Pc(b), wb()
    }), wc(document).on("click", ".vkt", function(a) {
        var b = wc(this).parent().attr("optionalClass"),
            c = wc(this).parent().attr("classtarget"),
            d = "";
        a.stopPropagation(), wc(this).hasClass("vku") ? (wc(c).removeClass(b), d = !1) : (wc(c).addClass(b), d = !0), wc(this).toggleClass("vku"), wc(c).each(function() {
            "" === wc(this).attr("class") && wc(this).removeAttr("class")
        }), wc(this).hasClass("refresh") && Pc(wc(c).attr("vic")), "parallax" === b && (Fb(), "undefined" != typeof window.mr_parallax && window.mr_parallax.callback(c)), "scroll-assist" === b && "undefined" != typeof window.mr_parallax && (window.mr_parallax.mr_scrollAssist = d), wb()
    }), wc(document).on("click", ".vkv", function() {
        var a, b = wc(this).attr("optionalclass"),
            c = wc(this).parent().attr("classtarget");
        wc(this).hasClass("vkr") || (a = wc(this).parent().find(".vkv.vkw").attr("optionalclass"), wc(this).parent().find(".vkv").removeClass("vkw"), wc(this).addClass("vkw"), wc(c).removeClass(a).addClass(b)), wc(c).each(function() {
            "" === wc(this).attr("class") && wc(this).removeAttr("class")
        }), wb(), wc(this).hasClass("refresh") && Pc(c)
    }), wc(document).on("click", ".vno", function() {
        Va("." + wc(this).attr("vnr"), wc(this).data("vnq"), !0)
    }), wc(".vbj").on("click", function() {
        Xa(), wc.modal.close()
    }), wc(".vbg").keyup(function(a) {
        13 === a.keyCode && (Xa(), wc.modal.close())
    }), wc(document).on("click", ".vgc:not(.vqg)", function() {
        vb(), wc(".vfw").removeClass("empty-vfw")
    }), wc(".vpt").click(function() {
        Hc === !0 && wb();
        var a = wc(".vge .vjl");
        a.attr("vpx", a.text()).text("New Page");
        var b = wc(".vge .vew p:first");
        b.attr("vpx", b.text()).text("Give your new page a name."), vb("vhd"), wc(".vfw").removeClass("empty-vfw")
    }), wc(document).on("keyup paste input", ".vgf", function() {
        "" !== wc(this).val() ? wc(".vgd").removeClass("vih") : wc(".vgd").addClass("vih")
    }), wc(".vgf").keyup(function(a) {
        var b = wc(this).val();
        13 === a.keyCode && "" !== b && $a(b)
    }), wc(".vgd").on("click", function() {
        var a = wc(".vgf").val();
        "" !== a && $a(wc(".vgf").val())
    }), wc(document).on("click", ".ves", function() {
        var a;
        _b() ? (a = wc(this).data(), a.postId !== wp_data.current_page.post_id && (Ic === !0 ? e(a) : (t(), Hb("You have unsaved changes.", "Proceed without saving?", "Proceed", function() {
            e(a)
        }, function() {
            u()
        })))) : yb(wc(this).attr("state-id"))
    }), wc(document).on("click", ".vdj", function() {
        return K(wc(this).parent().attr("state-id")), !1
    }), wc(document).on("click", ".vbz", function() {
        var a = wc(this).parent(),
            b = a.attr("state-id"),
            c = a.attr("vjh");
        return Hb("Confirm Delete", "Are you sure you want to delete " + c + "?", "Delete", function() {
            Ab(b)
        }), !1
    }), wc(document).on("click", ".vpy", function() {
        var a = wc(this).parent().attr("state-id"),
            b = wc(this).parent().attr("vjh"),
            c = wc(".vge .vjl"),
            d = wc(".vge .vew p:first"),
            e = wc(".vge .vgf");
        return c.attr("vpx", c.text()).text("Rename " + b), d.attr("vpx", d.text()).text("Give your page a new name."), e.attr("viy", a), e.attr("vqa", b), e.val(b), vb("vpz"), !1
    }), wc(".vei").on("blur keyup paste input", function() {
        var a = "undefined" == typeof wc(this).val() ? "" : wc(this).val();
        document.title = "" !== a ? a : Fc, wc.localStorage(oc + ".vhh") ? (wc('#vhl [viy="' + wc.localStorage(oc + ".vhh") + '"]').attr("page-title", a), wc.localStorage(oc + ".vhk", wc("#vhl").html())) : wc.localStorage(oc + ".vhj", a), wb()
    }), wc(document).on("click focus blur keyup paste input", ".vei.vlx", function() {
        wc.localStorage(oc + ".vhh", ""), wc.localStorage(oc + ".vhg", ""), wc(".vhe").addClass("vih"), wc(this).removeClass("vlx")
    }), wc(".vpp").on("blur keyup paste input", function() {
        wb()
    }), wc(".vpq").on("blur keyup paste input", function() {
        wb()
    });
    var Pc = function(a) {
            function b(a) {
                var b = ".viu";
                _.isUndefined(a) || (b = ".viu " + a), wc(b).find("[no-src]").each(function() {
                    wc(this).attr("src", wc(this).attr("no-src")).removeAttr("no-src")
                }), _b() && wc(b).find(".variant-shortcode:not(.vru)").each(function() {
                    m(wc(this))
                })
            }
            var c, d = wc(".viu").get(0).scrollTop;
            wc(".viu " + wc("body").attr("mrv_contentTarget"));
            wc(".viu").empty().html(wc("#veu").html()), c = wc(".viu ." + a).closest("footer").length ? "footer" : "section", c = wc(".viu ." + a).closest(c).attr("vic"), wc('.vqm[vnt="' + c + '"]').length && ib(c), setTimeout(function() {
                "undefined" == typeof mr ? (b(), reInit(".viu")) : (b(), mr.documentReady(mr.setContext(".viu")), mr.windowLoad(mr.setContext(".viu"))), Kb(), Lb(), za(), wc(".viu .embedded-video-holder").each(function() {
                    wc(this).addClass("vju")
                }), Fb(), wc(".viu").get(0).scrollTop = d, wc(".viu .vnx").trigger("mouseenter")
            }, 100)
        },
        Qc = _.debounce(Pc, 1e3);
    wc(".vhv").on("submit", ".vqm form", function() {
            return !1
        }), zc.controlTitle = {}, zc.controlTitle.render = function(a, b) {
            var c = wc("<div>"),
                d = wc("<span>"),
                e = "undefined" != typeof b ? wc("<div>") : !1;
            return c.addClass("vqt"), d.addClass("vqu").text(a), c.append(d), e && (e.addClass("vqv").attr("vrg", b).text("?"), c.append(e)), c
        }, zc.images = {}, zc.images.render = function(a) {
            var b = wc("<div>"),
                c = zc.controlTitle.render("Images", "Images in the section are shown here, click a thumbnail to change the image."),
                d = wc("<ul>");
            return b.addClass("vqq"), d.addClass("vqw").attr("vrf", a.length), wc(a).each(function() {
                var a = wc("<li>"),
                    b = wc("<img>"),
                    c = wc(this),
                    e = c.attr("vic");
                b.attr("alt", "Image Thumbnail").attr("src", c.attr("src")).addClass(e).attr("vic", e), a.append(b), d.append(a)
            }), b.append(c).append(d), b
        }, wc(document).on("click", ".vhv .vqm .vqw li img", function() {
            na(wc(this).attr("vic"))
        }), zc["switch"] = {}, zc["switch"].render = function(a, b) {
            var c = zc.controlTitle.render(a.title, a.explainer),
                d = wc("<div>"),
                e = wc("<div>"),
                f = wc("<div>"),
                g = _.isUndefined(a.attribute) ? b.hasClass(a.onClass) ? !0 : !1 : a.masterTarget.attr(a.attribute) === a.onProperty ? !0 : !1;
            return e.addClass("vqx").append(f), g && e.addClass("vhr"), d.addClass("vqq vqs").append(c).append(e), d.data(a), d
        }, zc["switch"].handle = function(a) {
            var b = a.data();
            "undefined" != typeof b.attribute ? (b.target.attr(b.attribute, b.state ? b.onProperty : b.offProperty), "" === b.target.attr(b.attribute) && b.target.removeAttr(b.attribute)) : b.target.addClass(b.state ? b.onClass : b.offClass).removeClass(b.state ? b.offClass : b.onClass), wb(), zc.callback.after(a), "undefined" != typeof b.callback && $b(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Pc(b.targetID)
        }, wc(document).on("click", ".vhv .vqm .vqx", function() {
            var a = wc(this).closest(".vqq");
            wc(this).toggleClass("vhr");
            var b = wc(this).is(".vhr") ? !0 : !1;
            a.data("state", b), zc["switch"].handle(a)
        }), zc.slider = {}, zc.slider.render = function(a, b) {
            var c, d, e, f = zc.controlTitle.render(a.title, a.explainer),
                g = wc("<div>"),
                h = wc("<form>"),
                i = wc("<input>"),
                j = wc("<ul>"),
                k = !1,
                l = null;
            return i.addClass("vrd").attr("type", "range").attr("min", "0").attr("max", a.options.length - 1), h.append(i), _.isUndefined(a["default"]) || (l = a["default"]), j.addClass("vre").attr("vrf", a.labels.length), wc(a.labels).each(function() {
                wc("<li>").text(this).appendTo(j)
            }), "undefined" != typeof a.attribute ? (e = b.attr(a.attribute), i.attr("value", wc.inArray(e, a.options)).attr("title", a.title + ": " + e)) : (wc(a.options).each(function(a, e) {
                b.hasClass(e) && "" !== e && (k = !0, i.attr("value", a).attr("title", e.title + ": " + this)), e === l && (c = a, d = e)
            }), k || null === l || i.attr("value", c).attr("title", a.title + ": " + d)), g.addClass("vqq").append(f).append(h).append(j), g.data(a), g
        }, zc.slider.handle = function(a) {
            var b = a.closest(".vqq"),
                c = b.data(),
                d = parseInt(a.val(), 10),
                e = c.options[d];
            "undefined" != typeof c.attribute ? "" === e ? c.target.removeAttr(c.attribute) : c.target.attr(c.attribute, e) : (wc(c.options).each(function(a, b) {
                c.target.removeClass(b)
            }), c.target.addClass(e)), !_.isUndefined(c.titles) && _.isArray(c.titles) ? a.attr("title", c.title + ": " + c.titles[d]) : a.attr("title", c.title + ": " + e), zc.callback.after(b), "undefined" != typeof c.callback && $b(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && Qc(c.targetID), vc()
        }, wc(".vhv").on("change, input", ".vqm .vrd", function(a) {
            zc.slider.handle(wc(this))
        }), zc.text = {}, zc.text.render = function(a, b, c) {
            var d = zc.controlTitle.render(a.title, a.explainer),
                e = wc("<div>"),
                f = wc("<form>"),
                g = wc("<input>");
            return e.addClass("vqq"), g.addClass("vrc").attr("type", "text").attr("placeholder", a.placeholder).attr("name", a.title), "undefined" != typeof a.masterTarget.attr(a.attribute) && g.val(a.masterTarget.attr(a.attribute)), f.append(g), e.append(d).append(f), g.data(a), e
        }, zc.text.handle = _.debounce(function(a) {
            var b = a.data(),
                c = a.val(),
                d = a.getCursorPosition();
            a.closest(".vqm").data("focussedElementValue", a.val()).data("focussedElementAttribute", b.attribute).data("cursorPosition", d), "" !== c ? b.masterTarget.attr(b.attribute, c) : b.masterTarget.removeAttr(b.attribute), vc(), zc.callback.after(a), "undefined" != typeof b.callback && $b(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Pc(b.targetID)
        }, 700), wc(".vhv").on("keyup paste", ".vqm .vrc", function(a) {
            _.contains([37, 38, 39, 40], a.which) || zc.text.handle(wc(this))
        }), zc.choice = {}, zc.choice.render = function(a) {
            var b, c, d = zc.controlTitle.render(a.title, a.explainer),
                e = wc("<div>"),
                f = wc("<ul>");
            return e.addClass("vqq"), f.addClass("vqy").attr("vrf", a.options.length), "multi" === a.type && f.addClass("vra"), "undefined" != typeof a.required && (a.required === !0 || "true" === a.required) && f.addClass("vrb"), wc(a.options).each(function(d, e) {
                var g = wc("<li>"),
                    h = "";
                h = "undefined" != typeof e.onClass ? e.onClass : h, h = "undefined" != typeof e.onProperty ? e.onProperty : h, "undefined" != typeof e.colourClass && (f.addClass("vqz"), g.addClass(e.colourClass)), "undefined" != typeof e.html && g.html(e.html), "multi" === a.type ? "undefined" != typeof e.offClass && (a.masterTarget.hasClass(e.offClass) || a.masterTarget.hasClass(e.onClass) && (g.addClass("vhr"), c = !0), _.isUndefined(e.offClass) || "" === e.onClass && (a.masterTarget.hasClass(e.offClass) || (g.addClass("vhr"), c = !0))) : "" !== h ? "undefined" != typeof a.attribute ? a.masterTarget.attr(a.attribute, h) && (g.addClass("vhr"), c = !0) : (a.masterTarget.hasClass(h) && (g.addClass("vhr"), c = !0), _.isUndefined(e.offClass) || "" === e.onClass && (a.masterTarget.hasClass(e.offClass) || (g.addClass("vhr"), c = !0))) : b = g, g.data(a), g.data("subOption", e), f.append(g)
            }), c || b.addClass("vhr"), e.append(d).append(f), e
        }, zc.choice.handle = function(a) {
            var b, c = a.data();
            b = _.pluck(c.options, "onClass"), _.each(b, function(a) {
                c.target.removeClass(a)
            }), c.target.addClass(c.subOption.onClass), wb(), zc.callback.after(a), "undefined" != typeof c.callback && $b(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && Pc(c.targetID)
        }, wc(document).on("click", ".vhv .vqm .vqy li:not(.vra li)", function() {
            wc(this).addClass("vhr"), wc(this).siblings().removeClass("vhr");
            wc(this).is(".vhr") ? !0 : !1;
            zc.choice.handle(wc(this))
        }), zc.multi = {}, zc.multi.render = zc.choice.render, wc(document).on("click", ".vhv .vqm .vqy.vra li", function() {
            var a = wc(this),
                b = a.is(".vhr") ? !0 : !1;
            return a.closest(".vra").is(".vrb") && b && !a.siblings("li.vhr").length ? !1 : (wc(this).toggleClass("vhr"), b = b ? !1 : !0, wc(this).data("state", b), void zc.multi.handle(wc(this)))
        }), zc.multi.handle = function(a) {
            var b = a.data();
            b.state ? (b.target.removeClass(b.subOption.offClass).addClass(b.subOption.onClass), a.attr("title", b.subOption.onTitle)) : (b.target.removeClass(b.subOption.onClass).addClass(b.subOption.offClass), a.attr("title", b.subOption.offTitle)), wb(), zc.callback.after(a), "undefined" != typeof b.callback && $b(b.callback, window, b.targetSelector), "undefined" != typeof b.refresh && ("true" === b.refresh || b.refresh === !0) && Pc(b.targetID)
        }, zc.button = {}, zc.button.render = function(a, b, c) {
            var d = zc.controlTitle.render(a.title, a.explainer),
                e = wc("<div>"),
                f = wc("<div>");
            return f.addClass("vrq").text(a.buttonText), e.addClass("vqq vqs").append(d).append(f), f.data(a), e
        }, wc(document).on("click", ".vhv .vqm div.vrq", function() {
            zc.button.handle(wc(this))
        }), zc.button.handle = function(a) {
            var b = a.data();
            b.context = _.isUndefined(b.context) ? Lc : b.context, zc.callback.after(a), "undefined" != typeof b.callback && $b(b.callback, b.context, b.targetID)
        }, zc.dropdown = {}, zc.dropdown.render = function(a) {
            var b = zc.controlTitle.render(a.title, a.explainer),
                c = wc("<div>"),
                d = wc("<div>"),
                e = wc("<div>"),
                f = wc("<span>"),
                g = wc("<ul>");
            return c.addClass("vqq"), d.addClass("vrv").addClass("vry"), e.addClass("vrw"), g.addClass("vrx").attr("vrf", a.options.length), wc(a.options).each(function(b, c) {
                var d = wc("<li>"),
                    e = "undefined" != typeof c.text ? c.text : "";
                "undefined" != typeof c.colourClass && (g.addClass("vqz"), d.addClass(c.colourClass)), "" !== e && ("undefined" != typeof a.attribute ? a.masterTarget.attr(a.attribute) === c.value && (d.addClass("vhr"), f.text(e)) : a.masterTarget.hasClass(c.value) && (f.text(e), d.addClass("vhr")), e = wc("<span>").text(e)), d.data(a), d.data("subOption", c), d.append(e), g.append(d)
            }), c.append(b).append(g), e.append(f), d.append(e), d.append(g), c.append(d), c
        }, zc.dropdown.handle = function(a) {
            var b, c = a.data();
            _.isUndefined(c.attribute) ? (b = _.pluck(c.options, "onClass"), _.each(b, function(a) {
                c.target.removeClass(a)
            }), c.target.addClass(c.subOption.onClass)) : (c.target.attr(c.attribute, c.subOption.value), zc.dropdown.active.find(".vrw").text(c.subOption.text)), zc.dropdown.closeActive(), wb(), zc.callback.after(a), "undefined" != typeof c.callback && $b(c.callback, window, c.targetSelector), "undefined" != typeof c.refresh && ("true" === c.refresh || c.refresh === !0) && Pc(c.targetID)
        }, wc(document).on("click", ".vhv .vqm .vrx li:not(.vra li)", function() {
            return wc(this).addClass("vhr"), wc(this).siblings().removeClass("vhr"), zc.dropdown.handle(wc(this)), !1
        }), zc.dropdown.active = null, wc(document).on("click touchstart", ".vrv", function(a) {
            var b = wc(this),
                c = wc(a.target);
            return zc.dropdown.active && zc.dropdown.active.is(b) && c.is(".vrw, .vrw *") ? zc.dropdown.closeActive() : zc.dropdown.open(b), !1
        }), wc(document).on("click touchstart", function(a) {
            zc.dropdown.closeActive()
        }), zc.dropdown.open = function(a) {
            zc.dropdown.closeActive(), zc.dropdown.active = a, a.addClass("vhr")
        }, zc.dropdown.closeActive = function() {
            null !== zc.dropdown.active && (zc.dropdown.active.removeClass("vhr"), zc.dropdown.active = null)
        }, zc.callback = {}, zc.callback.after = function(a) {
            var b = a.data();
            (b.target.is("footer.vir") || b.target.closest("footer.vir").length) && wc(".viu " + b.targetSelector).trigger("input")
        }, wc(document).on("click", ".section-vgw", function() {
            wc(".vqm").addClass("vhr"), wc(".section-vgw").remove();
            var a = wc(this).attr("vnt");
            return wc(".viu, .viu ." + a + ", #veu ." + a).addClass("vrh"), ib(a), !1
        }), wc(document).on("click", ".close-vqm, .viu, .vjc", function() {
            fb()
        }), wc(document).on("contextmenu", ".vqm, .vni", function(a) {
            a.stopPropagation(), wc(this).trigger("click")
        }), wc(document).on("click", ".vca", function() {
            var a = wc(this).attr("vbq");
            wc("#veu ." + a).remove(), wc(".viu ." + a).remove(), wc("[vik=" + a + "]").remove(), wc(this).parent().remove(), Pc(), wc(".vem").find(".vaa").length ? wc(".vem").removeClass("empty-vem") : wc(".vem").addClass("empty-vem"), wc(".viu .vnj").remove(), vc(), Eb(), Fb()
        }), wc(document).on("keydown", ".vaa span", function(a) {
            return 13 === a.keyCode ? (a.stopPropagation(), !1) : void 0
        }), wc(document).on("keyup paste input", ".vaa span", function(a) {
            return 13 === a.keyCode ? (a.stopPropagation(), !1) : (jb(wc(this).closest(".vaa")), xa(wc(this)), wb(), !0)
        }), wc(".vap").click(function() {
            wc('.vfj [vit="vhz"]').remove(), wc("#vbn").html(""), wc.localStorage(oc + ".vbo", ""), wc(".vap").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                wc(".vap").html("Clear Navs").removeClass("vak").addClass("val")
            }, 1500)
        }), wc(".vao").click(function() {
            wc('.vdm [vit="vhz"]').remove(), wc.localStorage(oc + ".vbm", ""), wc(".vao").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                wc(".vao").html("Clear Footers").removeClass("vak").addClass("val")
            }, 1500)
        }), wc(".vaq").click(function() {
            var a;
            wc("#vhl li").each(function() {
                var a, b = wc(this).attr("viy");
                a = wc.localStorage.io(oc + ".state.veu." + b), a.remove(), a = wc.localStorage.io(oc + ".state.vem." + b), a.remove(), wc(this).remove()
            }), wc(".vfw div").remove(), wc(".vfw").addClass("empty-vfw"), a = wc.localStorage.io(oc + ".state.veu"), a.remove(), a = wc.localStorage.io(oc + ".state.vem"), a.remove(), a = wc.localStorage.io(oc + ".vhj"), a.remove(), a = wc.localStorage.io(oc + ".vhh"), a.remove(), a = wc.localStorage.io(oc + ".vhg"), a.remove(), a = wc.localStorage.io(oc + ".vhk"), a.remove(), wc(".vaq").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                wc(".vaq").html("Clear Pages").removeClass("vak").addClass("val")
            }, 1500)
        }), wc(".vpc").click(function() {
            wc.localStorage(oc + ".gallery.images", ""), setTimeout(function() {
                wc(".vpc").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
            }, 1500)
        }), wc(".van").click(function() {
            wc(".vfw div").remove(), wc("#vhl li").remove(), window.localStorage.clear(), wc(".van").html("Cleared").removeClass("val").addClass("vak"), setTimeout(function() {
                wc(".van").html("Rebooting").removeClass("vak").addClass("val"), window.location.reload()
            }, 1500)
        }), wc(".viu").click(function() {
            wc(".vjq").removeClass("vgq")
        }), wc(".vjq .vex").click(function() {
            wc(this).closest(".vjq").removeClass("vgq")
        }), wc(".vgw").click(function() {
            wc(".vkm").toggleClass("vme"), wc(".vgw").toggleClass("vmg")
        }), wc(".vjc").mouseenter(function() {
            wc(".vkm").removeClass("vjz")
        }), wc(".vlf li").not(_.isUndefined(Jc["interface"]) ? "" : Jc["interface"].sidebarButtons).click(function() {
            wc(".vlf li").removeClass("vhr"), wc(this).addClass("vhr");
            var a = wc(this).index() + 1;
            wc(".vlp").removeClass("vhr"), wc(".vlp:nth-child(" + a + ")").addClass("vhr")
        }), wc(".vac").click(function() {
            pb(), wc(".vgm").click(), wc(".vlv").toggleClass("vmf"), wc(".vlv").find(".vho").removeClass("vhr"), Eb()
        }), wc(".vma").click(function() {
            wc(".vgi").toggleClass("vhr"), wc(this).toggleClass("vhr")
        }), wc(".vgh").click(function() {
            wc(".vgi").removeClass("vhr"), wc(".vma").removeClass("vhr")
        }), wc(".vlm").click(function() {
            ob()
        }), wc(".vho span").click(function() {
            wc(this).closest(".vho").toggleClass("vhr"), setTimeout(function() {
                Eb()
            }, 301)
        }), wc(document).on("click", ".vgl", function() {
            var a = wc(this);
            a.hasClass("catch-double-click") ? wc(".vad").toggleClass("vhr") : (a.addClass("catch-double-click"), setTimeout(function() {
                a.removeClass("catch-double-click")
            }, 300), mb(wc(this).attr("vgv"))), wc(".vem").removeClass("empty-vem"), Eb()
        }), wc(".vev").each(function() {
            var a = (wc(this).data("vjt"), wc(this).attr("id"));
            wc(".vfj").append('<li class="vfi" nav-id="' + a + '" vit="vir">' + wc(this).attr("data-vjt") + "</li>")
        }), wc("#vdk .vim").each(function() {
            var a = wc(this).attr("vbr"),
                b = wc(this).attr("id");
            wc(".vdm").append('<li class="vdl" vid="' + b + '" vit="vir">' + a + "</li>")
        }), wc(document).on("click", ".vgr", function() {
            wc(".vib").toggleClass("vib vjb"), wc(this).toggleClass("vhr vdv vgr")
        }), wc(document).on("click", ".vdv", function() {
            wc(".vjb").toggleClass("vib vjb"), wc(this).toggleClass("vgr vdv vhr")
        }), wc(document).on("click", ".vgh", function() {
            if (wc(".vgh").removeClass("vhr"), wc(this).addClass("vhr"), "*" === wc(this).attr("vbp")) return wc(".vgl").removeClass("vih"), void wc(".vma span").text("All");
            wc(".vgl").addClass("vih"), wc('.vgl[vbp*="' + wc(this).attr("vbp") + '"]').removeClass("vih");
            var a = wc(this).text();
            wc(".vma span").text(a), Eb()
        }), this.showSectionsSelector = rb, wc(document).on("mouseenter", ".viu ul.slides:not(.vjx)", function(a) {
            var b = wc(this);
            try {
                b.parent().flexslider("pause")
            } catch (c) {}
            try {
                b.closest(".slider").flexslider("pause")
            } catch (c) {}
            try {
                b.trigger("stop.owl.autoplay")
            } catch (c) {}
            try {
                b.closest(".slider").length && b.flickity("pausePlayer")
            } catch (c) {}
            b.addClass("paused"), wc("#veu .vnx").removeClass("vnx"), tb(b.attr("vic")), wc("#veu ." + b.attr("vic")).addClass("vnx")
        }), wc(document).on("mouseleave", ".viu ul.slides.paused:not(.vjx)", function(a) {
            var b = wc(this);
            try {
                b.parent().flexslider("play")
            } catch (c) {}
            try {
                b.closest(".slider").flexslider("play")
            } catch (c) {}
            try {
                b.closest(".slider").length && b.flickity("unpausePlayer")
            } catch (c) {}
            b.removeClass("paused")
        }), vc = _.debounce(wb, 400), -1 !== navigator.userAgent.indexOf("NT 6.") && wc("head").append("<style>::-webkit-scrollbar { width: 8px; background-color: rgba(0,0,0,0); -webkit-border-radius: 100px; } ::-webkit-scrollbar-thumb:vertical { background: rgba(0,0,0,0.3); -webkit-border-radius: 100px; } </style>"), wc(".vet").click(function() {
            wc(".vet").addClass("vih"), yb()
        }), wc(".vhd").click(function() {
            bb(!0), rb()
        }), wc(document).on("blur keyup paste input", ".viu [contenteditable], .viu strong", function(a) {
            var b, c = wc(this);
            "paste" === a.type && (a.preventDefault(), b = (a.originalEvent || a).clipboardData.getData("text/plain").replace(/\n/g, "<br>"), document.execCommand("insertHtml", !1, b)), c.children().length ? "" === c.html() && c.html("&nbsp;") : "" === c.text() && c.text(" "), wc("#veu ." + c.attr("vic")).html(c.html()), wb()
        }), wc(document).on("keydown", ".viu [contenteditable]", function(a) {
            return 13 === a.keyCode ? Yb(a) ? !0 : !1 : void 0
        }), wc(document).on("keydown", '.viu [type="submit"]', function(a) {
            return 32 === a.keyCode ? Zb(a) ? !0 : !1 : void 0
        }), wc(document).on("blur keyup paste input", ".vir:not(nav,header,footer,[vqj],[nav-id])", function() {
            wc(this).removeClass("vir").addClass("vhz")
        }), wc(".viu").on("mouseenter", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, label, address", function() {
            wc(this).addClass("vdw")
        }), wc(".viu").on("mouseleave", "p , span, a, h1, h2, h3, h4, h5, h6, strong, em, li, ul, div, i, img, input, textarea, blockquote, figcaption, td, th, .vnu, label, address", function() {
            wc(this).removeClass("vdw")
        }), wc(".viu").on("mouseenter", "section, header, footer", function() {
            _.isUndefined(wc(this).attr("vic")) || hb(wc(this).attr("vic"))
        }), wc(document).on("mouseenter", '[vic] [class*="medium-"]', function(a) {
            xc = wc(this).attr("vic")
        }), wc(document).on("mouseenter", '[vic] [class*="col-md-"]', function(a) {
            xc = wc(this).attr("vic")
        }), wc(document).on("mouseenter", '[vic] [class*="col-sm-"]:not([class*="col-md-"])', function(a) {
            xc = wc(this).attr("vic")
        }), wc(document).on("mouseenter", '[vic] [class*="col-xs-"]:not([class*="col-md-"])', function(a) {
            xc = wc(this).attr("vic")
        }), wc(document).on("keyup", document, function(a) {
            _.isString(xc) && a.ctrlKey && (219 === a.keyCode && J(xc), 221 === a.keyCode && I(xc))
        }), wc(document).on("click", "a.vjx", function(a) {
            return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }), wc("img").on("dragstart", function(a) {
            a.preventDefault()
        }), wc(document).on("submit", ".viu form", function(a) {
            return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
        }), wc(document).on("click", ".vjb", function() {
            var a;
            wc(this).removeClass("vjb vib").addClass("vjm"), wc("#veu ." + wc(this).attr("vic")).removeClass("vjb vib").addClass("vjm"), wc(this).attr("vjw") && (a = wc(this).closest("nav, header, section, footer").find(wc(this).attr("vjw")).attr("vic"), wc(".viu ." + a).removeClass("vjb vib").addClass("vjm"), wc("#veu ." + a).removeClass("vjb vib").addClass("vjm")), Ea(), P(), wb()
        }), wc(document).on("mouseleave", '.viu .vnu, .viu div[class*="col-"], .viu .embed-video-container, .viu .local-video-container, .viu .media-embed-container, .viu ul.slides, .viu .slider, .viu .voh', function(a) {
            window.mr_variant.removeIconButtons === !0 && wc(this).find(".vnw").remove()
        }), this.initSizes = Eb, wc(".vdf").on("click", function() {
            Rb(), wc.modal.close()
        }), wc(".vda, .vdg, .vdb").keyup(function(a) {
            13 === a.keyCode && (Rb(), wc.modal.close())
        }), wc(document).on("mouseenter", ".viu .embed-video-container:not(.voh .embed-video-container, .viu .slides > li > .embed-video-container), .viu .media-embed-container:not(.voh .media-embed-container, .viu .slides > li > .media-embed-container)", function() {
            var a, b = wc('<div class="vnw"></div>'),
                c = wc(this).find("iframe");
            ic.options.forEach(function(d) {
                c.is(d.selector) && (a = Ya(d, !1, c.attr("vic")), b.append(a))
            }), c.closest(".embed-video-container, .media-embed-container").append(b)
        }), wc(document).on("mouseenter", ".viu .local-video-container video:not(.voh .local-video-container video, .viu .slides > li > .local-video-container video, .viu .slides .owl-item > li > .local-video-container video)", function() {
            var a, b = wc(this).closest(".local-video-container").find(".vnw").length ? wc(this).closest(".local-video-container").find(".vnw") : wc('<div class="vnw"></div>'),
                c = wc(this);
            b.find('[vof="' + c.attr("vic") + '"]').length || (a = Pb(c.attr("vic"), !1), b.append(a), c.closest(".local-video-container").append(b))
        }), wc.fn.focusEnd = function() {
            wc(this).focus();
            var a = wc("<span />").appendTo(wc(this)),
                b = a.get(0),
                c = null,
                d = null;
            return document.selection ? (c = document.body.createTextRange(), c.moveToElementText(b), c.select()) : window.getSelection && (c = document.createRange(), c.selectNode(b), d = window.getSelection(), d.removeAllRanges(), d.addRange(c)), a.remove(), this
        },
        function(a, b) {
            a.fn.selectRange = function(a, c) {
                return c === b && (c = a), this.each(function() {
                    if ("selectionStart" in this) this.selectionStart = a, this.selectionEnd = c;
                    else if (this.setSelectionRange) this.setSelectionRange(a, c);
                    else if (this.createTextRange) {
                        var b = this.createTextRange();
                        b.collapse(!0), b.moveEnd("character", c), b.moveStart("character", a), b.select()
                    }
                })
            }
        }(window.jQuery),
        function(a, b) {
            a.fn.getCursorPosition = function() {
                var b = a(this).get(0),
                    c = 0;
                if ("selectionStart" in b) c = b.selectionStart;
                else if ("selection" in document) {
                    b.focus();
                    var d = document.selection.createRange(),
                        e = document.selection.createRange().text.length;
                    d.moveStart("character", -b.value.length), c = d.text.length - e
                }
                return c
            }
        }(window.jQuery), this.getURLParameter = Tb, this.importState = ta, this.variantAlert = Gb
}