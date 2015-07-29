$(document).ready(function() {
  var innerH = innerHeight;
  var innerW = innerWidth;
  $("header").css("height", innerH*0.32);
  $("#bottom").css("height", innerH*0.68);
  $("#about").css("height", innerH*0.35);
  $("#about_box").css("height", innerH*0.35);
  $("#project_box").css("height", innerH * 0.35 * .483);
  $("#experience_box").css("height", innerH * 0.35 * .483);
  $("#hobbies_box").css("height", innerH*0.17);
  $("#projExp").css("height", innerH*0.35);
  $("#hobbies").css("height", innerH*0.17);
/* jQuery.data(window, "size", innerW);

  function resizeFont(deltaVal) {
    var fontSize = $("#projExp").css("fontSize");
    $("#projExp").css("fontSize", 
    parseFloat(fontSize, 10) + parseFloat(deltaVal, 10));
  }

  $(window).resize(function() {
    if ($(window).innerWidth() > 750) {
          if ($(window).innerWidth() < jQuery.data(window, "size")) {
              resizeFont(-0.2);
          }
          else if ($(window).innerWidth() == window.screen.width) { 
              $("#projExp").css("fontSize", "500%"); 
          }
          else if ($(window).innerWidth() > jQuery.data(window, "size")) { 
              resizeFont(0.2); 
          }
          jQuery.data(window, "size", $(window).innerWidth());
    };
  });
*/    
    
    if ($(window).innerWidth() > 750) {
        $("#about").mouseenter(function () {
            $("#about_box").slideDown("fast");
        });
        $("#about").mouseleave(function() {
            $("#about_box").slideUp("fast");
    });
        $("#projects").mouseenter(function () {
            $("#project_box").slideDown("fast");
        });
        $("#projects").mouseleave(function() {
            $("#project_box").slideUp("fast");
    });
        $("#experiences").mouseenter(function () {
            $("#experience_box").slideDown("fast");
        });
        $("#experiences").mouseleave(function() {
            $("#experience_box").slideUp("fast");
    });
        $("#hobbies").mouseenter(function () {
            $("#hobbies_box").slideDown("fast");
        });
        $("#hobbies").mouseleave(function() {
            $("#hobbies_box").slideUp("fast");
    });
    };
});
    