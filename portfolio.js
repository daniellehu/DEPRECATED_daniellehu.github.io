$(document).ready(function() {homeFunction("docReady")});
$(window).on('resize', function() {homeFunction("docResize")});

var winHeight = $(document).innerHeight();
var $window = $(window);
var $animationContainer = $(".animation-container");

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
    if ($window.innerHeight() < 853 && $window.innerWidth() >= 1388) {
        $("#about").css("height", 853);
        $("#experiences").css("height", 853);
        $("#projects").css("height", 853);
        $("#skills").css("height", 853);
        $("#classes").css("height", 853);
        $("#more").css("height", 853);
    }
    else if ($window.innerWidth() < 1388) {
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
    
    //Action commands
    if (status == "docReady") {
        
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        
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
        
    }
}
