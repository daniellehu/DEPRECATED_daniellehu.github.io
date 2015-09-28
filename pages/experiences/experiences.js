$(document).ready(function() {experiencesFunction("docReady")});
$(window).on('resize', function() {experiencesFunction("docResize")});


function experiencesFunction(status) {    
    $("#bg h1").css("width", $(window).innerWidth());
    $(".bottom-content").css("height", $(window).innerHeight()+100);
    if ($(window).innerWidth() < 992) {
        $(".bg-img").css("width", "992px");
        $(".bottom-content").css("max-width", $(window).innerWidth());
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
        
        //Changing HTML content to move images
        $("#quadrotor-mobile").html(" \
                    <h2>CMU Quadrotor - Robotics</h2>\
                    <div class='text'>\
                    <h3>September 2014 - Present</h3>\
                    <p>Started out as a TA for a student taught course (STUCO) at Carnegie Mellon University. Helped develop the curriculum and materials needed for the deployment of the actual class in Spring 2015. The class was geared towards non-technical students who wanted to learn more about 'hobbyism' and aerial robotics. Towards the end of Spring 2015, Quadrotor STUCO merged with Quadrotor Robotics, creating the Quadrotor Project.\
                        We are a group of students who are now involved with research and development aspects of Quadrotor, while also maintaining ties with education. Quad Academy is a subdivision of CMU Quadrotor Project.</p></div>\
                    <img src='img/quadrotor.gif' class='photos photos-left'>");
        $("#ysp-mobile").html('\
                    <h2>Independent Research Project - YSP</h2>\
                    <div class="text">\
                        <h3>June 2013 - July 2013</h3>\
                        <p>Research with Dr. Kun Yang on the subject of <b>quantum entanglement </b> and its effects on the advancement of modern technology. Researched in the National High Magnetic Field Laboratory in Tallahassee, FL. Presented research findings in poster session for staff members of Florida State University. This research project derived from the Young Scholars Program at FSU, a STEM-based program for rising juniors in Florida.</p></div><img src="img/ysp.gif" class="photos photos-left">');
        $("#bg h2").html("been there,<br>done that.");
    }
    else {
        $(".bg-img").css("width", $(window).innerWidth());
        $(".bottom-content").css("max-width", "100%");
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
        
        //Changing HTML content to move images back
        $("#quadrotor-mobile").html("<img src='img/quadrotor.gif' class='photos photos-left'> \
                    <h2>CMU Quadrotor - Robotics</h2>\
                    <div class='text'>\
                    <h3>September 2014 - Present</h3>\
                    <p>Started out as a TA for a student taught course (STUCO) at Carnegie Mellon University. Helped develop the curriculum and materials needed for the deployment of the actual class in Spring 2015. The class was geared towards non-technical students who wanted to learn more about 'hobbyism' and aerial robotics. Towards the end of Spring 2015, Quadrotor STUCO merged with Quadrotor Robotics, creating the Quadrotor Project.\
                        We are a group of students who are now involved with research and development aspects of Quadrotor, while also maintaining ties with education. Quad Academy is a subdivision of CMU Quadrotor Project.</p></div>\
                    ");
        $("#ysp-mobile").html('<img src="img/ysp.gif" class="photos photos-left">\
                    <h2>Independent Research Project - YSP</h2>\
                    <div class="text">\
                        <h3>June 2013 - July 2013</h3>\
                        <p>Research with Dr. Kun Yang on the subject of <b>quantum entanglement </b> and its effects on the advancement of modern technology. Researched in the National High Magnetic Field Laboratory in Tallahassee, FL. Presented research findings in poster session for staff members of Florida State University. This research project derived from the Young Scholars Program at FSU, a STEM-based program for rising juniors in Florida.</p></div>');
        $("#bg h2").html("been there, done that.");
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