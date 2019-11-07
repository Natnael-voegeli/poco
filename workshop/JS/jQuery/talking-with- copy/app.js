// OPEN MENU VANILLA JS VERSION
// const body = document.querySelector("body");
// const openMenu = document.querySelector("#open-menu");
// const closeMenu = document.querySelector("#close-menu");

// openMenu.addEventListener('click', function () {
//   body.classList.add('menu-is-open');
// });
// closeMenu.addEventListener('click', function () {
//   body.classList.remove('menu-is-open');
// });


// OPEN MENU - jQuery Version
$(function () {

    $('.trigger').on('click', function(e){
        e.preventDefault();
      $('body').toggleClass('menu-is-open');


    });


// Hide Element
// $('footer').hide();

// // Remove Element
// $('header').remove();

//Fade in Element
// $('main').fadeIn(2000, function(){
//     $('header').fadeOut(2000);
// });

$('header h2').on('click', function(){
    // $('section').first().slideToggle(500);
    $('#section-1').animate({
        width: "50%",
        opacity: 1
    }, 5000);

});

});