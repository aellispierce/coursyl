// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function disableFunction() {
  document.getElementById("save_btn").disabled = true;
}
function disableButton() {
  setTimeout(disableFunction, 1);
}

function hideEmptyRow() {
  var table= document.getElementById("table");
  table.lastElementChild.style.display = "none";
}


function hideSection(i) {
  var row = document.getElementById(i);
  row.style.display = "none";

}

function smoothScroll(location) {
  element_to_scroll_to = document.getElementById(location);
  element_to_scroll_to.scrollIntoView();
}

document.onload= hideEmptyRow();
