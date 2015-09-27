$(document).ready(function() {projectsFunction("docReady")});
$(window).on('resize', function() {projectsFunction("docResize")});


function projectsFunction(status) {    
    
    
    if ($(window).innerWidth() < 992) {
        $(".bg-img").css("width", "992px");
        $("#bg h1").css("width", $(window).innerWidth());
        $(".bottom-content").css("max-width", $(window).innerWidth());
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
    }
    else {
        $(".bg-img").css("width", $(window).innerWidth());
        $(".bottom-content").css("max-width", "100%");
        $("#bg h1").css("width", $(window).innerWidth());
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
    }
    
    //Action commands
    if (status == "docReady") {
        $("#nav-button").click(function() {
            $(".nav-off").toggleClass("nav-on");
            $("h2 a").toggleClass("header-on");
            $(".fa-bars").toggleClass("i-on");
            $(".section-elements").toggleClass("section-on");
            $(".bottom-content").toggleClass("bottom-content-on");
        });
    }
    
}