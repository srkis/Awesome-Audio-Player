(()=>{
    var __webpack_modules__ = {
        567: (e,a,t)=>{
            "use strict";
            t.d(a, {
                O: ()=>i
            });
            const i = {
                PLAYLIST_TRANSITION_DURATION: 300,
                DEBUG_STYLE_1: "background-color: #aaa022; color: #222222;",
                DEBUG_STYLE_2: "background-color: #7c3b8e; color: #ffffff;",
                DEBUG_STYLE_3: "background-color: #3a696b; color: #eeeeee;",
                DEBUG_STYLE_ERROR: "background-color: #3a696b; color: #eeeeee;",
                URL_WAVESURFER: "https://unpkg.com/wavesurfer.js@3.3.3/dist/wavesurfer.min.js",
                WAVESURFER_MAX_TIMEOUT: 2e4,
                URL_JQUERY: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
                DEBUG_STYLE_PLAY_FUNCTIONS: "background-color: #daffda; color: #222222;",
                ERRORED_OUT_CLASS: "errored-out",
                ERRORED_OUT_MAX_ATTEMPTS: 5
            }
        }
        ,
        424: (e,a)=>{
            a.P = {
                design_skin: "skin-default",
                call_from: "default",
                autoplay_on_scrub_click: "off",
                cueMedia: "on",
                preload_method: "metadata",
                loop: "off",
                pause_method: "pause",
                settings_extrahtml: "",
                settings_extrahtml_before_play_pause: "",
                settings_extrahtml_after_play_pause: "",
                settings_trigger_resize: "0",
                design_thumbh: "default",
                extra_classes_player: "",
                disable_volume: "default",
                disable_scrub: "default",
                disable_timer: "default",
                disable_player_navigation: "off",
                scrub_show_scrub_time: "on",
                player_navigation: "default",
                type: "audio",
                enable_embed_button: "off",
                embed_code: "",
                skinwave_dynamicwaves: "off",
                soundcloud_apikey: "",
                skinwave_enableSpectrum: "off",
                skinwave_place_thumb_after_volume: "off",
                skinwave_place_metaartist_after_volume: "off",
                skinwave_spectrummultiplier: "1",
                php_retriever: "soundcloudretriever.php",
                skinwave_mode: "normal",
                skinwave_wave_mode: "canvas",
                skinwave_wave_mode_canvas_mode: "normal",
                skinwave_wave_mode_canvas_normalize: "on",
                skinwave_wave_mode_canvas_waves_number: "3",
                skinwave_wave_mode_canvas_waves_padding: "1",
                skinwave_wave_mode_canvas_reflection_size: "0.25",
                wavesurfer_pcm_length: "200",
                pcm_data_try_to_generate: "on",
                pcm_data_try_to_generate_wait_for_real_pcm: "on",
                pcm_notice: "off",
                notice_no_media: "on",
                sampleTimesMode: "realPrevivew",
                mobile_delete: "off",
                footer_btn_playlist: "off",
                mobile_disable_fakeplayer: "off",
                skinwave_comments_displayontime: "on",
                skinwave_comments_allow_post_if_not_logged_in: "on",
                skinwave_comments_links_to: "",
                skinwave_comments_enable: "off",
                skinwave_comments_mode_outer_selector: "",
                skinwave_comments_playerid: "",
                skinwave_timer_static: "off",
                default_volume: "default",
                volume_from_gallery: "",
                design_menu_show_player_state_button: "off",
                playfrom: "off",
                design_animateplaypause: "default",
                embedded: "off",
                embedded_iframe_id: "",
                google_analytics_send_play_event: "off",
                fakeplayer: null,
                failsafe_repair_media_element: "",
                action_audio_play: null,
                action_audio_play2: null,
                action_audio_pause: null,
                action_audio_end: null,
                action_audio_comment: null,
                action_received_time_total: null,
                action_audio_change_media: null,
                action_audio_loaded_metadata: null,
                action_video_contor_60secs: null,
                type_audio_stop_buffer_on_unfocus: "off",
                construct_player_list_for_sync: "off",
                settings_exclude_from_list: "off",
                design_wave_color_bg: "222222",
                design_wave_color_progress: "ea8c52",
                skin_minimal_button_size: "100",
                gallery_gapless_play: "off",
                preview_on_hover: "off",
                watermark_volume: "1",
                controls_external_scrubbar: "",
                parentgallery: null,
                scrubbar_type: "auto",
                settings_php_handler: "",
                view_scrubDisabled: "off"
            }
        }
        ,
        676: (e,a)=>{
            a.P = {
                design_skin: "skin-default",
                cueFirstMedia: "on",
                autoplay: "off",
                autoplayNext: "on",
                settings_enable_linking: "off",
                design_menu_position: "bottom",
                navigation_method: "mouseover",
                design_menu_state: "open",
                design_menu_show_player_state_button: "off",
                design_menu_width: "default",
                design_menu_height: "default",
                design_menu_space: "default",
                settings_php_handler: "",
                design_menuitem_width: "default",
                design_menuitem_height: "default",
                design_menuitem_space: "default",
                disable_menu_navigation: "off",
                loop_playlist: "on",
                menu_facebook_share: "auto",
                enable_easing: "off",
                settings_ap: "default",
                playlistTransition: "fade",
                embedded: "off",
                mode_showall_layout: "one-per-row",
                settings_mode: "mode-normal",
                settings_mode_showall_show_number: "on",
                mode_normal_video_mode: "auto"
            }
        }
        ,
        401: (e,a)=>{
            a.decode_json = function(e) {
                var a = {};
                if (e)
                    try {
                        a = JSON.parse(e)
                    } catch (a) {
                        return console.log(a, e),
                        null
                    }
                return a
            }
            ,
            a.loadScriptIfItDoesNotExist = (e,a)=>new Promise(((t,i)=>{
                console.log({
                    checkForVar: a
                }),
                a && t("loadfromvar");
                var s = document.createElement("script");
                s.onload = function() {
                    t("loadfromload")
                }
                ,
                s.onerror = function() {
                    i()
                }
                ,
                s.src = e,
                document.head.appendChild(s)
            }
            )),
            a.getBaseUrl = (e,a)=>{
                if (window[e])
                    return window[e];
                let t = document.getElementsByTagName("script");
                for (var i in t)
                    if (t[i] && t[i].src && String(t[i].src).indexOf(a) > -1)
                        break;
                var s = String(t[i].src).split("/");
                s.splice(-1, 1);
                const n = s.join("/");
                return window[e] = n,
                n
            }
            ,
            a.sanitizeToCssPx = e=>String(e).indexOf("%") > -1 || String(e).indexOf("em") > -1 || String(e).indexOf("px") > -1 || String(e).indexOf("auto") > -1 ? e : e + "px",
            a.setupTooltip = e=>{
                var a = Object.assign({
                    tooltipInnerHTML: "",
                    tooltipIndicatorText: "",
                    tooltipConClass: ""
                }, e);
                return `<div class="dzstooltip-con ${a.tooltipConClass}"><span class="dzstooltip main-tooltip   talign-end arrow-bottom style-rounded color-dark-light  dims-set transition-slidedown " style="width: 280px;"><span class="dzstooltip--inner">${a.tooltipInnerHTML}</span> </span></span><span class="tooltip-indicator">${a.tooltipIndicatorText}</span></div>`
            }
            ,
            a.isInt = function(e) {
                return "number" == typeof e && Math.round(e) % 1 == 0
            }
            ,
            a.isValid = function(e) {
                return void 0 !== e && "" != e
            }
            ,
            a.getRelativeX = function(e, a) {
                if (jQuery)
                    return e - jQuery(a).offset().left
            }
        }
        ,
        891: (e,a,t)=>{
            "use strict";
            t.r(a),
            t.d(a, {
                ajax_submit_views: ()=>n,
                ajax_submit_like: ()=>o,
                ajax_retract_like: ()=>r,
                ajax_comment_publish: ()=>l,
                ajax_submit_total_time: ()=>d,
                ajax_submit_download: ()=>c
            });
            var i = t(586);
            const s = t(401)
              , n = function(e) {
                var a = this
                  , t = jQuery
                  , n = {
                    action: "dzsap_submit_views",
                    postdata: 1,
                    playerid: a.the_player_id,
                    currip: a.currIp
                };
                a.cthis.attr("data-playerid-for-views") && (n.playerid = a.cthis.attr("data-playerid-for-views")),
                "" == n.playerid && (n.playerid = i.dzs_clean_string(a.data_source)),
                a.urlToAjaxHandler && (t.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: n,
                    success: function(e) {
                        window.console;
                        var t = a.cthis.find(".counter-hits .the-number").html();
                        t = parseInt(t, 10),
                        2 != a.increment_views && t++,
                        e && s.decode_json(e) && (t = s.decode_json(e).number),
                        a.cthis.find(".counter-hits .the-number").html(t),
                        a.ajax_view_submitted = "on"
                    },
                    error: function(e) {
                        window.console;
                        var t = a.cthis.find(".counter-hits .the-number").html();
                        t = parseInt(t, 10),
                        t++,
                        a.cthis.find(".counter-hits .the-number").html(t),
                        a.ajax_view_submitted = "on"
                    }
                }),
                a.ajax_view_submitted = "on")
            }
              , o = function(e) {
                var a = this
                  , t = jQuery
                  , i = {
                    action: "dzsap_submit_like",
                    postdata: e,
                    playerid: a.the_player_id
                };
                a.cthis.find(".btn-like").addClass("disabled"),
                (a.urlToAjaxHandler || a.cthis.hasClass("is-preview")) && t.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: i,
                    success: function(e) {
                        window.console,
                        a.cthis.find(".btn-like").addClass("active"),
                        a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10),
                        t++,
                        a.cthis.find(".counter-likes .the-number").html(t)
                    },
                    error: function(e) {
                        window.console,
                        a.cthis.find(".btn-like").addClass("active"),
                        a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10),
                        t++,
                        a.cthis.find(".counter-likes .the-number").html(t)
                    }
                })
            }
              , r = function(e) {
                var a = this
                  , t = jQuery
                  , i = {
                    action: "dzsap_retract_like",
                    postdata: e,
                    playerid: a.the_player_id
                };
                a.cthis.find(".btn-like").addClass("disabled"),
                a.urlToAjaxHandler && t.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: i,
                    success: function(e) {
                        window.console,
                        a.cthis.find(".btn-like").removeClass("active"),
                        a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10),
                        t--,
                        a.cthis.find(".counter-likes .the-number").html(t)
                    },
                    error: function(e) {
                        window.console,
                        a.cthis.find(".btn-like").removeClass("active"),
                        a.cthis.find(".btn-like").removeClass("disabled");
                        var t = a.cthis.find(".counter-likes .the-number").html();
                        t = parseInt(t, 10),
                        t--,
                        a.cthis.find(".counter-likes .the-number").html(t)
                    }
                })
            }
              , l = function(e) {
                var a = this
                  , t = jQuery
                  , s = a.initOptions;
                console.log(" o - ", s, a);
                var n = {
                    action: "dzsap_front_submitcomment",
                    postdata: e,
                    playerid: a.the_player_id,
                    comm_position: a.commentPositionPerc
                };
                window.dzsap_settings && (n.skinwave_comments_avatar = window.dzsap_settings.comments_avatar,
                n.skinwave_comments_account = window.dzsap_settings.comments_username),
                a.cthis.find("*[name=comment-email]").length > 0 && (n.email = a.cthis.find("*[name=comment-email]").eq(0).val()),
                a.urlToAjaxHandler && jQuery.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: n,
                    success: function(e) {
                        "0" == e.charAt(e.length - 1) && (e = e.slice(0, e.length - 1)),
                        window.console;
                        var s = "";
                        s = "",
                        s += '<span class="dzstooltip-con" style="left:' + a.commentPositionPerc + '"><span class="dzstooltip arrow-from-start transition-slidein arrow-bottom skin-black" style="width: 250px;"><span class="the-comment-author">@' + window.dzsap_settings.comments_username + "</span> says:<br>",
                        s += i.htmlEncode(n.postdata),
                        s += '</span><div class="the-avatar" style="background-image: url(' + window.dzsap_settings.comments_avatar + ')"></div></span>',
                        a._commentsHolder.children().each((function() {
                            var e = t(this);
                            0 == e.hasClass("dzstooltip-con") && e.addClass("dzstooltip-con")
                        }
                        )),
                        a._commentsHolder.append(s),
                        a.action_audio_comment && a.action_audio_comment(a.cthis, s)
                    },
                    error: function(e) {
                        window.console,
                        a._commentsHolder.append(n.postdata)
                    }
                })
            }
              , d = function(e) {
                e.isSentCacheTotalTime || (e.cthis.attr("data-sample_time_total") || e.initOptions.action_received_time_total && (e.timeModel.refreshTimes(),
                e.initOptions.action_received_time_total(e.timeModel.getVisualTotalTime(), e.cthis)),
                e.isSentCacheTotalTime = !0)
            }
              , c = function(e) {
                var a = this
                  , t = {
                    action: "dzsap_submit_download",
                    postdata: e,
                    playerid: a.the_player_id
                };
                a.starrating_alreadyrated > -1 || a.urlToAjaxHandler && jQuery.ajax({
                    type: "POST",
                    url: a.urlToAjaxHandler,
                    data: t,
                    success: function(e) {},
                    error: function(e) {}
                })
            }
        }
        ,
        586: (__unused_webpack_module,exports,__webpack_require__)=>{
            const dzsapSvgs = __webpack_require__(560)
              , dzsHelpers = __webpack_require__(401)
              , dzsap_generate_keyboard_controls = function() {
                var e = {
                    play_trigger_step_back: "off",
                    step_back_amount: "5",
                    step_back: "37",
                    step_forward: "39",
                    sync_players_goto_next: "",
                    sync_players_goto_prev: "",
                    pause_play: "32",
                    show_tooltips: "off"
                };
                return window.dzsap_keyboard_controls && (e = jQuery.extend(e, window.dzsap_keyboard_controls)),
                e.step_back_amount = Number(e.step_back_amount),
                e
            };
            function formatTime(e) {
                var a = Math.round(e)
                  , t = 0
                  , i = 0;
                if (a > 0) {
                    for (; a > 3599 && a < 3e6 && isFinite(a); )
                        i++,
                        a -= 3600;
                    for (; a > 59 && a < 3e6 && isFinite(a); )
                        t++,
                        a -= 60;
                    return String(i ? (i < 10 ? "0" : "") + i + ":" + String((t < 10 ? "0" : "") + t + ":" + (a < 10 ? "0" : "") + a) : (t < 10 ? "0" : "") + t + ":" + (a < 10 ? "0" : "") + a)
                }
                return "00:00"
            }
            function can_history_api() {
                return !(!window.history || !history.pushState)
            }
            function dzs_clean_string(e) {
                return e ? e = (e = e.replace(/[^A-Za-z0-9\-]/g, "")).replace(/\./g, "") : ""
            }
            function get_query_arg(e, a) {
                if (e) {
                    if (String(e).indexOf(a + "=") > -1) {
                        var t = new RegExp("[?&]" + a + "=.+").exec(e);
                        if (null != t) {
                            var i = t[0];
                            if (i.indexOf("&") > -1) {
                                var s = i.split("&");
                                i = s[1]
                            }
                            return i.split("=")[1]
                        }
                    }
                } else
                    console.log("purl not found - ", e)
            }
            function add_query_arg(e, a, t) {
                e || (e = "");
                var i = e
                  , s = (a = encodeURIComponent(a)) + "=" + (t = encodeURIComponent(t))
                  , n = new RegExp("(&|\\?)" + a + "=[^&]*");
                if ((i = i.replace(n, "$1" + s)).indexOf(a + "=") > -1 || (i.indexOf("?") > -1 ? i += "&" + s : i += "?" + s),
                "NaN" === t) {
                    var o = new RegExp("[?|&]" + a + "=" + t);
                    -1 === (i = i.replace(o, "")).indexOf("?") && i.indexOf("&") > -1 && (i = i.replace("&", "?"))
                }
                return i
            }
            function dzsap_is_mobile() {
                return is_ios() || is_android_good()
            }
            function is_ios() {
                return -1 !== navigator.platform.indexOf("iPhone") || -1 !== navigator.platform.indexOf("iPod") || -1 !== navigator.platform.indexOf("iPad")
            }
            function can_canvas() {
                return !!document.createElement("canvas").getContext("2d")
            }
            function is_safari() {
                return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
            }
            function is_android() {
                return is_android_good()
            }
            function select_all(e) {
                if (void 0 !== window.getSelection && void 0 !== document.createRange) {
                    var a = document.createRange();
                    a.selectNodeContents(e);
                    var t = window.getSelection();
                    t.removeAllRanges(),
                    t.addRange(a)
                } else if (void 0 !== document.selection && void 0 !== document.body.createTextRange) {
                    var i = document.body.createTextRange();
                    i.moveToElementText(e),
                    i.select()
                }
            }
            function is_android_good() {
                return navigator.userAgent.toLowerCase().indexOf("android") > -1
            }
            function htmlEncode(e) {
                return jQuery("<div/>").text(e).html()
            }
            function dzsap_generate_keyboard_tooltip(e, a) {
                var t = '<span class="dzstooltip color-dark-light talign-start transition-slidein arrow-bottom style-default" style="width: auto;  white-space:nowrap;"><span class="dzstooltip--inner">Shortcut: ' + e[a] + "</span></span>";
                return (t = t.replace("32", "space")).replace("27", "escape")
            }
            function handle_keypresses(e) {
                function a(a) {
                    let t = !1;
                    return a.indexOf("ctrl+") > -1 ? e.ctrlKey && (a = a.replace("ctrl+", ""),
                    e.keyCode === Number(a) && (t = !0)) : e.keyCode === Number(a) && (t = !0),
                    t
                }
                var t = jQuery
                  , i = t.extend({}, dzsap_generate_keyboard_controls());
                if (dzsap_currplayer_focused && dzsap_currplayer_focused.api_pause_media) {
                    if (a(i.pause_play) && !1 === t(dzsap_currplayer_focused).hasClass("comments-writer-active") && (t(dzsap_currplayer_focused).hasClass("is-playing") ? dzsap_currplayer_focused.api_pause_media() : dzsap_currplayer_focused.api_play_media(),
                    window.dzsap_mouseover))
                        return e.preventDefault(),
                        !1;
                    a(i.step_back) && dzsap_currplayer_focused.api_step_back(i.step_back_amount),
                    a(i.step_forward) && dzsap_currplayer_focused.api_step_forward(i.step_back_amount),
                    a(i.sync_players_goto_next) && dzsap_currplayer_focused && dzsap_currplayer_focused.api_sync_players_goto_next && dzsap_currplayer_focused.api_sync_players_goto_next(),
                    a(i.sync_players_goto_prev) && dzsap_currplayer_focused && dzsap_currplayer_focused.api_sync_players_goto_prev && dzsap_currplayer_focused.api_sync_players_goto_prev()
                }
            }
            function hexToRgb(e, a) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)
                  , i = "";
                if (t) {
                    var s = 1;
                    a && (s = a),
                    i = "rgba(" + (t = {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16)
                    }).r + "," + t.g + "," + t.b + "," + s + ")"
                }
                return i
            }
            function player_checkIfWeShouldShowAComment(e, a, t) {
                var i = jQuery
                  , s = Math.round(a / t * 100) / 100;
                "fake" === e.audioType && (s = Math.round(e.timeCurrent / e.timeTotal * 100) / 100),
                e._commentsHolder && e._commentsHolder.children().each((function() {
                    var a = i(this);
                    if (a.hasClass("dzstooltip-con")) {
                        var t = a.offset().left - e._commentsHolder.offset().left
                          , n = Math.round(parseFloat(t) / e._commentsHolder.outerWidth() * 100) / 100;
                        n && (Math.abs(n - s) < .02 ? (e._commentsHolder.find(".dzstooltip").removeClass("active"),
                        a.find(".dzstooltip").addClass("active")) : a.find(".dzstooltip").removeClass("active"))
                    }
                }
                ))
            }
            function sanitizeObjectForChangeMediaArgs(e) {
                var a = {}
                  , t = e
                  , i = "";
                return e.data("original-settings") ? e.data("original-settings") : (a.source = null,
                t.attr("data-source") ? a.source = t.attr("data-source") : t.attr("href") && (a.source = t.attr("href")),
                t.attr("data-pcm") && (a.pcm = t.attr("data-pcm")),
                i = "thumb",
                t.attr("data-" + i) && (a[i] = e.attr("data-" + i)),
                i = "playerid",
                t.attr("data-" + i) && (a[i] = e.attr("data-" + i)),
                i = "type",
                t.attr("data-" + i) && (a[i] = e.attr("data-" + i)),
                t.attr("data-thumb_link") && (a.thumb_link = e.attr("data-thumb_link")),
                (e.find(".meta-artist").length > 0 || e.find(".meta-artist-con").length > 0) && (a.artist = e.find(".the-artist").eq(0).html(),
                a.song_name = e.find(".the-name").eq(0).html()),
                e.attr("data-thumb_for_parent") && (a.thumb = e.attr("data-thumb_for_parent")),
                (e.find(".feed-song-name").length > 0 || e.find(".feed-artist-name").length > 0) && (a.artist = e.find(".feed-artist-name").eq(0).html(),
                a.song_name = e.find(".feed-song-name").eq(0).html()),
                t.attr("data-soft-watermark") && (a.watermark = e.attr("data-soft-watermark")),
                t.attr("data-watermark-volume") && (a.watermark_volume = e.attr("data-watermark-volume")),
                a)
            }
            function selectText(e) {
                if (document.selection)
                    (a = document.body.createTextRange()).moveToElementText(e),
                    a.select();
                else if (window.getSelection) {
                    var a;
                    (a = document.createRange()).selectNode(e),
                    window.getSelection().removeAllRanges(),
                    window.getSelection().addRange(a)
                }
            }
            function player_determineActualPlayer(e) {
                var a = jQuery
                  , t = a(e.cthis.attr("data-fakeplayer"));
                0 === t.length && (t = a(String(e.cthis.attr("data-fakeplayer")).replace("#", "."))).length && (e._actualPlayer = a(String(e.cthis.attr("data-fakeplayer")).replace("#", ".")),
                e.cthis.attr("data-fakeplayer", String(e.cthis.attr("data-fakeplayer")).replace("#", "."))),
                0 === t.length ? e.cthis.attr("data-fakeplayer", "") : (e.cthis.addClass("player-is-feeding is-source-player-for-actual-player"),
                e.cthis.attr("data-type") && (e._actualPlayer = a(e.cthis.attr("data-fakeplayer")).eq(0),
                e.actualDataTypeOfMedia = e.cthis.attr("data-type"),
                e.cthis.attr("data-original-type", e.actualDataTypeOfMedia)))
            }
            function htmlEntities(e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }
            function player_initSpectrum(e) {
                if (null === window.dzsap_audio_ctx ? ("undefined" != typeof AudioContext ? e.spectrum_audioContext = new AudioContext : "undefined" != typeof webkitAudioContext ? e.spectrum_audioContext = new webkitAudioContext : e.spectrum_audioContext = null,
                window.dzsap_audio_ctx = e.spectrum_audioContext) : e.spectrum_audioContext = window.dzsap_audio_ctx,
                console.log("selfClass.spectrum_audioContext - ", e.spectrum_audioContext),
                e.spectrum_audioContext && null === e.spectrum_analyser && (e.spectrum_analyser = e.spectrum_audioContext.createAnalyser(),
                e.spectrum_analyser.smoothingTimeConstant = .3,
                e.spectrum_analyser.fftSize = 512,
                console.log("selfClass.spectrum_analyser - ", e.spectrum_analyser),
                "selfHosted" === e.audioType)) {
                    e.$mediaNode_.crossOrigin = "anonymous",
                    e.spectrum_mediaElementSource = e.spectrum_audioContext.createMediaElementSource(e.$mediaNode_),
                    e.spectrum_mediaElementSource.connect(e.spectrum_analyser),
                    e.spectrum_audioContext.createGain && (e.spectrum_gainNode = e.spectrum_audioContext.createGain()),
                    e.spectrum_analyser.connect(e.spectrum_audioContext.destination),
                    e.spectrum_gainNode.gain.value = 1;
                    var a = 2 * e.spectrum_audioContext.sampleRate;
                    e.spectrum_audioContext_buffer = e.spectrum_audioContext.createBuffer(2, a, e.spectrum_audioContext.sampleRate)
                }
            }
            function player_determineProperties() {}
            function player_detect_skinwave_mode() {
                var e = this;
                e.skinwave_mode = e.initOptions.skinwave_mode,
                e.cthis.hasClass("skin-wave-mode-small") && (e.skinwave_mode = "small"),
                e.cthis.hasClass("skin-wave-mode-alternate") && (e.skinwave_mode = "alternate"),
                e.cthis.hasClass("skin-wave-mode-bigwavo") && (e.skinwave_mode = "bigwavo")
            }
            function drawSpectrum(e) {
                return selfClass._scrubbarbg_canvas,
                !1
            }
            function scrubbar_modeWave_clearObsoleteCanvas(e) {
                e._scrubbar && e._scrubbar.find(".scrubbar-type-wave--canvas.transitioning-out").remove()
            }
            function scrubbar_modeWave_setupCanvas(e, a) {
                var t = {
                    prepare_for_transition_in: !1
                };
                e && (t = Object.assign(t, e));
                var i = a.initOptions;
                a._scrubbar.find(".scrub-bg").eq(0).append('<canvas class="scrubbar-type-wave--canvas scrub-bg-img" ></canvas>'),
                a._scrubbar.find(".scrub-prog").eq(0).append('<canvas class="scrubbar-type-wave--canvas scrub-prog-img" ></canvas>'),
                a._scrubbarbg_canvas = a._scrubbar.find(".scrub-bg-img").last(),
                a._scrubbarprog_canvas = a._scrubbar.find(".scrub-prog-img").last(),
                "on" === i.skinwave_enableSpectrum && a._scrubbarprog_canvas.hide(),
                t.prepare_for_transition_in && (a._scrubbarbg_canvas.addClass("preparing-transitioning-in"),
                a._scrubbarprog_canvas.addClass("preparing-transitioning-in"),
                setTimeout((function() {
                    a._scrubbarbg_canvas.addClass("transitioning-in"),
                    a._scrubbarprog_canvas.addClass("transitioning-in")
                }
                ), 20))
            }
            exports.is_ie = function() {
                return !!window.MSInputMethodContext && !!document.documentMode
            }
            ,
            exports.assignHelperFunctionsToJquery = function(e) {
                e.fn.prependOnce = function(a, t) {
                    var i = e(this);
                    if (void 0 === t) {
                        var s = new RegExp('class="(.*?)"').exec(a);
                        void 0 !== s[1] && (t = "." + s[1])
                    }
                    return i.children(t).length < 1 && (i.prepend(a),
                    !0)
                }
                ,
                e.fn.appendOnce = function(a, t) {
                    var i = e(this);
                    if (void 0 === t) {
                        var s = new RegExp('class="(.*?)"').exec(a);
                        void 0 !== s[1] && (t = "." + s[1])
                    }
                    return i.children(t).length < 1 && (i.append(a),
                    !0)
                }
            }
            ,
            exports.registerTextWidth = function(e) {
                e.fn.textWidth = function() {
                    var e = jQuery(this)
                      , a = e.html();
                    "INPUT" === e[0].nodeName && (a = e.val());
                    var t = '<span class="forcalc">' + a + "</span>";
                    jQuery("body").append(t);
                    var i = jQuery("span.forcalc").last();
                    i.css({
                        "font-size": e.css("font-size"),
                        "font-family": e.css("font-family")
                    });
                    var s = i.width();
                    return i.remove(),
                    s
                }
            }
            ,
            exports.player_checkIfWeShouldShowAComment = player_checkIfWeShouldShowAComment,
            exports.sanitizeObjectForChangeMediaArgs = sanitizeObjectForChangeMediaArgs,
            exports.utils_sanitizeToColor = function(e) {
                return -1 === e.indexOf("#") && -1 === e.indexOf("rgb") && -1 === e.indexOf("hsl") ? "#" + e : e
            }
            ,
            exports.dzsapInitjQueryRegisters = function() {
                window.dzsap_generate_list_for_sync_players = function(e) {
                    var a = {
                        force_regenerate: !1
                    };
                    e && (a = $.extend(a, e)),
                    window.dzsap_syncList_players = [],
                    "undefined" != typeof settings && (void 0 !== settings.construct_player_list_for_sync && "on" === settings.construct_player_list_for_sync || a.force_regenerate) && jQuery(".audioplayer,.audioplayer-tobe").each((function() {
                        var e = jQuery(this);
                        "on" !== e.attr("data-do-not-include-in-list") && ("fake" !== e.attr("data-type") || e.attr("data-fakeplayer")) && window.dzsap_syncList_players.push(e)
                    }
                    ))
                }
                ,
                jQuery(document).off("click.dzsap_global"),
                jQuery(document).on("click.dzsap_global", ".dzsap-btn-info", (function() {
                    var e = jQuery(this);
                    e.hasClass("dzsap-btn-info") && e.find(".dzstooltip").toggleClass("active")
                }
                )),
                jQuery(document).on("mouseover.dzsap_global", ".dzsap-btn-info", (function() {
                    var e = jQuery(this);
                    e.hasClass("dzsap-btn-info") && (window.innerWidth < 500 ? e.offset().left < window.innerWidth / 2 && e.find(".dzstooltip").removeClass("talign-end").addClass("talign-start") : e.find(".dzstooltip").addClass("talign-end").removeClass("talign-start"))
                }
                ))
            }
            ,
            exports.player_radio_isNameUpdatable = function(e, a, t) {
                return !!(e._metaArtistCon.find(t).length && e._metaArtistCon.find(t).eq(0).text().length > 0 && e._metaArtistCon.find(t).eq(0).html().indexOf("{{update}}") > -1)
            }
            ,
            exports.miscFunctions = function() {
                window.dzsap_send_total_time = function(e, a) {
                    var t = {
                        action: "dzsap_send_total_time_for_track",
                        id_track: a.attr("data-playerid"),
                        postdata: Math.round(e)
                    };
                    jQuery.post(window.dzsap_ajaxurl, t, (function(e) {}
                    ))
                }
                ,
                window.dzs_open_social_link = function(e, a) {
                    var t, i, s = "status=no,height=500,width=500,resizable=yes,left=" + (t = window.screen.width / 2 - 260) + ",top=" + (i = window.screen.height / 2 - 300) + ",screenX=" + t + ",screenY=" + i + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
                    e = e.replace("{{replacewithcurrurl}}", encodeURIComponent(window.location.href)),
                    a && a.attr && (e = e.replace(/{{replacewithdataurl}}/g, a.attr("data-url")));
                    var n = window.location.href.split("?")
                      , o = ""
                      , r = "";
                    if (a || window.dzsap_currplayer_from_share && (a = window.dzsap_currplayer_from_share),
                    a) {
                        var l = jQuery;
                        l(a).hasClass("audioplayer") ? (o = l(a).parent().children().index(a),
                        r = l(a).parent().parent().parent().attr("id")) : (jQuery(a).parent().parent().attr("data-menu-index") && (o = jQuery(a).parent().parent().attr("data-menu-index")),
                        jQuery(a).parent().parent().attr("data-gallery-id") && (r = jQuery(a).parent().parent().attr("data-gallery-id")))
                    }
                    var d = encodeURIComponent(n[0] + "?fromsharer=on&audiogallery_startitem_" + r + "=" + o);
                    e = e.replace("{{shareurl}}", d),
                    console.log("shareurl -> ", d),
                    window.open(e, "sharer", s)
                }
                ,
                window.dzsap_wp_send_contor_60_secs = function(e, a) {
                    var t = {
                        video_title: a,
                        video_analytics_id: e.attr("data-playerid"),
                        curr_user: window.dzsap_curr_user
                    }
                      , i = "index.php?action=ajax_dzsap_submit_contor_60_secs";
                    window.dzsap_settings.dzsap_site_url && (i = dzsap_settings.dzsap_site_url + i),
                    jQuery.ajax({
                        type: "POST",
                        url: i,
                        data: t,
                        success: function(e) {
                            window.console
                        },
                        error: function(e) {
                            window.console
                        }
                    })
                }
                ,
                window.dzsap_init_multisharer = function() {
                    var e = jQuery;
                    setTimeout((function() {
                        if (window.dzsap_multisharer_assets_loaded)
                            ;
                        else if (!0 !== window.dzsap_multisharer_assets_loaded && !0 !== window.loading_multi_sharer) {
                            window.loading_multi_sharer = !0;
                            var a = document.getElementsByTagName("head")[0]
                              , t = document.createElement("link");
                            window.dzsap_settings && window.dzsap_settings.dzsap_site_url && (t.id = "dzsap-load-multi-sharer",
                            t.rel = "stylesheet",
                            t.type = "text/css",
                            t.href = add_query_arg(window.dzsap_settings.dzsap_site_url, "load-lightbox-css", "on"),
                            t.media = "all",
                            a.appendChild(t)),
                            setTimeout((function() {
                                null === window.dzsap_box_main_con && (e("body").append('<div class="dzsap-main-con skin-default gallery-skin-default transition-slideup "> <div class="overlay-background"></div> <div class="box-mains-con"> <div class="box-main box-main-for-share" style=""> <div class="box-main-media-con transition-target"> <div class="close-btn-con"><span class="close-btn--icon">&times;</span></div> <div class="box-main-media type-inlinecontent" style="width: 530px; height: 280px;"><div class=" real-media" style=""><div class="hidden-content share-content" > <div class="social-networks-con"></div> <div class="share-link-con"></div> <div class="embed-link-con"></div> </div> </div> </div> <div class="box-main-under"></div> </div> </div> </div>\x3c!-- end .box-mains-con--\x3e </div>'),
                                window.dzsap_box_main_con = e(".dzsap-main-con").eq(0))
                            }
                            ), 1e3)
                        }
                        e(document).on("click.dzsap_global_sharer", ".dzsap-main-con .close-btn-con,.dzsap-main-con .overlay-background", (function() {
                            e(".dzsap-main-con").eq(0).removeClass("loading-item loaded-item")
                        }
                        ))
                    }
                    ), 2e3)
                }
                ,
                window.dzsap_submit_like = function(e, a) {
                    var t = {
                        action: "dzsap_submit_like",
                        playerid: e
                    }
                      , i = null;
                    a && (i = jQuery(a.currentTarget)),
                    window.dzsap_settings && window.dzsap_settings.ajax_url && jQuery.ajax({
                        type: "POST",
                        url: window.dzsap_settings.ajax_url,
                        data: t,
                        success: function(e) {
                            if (void 0 !== window.console && console.log("Got this from the server: " + e),
                            i) {
                                var a = i.html();
                                i.html(a.replace("fa-heart-o", "fa-heart"))
                            }
                        },
                        error: function(e) {
                            window.console
                        }
                    })
                }
                ,
                window.dzsap_retract_like = function(e, a) {
                    var t = {
                        action: "dzsap_retract_like",
                        playerid: e
                    }
                      , i = null;
                    a && (i = jQuery(a.currentTarget)),
                    window.dzsap_settings && window.dzsap_settings.ajax_url && jQuery.ajax({
                        type: "POST",
                        url: window.dzsap_settings.ajax_url,
                        data: t,
                        success: function(e) {
                            if (void 0 !== window.console && console.log("Got this from the server: " + e),
                            i) {
                                var a = i.html();
                                i.html(a.replace("fa-heart", "fa-heart-o"))
                            }
                        },
                        error: function(e) {
                            window.console
                        }
                    })
                }
            }
            ,
            exports.jQueryAuxBindings = function(e) {
                e(document).on("click.dzsap_metas", ".audioplayer-song-changer, .dzsap-wishlist-but", (function() {
                    var a = e(this);
                    if (a.hasClass("audioplayer-song-changer")) {
                        var t = e(a.attr("data-fakeplayer")).eq(0);
                        return t && t.get(0) && t.get(0).api_change_media && t.get(0).api_change_media(a, {
                            feeder_type: "button",
                            call_from: "changed audioplayer-song-changer"
                        }),
                        !1
                    }
                    if (a.hasClass("dzsap-wishlist-but")) {
                        var i = {
                            action: "dzsap_add_to_wishlist",
                            playerid: a.attr("data-post_id"),
                            wishlist_action: "add"
                        };
                        return a.find(".svg-icon").hasClass("fa-star") && (i.wishlist_action = "remove"),
                        window.dzsap_lasto.settings_php_handler && e.ajax({
                            type: "POST",
                            url: window.dzsap_lasto.settings_php_handler,
                            data: i,
                            success: function(e) {
                                a.find(".svg-icon").hasClass("fa-star-o") ? a.find(".svg-icon").eq(0).attr("class", "svg-icon fa fa-star") : a.find(".svg-icon").eq(0).attr("class", "svg-icon fa fa-star-o")
                            },
                            error: function(e) {
                                window.console
                            }
                        }),
                        !1
                    }
                }
                )),
                e(document).on("click.dzsiconhide", ".sticktobottom-close-con,.sticktobottom-close-con .svg-icon", (function() {
                    var a = e(this);
                    e(".dzsap-sticktobottom .audioplayer").get(0).api_pause_media(),
                    console.log("_t sticktobottom-close-con -7", a);
                    var t = null;
                    return a.parent().hasClass("dzsap-sticktobottom") && (t = a.parent()),
                    a.parent().parent().hasClass("dzsap-sticktobottom") && (t = a.parent().parent()),
                    a.parent().parent().parent().hasClass("dzsap-sticktobottom") && (t = a.parent().parent().parent()),
                    console.log("_con - ", t, t.hasClass("audioplayer-loaded")),
                    t.hasClass("audioplayer-loaded") ? (t.removeClass("audioplayer-loaded"),
                    t.addClass("audioplayer-was-loaded")) : (t.addClass("audioplayer-loaded"),
                    t.addClass("audioplayer-was-loaded")),
                    !1
                }
                )),
                e(document).on("click.dzsiconshow", ".dzsap-sticktobottom .icon-show", (function() {
                    return e(this),
                    !1
                }
                )),
                e(".dzsap-sticktobottom.dzsap-sticktobottom-for-skin-silver").length > 0 && setInterval((function() {
                    e(".dzsap-sticktobottom.dzsap-sticktobottom-for-skin-silver  .audioplayer").eq(0).hasClass("dzsap-loaded") && (e(".dzsap-sticktobottom-placeholder").eq(0).addClass("active"),
                    !1 === e(".dzsap-sticktobottom").hasClass("audioplayer-was-loaded") && e(".dzsap-sticktobottom.dzsap-sticktobottom-for-skin-silver").addClass("audioplayer-loaded"))
                }
                ), 1e3),
                e(".dzsap-sticktobottom.dzsap-sticktobottom-for-skin-wave").length > 0 && setInterval((function() {
                    e(".dzsap-sticktobottom.dzsap-sticktobottom-for-skin-wave  .audioplayer").eq(0).hasClass("dzsap-loaded") && (e(".dzsap-sticktobottom-placeholder").eq(0).addClass("active"),
                    !1 === e(".dzsap-sticktobottom").hasClass("audioplayer-was-loaded") && e(".dzsap-sticktobottom.dzsap-sticktobottom-for-skin-wave").addClass("audioplayer-loaded"))
                }
                ), 1e3),
                e(document).on("click.dzsap_multisharer", ".dzsap-multisharer-but", (function(a, t) {
                    var i = {
                        call_from: "default"
                    };
                    return t && (i = e.extend(i, t)),
                    function(a) {
                        var t = {
                            call_from: "default",
                            lightbox_open: "share",
                            overwrite_this: null
                        };
                        a && (t = e.extend(t, a));
                        var i = window.dzsap_box_main_con
                          , s = e(this);
                        t.overwrite_this && (s = e(t.overwrite_this)),
                        console.log("open_dzsap_lightbox() $dzsapBoxMainCon -> ", i, "margs - ", t);
                        var n = null;
                        s.data("cthis") && (n = s.data("cthis")),
                        console.log("$caller - ", n),
                        n ? window.dzsap_currplayer_from_share = n : (console.log("%c could not find this .. maybe we can find it in post_id", "background-color: #da0000;", e('.audioplayer[data-playerid="' + s.attr("data-post_id") + '"]')),
                        s.attr("data-post_id") ? (window.dzsap_currplayer_from_share = e('.audioplayer[data-playerid="' + s.attr("data-post_id") + '"]').eq(0),
                        s.data("cthis", window.dzsap_currplayer_from_share)) : s.parent().parent().parent().parent().parent().parent().hasClass("audioplayer") && (window.dzsap_currplayer_from_share = s.parent().parent().parent().parent().parent().parent()));
                        var o = "";
                        if (window.dzsap_social_feed_for_social_networks && (o = window.dzsap_social_feed_for_social_networks),
                        window.dzsap_box_main_con) {
                            window.dzsap_box_main_con.find(".social-networks-con").html(o);
                            let a = "";
                            if (window.dzsap_social_feed_for_share_link && (a = window.dzsap_social_feed_for_share_link),
                            a) {
                                var r = window.location.href;
                                s.attr("data-post-url") && (r = s.attr("data-post-url")),
                                a = a.replace("{{replacewithcurrurl}}", r),
                                a = a.replace("{{replacewithdataurl}}", r),
                                window.dzsap_box_main_con.find(".share-link-con").html(a)
                            }
                            var l = "";
                            if (window.dzsap_social_feed_for_embed_link && (l = window.dzsap_social_feed_for_embed_link),
                            console.log("dzsap_currplayer_from_share -", dzsap_currplayer_from_share),
                            window.dzsap_currplayer_from_share && dzsap_currplayer_from_share.data("embed_code") && l) {
                                var d = dzsap_currplayer_from_share.data("embed_code");
                                -1 === d.indexOf("&lt;") && (d = htmlEntities(d)),
                                l = l.replace("{{replacewithembedcode}}", d),
                                i.find(".embed-link-con").html(l)
                            }
                            e(document).on("click.dzsap", ".field-for-view", (function() {
                                console.log("select all test ", this),
                                selectText(this)
                            }
                            )),
                            i.addClass("loading-box-main-" + t.lightbox_open),
                            setTimeout((function() {
                                i.addClass("loading-item")
                            }
                            ), 100),
                            setTimeout((function() {
                                i.addClass("loaded-item")
                            }
                            ), 200)
                        } else
                            console.log("warning missing box-main")
                    }({
                        call_from: "click_open_embed_ultibox",
                        lightbox_open: "share",
                        overwrite_this: this
                    }),
                    !1
                }
                )),
                e(document).on("keydown.dzsapkeyup keypress.dzsapkeyup", (function(e) {
                    handle_keypresses(e)
                }
                )),
                e(document).on("keydown blur", ".zoomsounds-search-field", (function(a) {
                    var t = e(a.currentTarget);
                    setTimeout((function() {
                        if (t) {
                            var a = e(".audiogallery").eq(0);
                            t.attr("data-target") && (a = e(t.attr("data-target"))),
                            a.get(0) && a.get(0).api_filter && a.get(0).api_filter("title", t.val())
                        }
                    }
                    ), 100)
                }
                )),
                e(document).on("click", ".dzsap-like-but", (function(a) {
                    var t = e(this)
                      , i = t.attr("data-post_id");
                    return i && "0" != i || t.parent().parent().parent().parent().parent().hasClass("audioplayer") && (i = t.parent().parent().parent().parent().parent().attr("data-feed-playerid")),
                    window.dzsap_submit_like(i, a),
                    t.removeClass("dzsap-like-but").addClass("dzsap-retract-like-but"),
                    !1
                }
                )),
                e(document).on("click", ".dzsap-retract-like-but", (function(a) {
                    var t = e(this)
                      , i = t.attr("data-post_id");
                    return i && "0" != i || t.parent().parent().parent().parent().parent().hasClass("audioplayer") && (i = t.parent().parent().parent().parent().parent().attr("data-feed-playerid")),
                    window.dzsap_retract_like(i, a),
                    t.addClass("dzsap-like-but").removeClass("dzsap-retract-like-but"),
                    !1
                }
                ))
            }
            ,
            exports.selectText = selectText,
            exports.ajax_submit_views = function(e, a, t, i, s, n, o, r) {
                var l = {
                    action: "dzsap_submit_views",
                    postdata: 1,
                    playerid: a,
                    currip: t
                };
                cthis.attr("data-playerid-for-views") && (l.playerid = cthis.attr("data-playerid-for-views")),
                "" === l.playerid && (l.playerid = dzs_clean_string(i)),
                s.settings_php_handler && n.ajax({
                    type: "POST",
                    url: s.settings_php_handler,
                    data: l,
                    success: function(e) {
                        window.console;
                        var a = cthis.find(".counter-hits .the-number").html();
                        a = parseInt(a, 10),
                        2 != o && a++,
                        e && decode_json(e) && (a = decode_json(e).number),
                        cthis.find(".counter-hits .the-number").html(a)
                    },
                    error: function(e) {
                        window.console;
                        var a = cthis.find(".counter-hits .the-number").html();
                        a = parseInt(a, 10),
                        a++,
                        cthis.find(".counter-hits .the-number").html(a)
                    }
                })
            }
            ,
            exports.view_player_playMiscEffects = function(e) {
                e.$conPlayPause.addClass("playing"),
                e.cthis.parent().hasClass("zoomsounds-wrapper-bg-center") && e.cthis.parent().addClass("is-playing")
            }
            ,
            exports.view_player_globalDetermineSyncPlayersIndex = function(e) {
                null === e._sourcePlayer && window.dzsap_syncList_players && window.dzsap_syncList_players.forEach(((a,t)=>{
                    e.cthis.attr("data-playerid") == a.attr("data-playerid") && (window.dzsap_syncList_index = t)
                }
                ))
            }
            ,
            exports.player_view_addMetaLoaded = function(e) {
                e.cthis.addClass("meta-loaded"),
                e.cthis.removeClass("meta-fake"),
                e._sourcePlayer && (e._sourcePlayer.addClass("meta-loaded"),
                e._sourcePlayer.removeClass("meta-fake")),
                e.$totalTime && (e.timeModel.refreshTimes(),
                e.$totalTime.html(formatTime(e.timeModel.getVisualTotalTime()))),
                e._sourcePlayer && e._sourcePlayer.addClass("meta-loaded")
            }
            ,
            exports.player_determineActualPlayer = player_determineActualPlayer,
            exports.waitForScriptToBeAvailableThenExecute = function(e, a) {
                new Promise(((a,t)=>{
                    var i = 0;
                    function s() {
                        e && (clearInterval(i),
                        a("var exists"))
                    }
                    s(),
                    i = setInterval(s, 300),
                    setTimeout((()=>{
                        t("timeout")
                    }
                    ), 5e3)
                }
                )).then((e=>{
                    a(e)
                }
                )).catch((e=>{}
                ))
            }
            ,
            exports.configureAudioPlayerOptionsInitial = function(e, a, t) {
                t.cthis.addClass("preload-method-" + a.preload_method),
                a.wavesurfer_pcm_length = Number(a.wavesurfer_pcm_length),
                a.settings_trigger_resize = parseInt(a.settings_trigger_resize, 10),
                a.watermark_volume = parseFloat(a.watermark_volume),
                !1 === isNaN(parseInt(a.design_thumbh, 10)) && (a.design_thumbh = parseInt(a.design_thumbh, 10)),
                "" === a.skinwave_wave_mode && (a.skinwave_wave_mode = "canvas"),
                "" === a.skinwave_wave_mode_canvas_normalize && (a.skinwave_wave_mode_canvas_normalize = "on"),
                ("" === a.skinwave_wave_mode_canvas_waves_number || isNaN(Number(a.skinwave_wave_mode_canvas_waves_number))) && (a.skinwave_wave_mode_canvas_waves_number = 3),
                "on" === a.autoplay && "on" === a.cue && (a.preload_method = "auto"),
                e.addClass(a.extra_classes_player),
                "" === a.design_skin && (a.design_skin = "skin-default"),
                t.cthis.find(".feed-dzsap--embed-code").length ? t.feedEmbedCode = t.cthis.find(".feed-dzsap--embed-code").eq(0).html() : "" !== a.embed_code && (t.feedEmbedCode = a.embed_code),
                this.is_ios() && "on" === t.initOptions.skinwave_enableSpectrum && (t.initOptions.skinwave_enableSpectrum = "off"),
                / skin-/g.test(e.attr("class")) || e.addClass(a.design_skin),
                e.hasClass("skin-default") && (a.design_skin = "skin-default"),
                e.hasClass("skin-wave") && (a.design_skin = "skin-wave"),
                e.hasClass("skin-justthumbandbutton") && (a.design_skin = "skin-justthumbandbutton"),
                e.hasClass("skin-pro") && (a.design_skin = "skin-pro"),
                e.hasClass("skin-aria") && (a.design_skin = "skin-aria"),
                e.hasClass("skin-silver") && (a.design_skin = "skin-silver"),
                e.hasClass("skin-redlights") && (a.design_skin = "skin-redlights"),
                e.hasClass("skin-steel") && (a.design_skin = "skin-steel"),
                e.hasClass("skin-customcontrols") && (a.design_skin = "skin-customcontrols"),
                "skin-wave" === a.design_skin && "auto" === a.scrubbar_type && (a.scrubbar_type = "wave"),
                "auto" === a.scrubbar_type && (a.scrubbar_type = "bar"),
                "wpdefault" === a.settings_php_handler && (a.settings_php_handler = window.ajaxurl),
                "wpdefault" === a.action_received_time_total && (a.action_received_time_total = window.dzsap_send_total_time),
                "wpdefault" === a.action_video_contor_60secs && (a.action_video_contor_60secs = window.action_video_contor_60secs),
                (is_ios() || is_android()) && (a.autoplay = "off",
                a.disable_volume = "on",
                "off" === a.cueMedia && (a.cueMedia = "on"),
                a.cueMedia = "on"),
                "on" === e.attr("data-viewsubmitted") && (t.ajax_view_submitted = "on"),
                e.attr("data-userstarrating") && (t.starrating_alreadyrated = Number(e.attr("data-userstarrating"))),
                e.hasClass("skin-minimal") && (a.design_skin = "skin-minimal",
                "default" === a.disable_volume && (a.disable_volume = "on"),
                "default" === a.disable_scrub && (a.disable_scrub = "on"),
                a.disable_timer = "on"),
                e.hasClass("skin-minion") && (a.design_skin = "skin-minion",
                "default" === a.disable_volume && (a.disable_volume = "on"),
                "default" === a.disable_scrub && (a.disable_scrub = "on"),
                a.disable_timer = "on"),
                a.design_color_bg && (a.design_wave_color_bg = a.design_color_bg),
                a.design_color_highlight && (a.design_wave_color_progress = a.design_color_highlight),
                "skin-justthumbandbutton" === a.design_skin && ("default" === a.design_thumbh && (a.design_thumbh = ""),
                a.disable_timer = "on",
                a.disable_volume = "on",
                "default" === a.design_animateplaypause && (a.design_animateplaypause = "on")),
                "skin-redlights" === a.design_skin && (a.disable_timer = "on",
                a.disable_volume = "off",
                "default" === a.design_animateplaypause && (a.design_animateplaypause = "on")),
                "skin-steel" === a.design_skin && ("default" === a.disable_timer && (a.disable_timer = "off"),
                a.disable_volume = "on",
                "default" === a.design_animateplaypause && (a.design_animateplaypause = "on"),
                "default" === a.disable_scrub && (a.disable_scrub = "on")),
                "skin-customcontrols" === a.design_skin && ("default" === a.disable_timer && (a.disable_timer = "on"),
                a.disable_volume = "on",
                "default" === a.design_animateplaypause && (a.design_animateplaypause = "on"),
                "default" === a.disable_scrub && (a.disable_scrub = "on")),
                "reflecto" === a.skinwave_wave_mode_canvas_mode && (a.skinwave_wave_mode_canvas_reflection_size = .5),
                "reflecto" === a.skinwave_wave_mode_canvas_mode && (a.skinwave_wave_mode_canvas_reflection_size = .5),
                "" === a.embed_code && e.find("div.feed-embed-code").length > 0 && (a.embed_code = e.find("div.feed-embed-code").eq(0).html()),
                "default" === a.design_animateplaypause && (a.design_animateplaypause = "off"),
                "on" === a.design_animateplaypause && e.addClass("design-animateplaypause"),
                window.dzsap_settings && window.dzsap_settings.php_handler && (a.settings_php_handler || (a.settings_php_handler = window.dzsap_settings.php_handler)),
                a.settings_php_handler && (t.urlToAjaxHandler = a.settings_php_handler),
                t.cthis.attr("data-source") && t.cthis.attr("data-source").indexOf("{{generatenonce}}") > -1 && (t.initOptions.view_scrubDisabled = "on"),
                "on" === t.initOptions.view_scrubDisabled && t.cthis.addClass("view-scrub-disabled")
            }
            ,
            exports.playerFunctions = function(e, a) {
                var t = e.initOptions;
                "detectIds" === a && ("" === t.skinwave_comments_playerid && void 0 !== e.cthis.attr("id") && (e.the_player_id = e.cthis.attr("id")),
                "" == e.the_player_id && (e.cthis.attr("data-computed-playerid") && (e.the_player_id = e.cthis.attr("data-computed-playerid")),
                e.cthis.attr("data-real-playerid") && (e.the_player_id = e.cthis.attr("data-real-playerid"))),
                e.uniqueId = e.the_player_id,
                "" === e.the_player_id && (t.skinwave_comments_enable = "off"))
            }
            ,
            exports.player_delete = function(e) {
                var a = null;
                return e.cthis.parent().parent().hasClass("dzsap-sticktobottom") && (a = e.cthis.parent().parent()),
                a && (a.prev().hasClass("dzsap-sticktobottom-placeholder") && a.prev().remove(),
                a.remove()),
                e.cthis.remove(),
                !1
            }
            ,
            exports.player_viewApplySkinWaveModes = function(e) {
                var a = e.initOptions;
                e.cthis.removeClass("skin-wave-mode-normal"),
                "skin-wave" === a.design_skin && (e.cthis.addClass("skin-wave-mode-" + e.skinwave_mode),
                e.cthis.addClass("skin-wave-wave-mode-" + a.skinwave_wave_mode),
                "on" === a.skinwave_enableSpectrum && e.cthis.addClass("skin-wave-is-spectrum"),
                e.cthis.addClass("skin-wave-wave-mode-canvas-mode-" + a.skinwave_wave_mode_canvas_mode))
            }
            ,
            exports.sanitizeToHexColor = function(e) {
                return -1 === e.indexOf("#") && (e = "#" + e),
                e
            }
            ,
            exports.player_adjustIdentifiers = function(e) {
                e.identifier_pcm = e.the_player_id;
                var a = null;
                a = e.$feed_fakeButton ? e.$feed_fakeButton : e._sourcePlayer ? e._sourcePlayer : null,
                "dzs_footer" === e.identifier_pcm && (e.identifier_pcm = dzs_clean_string(cthis.attr("data-source"))),
                a && (a.attr("data-playerid") ? e.identifier_pcm = a.attr("data-playerid") : a.attr("data-source") && (e.identifier_pcm = a.attr("data-source")))
            }
            ,
            exports.player_getPlayFromTime = function(e) {
                e.playFrom = e.initOptions.playfrom,
                dzsHelpers.isValid(e.cthis.attr("data-playfrom")) && (e.playFrom = e.cthis.attr("data-playfrom")),
                !1 === isNaN(parseInt(e.playFrom, 10)) && (e.playFrom = parseInt(e.playFrom, 10)),
                "off" !== e.playFrom && "" !== e.playFrom || this.get_query_arg(window.location.href, "audio_time") && (e.playFrom = this.sanitizeToIntFromPointTime(this.get_query_arg(window.location.href, "audio_time"))),
                e.timeModel.sampleTimeStart && (e.playFrom < e.timeModel.sampleTimeStart && (e.playFrom = e.timeModel.sampleTimeStart),
                "string" == typeof e.playFrom && (e.playFrom = e.timeModel.sampleTimeStart))
            }
            ,
            exports.sanitizeToIntFromPointTime = function(e) {
                if (e = String(e).replace("%3A", ":"),
                (e = String(e).replace("#", "")) && String(e).indexOf(":") > -1) {
                    var a = /(\d.*):(\d.*)/g.exec(e);
                    return 60 * parseInt(a[1], 10) + parseInt(a[2], 10)
                }
                return Number(e)
            }
            ,
            exports.player_initSpectrum = player_initSpectrum,
            exports.player_initSpectrumOnUserAction = function(e) {
                function a(a) {
                    console.log("setting up audio context --", a),
                    player_initSpectrum(e)
                }
                e.cthis.get(0).addEventListener("mousedown", a, {
                    once: !0
                }),
                e.cthis.get(0).addEventListener("touchdown", a, {
                    once: !0
                })
            }
            ,
            exports.player_icecastOrShoutcastRefresh = function(e) {
                var a = e.cthis.attr("data-source");
                "shoutcast" === e.audioTypeSelfHosted_streamType && (a = add_query_arg(e.urlToAjaxHandler, "action", "dzsap_shoutcast_get_streamtitle"),
                a = add_query_arg(a, "source", e.data_source)),
                jQuery.ajax({
                    type: "GET",
                    url: a,
                    crossDomain: !0,
                    success: function(a) {
                        a.documentElement && a.documentElement.innerHTML && (a = a.documentElement.innerHTML);
                        var t = ""
                          , i = "";
                        if ("icecast" === e.audioTypeSelfHosted_streamType) {
                            var s = null;
                            (s = /<location>(.*?)<\/location>/g.exec(a)) && s[1] !== e.data_source && (e.data_source = s[1],
                            e.setup_media({
                                called_from: "icecast setup"
                            }))
                        }
                        e.radio_isGoingToUpdateSongName && ("icecast" === e.audioTypeSelfHosted_streamType && (s = /<title>(.*?)<\/title>/g.exec(a)) && (t = s[1]),
                        "shoutcast" === e.audioTypeSelfHosted_streamType && (t = a)),
                        e.radio_isGoingToUpdateArtistName && ("icecast" === e.audioTypeSelfHosted_streamType && (s = /<creator>(.*?)<\/creator>/g.exec(a)) && (i = s[1]),
                        e.audioTypeSelfHosted_streamType),
                        e.radio_isGoingToUpdateSongName && e._metaArtistCon.find(".the-name").html(t),
                        e.radio_isGoingToUpdateArtistName && e._metaArtistCon.find(".the-artist").html(i)
                    },
                    error: function(e) {
                        console.log("error loading icecast - ", e)
                    }
                })
            }
            ,
            exports.player_determineStickToBottomContainer = function(e) {
                e.cthis.parent().hasClass("dzsap-sticktobottom") && (e.$stickToBottomContainer = e.cthis.parent()),
                e.cthis.parent().parent().hasClass("dzsap-sticktobottom") && (e.$stickToBottomContainer = e.cthis.parent().parent())
            }
            ,
            exports.player_stickToBottomContainerDetermineClasses = function(e) {
                if (e.$stickToBottomContainer) {
                    e.cthis.hasClass("theme-dark") && e.$stickToBottomContainer.addClass("theme-dark"),
                    setTimeout((function() {
                        e.$stickToBottomContainer.addClass("inited")
                    }
                    ), 500),
                    e.$stickToBottomContainer.addClass("dzsap-sticktobottom-for-" + e.initOptions.design_skin),
                    e.$stickToBottomContainer.prev().addClass("dzsap-sticktobottom-for-" + e.initOptions.design_skin),
                    "skin-wave" === e.initOptions.design_skin && (e.$stickToBottomContainer.addClass("dzsap-sticktobottom-for-" + e.initOptions.design_skin + "--mode-" + e.skinwave_mode),
                    e.$stickToBottomContainer.prev().addClass("dzsap-sticktobottom-for-" + e.initOptions.design_skin + "--mode-" + e.skinwave_mode));
                    var a = /(skinvariation-.*?)($| )/g.exec(e.cthis.attr("class"));
                    a && a[1] && (e.$stickToBottomContainer.addClass(a[1]),
                    e.$stickToBottomContainer.prev().addClass(a[1]))
                }
            }
            ,
            exports.player_isGoingToSetupMediaNow = function(e) {
                return "icecast" !== e.audioTypeSelfHosted_streamType && "youtube" !== e.audioType
            }
            ,
            exports.player_determineHtmlAreas = function(e) {
                var a = e.initOptions;
                let t = ""
                  , i = ""
                  , s = "";
                for (var n in e.cthis.children(".feed-dzsap--extra-html").length > 0 && "" === a.settings_extrahtml ? (e.cthis.children(".feed-dzsap--extra-html").each((function() {
                    t += jQuery(this).html()
                }
                )),
                e.cthis.children(".feed-dzsap--extra-html").remove()) : a.settings_extrahtml && (t = a.settings_extrahtml),
                e.cthis.children(".feed-dzsap--extra-html-in-controls-left").length > 0 && (i = e.cthis.children(".feed-dzsap--extra-html-in-controls-left").eq(0).html()),
                e.cthis.children(".feed-dzsap--extra-html-in-controls-right").length > 0 && (s = e.cthis.children(".feed-dzsap--extra-html-in-controls-right").eq(0).html()),
                e.cthis.children(".feed-dzsap--extra-html-bottom").length > 0 && (t = e.cthis.children(".feed-dzsap--extra-html-bottom").eq(0).html()),
                e.extraHtmlAreas.controlsLeft = i,
                e.extraHtmlAreas.controlsRight = s,
                e.extraHtmlAreas.bottom = t,
                e.extraHtmlAreas.controlsRight && (e.extraHtmlAreas.controlsRight = String(e.extraHtmlAreas.controlsRight).replace(/{{svg_share_icon}}/g, dzsapSvgs.svg_share_icon)),
                e.extraHtmlAreas)
                    e.extraHtmlAreas[n] = String(e.extraHtmlAreas[n]).replace("{{heart_svg}}", "\t&hearts;"),
                    e.extraHtmlAreas[n] = String(e.extraHtmlAreas[n]).replace("{{embed_code}}", e.feedEmbedCode)
            }
            ,
            exports.player_stopOtherPlayers = function(e, a) {
                var t = 0;
                for (t = 0; t < e.length; t++)
                    e[t].get(0) && e[t].get(0).api_pause_media && e[t].get(0) != a.cthis.get(0) && (e[t].data("type_audio_stop_buffer_on_unfocus") && "on" === e[t].data("type_audio_stop_buffer_on_unfocus") ? e[t].get(0).api_destroy_for_rebuffer() : e[t].get(0).api_pause_media({
                        audioapi_setlasttime: !1
                    }))
            }
            ,
            exports.player_determineProperties = player_determineProperties,
            exports.player_detect_skinwave_mode = player_detect_skinwave_mode,
            exports.player_constructArtistAndSongCon = function(e) {
                var a = this;
                if (0 === a.cthis.find(".meta-artist").length && (a.cthis.find(".feed-artist").length || a.cthis.find(".feed-songname").length)) {
                    var t = '<span class="meta-artist player-artistAndSong">';
                    a.cthis.find(".feed-artist").length && (t += '<span class="the-artist">' + a.cthis.find(".feed-artist").eq(0).html() + "</span>"),
                    a.cthis.find(".feed-songname").length && (t += '<span class="the-name player-meta--songname">' + a.cthis.find(".feed-songname").eq(0).html() + "</span>"),
                    t += "</span>",
                    a.cthis.append(t)
                }
                if ("fake" === a.cthis.attr("data-type") && 0 === a.cthis.find(".meta-artist").length && a.cthis.append('<span class="meta-artist"><span class="the-artist"></span><span class="the-name"></span></span>'),
                !a._metaArtistCon || "reconstruct" === e.call_from) {
                    a.cthis.children(".meta-artist").length > 0 && (a.cthis.hasClass("skin-wave-mode-alternate") ? (a._conControls.children().last().hasClass("clear") && a._conControls.children().last().remove(),
                    a._conControls.append(a.cthis.children(".meta-artist"))) : a._audioplayerInner && a._audioplayerInner.append(a.cthis.children(".meta-artist"))),
                    a._audioplayerInner.find(".meta-artist").eq(0).wrap('<div class="meta-artist-con"></div>'),
                    a._metaArtistCon = a._audioplayerInner.find(".meta-artist-con").eq(0);
                    var i = a.initOptions;
                    a._apControls.find(".ap-controls-right").length > 0 && (a._apControlsRight = a.cthis.find(".ap-controls-right").eq(0)),
                    a._apControls.find(".ap-controls-left").length > 0 && (a._apControlsLeft = a._apControls.find(".ap-controls-left").eq(0)),
                    "skin-pro" === i.design_skin && (a._apControlsRight = a.cthis.find(".con-controls--right").eq(0)),
                    "skin-wave" === i.design_skin && (a.cthis.find(".dzsap-repeat-button").length ? a.cthis.find(".dzsap-repeat-button").after(a._metaArtistCon) : a.cthis.find(".dzsap-loop-button").length && !1 === a.cthis.find(".dzsap-loop-button").eq(0).parent().hasClass("feed-dzsap-for-extra-html-right") ? a.cthis.find(".dzsap-loop-button").after(a._metaArtistCon) : a._conPlayPauseCon.after(a._metaArtistCon),
                    "alternate" === a.skinwave_mode && a._apControlsRight.before(a._metaArtistCon)),
                    "skin-aria" === i.design_skin && a._apControlsRight.prepend(a._metaArtistCon),
                    "skin-redlights" !== i.design_skin && "skin-steel" !== i.design_skin || a._apControlsRight.prepend(a._metaArtistCon),
                    "skin-silver" === i.design_skin && a._apControlsRight.append(a._metaArtistCon),
                    "skin-default" === i.design_skin && a._apControlsRight.before(a._metaArtistCon)
                }
            }
            ,
            exports.hexToRgb = hexToRgb,
            exports.handle_keypresses = handle_keypresses,
            exports.select_all = select_all,
            exports.dzsap_generate_keyboard_tooltip = dzsap_generate_keyboard_tooltip,
            exports.htmlEncode = htmlEncode,
            exports.dzsap_is_mobile = dzsap_is_mobile,
            exports.is_ios = is_ios,
            exports.is_android = is_android,
            exports.is_safari = is_safari,
            exports.is_android_good = is_android_good,
            exports.get_query_arg = get_query_arg,
            exports.add_query_arg = add_query_arg,
            exports.can_history_api = can_history_api,
            exports.dzs_clean_string = dzs_clean_string,
            exports.formatTime = formatTime,
            exports.can_canvas = can_canvas,
            exports.dzsap_generate_keyboard_controls = dzsap_generate_keyboard_controls,
            exports.convertPluginOptionsToFinalOptions = function(elThis, defaultOptions, argOptions=null, searchedAttr="data-options", $es) {
                var finalOptions = null
                  , tempOptions = {}
                  , sw_setFromJson = !1;
                void 0 === $es && ($es = jQuery);
                var $elThis = $es(elThis);
                if (argOptions && "object" == typeof argOptions)
                    tempOptions = argOptions;
                else {
                    if ($elThis.attr(searchedAttr))
                        try {
                            tempOptions = JSON.parse($elThis.attr(searchedAttr)),
                            sw_setFromJson = !0
                        } catch (e) {
                            console.log("err - ", e)
                        }
                    if (!(sw_setFromJson || void 0 !== argOptions && argOptions || void 0 === $elThis.attr(searchedAttr) || "" == $elThis.attr("data-options"))) {
                        var aux = $elThis.attr(searchedAttr);
                        aux = "var aux_opts = " + aux,
                        eval(aux),
                        tempOptions = Object.assign({}, aux_opts)
                    }
                }
                return finalOptions = Object.assign(defaultOptions, tempOptions),
                finalOptions
            }
            ,
            exports.generateFakeArrayForPcm = function() {
                for (var e = [], a = 0; a < 256; a++)
                    e[a] = 100 * Math.random();
                return e
            }
            ,
            exports.scrubbar_modeWave_clearObsoleteCanvas = scrubbar_modeWave_clearObsoleteCanvas,
            exports.scrubbar_modeWave_setupCanvas = scrubbar_modeWave_setupCanvas
        }
        ,
        690: (e,a,t)=>{
            "use strict";
            t.r(a),
            t.d(a, {
                retrieve_soundcloud_url: ()=>n
            });
            var i = t(567);
            const s = t(348);
            function n(e, a) {
                var t = e.initOptions;
                "" == t.soundcloud_apikey && alert("soundcloud api key not defined, read docs!");
                var n = "https://api.soundcloud.com/resolve?url=" + e.data_source + "&format=json&consumer_key=" + t.soundcloud_apikey;
                n = encodeURIComponent(n);
                var o = t.php_retriever + "?scurl=" + n;
                jQuery.ajax({
                    type: "GET",
                    url: o,
                    data: {},
                    async: !0,
                    dataType: "text",
                    error: function(e, a, t) {
                        console.log("retried soundcloud error", e, a, t)
                    },
                    success: function(a) {
                        var n = [];
                        let r = "";
                        try {
                            n = JSON.parse(a),
                            e.audioType = "selfHosted",
                            "" == n && (e.cthis.addClass(i.O.ERRORED_OUT_CLASS),
                            e.cthis.append('<div class="feedback-text">soundcloud track does not seem to serve via api</div>')),
                            e.original_real_mp3 = e.cthis.attr("data-source"),
                            n.stream_url ? (r = n.stream_url + "?consumer_key=" + t.soundcloud_apikey + "&origin=localhost",
                            e.cthis.attr("data-source", r),
                            e.$feed_fakeButton && e.$feed_fakeButton.attr("data-source", r),
                            e._sourcePlayer && e._sourcePlayer.attr("data-source", r)) : (e.cthis.addClass(i.O.ERRORED_OUT_CLASS),
                            e.cthis.append('<div class="feedback-text ">this soundcloud track does not allow streaming  </div>')),
                            e.src_real_mp3 = r,
                            e.cthis.attr("data-pcm") && (e.isRealPcm = !0),
                            "skin-wave" == t.design_skin && "canvas" == t.skinwave_wave_mode && 0 == e.isRealPcm && 0 == ("on" == t.pcm_data_try_to_generate && "on" == t.pcm_data_try_to_generate_wait_for_real_pcm) && s.scrubModeWave__initGenerateWaveData(e, {
                                call_from: "soundcloud init(), pcm not real.."
                            }),
                            e.data_source = r,
                            e.setup_media({
                                called_from: "change_media"
                            }),
                            setTimeout((function() {
                                e.isPlayPromised && (e.play_media({
                                    call_from: "change_media"
                                }),
                                e.isPlayPromised = !1)
                            }
                            ), 300)
                        } catch (e) {
                            console.log("soduncloud parse error -", a, " - ", o)
                        }
                    }
                })
            }
        }
        ,
        1: (e,a,t)=>{
            "use strict";
            t.r(a),
            t.d(a, {
                registerToJquery: ()=>r
            });
            var i = t(586)
              , s = t(567);
            const n = t(655);
            class o {
                constructor(e, a, t) {
                    this.argThis = e,
                    this.argOptions = a,
                    this.$ = t,
                    this.navClass = null,
                    this.init()
                }
                init() {
                    var e, a, t, o, r = this.$, l = this, d = l.argOptions, c = r(l.argThis), _ = "ag1", p = -1, u = 0, m = 0, h = 0, f = 0, g = !1, v = !0, y = !0, b = !1, w = !1, k = [], C = [], T = "You need to comment or rate before downloading.", x = 0, z = 0, P = 0;
                    function $() {
                        if (y)
                            return !1;
                        c.remove(),
                        c = null,
                        y = !0
                    }
                    function S(e, t) {
                        e || (e = "title"),
                        a.children().each((function() {
                            var i, s, n = (i = r(this),
                            s = "",
                            "title" === e && (s = i.find(".the-name").text()),
                            "" === t || s.toLowerCase().indexOf(t.toLowerCase()) > -1);
                            n ? r(this).addClass("is-according-to-search") : r(this).removeClass("is-according-to-search"),
                            a.hasClass("isotoped") ? a.isotope({
                                filter: ".is-according-to-search"
                            }) : n ? r(this).fadeIn("fast") : r(this).fadeOut("fast")
                        }
                        ))
                    }
                    function O() {
                        window.dzsap_syncList_players = [],
                        a.children(".audioplayer,.audioplayer-tobe").each((function() {
                            var e = r(this);
                            e.addClass("feeded-whole-playlist"),
                            "on" != e.attr("data-do-not-include-in-list") && window.dzsap_syncList_players.push(e)
                        }
                        ))
                    }
                    function M() {
                        if (w)
                            return !1;
                        w = !0,
                        d.settings_php_handler && r.ajax({
                            type: "POST",
                            url: d.settings_php_handler,
                            data: {
                                action: "dzsap_get_views_all",
                                postdata: "1"
                            },
                            success: function(e) {
                                c.attr("data-track-data", e),
                                N()
                            },
                            error: function(e) {
                                window.console
                            }
                        })
                    }
                    function N() {
                        if (c.attr("data-track-data")) {
                            try {
                                C = JSON.parse(c.attr("data-track-data"))
                            } catch (e) {
                                console.log(e)
                            }
                            C && C.length && l.navClass.parseTrackData(C)
                        }
                    }
                    function q() {
                        return m
                    }
                    function I() {
                        var e, t = c.find(".items").eq(0).children(".audioplayer-tobe").length;
                        for (k = [],
                        f = 0; f < t; f++) {
                            var s = c.find(".items").children(".audioplayer-tobe").eq(0)
                              , n = "";
                            s.find(".menu-description").html() ? n = s.find(".menu-description").html() : (n = "",
                            (s.find(".feed-artist").length || s.find(".feed-songname").length) && (n = "",
                            s.attr("data-thumb") && (n += `<div class="menu-item-thumb-con"><div class="menu-item-thumb" style="background-image: url(${s.attr("data-thumb")})"></div></div>`),
                            n += `<div class="menu-artist-info"><span class="the-artist">${s.find(".feed-artist").html()}</span><span class="the-name">${s.find(".feed-songname").html()}</span></div>`));
                            var r = {
                                menu_description: n,
                                player_id: (e = s,
                                e.attr("data-player-id") ? e.attr("data-player-id") : e.attr("id") ? e.attr("id") : e.attr("data-source") ? i.dzs_clean_string(e.attr("data-source")) : void 0)
                            };
                            k.push(r),
                            a.append(s)
                        }
                        for (f = 0; f < k.length; f++) {
                            var l = "";
                            k[f].menu_description && -1 == k[f].menu_description.indexOf('<div class="menu-item-thumb-con"><div class="menu-item-thumb" style="') && (l += " no-thumb");
                            var d = '<div class="menu-item' + l + '"  data-menu-index="' + f + '" data-gallery-id="' + _ + '" data-playerid="' + k[f].player_id + '">';
                            c.hasClass("skin-aura") && (d += '<div class="menu-item-number">' + ++m + "</div>"),
                            d += k[f].menu_description,
                            c.hasClass("skin-aura") && 1 == String(k[f].menu_description).indexOf("menu-item-views") && (C && C.length > 0 ? d += '<div class="menu-item-views"></div>' : (M(),
                            d += '<div class="menu-item-views">' + dzsapSvgs.svg_play_icon + ' <span class="the-count">{{views_' + k[f].player_id + "}}</span></div>")),
                            d += "</div>",
                            o.append(d),
                            c.hasClass("skin-aura") && k[f] && k[f].menu_description && k[f].menu_description.indexOf("float-right") > -1 && o.children().last().addClass("has-extra-info")
                        }
                    }
                    function A() {
                        c.addClass("dzsag-loaded")
                    }
                    function j() {
                        if (0 == r(this).hasClass("active"))
                            return alert(T),
                            !1
                    }
                    function R() {
                        void 0 !== a.children().eq(p).get(0) && void 0 !== a.children().eq(p).get(0).api_play_media && a.children().eq(p).get(0).api_play_media({
                            call_from: "play_curr_media_gallery"
                        })
                    }
                    function E(e) {
                        if ("mode-showall" == d.settings_mode) {
                            var t = a.children(".audioplayer,.audioplayer-tobe").index(e);
                            p = t,
                            c.get(0).currNr_2 = t
                        }
                    }
                    function H() {
                        isNaN(x) && (x = 0),
                        z = x,
                        P = l.navClass.finish_viy - z,
                        x = Number(Math.easeIn(1, z, P, 20).toFixed(4)),
                        0 == i.is_ios() && 0 == i.is_android() && o.css({
                            transform: "translateY(" + x + "px)"
                        }),
                        requestAnimFrame(H)
                    }
                    function L() {
                        l.navClass.toggle_menu_state()
                    }
                    function F() {
                        "on" == d.autoplayNext && J()
                    }
                    function B() {
                        o.children(".menu-item").eq(p).find(".download-after-rate").addClass("active")
                    }
                    function D() {
                        o.children(".menu-item").eq(p).find(".download-after-rate").addClass("active")
                    }
                    function V() {
                        "mode-showall" != d.settings_mode && 0 == a.hasClass("isotoped") && "one" != d.mode_normal_video_mode && 0 == a.children().eq(p).hasClass("zoomsounds-wrapper-bg-bellow") && a.css("height", a.children().eq(p).outerHeight()),
                        0 == a.hasClass("isotoped") && setTimeout((function() {
                            a.css("height", "auto")
                        }
                        ), s.O.PLAYLIST_TRANSITION_DURATION),
                        l.navClass.calculateDims(),
                        "on" == d.embedded && window.frameElement && (window.frameElement.height = c.height())
                    }
                    function Q() {
                        l.navClass.calculateDims()
                    }
                    function W() {
                        "mode-showall" !== d.settings_mode && !1 === a.hasClass("isotoped") && setTimeout((function() {
                            a.css("height", a.children().eq(p).outerHeight())
                        }
                        ), 500),
                        V()
                    }
                    function U(e) {
                        a.children().eq(u).removeClass("transitioning-out"),
                        a.children().eq(e).removeClass("transitioning-in"),
                        u = p,
                        g = !1
                    }
                    function G() {
                        c.parent().children(".the-bg").eq(0).remove(),
                        g = !1
                    }
                    function Y() {
                        h = p;
                        var e = !0;
                        --h < 0 && (h = a.children().length - 1,
                        "off" == d.loop_playlist && (e = !1)),
                        e && X(h)
                    }
                    function J() {
                        h = p;
                        var e = !0;
                        "mode-showall" == d.settings_mode && (h = c.get(0).currNr_2),
                        ++h >= a.children().length && (h = 0,
                        "off" == d.loop_playlist && (e = !1)),
                        e && X(h)
                    }
                    function X(e, t) {
                        var n = {
                            ignore_arg_currNr_check: !1,
                            ignore_linking: !1,
                            donotopenlink: "off",
                            called_from: "default"
                        };
                        if (t && (n = r.extend(n, t)),
                        1 != g)
                            if ("last" == e && (e = a.children().length - 1),
                            p != e) {
                                var l = a.children(".audioplayer,.audioplayer-tobe").eq(e)
                                  , u = "";
                                p > -1 && (void 0 !== a.children().eq(p).get(0) && (void 0 !== a.children().eq(p).get(0).api_pause_media && a.children().eq(p).get(0).api_pause_media(),
                                void 0 !== a.children().eq(p).get(0).api_get_last_vol && (u = a.children().eq(p).get(0).api_get_last_vol())),
                                o.children().removeClass("active active-from-gallery"),
                                "one" == d.mode_normal_video_mode || "mode-showall" != d.settings_mode && (a.children().eq(p).removeClass("active active-from-gallery"),
                                o.children().eq(p).removeClass("active active-from-gallery"))),
                                "sameasgallery" === d.settings_ap.design_skin && (d.settings_ap.design_skin = d.design_skin),
                                -1 == p && "on" == d.autoplay && (d.settings_ap.autoplay = "on"),
                                p > -1 && "on" == d.autoplayNext && (d.settings_ap.autoplay = "on"),
                                d.settings_ap.parentgallery = c,
                                d.settings_ap.design_menu_show_player_state_button = d.design_menu_show_player_state_button,
                                d.settings_ap.cue = "on",
                                1 == v && ("off" == d.cueFirstMedia && (d.settings_ap.cue = "off"),
                                v = !1);
                                var m = r.extend({}, d.settings_ap);
                                if (m.volume_from_gallery = u,
                                m.call_from = "gotoItem",
                                m.player_navigation = d.player_navigation,
                                "one" == d.mode_normal_video_mode && e > -1 && "init" != n.called_from) {
                                    var h = a.children().eq(0).get(0);
                                    l = a.children().eq(0),
                                    h && h.api_play_media && (h.api_change_media(a.children().eq(e), {
                                        called_from: "goto_item -- mode_normal_video_mode()",
                                        modeOneGalleryIndex: e,
                                        source_player_do_not_update: "on"
                                    }),
                                    "on" == d.autoplayNext && setTimeout((function() {
                                        h.api_play_media()
                                    }
                                    ), 200))
                                } else
                                    Z(l, m);
                                "on" === d.autoplayNext && ("mode-showall" === d.settings_mode && (p = c.get(0).currNr_2),
                                p > -1 && l.get(0) && l.get(0).api_play && l.get(0).api_play()),
                                void 0 !== d.settings_ap.playfrom && "0" !== d.settings_ap.playfrom || (l.get(0) && l.get(0).api_seek_to ? l.get(0).api_seek_to(0, {
                                    call_from: "playlist_seek_from_0"
                                }) : console.log("_audioplayerToBeActive not found - ", l)),
                                l.get(0),
                                "mode-showall" !== d.settings_mode && (a.children().eq(p).addClass("transitioning-out"),
                                l.removeClass("transitioning-out-complete"),
                                l.addClass("transitioning-in"),
                                setTimeout((e=>{
                                    e.addClass("transitioning-out-complete")
                                }
                                ), s.O.PLAYLIST_TRANSITION_DURATION, a.children().eq(p)),
                                "link" != l.attr("data-type") && 0 == n.ignore_linking && "on" == d.settings_enable_linking && history.pushState({
                                    foo: "bar"
                                }, null, i.add_query_arg(window.location.href, "audiogallery_startitem_" + _, e)),
                                "fade" === d.playlistTransition && (setTimeout(U, s.O.PLAYLIST_TRANSITION_DURATION, e),
                                g = !0),
                                "direct" === d.playlistTransition && U(e)),
                                l.addClass("active active-from-gallery"),
                                o.children().eq(e).addClass("active active-from-gallery");
                                var f = "";
                                l.attr("data-bgimage") && (f = l.attr("data-bgimage")),
                                l.attr("data-wrapper-image") && (f = l.attr("data-wrapper-image")),
                                f && c.parent().hasClass("ap-wrapper") && c.parent().children(".the-bg").length > 0 && (c.parent().children(".the-bg").eq(0).after('<div class="the-bg" style="background-image: url(' + f + ');"></div>'),
                                c.parent().children(".the-bg").eq(0).css({
                                    opacity: 1
                                }),
                                c.parent().children(".the-bg").eq(1).css({
                                    opacity: 0
                                }),
                                c.parent().children(".the-bg").eq(1).animate({
                                    opacity: 1
                                }, {
                                    queue: !1,
                                    duration: 1e3,
                                    complete: G,
                                    step: function() {
                                        g = !0
                                    }
                                }),
                                g = !0),
                                "mode-showall" != d.settings_mode && (p = e,
                                c.data("currNr", p)),
                                a.children().eq(p).get(0) && a.children().eq(p).get(0).api_handleResize && a.children().eq(p).hasClass("media-setuped") && a.children().eq(p).get(0).api_handleResize(),
                                V()
                            } else
                                a && a.children().eq(p).get(0) && a.children().eq(p).get(0).api_play_media && a.children().eq(p).get(0).api_play_media({
                                    call_from: "gallery"
                                })
                    }
                    function Z(e, a) {
                        var t = r.extend({}, d.settings_ap);
                        a && (t = r.extend(t, a)),
                        e.hasClass("audioplayer-tobe") && (d.settings_ap.call_from = "init player from gallery",
                        e.audioplayer(t))
                    }
                    l.goto_item = X,
                    l.handleResize = W,
                    l.initOptions = d,
                    window.dzsap_settings && void 0 !== window.dzsap_settings.str_alertBeforeRate && (T = window.dzsap_settings.str_alertBeforeRate),
                    c.get(0).currNr_2 = -1,
                    function() {
                        if ("default" === d.settings_ap)
                            if (c.attr("data-player-options"))
                                d.settings_ap = i.convertPluginOptionsToFinalOptions(c.get(0), {}, null, "data-player-options");
                            else {
                                const e = c.find(".audioplayer, .audioplayer-tobe").eq(0);
                                e && (d.settings_ap = i.convertPluginOptionsToFinalOptions(e.get(0), {}, null))
                            }
                        else
                            "string" == typeof d.settings_ap && window.dzsap_apconfigs && "object" == typeof window.dzsap_apconfigs[d.settings_ap] && (d.settings_ap = {
                                ...window.dzsap_apconfigs[d.settings_ap]
                            });
                        "default" !== d.settings_ap && "string" != typeof d.settings_ap || (d.settings_ap = {}),
                        "default" === d.design_menu_width && (d.design_menu_width = "100%"),
                        "default" === d.design_menu_height && (d.design_menu_height = "200"),
                        c.hasClass("skin-wave") && (d.design_skin = "skin-wave"),
                        c.hasClass("skin-default") && (d.design_skin = "skin-default"),
                        c.hasClass("skin-aura") && (d.design_skin = "skin-aura"),
                        c.addClass(d.settings_mode),
                        c.append('<div class="slider-main"><div class="slider-clipper"></div></div>'),
                        c.addClass("menu-position-" + d.design_menu_position),
                        e = c.find(".slider-main").eq(0);
                        var p = c.find(".items").children(".audioplayer-tobe").length;
                        d.settings_ap.disable_player_navigation = d.disable_player_navigation,
                        (0 === p || 1 === p) && (d.design_menu_position = "none",
                        d.settings_ap.disable_player_navigation = "on"),
                        l.navClass = new n.ZoomSoundsNav(l),
                        "top" === d.design_menu_position && e.before(l.navClass.get_structZoomsoundsNav()),
                        "bottom" === d.design_menu_position && e.after(l.navClass.get_structZoomsoundsNav()),
                        d.settings_php_handler || d.settings_ap.settings_php_handler && (d.settings_php_handler = d.settings_ap.settings_php_handler),
                        c.attr("id"),
                        _ = c.attr("id"),
                        a = c.find(".slider-clipper").eq(0),
                        t = c.find(".nav-main").eq(0),
                        o = c.find(".nav-clipper").eq(0),
                        c.children(".extra-html").length && c.append(c.children(".extra-html")),
                        "mode-showall" === d.settings_mode && a.addClass("layout-" + d.mode_showall_layout),
                        l.navClass.set_elements(t, o, c),
                        I(),
                        l.navClass.init_ready(),
                        N(),
                        !1 === i.can_history_api() && (d.settings_enable_linking = "off"),
                        r(window).bind("resize", W),
                        W(),
                        setTimeout(W, 1e3),
                        c.get(0).api_skin_redlights_give_controls_right_to_all = function() {
                            b = !0
                        }
                        ,
                        i.get_query_arg(window.location.href, "audiogallery_startitem_" + _) && (h = Number(i.get_query_arg(window.location.href, "audiogallery_startitem_" + _)),
                        u = h,
                        Number(i.get_query_arg(window.location.href, "audiogallery_startitem_" + _)) && Number(i.get_query_arg(window.location.href, "audiogallery_startitem_" + _)) > 0 && "on" == d.force_autoplay_when_coming_from_share_link && (d.autoplay = "on")),
                        "mode-normal" == d.settings_mode && X(h, {
                            called_from: "init"
                        }),
                        "mode-showall" === d.settings_mode && (a.children().each((function() {
                            var e = r(this)
                              , a = e.parent().children(".audioplayer,.audioplayer-tobe").index(e);
                            if (e.hasClass("audioplayer-tobe")) {
                                var t = Object.assign({}, d.settings_ap);
                                t.parentgallery = c,
                                t.call_from = "mode show-all",
                                t.action_audio_play = E,
                                e.audioplayer(t),
                                (a = String(a + 1)).length < 2 && (a = "0" + a),
                                "one-per-row" === d.mode_showall_layout && "off" !== d.settings_mode_showall_show_number && (e.before('<div class="number-wrapper"><span class="the-number">' + a + "</span></div>"),
                                e.after('<div class="clear for-number-wrapper"></div>'))
                            }
                        }
                        )),
                        r.fn.isotope && "one-per-row" !== d.mode_showall_layout && (a.find(".audioplayer,.audioplayer-tobe").addClass("isotope-item"),
                        setTimeout((function() {
                            a.prepend('<div class="grid-sizer"></div>'),
                            a.isotope({
                                itemSelector: ".isotope-item",
                                layoutMode: "fitRows",
                                percentPosition: !0,
                                masonry: {
                                    columnWidth: ".grid-sizer"
                                }
                            }),
                            a.addClass("isotoped"),
                            setTimeout((function() {
                                a.isotope("layout")
                            }
                            ), 900)
                        }
                        ), s.O.PLAYLIST_TRANSITION_DURATION),
                        a.append('<div class="clear"></div>')),
                        b && a.children(".audioplayer").each((function() {
                            var e = r(this);
                            !1 === e.find(".ap-controls-right").eq(0).prev().hasClass("controls-right") && e.find(".ap-controls-right").eq(0).before('<div class="controls-right"> </div>')
                        }
                        ))),
                        c.find(".download-after-rate").bind("click", j),
                        c.get(0).api_regenerate_sync_players_with_this_playlist = O,
                        c.get(0).api_goto_next = J,
                        c.get(0).api_goto_prev = Y,
                        c.get(0).api_goto_item = X,
                        c.get(0).api_gallery_handle_end = F,
                        c.get(0).api_toggle_menu_state = L,
                        c.get(0).api_handleResize = W,
                        c.get(0).api_player_commentSubmitted = B,
                        c.get(0).api_player_rateSubmitted = D,
                        c.get(0).api_reinit = I,
                        c.get(0).api_play_curr_media = R,
                        c.get(0).api_get_nr_children = q,
                        c.get(0).api_init_player_from_gallery = Z,
                        c.get(0).api_filter = S,
                        c.get(0).api_destroy = $,
                        setInterval(Q, 1e3),
                        setTimeout(A, 700),
                        "on" == d.enable_easing && H(),
                        c.addClass("dzsag-inited"),
                        c.addClass("transition-" + d.playlistTransition),
                        c.addClass("playlist-transition-" + d.playlistTransition)
                    }()
                }
            }
            const r = function(e) {
                e.fn.audiogallery = function(a) {
                    var s, n = t(676).P;
                    s = i.convertPluginOptionsToFinalOptions(this, n, a),
                    this.each((function() {
                        var a = new o(this,s,e);
                        this.linkedClassInstance = a
                    }
                    ))
                }
                ,
                window.dzsag_init = function(a, t) {
                    void 0 !== t && void 0 !== t.init_each && !0 === t.init_each ? (1 === Object.keys(t).length && (t = void 0),
                    e(a).each((function() {
                        e(this).audiogallery(t)
                    }
                    ))) : e(a).audiogallery(t)
                }
            }
        }
        ,
        560: (e,a)=>{
            a.svg_footer_playlist = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="13.25px" height="13.915px" viewBox="0 0 13.25 13.915" enable-background="new 0 0 13.25 13.915" xml:space="preserve"> <path d="M1.327,4.346c-0.058,0-0.104-0.052-0.104-0.115V2.222c0-0.063,0.046-0.115,0.104-0.115H11.58 c0.059,0,0.105,0.052,0.105,0.115v2.009c0,0.063-0.046,0.115-0.105,0.115H1.327z"/> <path d="M1.351,8.177c-0.058,0-0.104-0.051-0.104-0.115V6.054c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.063-0.047,0.115-0.105,0.115H1.351z"/> <path d="M1.351,12.182c-0.058,0-0.104-0.05-0.104-0.115v-2.009c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.064-0.047,0.115-0.105,0.115H1.351z"/> </svg>',
            a.svg_embed_btn = '<svg class="svg-icon" version="1.2" baseProfile="tiny" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15" xml:space="preserve"> <g id="Layer_1"> <polygon fill="#E6E7E8" points="1.221,7.067 0.494,5.422 4.963,1.12 5.69,2.767 "/> <polygon fill="#E6E7E8" points="0.5,5.358 1.657,4.263 3.944,10.578 2.787,11.676 "/> <polygon fill="#E6E7E8" points="13.588,9.597 14.887,8.34 12.268,2.672 10.969,3.93 "/> <polygon fill="#E6E7E8" points="14.903,8.278 14.22,6.829 9.714,11.837 10.397,13.287 "/> </g> <g id="Layer_2"> <rect x="6.416" y="1.713" transform="matrix(0.9663 0.2575 -0.2575 0.9663 2.1699 -1.6329)" fill="#E6E7E8" width="1.805" height="11.509"/> </g> </svg>',
            a.svg_prev_btn = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 12.5 12.817" enable-background="new 0 0 12.5 12.817" xml:space="preserve"> <g> <g> <g> <path fill="#D2D6DB" d="M2.581,7.375c-0.744-0.462-1.413-0.94-1.486-1.061C1.021,6.194,1.867,5.586,2.632,5.158l2.35-1.313 c0.765-0.427,1.505-0.782,1.646-0.789s0.257,1.03,0.257,1.905V7.87c0,0.876-0.051,1.692-0.112,1.817 C6.711,9.81,5.776,9.361,5.032,8.898L2.581,7.375z"/> </g> </g> </g> <g> <g> <g> <path fill="#D2D6DB" d="M6.307,7.57C5.413,7.014,4.61,6.441,4.521,6.295C4.432,6.15,5.447,5.42,6.366,4.906l2.82-1.577 c0.919-0.513,1.809-0.939,1.979-0.947s0.309,1.236,0.309,2.288v3.493c0,1.053-0.061,2.033-0.135,2.182S10.144,9.955,9.25,9.4 L6.307,7.57z"/> </g> </g> </g> </svg>',
            a.svg_next_btn = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 12.5 12.817" enable-background="new 0 0 12.5 12.817" xml:space="preserve"> <g> <g> <g> <path fill="#D2D6DB" d="M9.874,5.443c0.744,0.462,1.414,0.939,1.486,1.06c0.074,0.121-0.771,0.729-1.535,1.156L7.482,8.967 C6.719,9.394,5.978,9.75,5.837,9.756C5.696,9.761,5.581,8.726,5.581,7.851V4.952c0-0.875,0.05-1.693,0.112-1.816 c0.062-0.124,0.995,0.326,1.739,0.788L9.874,5.443z"/> </g> </g> </g> <g> <g> <g> <path fill="#D2D6DB" d="M6.155,5.248c0.893,0.556,1.696,1.129,1.786,1.274c0.088,0.145-0.928,0.875-1.847,1.389l-2.811,1.57 c-0.918,0.514-1.808,0.939-1.978,0.947c-0.169,0.008-0.308-1.234-0.308-2.287V4.66c0-1.052,0.061-2.034,0.135-2.182 s1.195,0.391,2.089,0.947L6.155,5.248z"/> </g> </g> </g> </svg>',
            a.svg_menu_state = '<svg class="svg-icon" version="1.1" id="Layer_2" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="13.25px" height="13.915px" viewBox="0 0 13.25 13.915" enable-background="new 0 0 13.25 13.915" xml:space="preserve"> <path d="M1.327,4.346c-0.058,0-0.104-0.052-0.104-0.115V2.222c0-0.063,0.046-0.115,0.104-0.115H11.58 c0.059,0,0.105,0.052,0.105,0.115v2.009c0,0.063-0.046,0.115-0.105,0.115H1.327z"/> <path d="M1.351,8.177c-0.058,0-0.104-0.051-0.104-0.115V6.054c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.063-0.047,0.115-0.105,0.115H1.351z"/> <path d="M1.351,12.182c-0.058,0-0.104-0.05-0.104-0.115v-2.009c0-0.064,0.046-0.115,0.104-0.115h10.252 c0.058,0,0.105,0.051,0.105,0.115v2.009c0,0.064-0.047,0.115-0.105,0.115H1.351z"/> </svg>',
            a.svg_embed_button = ' <svg class="svg-icon" version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="10.975px" height="14.479px" viewBox="0 0 10.975 14.479" enable-background="new 0 0 10.975 14.479" xml:space="preserve"> <g> <path d="M2.579,1.907c0.524-0.524,1.375-0.524,1.899,0l4.803,4.804c0.236-0.895,0.015-1.886-0.687-2.587L5.428,0.959 c-1.049-1.05-2.75-1.05-3.799,0L0.917,1.671c-1.049,1.05-1.049,2.751,0,3.801l3.167,3.166c0.7,0.702,1.691,0.922,2.587,0.686 L1.867,4.52c-0.524-0.524-0.524-1.376,0-1.899L2.579,1.907z M5.498,13.553c1.05,1.05,2.75,1.05,3.801,0l0.712-0.713 c1.05-1.05,1.05-2.75,0-3.8L6.843,5.876c-0.701-0.7-1.691-0.922-2.586-0.686l4.802,4.803c0.524,0.525,0.524,1.376,0,1.897 l-0.713,0.715c-0.523,0.522-1.375,0.522-1.898,0L1.646,7.802c-0.237,0.895-0.014,1.886,0.686,2.586L5.498,13.553z"/> </g> </svg> ',
            a.playbtn_svg = '<svg class="svg-icon" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="30px" viewBox="0 0 25 30" xml:space="preserve"> <path d="M24.156,13.195L2.406,0.25C2.141,0.094,1.867,0,1.555,0C0.703,0,0.008,0.703,0.008,1.562H0v26.875h0.008 C0.008,29.297,0.703,30,1.555,30c0.32,0,0.586-0.109,0.875-0.266l21.727-12.93C24.672,16.375,25,15.727,25,15 S24.672,13.633,24.156,13.195z"/> </svg>',
            a.svg_share_icon = '<svg class="svg-icon" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 511.626 511.627" style="enable-background:new 0 0 511.626 511.627;" xml:space="preserve"> <g> <path d="M506.206,179.012L360.025,32.834c-3.617-3.617-7.898-5.426-12.847-5.426s-9.233,1.809-12.847,5.426 c-3.617,3.619-5.428,7.902-5.428,12.85v73.089h-63.953c-135.716,0-218.984,38.354-249.823,115.06C5.042,259.335,0,291.03,0,328.907 c0,31.594,12.087,74.514,36.259,128.762c0.57,1.335,1.566,3.614,2.996,6.849c1.429,3.233,2.712,6.088,3.854,8.565 c1.146,2.471,2.384,4.565,3.715,6.276c2.282,3.237,4.948,4.859,7.994,4.859c2.855,0,5.092-0.951,6.711-2.854 c1.615-1.902,2.424-4.284,2.424-7.132c0-1.718-0.238-4.236-0.715-7.569c-0.476-3.333-0.715-5.564-0.715-6.708 c-0.953-12.938-1.429-24.653-1.429-35.114c0-19.223,1.668-36.449,4.996-51.675c3.333-15.229,7.948-28.407,13.85-39.543 c5.901-11.14,13.512-20.745,22.841-28.835c9.325-8.09,19.364-14.702,30.118-19.842c10.756-5.141,23.413-9.186,37.974-12.135 c14.56-2.95,29.215-4.997,43.968-6.14s31.455-1.711,50.109-1.711h63.953v73.091c0,4.948,1.807,9.232,5.421,12.847 c3.62,3.613,7.901,5.424,12.847,5.424c4.948,0,9.232-1.811,12.854-5.424l146.178-146.183c3.617-3.617,5.424-7.898,5.424-12.847 C511.626,186.92,509.82,182.636,506.206,179.012z" fill="#696969"/> </g></svg> ',
            a.pausebtn_svg = '<svg class="svg-icon" version="1.1" id="Layer_3" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" width="12px" height="13px" viewBox="0 0 13.415 16.333" enable-background="new 0 0 13.415 16.333" xml:space="preserve"> <path fill="#D2D6DB" d="M4.868,14.59c0,0.549-0.591,0.997-1.322,0.997H2.2c-0.731,0-1.322-0.448-1.322-0.997V1.618 c0-0.55,0.592-0.997,1.322-0.997h1.346c0.731,0,1.322,0.447,1.322,0.997V14.59z"/> <path fill="#D2D6DB" d="M12.118,14.59c0,0.549-0.593,0.997-1.324,0.997H9.448c-0.729,0-1.322-0.448-1.322-0.997V1.619 c0-0.55,0.593-0.997,1.322-0.997h1.346c0.731,0,1.324,0.447,1.324,0.997V14.59z"/> </svg>'
        }
        ,
        217: (e,a,t)=>{
            "use strict";
            t.r(a),
            t.d(a, {
                hide_comments_writer: ()=>o,
                comments_setupCommentsInitial: ()=>r,
                comments_setupCommentsHolder: ()=>l,
                comments_handleClickCommentsBg: ()=>c,
                comments_handleClickCancel: ()=>_,
                comments_handleClickSubmit: ()=>u,
                comments_selector_event: ()=>m
            });
            var i = t(586);
            const s = t(891)
              , n = t(401)
              , o = function(e) {
                var a = jQuery;
                e.cthis.removeClass("comments-writer-active"),
                e._commentsHolder.find(".dzstooltip-con.placeholder").remove(),
                e.$commentsWritter.removeClass("active"),
                e.$commentsWritter.css({
                    height: 0
                }),
                e.initOptions.parentgallery && void 0 !== a(e.initOptions.parentgallery).get(0) && void 0 !== a(e.initOptions.parentgallery).get(0).api_handleResize && a(e.initOptions.parentgallery).get(0).api_handleResize(),
                setTimeout((function() {
                    e.cthis.find(".comments-writter-temp-css,.dzsap-style-comments").remove()
                }
                ), 300)
            }
              , r = function(e) {
                jQuery;
                var a = e.initOptions;
                e.cthis.find(".the-comments").length > 0 && e.cthis.find(".the-comments").eq(0).children().length > 0 && (e.$commentsChildren = e.cthis.find(".the-comments").eq(0).children());
                var t = '<div class="comments-holder">';
                a.skinwave_comments_links_to ? t += '<a href="' + a.skinwave_comments_links_to + '" target="_blank" class="the-bg"></a>' : t += '<div class="the-comments-holder-bg"><div class="the-avatar comments-avatar--placeholder"></div></div>',
                t += '</div><div class="clear"></div><div class="dzstooltip dzstooltip--comments-writer    talign-center arrow-top style-rounded color-dark-light    dims-set transition-slidedown " style="width: 330px;">  <div class="dzstooltip--inner"><div class="comments-writer"><div class="comments-writer-inner">\n<div class="comments-writer--form">\n\n                <div class="dzsap-comments--section">\n\n                  <textarea name="comment-text" placeholder="Your comment.." type="text" class="comment-input"></textarea>\n\n                </div>\n                <div class="dzsap-comments--section">\n                  <input placeholder="Your email.." name="comment-email" type="text" class="comment-input">\n                </div>\n                <div class="dzsap-comments--section overflow-and-fixed  ">\n\n                  <div class="flex-grow-1   "><span\n                    class="dzsap-comments--comment-form-label">commenting on </span> <span\n                    class="dzsap-comments--comment-form-label-time">1:07</span></div>\n                  <div class="flex-grow-0 margin-left-auto"><button class="submit-ap-comment dzs-button-dzsap float-right">&#10148; Submit</button></div>\n                  <div class="clear"></div>\n\n                </div>\n              </div>\n\n              <div class="comments-writer--avatar-con">\n                <div class="comments-writer--avatar" style=""></div>\n              </div>\n              </div></div><span class="dzstooltip--close"><span\n              class="label--x-button">&#10006;</span></span></div></div>',
                e._scrubbar.appendOnce(t),
                e._commentsHolder = e.cthis.find(".comments-holder").eq(0),
                e.$commentsWritter = e.cthis.find(".dzstooltip--comments-writer").eq(0);
                var i = this;
                this.comments_setupCommentsHolder(e, {
                    call_from: "default"
                }),
                e._commentsHolder.on("click", (function(a) {
                    i.comments_handleClickCommentsBg(e, this, a)
                }
                )),
                e._commentsHolder.on("mousemove", (function(a) {
                    e._commentsHolder.find(".comments-avatar--placeholder").css("left", n.getRelativeX(a.pageX, a.currentTarget) - 7 + "px")
                }
                )),
                e.$commentsWritter.find(".dzstooltip--close").bind("click", (a=>{
                    i.comments_handleClickCancel(e, a)
                }
                )),
                e.$commentsWritter.find(".submit-ap-comment").bind("click", (a=>{
                    i.comments_handleClickSubmit(e, a)
                }
                ))
            }
              , l = function(e) {
                var a = jQuery
                  , t = e.initOptions;
                e._commentsHolder && e.$commentsChildren && e.$commentsChildren.each((function() {
                    var i = a(this);
                    "on" === t.skinwave_comments_process_in_php && i && i.hasClass && i.hasClass("dzstooltip-con") && (i.find(".dzstooltip > .dzstooltip--inner").length || (i.find(".dzstooltip").wrapInner('<div class="dzstooltip--inner"></div>'),
                    i.find(".the-avatar").addClass("tooltip-indicator"),
                    i.find(".dzstooltip").before(i.find(".tooltip-indicator")),
                    i.find(".dzstooltip").addClass("talign-start style-rounded color-dark-light"))),
                    e._commentsHolder.append(i)
                }
                ))
            };
            function d(e, a) {
                e.timeModel.getVisualTotalTime() ? e.$commentsWritter.find(".dzsap-comments--comment-form-label-time").html(i.formatTime(a * e.timeModel.getVisualTotalTime())) : setTimeout((()=>{
                    d(e, a)
                }
                ), 100)
            }
            const c = function(e, a, t) {
                var i = jQuery
                  , s = e.initOptions
                  , n = i(a)
                  , o = parseInt(t.clientX, 10) - n.offset().left;
                let r = o / n.width();
                if (e.commentPositionPerc = `calc(${100 * r}% - 7px)`,
                d(e, r),
                !s.skinwave_comments_links_to) {
                    if (!("off" !== s.skinwave_comments_allow_post_if_not_logged_in || window.dzsap_settings && window.dzsap_settings.comments_username))
                        return !1;
                    var l = !0;
                    if (e._commentsHolder.children().each((function() {
                        var a = i(this);
                        if (!a.hasClass("placeholder") && !a.hasClass("the-bg")) {
                            var t = a.offset().left - n.offset().left;
                            return Math.abs(t - o) < 20 ? (e._commentsHolder.find(".dzstooltip-con.placeholder").remove(),
                            l = !1,
                            !1) : void 0
                        }
                    }
                    )),
                    !l)
                        return !1;
                    e.$commentsWritter.css({
                        left: o + "px"
                    }),
                    e.$commentsWritter.css("top", parseInt(e._commentsHolder.css("top"), 10) + 20 + "px"),
                    !1 === e.$commentsWritter.hasClass("active") && (e.$commentsWritter.addClass("active"),
                    e.cthis.addClass("comments-writer-active")),
                    window.dzsap_settings && window.dzsap_settings.comments_username ? e.cthis.find("input[name=comment-email]").remove() : e.$commentsWritter.find(".comments-writer--avatar-con").remove(),
                    function(e) {
                        var a = "";
                        window.dzsap_settings && window.dzsap_settings.comments_avatar && (a = window.dzsap_settings.comments_avatar),
                        e._commentsHolder.remove(".dzsap-style-comments"),
                        e._commentsHolder.append('<style class="dzsap-style-comments">.dzstooltip-con:not(.placeholder) { opacity: 0.5; }</style>'),
                        e._commentsHolder.find(".dzstooltip-con.placeholder").remove(),
                        e._commentsHolder.append('<span class="dzstooltip-con placeholder" style="left:' + e.commentPositionPerc + ';"><div class="the-avatar" style="background-image: url(' + a + ')"></div></span>')
                    }(e)
                }
            }
              , _ = function(e, a) {
                this.hide_comments_writer(e)
            };
            function p(e, a, t, i) {
                var n = jQuery
                  , r = e.initOptions
                  , l = "";
                if (t) {
                    if (0 == /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t))
                        return alert("please insert email, your email is just used for gravatar. it will not be sent or stored anywhere"),
                        !1;
                    l = String(t).split("@")[0],
                    e.$commentsSelector && e.$commentsSelector.find("*[name=comment_email],*[name=comment_user]").remove(),
                    window.dzsap_settings || (window.dzsap_settings = {}),
                    window.dzsap_settings.comments_username = l,
                    window.dzsap_settings.comments_avatar = "https://secure.gravatar.com/avatar/" + window.MD5(String(e.cthis.find("input[name=comment-email]").eq(0).val()).toLowerCase()) + "?s=20"
                }
                var d = "";
                d += a,
                e.cthis.find("*[name=comment-text]").eq(0).val(""),
                e.cthis.find(".comments-writter-temp-css,.dzsap-style-comments").remove(),
                s.ajax_comment_publish.bind(e)(d),
                o(e),
                r.parentgallery && null != n(r.parentgallery).get(0) && null != n(r.parentgallery).get(0).api_player_commentSubmitted && n(r.parentgallery).get(0).api_player_commentSubmitted()
            }
            const u = function(e, a) {
                var t = "";
                return e.cthis.find("input[name=comment-email]").length && (t = e.cthis.find("input[name=comment-email]").eq(0).val()),
                p(e, e.cthis.find("*[name=comment-text]").eq(0).val(), t),
                !1
            }
              , m = function(e, a) {
                var t = jQuery(this)
                  , i = null;
                if (console.log("_t - ", t),
                t.parent().parent().hasClass("zoomsounds-comment-wrapper") && (i = t.parent().parent()),
                t.parent().parent().parent().hasClass("zoomsounds-comment-wrapper") && (i = t.parent().parent().parent()),
                "focusin" == a.type && (e.timeCurrent,
                e.timeTotal,
                e._commentsHolder.width(),
                e.commentPositionPerc = `calc(${e.timeCurrent / e.timeTotal * 100}% - 7px)`,
                i.addClass("active"),
                this.add_comments_placeholder(e)),
                a.type,
                "click" == a.type && (t.hasClass("dzstooltip--close") && (i.removeClass("active"),
                i.find("input").val("")),
                t.hasClass("comments-btn-submit"))) {
                    var s = "";
                    return i.find(".comment_email").length && (s = i.find(".comment_email").eq(0).val()),
                    p(e, i.find(".comment_text").eq(0).val(), s),
                    i.removeClass("active"),
                    i.find("input").val(""),
                    !1
                }
            }
        }
        ,
        655: (e,a,t)=>{
            "use strict";
            t.r(a),
            t.d(a, {
                ZoomSoundsNav: ()=>o
            });
            var i = t(586)
              , s = t(891);
            const {sanitizeToCssPx: n} = t(401)
              , o = class {
                constructor(e) {
                    this.parentGallery = e,
                    this.structZoomsoundsNav = "",
                    this._navMain = null,
                    this._navClipper = null,
                    this.cgallery = null,
                    this.size_navMainClipSize = null,
                    this.size_navMainTotalSize = null,
                    this.finish_viy = 0,
                    this.init()
                }
                init() {
                   
                    var e = this.parentGallery;
                    this.structZoomsoundsNav = '<div class="nav-main zoomsounds-nav ' + e.initOptions.design_skin + " navigation-method-" + e.initOptions.navigation_method + '"><div id="songItems" class="nav-clipper"></div></div>',
                    "full" === this.parentGallery.initOptions.navigation_method && (this.parentGallery.initOptions.design_menu_height = "auto")
                }
                init_ready() {
                    var e = this.parentGallery;
                    function a(a) {
                        var t = jQuery(this);
                        if ("click" == a.type) {
                            if (t.hasClass("menu-item")) {
                                var i = t.parent().children().index(t);
                                e.goto_item(i)
                            }
                            if (t.hasClass("menu-btn-like"))
                                return t.parent().parent().attr("data-playerid") && s.ajax_submit_like.bind(e)(1, t.parent().parent().attr("data-playerid"), {
                                    refferer: t
                                }),
                                !1;
                            if (t.hasClass("menu-facebook-share"))
                                return t.parent().parent().attr("data-playerid") && s.ajax_submit_like.bind(e)(1, t.parent().parent().attr("data-playerid"), {
                                    refferer: t
                                }),
                                !1
                        }
                    }
                    "on" == e.initOptions.disable_menu_navigation && this._navMain.hide(),
                    isNaN(Number(e.initOptions.design_menu_height)) || this._navMain.css({
                        height: n(e.initOptions.design_menu_height)
                    }),
                    (i.is_ios() || i.is_android()) && this._navMain.css({
                        overflow: "auto"
                    }),
                    "closed" == e.initOptions.design_menu_state ? (this._navMain.css({
                        height: 0
                    }),
                    this.cgallery.removeClass("menu-opened"),
                    this.cgallery.addClass("menu-closed")) : (this.cgallery.addClass("menu-opened"),
                    this.cgallery.removeClass("menu-closed")),
                    this._navClipper.on("click", ".menu-btn-like,.menu-facebook-share", a),
                    this._navClipper.on("click", ".menu-item", a)
                }
                get_structZoomsoundsNav() {
                    return this.structZoomsoundsNav
                }
                set_elements(e, a, t) {
                    this._navMain = e,
                    this._navClipper = a,
                    this.cgallery = t
                }
                calculateDims() {
                    this.size_navMainClipSize = this._navMain.height(),
                    this.size_navMainTotalSize = this._navClipper.outerHeight();
                    const e = this;
                    function a(a) {
                        var t = jQuery(this)
                          , s = (a.pageX,
                        t.offset().left,
                        a.pageY - t.offset().top);
                        if (!(e.size_navMainTotalSize <= e.size_navMainClipSize)) {
                            e.size_navMainClipSize = e._navMain.outerHeight();
                            var n = 0;
                            (n = s / e.size_navMainClipSize * -(e.size_navMainTotalSize - e.size_navMainClipSize + 10 + 40) + 20) > 0 && (n = 0),
                            n < -(e.size_navMainTotalSize - e.size_navMainClipSize + 10) && (n = -(e.size_navMainTotalSize - e.size_navMainClipSize + 10)),
                            e.finish_viy = n,
                            0 == i.is_ios() && 0 == i.is_android() && "on" != e.parentGallery.initOptions.enable_easing && e._navClipper.css({
                                transform: "translateY(" + e.finish_viy + "px)"
                            })
                        }
                    }
                    "mouseover" === this.parentGallery.initOptions.navigation_method && (this.size_navMainTotalSize > this.size_navMainClipSize && this.size_navMainClipSize > 0 ? (this._navMain.unbind("mousemove", a),
                    this._navMain.bind("mousemove", a)) : this._navMain.unbind("mousemove", a))
                }
                toggle_menu_state() {
                    const e = this;
                    0 == this._navMain.height() ? (this._navMain.css({
                        height: this.parentGallery.initOptions.design_menu_height
                    }),
                    this.cgallery.removeClass("menu-closed"),
                    this.cgallery.addClass("menu-opened")) : (this._navMain.css({
                        height: 0
                    }),
                    this.cgallery.removeClass("menu-opened"),
                    this.cgallery.addClass("menu-closed")),
                    setTimeout((function() {
                        e.parentGallery.handleResize()
                    }
                    ), 400)
                }
                parseTrackData(e) {
                    var a = 0;
                    this._navMain.find(".menu-item-views").each((function() {
                        var t = $(this)
                          , i = t.html()
                          , s = /{{views_(.*?)}}/g.exec(i)
                          , n = "";
                        if (s && s[1]) {
                            for (var o in n = s[1],
                            e)
                                if (n == e[o].label || n == "ap" + e[o].label) {
                                    i = i.replace(s[0], e[o].views),
                                    a++;
                                    break
                                }
                            t.html(i)
                        }
                    }
                    )),
                    a < e.length && this._navMain.find(".menu-item-views").each((function() {
                        var e = $(this)
                          , a = e.html()
                          , t = /{{views_(.*?)}}/g.exec(a);
                        t && t[0] && (a = a.replace(t[0], 0),
                        e.html(a))
                    }
                    ))
                }
            }
        }
        ,
        349: (e,a,t)=>{
            "use strict";
            t.r(a),
            t.d(a, {
                setup_structure: ()=>c,
                setup_structure_extras: ()=>d
            });
            var i = t(586)
              , s = t.t(i, 2);
            window.dzsap_moving_playlist_item = !1,
            window.dzsap_playlist_con = null,
            window.dzsap_playlist_item_moving = null,
            window.dzsap_playlist_item_target = null;
            const n = t(560);
            class o {
                constructor(e) {
                    this.dzsapClass = e,
                    this.$playlistInner = null
                }
                init() {
                    var e = this.dzsapClass
                      , a = this;
                    function t(e) {
                        var t = jQuery(this);
                        if ("click" === e.type && t.hasClass("playlist-menu-item")) {
                            var i = t.parent().children().index(t);
                            a.playlistInner_gotoItem(i, {
                                call_from: "handle_mouse"
                            })
                        }
                        if ("mousedown" === e.type) {
                            var s = t.parent();
                            s.parent().append(s.clone().addClass("cloner"));
                            var n = s.parent().children(".cloner").eq(0);
                            dzsap_playlist_con = s.parent(),
                            dzsap_moving_playlist_item = !0,
                            dzsap_playlist_item_target = s,
                            dzsap_playlist_item_moving = n,
                            s.addClass("target-playlist-item")
                        }
                    }
                    e._apControlsRight.append('<div class="btn-footer-playlist for-hover dzstooltip-con player-but"> <div class="tooltip-indicator tooltip-indicator--btn-footer-playlist"><div class="the-icon-bg"></div> ' + n.svg_footer_playlist + '    </div><div class="dzstooltip playlist-tooltip style-default color-light-dark arrow-bottom talign-end transition-scaleup active2"><div class="dzstooltip--inner"> </div></div></div>'),
                    a.$playlistInner = e.cthis.find(".playlist-tooltip"),
                    e.cthis.on("mousedown", ".the-sort-handle", t),
                    e.cthis.on("click", ".playlist-menu-item", t),
                    setTimeout((function() {
                        a.playlistInner_setupStructureInPlayer()
                    }
                    ), 100),
                    setTimeout((function() {}
                    ), 1e3)
                }
                playlistInner_setupStructureInPlayer(e) {
                    var a = jQuery
                      , t = this
                      , i = (this.dzsapClass,
                    {
                        call_from: "default"
                    });
                    if (e && (i = a.extend(i, e)),
                    t.$playlistInner) {
                        window.dzsap_syncList_players.length ? t.$playlistInner.parent().removeClass("is-empty") : t.$playlistInner.parent().addClass("is-empty"),
                        t.$playlistInner.find(".dzstooltip--inner").html("");
                        var s = "";
                        for (var n in window.dzsap_syncList_players) {
                            var o = window.dzsap_syncList_players[n];
                            o.hasClass("number-wrapper") || o.hasClass("for-number-wrapper") || (s += '<div class="playlist-menu-item"',
                            a.each(o.get(0).attributes, (function() {
                                this.specified && this.name && "id" !== this.name && "style" !== this.name && (s += " " + this.name + "='" + this.value + "'")
                            }
                            )),
                            s += ">",
                            o.attr("data-thumb") && (s += '<div class="pi-thumb-con">',
                            s += '<div class="pi-thumb divimage" style="background-image: url(' + o.attr("data-thumb") + ')">',
                            s += "</div>",
                            s += "</div>"),
                            s += '<div class="pi-meta-con">',
                            s += '<div class="pi-the-artist">',
                            s += o.find(".the-artist").eq(0).text(),
                            s += "</div>",
                            s += '<div class="pi-the-name">',
                            s += o.find(".the-name").eq(0).text(),
                            s += "</div>",
                            s += "</div>",
                            s += '<div class="the-sort-handle">',
                            s += "&#x2195;",
                            s += "</div>",
                            s += "</div>")
                        }
                        t.$playlistInner.find(".dzstooltip--inner").append(s),
                        a(document).on("mousemove.dzsap_playlist_item", (function(e) {
                            if (window.dzsap_moving_playlist_item) {
                                var t = e.clientY;
                                t -= dzsap_playlist_con.offset().top,
                                dzsap_playlist_item_moving.css("top", t - 20),
                                dzsap_playlist_item_target.parent().children(':not(".target-playlist-item"):not(".cloner")').each((function() {
                                    var e = a(this)
                                      , i = e.offset().top - dzsap_playlist_con.offset().top;
                                    t > i && e.after(dzsap_playlist_item_target)
                                }
                                )),
                                t < 50 && dzsap_playlist_item_target.parent().prepend(dzsap_playlist_item_target)
                            }
                        }
                        )),
                        a(document).on("mouseup.dzsap_playlist_item", (function(e) {
                            window.dzsap_moving_playlist_item && (window.dzsap_moving_playlist_item = !1,
                            dzsap_playlist_item_moving.parent().children(".cloner").remove(),
                            dzsap_playlist_item_target.removeClass("target-playlist-item"),
                            dzsap_playlist_item_moving.remove(),
                            dzsap_playlist_item_moving = null,
                            dzsap_playlist_item_target = null)
                        }
                        ))
                    } else
                        console.error("no tooltip .. why, should be here?")
                }
                player_determineSyncPlayersIndex(e, a) {
                    if (this.$playlistInner) {
                        var t = this.$playlistInner.children(".dzstooltip--inner").eq(0);
                        t.children().removeClass("current-playlist-item"),
                        t.children().each((function() {
                            var t = jQuery(this);
                            console.log(t.attr("data-playerid"), a.attr("data-playerid")),
                            t.attr("data-playerid") === a.attr("data-playerid") && (t.addClass("current-playlist-item"),
                            e.playlist_inner_currNr = t.parent().children().index(t))
                        }
                        ))
                    }
                }
                playlistInner_gotoItem(e, a) {
                    var t = jQuery
                      , i = this.dzsapClass
                      , s = {
                        call_from: "default"
                    };
                    if (a && (s = t.extend(s, a)),
                    this.$playlistInner) {
                        var n = this.$playlistInner.find(".dzstooltip--inner").children().eq(e).attr("data-playerid")
                          , o = t('.audioplayer[data-playerid="' + n + '"],.audioplayer-tobe[data-playerid="' + n + '"]');
                        if (n && o.length && o.eq(0).get(0) && o.eq(0).get(0).api_play_media)
                            t('.audioplayer[data-playerid="' + n + '"]').eq(0).get(0).api_play_media({
                                called_from: "api_sync_players_prev"
                            });
                        else if (o.parent().parent().parent().hasClass("audiogallery"))
                            o.parent().parent().parent().get(0).api_goto_item(e);
                        else {
                            var r = t(".dzsap_footer");
                            r.length && r.get(0).api_change_media && r.get(0).api_change_media(o)
                        }
                        i.playlist_inner_currNr = e
                    }
                }
            }
            const r = t(560)
              , l = t(891);
            function d(e, a) {
                "skin-wave" === a.design_skin && "bigwavo" === e.skinwave_mode && (e._audioplayerInner.after(e._scrubbar),
                e.cthis.find(".feed-description") && (e.$conControls.after(e.cthis.find(".feed-description").eq(0)),
                e.$conControls.next().removeClass("feed-description").addClass("song-desc"))),
                e.radio_isGoingToUpdateSongName = i.player_radio_isNameUpdatable(e, e.radio_isGoingToUpdateSongName, ".the-songname"),
                e.radio_isGoingToUpdateArtistName = i.player_radio_isNameUpdatable(e, e.radio_isGoingToUpdateArtistName, ".the-artist"),
                "on" === a.disable_scrub && e.cthis.addClass("disable-scrubbar"),
                "on" !== a.design_animateplaypause || e.cthis.addClass("playing-animation");
                const t = `<div class="btn-embed-code-con dzstooltip-con "><div class="btn-embed-code player-but "> <div class="the-icon-bg"></div>${r.svg_embed_btn}</div><span class="dzstooltip   transition-slidein arrow-bottom talign-end style-rounded color-dark-light " style="width: 350px; "><span class="dzstooltip--inner"><span class="embed-code--text"></span></span></span></div>`;
                "" !== e.feedEmbedCode && function(e, a, t, i) {
                    var s = e.initOptions;
                    "skin-wave" === s.design_skin ? "on" === s.enable_embed_button && e._apControlsRight && (e._apControlsRight.appendOnce(i),
                    e.$embedButton = e._apControlsRight.find(".btn-embed-code-con").eq(0),
                    e.$embedButton.find(".btn-embed-code").addClass("player-but")) : "on" === s.enable_embed_button && (e._audioplayerInner.appendOnce(i),
                    e.$embedButton = e._audioplayerInner.find(".btn-embed-code-con").eq(0)),
                    e.$embedButton && e.$embedButton.find(".embed-code--text").html(e.feedEmbedCode),
                    e.cthis.on("click", ".btn-embed-code-con, .btn-embed", (function() {
                        var e = a(this);
                        t.select_all(e.find(".dzstooltip").get(0)),
                        document.execCommand("copy")
                    }
                    )),
                    e.cthis.on("click", ".copy-embed-code-btn", (function() {
                        var e = a(this);
                        t.select_all(e.parent().parent().find(".dzstooltip--inner > span").get(0)),
                        document.execCommand("copy"),
                        setTimeout((function() {
                            t.select_all(e.get(0))
                        }
                        ), 100)
                    }
                    ))
                }(e, jQuery, s, t),
                "on" === a.footer_btn_playlist && 0 === e._apControlsRight.find(".btn-footer-playlist").length && (e.classFunctionalityInnerPlaylist = new o(e),
                e.classFunctionalityInnerPlaylist.init()),
                setTimeout((function() {
                    e.cthis.find(".extra-html").length && function(e, a) {
                        e.initOptions,
                        1 === e.increment_views && (a.ajax_submit_views.bind(e)(),
                        e.increment_views = 2),
                        0 === e.index_extrahtml_toloads && e.cthis.find(".extra-html").addClass("active"),
                        setTimeout((function() {
                            e.cthis.find(".extra-html").addClass("active"),
                            0 === e.cthis.find(".float-left").length ? e.cthis.find(".extra-html").append(e.cthis.find(".extra-html-extra")) : e.cthis.find(".extra-html .float-left").append(e.cthis.find(".extra-html-extra")),
                            e.cthis.find(".extra-html-extra").children().eq(0),
                            e.cthis.find(".extra-html-extra").children().unwrap()
                        }
                        ), 2e3)
                    }(e, l)
                }
                ), 100),
                setTimeout((function() {
                    e.cthis.html().indexOf("dzsap-multisharer-but") > -1 && (e.isMultiSharer = !0,
                    e.check_multisharer())
                }
                ), 2101),
                e.cthis.find(".con-after-playpause").length && e.$conPlayPause.after(e.cthis.find(".con-after-playpause").eq(0)),
                e.cthis.find(".afterplayer").length > 0 && e.cthis.append(e.cthis.find(".afterplayer"))
            }
            const c = function(e, a) {
                var t = jQuery
                  , s = e.initOptions
                  , n = {
                    setup_inner_player: !0,
                    setup_media: !0,
                    setup_otherstructure: !0,
                    call_from: "default"
                };
                a && (n = t.extend(n, a)),
                "reconstruct" === n.call_from && (e._metaArtistCon,
                e._metaArtistCon = null,
                e.cthis.hasClass("skin-wave") && (s.design_skin = "skin-wave"),
                e.cthis.hasClass("skin-silver") && (s.design_skin = "skin-silver"));
                var o = '<div class="ap-controls';
                if ("skin-default" === s.design_skin && (o += " dzsap-color_inverse_ui_fill"),
                o += '"></div>',
                n.setup_inner_player && (e.cthis.append('<div class="audioplayer-inner"></div>'),
                e._audioplayerInner = e.cthis.children(".audioplayer-inner")),
                !n.setup_otherstructure)
                    return !1;
                e.cthis.attr("data-wrapper-image") && function(e) {
                    var a = new Image;
                    !1 === e.cthis.hasClass("zoomsounds-no-wrapper") && (a.onload = function() {
                        e.cthis.css("background-image", "url(" + this.src + ")"),
                        setTimeout((function() {
                            e.cthis.find(".zoomsounds-bg").addClass("loaded"),
                            e.cthis.hasClass("zoomsounds-wrapper-bg-bellow") && e.cthis.css("padding-top", 200)
                        }
                        ), 100)
                    }
                    ,
                    a.src = e.cthis.attr("data-wrapper-image"))
                }(e);
                var l, c = '<div class="scrubbar">', _ = "";
                c += '<div class="scrub-bg"></div><div class="scrub-buffer"></div>',
                c += '<div class="scrub-prog',
                "wave" !== s.scrubbar_type && (c += " dzsap-color_brand_bg"),
                c += '"></div><div class="scrubBox"></div><div class="scrubBox-prog"></div><div class="scrubBox-hover"></div>',
                l = '<div class="total-time">00:00</div><div class="curr-time">00:00</div>',
                e.sample_perc_start && (c += '<div class="sample-block-start" style="width: ' + 100 * e.sample_perc_start + '%"></div>'),
                e.sample_perc_end && (c += '<div class="sample-block-end" style="left: ' + 100 * e.sample_perc_end + "%; width: " + (100 - 100 * e.sample_perc_end) + '%"></div>'),
                c += "</div>",
                s.controls_external_scrubbar && (c = "");
                var p = "";
                s.settings_extrahtml_before_play_pause && (p += s.settings_extrahtml_before_play_pause),
                p += '<div class="con-playpause-con">',
                e.cthis.find(".feed-dzsap-before-playpause").length && (p += e.cthis.find(".feed-dzsap-before-playpause").eq(0).html(),
                e.cthis.find(".feed-dzsap-before-playpause").remove()),
                p += '<div class="con-playpause',
                "on" === e.keyboard_controls.show_tooltips && (p += " dzstooltip-con"),
                p += '">',
                "on" === e.keyboard_controls.show_tooltips && (p += i.dzsap_generate_keyboard_tooltip(e.keyboard_controls, "pause_play")),
                p += '<div class="playbtn player-but" aria-controls="' + e.uniqueId + '-audio"><div class="the-icon-bg"></div><div class="dzsap-play-icon">',
                p += r.playbtn_svg,
                p += "</div>",
                p += "</div>",
                p += '<div class="pausebtn player-but"',
                p += '><div class="the-icon-bg"></div><div class="pause-icon">',
                p += r.pausebtn_svg,
                p += "</div>",
                p += "</div>",
                p += "",
                p += "</div>",
                e.cthis.find(".feed-dzsap-after-playpause").length && (p += e.cthis.find(".feed-dzsap-after-playpause").eq(0).html(),
                e.cthis.find(".feed-dzsap-after-playpause").remove()),
                _ += '<div class="con-controls"><div class="the-bg"></div>' + (p += "</div>"),
                e.extraHtmlAreas.controlsLeft && (_ += e.extraHtmlAreas.controlsLeft),
                "skin-pro" === s.design_skin && (_ += '<div class="con-controls--right">',
                _ += "</div>");
                var u = '<div class="controls-volume"><div class="volumeicon"></div><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div>';
                if ("on" === s.disable_volume && (u = ""),
                "skin-default" !== s.design_skin && "skin-wave" !== s.design_skin || (_ += '<div class="ap-controls-right">',
                "on" !== s.disable_volume && (_ += '<div class="controls-volume"><div class="volumeicon"></div><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div>'),
                _ += "</div>"),
                _ += "</div>",
                "skin-wave" === s.design_skin && "small" === e.skinwave_mode)
                    _ = '<div class="the-bg"></div><div class="ap-controls-left">' + p + "</div>" + c + '<div class="ap-controls-right">' + u + '<div class="extrahtml-in-float-right for-skin-wave-small">' + e.extraHtmlAreas.controlsRight + "</div></div>";
                else if ("skin-aria" === s.design_skin || "skin-silver" === s.design_skin || "skin-redlights" === s.design_skin || "skin-steel" === s.design_skin) {
                    let a = r.playbtn_svg
                      , t = r.pausebtn_svg;
                    "skin-steel" === s.design_skin && (a = "",
                    t = ""),
                    _ = '<div class="the-bg"></div><div class="ap-controls-left">',
                    "skin-silver" === s.design_skin ? _ += p : (_ += '<div class="con-playpause',
                    "on" === e.keyboard_controls.show_tooltips && (_ += " dzstooltip-con"),
                    _ += '">',
                    "on" === e.keyboard_controls.show_tooltips && (_ += i.dzsap_generate_keyboard_tooltip(e.keyboard_controls, "pause_play")),
                    _ += '<div class="playbtn player-but playbtn-not-skin-silver"><div class="dzsap-play-icon">' + a + '</div></div><div class="pausebtn player-but" ',
                    "on" !== s.design_animateplaypause || e.cthis.addClass("playing-animation"),
                    _ += '><div class="pause-icon">' + t + "</div></div></div>"),
                    console.log("aux_str_con_controls - ", _, e.cthis, " dzsapSvgs.playbtn_svg- ", a),
                    e.cthis.find(".feed-dzsap-after-playpause").length && (_ += e.cthis.find(".feed-dzsap-after-playpause").eq(0).html(),
                    e.cthis.find(".feed-dzsap-after-playpause").remove()),
                    _ += "</div>",
                    e.extraHtmlAreas.controlsRight && (_ += '<div class="controls-right">' + e.extraHtmlAreas.controlsRight + "</div>",
                    "skin-redlights" === s.design_skin && s.parentgallery && s.parentgallery.get(0).api_skin_redlights_give_controls_right_to_all && s.parentgallery.get(0).api_skin_redlights_give_controls_right_to_all()),
                    _ += '<div class="ap-controls-right">',
                    "skin-silver" === s.design_skin ? (_ += '<div class="controls-volume controls-volume-vertical"><div class="volumeicon"></div><div class="volume-holder"><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div></div>',
                    _ += "</div>" + c) : ("skin-redlights" === s.design_skin && "on" != s.disable_volume && (_ += '<div class="controls-volume"><div class="volumeicon"></div><div class="volume_static"></div><div class="volume_active"></div><div class="volume_cut"></div></div>'),
                    _ += c,
                    "on" != s.disable_timer && (_ += '<div class="total-time">00:00</div>')),
                    "skin-silver" === s.design_skin || (_ += "</div>")
                }
                if (n.setup_media && (e._audioplayerInner.append('<div class="the-media"></div>'),
                e.$theMedia = e._audioplayerInner.children(".the-media").eq(0)),
                "skin-customcontrols" !== s.design_skin && e._audioplayerInner.append(o),
                e._apControls = e._audioplayerInner.children(".ap-controls").eq(0),
                e._apControls.append(_),
                e.cthis.hasClass("skin-wave-mode-alternate") ? 0 === e.cthis.find(".scrubbar").length && e._apControls.append(c) : 0 === e.cthis.find(".scrubbar").length && e._apControls.prepend(c),
                e._apControlsRight = null,
                e._apControls.find(".ap-controls-right").length > 0 && (e._apControlsRight = e.cthis.find(".ap-controls-right")),
                e._apControls.find(".ap-controls-left").length > 0 && (e._apControlsLeft = e._apControls.find(".ap-controls-left").eq(0)),
                "skin-pro" === s.design_skin && (e._apControlsRight = e.cthis.find(".con-controls--right").eq(0)),
                e.cthis.find(".feed-dzsap-after-con-controls").length && (e._apControls.append(e.cthis.find(".feed-dzsap-after-con-controls").eq(0).html()),
                e.cthis.find(".feed-dzsap-after-con-controls").remove()),
                s.controls_external_scrubbar ? e._scrubbar = t(s.controls_external_scrubbar).children(".scrubbar").eq(0) : e._scrubbar = e._apControls.find(".scrubbar").eq(0),
                e.$$scrubbProg = e._scrubbar.find(".scrub-prog").get(0),
                e.$conControls = e._apControls.children(".con-controls"),
                e.$conPlayPause = e.cthis.find(".con-playpause").eq(0),
                e._conPlayPauseCon = e.cthis.find(".con-playpause-con").eq(0),
                e.$controlsVolume = e.cthis.find(".controls-volume").eq(0),
                i.player_constructArtistAndSongCon.bind(e)(n),
                e._scrubbar.addClass("scrubbar-inited"),
                "wave" === s.scrubbar_type && "on" != s.disable_timer && "" === s.controls_external_scrubbar && e._scrubbar.append(l),
                "skin-wave" != s.design_skin && "on" != s.disable_timer && e._apControls.append(l),
                "on" != s.disable_timer && (e.$currTime = e.cthis.find(".curr-time").eq(0),
                e.$totalTime = e.cthis.find(".total-time").eq(0),
                "skin-steel" === s.design_skin && 0 === e.$currTime.length && (e.$totalTime.before('<div class="curr-time">00:00</div> <span class="separator-slash">/</span> '),
                e.$currTime = e.$totalTime.prev().prev())),
                Number(s.sample_time_total) > 0 && (e.timeTotal = Number(s.sample_time_total),
                e.$totalTime && e.$totalTime.html(i.formatTime(e.time_total_for_visual))),
                e.struct_generate_thumb(),
                "skin-wave" === s.design_skin && s.parentgallery && void 0 !== s.parentgallery && "on" === s.design_menu_show_player_state_button && ("skin-wave" === s.design_skin ? e._apControlsRight ? e._apControlsRight.appendOnce('<div class="btn-menu-state player-but"> <div class="the-icon-bg"></div> ' + r.svg_menu_state + "    </div></div>") : console.log("selfClass._apControlsRight not found ? ") : e._audioplayerInner.appendOnce('<div class="btn-menu-state"></div>')),
                "on" === s.skinwave_place_metaartist_after_volume && e.$controlsVolume.before(e._metaArtistCon),
                "on" === s.skinwave_place_thumb_after_volume && e.$controlsVolume.before(e.cthis.find(".the-thumb-con")),
                "skin-wave" === s.design_skin && (e.setup_structure_scrub(),
                "on" === s.skinwave_timer_static && (e.$currTime && e.$currTime.addClass("static"),
                e.$totalTime && e.$totalTime.addClass("static")),
                e._apControls.css({}),
                "canvas" === s.skinwave_wave_mode && setTimeout((function() {
                    e.cthis.addClass("scrubbar-loaded"),
                    e._scrubbar.parent().addClass("scrubbar-loaded")
                }
                ), 700)),
                e.check_multisharer(),
                e.cthis.hasClass("skin-minimal") && (e.cthis.find(".the-bg").before('<div class="skin-minimal-bg skin-minimal--outer-bg"></div><div class="skin-minimal-bg skin-minimal--inner-bg-under dzsap-color_brand_bg"></div><div class="skin-minimal-bg skin-minimal--inner-bg"></div><div class="skin-minimal-bg skin-minimal--inner-inner-bg dzsap-color_brand_bg"></div>'),
                e.cthis.find(".the-bg").append('<canvas width="100" height="100" class="playbtn-canvas"/>'),
                e.skin_minimal_canvasplay = e.cthis.find(".playbtn-canvas").eq(0).get(0),
                e.$conPlayPause && (e.$conPlayPause.children(".playbtn").append(r.playbtn_svg),
                e.$conPlayPause.children(".pausebtn").append(r.pausebtn_svg)),
                setTimeout((function() {
                    e.isCanvasFirstDrawn = !1
                }
                ), 200)),
                e.cthis.hasClass("skin-minion") && e.cthis.find(".menu-description").length > 0 && (e.$conPlayPause.addClass("with-tooltip"),
                e.$conPlayPause.prepend('<span class="dzstooltip" style="left:-7px;">' + e.cthis.find(".menu-description").html() + "</span>"),
                e.$conPlayPause.children("span").eq(0).css("width", e.$conPlayPause.children("span").eq(0).textWidth() + 10)),
                "default" === s.player_navigation && (s.parentgallery && (s.player_navigation = "on"),
                s.parentgallery && s.parentgallery.hasClass("mode-showall") && (s.player_navigation = "off")),
                "on" === s.disable_player_navigation && (s.player_navigation = "off"),
                "default" === s.player_navigation && (s.player_navigation = "off"),
                "on" === s.player_navigation) {
                    var m = '<div class="prev-btn player-but"><div class="the-icon-bg"></div>' + r.svg_prev_btn + " </div>"
                      , h = '<div class="next-btn player-but"><div class="the-icon-bg"></div>' + r.svg_next_btn + "  </div>"
                      , f = m + h;
                    "skin-wave" === s.design_skin && "small" === e.skinwave_mode || "skin-aria" === s.design_skin ? (e.$conPlayPause.before(m),
                    e.$conPlayPause.after(h)) : "skin-wave" === s.design_skin ? "on" === s.player_navigation && (e._conPlayPauseCon.prependOnce(m, ".prev-btn"),
                    e._conPlayPauseCon.appendOnce(h, ".next-btn")) : "skin-steel" === s.design_skin ? (e._apControlsLeft.prependOnce(m, ".prev-btn"),
                    e._apControlsLeft.children(".the-thumb-con").length > 0 ? e._apControlsLeft.children(".the-thumb-con").eq(0).length > 0 && !1 === e._apControlsLeft.children(".the-thumb-con").eq(0).prev().hasClass("next-btn") && e._apControlsLeft.children(".the-thumb-con").eq(0).before(h) : e._apControlsLeft.appendOnce(h, ".next-btn")) : e._audioplayerInner.appendOnce(f, ".prev-btn")
                }
                if (e.cthis.hasClass("skinvariation-wave-bigtitles") && e.cthis.find(".controls-volume").length && 0 === e._metaArtistCon.find(".controls-volume").length && (e._metaArtistCon.append("<br>"),
                e._metaArtistCon.append(e.cthis.find(".controls-volume"))),
                e.cthis.hasClass("skinvariation-wave-righter") && (e._apControls.appendOnce('<div class="playbuttons-con"></div>'),
                e.cthis.find(".playbuttons-con").eq(0).append(e.cthis.find(".con-playpause-con"))),
                "skin-pro" === s.design_skin && (e._apControlsRight.append(e.$currTime),
                e._apControlsRight.append(e.$totalTime)),
                "skin-silver" === s.design_skin && (e._scrubbar.after(e._apControlsRight),
                e._apControlsLeft.prepend(e._metaArtistCon),
                e._apControlsLeft.append(e.$currTime),
                e._apControlsRight.append(e.$totalTime)),
                "skin-redlights" === s.design_skin && (e._apControlsRight.append('<div class="ap-controls-right--top"></div>'),
                e._apControlsRight.append('<div class="ap-controls-right--bottom"></div>'),
                e._apControlsRight.find(".ap-controls-right--top").append(e._apControlsRight.find(".meta-artist-con")),
                e._apControlsRight.find(".ap-controls-right--top").append(e._apControlsRight.find(".controls-volume")),
                e._apControlsRight.find(".ap-controls-right--bottom").append(e._apControlsRight.find(".scrubbar"))),
                "reconstruct" === n.call_from && e.cthis.hasClass("skin-silver") && e._apControlsLeft.append(e.cthis.find(".con-playpause")),
                e.isMultiSharer && e.check_multisharer(),
                e.setup_structure_sanitizers(),
                d(e, s),
                e.cthis.addClass("structure-setuped"),
                e.extraHtmlAreas.afterArtist && e._metaArtistCon.find(".the-artist").append(e.extraHtmlAreas.afterArtist),
                "" !== e.extraHtmlAreas.bottom && e.cthis.append('<div class="extra-html">' + e.extraHtmlAreas.bottom + "</div>"),
                e.extraHtmlAreas.controlsRight) {
                    var g = "";
                    String(e.extraHtmlAreas.controlsRight).indexOf("dzsap-multisharer-but") > -1 && (e.isMultiSharer = !0),
                    "skin-wave" === s.design_skin && "small" === e.skinwave_mode || (g += '<div class="extrahtml-in-float-right from-setup_structure from-js-setup_structure">' + e.extraHtmlAreas.controlsRight + "</div>"),
                    g && ("skin-wave" !== s.design_skin && "skin-default" !== s.design_skin || e.cthis.find(".ap-controls-right").eq(0).append(g),
                    "skin-pro" === s.design_skin && e.cthis.find(".con-controls--right").eq(0).append(g))
                }
            }
        }
        ,
        348: (e,a,t)=>{
            "use strict";
            t.r(a),
            t.d(a, {
                wave_mode_canvas_try_to_get_pcm: ()=>n,
                scrubModeWave__checkIfWeShouldTryToGetPcm: ()=>o,
                view_drawCanvases: ()=>r,
                scrubModeWave__view_transitionIn: ()=>l,
                scrubModeWave__initGenerateWaveData: ()=>d,
                scrubModeWave__generateWaveData: ()=>c,
                scrubModeWave__sendPcm: ()=>_,
                draw_canvas: ()=>p
            });
            var i = t(586)
              , s = t(567);
            window.dzsap_wavesurfer_load_attempt = 0;
            const n = function(e, a) {
                var t = {}
                  , i = jQuery;
                a && (t = i.extend(t, a));
                var s = this
                  , n = e.initOptions;
                if ("fake" === e.src_real_mp3)
                    return !1;
                try {
                    (async function() {
                        return new Promise(((a,t)=>{
                            !function(a, t) {
                                if (e.cthis.attr("data-pcm"))
                                    ;
                                else {
                                    var r = {
                                        action: "dzsap_get_pcm",
                                        postdata: "1",
                                        source: e.cthis.attr("data-source"),
                                        playerid: e.identifier_pcm
                                    };
                                    e.urlToAjaxHandler && i.ajax({
                                        type: "POST",
                                        url: e.urlToAjaxHandler,
                                        data: r,
                                        success: function(t) {
                                            if (t)
                                                "0" != t && t.indexOf(",") > -1 ? (t = (t = t.replace(" data-pcm='", "")).replace("'", ""),
                                                e.cthis.attr("data-pcm", t),
                                                e.isRealPcm = !0,
                                                a({
                                                    resolve_type: "success"
                                                })) : a({
                                                    resolve_type: "error",
                                                    error_type: "empty_response"
                                                });
                                            else if ("on" === e.initOptions.cue)
                                                a({
                                                    resolve_type: "error",
                                                    error_type: "empty_response"
                                                });
                                            else if (e.isPcmPromisingToGenerateOnMetaLoad = !0,
                                            "on" === n.pcm_data_try_to_generate_wait_for_real_pcm) {
                                                for (var i = [], r = 0; r < 200; r++)
                                                    i[r] = Number(Math.random()).toFixed(2);
                                                i = JSON.stringify(i),
                                                "wave" === e.initOptions.scrubbar_type && s.scrubModeWave__view_transitionIn(e, i),
                                                e.isRealPcm = !1,
                                                o(e),
                                                a({
                                                    resolve_type: "success"
                                                })
                                            }
                                        },
                                        error: function(e) {
                                            a({
                                                resolve_type: "error"
                                            })
                                        }
                                    })
                                }
                            }(a)
                        }
                        ))
                    }
                    )().then((a=>{
                        "success" == a.resolve_type && setTimeout((function() {
                            e.cthis.addClass("scrubbar-loaded"),
                            e.calculate_dims_time(),
                            setTimeout((function() {}
                            ), 100)
                        }
                        ), 100),
                        "error" == a.resolve_type && (e.isPcmTryingToGenerate = !0,
                        d(e, {
                            call_from: "pcm_data_try_to_generate .. no get call success"
                        }))
                    }
                    ))
                } catch (e) {
                    console.log("error - ", e)
                }
            };
            function o(e, a) {
                let t = !1;
                if (e.isPcmTryingToGenerate)
                    return !1;
                e.isPcmPromisingToGenerateOnMetaLoad && (e.isPcmTryingToGenerate = !0,
                t = !0),
                e.cthis.attr("data-pcm") || e.urlToAjaxHandler || (e.isPcmTryingToGenerate = !0,
                t = !0),
                t && d(e, {
                    call_from: "pcm_data_try_to_generate .. no data-pcm"
                })
            }
            function r(e, a, t) {
                var i = e.initOptions;
                p(e._scrubbarbg_canvas.get(0), a, "#" + i.design_wave_color_bg, {
                    call_from: t + "_bg",
                    selfClass: e,
                    skinwave_wave_mode_canvas_waves_number: parseInt(i.skinwave_wave_mode_canvas_waves_number, 10),
                    skinwave_wave_mode_canvas_waves_padding: parseInt(i.skinwave_wave_mode_canvas_waves_padding, 10)
                }),
                p(e._scrubbarprog_canvas.get(0), a, "#" + i.design_wave_color_progress, {
                    call_from: t + "_prog",
                    selfClass: e,
                    skinwave_wave_mode_canvas_waves_number: parseInt(i.skinwave_wave_mode_canvas_waves_number, 10),
                    skinwave_wave_mode_canvas_waves_padding: parseInt(i.skinwave_wave_mode_canvas_waves_padding, 10)
                }, !0)
            }
            function l(e, a) {
                e._scrubbar.find(".scrub-bg-img,.scrub-prog-img").removeClass("transitioning-in"),
                e._scrubbar.find(".scrub-bg-img,.scrub-prog-img").addClass("transitioning-out"),
                i.scrubbar_modeWave_setupCanvas({
                    prepare_for_transition_in: !0
                }, e),
                r(e, a, "canvas_generate_wave_data_animate_pcm"),
                setTimeout((()=>{
                    i.scrubbar_modeWave_clearObsoleteCanvas(e)
                }
                ), 300),
                e.isRealPcm = !0,
                e.scrubbar_reveal()
            }
            function d(e, a) {
                var t = jQuery
                  , i = e.initOptions
                  , n = {
                    call_from: "default",
                    call_attempt: 0
                };
                return a && (n = t.extend(n, a)),
                !e.isRealPcm && "fake" != e.src_real_mp3 && (e.isPcmTryingToGenerate = !0,
                e.isPcmTryingToGenerate ? void ("youtube" !== e.audioType && (window.WaveSurfer ? c(e, {
                    call_from: "wavesurfer already loaded"
                }) : ("on" == i.pcm_notice && (e.cthis.addClass("errored-out"),
                e.cthis.append('<div class="feedback-text pcm-notice">please wait while pcm data is generated.. </div>')),
                async function(e, a) {
                    var t = document.getElementsByTagName("script")
                      , i = "";
                    for (var n in t)
                        if (t[n] && t[n].src && t[n].src.indexOf("audioplayer.js") > -1)
                            break;
                    for (var o = String(t[n].src).split("/"), r = 0; r < o.length - 1; r++)
                        i += o[r] + "/";
                    var l = s.O.URL_WAVESURFER;
                    i && (l = i + "wavesurfer.js");
                    var d = jQuery;
                    function _(a, t) {
                        window.dzsap_wavesurfer_load_attempt++,
                        window.dzsap_wavesurfer_load_attempt > 2 && (l = s.O.URL_WAVESURFER),
                        window.dzsap_wavesurfer_load_attempt < 6 && d.ajax({
                            url: l,
                            dataType: "script",
                            success: function(t) {
                                c(e, {
                                    call_from: "load_script",
                                    wavesurfer_url: l
                                }),
                                a("done")
                            },
                            error: function(e) {
                                _(a, t)
                            }
                        }),
                        window.dzsap_wavesurfer_load_attempt > 6 && t("rejected")
                    }
                    let p = new Promise(((e,a)=>{
                        _(e, a)
                    }
                    ));
                    return await p
                }(e).then((e=>console.log("[wavesurfer] loading done", e)))))) : (setTimeout((function() {
                    n.call_attempt++,
                    n.call_attempt < 10 && (d(n),
                    console.log("%c [dzsap] trying to regenerate ", s.O.DEBUG_STYLE_1))
                }
                ), 1e3),
                !1))
            }
            function c(e, a) {
                var t = jQuery
                  , n = e.initOptions
                  , o = {
                    call_from: "default"
                };
                if (a && t.extend(o, a),
                "fake" === e.src_real_mp3)
                    return !1;
                (async function() {
                    function a(t, r) {
                        if (window.dzsap_generating_pcm)
                            return setTimeout((function() {
                                a(t, r)
                            }
                            ), 1e3),
                            !1;
                        window.dzsap_generating_pcm = !0;
                        var l = "wavesurfer_" + Math.ceil(1e4 * Math.random());
                        e.identifier_pcm && (l = "wavesurfer_" + e.identifier_pcm),
                        e.cthis.append('<div id="' + l + '" class="hidden"></div>');
                        var d = WaveSurfer.create({
                            container: "#" + l,
                            normalize: !0,
                            pixelRatio: 1
                        });
                        if (0 !== String(e.cthis.attr("data-source")).indexOf("https://soundcloud.com") && "fake" !== e.cthis.attr("data-source")) {
                            String(e.cthis.attr("data-source")).indexOf("https://api.soundcloud.com");
                            try {
                                d.load(e.src_real_mp3)
                            } catch (e) {
                                console.log("[wavesurfer] WAVE SURFER NO LOAD")
                            }
                            d.on("ready", (function() {
                                console.log("[dzsap] [wavesurfer] generating wave data for ", e.identifier_pcm);
                                var a = 100;
                                e.$mediaNode_ && e.$mediaNode_.duration && e.$mediaNode_.duration > 1e3 && (a = 100);
                                var s = []
                                  , r = "";
                                if (d && d.exportPCM) {
                                    r = d.exportPCM(n.wavesurfer_pcm_length, a, !0);
                                    let e = !1;
                                    try {
                                        s = JSON.parse(r);
                                        for (let a in s)
                                            null !== s[a] && 0 !== s[a] && "0" !== s[a] && (e = !0)
                                    } catch (a) {
                                        e = !1
                                    }
                                    e || (s = d.backend.getPeaks(o.wavesurfer_pcm_length, 0, o.wavesurfer_pcm_length));
                                    for (let e in s)
                                        null !== s[e] && 0 !== s[e] && "0" !== s[e] && (s[e] = Math.abs(Number(Number(s[e]).toFixed(2))))
                                } else
                                    s = i.generateFakeArrayForPcm();
                                r = JSON.stringify(s),
                                t({
                                    resolve_type: "success",
                                    pcm_data: r
                                })
                            }
                            )),
                            d.on("error", (function(e, a) {
                                r({
                                    error_type: "wavesurfer_error",
                                    error_message: e
                                })
                            }
                            )),
                            setTimeout((()=>{
                                r({
                                    error_type: "wavesurfer_timeout",
                                    error_message: "timeout"
                                })
                            }
                            ), s.O.WAVESURFER_MAX_TIMEOUT)
                        }
                    }
                    return new Promise(((e,t)=>{
                        a(e, t)
                    }
                    ))
                }
                )().then((a=>{
                    _(e, a.pcm_data),
                    l(e, a.pcm_data)
                }
                )).catch((a=>{
                    for (var t = [], i = 0; i < 200; i++)
                        t[i] = Math.abs(Number(Math.random()).toFixed(3));
                    t = JSON.stringify(t),
                    console.log("%c [dzsap] [wave] error while generating pcm - ", s.O.DEBUG_STYLE_PLAY_FUNCTIONS, a, a.error_message),
                    _(e, t),
                    l(e, t)
                }
                ))
            }
            function _(e, a) {
                var t = jQuery;
                try {
                    a.constructor === Array && (a = String("[" + String(a) + "]")),
                    a = JSON.stringify(JSON.parse(String(a)).map(Math.abs))
                } catch (e) {
                    console.log("%c [dzsap] [wave] error while generating pcm - ", s.O.DEBUG_STYLE_PLAY_FUNCTIONS, e, "ar_str - ", a, typeof a)
                }
                e.cthis.attr("data-pcm", a),
                e.$feed_fakeButton && e.$feed_fakeButton.attr && e.$feed_fakeButton.attr("data-pcm", a),
                e._sourcePlayer && e._sourcePlayer.attr && e._sourcePlayer.attr("data-pcm", a),
                e.cthis.find(".pcm-notice").fadeOut("fast"),
                e.cthis.removeClass("errored-out"),
                e.identifier_pcm || (e.identifier_pcm = e.cthis.attr("data-source"),
                e.original_real_mp3 && (e.identifier_pcm = e.original_real_mp3));
                const i = {
                    action: "dzsap_submit_pcm",
                    postdata: a,
                    playerid: e.identifier_pcm,
                    source: e.cthis.attr("data-source")
                };
                window.dzsap_generating_pcm = !1,
                e.urlToAjaxHandler && t.ajax({
                    type: "POST",
                    url: e.urlToAjaxHandler,
                    data: i,
                    success: function(e) {}
                })
            }
            function p(e, a, t, s, n) {
                var o = {
                    call_from: "default",
                    is_sample: !1,
                    selfClass: null,
                    sample_time_start: 0,
                    sample_time_end: 0,
                    sample_time_total: 0,
                    skinwave_wave_mode_canvas_waves_number: 2,
                    skinwave_wave_mode_canvas_waves_padding: 1
                }
                  , r = jQuery;
                s && (o = Object.assign(o, s)),
                t = i.sanitizeToHexColor(t);
                var l = r(e)
                  , d = e;
                let c = !1;
                var {selfClass: _, skinwave_wave_mode_canvas_waves_number: p, skinwave_wave_mode_canvas_waves_padding: u} = o;
                if (isNaN(Number(p)) && (p = 2),
                isNaN(Number(u)) && (u = 1 !== p ? 1 : 0),
                _)
                    var m = _.initOptions;
                if (!l || !l.get(0))
                    return !1;
                var h = l.get(0).getContext("2d")
                  , f = a
                  , g = [];
                if (_ && _._scrubbar && _._scrubbarprog_canvas && (_._scrubbarbg_canvas.width(_._scrubbar.width()),
                _._scrubbarprog_canvas.width(_._scrubbar.width()),
                e.width = _._scrubbar.width(),
                e.height = _._scrubbar.height()),
                h.imageSmoothingEnabled = !1,
                h.imageSmoothing = !1,
                h.imageSmoothingQuality = "high",
                h.webkitImageSmoothing = !1,
                !a)
                    return setTimeout((function() {}
                    ), 1e3),
                    !1;
                if ("object" == typeof f)
                    g = f;
                else
                    try {
                        g = JSON.parse(f)
                    } catch (e) {}
                var v = 0
                  , y = 0;
                for (v = 0; v < g.length; v++)
                    g[v] > y && (y = g[v]);
                var b, w, k = [];
                for (v = 0; v < g.length; v++)
                    k[v] = parseFloat(Math.abs(g[v]) / Number(y));
                g = k;
                var C = null;
                _ && (d.width = _._scrubbar.width()),
                b = d.width,
                w = d.height;
                var T = p
                  , x = u;
                1 == T && (T = b / T),
                2 == T && (T = b / 2),
                3 == T && (T = b / 3);
                var z = parseFloat(m.skinwave_wave_mode_canvas_reflection_size);
                b / T < 1 && (T = Math.ceil(T / 3));
                var P = Math.ceil(b / T)
                  , $ = 1 - z;
                0 == P && (P = 1,
                x = 0),
                1 == P && (x /= 2);
                var S = 0
                  , O = null
                  , M = t;
                M = M.replace("#", "");
                var N = [];
                M.indexOf(",") > -1 && (N = M.split(","));
                var q = ""
                  , I = "";
                "spectrum" == o.call_from && (q = (q = m.design_wave_color_progress).replace("#", ""),
                I = [],
                q.indexOf(",") > -1 && (I = q.split(",")));
                var A = !1;
                function j(e=!1) {
                    for (v = 0; v < T; v++) {
                        c = !1,
                        h.save(),
                        O = Math.ceil(v * (g.length / T)),
                        v < T / 5 && g[O] < .1 && (g[O] = .1),
                        g.length > 2.5 * T && v > 0 && v < g.length - 1 && (g[O] = Math.abs(g[O] + g[O - 1] + g[O + 1]) / 3);
                        let l = $;
                        e && (l = z);
                        var a = Math.abs(g[O] * w * l);
                        "on" == m.skinwave_wave_mode_canvas_normalize && (isNaN(S) && (S = 0),
                        a = a / 1.5 + S / 2.5),
                        S = a,
                        h.lineWidth = 0,
                        a = Math.floor(a);
                        var s = e ? w * $ : Math.ceil(w * l - a);
                        if (h.beginPath(),
                        h.rect(v * P, s, P - x, a),
                        "spectrum" == o.call_from && (A = v / T < _.timeCurrent / _.timeTotal),
                        _.isSample && (c = (r = v) / T < _.timeModel.sampleTimeStart / _.timeModel.sampleTimeTotal || r / T > _.timeModel.sampleTimeEnd / _.timeModel.sampleTimeTotal),
                        A) {
                            if (e && "reflecto" !== m.skinwave_wave_mode_canvas_mode ? h.fillStyle = i.hexToRgb(q, .25) : h.fillStyle = c ? i.hexToRgb(q, .5) : "#" + q,
                            I.length) {
                                const a = e && "reflecto" !== m.skinwave_wave_mode_canvas_mode ? i.hexToRgb("#" + I[0], .25) : "#" + I[0]
                                  , t = e && "reflecto" !== m.skinwave_wave_mode_canvas_mode ? i.hexToRgb("#" + I[1], .25) : "#" + I[1];
                                (C = h.createLinearGradient(0, 0, 0, w)).addColorStop(0, a),
                                C.addColorStop(1, t),
                                h.fillStyle = C
                            }
                        } else if (e && "reflecto" !== m.skinwave_wave_mode_canvas_mode ? h.fillStyle = i.hexToRgb(t, .25) : h.fillStyle = c ? i.hexToRgb(t, .5) : "" + t,
                        N.length) {
                            const a = e && "reflecto" !== m.skinwave_wave_mode_canvas_mode ? i.hexToRgb(i.utils_sanitizeToColor(N[0]), .25) : "" + i.utils_sanitizeToColor(N[0])
                              , t = e && "reflecto" !== m.skinwave_wave_mode_canvas_mode ? i.hexToRgb(i.utils_sanitizeToColor(N[1]), .25) : "" + i.utils_sanitizeToColor(N[1]);
                            (C = h.createLinearGradient(0, 0, 0, w)).addColorStop(0, a),
                            C.addColorStop(1, t),
                            h.fillStyle = C
                        }
                        c && n || (h.fill(),
                        h.closePath()),
                        h.restore()
                    }
                    var r
                }
                h.clearRect(0, 0, b, w),
                j(),
                j(!0),
                setTimeout((function() {
                    _.scrubbar_reveal()
                }
                ), 100)
            }
        }
    }
      , __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        if (__webpack_module_cache__[e])
            return __webpack_module_cache__[e].exports;
        var a = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e](a, a.exports, __webpack_require__),
        a.exports
    }
    __webpack_require__.t = function(e, a) {
        if (1 & a && (e = this(e)),
        8 & a)
            return e;
        if (4 & a && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        __webpack_require__.r(t);
        var i = {};
        if (2 & a && "object" == typeof e && e)
            for (const a in e)
                i[a] = ()=>e[a];
        return i.default = ()=>e,
        __webpack_require__.d(t, i),
        t
    }
    ,
    __webpack_require__.d = (e,a)=>{
        for (var t in a)
            __webpack_require__.o(a, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: a[t]
            })
    }
    ,
    __webpack_require__.o = (e,a)=>Object.prototype.hasOwnProperty.call(e, a),
    __webpack_require__.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        "use strict";
        var e = __webpack_require__(586)
          , a = __webpack_require__(401)
          , t = __webpack_require__(567);
        const i = function(e, a) {
            e.$theMedia.append('<audio id="' + e.uniqueId + '-soft-watermark" class="the-watermark" preload="metadata" loop><source src="' + cthis.attr("data-soft-watermark") + '" /></audio>'),
            e.$watermarkMedia_ = e.$theMedia.find(".the-watermark").get(0),
            e.$watermarkMedia_.volume && (e.$watermarkMedia_.volume = defaultVolume * o.watermark_volume)
        }
          , s = __webpack_require__(690)
          , n = __webpack_require__(348);
        class r {
            constructor(e) {
                this.timeCurrent = 0,
                this.timeTotal = 0,
                this.sampleTimeStart = null,
                this.sampleTimeEnd = null,
                this.sampleTimeTotal = null,
                this.referenceMediaCurrentTime = 0,
                this.referenceMediaTotalTime = 0,
                this.visualCurrentTime = null,
                this.visualTotalTime = null,
                this.dzsapInstance = e,
                this.init()
            }
            init() {
                setInterval(this.check500ms, 500)
            }
            initObjects() {
                var e = this.dzsapInstance
                  , a = this;
                e.cthis.get(0).api_set_timeVisualCurrent = function(e) {
                    a.visualCurrentTime = e
                }
                ,
                e.cthis.get(0).api_get_time_total = function() {
                    return a.getVisualTotalTime()
                }
                ,
                e.cthis.get(0).api_get_time_curr = function() {
                    return a.getVisualCurrentTime()
                }
                ,
                e.cthis.get(0).api_set_timeVisualTotal = function(e) {
                    a.visualTotalTime = e,
                    a.refreshTimes()
                }
            }
            refreshTimes() {
                var e = this.dzsapInstance;
                ("selfHosted" === e.audioType || "fake" === e.audioType && e._actualPlayer) && "shoutcast" !== e.dataType && (e.$mediaNode_ && !1 === isNaN(e.$mediaNode_.duration) && (this.referenceMediaTotalTime = e.$mediaNode_.duration),
                e.$mediaNode_ && null === e._actualPlayer && (this.referenceMediaCurrentTime = e.$mediaNode_.currentTime),
                "last" === e.playFrom && e.playFrom_ready && "undefined" != typeof Storage && (localStorage["dzsap_" + e.the_player_id + "_lastpos"] = e.timeCurrent)),
                e._sourcePlayer && e._sourcePlayer.get(0) && e._sourcePlayer.get(0).api_get_time_curr && (isNaN(e._sourcePlayer.get(0).api_get_time_total()) || "" === e._sourcePlayer.get(0).api_get_time_total() || e._sourcePlayer.get(0).api_get_time_total() < 1) && e._sourcePlayer.get(0).api_set_timeVisualTotal(this.getVisualTotalTime()),
                null === e._actualPlayer && this.referenceMediaCurrentTime > -1 && (e.timeCurrent = this.referenceMediaCurrentTime),
                null === e._actualPlayer && this.referenceMediaTotalTime > -1 && (e.timeTotal = this.referenceMediaTotalTime),
                this.sampleTimeStart && (this.visualCurrentTime < e.pseudo_sample_time_start && (this.visualCurrentTime = e.pseudo_sample_time_start),
                this.sampleTimeEnd && e.timeCurrent > this.sampleTimeEnd) && (e.handle_end({
                    call_from: "time_curr>pseudo_sample_time_end"
                }),
                e.isMediaEnded = !0,
                clearTimeout(e.inter_isEnded),
                e.inter_isEnded = setTimeout((function() {
                    e.isMediaEnded = !1
                }
                ), 1e3))
            }
            processCurrentFrame() {
                var e = this.dzsapInstance;
                if (e._sourcePlayer)
                    if (e._sourcePlayer.get(0) && e._sourcePlayer.get(0).api_get_time_curr && e._sourcePlayer.get(0).api_set_timeVisualCurrent(e.timeCurrent),
                    e._sourcePlayer.get(0) && e._sourcePlayer.get(0).api_seek_to_visual) {
                        var a = e.timeCurrent;
                        0 === e.pseudo_sample_time_start && e.sample_time_start && (a -= e.sample_time_start),
                        e._sourcePlayer.get(0).api_seek_to_visual(a / e.timeTotal)
                    } else
                        console.log("warning .. no seek to visual");
                e.isSafeToChangeTrack && e.timeTotal > 1 && e.timeCurrent >= e.timeTotal - .07 && null === e._actualPlayer && (e.handle_end({
                    call_from: "selfClass.timeTotal > 0 && selfClass.timeCurrent >= selfClass.timeTotal - 0.07 ... "
                }),
                e.isMediaEnded = !0,
                clearTimeout(e.inter_isEnded),
                e.inter_isEnded = setTimeout((function() {
                    e.isMediaEnded = !1
                }
                ), 1e3))
            }
            getVisualCurrentTime() {
                var e = this.dzsapInstance;
                return null === e._actualPlayer && this.referenceMediaCurrentTime > -1 ? this.referenceMediaCurrentTime : this.visualCurrentTime ? this.visualCurrentTime : e.playFrom ? e.playFrom : 0
            }
            getVisualTotalTime() {
                var e = this.dzsapInstance;
                if (this.sampleTimeTotal)
                    return this.sampleTimeTotal;
                if (null === e._actualPlayer) {
                    if (this.referenceMediaTotalTime > -1)
                        return this.referenceMediaTotalTime
                } else {
                    if (this.visualTotalTime)
                        return this.visualTotalTime;
                    if (this.referenceMediaTotalTime > -1)
                        return this.referenceMediaTotalTime
                }
                return 0
            }
            getActualTargetTime(e) {
                return this.sampleTimeStart && (e < this.sampleTimeStart && (e = this.sampleTimeStart),
                e > this.sampleTimeEnd && (e = this.sampleTimeEnd)),
                e
            }
            getSampleTimesFromDom(e=null) {
                var a = this.dzsapInstance;
                a.sample_time_start = 0,
                a.sample_time_total = 0,
                a.sample_time_start = 0,
                a.pseudo_sample_time_end = 0,
                null === e && (e = a.cthis),
                e.attr("data-sample_time_start") && (this.sampleTimeStart = Number(e.attr("data-sample_time_start"))),
                e.attr("data-sample_time_end") && (this.sampleTimeEnd = Number(e.attr("data-sample_time_end"))),
                e.attr("data-sample_time_total") && (this.sampleTimeTotal = Number(e.attr("data-sample_time_total"))),
                a.sample_perc_start = a.sample_time_start / a.sample_time_total,
                a.sample_perc_end = a.sample_time_end / a.sample_time_total,
                this.sampleTimeTotal && this.sampleTimeStart || this.sampleTimeStart && this.sampleTimeEnd ? a.isSample = !0 : a.isSample = !1
            }
        }
        var l = __webpack_require__(891);
        const d = __webpack_require__(401)
          , c = __webpack_require__(217)
          , _ = __webpack_require__(560)
          , p = __webpack_require__(1)
          , u = __webpack_require__(690)
          , m = __webpack_require__(349)
          , h = __webpack_require__(348);
        var f = []
          , g = 20
          , v = !1
          , y = 0;
        window.loading_multi_sharer = !1,
        window.dzsap_player_interrupted_by_dzsap = null,
        window.dzsap_audio_ctx = null,
        window.dzsap__style = null,
        window.dzsap_sticktobottom_con = null,
        window.dzsap_self_options = {},
        window.dzsap_generating_pcm = !1,
        window.dzsap_box_main_con = null,
        window.dzsap_lasto = null,
        window.dzsap_syncList_players = [],
        window.dzsap_syncList_index = 0,
        window.dzsap_player_index = 0;
        class b {
            constructor(e, a, t) {
                this.argThis = e,
                this.argOptions = a,
                this.$ = t,
                this.ajax_view_submitted = "auto",
                this.increment_views = 0,
                this.the_player_id = "",
                this.currIp = "127.0.0.1",
                this.index_extrahtml_toloads = 0,
                this.starrating_alreadyrated = -1,
                this.data_source = "",
                this._actualPlayer = null,
                this.urlToAjaxHandler = null,
                this.playFrom = "",
                this._audioplayerInner = null,
                this._metaArtistCon = null,
                this._conControls = null,
                this._conPlayPauseCon = null,
                this._apControls = null,
                this._apControlsLeft = null,
                this._apControlsRight = null,
                this._commentsHolder = null,
                this.$mediaNode_ = null,
                this._scrubbar = null,
                this._scrubbarbg_canvas = null,
                this._scrubbarprog_canvas = null,
                this.$feed_fakeButton = null,
                this._sourcePlayer = null,
                this.$realVisualPlayer = null,
                this.$theMedia = null,
                this.$conPlayPause = null,
                this.$conControls = null,
                this.$$scrubbProg = null,
                this.$controlsVolume = null,
                this.$currTime = null,
                this.$totalTime = null,
                this.$watermarkMedia_ = null,
                this.$commentsWritter = null,
                this.$commentsChildren = null,
                this.$commentsSelector = null,
                this.$embedButton = null,
                this.$stickToBottomContainer = null,
                this.audioType = "normal",
                this.audioTypeSelfHosted_streamType = "",
                this.skinwave_mode = "normal",
                this.action_audio_comment = null,
                this.commentPositionPerc = 0,
                this.spectrum_audioContext = null,
                this.spectrum_audioContextBufferSource = null,
                this.spectrum_audioContext_buffer = null,
                this.spectrum_mediaElementSource = null,
                this.spectrum_analyser = null,
                this.spectrum_gainNode = null,
                this.isMultiSharer = !1,
                this.lastArray = null,
                this.last_lastArray = null,
                this.player_playing = !1,
                this.isPlayerLoaded = !1,
                this.actualDataTypeOfMedia = "audio",
                this.youtube_retryPlayTimeout = 0,
                this.lastTimeInSeconds = 0,
                this.uniqueId = "",
                this.identifier_pcm = "",
                this.isRealPcm = !1,
                this.isPcmTryingToGenerate = !1,
                this.isPcmPromisingToGenerateOnMetaLoad = !1,
                this.isPlayPromised = !1,
                this.isCanvasFirstDrawn = !1,
                this.src_real_mp3 = "",
                this.original_real_mp3 = "",
                this.skin_minimal_canvasplay = null,
                this.classMisc = null,
                this.classFunctionalityInnerPlaylist = null,
                this.feedEmbedCode = "",
                this.youtube_currentId = 0,
                this.youtube_isInited = !1,
                this.extraHtmlAreas = {
                    bottom: "",
                    afterArtist: "",
                    controlsLeft: "",
                    controlsRight: ""
                },
                this.sample_time_start = 0,
                this.sample_time_end = 0,
                this.sample_time_total = 0,
                this.pseudo_sample_time_start = 0,
                this.pseudo_sample_time_end = 0,
                this.pseudo_sample_time_total = 0,
                this.playlist_inner_currNr = 0,
                this.timeCurrent = 0,
                this.timeModel = new r(this),
                this.isSample = !1,
                this.isSafeToChangeTrack = !1,
                this.isMediaEnded = !1,
                this.isSentCacheTotalTime = !1,
                this.radio_isGoingToUpdateSongName = !1,
                this.radio_isGoingToUpdateArtistName = !1,
                this.inter_isEnded = 0,
                this.classInit()
            }
            set_sourcePlayer(e) {
                this._sourcePlayer = e
            }
            classInit() {
                var o = this.$
                  , r = this.argOptions
                  , p = o(this.argThis)
                  , b = this;
                b.cthis = p,
                b.initOptions = r;
                var w, k, C = "ap1", T = 0, x = 0, z = null, P = !1, $ = !1, S = !1, O = !1, M = !1, N = !1, q = !1, I = !1, A = !1, j = 0, R = -1, E = 1, H = 1, L = 0, F = !1, B = !1, D = !1, V = !1, Q = 0, W = !1, U = 0, G = 0, Y = 100, J = 100, X = "", Z = 1, K = null, ee = null, ae = null, te = null, ie = !0, se = 20, ne = 0, oe = 0, re = 0;
                function le() {
                    var e = parseFloat(r.skinwave_wave_mode_canvas_reflection_size);
                    e = 1 - e;
                    var a = b._scrubbar.height();
                    "skin-wave" === r.design_skin && ("small" === b.skinwave_mode && (a = 60),
                    b._commentsHolder && (0 === e ? b._commentsHolder.css("top", b._scrubbar.offset().top - p.offset().top + a * e - b._commentsHolder.height()) : (b._commentsHolder.css("top", b._scrubbar.offset().top - b._scrubbar.parent().offset().top + a * e),
                    b.$commentsWritter.css("top", b._scrubbar.offset().top - b._scrubbar.parent().offset().top + a * e))),
                    b.$currTime && b.$currTime.css("top", a * e - b.$currTime.outerHeight()),
                    b.$totalTime && b.$totalTime.css("top", a * e - b.$totalTime.outerHeight())),
                    p.attr("data-reflection-size", e)
                }
                function de(e, a) {
                    console.log("change_visual_target() - ", e);
                    var t = {};
                    a && (t = o.extend(t, a)),
                    b._sourcePlayer && b._sourcePlayer.get(0) && b._sourcePlayer.get(0).api_pause_media_visual && b._sourcePlayer.get(0).api_pause_media_visual({
                        call_from: "change_visual_target"
                    }),
                    b.set_sourcePlayer(e);
                    var i = b._sourcePlayer.get(0);
                    b.player_playing && b._sourcePlayer && i && i.api_play_media_visual && i.api_play_media_visual(),
                    i && i.api_draw_curr_time && (i.api_set_timeVisualCurrent(b.timeCurrent),
                    i.api_get_times({
                        call_from: " change visual target .. in api "
                    }),
                    i.api_check_time({
                        fire_only_once: !0
                    }),
                    i.api_draw_curr_time(),
                    i.api_draw_scrub_prog()),
                    setTimeout((function() {
                        i && i.api_draw_curr_time && (i.api_get_times(),
                        i.api_check_time({
                            fire_only_once: !0
                        }),
                        i.api_draw_curr_time(),
                        i.api_draw_scrub_prog())
                    }
                    ), 800)
                }
                function ce(e) {
                    r.design_wave_color_progress = e,
                    "canvas" === r.skinwave_wave_mode && h.view_drawCanvases(b, p.attr("data-pcm"), "canvas_change_pcm")
                }
                function _e() {
                    "normal" !== b.audioType && "detect" !== b.audioType && "audio" !== b.audioType || (b.audioType = "selfHosted")
                }
                function pe() {
                    if (S)
                        return !1;
                    ie = !0
                }
                function ue() {
                    if (S)
                        return !1;
                    b.player_playing && Je(),
                    o(window).off("resize.dzsap"),
                    p.remove(),
                    p = null,
                    S = !0
                }
                function me(a, t) {
                    var i = {
                        do_not_autoplay: !1
                    };
                    t && (i = o.extend(i, t)),
                    p.find(".playbtn").unbind("click", me),
                    p.find(".scrubbar").unbind("click", me),
                    ke(i),
                    (e.is_android() || e.is_ios()) && Ze({
                        called_from: "click_for_setup_media"
                    })
                }
                function he(e) {
                    r.parentgallery && void 0 !== r.parentgallery.get(0) && r.parentgallery.get(0).api_toggle_menu_state()
                }
                function fe() {
                    setTimeout((function() {
                        b.cthis.addClass("scrubbar-loaded")
                    }
                    ), 1e3)
                }
                function ge() {
                    if (p.attr("data-thumb")) {
                        p.addClass("has-thumb");
                        var e = "";
                        p.attr("data-thumb_link") ? e += '<a href="' + p.attr("data-thumb_link") + '"' : e += "<div",
                        e += ' class="the-thumb-con"><div class="the-thumb" style=" background-image:url(' + p.attr("data-thumb") + ')"></div>',
                        p.attr("data-thumb_link") ? e += "</a>" : e += "</div>",
                        p.children(".the-thumb-con").length && (e = p.children(".the-thumb-con").eq(0)),
                        "skin-customcontrols" !== r.design_skin && ("skin-wave" !== r.design_skin || "small" !== b.skinwave_mode && "alternate" !== b.skinwave_mode ? "skin-steel" === r.design_skin ? b._apControlsLeft.prepend(e) : b._audioplayerInner.prepend(e) : "alternate" === b.skinwave_mode ? b._audioplayerInner.prepend(e) : b._apControlsLeft.prepend(e)),
                        b._audioplayerInner.children(".the-thumb-con").eq(0)
                    } else
                        p.removeClass("has-thumb")
                }
                function ve() {
                    p.hasClass("zoomsounds-wrapper-bg-bellow") && 0 === p.find(".dzsap-wrapper-buts").length && (p.append('<div class="temp-wrapper"></div>'),
                    p.find(".temp-wrapper").append(b.extraHtmlAreas.controlsRight),
                    p.find(".temp-wrapper").children("*:not(.dzsap-wrapper-but)").remove(),
                    p.find(".temp-wrapper > .dzsap-wrapper-but").unwrap(),
                    p.find(".dzsap-wrapper-but").each((function() {
                        var e = o(this).html();
                        e = (e = e.replace("{{heart_svg}}", "\t&hearts;")).replace("{{svg_share_icon}}", _.svg_share_icon),
                        o(this).get(0) && o(this).get(0).outerHTML.indexOf("dzsap-multisharer-but") > -1 && (b.isMultiSharer = !0),
                        o(this).html(e)
                    }
                    )).wrapAll('<div class="dzsap-wrapper-buts"></div>')),
                    "skin-customcontrols" === r.design_skin && (p.html(String(p.html()).replace("{{svg_play_icon}}", _.svg_play_icon)),
                    p.html(String(p.html()).replace("{{svg_pause_icon}}", _.pausebtn_svg)))
                }
                function ye() {
                    b.cthis.find(".dzsap-multisharer-but").data("cthis", p),
                    b.cthis.data("embed_code", b.feedEmbedCode),
                    b.isMultiSharer && window.dzsap_init_multisharer()
                }
                function be(a) {
                    var t = {
                        call_from: "default"
                    };
                    a && (t = o.extend(t, a));
                    var i = [];
                    if ("on" !== r.pcm_data_try_to_generate || "on" !== r.pcm_data_try_to_generate_wait_for_real_pcm) {
                        for (var s = 0; s < 200; s++)
                            i[s] = Number(Math.random()).toFixed(2);
                        i = JSON.stringify(i),
                        p.addClass("rnd-pcm-for-now"),
                        p.attr("data-pcm", i)
                    }
                    e.scrubbar_modeWave_setupCanvas({}, b)
                }
                function we() {
                    "on" !== r.skinwave_enableSpectrum ? "canvas" === r.skinwave_wave_mode && (p.attr("data-pcm") ? (b.isRealPcm = !0,
                    e.scrubbar_modeWave_setupCanvas({}, b)) : be()) : (e.scrubbar_modeWave_setupCanvas({}, b),
                    (z = b.cthis.find(".scrub-bg-img").eq(0)).get(0).getContext("2d"))
                }
                function ke(s) {
                    var n = {
                        do_not_autoplay: !1,
                        called_from: "default",
                        newSource: ""
                    };
                    if (s && (n = o.extend(n, s)),
                    "icecast" !== b.audioType && "shoutcast" !== b.audioType || (b.audioType = "selfHosted"),
                    "off" === r.cueMedia && "auto" === b.ajax_view_submitted && (b.increment_views = 1,
                    b.ajax_view_submitted = "off"),
                    !0 === b.isPlayerLoaded)
                        return;
                    if ("youtube" === p.attr("data-original-type"))
                        return;
                    "youtube" === b.audioType && ("on" !== r.settings_exclude_from_list && f && -1 === f.indexOf(p) && f && "on" !== p.attr("data-do-not-include-in-list") && f.push(p),
                    "change_media" === n.called_from && ($ = !1,
                    b.$mediaNode_ && b.$mediaNode_.destroy && (b.$mediaNode_.destroy(),
                    console.log("DESTROYED LAST PLAYERS")),
                    b.$theMedia.children().remove()),
                    b.$theMedia.append('<div id="' + b.youtube_currentId + '"></div>'),
                    window.YT && dzsap_youtube_checkReady(b, b.youtube_currentId),
                    p.addClass("media-setuped"),
                    e.player_view_addMetaLoaded(b)),
                    n.newSource && (b.data_source = n.newSource),
                    e.is_ios() && (r.preload_method = "metadata");
                    const l = function(a, t, i) {
                        var s = ""
                          , n = ""
                          , o = a.initOptions;
                        return a.data_source && a.data_source.indexOf("get_track_source") > -1 && (o.preload_method = "none"),
                        s += "<audio",
                        s += ' id="' + a.uniqueId + '-audio"',
                        s += ' preload="' + o.preload_method + '"',
                        "on" === o.skinwave_enableSpectrum && (s += ' crossOrigin="anonymous"'),
                        e.is_ios(),
                        s += ">",
                        n = "",
                        a.data_source && (a.data_source || "icecast" === t || (a.data_source = a.cthis.attr("data-source")),
                        "fake" !== a.data_source ? (n += '<source src="' + a.data_source + '" type="audio/mpeg">',
                        void 0 !== a.cthis.attr("data-sourceogg") && (n += '<source src="' + a.cthis.attr("data-sourceogg") + '" type="audio/ogg">')) : a.cthis.addClass("meta-loaded meta-fake")),
                        {
                            stringAudioElementHtml: s + n + "</audio>",
                            stringAudioTagSource: n
                        }
                    }(b, b.audioTypeSelfHosted_streamType);
                    X = l.stringAudioElementHtml;
                    const d = l.stringAudioTagSource;
                    if ("selfHosted" !== b.audioType && "soundcloud" !== b.audioType || ("change_media" === n.called_from || "nonce generated" === n.called_from ? (b.$watermarkMedia_ && b.$watermarkMedia_.pause && b.$watermarkMedia_.pause(),
                    b.$theMedia.find(".the-watermark").remove(),
                    b.$watermarkMedia_ = null,
                    e.is_ios() || e.is_android() ? b.$mediaNode_ && (b.$theMedia.children().remove(),
                    o(b.$mediaNode_).append(d),
                    b.$mediaNode_.load && b.$mediaNode_.load()) : "nonce generated" === n.called_from && b._actualPlayer || (b.$theMedia.append(X),
                    b.$mediaNode_ = b.$theMedia.children("audio").get(0))) : (b.$theMedia.children().remove(),
                    b.$theMedia.append(X),
                    b.$mediaNode_ = b.$theMedia.children("audio").get(0),
                    (e.is_ios() || e.is_android()) && "retrieve_soundcloud_url" === n.called_from && setTimeout((function() {
                        Je()
                    }
                    ), 500)),
                    p.attr("data-soft-watermark") && i(),
                    b.$mediaNode_ && b.$mediaNode_.addEventListener && "fake" !== b.cthis.attr("data-source") && function(i, s, n, o, r) {
                        var l = 0;
                        i.$mediaNode_.addEventListener("error", (function(s) {
                            const n = this;
                            if (console.log("errored out", n, n.duration, s, s.target.error),
                            n.networkState === HTMLMediaElement.NETWORK_NO_SOURCE && !1 === e.dzsap_is_mobile() && !1 === i.cthis.hasClass(t.O.ERRORED_OUT_CLASS))
                                if (console.log("%c could not load audio source - ", "color:#ff2222;", i.cthis.attr("data-source")),
                                l < t.O.ERRORED_OUT_MAX_ATTEMPTS)
                                    setTimeout((function(e) {
                                        i.$mediaNode_ && (i.$mediaNode_.src = ""),
                                        setTimeout((function() {
                                            i.$mediaNode_ && (i.$mediaNode_.src = i.data_source,
                                            i.$mediaNode_.load())
                                        }
                                        ), 1e3)
                                    }
                                    ), 1e3, s),
                                    l++;
                                else if ("on" === i.initOptions.notice_no_media) {
                                    i.cthis.addClass(t.O.ERRORED_OUT_CLASS);
                                    var o = "error - file does not exist...";
                                    s.target.error && (o = s.target.error.message),
                                    i.cthis.append(a.setupTooltip({
                                        tooltipConClass: " feedback-tooltip-con",
                                        tooltipIndicatorText: '<span class="player-but"><span class="the-icon-bg" style="background-color: #912c2c"></span><span class="svg-icon dzsap-color-ui-inverse" >&#x2139;</span></span>',
                                        tooltipInnerHTML: "cannot load - ( " + i.data_source + " ) - error: " + o
                                    }))
                                }
                        }
                        ), !0),
                        i.$mediaNode_.addEventListener("loadedmetadata", (function(a) {
                            e.player_view_addMetaLoaded(i),
                            "change_media" === s.called_from && !1 === i.cthis.hasClass("init-loaded") && n({
                                call_from: "force_reload_change_media"
                            }),
                            ("change_media" === s.called_from || i._sourcePlayer) && o && setTimeout((()=>{
                                r(o, {
                                    call_from: "change_media"
                                })
                            }
                            ), 50),
                            i._sourcePlayer && this.duration && i._sourcePlayer.get(0).api_set_timeVisualTotal(this.duration),
                            i.view_drawCurrentTime()
                        }
                        ), !0)
                    }(b, n, Pe, E, We)),
                    b.cthis.addClass("media-setuped"),
                    "change_media" === n.called_from)
                        return !1;
                    "youtube" !== b.audioType && ("fake" === b.cthis.attr("data-source") ? (e.is_ios() || e.is_android()) && Pe(n) : e.is_ios() ? setTimeout((function() {
                        Pe(n)
                    }
                    ), 1e3) : k = setInterval((function() {
                        !function(a) {
                            var t = {
                                do_not_autoplay: !1
                            };
                            if (b._actualPlayer && e.is_ios())
                                return !1;
                            a && (t = o.extend(t, a)),
                            "youtube" === b.audioType ? Pe(t) : void 0 !== b.$mediaNode_ && b.$mediaNode_ && ("AUDIO" !== b.$mediaNode_.nodeName || "shoutcast" === r.type ? Pe(t) : e.is_safari() ? b.$mediaNode_.readyState >= 1 && (b.isPlayerLoaded,
                            Pe(t),
                            clearInterval(k),
                            r.action_audio_loaded_metadata && r.action_audio_loaded_metadata(p)) : b.$mediaNode_.readyState >= 2 && (b.isPlayerLoaded,
                            Pe(t),
                            clearInterval(k),
                            r.action_audio_loaded_metadata && r.action_audio_loaded_metadata(p)))
                        }(n)
                    }
                    ), 50),
                    "none" === r.preload_method && setTimeout((function() {
                        b.$mediaNode_ && o(b.$mediaNode_).attr("preload", "metadata")
                    }
                    ), Number(window.dzsap_player_index) + 18e3),
                    "skin-customcontrols" !== r.design_skin && "skin-customhtml" !== r.design_skin || (p.find(".custom-play-btn,.custom-pause-btn").off("click"),
                    p.find(".custom-play-btn,.custom-pause-btn").on("click", qe)),
                    r.failsafe_repair_media_element && (setTimeout((function() {
                        if (b.$theMedia.children().eq(0).get(0) && "AUDIO" === b.$theMedia.children().eq(0).get(0).nodeName)
                            return !1;
                        b.$theMedia.html(""),
                        b.$theMedia.append(X);
                        var e = b.player_playing;
                        Je(),
                        b.$mediaNode_ = b.$theMedia.children("audio").get(0),
                        e && (e = !1,
                        setTimeout((function() {
                            Ze({
                                called_from: "aux_was_playing"
                            })
                        }
                        ), 20))
                    }
                    ), r.failsafe_repair_media_element),
                    r.failsafe_repair_media_element = "")),
                    "wave" === r.scrubbar_type && "on" === r.skinwave_enableSpectrum && e.player_initSpectrumOnUserAction(b),
                    A = !0
                }
                function Ce() {
                    o(b.$mediaNode_).remove(),
                    b.$mediaNode_ = null,
                    A = !1,
                    b.isPlayerLoaded = !1
                }
                function Te() {
                    Je(),
                    b.$mediaNode_ && (b.$mediaNode_.children,
                    "audio" === r.type && (b.$mediaNode_.innerHTML = "",
                    b.$mediaNode_.load())),
                    e.is_ios() || e.is_android() || b.$theMedia && (b.$theMedia.children().remove(),
                    b.isPlayerLoaded = !1),
                    Ce()
                }
                function xe() {
                    return I || (I = !0,
                    b._scrubbar.unbind("mousemove"),
                    b._scrubbar.unbind("mouseleave"),
                    b._scrubbar.unbind("click"),
                    b._scrubbar.bind("mousemove", Fe),
                    b._scrubbar.bind("mouseleave", Fe),
                    b._scrubbar.bind("click", Fe),
                    b.$controlsVolume.on("click", ".volumeicon", Ge),
                    b.$controlsVolume.bind("mousemove", Le),
                    b.$controlsVolume.bind("mousedown", Le),
                    o(document).on("mouseup", window, Le),
                    "skin-silver" === r.design_skin && p.on("click", ".volume-holder", Le),
                    p.find(".playbtn").unbind("click"),
                    setTimeout(Ee, 300),
                    setTimeout(Ee, 2e3),
                    r.settings_trigger_resize > 0 && setInterval(Ee, r.settings_trigger_resize),
                    p.addClass("listeners-setuped")),
                    !1
                }
                function ze() {
                    return E
                }
                function Pe(a) {
                    if (p.attr("id"),
                    !p.hasClass("dzsap-loaded")) {
                        var t = {
                            do_not_autoplay: !1,
                            call_from: "init"
                        };
                        a && (t = o.extend(t, a)),
                        setTimeout((function() {
                            b.isSafeToChangeTrack = !0
                        }
                        ), 5e3),
                        void 0 !== b.$mediaNode_ && b.$mediaNode_ && "AUDIO" === b.$mediaNode_.nodeName && b.$mediaNode_.addEventListener("ended", Re),
                        clearInterval(k),
                        clearTimeout(k),
                        xe(),
                        setTimeout((function() {
                            b.$currTime && b.$currTime.outerWidth() > 0 && (j = b.$currTime.outerWidth())
                        }
                        ), 1e3),
                        (b._actualPlayer || "wave" === b.initOptions.scrubbar_type) && h.scrubModeWave__checkIfWeShouldTryToGetPcm(b, {
                            called_from: "init_loaded()"
                        }),
                        "fake" !== b.audioType && "force_reload_change_media" !== t.call_from && ("on" !== r.settings_exclude_from_list && f && -1 === f.indexOf(p) && null === b._actualPlayer && f.push(p),
                        "on" === r.type_audio_stop_buffer_on_unfocus && (p.data("type_audio_stop_buffer_on_unfocus", "on"),
                        p.get(0).api_destroy_for_rebuffer = function() {
                            "audio" === r.type && (b.playFrom = b.$mediaNode_.currentTime),
                            Te(),
                            M = !0
                        }
                        )),
                        "auto" === b.ajax_view_submitted && setTimeout((function() {
                            "auto" === b.ajax_view_submitted && (b.ajax_view_submitted = "off")
                        }
                        ), 1e3),
                        b.isPlayerLoaded = !0,
                        "fake" !== b.data_source && p.addClass("dzsap-loaded"),
                        "default" === r.default_volume && (Z = 1),
                        !1 === isNaN(Number(r.default_volume)) ? Z = Number(r.default_volume) : "last" === r.default_volume && (Z = null !== localStorage && b.the_player_id && localStorage.getItem("dzsap_last_volume_" + b.the_player_id) ? localStorage.getItem("dzsap_last_volume_" + b.the_player_id) : 1),
                        r.volume_from_gallery && (Z = r.volume_from_gallery),
                        We(Z, {
                            call_from: "from_init_loaded"
                        }),
                        b.pseudo_sample_time_start && (b.playFrom = b.pseudo_sample_time_start),
                        d.isInt(b.playFrom) && De(b.playFrom, {
                            call_from: "from_playfrom"
                        }),
                        "last" === b.playFrom && "undefined" != typeof Storage && (setTimeout((function() {
                            b.playFrom_ready = !0
                        }
                        )),
                        void 0 !== localStorage["dzsap_" + b.the_player_id + "_lastpos"] && De(localStorage["dzsap_" + b.the_player_id + "_lastpos"], {
                            call_from: "last_pos"
                        })),
                        !0 !== t.do_not_autoplay && "on" === r.autoplay && "on" === r.cueMedia && Ze({
                            called_from: "do not autoplay not true ( init_loaded() ) "
                        }),
                        b.$mediaNode_ && b.$mediaNode_.duration && e.player_view_addMetaLoaded(b),
                        _e(),
                        Ne({
                            fire_only_once: !1
                        }),
                        "off" === r.autoplay && (ie = !0),
                        p.addClass("init-loaded"),
                        setTimeout((function() {
                            b.timeModel.refreshTimes({
                                call_from: "set timeout 500"
                            }),
                            Ne({
                                fire_only_once: !0
                            }),
                            p.find(".wave-download").bind("click", Se)
                        }
                        ), 500),
                        setTimeout((function() {
                            b.timeModel.refreshTimes({
                                call_from: "set timeout 1000"
                            }),
                            Ne({
                                fire_only_once: !0
                            })
                        }
                        ), 1e3),
                        setTimeout((function() {}
                        ), 2e3),
                        0 === L && r.action_video_contor_60secs && (L = setInterval($e, 3e4))
                    }
                }
                function $e() {
                    r.action_video_contor_60secs && p.hasClass("is-playing") && r.action_video_contor_60secs(p, "")
                }
                function Se(e) {
                    var a = o(this);
                    if ("click" === e.type) {
                        if (a.hasClass("wave-download") && l.ajax_submit_download.bind(b)(),
                        a.hasClass("prev-btn") && (r.parentgallery && r.parentgallery.get(0) ? r.parentgallery.get(0).api_goto_prev() : Ae()),
                        a.hasClass("next-btn") && (r.parentgallery && r.parentgallery.get(0) ? r.parentgallery.get(0).api_goto_next() : je()),
                        a.hasClass("tooltip-indicator--btn-footer-playlist") && a.parent().find(".dzstooltip").toggleClass("active"),
                        a.hasClass("zoomsounds-btn-go-beginning")) {
                            var t = p;
                            b._actualPlayer && (t = b._actualPlayer),
                            t.get(0).api_seek_to_0()
                        }
                        a.hasClass("zoomsounds-btn-step-backward") && (t = p,
                        b._actualPlayer && (t = b._actualPlayer),
                        t.get(0).api_step_back()),
                        a.hasClass("zoomsounds-btn-step-forward") && (t = p,
                        b._actualPlayer && (t = b._actualPlayer),
                        t.get(0).api_step_forward()),
                        a.hasClass("zoomsounds-btn-slow-playback") && (t = p,
                        b._actualPlayer && (t = b._actualPlayer),
                        t.get(0).api_playback_slow()),
                        a.hasClass("zoomsounds-btn-reset") && (t = p,
                        b._actualPlayer && (t = b._actualPlayer),
                        t.get(0).api_playback_reset()),
                        a.hasClass("btn-zoomsounds-download") && l.ajax_submit_download.bind(b)(),
                        a.hasClass("dzsap-repeat-button") && (b.player_playing,
                        De(0, {
                            call_from: "repeat"
                        })),
                        a.hasClass("dzsap-loop-button") && (a.hasClass("active") ? (a.removeClass("active"),
                        N = !1) : (a.addClass("active"),
                        N = !0),
                        console.log("loop_active - ", N, p))
                    }
                    e.type,
                    "mouseenter" === e.type && ("on" === r.preview_on_hover && (Be(0),
                    Ze({
                        called_from: "preview_on_hover"
                    }),
                    console.log("mouseover")),
                    window.dzsap_mouseover = !0),
                    "mouseleave" === e.type && ("on" === r.preview_on_hover && (Be(0),
                    Je()),
                    window.dzsap_mouseover = !1)
                }
                function Oe() {
                    let a = b.timeModel.getVisualCurrentTime()
                      , t = b.timeModel.getVisualTotalTime();
                    if ("wave" === b.initOptions.scrubbar_type) {
                        if ("on" === b.initOptions.skinwave_enableSpectrum) {
                            if (!b.player_playing)
                                return !1;
                            z && (Y = z.width(),
                            J = z.height(),
                            z.get(0).width = Y,
                            z.get(0).height = J),
                            function() {
                                if ("soundcloud" === b.initOptions.type ? b.lastArray = e.generateFakeArrayForPcm() : b.spectrum_analyser && (b.lastArray = new Uint8Array(b.spectrum_analyser.frequencyBinCount),
                                b.spectrum_analyser.getByteFrequencyData(b.lastArray)),
                                b.lastArray && b.lastArray.length) {
                                    for (var a = b.lastArray.length, t = a - 1; t >= 0; t--)
                                        b.lastArray[t] = t < a / 2 ? b.lastArray[t] / 255 * J : b.lastArray[a - t] / 255 * J;
                                    if (b.last_lastarray)
                                        for (var i = 0; i < b.last_lastarray.length; i++)
                                            ne = b.last_lastarray[i],
                                            oe = b.lastArray[i] - ne,
                                            se = 3,
                                            b.lastArray[i] = Math.easeIn(1, ne, oe, se);
                                    h.draw_canvas(z.get(0), b.lastArray, "" + b.initOptions.design_wave_color_bg, {
                                        call_from: "spectrum",
                                        selfClass: b,
                                        skinwave_wave_mode_canvas_waves_number: parseInt(b.initOptions.skinwave_wave_mode_canvas_waves_number),
                                        skinwave_wave_mode_canvas_waves_padding: parseInt(b.initOptions.skinwave_wave_mode_canvas_waves_padding)
                                    }),
                                    b.lastArray && (b.last_lastarray = b.lastArray.slice())
                                }
                            }()
                        }
                        if (b.$currTime && b.$currTime.length && "on" !== b.initOptions.skinwave_timer_static) {
                            if (x < 0 && (x = 0),
                            (x = parseInt(x, 10)) < 2 && p.data("promise-to-play-footer-player-from"))
                                return !1;
                            b.$currTime.css({
                                left: x
                            }),
                            x > T - j && b.$currTime.css({
                                left: T - j
                            }),
                            x > T - 30 && T ? b.$totalTime.css({
                                opacity: 1 - (x - (T - 30)) / 30
                            }) : "1" !== b.$totalTime.css("opacity") && b.$totalTime.css({
                                opacity: ""
                            })
                        }
                    }
                    0 !== t && function(a) {
                        b.$totalTime && (b.$totalTime.html(e.formatTime(a)),
                        b.$totalTime.fadeIn("fast"))
                    }(t),
                    b.$currTime && (!1 === q && b.$currTime.html(e.formatTime(a)),
                    b.timeModel.getVisualTotalTime() && b.timeModel.getVisualTotalTime() > -1 && (b.cthis.addClass("time-total-visible"),
                    (0,
                    l.ajax_submit_total_time)(b))),
                    b.spectrum_audioContext && b.$totalTime && b.$totalTime.html(e.formatTime(t))
                }
                function Me() {
                    let e = b.timeModel.getVisualCurrentTime()
                      , a = b.timeModel.getVisualTotalTime();
                    if (x = e / a * T,
                    isNaN(x) && (x = 0),
                    x > T && (x = T),
                    e < 0 && (x = 0),
                    (0 === a || isNaN(a)) && (x = 0),
                    x < 2 && p.data("promise-to-play-footer-player-from"))
                        return !1;
                    null === b.spectrum_audioContext_buffer && b.$$scrubbProg && (b.$$scrubbProg.style.width = parseInt(x, 10) + "px")
                }
                function Ne(e) {
                    var a = {
                        fire_only_once: !1
                    };
                    if (e && (a = o.extend(a, e)),
                    S)
                        return console.log("DESTROYED"),
                        !1;
                    if (!1 === a.fire_only_once && ie)
                        return requestAnimationFrame(Ne),
                        !1;
                    if (b.timeModel.refreshTimes({
                        call_from: "checK_time"
                    }),
                    b.audioType,
                    Me(),
                    b.timeModel.processCurrentFrame(),
                    "skin-minimal" === r.design_skin && (b.player_playing || !1 === b.isCanvasFirstDrawn)) {
                        var t = b.skin_minimal_canvasplay.getContext("2d")
                          , i = b.skin_minimal_canvasplay.width
                          , s = b.skin_minimal_canvasplay.height
                          , n = i / 100
                          , l = s / 100;
                        b._actualPlayer,
                        x = 2 * Math.PI * (b.timeModel.getVisualCurrentTime() / b.timeModel.getVisualTotalTime()),
                        isNaN(x) && (x = 0),
                        x > 2 * Math.PI && (x = 2 * Math.PI),
                        t.clearRect(0, 0, i, s),
                        t.beginPath(),
                        t.arc(50 * n, 50 * l, 40 * n, 0, 2 * Math.PI, !1),
                        t.fillStyle = "rgba(0,0,0,0.1)",
                        t.fill(),
                        t.beginPath(),
                        t.arc(50 * n, 50 * l, 34 * n, 0, x, !1),
                        t.lineWidth = 10 * n,
                        t.strokeStyle = "rgba(0,0,0,0.3)",
                        t.stroke(),
                        b.isCanvasFirstDrawn = !0
                    }
                    Oe(),
                    !0 !== a.fire_only_once && requestAnimationFrame(Ne)
                }
                function qe(e) {
                    p.hasClass("prevent-bubble") && e && e.stopPropagation && (e.preventDefault(),
                    e.stopPropagation());
                    var a = o(this)
                      , t = !1;
                    if (!p.hasClass("listeners-setuped")) {
                        o(b.$mediaNode_).attr("preload", "auto"),
                        xe(),
                        Pe();
                        var i = setInterval((function() {
                            b.$mediaNode_ && b.$mediaNode_.duration && !1 === isNaN(b.$mediaNode_.duration) && clearInterval(i)
                        }
                        ), 1e3)
                    }
                    if ("skin-minimal" === r.design_skin) {
                        var s = a.offset().left + Q / 2
                          , n = a.offset().top + Q / 2
                          , l = e.pageX
                          , d = e.pageY
                          , c = .005 * -(l - s - Q / 2);
                        d < n && (c = .5 - c + .5),
                        (Math.abs(d - n) > 20 || Math.abs(l - s) > 20) && (Be(c, {
                            call_from: "skin_minimal_scrub"
                        }),
                        t = !0,
                        Ne({
                            fire_only_once: !0
                        }))
                    }
                    return !1 === t && (!1 === b.player_playing ? Ze({
                        called_from: "click_playpause"
                    }) : Je()),
                    !1
                }
                function Ie(e=0) {
                    var a = 0;
                    if (b.classFunctionalityInnerPlaylist)
                        (a = b.playlist_inner_currNr + e) >= 0 && b.classFunctionalityInnerPlaylist.playlistInner_gotoItem(a, {
                            call_from: "api_sync_players_prev"
                        });
                    else if (window.dzsap_syncList_players && window.dzsap_syncList_players.length > 0)
                        for (var t in window.dzsap_syncList_players) {
                            var i = b.cthis;
                            if (b._sourcePlayer && (i = b._sourcePlayer),
                            window.dzsap_syncList_players[t].get(0) === i.get(0) && (t = parseInt(t, 10),
                            (a = window.dzsap_syncList_index + e) >= 0 && a < window.dzsap_syncList_players.length)) {
                                let e = window.dzsap_syncList_players[a].get(0);
                                e && e.api_play_media && setTimeout((function() {
                                    e.api_play_media({
                                        called_from: "api_sync_players_prev"
                                    })
                                }
                                ), 200)
                            }
                        }
                    else
                        console.log("[dzsap] [syncPlayers] no players found");
                    window.dzsap_syncList_players && window.dzsap_syncList_index >= window.dzsap_syncList_players.length && (window.dzsap_syncList_index = 0)
                }
                function Ae() {
                    if (b._actualPlayer)
                        return b._actualPlayer.get(0).api_sync_players_goto_prev(),
                        !1;
                    Ie(-1)
                }
                function je() {
                    if (b._actualPlayer)
                        return b._actualPlayer.get(0).api_sync_players_goto_next(),
                        !1;
                    Ie(1)
                }
                function Re(e) {
                    var a = {
                        called_from: "default"
                    };
                    return e && (a = o.extend(a, e)),
                    !b.isMediaEnded && (b.isMediaEnded = !0,
                    b.inter_isEnded = setTimeout((function() {
                        b.isMediaEnded = !1
                    }
                    ), 1e3),
                    (!b._actualPlayer || "fake_player" === a.call_from) && (De(0, {
                        call_from: "handle_end"
                    }),
                    "on" === r.loop || N ? (Ze({
                        called_from: "track_end"
                    }),
                    !1) : (Je(),
                    r.parentgallery && void 0 !== r.parentgallery && r.parentgallery.get(0).api_gallery_handle_end(),
                    setTimeout((function() {
                        (b.cthis.hasClass("is-single-player") || b._sourcePlayer && b._sourcePlayer.hasClass("is-single-player")) && je()
                    }
                    ), 100),
                    void setTimeout((function() {
                        if (b._sourcePlayer && (b._sourcePlayer.hasClass("is-single-player") || b._sourcePlayer.hasClass("feeded-whole-playlist")))
                            return b._sourcePlayer.get(0).api_handle_end({
                                call_from: "handle_end() fake_player"
                            }),
                            !1;
                        K && K(p, {})
                    }
                    ), 200))))
                }
                function Ee(e, a) {
                    var t = {
                        called_from: "default"
                    };
                    if (a && (t = o.extend(t, a)),
                    o(window).width(),
                    w = p.width(),
                    p.height(),
                    z && "function" == typeof z.width && (Y = z.width(),
                    J = z.height()),
                    w <= 720 ? p.addClass("under-720") : p.removeClass("under-720"),
                    w <= 500 ? (!1 === p.hasClass("under-500") && "skin-wave" === r.design_skin && "normal" === b.skinwave_mode && b._apControls.append(b._metaArtistCon),
                    p.addClass("under-500")) : (!1 === p.hasClass("under-500") && "skin-wave" === r.design_skin && "normal" === b.skinwave_mode && b._conPlayPauseCon.after(b._metaArtistCon),
                    p.removeClass("under-500")),
                    T = w,
                    "skin-default" === r.design_skin && (T = w),
                    "skin-pro" === r.design_skin && (T = w),
                    "skin-silver" !== r.design_skin && "skin-aria" !== r.design_skin || (T = w,
                    T = b._scrubbar.width()),
                    "skin-justthumbandbutton" === r.design_skin && (w = p.children(".audioplayer-inner").outerWidth(),
                    T = w),
                    "skin-redlights" !== r.design_skin && "skin-steel" !== r.design_skin || (T = b._scrubbar.width()),
                    "skin-wave" === r.design_skin && (T = b._scrubbar.outerWidth(!1),
                    b._scrubbar.outerHeight(!1),
                    b._commentsHolder && (b._commentsHolder.css({
                        width: T
                    }),
                    b._commentsHolder.addClass("active"))),
                    !0 === F) {
                        if ("skin-default" === r.design_skin) {
                            void 0 !== p.get(0) && "auto" === p.get(0).style.height && p.height(200);
                            b._audioplayerInner.height();
                            void 0 === p.attr("data-initheight") && "" !== p.attr("data-initheight") ? p.attr("data-initheight", b._audioplayerInner.height()) : Number(p.attr("data-initheight")),
                            r.design_thumbh
                        }
                        b._audioplayerInner.find(".the-thumb").eq(0).css({})
                    }
                    "none" !== p.css("display") && (b._scrubbar.find(".scrub-bg-img").eq(0).css({
                        width: b._scrubbar.children(".scrub-bg").width()
                    }),
                    b._scrubbar.find(".scrub-prog-img").eq(0).css({
                        width: b._scrubbar.children(".scrub-bg").width()
                    })),
                    p.removeClass("under-240 under-400"),
                    w <= 240 && p.addClass("under-240"),
                    w <= 500 ? (p.addClass("under-400"),
                    !1 === V && (V = !0),
                    b.$controlsVolume) : !0 === V && (V = !1);
                    var i = 50;
                    if ("skin-wave" === r.design_skin && (p.find(".the-thumb").length > 0 && p.find(".the-thumb").width(),
                    b._scrubbar.eq(0).height(),
                    "small" === b.skinwave_mode && (b.$conPlayPause.css({}),
                    b.$conPlayPause.outerWidth()),
                    b._metaArtistCon && "none" !== b._metaArtistCon.css("display") && ("skin-wave" === r.design_skin && "small" === b.skinwave_mode || (b._metaArtistCon.css({}),
                    "skin-wave" === r.design_skin && "small" !== b.skinwave_mode && b._metaArtistCon.css({})),
                    b._metaArtistCon.outerWidth()),
                    b.$controlsVolume && b.$controlsVolume.css("display"),
                    "small" === b.skinwave_mode && (b._scrubbar.css({}),
                    T = b._scrubbar.width()),
                    "canvas" === r.skinwave_wave_mode && p.attr("data-pcm") && (100 === b._scrubbarbg_canvas.width() && b._scrubbarbg_canvas.width(b._scrubbar.width()),
                    "fake" !== b.data_source && (re ? (clearTimeout(re),
                    re = setTimeout(He, 300)) : (He(),
                    re = 1)))),
                    "skin-minimal" === r.design_skin && (Q = b._apControls.width(),
                    b.skin_minimal_canvasplay && (b.skin_minimal_canvasplay.style.width = Q,
                    b.skin_minimal_canvasplay.width = Q,
                    b.skin_minimal_canvasplay.style.height = Q,
                    b.skin_minimal_canvasplay.height = Q,
                    o(b.skin_minimal_canvasplay).css({
                        width: Q,
                        height: Q
                    }))),
                    "skin-default" === r.design_skin && b.$currTime && (parseInt(b._metaArtistCon.css("left"), 10),
                    b._metaArtistCon.outerWidth(),
                    "none" === b._metaArtistCon.css("display") && (b._metaArtistCon_w = 0),
                    isNaN(b._metaArtistCon_l) && (b._metaArtistCon_l = 20)),
                    "skin-minion" === r.design_skin && (i = parseInt(b.$conControls.find(".con-playpause").eq(0).offset().left, 10) - parseInt(b.$conControls.eq(0).offset().left, 10) - 18,
                    b.$conControls.find(".prev-btn").eq(0).css({
                        top: 0,
                        left: i
                    }),
                    i += 36,
                    b.$conControls.find(".next-btn").eq(0).css({
                        top: 0,
                        left: i
                    })),
                    "on" === r.embedded && window.frameElement) {
                        var s = {
                            height: p.outerHeight()
                        };
                        r.embedded_iframe_id && (s.embedded_iframe_id = r.embedded_iframe_id);
                        var n = {
                            name: "resizeIframe",
                            params: s
                        };
                        window.parent.postMessage(n, "*")
                    }
                    Me(),
                    r.settings_trigger_resize > 0 && r.parentgallery && void 0 !== o(r.parentgallery).get(0) && void 0 !== o(r.parentgallery).get(0).api_handleResize && o(r.parentgallery).get(0).api_handleResize()
                }
                function He() {
                    h.view_drawCanvases(b, p.attr("data-pcm"), "canvas_normal_pcm"),
                    re = 0
                }
                function Le(e) {
                    var a = o(this)
                      , t = null;
                    if (b.$controlsVolume.find(".volume_static").length && (t = Number((e.pageX - b.$controlsVolume.find(".volume_static").eq(0).offset().left) / b.$controlsVolume.find(".volume_static").eq(0).width())),
                    !t)
                        return !1;
                    "mousemove" === e.type && B && (a.parent().hasClass("volume-holder") || a.hasClass("volume-holder"),
                    "skin-redlights" === r.design_skin && (t *= 10,
                    t = Math.round(t),
                    t /= 10),
                    We(t, {
                        call_from: "set_by_mousemove"
                    }),
                    P = !1),
                    e.type,
                    "click" === e.type && (a.parent().hasClass("volume-holder") && (t = 1 - (e.pageY - b.$controlsVolume.find(".volume_static").eq(0).offset().top) / b.$controlsVolume.find(".volume_static").eq(0).height()),
                    a.hasClass("volume-holder") && (t = 1 - (e.pageY - b.$controlsVolume.find(".volume_static").eq(0).offset().top) / b.$controlsVolume.find(".volume_static").eq(0).height()),
                    We(t, {
                        call_from: "set_by_mouseclick"
                    }),
                    P = !1),
                    "mousedown" === e.type && (B = !0,
                    p.addClass("volume-dragging"),
                    a.parent().hasClass("volume-holder") && (t = 1 - (e.pageY - b.$controlsVolume.find(".volume_static").eq(0).offset().top) / b.$controlsVolume.find(".volume_static").eq(0).height()),
                    We(t, {
                        call_from: "set_by_mousedown"
                    }),
                    P = !1),
                    "mouseup" === e.type && (B = !1,
                    p.removeClass("volume-dragging"))
                }
                function Fe(a) {
                    var t = a.pageX;
                    if (o(a.target).hasClass("sample-block-start") || o(a.target).hasClass("sample-block-end"))
                        return !1;
                    if ("mousemove" === a.type && (b._scrubbar.children(".scrubBox-hover").css({
                        left: t - b._scrubbar.offset().left
                    }),
                    "on" === r.scrub_show_scrub_time && b.timeModel.getVisualTotalTime())) {
                        var i = (t - b._scrubbar.offset().left) / b._scrubbar.outerWidth() * b.timeModel.getVisualTotalTime();
                        b.$currTime && (b.$currTime.html(e.formatTime(i)),
                        b.$currTime.addClass("scrub-time")),
                        q = !0
                    }
                    if ("mouseleave" === a.type && (q = !1,
                    b.$currTime && b.$currTime.removeClass("scrub-time"),
                    Oe()),
                    "click" === a.type) {
                        p.hasClass("prevent-bubble") && a && a.stopPropagation && (a.preventDefault(),
                        a.stopPropagation()),
                        0 === T && (T = b._scrubbar.width()),
                        0 === T && (T = 300);
                        var s = (a.pageX - b._scrubbar.offset().left) / T * b.timeModel.getVisualTotalTime();
                        if (0 === b.pseudo_sample_time_start && b.sample_time_start > 0 && (s -= b.sample_time_start),
                        b._actualPlayer && setTimeout((function() {
                            b._actualPlayer.get(0) && b._actualPlayer.get(0).api_pause_media && b._actualPlayer.get(0).api_seek_to_perc(s / b.timeModel.getVisualTotalTime(), {
                                call_from: "from_feeder_to_feed"
                            })
                        }
                        ), 50),
                        De(s, {
                            call_from: "handleMouseOnScrubbar"
                        }),
                        "on" === r.autoplay_on_scrub_click && !1 === b.player_playing && Ze({
                            called_from: "handleMouseOnScrubbar"
                        }),
                        p.hasClass("from-wc_loop"))
                            return !1
                    }
                }
                function Be(e, a) {
                    De(e * b.timeModel.getVisualTotalTime(), a)
                }
                function De(a, t) {
                    var i = {
                        call_from: "default",
                        deeplinking: "off",
                        call_from_type: "default"
                    };
                    if (t && (i = o.extend(i, t)),
                    i.call_from,
                    "on" === i.deeplinking) {
                        var s = e.add_query_arg(window.location.href, "audio_time", a);
                        history.pushState({
                            foo: "bar"
                        }, null, s)
                    }
                    if (a = e.sanitizeToIntFromPointTime(a),
                    a = b.timeModel.getActualTargetTime(a),
                    b._actualPlayer) {
                        var n = {
                            type: b.actualDataTypeOfMedia,
                            fakeplayer_is_feeder: "on"
                        };
                        return b._actualPlayer.length && b._actualPlayer.data("feeding-from") !== p.get(0) && ("handle_end" !== i.call_from && "from_playfrom" !== i.call_from && "last_pos" !== i.call_from && "playlist_seek_from_0" !== i.call_from ? (n.called_from = "seek_to from player source->" + p.attr("data-source") + " < -  old call from - " + i.call_from,
                        b._actualPlayer.get(0).api_change_media ? b._actualPlayer.get(0).api_change_media(p, n) : console.log("not inited ? ", b._actualPlayer)) : p.data("promise-to-play-footer-player-from", a)),
                        setTimeout((function() {
                            b._actualPlayer.get(0) && b._actualPlayer.get(0).api_pause_media && "from_playfrom" !== i.call_from && "last_pos" !== i.call_from && b._actualPlayer.get(0).api_seek_to(a, {
                                call_from: "from_feeder_to_feed"
                            })
                        }
                        ), 50),
                        !1
                    }
                    if ("youtube" === b.audioType)
                        try {
                            b.$mediaNode_.seekTo(a)
                        } catch (e) {
                            console.log("yt seek err - ", e)
                        }
                    if (Ne({
                        fire_only_once: !0
                    }),
                    setTimeout((function() {
                        Ne({
                            fire_only_once: !0
                        })
                    }
                    ), 20),
                    "selfHosted" === b.audioType) {
                        if (b.$mediaNode_ && void 0 !== b.$mediaNode_.currentTime)
                            try {
                                b.$mediaNode_.currentTime = a
                            } catch (e) {
                                console.log("error on scrub", e, " arg - ", a)
                            }
                        return !1
                    }
                }
                function Ve(e) {
                    Ne({
                        fire_only_once: !0
                    }),
                    setTimeout((function() {
                        Ne({
                            fire_only_once: !0
                        })
                    }
                    ), 20)
                }
                function Qe(e) {
                    "youtube" === b.audioType && b.$mediaNode_.setPlaybackRate(e),
                    "selfHosted" === b.audioType && (b.$mediaNode_.playbackRate = e)
                }
                function We(e, a) {
                    var t = {
                        call_from: "default"
                    };
                    if (a && (t = o.extend(t, a)),
                    e > 1 && (e = 1),
                    e < 0 && (e = 0),
                    "from_fake_player_feeder_from_init_loaded" === t.call_from && b._sourcePlayer) {
                        if ("default" !== r.default_volume && (D = !0),
                        D)
                            return !1;
                        D = !0
                    }
                    "set_by_mouseclick" !== t.call_from && "set_by_mousemove" !== t.call_from || (D = !0),
                    "youtube" === b.audioType && b.$mediaNode_ && b.$mediaNode_.setVolume && b.$mediaNode_.setVolume(100 * e),
                    "selfHosted" === b.audioType && (b.$mediaNode_ ? (b.$mediaNode_.volume = e,
                    b.$watermarkMedia_ && (b.$watermarkMedia_.volume = e * r.watermark_volume)) : b.$mediaNode_ && o(b.$mediaNode_).attr("preload", "metadata")),
                    Ue(e),
                    b._sourcePlayer && (t.call_from = "from_fake_player",
                    b._sourcePlayer.get(0) && b._sourcePlayer.get(0).api_visual_set_volume(e, t) && b._sourcePlayer.get(0).api_visual_set_volume(e, t)),
                    b._actualPlayer && "from_fake_player" !== t.call_from && ("from_init_loaded" === t.call_from ? t.call_from = "from_fake_player_feeder_from_init_loaded" : t.call_from = "from_fake_player_feeder",
                    b._actualPlayer && b._actualPlayer.get(0) && b._actualPlayer.get(0).api_set_volume && b._actualPlayer.get(0).api_set_volume(e, t))
                }
                function Ue(e, a) {
                    b.$controlsVolume.hasClass("controls-volume-vertical") ? b.$controlsVolume.find(".volume_active").eq(0).css({
                        height: b.$controlsVolume.find(".volume_static").eq(0).height() * e
                    }) : "skin-redlights" === b.initOptions.design_skin ? b.$controlsVolume.find(".volume_active").eq(0).css({
                        "clip-path": "inset(0% " + 100 * Math.abs(1 - e) + "% 0% 0%)"
                    }) : b.$controlsVolume.find(".volume_active").eq(0).css({
                        width: b.$controlsVolume.find(".volume_static").eq(0).width() * e
                    }),
                    "skin-wave" === r.design_skin && "on" === r.skinwave_dynamicwaves && (b._scrubbar.find(".scrub-bg-img").eq(0).css({
                        transform: "scaleY(" + e + ")"
                    }),
                    b._scrubbar.find(".scrub-prog-img").eq(0).css({
                        transform: "scaleY(" + e + ")"
                    })),
                    null !== localStorage && b.the_player_id && localStorage.setItem("dzsap_last_volume_" + b.the_player_id, e),
                    E = e
                }
                function Ge(e) {
                    !1 === P ? (H = E,
                    We(0, {
                        call_from: "from_mute"
                    }),
                    P = !0) : (We(H, {
                        call_from: "from_unmute"
                    }),
                    P = !1)
                }
                function Ye(e) {
                    var a = {
                        call_from: "default"
                    };
                    e && (a = o.extend(a, e)),
                    "on" !== r.design_animateplaypause && (b.$conPlayPause.children(".playbtn").css({
                        display: "block"
                    }),
                    b.$conPlayPause.children(".pausebtn").css({
                        display: "none"
                    })),
                    b.$conPlayPause.removeClass("playing"),
                    p.removeClass("is-playing"),
                    b.player_playing = !1,
                    p.parent().hasClass("zoomsounds-wrapper-bg-center") && p.parent().removeClass("is-playing"),
                    r.parentgallery && r.parentgallery.removeClass("player-is-playing"),
                    ie = !0,
                    te && te(p)
                }
                function Je(e) {
                    var a = {
                        audioapi_setlasttime: !0,
                        donot_change_media: !1,
                        call_actual_player: !0
                    };
                    if (S)
                        return !1;
                    if (e && (a = o.extend(a, e)),
                    Ye({
                        call_from: "pause_media"
                    }),
                    a.call_actual_player && !0 !== a.donot_change_media && null !== b._actualPlayer) {
                        var t = {
                            type: b.actualDataTypeOfMedia,
                            fakeplayer_is_feeder: "on"
                        };
                        return b._actualPlayer && b._actualPlayer.length && b._actualPlayer.data("feeding-from") !== p.get(0) && (t.called_from = "pause_media from player " + p.attr("data-source"),
                        b._actualPlayer.get(0).api_change_media(p, t)),
                        setTimeout((function() {
                            b._actualPlayer.get(0) && b._actualPlayer.get(0).api_pause_media && b._actualPlayer.get(0).api_pause_media()
                        }
                        ), 100),
                        b.player_playing = !1,
                        p.removeClass("is-playing"),
                        void (p.parent().hasClass("zoomsounds-wrapper-bg-center") && p.parent().removeClass("is-playing"))
                    }
                    !function(e, a) {
                        var t = jQuery;
                        "youtube" === e.audioType && e.$mediaNode_ && e.$mediaNode_.pauseVideo && e.$mediaNode_.pauseVideo(),
                        "selfHosted" === e.audioType && (e.$mediaNode_ && ("stop" == e.initOptions.pause_method ? (e.$mediaNode_.pause(),
                        e.$mediaNode_.src = "",
                        e.destroy_cmedia(),
                        t(e.$mediaNode_).remove(),
                        e.$mediaNode_ = null) : e.$mediaNode_.pause && e.$mediaNode_.pause()),
                        e.$watermarkMedia_ && e.$watermarkMedia_.pause && e.$watermarkMedia_.pause()),
                        a()
                    }(b, (()=>{
                        b._sourcePlayer && b._sourcePlayer.get(0) && b._sourcePlayer.get(0).api_pause_media_visual && b._sourcePlayer.get(0).api_pause_media_visual({
                            call_from: "pause_media in child player"
                        })
                    }
                    )),
                    b.player_playing = !1,
                    p.removeClass("is-playing"),
                    p.parent().hasClass("zoomsounds-wrapper-bg-center") && p.parent().removeClass("is-playing")
                }
                function Xe(a) {
                    "on" !== r.design_animateplaypause && (b.$conPlayPause.children(".playbtn").css({
                        display: "none"
                    }),
                    b.$conPlayPause.children(".pausebtn").css({
                        display: "block"
                    })),
                    b.player_playing = !0,
                    ie = !1,
                    p.addClass("is-playing"),
                    p.addClass("first-played"),
                    b.classFunctionalityInnerPlaylist && b.classFunctionalityInnerPlaylist.player_determineSyncPlayersIndex(b, b._sourcePlayer),
                    e.view_player_globalDetermineSyncPlayersIndex(b),
                    e.view_player_playMiscEffects(b),
                    r.parentgallery && r.parentgallery.addClass("player-is-playing"),
                    b.$stickToBottomContainer && b.$stickToBottomContainer.addClass("audioplayer-loaded"),
                    ee && ee(p),
                    ae && ae(p)
                }
                function Ze(a) {
                    var t = {
                        api_report_play_media: !0,
                        called_from: "default",
                        retry_call: 0
                    };
                    if (a && (t = o.extend(t, a)),
                    A || ke({
                        called_from: t.called_from + "[play_media .. not setuped]"
                    }),
                    "api_sync_players_prev" === t.called_from && (R = p.parent().children(".audioplayer,.audioplayer-tobe").index(p),
                    r.parentgallery && r.parentgallery.get(0) && r.parentgallery.get(0).api_goto_item && r.parentgallery.get(0).api_goto_item(R)),
                    e.is_ios() && "waiting" === b.spectrum_audioContext_buffer)
                        return setTimeout((function() {
                            a.call_from_aux = "waiting audioCtx_buffer or ios",
                            Ze(a)
                        }
                        ), 500),
                        !1;
                    if (t.called_from,
                    !1 === p.hasClass("media-setuped") && null === b._actualPlayer && console.log("warning: media not setuped, there might be issues", p.attr("id")),
                    t.called_from.indexOf("feed_to_feeder") > -1 && !1 === p.hasClass("dzsap-loaded")) {
                        Pe();
                        var i = 300;
                        if (e.is_android_good() && (i = 0),
                        "with delay" !== t.call_from_aux)
                            return i ? setTimeout((function() {
                                t.call_from_aux = "with delay",
                                Ze(t)
                            }
                            ), i) : Ze(t),
                            !1
                    }
                    if (b.audioType,
                    e.player_stopOtherPlayers(f, b),
                    M && (ke({
                        called_from: "play_media() .. destroyed for rebuffer"
                    }),
                    d.isInt(b.playFrom) && De(b.playFrom, {
                        call_from: "destroyed_for_rebuffer_playfrom"
                    }),
                    M = !1),
                    "on" === r.google_analytics_send_play_event && window._gaq && !1 === O && (window._gaq.push(["_trackEvent", "ZoomSounds Play", "Play", "zoomsounds play - "]),
                    O = !0),
                    window.ga || window.__gaTracker && (window.ga = window.__gaTracker),
                    "on" === r.google_analytics_send_play_event && window.ga && !1 === O && (window.console && console.log("sent event"),
                    O = !0,
                    window.ga("send", {
                        hitType: "event",
                        eventCategory: "zoomsounds play - ",
                        eventAction: "play",
                        eventLabel: "zoomsounds play - "
                    })),
                    b._sourcePlayer && b._sourcePlayer.get(0) && b._sourcePlayer.get(0).api_pause_media_visual && b._sourcePlayer.get(0).api_play_media_visual({
                        api_report_play_media: !1
                    }),
                    b._actualPlayer) {
                        var s = {
                            type: b.actualDataTypeOfMedia,
                            fakeplayer_is_feeder: "on",
                            call_from: "play_media_audioplayer"
                        };
                        try {
                            return "click_playpause" === t.called_from && r.parentgallery && (r.parentgallery.get(0).api_regenerate_sync_players_with_this_playlist(),
                            b._actualPlayer.get(0).api_regenerate_playerlist_inner()),
                            b._actualPlayer && b._actualPlayer.length && b._actualPlayer.data("feeding-from") !== p.get(0) && (s.called_from = "play_media from player 22 " + p.attr("data-source") + " < -  old call from - " + t.called_from,
                            b._actualPlayer.get(0).api_change_media && b._actualPlayer.get(0).api_change_media(p, s),
                            !1 === p.hasClass("first-played") && p.data("promise-to-play-footer-player-from") && (De(p.data("promise-to-play-footer-player-from")),
                            setTimeout((function() {
                                p.data("promise-to-play-footer-player-from", "")
                            }
                            ), 1e3))),
                            setTimeout((function() {
                                b._actualPlayer.get(0) && b._actualPlayer.get(0).api_play_media && b._actualPlayer.get(0).api_play_media({
                                    called_from: "[feed_to_feeder]"
                                })
                            }
                            ), 100),
                            void ("off" === b.ajax_view_submitted && l.ajax_submit_views.bind(b)())
                        } catch (e) {
                            console.log("no fake player..", e)
                        }
                    }
                    "youtube" === b.audioType && dzsap_youtube_playMedia(b, t, $, b.youtube_currentId),
                    b.audioType,
                    b.$watermarkMedia_ && b.$watermarkMedia_.play && b.$watermarkMedia_.play(),
                    "youtube" === b.audioType && Xe(),
                    function(a, t, i) {
                        (async function() {
                            return new Promise(((t,i)=>{
                                !function(t, i) {
                                    a.cthis.attr("data-original-type") || (a.$mediaNode_ && a.$mediaNode_.play ? e.is_ios() && null !== a.spectrum_audioContext && "object" == typeof a.spectrum_audioContext ? (a.spectrum_audioContextBufferSource = a.spectrum_audioContext.createBufferSource(),
                                    a.spectrum_audioContextBufferSource.buffer = a.spectrum_audioContext_buffer,
                                    a.spectrum_audioContextBufferSource.connect(a.spectrum_audioContext.destination),
                                    a.spectrum_audioContextBufferSource.start(0, a.lastTimeInSeconds),
                                    t({
                                        resolve_type: "playing_context"
                                    })) : e.is_ie() ? (a.$mediaNode_.play(),
                                    t({
                                        resolve_type: "started_playing"
                                    })) : a.$mediaNode_.play().then((e=>{
                                        t({
                                            resolve_type: "started_playing"
                                        })
                                    }
                                    )).catch((e=>{
                                        i({
                                            error_type: "did not want to play",
                                            error_message: e
                                        })
                                    }
                                    )) : null == a._actualPlayer && (a.isPlayPromised = !0))
                                }(t, i)
                            }
                            ))
                        }
                        )().then((e=>{
                            t(e)
                        }
                        )).catch((e=>{
                            i(e)
                        }
                        ))
                    }(b, (()=>{
                        Xe(),
                        "wave" === r.scrubbar_type && "on" === r.skinwave_enableSpectrum && e.player_initSpectrum(b),
                        b._sourcePlayer ? (window.dzsap_currplayer_focused = b._sourcePlayer.get(0),
                        b._sourcePlayer.get(0) && b._sourcePlayer.get(0).api_pause_media_visual && b._sourcePlayer.get(0).api_try_to_submit_view()) : (window.dzsap_currplayer_focused = p.get(0),
                        Ke()),
                        "on" === b.keyboard_controls.play_trigger_step_back && dzsap_currplayer_focused && dzsap_currplayer_focused.api_step_back(b.keyboard_controls.step_back_amount)
                    }
                    ), (e=>{
                        console.log("error autoplay playing -  ", e),
                        setTimeout((()=>{
                            Je(),
                            console.log("trying to pause")
                        }
                        ), 30)
                    }
                    ))
                }
                function Ke() {
                    "auto" === b.ajax_view_submitted && (b.ajax_view_submitted = "off"),
                    "off" === b.ajax_view_submitted && l.ajax_submit_views.bind(b)()
                }
                window.dzsap_player_index++,
                b.timeModel.getSampleTimesFromDom(),
                function() {
                    if (p.hasClass("dzsap-inited"))
                        return !1;
                    if (b.play_media_visual = Xe,
                    b.play_media = Ze,
                    b.pause_media = Je,
                    b.seek_to = De,
                    b.reinit = _e,
                    b.handle_end = Re,
                    b.init_loaded = Pe,
                    b.scrubbar_reveal = fe,
                    b.calculate_dims_time = le,
                    b.struct_generate_thumb = ge,
                    b.check_multisharer = ye,
                    b.setup_structure_scrub = we,
                    b.setup_structure_sanitizers = ve,
                    b.destroy_cmedia = Ce,
                    b.view_drawCurrentTime = Oe,
                    b.setupStructure_thumbnailCon = ge,
                    b.setup_pcm_random_for_now = be,
                    b.handleResize = Ee,
                    b.destroy_media = Te,
                    p.css({
                        opacity: ""
                    }),
                    p.addClass("dzsap-inited"),
                    window.dzsap_player_index++,
                    b.keyboard_controls = e.dzsap_generate_keyboard_controls(),
                    e.configureAudioPlayerOptionsInitial(p, r, b),
                    e.player_detect_skinwave_mode.bind(b)(),
                    b.classMisc = new class {
                        handleClickLike() {
                            console.log("zoomsounds - click_like()", this);
                            var e = o(this);
                            0 !== p.has(e).length && (e.hasClass("active") ? l.ajax_retract_like.bind(b)() : l.ajax_submit_like.bind(b)())
                        }
                    }
                    ,
                    "skin-default" === r.design_skin && "default" === r.design_thumbh && (p.height(),
                    F = !0),
                    e.dzsap_is_mobile() && (o("body").addClass("is-mobile"),
                    "on" === r.mobile_delete && e.player_delete(b),
                    "on" === r.mobile_disable_fakeplayer && b.cthis.attr("data-fakeplayer", "")),
                    e.player_viewApplySkinWaveModes(b),
                    r.design_thumbh,
                    e.playerFunctions(b, "detectIds"),
                    p.attr("data-fakeplayer") && e.player_determineActualPlayer(b),
                    b.cthis.addClass("scrubbar-type-" + r.scrubbar_type),
                    e.player_determineHtmlAreas(b),
                    "on" === r.construct_player_list_for_sync && !1 === v && (window.dzsap_syncList_players = [],
                    v = !0,
                    o(".audioplayer.is-single-player,.audioplayer-tobe.is-single-player").each((function() {
                        var e = o(this);
                        e.hasClass("dzsap_footer") || "on" !== e.attr("data-do-not-include-in-list") && window.dzsap_syncList_players.push(e)
                    }
                    )),
                    clearTimeout(y),
                    y = setTimeout((function() {
                        v = !1
                    }
                    ), 500)),
                    e.player_getPlayFromTime(b),
                    e.player_adjustIdentifiers(b),
                    "youtube" === p.attr("data-type") && (r.type = "youtube",
                    b.audioType = "youtube"),
                    "soundcloud" === p.attr("data-type") && (r.type = "soundcloud",
                    b.audioType = "soundcloud",
                    r.skinwave_enableSpectrum = "off",
                    p.removeClass("skin-wave-is-spectrum")),
                    "mediafile" === p.attr("data-type") && (r.type = "audio",
                    b.audioType = "audio"),
                    "shoutcast" === p.attr("data-type") && (r.type = "shoutcast",
                    b.audioType = "audio",
                    r.disable_timer = "on",
                    r.skinwave_enableSpectrum = "off",
                    "skin-default" === r.design_skin && (r.disable_scrub = "on")),
                    "audio" !== b.audioType && "normal" !== b.audioType && "" !== b.audioType || (b.audioType = "selfHosted"),
                    "youtube" === b.audioType) {
                        const e = d.getBaseUrl("dzsap_youtube_script", "audioplayer.js")
                          , a = e ? e + "/parts/youtube/dzsap-youtube-functions.js" : "";
                        d.loadScriptIfItDoesNotExist(a, window.dzsap_youtube_functions_inited).then((e=>{
                            dzsap_youtube_functions_init(b)
                        }
                        ))
                    }
                    if (b.audioTypeSelfHosted_streamType = "",
                    "selfHosted" === b.audioType && (p.attr("data-streamtype") && "off" !== p.attr("data-streamtype") ? (b.audioTypeSelfHosted_streamType = p.attr("data-streamtype"),
                    p.attr("data-source"),
                    p.addClass("is-radio-type")) : b.audioTypeSelfHosted_streamType = ""),
                    b.audioTypeSelfHosted_streamType,
                    b.src_real_mp3 = p.attr("data-source"),
                    "selfHosted" === b.audioType && (b.src_real_mp3 = p.attr("data-source")),
                    !p.hasClass("audioplayer")) {
                        if (C = void 0 !== p.attr("id") ? p.attr("id") : "ap" + g++,
                        b.youtube_currentId = "ytplayer_" + C,
                        p.removeClass("audioplayer-tobe"),
                        p.addClass("audioplayer"),
                        Me(),
                        setTimeout((function() {
                            Me()
                        }
                        ), 1e3),
                        "canvas" !== r.skinwave_wave_mode || "skin-wave" !== r.design_skin && !p.attr("data-fakeplayer") || h.wave_mode_canvas_try_to_get_pcm(b),
                        "off" === r.cueMedia && (p.addClass("cue-off"),
                        r.autoplay = "on"),
                        b.data_source = p.attr("data-source") || "",
                        void 0 !== p.attr("data-source") && String(p.attr("data-source")).indexOf("https://soundcloud.com/") > -1 && (b.audioType = "soundcloud"),
                        "soundcloud" === b.audioType && u.retrieve_soundcloud_url(b),
                        m.setup_structure(b),
                        "wave" !== r.scrubbar_type || "selfHosted" !== b.audioType && "soundcloud" !== b.audioType && "fake" !== b.audioType || "on" !== r.skinwave_comments_enable || c.comments_setupCommentsInitial(b),
                        "on" === r.autoplay && "on" === r.cueMedia && (b.increment_views = 1),
                        "on" === r.cueMedia && "soundcloud" !== b.audioType)
                            if ((e.is_android() || e.is_ios()) && p.find(".playbtn").bind("click", Ze),
                            b.data_source && b.data_source.indexOf("{{generatenonce}}") > -1) {
                                var a = ""
                                  , i = /id=(\d*?)/g.exec(b.data_source);
                                i && (a = i[1]),
                                o.ajax({
                                    type: "POST",
                                    url: b.data_source,
                                    data: {},
                                    success: function(e) {
                                        e && e.indexOf(a) > -1 && (p.attr("data-source", e),
                                        ke({
                                            called_from: "nonce generated",
                                            newSource: e
                                        }))
                                    }
                                })
                            } else {
                                const a = e.player_isGoingToSetupMediaNow(b);
                                "selfHosted" === b.audioType && ("icecast" !== b.audioTypeSelfHosted_streamType && "shoutcast" !== b.audioTypeSelfHosted_streamType || (("icecast" === b.audioTypeSelfHosted_streamType || b.radio_isGoingToUpdateArtistName || b.radio_isGoingToUpdateSongName) && e.player_icecastOrShoutcastRefresh(b),
                                setInterval((function() {
                                    e.player_icecastOrShoutcastRefresh(b)
                                }
                                ), 1e4))),
                                a && ke({
                                    called_from: "normal setup media .. --- icecast must wait"
                                })
                            }
                        else
                            p.find(".playbtn").bind("click", me),
                            p.find(".scrubbar").bind("click", me),
                            Ee(0, {
                                called_from: "init"
                            });
                        e.player_determineStickToBottomContainer(b),
                        e.player_stickToBottomContainerDetermineClasses(b),
                        b.timeModel.initObjects(),
                        b.setup_media = ke,
                        p.get(0).classInstance = b,
                        p.get(0).api_init_loaded = Pe,
                        p.get(0).api_destroy = ue,
                        p.get(0).api_play = Ze,
                        p.get(0).api_set_volume = We,
                        p.get(0).api_get_last_vol = ze,
                        p.get(0).api_get_source = ()=>b.data_source,
                        p.get(0).api_click_for_setup_media = me,
                        p.get(0).api_handleResize = Ee,
                        p.get(0).api_set_playback_speed = Qe,
                        p.get(0).api_change_media = function(a, i) {
                            return function(o, r={}) {
                                var l = {
                                    type: "",
                                    fakeplayer_is_feeder: "off",
                                    called_from: "default",
                                    source: "default",
                                    pcm: "",
                                    artist: "",
                                    song_name: "",
                                    thumb: "",
                                    thumb_link: "",
                                    autoplay: "on",
                                    cue: "on",
                                    feeder_type: "player",
                                    source_player_do_not_update: "off",
                                    watermark: "",
                                    watermark_volume: "",
                                    playerid: ""
                                };
                                a.ajax_view_submitted = "on";
                                var d = {
                                    ...l,
                                    ...r
                                }
                                  , c = a.initOptions
                                  , _ = o
                                  , p = !1;
                                i(".current-feeder-for-parent-player").removeClass("current-feeder-for-parent-player"),
                                "string" == typeof _ && (p = !0);
                                var u = !0;
                                p || a.data_source !== _.attr("data-source") || (u = !1),
                                p && a.data_source === _ && (u = !1),
                                u && a._sourcePlayer && (a._sourcePlayer.get(0).api_pause_media_visual({
                                    call_from: "change_media"
                                }),
                                a._sourcePlayer.get(0).api_set_timeVisualTotal(0)),
                                a.cthis.data("original-settings") || "fake" === a.data_source || a.cthis.data("original-settings", e.sanitizeObjectForChangeMediaArgs(a.cthis)),
                                p || (d = {
                                    ...d,
                                    ...e.sanitizeObjectForChangeMediaArgs(_)
                                });
                                const m = a.data_source;
                                if (a.data_source = d.source,
                                (!1 === p && !(1 != !!_.hasClass("audioplayer") && !_.hasClass("is-zoomsounds-source-player")) || "on" === d.fakeplayer_is_feeder) && (a.set_sourcePlayer(_),
                                a.cthis.data("feeding-from", a._sourcePlayer.get(0)),
                                a._sourcePlayer.addClass("current-feeder-for-parent-player")),
                                !p && _ && (_.attr("data-playerid") ? a.cthis.attr("data-feed-playerid", _.attr("data-playerid")) : (a.cthis.attr("data-feed-playerid", ""),
                                d.playerid = "")),
                                a._sourcePlayer && "on" !== l.source_player_do_not_update) {
                                    if (m === _.attr("data-source"))
                                        return !1
                                } else if (m === _)
                                    return !1;
                                "detect" !== d.type && "audio" !== d.type && "normal" !== d.type || (d.type = "selfHosted"),
                                a.cthis.removeClass("meta-loaded"),
                                a.cthis.parent().hasClass("audioplayer-was-loaded") && (a.cthis.parent().addClass("audioplayer-loaded"),
                                i("body").addClass("footer-audioplayer-loaded"),
                                a.cthis.parent().removeClass("audioplayer-was-loaded")),
                                a.$stickToBottomContainer && a.$stickToBottomContainer.addClass("audioplayer-loaded"),
                                a.cthis.removeClass(t.O.ERRORED_OUT_CLASS),
                                a.destroy_media(),
                                a.cthis.attr("data-source", d.source),
                                a.cthis.attr("data-soft-watermark", d.watermark),
                                d.watermark_volume ? c.watermark_volume = d.watermark_volume : c.watermark_volume = 1;
                                var h = d.type;
                                if ("mediafile" === d.type && (d.type = "audio"),
                                d.type && ("soundcloud" === d.type && (d.type = "audio"),
                                "album_part" === d.type && (d.type = "audio"),
                                a.cthis.attr("data-type", d.type),
                                a.audioType = d.type,
                                c.type = d.type),
                                a.isPlayerLoaded = !1,
                                "skin-wave" === c.design_skin && ("canvas" === c.skinwave_wave_mode && (a._sourcePlayer ? a.src_real_mp3 = _.attr("data-source") : a.src_real_mp3 = _,
                                _ && d.pcm ? (a.cthis.attr("data-pcm", _.attr("data-pcm")),
                                n.scrubModeWave__view_transitionIn(a, _.attr("data-pcm"))) : n.scrubModeWave__initGenerateWaveData(a, {
                                    call_from: "change_media() regenerate_canvas_from_change_media"
                                }),
                                "" !== d.pcm ? (n.scrubModeWave__view_transitionIn(a, d.pcm),
                                a.cthis.attr("data-pcm", d.pcm)) : (a._scrubbar.addClass("fast-animate-scrubbar"),
                                a.cthis.removeClass("scrubbar-loaded"),
                                setTimeout((function() {}
                                ), 10),
                                setTimeout((function() {
                                    a.cthis.removeClass("fast-animate-scrubbar"),
                                    a.isRealPcm = !1,
                                    a.cthis.attr("data-pcm", ""),
                                    n.wave_mode_canvas_try_to_get_pcm(a),
                                    n.scrubModeWave__initGenerateWaveData(a, {
                                        call_from: "regenerate_canvas_from_change_media - generate data for new"
                                    })
                                }
                                ), 120))),
                                d.thumb && (a.cthis.find(".the-thumb").length ? a.cthis.find(".the-thumb").css("background-image", "url(" + d.thumb + ")") : (a.cthis.attr("data-thumb", d.thumb),
                                a.setupStructure_thumbnailCon()))),
                                d.thumb ? (a.cthis.find(".the-thumb").length ? a.cthis.find(".the-thumb").css("background-image", "url(" + d.thumb + ")") : (a.cthis.attr("data-thumb", d.thumb),
                                a.setupStructure_thumbnailCon()),
                                a.cthis.removeClass("does-not-have-thumb"),
                                a.cthis.addClass("has-thumb")) : (a.cthis.addClass("does-not-have-thumb"),
                                a.cthis.removeClass("has-thumb")),
                                "" === d.pcm && a.setup_pcm_random_for_now(),
                                a._sourcePlayer && (a._sourcePlayer.attr("data-playerid") ? a.identifier_pcm = a._sourcePlayer.attr("data-playerid") : a._sourcePlayer.attr("data-source") && (a.identifier_pcm = a._sourcePlayer.attr("data-source"))),
                                a._sourcePlayer && _.find(".meta-artist").eq(0).html(),
                                a._sourcePlayer) {
                                    var f = null;
                                    a._sourcePlayer.find(".feed-dzsap-for-extra-html-right").length ? f = a._sourcePlayer.find(".feed-dzsap-for-extra-html-right").eq(0) : a._sourcePlayer.attr("data-playerid") && i(document).find('.feed-dzsap-for-extra-html-right[data-playerid="' + a._sourcePlayer.attr("data-playerid") + '"]').length && (f = i(document).find('.feed-dzsap-for-extra-html-right[data-playerid="' + a._sourcePlayer.attr("data-playerid") + '"]').eq(0)),
                                    f && a.cthis.find(".extrahtml-in-float-right").eq(0).html(f.html())
                                }
                                if (d.artist && a.cthis.find(".the-artist").html(d.artist),
                                d.song_name && a.cthis.find(".the-name").html(d.song_name),
                                "on" === l.source_player_do_not_update && a.set_sourcePlayer(null),
                                "soundcloud" === h && -1 === d.source.indexOf("api.soundcloud") ? (a.data_source = d.source,
                                a.isPlayPromised = !0,
                                setTimeout((function() {
                                    a.isPlayPromised = !0
                                }
                                ), 501),
                                s.retrieve_soundcloud_url(a)) : a.setup_media({
                                    called_from: "change_media"
                                }),
                                a.timeModel.getSampleTimesFromDom(a._sourcePlayer),
                                "fake" === a.audioType)
                                    return !1;
                                a.initOptions.action_audio_change_media && a.initOptions.action_audio_change_media(d.source, d),
                                "on" === d.autoplay && !1 === e.dzsap_is_mobile() && (a.play_media_visual(),
                                setTimeout((function() {
                                    a.play_media({
                                        called_from: "changeMediaArgs.autoplay"
                                    })
                                }
                                ), 500)),
                                a.reinit(),
                                setTimeout((function() {
                                    a.handleResize(null, {
                                        called_from: "change_media"
                                    })
                                }
                                ), 100)
                            }
                        }(b, o),
                        p.get(0).api_seek_to_perc = Be,
                        p.get(0).api_seek_to = De,
                        p.get(0).api_seek_to_visual = Ve,
                        p.get(0).api_visual_set_volume = Ue,
                        p.get(0).api_destroy_listeners = pe,
                        p.get(0).api_pause_media = Je,
                        p.get(0).api_pause_media_visual = Ye,
                        p.get(0).api_play_media = Ze,
                        p.get(0).api_play_media_visual = Xe,
                        p.get(0).api_handle_end = Re,
                        p.get(0).api_change_visual_target = de,
                        p.get(0).api_change_design_color_highlight = ce,
                        p.get(0).api_draw_scrub_prog = Me,
                        p.get(0).api_draw_curr_time = Oe,
                        p.get(0).api_get_times = b.timeModel.refreshTimes,
                        p.get(0).api_check_time = Ne,
                        p.get(0).api_sync_players_goto_next = je,
                        p.get(0).api_sync_players_goto_prev = Ae,
                        p.get(0).api_regenerate_playerlist_inner = function() {
                            b.classFunctionalityInnerPlaylist && b.classFunctionalityInnerPlaylist.playlistInner_setupStructureInPlayer()
                        }
                        ,
                        p.get(0).api_step_back = function(e) {
                            e || (e = b.keyboard_controls.step_back_amount),
                            De(b.timeCurrent - e)
                        }
                        ,
                        p.get(0).api_step_forward = function(e) {
                            e || (e = b.keyboard_controls.step_back_amount),
                            De(b.timeCurrent + e)
                        }
                        ,
                        p.get(0).api_playback_speed = function(e) {
                            b.$mediaNode_ && b.$mediaNode_.playbackRate && (b.$mediaNode_.playbackRate = e)
                        }
                        ,
                        p.get(0).api_set_action_audio_play = function(e) {
                            ee = e
                        }
                        ,
                        p.get(0).api_set_action_audio_pause = function(e) {
                            te = e
                        }
                        ,
                        p.get(0).api_set_action_audio_end = function(e) {
                            K = e,
                            p.data("has-action-end", "on")
                        }
                        ,
                        p.get(0).api_set_action_audio_comment = function(e) {
                            b.action_audio_comment = e
                        }
                        ,
                        p.get(0).api_try_to_submit_view = Ke,
                        r.action_audio_play && (ee = r.action_audio_play),
                        r.action_audio_pause && (te = r.action_audio_pause),
                        r.action_audio_play2 && (ae = r.action_audio_play2),
                        r.action_audio_end && (K = r.action_audio_end,
                        p.data("has-action-end", "on")),
                        Ne({
                            fire_only_once: !0
                        }),
                        "skin-minimal" === r.design_skin && Ne({
                            fire_only_once: !0
                        }),
                        p.on("click", ".dzsap-repeat-button,.dzsap-loop-button,.btn-zoomsounds-download,.zoomsounds-btn-step-backward,.zoomsounds-btn-step-forward,.zoomsounds-btn-go-beginning,.zoomsounds-btn-slow-playback,.zoomsounds-btn-reset, .tooltip-indicator--btn-footer-playlist", Se),
                        p.on("mouseenter", Se),
                        p.on("mouseleave", Se),
                        b.$conPlayPause.on("click", qe),
                        p.on("click", ".skip-15-sec", (function() {
                            p.get(0).api_step_forward(15)
                        }
                        )),
                        o(window).on("resize.dzsap", Ee),
                        Ee(0, {
                            called_from: "init"
                        }),
                        b._scrubbar && b._scrubbar.get(0) && b._scrubbar.get(0).addEventListener("touchstart", (function(e) {
                            b.player_playing && (W = !0)
                        }
                        ), {
                            passive: !0
                        }),
                        o(document).on("touchmove", (function(e) {
                            if (W)
                                return U = e.originalEvent.touches[0].pageX,
                                (G = U - b._scrubbar.offset().left) < 0 && (G = 0),
                                G > b._scrubbar.width() && (G = b._scrubbar.width()),
                                Be(G / b._scrubbar.width(), {
                                    call_from: "touch move"
                                }),
                                !1
                        }
                        )),
                        o(document).on("touchend", (function(e) {
                            W = !1
                        }
                        )),
                        r.skinwave_comments_mode_outer_selector && (b.$commentsSelector = o(r.skinwave_comments_mode_outer_selector),
                        b.$commentsSelector.data ? (b.$commentsSelector.data("parent", p),
                        window.dzsap_settings && window.dzsap_settings.comments_username && b.$commentsSelector.find(".comment_email,*[name=comment_user]").remove(),
                        b.$commentsSelector.on("click", ".dzstooltip--close,.comments-btn-submit", c.comments_selector_event),
                        b.$commentsSelector.on("focusin", "input", c.comments_selector_event),
                        b.$commentsSelector.on("focusout", "input", c.comments_selector_event)) : console.log("%c, data not available .. ", "color: #990000;", o(r.skinwave_comments_mode_outer_selector))),
                        p.off("click", ".btn-like"),
                        p.on("click", ".btn-like", b.classMisc.handleClickLike),
                        e.waitForScriptToBeAvailableThenExecute(window.dzsap_part_starRatings_loaded, (function() {
                            window.dzsap_init_starRatings_from_dzsap(b)
                        }
                        )),
                        setTimeout((function() {
                            Ee(0, {
                                called_from: "init_timeout"
                            }),
                            "canvas" === r.skinwave_wave_mode && (le(),
                            setTimeout((function() {
                                le()
                            }
                            ), 100))
                        }
                        ), 100),
                        p.find(".btn-menu-state").eq(0).bind("click", he),
                        p.on("click", ".prev-btn,.next-btn", Se)
                    }
                }()
            }
        }
        window.dzsap_currplayer_focused = null,
        window.dzsap_currplayer_from_share = null,
        window.dzsap_mouseover = !1,
        window.dzsap_init_allPlayers = function(e) {
            e(".audioplayer.auto-init,.audioplayer-tobe.auto-init").each((function() {
                var a = e(this);
                !0 === a.hasClass("audioplayer-tobe") && window.dzsap_init && dzsap_init(a, {
                    init_each: !0
                })
            }
            ))
        }
        ,
        async function(e, a) {
            return new Promise(((e,a)=>{
                if (window.jQuery)
                    e("jQuery loaded");
                else {
                    var i = document.createElement("script");
                    i.onload = function() {
                        window.jQuery ? e("jQuery loaded") : a("error loading")
                    }
                    ,
                    i.src = t.O.URL_JQUERY,
                    document.head.appendChild(i)
                }
                setTimeout((()=>{
                    a("error loading")
                }
                ), 15e3)
            }
            ))
        }().then((()=>{
            !function(a) {
                window.dzsap_list_for_sync_build = function() {}
                ,
                Math.easeIn = function(e, a, t, i) {
                    return -t * (e /= i) * (e - 2) + a
                }
                ,
                e.assignHelperFunctionsToJquery(a),
                a.fn.audioplayer = function(t) {
                    var i, s = Object.assign({}, __webpack_require__(424).P);
                    i = e.convertPluginOptionsToFinalOptions(this, s, t),
                    this.each((function() {
                        return new b(this,i,a),
                        this
                    }
                    ))
                }
                ,
                p.registerToJquery(a)
            }(jQuery),
            jQuery(document).ready((function(a) {
                a("body").append('<style class="dzsap--style"></style>'),
                window.dzsap__style = a(".dzsap--style"),
                a(document).on("focus.dzsap", "input", (function() {
                    window.dzsap_currplayer_focused = null
                }
                )),
                a("audio.zoomsounds-from-audio").each((function() {
                    var e = a(this);
                    e.after('<div class="audioplayer-tobe auto-init skin-silver" data-source="' + e.attr("src") + '"></div>'),
                    e.remove()
                }
                )),
                dzsag_init(".audiogallery.auto-init", {
                    init_each: !0
                }),
                e.jQueryAuxBindings(a)
            }
            )),
            e.registerTextWidth(jQuery),
            jQuery(document).ready((function(e) {
                window.dzsap_init_allPlayers(e)
            }
            ))
        }
        )).catch((e=>{
            console.log(e)
        }
        )),
        window.dzsap_init = function(a, t) {
            if (void 0 !== t && void 0 !== t.init_each && !0 === t.init_each) {
                var i = 0;
                for (var s in t)
                    i++;
                1 === i && (t = void 0),
                jQuery(a).each((function() {
                    var e = jQuery(this);
                    t && void 0 === t.call_from && (t.call_from = "dzsap_init"),
                    e.audioplayer(t)
                }
                ))
            } else
                jQuery(a).audioplayer(t);
            window.dzsap_lasto = t,
            e.dzsapInitjQueryRegisters()
        }
        ,
        e.miscFunctions()
    }
    )()
}
)();
//# sourceMappingURL=audioplayer.js.map
