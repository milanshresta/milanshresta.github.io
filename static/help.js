$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
        const preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});         