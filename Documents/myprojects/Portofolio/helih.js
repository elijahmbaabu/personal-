$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        } else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // scroll up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu items script

    $('.menu-bars').click(function(){
        $('.navbar .nav-list').toggleClass("active")
        $('.menu-bars i').toggleClass("active")
    });
    // typed string scripts 
    var typed = new Typed(".typing", {
        strings: ["Developer", "Web Designer", "Android Developer", "Research Engineer", "Freelancer", "Entrepreneur", "Data scientist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Web Designer", "Android Developer", "Research Engineer", "Freelancer", "Entrepreneur", "Data scientist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // owl carousel activation script

    $('.carousel').owlCarousel({
        margin: 24,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                item: 1,
                nav: false
            },
            600:{
                item: 2,
                nav: false
            },
            1000:{
                item: 3,
                nav: false
            }
        }
    });
});