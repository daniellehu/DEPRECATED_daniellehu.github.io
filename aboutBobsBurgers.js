$(document).ready(function() {

    if ($(window).innerWidth() < 880) {
        $("header div").css("height", $("header").css("height"));
        $("header div").css("width", $("header").css("height"));
        $(".arrow").css("top", parseInt($("header").css("height"))/4);
        
        function openNav() { 
            $("header div").animate({
                    width: parseInt($("header").css("height")) * 3
                    }, "slow", "swing");
            $("header ul").fadeIn(500);
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
            };
        
        $("header div").click(openNav);
        $("header div").mouseenter(function () {
            $(".arrow").css("opacity", "0.8"); });
        $("header div").mouseleave(function () {
            $(".arrow").css("opacity", "0.3"); });
        $("section").click(closeNav);
        
    }
    
    if ($(window).innerWidth() > 992) {
        var innerH = $(window).innerHeight();
        var r1 = $("#row1 img").height();
        var r2 = $("#row2 img").height();
        var r3 = $("#row3 img").height();
        var contactWidth = parseInt($("#row1 img").width()) +
                           parseInt($("#r1c1").width()) + 23
        var top1 = $("row1").css("top");
        var top2 = $("row2").css("top");
        var top3 = $("row3").css("top");
        var top4 = $("row4").css("top");
        $("header").css("height", innerH * 0.15);
        $("section").css("marginTop", innerH * 0.15);
        $("section").css("marginBottom", innerH * 0.15);
        $("#r1c1").css("height", r1);
        $("#r2c1").css("height", r2);
        $("#row3").css("height", r3);
        $("#r3c1").css("height", r3);
        $("#contact").css("height", r2);
        $("#contact").css("width", contactWidth);

        $("#row3 a").mouseenter(function () {
            $("#row3 img").attr("src", "photos/resume-hover.jpg");
        });
        $("#row3 a").mouseleave(function () {
            $("#row3 img").attr("src", "photos/resume.jpg");
        });
        
        }

        else if ($(window).innerWidth() > 768) {
        $("header").css("height", $(window).innerHeight() * 0.15);
        $("section").css("marginTop", $(window).innerHeight() * 0.15);
        $("#r1c1").css("height", $("#row1 img").height());
        $("#row2 img").attr("src", "photos/lightbulb-sm.jpg");
        $("#r2c1").css("height", $("#row2 img").height());
        $("#row2").css("top", parseInt($("#row1").css("top"))+
                        parseInt($("#row1").css("height")));
        $("#r3c1").css("height", $("#row3 img").height());
        $("#row3").css("top", parseInt($("#row2").css("top"))+
                        parseInt($("#row2").css("height")));
        $("#row4").css("top", parseInt($("#row3").css("top"))+
                        parseInt($("#row3").css("height")));
        $("#row4").css("height", $("#row1 img").height());
        $("#row4").css("width", parseInt($("#r1c1").width())+
                        parseInt($("#row1 img").width())*0.95);
        
    }
    
    else {
        $("header").css("height", $(window).innerHeight() * 0.15);
        $("section").css("marginTop", $(window).innerHeight() * 0.15);
     
        $("#r1c1 p").css("fontSize", 14);
        $("#r2c1").css("height", $("#row1 img").height());
        $("#row2").css("top", parseInt($("#r1c1").css("height"))+
                      parseInt($("#row1").css("top"))+14);
        $("#row3").css("top", parseInt($("#row2").css("top"))+
                        parseInt($("#row2").css("height")));
        $("#r3c1").css("height", $("#row3 img").height());
        $("#row4").css("top", parseInt($("#row3").css("top"))+
                        parseInt($("#row3").css("height")));
        $("#row4").css("height", $("#row1 img").height());
        $("#row4").css("width", $("#row1").width());
        $("#contact").css("height", $("#row1 img").height());
        
        $("#row1 img").css("display", "none");
        $("#row2 img").css("display", "none");
            if ($(window).innerWidth() < 550){
                $("header h1").text("D.Hu");
            }
        }

    $(window).resize(function () {
        if ($(window).innerWidth() > 992) {
        $("header").css("height", $(window).innerHeight() * 0.15);
        $("section").css("marginTop", $(window).innerHeight() * 0.15);
        $("section").css("marginBottom", $(window).innerHeight() * 0.15);
        $("#r1c1").css("height", $("#row1 img").height());
        $("#r2c1").css("height", $("#row2 img").height());
        $("#row3").css("height", $("#row3 img").height());
        $("#r3c1").css("height", $("#row3 img").height());
        $("#contact").css("height", $("#row2 img").height());
        $("#contact").css("width", parseInt($("#row1 img").width()) +
                           parseInt($("#r1c1").width()) + 23);
        $("#row3 a").mouseenter(function () {
            $("#row3 img").attr("src", "photos/resume-hover.jpg");
        });
        $("#row3 a").mouseleave(function () {
            $("#row3 img").attr("src", "photos/resume.jpg");
        });
        $("#row2").css("top", 0);
        $("#row3").css("top", 0);
        $("#row4").css("top", 0);
        $("#row4").css("width", $(window).innerWidth());
        $("#row2 img").attr("src", "photos/lightbulb.jpg");
        $("#r1c1 p").css("fontSize", "1.1vw");
        }

        else if ($(window).innerWidth() > 768) {
        $("header").css("height", $(window).innerHeight() * 0.15);
        $("section").css("marginTop", $(window).innerHeight() * 0.15);
        $("#r1c1").css("height", $("#row1 img").height());
        $("#row2 img").attr("src", "photos/lightbulb-sm.jpg");
        $("#r2c1").css("height", $("#row2 img").height());
        $("#row2").css("top", $("#row1").css("top"));
        $("#row2").css("top", parseInt($("#row1").css("top"))+
                        parseInt($("#row1").css("height")));
        $("#row3").css("top", parseInt($("#row2").css("top"))+
                        parseInt($("#row2").css("height")));
        $("#r3c1").css("height", $("#row3 img").height());
        $("#row4").css("top", parseInt($("#row3").css("top"))+
                        parseInt($("#row3").css("height"))+70);
        $("#row4").css("height", $("#row1 img").height());
        $("#row4").css("width", parseInt($("#r1c1").width())+
                        parseInt($("#row1 img").width())*0.95);
        $("#contact").css("height", $("#row1 img").height());
        $("#contact").css("width", parseInt($("#r1c1").width())+
                        parseInt($("#row1 img").width())*0.95);
        
        $("#row1 img").css("display", "block");
        $("#row2 img").css("display", "block");
        $("#row3 img").css("display", "block");
        
        if ($(window).innerWidth() < 880) {
                $("header div").css("height", $("header").css("height"));
                $("header div").css("width", $("header").css("height"));
                $(".arrow").css("top", parseInt($("header").css("height"))/4);
                
        }
        else { $("header ul").fadeIn(500); }
        $("#r1c1 p").css("fontSize", "1.4vw");
        }
        
        else {
        
        if ($(window).innerWidth() < 880) {
            $("header div").css("height", $("header").css("height"));
            $("header div").css("width", $("header").css("height"));
            $(".arrow").css("top", parseInt($("header").css("height"))/4);
          

        }
        $("header").css("height", $(window).innerHeight() * 0.15);
        $("section").css("marginTop", $(window).innerHeight() * 0.15);
        $("#r1c1").css("height", parseInt($("#r1c1 p").css("height"))+
                      parseInt($("#r1c1 p").css("marginTop"))*2);  
        $("#r1c1 p").css("fontSize", 14);
        $("#r2c1").css("height", $("#row1 img").height());
        $("#row2").css("top", $("#row1").css("top"));
        $("#row2").css("top", parseInt($("#row1").css("height"))+
                      parseInt($("#row1").css("top")));
        $("#row3").css("top", parseInt($("#row2").css("top"))+
                        parseInt($("#row2").css("height")));
        $("#r3c1").css("height", $("#row3 img").height());
        $("#row4").css("top", parseInt($("#row3").css("top"))+
                        parseInt($("#row3").css("height")));
        $("#row4").css("height", $("#row1 img").height());
        $("#row4").css("width", $("#row1").width());
        $("#contact").css("height", $("#row1 img").height());
        
        $("#row1 img").css("display", "none");
        $("#row2 img").css("display", "none");
        if ($(window).innerWidth() < 550){
                $("header h1").text("D.Hu");
            }
        else { $("header h1").text("Danielle Hu"); }
        }
    });
  
});