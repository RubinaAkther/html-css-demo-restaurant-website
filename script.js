$(document).ready(function() {
  $(".menu-btn-icon").click(function() {
    $(".menu-bar, .side-bar").addClass("work")
  });

  $(".close-btn-icon, .menu-bar").click(function() {
    $(".menu-bar, .side-bar").removeClass("work")
  });

  
})