$('#carousel').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    infinite: true,
    focusOnSelect: false,
    responsive: [{
        breakpoint: 900,
        settings: {
            arrows: false,
            slidesToShow: 3
        }
    },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 1
        }
    }]
});