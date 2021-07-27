$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.carousel.carousel-slider').carousel({
    	fullWidth: true,
    	indicators: true
    });

    $('.fixed-action-btn').floatingActionButton();

    $('.materialboxed').materialbox();

    $('input#mobile').characterCounter();

    $('.modal').modal();
});