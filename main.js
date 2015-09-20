$(document).ready(function() {projectsFunction("docReady")});
$(window).on('resize', function() {projectsFunction("docResize")});


function projectsFunction(status) {
    if ($(window).innerWidth() < 500) {
            $(".middle-bar h1").text("D.Hu");   
        }
    else if ($(window).innerWidth() < 992) {
            $(".middle-bar h1").text("Danielle Hu");
        }

    /*if ($(window).innerWidth() < 992) {
            $(".about").html("<img class='img-responsive' src='photos/about.gif'>");
            $(".projects").html("<img class='img-responsive' src='pages/projects/photos/projects.jpg'>");
            $(".experiences").html("<img class='img-responsive' src='photos/about.gif'>");
            $(".interests").html("<img class='img-responsive' src='photos/interests.jpg'>");
        }
    else {
            $(".about").html("");
            $(".projects").html("");
            $(".experiences").html("");
            $(".interests").html("");   
    }*/
    
    if ($(window).innerWidth() > 992) {
        $("img").css({
            width: $(window).innerWidth()});
        $("section").css("height", $(window).innerHeight());
    }
    
    //Action commands
    if (status == "docReady") {
        //Intro animations (initial text)
        if ($(window).innerWidth() > 992) {
            var introText = document.getElementById("middle-bar-text");
            setTimeout(function() { introText.innerHTML = "D.Hu"; }, 2100);
            setTimeout(function() { introText.innerHTML = "Danielle Hu"; }, 4300);
            //Intro animations continued (fade-in images)
            /*$(".about").delay(5500).fadeIn(500);
            $(".projects").delay(6000).fadeIn(500);
            $(".experiences").delay(6500).fadeIn(500);
            $(".interests").delay(7000).fadeIn(500);*/
        }
        else if ($(window).innerWidth() < 500) {
            $(".middle-bar h1").text("D.Hu");   
        }
        else {
            $(".middle-bar h1").text("Danielle Hu");
        }
    }
}
