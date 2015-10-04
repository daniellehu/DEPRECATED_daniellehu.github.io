$(document).ready(function() {interestsFunction("docReady")});
$(window).on('resize', function() {interestsFunction("docResize")});

function imgLoaded(img){
            var $img = $(img);
            $img.parent().addClass('loaded');
        };

function interestsFunction(status) {    
    
    if ($(window).innerWidth() < 992) {
        $(".bg-img").css("width", "992px");
        $(".bottom-content").css("max-width", $(window).innerWidth());
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
        
        //Change to mobile pictures
        if ($(".column img").attr("src").search('-mobile.jpg') == -1) {
            for (var i = 0; i < 6; i++) { //6 interests
                imgIndex = ".column img:eq(" + i + ")"
                imgName = $(imgIndex).attr("src");
                imgLength = imgName.length;
                imgName = imgName.substring(0, imgLength-4) + "-mobile.jpg";
                $(imgIndex).attr("src", imgName);
            }
        }
    }
    else {
        $(".bg-img").css("width", $(window).innerWidth());
        $(".bottom-content").css("max-width", "100%");
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
        
        //Change back to desktop pictures
        if ($(".column img").attr("src").search('-main.jpg') == -1) {
            for (var i = 0; i < 6; i++) {
                imgIndex = ".column img:eq(" + i + ")"
                imgName = $(imgIndex).attr("src");
                imgLength = imgName.length;
                imgName = imgName.substring(0, imgLength-11) + ".jpg";
                $(imgIndex).attr("src", imgName);
            }
        }
    }
    
    //Action commands
    if (status == "docReady") {
        $("#nav-button").click(function() {
            console.log("hi");
            $(".nav-off").toggleClass("nav-on");
            $("h2 a").toggleClass("header-on");
            $(".fa-bars").toggleClass("i-on");
            $(".section-elements").toggleClass("section-on");
            $(".bottom-content").toggleClass("bottom-content-on");
        });
        //To bring up information on Desktop mode
        $(".column").click(function() {
            $(this).next().fadeToggle(300);
            if ($(window).innerWidth() > 992) {
                $("html").css("overflow", "hidden");
            }
        });
        $(".exit-popup").click(function() {
            $(this).parent().fadeOut(300);
            $("html").css("overflow", "scroll");
        });
    }
}
    