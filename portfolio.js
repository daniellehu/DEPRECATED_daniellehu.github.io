$(document).ready(function() {homeFunction("docReady")});
$(window).on('resize', function() {homeFunction("docResize")});

var winHeight = $(document).innerHeight();
var $window = $(window);
var $animationContainer = $(".animation-container");
var experiences_leftArr = [], experiences_rightArr = [$("#ysp"), $("#ece"), $("#hci"), $("#quad")], experiences_current = $("#ms");
var projects_leftArr = [], projects_rightArr = [$("#ezzy"), $("#piairno"), $("#snaps"), $("#philly"), $("#website"), $("#earth")], projects_current = $("#wikigen");
var contentID;
var me = ["Undergraduate", "Developer", "Designer", "Photographer", "Foodie", "Hiker"];
var meIndex = 0;

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animationContainer, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      if ($element.hasClass('skills-container')) {
          $element.addClass('in-view-skills');   
      } else {
          $element.addClass('in-view-classes');
      }
    } else { 
      if ($element.hasClass('skills-container')) {
          $element.removeClass('in-view-skills');   
      } else {
          $element.removeClass('in-view-classes');
      }
    }
  });
}

function homeFunction(status) {
    
    if ($window.innerWidth() < 600) {
        $(".about-content h1").html("D.<span class='important'>HU</span>");
        $(".about-content pre").html("Student @<br>Carnegie Mellon University <br>Class of 2018<br>" +
                                     "Electrical and Computer Engineering<br><span class='important'>" +
                                     "&</span> Human Computer Interaction<br><br>" +
                                     "email: <span class='important'>daniellh@andrew.cmu.edu</span><br>" +
                                     "website: <span><a class='important' target='_blank'" +
                                     "href='http://www.daniellehu.com'>www.daniellehu.com</a></span></pre>");
        $(".project-video").hide();
        
        $("#ms img").attr("src", "pages/experiences/img/microsoft-m.gif");
        $("#quad img").attr("src", "pages/experiences/img/quadrotor-m.gif");
        $("#hci img").attr("src", "pages/experiences/img/hcii-m.gif");
        $("#ece img").attr("src", "pages/experiences/img/ece-m.gif");
        $("#ysp img").attr("src", "pages/experiences/img/ysp-m.gif");
    }
    else {
        $(".about-content h1").html("DANIELLE <span class='important'>HU</span>");
        $(".about-content pre").html("Student @ Carnegie Mellon University | Class of 2018<br>" +
                                     "                                                                   " +
                                     "Electrical and Computer Engineering <span class='important'>&</span><br>" +
                                     "                                                                   " +
                                     "Human Computer Interaction<br>" + 
                                     "                                                                   " +
                                     "<span class='important' id='me'>" + me[meIndex] + "</span>" +
                                     "<br><br>" +
                                     "email: <span class='important'>daniellh@andrew.cmu.edu</span></pre>");
        $(".project-video").show();
        $("#ms img").attr("src", "pages/experiences/img/microsoft.gif");
        $("#quad img").attr("src", "pages/experiences/img/quadrotor.gif");
        $("#hci img").attr("src", "pages/experiences/img/hcii.gif");
        $("#ece img").attr("src", "pages/experiences/img/ece.gif");
        $("#ysp img").attr("src", "pages/experiences/img/ysp.gif");
    }
    
    //Action commands
    if (status == "docReady") {
        
        if (($window.innerHeight() < 853 && $window.innerWidth() >= 1388) || 
            ($window.innerWidth() < 1388)) {
            $("#about").css("height", 853);
            $("#experiences").css("height", 853);
            $("#projects").css("height", 853);
            $("#skills").css("height", 853);
            $("#classes").css("height", 853);
            $("#more").css("height", 853);
        }
        else {
            $("#about").css("height", winHeight);
            $("#experiences").css("height", winHeight);
            $("#projects").css("height", winHeight);
            $("#skills").css("height", winHeight);
            $("#classes").css("height", winHeight);
            $("#more").css("height", winHeight);
        }
        
        setInterval(function() {
            if (meIndex + 1 == me.length) {
                meIndex = 0;
            }
            else {
                meIndex += 1;   
            }
            $("#me").html(me[meIndex]);
        }, 2000);
        $window.on('scroll resize', check_if_in_view);
        window.onbeforeunload = function(){
            window.scrollTo(0,0);
        }
        $window.trigger('scroll');
        $("#experiences_left-arrow").hide();
        $("#projects_left-arrow").hide();
        
        //https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
        
        // Card logic
        $("#experiences_right-arrow").click(function () {
            var current, new_current;
            current = experiences_current;
            new_current = experiences_rightArr.pop();
            
            experiences_leftArr.push(current);
            
            current.addClass("card-hidden");
            if (current.hasClass("card-unhidden")) {
                current.removeClass("card-unhidden");
            }
            
            if (experiences_rightArr.length === 0) {
                $("#experiences_right-arrow").hide();
            }
            else {
                $("#experiences_left-arrow").show();
            }
            
            setTimeout(function () {
                current.hide();
            }, 500);
            experiences_current = new_current;
        });
        $("#experiences_left-arrow").click(function () {
            var current, new_current;
            current = experiences_current;
            new_current = experiences_leftArr.pop();
            
            experiences_rightArr.push(current);
            
            new_current.show();
            experiences_current = new_current;
            new_current.addClass("card-unhidden");
            new_current.removeClass("card-hidden");
            
            // arrow logic
            if (experiences_leftArr.length === 0) {
                $("#experiences_left-arrow").hide();
            }
            else {
                $("#experiences_right-arrow").show();
            }
        });
        $("#projects_right-arrow").click(function () {
            var current, new_current;
            current = projects_current;
            new_current = projects_rightArr.pop();
            
            projects_leftArr.push(current);
            
            current.addClass("card-hidden");
            if (current.hasClass("card-unhidden")) {
                current.removeClass("card-unhidden");
            }
            
            if (projects_rightArr.length === 0) {
                $("#projects_right-arrow").hide();
            }
            else {
                $("#projects_left-arrow").show();
            }
            
            setTimeout(function () {
                current.hide();
            }, 500);
            projects_current = new_current;
        });
        $("#projects_left-arrow").click(function () {
            var current, new_current;
            current = projects_current;
            new_current = projects_leftArr.pop();
            
            projects_rightArr.push(current);
            
            new_current.show();
            projects_current = new_current;
            new_current.addClass("card-unhidden");
            new_current.removeClass("card-hidden");
            
            // arrow logic
            if (projects_leftArr.length === 0) {
                $("#projects_left-arrow").hide();
            }
            else {
                $("#projects_right-arrow").show();
            }
        });
        $(".card").click(function () {
            contentID = "#" + $(this).attr("id") + "-content";
            $(contentID).addClass("card-content_opened");
            $("html, body").css("overflowY", "hidden");
            $(".card-content_load2s, .card-content_load1s").css("animation-play-state", "running");
            $(".card-content_load2s, .card-content_load1s").css("-webkit-animation-play-state", "running");
        });
        $(".card-x").click(function() {
            $(contentID).removeClass("card-content_opened"); 
            $("html, body").css("overflowY", "auto");
        });
    }
    else if (status == "docResize") {
    
    }
}
