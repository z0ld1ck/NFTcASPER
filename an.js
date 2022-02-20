$(document).on('click', '.menu-bar a[href^="#"]', function (event) {
    event.preventDefault();
 
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
});


