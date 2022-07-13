function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    })
}

loadData()
    .then(() => {
        let preloaderEl = document.getElementById('preloader_malc');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    });

const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight

if (windowOuterWidth < 500 || windowOuterHeight < 500) {
    $('.mouse').fadeOut(0);
}
else {
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
}