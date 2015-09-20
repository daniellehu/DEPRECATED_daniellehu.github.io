$(document).ready(function() {homeFunction("docReady")});
$(window).on('resize', function() {homeFunction("docResize")});


function homeFunction(status) {    
    if ($(window).innerWidth() > 1142) {
        $(".bg-img").css({
            width: $(window).innerWidth()});
    }
    else if ($(window).innerWidth() < 1142) {
        $(".bg-img").css('width', 1142);
    }
    if ($(window).innerWidth() < 768) {
        $("section h1").text("D.Hu");
        $("section p").text("");
    }
    else {
        $("section h1").text("Danielle Hu");
        $("section p").text("welcome to the personal website of");
    }
    
    //Action commands
    if (status == "docReady") {
    }
}
