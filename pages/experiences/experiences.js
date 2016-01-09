$(document).ready(function() {experiencesFunction("docReady")});
$(window).on('resize', function() {experiencesFunction("docResize")});


function experiencesFunction(status) {    
    $("#bg h1").css("width", $(window).innerWidth());
    $("#bg").css("height", $(".bg-img").css("height"));
    $(".bottom-content").css("width", $(window).innerWidth);
    if ($(window).innerWidth() < 992) {
        $(".bg-img").css("width", "992px");
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
        
        //Changing HTML content to move images
        $("#quadrotor-mobile").html(" \
                    <h2>CMU Quadrotor - Robotics</h2>\
                    <div class='text'>\
                    <h3>September 2014 - Present</h3>\
                    <p>Started out as a TA for a student taught course (STUCO) at Carnegie Mellon University that specialized in Quadrotors. Helped develop the curriculum and materials needed for the deployment of the actual class in Spring 2015. The class was geared towards non-technical students who wanted to learn more about 'hobbyism' and aerial robotics. Towards the end of Spring 2015, Quadrotor STUCO merged with Quadrotor Robotics, creating the Quadrotor Project.</p>\
                    <p>We are a group of students who are now involved with research and development aspects of Quadrotor, while also maintaining ties with education. Quad Academy is a subdivision of CMU Quadrotor Project, and is the specific field which I am involved with.</p>\
                    <p><b>Quad Academy</b> specifically gears towards the development of an easily accessible quadrotor kit and curriculum to deploy to high schools. As a program manager for the team, I am constantly involved with the creation and adaptation of this kit so that the kit is not only academically beneficial to students, but also a propeller in students' future enthusiasm for the STEM field. We're working to create a cost-effective kit that is safe to deploy to high school students, as well as a kit that is self-sufficient. With rising interests and applications in quadcopters, we're able to introduce technical concepts such as physics, hardware engineering, and computer programming all while engaging students' interests in aerial technology. <i>This semester at Carnegie Mellon (Spring 2015), Quad Academy will be teaming up with Project Ignite to deploy our prototype kit to 6 high school students around the local Pittsburgh area. More exciting updates to come!</i></p></div>\
                    <img src='img/quadrotor.gif' class='photos photos-left'>");
        $("#ysp-mobile").html('\
                    <h2>Independent Research Project -<br>Young Scholars Program</h2>\
                    <div class="text">\
                        <h3>June 2013 - July 2013</h3>\
                        <p>Research with Dr. Kun Yang on the subject of <b>quantum entanglement </b> and its effects on the advancement of modern technology. Researched in the National High Magnetic Field Laboratory in Tallahassee, FL. Presented research findings in poster session for staff members of Florida State University. This research project derived from the Young Scholars Program at FSU, a STEM-based program for rising juniors in Florida.</p>\
                        <p><i>For me, this 6 week program means much more than a spot on my résumé. It is where I found myself surrounded by truly remakarble people. People that I tend to forget about as my life piles on with work and laziness. I believe the body of text above does not explain how important this experience really was for me. It is where my interests in the STEM field peaked and ultimately set its track to where I am today; it is where I met people who I look up to and consider not only academic role models, but people that I am really darn lucky to call friends; it is where I found to truly appreciate connections with people that you can goof around with at odd hours in the night and yet still listen to them ramble on about intellectual jargon that is WAY out of my reach.</i></p>\
                        <p><i>From the bottom of my heart YSPers, thank you all for making those 6 weeks memorable, and for showing that nerds can be cool too :).<br> Also thank you Barbara and Erica (and FSU) for allowing me to enjoy such a wonderful experience; it really did make a difference in me. Please keep up the great work!\
                        </i></p></div><img src="img/ysp.gif" class="photos photos-left">');
        $("#bg h2").html("been there,<br>done that.");
    }
    else {
        $(".bg-img").css("width", $(window).innerWidth());
        $(".top-about").css("height", $(".bg-img").css("height"));
        $("#bg").css("height", $(".bg-img").css("height"));
        $("nav").css("height", $("section").css("height"));
        //Changing HTML content to move images back
        $("#quadrotor-mobile").html("<img src='img/quadrotor.gif' class='photos photos-left'>\
                    <h2>CMU Quadrotor - Robotics</h2>\
                    <div class='text'>\
                    <h3>September 2014 - Present</h3>\
                    <p>Started out as a TA for a student taught course (STUCO) at Carnegie Mellon University that specialized in Quadrotors. Helped develop the curriculum and materials needed for the deployment of the actual class in Spring 2015. The class was geared towards non-technical students who wanted to learn more about 'hobbyism' and aerial robotics. Towards the end of Spring 2015, Quadrotor STUCO merged with Quadrotor Robotics, creating the Quadrotor Project.</p>\
                    <p>We are a group of students who are now involved with research and development aspects of Quadrotor, while also maintaining ties with education. Quad Academy is a subdivision of CMU Quadrotor Project, and is the specific field which I am involved with.</p>\
                    <p><b>Quad Academy</b> specifically gears towards the development of an easily accessible quadrotor kit and curriculum to deploy to high schools. As a program manager for the team, I am constantly involved with the creation and adaptation of this kit so that the kit is not only academically beneficial to students, but also a propeller in students' future enthusiasm for the STEM field. We're working to create a cost-effective kit that is safe to deploy to high school students, as well as a kit that is self-sufficient. With rising interests and applications in quadcopters, we're able to introduce technical concepts such as physics, hardware engineering, and computer programming all while engaging students' interests in aerial technology. <i>This semester at Carnegie Mellon (Spring 2015), Quad Academy will be teaming up with Project Ignite to deploy our prototype kit to 6 high school students around the local Pittsburgh area. More exciting updates to come!</i></p></div>");
        $("#ysp-mobile").html('<img src="img/ysp.gif" class="photos photos-left">\
                   <h2>Independent Research Project - Young Scholars Program</h2>\
                    <div class="text">\
                        <h3>June 2013 - July 2013</h3>\
                        <p>Research with Dr. Kun Yang on the subject of <b>quantum entanglement </b> and its effects on the advancement of modern technology. Researched in the National High Magnetic Field Laboratory in Tallahassee, FL. Presented research findings in poster session for staff members of Florida State University. This research project derived from the Young Scholars Program at FSU, a STEM-based program for rising juniors in Florida.</p>\
                        <p><i>For me, this 6 week program means much more than a spot on my résumé. It is where I found myself surrounded by truly remakarble people. People that I tend to forget about as my life piles on with work and laziness. I believe the body of text above does not explain how important this experience really was for me. It is where my interests in the STEM field peaked and ultimately set its track to where I am today; it is where I met people who I look up to and consider not only academic role models, but people that I am really darn lucky to call friends; it is where I found to truly appreciate connections with people that you can goof around with at odd hours in the night and yet still listen to them ramble on about intellectual jargon that is WAY out of my reach.</i></p>\
                        <p><i>From the bottom of my heart YSPers, thank you all for making those 6 weeks memorable, and for showing that nerds can be cool too :).<br> Also thank you Barbara and Erica (and FSU) for allowing me to enjoy such a wonderful experience; it really did make a difference in me. Please keep up the great work!\
                        </i></p></div>');
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