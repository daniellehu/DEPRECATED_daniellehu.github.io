$(document).ready(aboutFunction);
$(window).on('resize', aboutFunction);

function openNav() { 
    $(".navBox").animate({
            width: parseInt($("header").css("height")) * 3
            }, "slow", function () {
            $("header ul").fadeIn(200);
            $(this).animate({
            height: $("header ul").css("height")});
            });

    $(".arrow").animate({
        right: parseInt($("header").css("height")) * 3 -
                parseInt($(".arrow").css("width")),
        borderLeftColor: "#000000",
        borderRightColor: jQuery.Color("#abcdef").
        transition("transparent", 1) 
    }, "slow", "swing");
}
function closeNav() {
     $("header ul").fadeOut(300);
     $("header div").animate({
            height: $("header").css("height")
            }, "fast", function() {
            $("header div").animate({
            width: $("header").css("height") });
     });
     $(".arrow").animate({
        right: 0,
        borderLeftColor: jQuery.Color("#abcdef").
        transition("transparent", 1),
        borderRightColor:  "#000000" });
    }


function aboutFunction() {
    if ($(window).innerHeight()*0.15 < 90) {
        $("header").css("height", 90);
        $("section").css("top", 90); }
    else { 
        $("header").css("height", $(window).innerHeight()*0.15);
        $("section").css("top", $(window).innerHeight()*0.15); }
    

    if ($(window).innerWidth() < 750) { //mobile phones
        $("header h1").text("D.Hu");
        $("#r3c1 p").html("Click <a href='Resume.pdf' download>\
                       <em>here</em></a> to download a copy of\
                       my résumé");
        $("#skillArrow").click(function () {
            $("#skillArrow").hide("fast", function() {
                $("#r2c1 p").show(500, function() {
                $(".skillOutline").fadeIn(1000, "swing");
                });
            });
        });
    }
    else {
        $("header h1").text("Danielle Hu");
        $("#r3c1 p").html("Click the document on the right to \
                          download a copy of my résumé!");
      
    }
    
    if ($(window).innerWidth() < 992 && $(window).innerWidth() >= 750) {
        $("#skillArrow").click(function () {
            $("#skillArrow").hide("fast", function() {
                $("#r2c1 p").show(500, function() {
                $(".skillOutline").fadeIn(1000, "swing");
                });
            });    
        });
        $("#lightbulb_bg").css("height", $("#row2").css("height"));
        $("#r1c1").css("height", $("#row1 img").css("height"));
        $("#row3 a").mouseenter(function () {
            $("#row3 img").attr("src", "photos/resume-hover.jpg");
        });
        $("#row3 a").mouseleave(function () {
            $("#row3 img").attr("src", "photos/resume.jpg");
        });
    
    }
    else {
        $("#r1c1").css("height", "auto");
        $("#lightbulb_bg").css("height", "auto");
    }
    
    if ($(window).innerWidth() >= 992) {
        var elemWidth = (parseInt($("r1c1").css("width")) +
        parseInt($("row1 img").css("width") - 50 + 60))
        $("#r1c1").css("height", $("#row1 img").css("height"));
        $("#r3c1").css("height", $("#row3 img").css("height"));
        $("#lightbulb_bg").css("height", $("#row2").css("height"));
        $("#r3c1").css("height", $("#row3 img").css("height"));
        if (parseInt($("#row2 img").css("height")) >
            parseInt($("#lightbulb_bg").css("height"))) {
            $("#r2c1").css("height", $("#row2 img").css("height"));
        }
        else {
            $("#r2c1").css("height", $("#lightbulb_bg").css("height"));
        }
    }
    else {
        $("#r1c1").css("height", $("#row1 img").css("auto"));
        $("#r3c1").css("height", $("#row3 img").css("height"));
        $("#lightbulb_bg").css("height", "auto");
        $("#r2c1").css("height", "auto");
    }
    
    if ($(window).innerWidth() < 992) { //for the navBar on smaller devices
        $(".navBox").css({
            height: $("header").css("height"),
            width: $("header").css("height") });
        $(".arrow").css("top", parseInt($("header").css("height"))/4);

        $(".navBox").click(openNav);
        $("section").click(closeNav);
        
    }
}