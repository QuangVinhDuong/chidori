import $ from 'jquery';

export function stickyNav() {
    var navbar = $('#navbar');
    var sticky = navbar.offset().top;          
    
    $(window).scroll(function() {        
        var top = $(window).scrollTop();
        console.log('sticky: '+sticky);         
        console.log('top: '+top);
        if (top >= sticky) {
            navbar.addClass('sticky');
        }
        else {
            navbar.removeClass('sticky');
        }
    });
}