jQuery(function ($) {
    $('.mouse').fadeOut(0);
    setTimeout(visualization_mouse, 2000);
});

function visualization_mouse() {
    $('.mouse').fadeIn(1000);
}

document.addEventListener('wheel', (evt) => {
    if (evt.deltaY) {
        $('.mouse').fadeOut(1000);
    }
});