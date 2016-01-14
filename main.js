$(document).ready(function() {homeFunction("docReady")});
$(window).on('resize', function() {homeFunction("docResize")});


function homeFunction(status) {
    
    if ($(window).innerWidth() < 768) {
        $("section h1").text("D.Hu");
        $("section p").text("");
    }
    else {
        $("section h1").text("Danielle Hu");
        $("section p").text("welcome to the personal website of");
    }
    
    if ($(window).innerWidth() < 992) {
        $("#about").html("About Me");
        $("#projects").html("Projects Done");
        $("#experiences").html("Experiences / Work");
        $("#interests").html("Things I Find Swell");   
    }
    else {
        $("#about").html("About<br> \
                <span class='white'>Me</span>");
        $("#projects").html("Projects<br> \
                <span class='white'>Done</span>");
        $("#experiences").html("Experiences<br> \
                <span class='white'>/ Work</span>");
        $("#interests").html("Things I<br> \
                <span class='white'>Find Swell</span>");
    }
    //Action commands
    if (status == "docReady") {
        
        function introFunction() {
            $("header").removeClass("intro-header");
            $("#intro-text").html("");
        } 
        setTimeout(introFunction, 3500);
    }
}

//add hover animations