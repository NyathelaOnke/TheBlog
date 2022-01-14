$(document).ready(function()
{

/* When the device is making the menu icon to be clickable, when the device is smaller */

    $('.menuBtn').on('click', function ()
     {
        $('.nav').toggleClass('showing')
        $('.nav ul').toggleClass('showing')
     }
    );

    
/* For when scrolling the navbar to be visible throughout */

    $(window).scroll(function()
    {
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
    });
/* making the trending post slider, slide automatically */
    $('.post-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: /* making it responsive */
        [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }); /* the code was taken from kenwheeler.github.io/slick/ and I made a few changes */
});