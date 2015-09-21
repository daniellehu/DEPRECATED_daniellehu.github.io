function positionProjects() {
       //positioning projects
    $("#one").css("top", $(".intro").css("height"));
    $("#two").css("top", parseInt($("#one").css("height"))+
                 parseInt($("#one").css("top")));
    $("#three").css("top", parseInt($("#two").css("height"))+
                 parseInt($("#two").css("top")));
}

function projectsFunction(status) {
    //Navigation Bar on mobile
    $("nav").css("height", $(window).innerHeight());
    if ($(window).innerWidth() < 365) {
        $("header h1").text("D.Hu");    
    }
    else {
        $("header h1").text("Danielle Hu");   
    }
    
    if ($(window).innerWidth() > 992) {
        $(".project").css("top", $(".intro").css("height"));
    }
    else {
        $(".project").css("top", "auto");   
    }
    
    console.log("JS running fine");
 
    
    //Action commands
    if (status == "docReady") {
        $("#navigation-button").click(function() {
            $("nav").toggleClass("slide-on");
            $("section").toggleClass("section-slide");
            $("#navigation-button").toggleClass("navigation-button-on");
            if ($("nav").attr("class") == "slide-off slide-on") {
                $("body").css({
                position: "fixed", 
                overflow: "scroll",
                width: "100%"
            }); }
            else {
                $("body").css({
                position: "static", 
                overflow: "scroll",
                width: "100%"
            }); }
        });
        $("section").click(function() {
            if ($("section").attr("class") == "section-slide") {
                $("nav").addClass("slide-off").removeClass("slide-on");
                $("#navigation-button").toggleClass("navigation-button-on");
                $("section").removeClass("section-slide");
                $("body").css({
                position: "static", 
                overflow: "scroll",
                width: "100%"
            });
            }
        });
        $(".project").click(function() {
            $(this).children(".project-content").slideToggle(300);
        });
    }
}

$(document).ready(function() {projectsFunction("docReady")});
$(window).on('resize', function() {projectsFunction("docResize")});