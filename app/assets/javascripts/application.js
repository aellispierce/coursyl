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

$(function() {
  deleteEmptyRow();
  $(".new-association").on("click", addRow);
  $("#update_course_button").on("click", disableButton);
  $(".delete-association").on("click", deleteSection);
  $( "#startdatepicker" ).datepicker({dateFormat: "yy-mm-dd"});
  $( "#enddatepicker" ).datepicker({dateFormat: "yy-mm-dd"});
});

function disableButton() {
  setTimeout(function() {
    $("#save_btn").attr("disabled", "disabled")
  }, 1);
}

function deleteEmptyRow() {
  $("#table").children().last().css("display", "none");
}
function addRow() {
  $("#table").children().last().css("display", "inline");
  return false;
}


function deleteSection(event) {
  $(event.target).closest(".association").css("display", "none");
  return false;
}
