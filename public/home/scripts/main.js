$(window).load(onload);

function onload () {
  
  $('body').addClass('loaded');

  $('a.how-it-works').click(function(){
    $(".t1-links").fadeOut('fast');
    startHomeScenes();
    return false;
  });


  $('a.download-link').click(function(){
    $(this).toggleClass("opened");

    $('.dropdown-download').toggleClass('visible');
    return false;
  });

}

