function aboutFunction(status) {
    
    if ($(window).innerHeight()*0.15 < 90) {
        $("header").css("height", 80);
        $("section").css("top", 80); }
    else { 
        $("header").css("height", $(window).innerHeight()*0.15);
        $("section").css("top", $(window).innerHeight()*0.15); }
    

    if ($(window).innerWidth() < 750) { //mobile phones
        $("header h1").html("<a href='../../main.html'>D.Hu</a>");
        $("#r3c1 p").html("Click <a href='Resume.pdf' download>\
                       <em>here</em></a> to download a copy of\
                       my résumé");
    }
    else {
        $("header h1").text("Danielle Hu");
        $("#r3c1 p").html("Click the document on the right to \
                          download a copy of my résumé!");
      
    }
    
    if ($(window).innerWidth() < 992 && $(window).innerWidth() >= 750) {
        $("#lightbulb_bg").css("height", $("#row2").css("height"));
        $("#r1c1").css("height", $("#row1 img").css("height"));
        
    
    }
    else {
        $("#r1c1").css("height", "auto");
        $("#lightbulb_bg").css("height", "auto");
    }
    
    if ($(window).innerWidth() >= 992) {
        $("#r1c1").css("height", $("#row1 img").css("height"));
        $("#r3c1").css("height", $("#row3 img").css("height"));
        $("#lightbulb_bg").css("height", $("#row2").css("height"));
        $("#r3c1").css("height", $("#row3 img").css("height"));
        $("header ul").css("display", "block");
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
    }
    
    if (status == "docReady") { //action functions
        $(".navBox").click(function() {
            $("header ul").addClass("show-menu");
            $("section").animate({
                opacity: 0.5 }, 400);
        });
        $("section").click(function() {
            $("header ul").removeClass("show-menu");
            $("section").animate({
                opacity: 1.0 }, 400);
        });
        
        $("#row3 a").mouseenter(function () {
            $("#row3 img").attr("src", "resume-hover.jpg");
        });
        $("#row3 a").mouseleave(function () {
            $("#row3 img").attr("src", "resume.jpg");
        });
        $("#skillArrow").click(function () {
            $("#skillArrow").hide("fast", function() {
                $("#r2c1 p").show(500, function() {
                $(".skillOutline").fadeIn(1000, "swing");
                });
            });    
        });
    }
}

$(document).ready(function() {aboutFunction("docReady")});
$(window).on('resize', function() {aboutFunction("docResize")});
