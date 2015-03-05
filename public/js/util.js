'use strict';

$(document).ready(function(){
	$(function() {
	    $.stayInWebApp();
	});
	initializePage();
});

function initializePage() {
	// add any functionality and listeners you want here

  $(".version_a_profile").click(function(){
    woopra.track("a_version_profile_click");
  })

  $(".version_b_profile").click(function(){
    woopra.track("b_version_profile_click");
  })

  $(".version_a_enroll").click(function(){
    woopra.track("a_version_enroll_click");
  })

  $(".version_b_enroll").click(function(){
    woopra.track("b_version_enroll_click");
  })

}

