$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// $(".nav .nav-link").on("click", function(){
//    $(".nav").find(".active").removeClass("active");
//    $(this).addClass("active");
// });

// $(document).ready(function() {
//   $('li.active').removeClass('active');
//   $('a[href="' + location.pathname + '"]').closest('li').addClass('active'); 
// });

$(document).ready(function() {
    // -----------------------------------------------------------------------
    $.each($('#navbar').find('li'), function() {
        $(this).toggleClass('active', 
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    }); 
    // -----------------------------------------------------------------------
});