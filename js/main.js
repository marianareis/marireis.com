$(document).ready(function() {
  console.log("hey!");
    var container = document.querySelector('#container');
    var pckry = new Packery( container, {
    // options
    itemSelector: '.item',
    gutter: 0;
  });
});

