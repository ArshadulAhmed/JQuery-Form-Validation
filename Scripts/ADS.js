// #font-switcher -------------------->

$(document).ready(function () {
    $('#font-toggle-switcher').click(function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('#font-switcher').animate({ 'right': '-130px' });
        } else {
            $(this).addClass('opened');
            $('#font-switcher').animate({ 'right': '-7px' });
        }
    });
    $('#incfont').click(function () {
        curSize = parseInt($('#fontsize p').css('font-size')) + 1;
        if (curSize <= 22)
            $('#fontsize  p').css('font-size', curSize);
    });
    $('#decfont').click(function () {
        curSize = parseInt($('#fontsize p').css('font-size')) - 1;
        if (curSize >= 12)
            $('#fontsize  p').css('font-size', curSize);
    });

});

$("#font-toggle-switcher").click(function () {
    if ($(this).hasClass('opened')) {

    } else {
        $('html,body').animate({
            scrollTop: $('#fontsize').offset().top
        }, 1000);
        return true;
    }
});

// #font-switcher -------------------->



<!-- vegas Slideshow Background  -->

$('#index-body ').vegas({
	delay: 5000,
    timer: true,
    shuffle: false,
	autoplay: true,
    transitionDuration: 2000,
    slides: [
		{ src:'/img/vegas-slider/1.jpg', fade:2000 },
		{ src:'/img/vegas-slider/2.jpg', fade:2000 },
		{ src:'/img/vegas-slider/3.jpg', fade:2000 },
		{ src:'/img/vegas-slider/4.jpg', fade:2000 },
		{ src:'/img/vegas-slider/5.jpg', fade:2000 },
		{ src:'/img/vegas-slider/6.jpg', fade:2000 },
		{ src:'/img/vegas-slider/7.jpg', fade:2000 },
		{ src:'/img/vegas-slider/8.jpg', fade:2000 }
    ],
	overlay: "/img/vegas-slider/overlays/07.png"
});
/*
<!--Slideshow Background -->


<!--vegas Slideshow Background  -->
*/
$('#slider ').vegas({
	delay: 5000,
    timer: false,
    shuffle: false,
	autoplay: true,
    transitionDuration: 2000,
    slides: [
		{ src:'/img/vegas-slider/1.jpg', fade:2000 },
		{ src:'/img/vegas-slider/2.jpg', fade:2000 },
		{ src:'/img/vegas-slider/3.jpg', fade:2000 },
		{ src:'/img/vegas-slider/4.jpg', fade:2000 },
		{ src:'/img/vegas-slider/5.jpg', fade:2000 },
		{ src:'/img/vegas-slider/6.jpg', fade:2000 },
		{ src:'/img/vegas-slider/7.jpg', fade:2000 },
		{ src:'/img/vegas-slider/8.jpg', fade:2000 }
    ],
	transition: 'swirlLeft2',
});
/*
<!-- /Slideshow Background -->*/





// FANCY  BOX --------------------->
$(document).ready(function () {
    //Simple image gallery. Uses default settings

    $('.fancybox').fancybox();

});

//FANCY  BOX --------------------->




// tool tip ------------------>
$('.itl-tooltip').tooltip();
// tool tip ------------------>





// to make CARET symbol in dropdown and inject other classes and attributes ------------------------->
$(document).ready(function () {
    if ($('li').hasClass('dropdown')) {
        $('a + ul').prev('a').closest("#navbar .navbar-nav .dropdown > a").append('<i class="caret"></i>').toggleClass('dropdown-toggle').attr('data-toggle', 'dropdown').attr('role', 'button');
    }
    if ($('li').hasClass('dropdown')) {
        $('a + ul').prev('a').closest("#services .service-menu-horizontal .dropdown > a").append('<i class="caret"></i>').toggleClass('dropdown-toggle').attr('data-toggle', 'dropdown').attr('role', 'button');
    }
});
//------------------------->



// To disable Google Map Scrolling ---------------->
$(document).ready(function () {
    // you want to enable the pointer events only on click;
    $('#map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#canvas').on('click', function () {
        $('#map_canvas').removeClass('scrolloff'); // set the pointer events true on click
    });

    // you want to disable pointer events when the mouse leave the canvas area;
    $("#map_canvas").mouseleave(function () {
        $('#map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
});

// Ends ---------------->




// To embed google Map according to address present in the #map_canvas div ---------------->
$(document).ready(function () {
    $("#map_canvas").each(function () {
        var embed = "<iframe width='100%' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q=" + encodeURIComponent($(this).text()) + "&amp;output=embed'></iframe>";
        $(this).html(embed);
    });
});
// Ends ---------------->







//  OWL CAROUSAL ---------------->
$(document).ready(function () {

    $("#services-rolls-images").owlCarousel({

        autoPlay: 6000, //Set AutoPlay to 3 seconds
        pagination: false,
        lazyLoad: true,
		stopOnHover: true,

        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: [768, 3],
        itemsMobile: [479, 1],

        navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left fa-2x'></i>",
        "<i class='fa fa-angle-right fa-2x'></i>"
        ]

    });
	
	$("#testimonials").owlCarousel({

        autoPlay: 12000, //Set AutoPlay to 3 seconds
        lazyLoad: true,

        singleItem: true,
        pagination: true,
        transitionStyle: "backSlide",

        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],

        navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left fa-2x'></i>",
        "<i class='fa fa-angle-right fa-2x'></i>"
        ]

    });
	
	$("#accreditations").owlCarousel({

        autoPlay: 6000, //Set AutoPlay to 3 seconds
        pagination: false,
        lazyLoad: true,
		stopOnHover: true,

        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: [768, 3],
        itemsMobile: [479, 1],

        navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left fa-2x'></i>",
        "<i class='fa fa-angle-right fa-2x'></i>"
        ]

    });


});
//  Ends  ---------------->

// Quick - Contact - switcher ==============>

// To toggle ---------->

$(document).ready(function () {
    $('#toggle-switcher').click(function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('#Quick-Contact-switcher').animate({ 'right': '-240px' });
        } else {
            $(this).addClass('opened');
            $('#Quick-Contact-switcher').animate({ 'right': '0' });
        }
    });
});

// To toggle ends ---------->


// to open when scroll -------->

$(document).ready(function ($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 450,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1000,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$quick_contact_tab = $('.quick-contact-tab');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $quick_contact_tab.addClass('is-visible') : $quick_contact_tab.removeClass('is-visible is-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $quick_contact_tab.addClass('is-fade-out');
        }
    });
});

// to open when scroll  ends -------->

// Quick - Contact - switcher Ends ==============>
