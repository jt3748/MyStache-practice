// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require_tree ./channels

$(document).on('turbolinks:load', function(){
  function animateNav() {
    $('.nav-link').animate({letterSpacing: '0px'}, 250, function(){
      $('.nav-link').animate({letterSpacing: '2px', color: 'green'}, 250);
      $('.active').animate({fontSize: '18px'});
    });
    // $('.logo').addClass('animate-logo');

    // $('.nav-link').click(function(){
    //   $(this).animate({letterSpacing: '0px', fontSize: '16px'})
    // });
  };
  animateNav();

  function animateProdNav() {
    $('.prod-btn').addClass('slideDown');
  }
  animateProdNav();
});
