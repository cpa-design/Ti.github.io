(function() {
    var it_id = 1206435;
    var html = "<div id=\"CPABUILD_MODAL\">\r\n    <div id=\"CPABUILDMODALCONTENT\">\r\n        <div id=\"CPABUILDMODALHEADER\">\r\n            <div id=\"CPABUILDMODALTITLE\"><\/div> <\/div>\r\n        <div id=\"CPABUILDMODALBODY\">\r\n            <iframe id=\"CPABUILDOFFERS\" style=\"overflow-y: scroll\" src=\"\"><\/iframe>\r\n        <\/div>\r\n        <div id=\"CPABUILDMODALFOOTER\">\r\n            <p id=\"CPABUILDMODALFOOTERTEXT\"><\/p>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>\r\n";
    var css = "\/content_lockers\/MobileApps\/css.css";
    var cssDIR = "MobileApps";
    var defaultSettings = {
        "instructions": {
            "title": "Instructions",
            "default": "Install an app from the list below to continue.",
            "type": "text"
        },
        "overlay_color": {
            "title": "BG Overlay Color",
            "default": "#000000",
            "type": "color",
            "small": "Background color of overlay"
        },
        "overlay_opacity": {
            "title": "Overlay Opacity",
            "default": "0.4",
            "type": "text",
            "small": "Overlay Opacity (0 for transparent, 1 for opaque)"
        },
        "number_offers": {
            "title": "Number of Offers",
            "default": 4,
            "type": "number",
            "small": "Max of 5 offers."
        },
        "number_offers_required": {
            "title": "Offers Required",
            "default": 1,
            "type": "number",
            "small": "Offers required for unlock."
        },
        "payout_required": {
            "title": "Payout Required (Cents)",
            "default": 1,
            "type": "number",
            "small": "Payout required (in cents). 500 = $5.00"
        },
        "animation": {
            "title": "Entrance Animation",
            "default": "CPABUILD_fadeIn",
            "type": "select",
            "options": {
                "Drop From Top": "CPABUILD_animateTop",
                "Fade In": "CPABUILD_fadeIn",
                "Slide From Right": "CPABUILD_slideRight",
                "Slide Up": "CPABUILD_slideUp",
                "Slide From Right (3D)": "CPABUILD_slideFall",
                "Spin In": "CPABUILD_spinIn"
            }
        },
        "animation_duration": {
            "title": "Animation Duration (ms)",
            "default": "600",
            "type": "number",
            "small": "1000ms = 1 second"
        },
        "onClose": {
            "title": "On Offer Complete",
            "default": "redirect",
            "type": "select",
            "options": {
                "Close Locker": "close_locker",
                "Redirect to URL": "redirect"
            }
        },
        "onCloseURL": {
            "title": "Redirect URL",
            "default": "http:\/\/cpabuild.com\/public\/redirect.php?lead_id=%lead_id%",
            "type": "text",
            "small": "The URL the visitor will hit after completing an offer. Only enabled if option above is set to redirect."
        },
        "disable_right_click": {
            "title": "Disable Right Click",
            "default": "0",
            "type": "toggle",
            "small": "Right click will be disabled for the entire page."
        },
        "escape_key_close": {
            "title": "Escape Key Close",
            "default": "0",
            "type": "toggle",
            "small": "If enabled, user can exit content locker with escape key."
        }
    };
    var userSettings = {
        "instructions": "Complete an Offer below to get your iPhone",
        "overlay_color": "#000000",
        "overlay_opacity": "0.4",
        "number_offers": 5,
        "number_offers_required": 2,
        "payout_required": 1,
        "animation": "CPABUILD_fadeIn",
        "animation_duration": 600,
        "onClose": "close_locker",
        "onCloseURL": "https:\/\/hackmod.me\/iphone11giveaway\/",
        "disable_right_click": 0,
        "escape_key_close": 0
    };
    cpaBuildExecuteWithBody();

    function cpaBuildExecuteWithBody() {
        if (typeof document.getElementsByTagName("body")[0] == "undefined") {
            setTimeout(cpaBuildExecuteWithBody, 1);
        }
        //Specific CSS
        CPABUILDContentLocker.setTemplateCSSDir(cssDIR);

        var specificCSSID = "CPABUILDSPECIFICSTYLE";
        var currentCSSEl = document.getElementById(specificCSSID);
        CPABUILDContentLocker.removeElByID("CPABUILD_MODAL_CONTAINER");
        /*    if(!currentCSSEl){
                addCSSLink();
            }
            else if(currentCSSEl.dataset.it!=it_id){
                {
                    CPABUILDContentLocker.removeElByID(specificCSSID);
                    addCSSLink();
                }
            }*/

        /*    function addCSSLink(){
                var l= document.createElement("link");
                l.setAttribute("data-it",it_id);
                l.rel="stylesheet";
                l.id=specificCSSID;
                l.href=CPABUILDContentLocker.prefix+"templates.cpabuild.com"+css;
                document.getElementsByTagName("head")[0].appendChild(l);
                var currentCSSEl=document.getElementById(specificCSSID);
            }*/


        //HTML
        CPABUILDContentLocker.removeElByID("CPABUILD_MODAL_CONTAINER");
        var d = document.createElement("div");
        d.style = "display:none;";
        d.id = "CPABUILD_MODAL_CONTAINER";
        d.innerHTML = html;
        document.getElementsByTagName("body")[0].appendChild(d);
        CPABUILDContentLocker.defaultSettings = defaultSettings;
        CPABUILDContentLocker.userSettings = userSettings;
        CPABUILDContentLocker.onVarsChange();
    }
})();
