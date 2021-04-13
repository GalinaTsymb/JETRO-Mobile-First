;(function($){
    $(document).ready(function(){

        const $HTML = $('html');
        const HAMBURGER      = document.querySelector('.js-hamburger');
        const MENU           = document.querySelector('.js-mobile-menu');

        /**
         * Open mobil menu
         */
        (HAMBURGER) && (HAMBURGER).addEventListener('click', (event) => {
            (MENU) && (MENU).classList.add('menu_opened');
            $HTML.addClass('popup-opened');
        });


        /**
         * Close mobil menu
         */
        document.body.addEventListener('click', (event) => {

            if ( [...event.target.classList].includes('js-mobil-close'))
            {
                (MENU) && MENU.classList.remove('menu_opened');
                $HTML.removeClass('popup-opened');
            }
        });


        $('.js-slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            adaptiveHeight: true,
            asNavFor: '.js-slider-small'
        });
        $('.js-slider-small').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.js-slider-big',
            centerMode: false,
            focusOnSelect: true,
            arrows: false,
            useTransform: false,
            mobileFirst: true,
            responsive:[
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 4,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,

                    }
                },
            ]
        });
    });
})(jQuery);

