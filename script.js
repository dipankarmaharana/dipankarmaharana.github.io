$(document).ready(function(){

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    
    var typed = new Typed(".typing", {
        strings: ["Learner", "Developer", "Cloud Computing Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

