document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true, // Enables continuous scrolling
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false, // Ensures scrolling in one direction
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
});



