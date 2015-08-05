$(document).ready(aboutFunction);
$(window).on('resize', aboutFunction);

function aboutFunction() {
    $("header").css("height", $(window).innerHeight()*0.15);
    $("section").css("top", $(window).innerHeight()*0.15);
    jQuery(".navBox").data('clicked', { hodor: true });
    
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
    }
    
    if ($(window).innerWidth() < 880) { //for the navBar on smaller devices
        $(".navBox").css({
            height: $("header").css("height"),
            width: $("header").css("height") });
        $(".arrow").css("top", parseInt($("header").css("height"))/4);
        
        function openNav() { 
            $(".navBox").animate({
                    width: parseInt($("header").css("height")) * 3
                    }, "slow", function () {
                    $("header ul").fadeIn(200); });
            
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
                    width: $("header").css("height")
                    });
             $(".arrow").animate({
                right: 0,
                borderLeftColor: jQuery.Color("#abcdef").
                transition("transparent", 1),
                borderRightColor:  "#000000" });
            }
        
        
        $(".navBox").click(openNav);
        $("section").click(closeNav);
        
    }
}