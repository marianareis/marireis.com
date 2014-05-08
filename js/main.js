$(document).ready(function() {
  console.log("hey!");
  // listen to click of #trigger
  $("#trigger").on("click", function() {
    $(".about_me").toggleClass("slideDown");
  });
});

