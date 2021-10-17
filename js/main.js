$(function(){ 
    $(window).scroll(function () { 
        var scroll = $(this).scrollTop();
    if(scroll > 500){
        $('.navbar-scroll').show();}
        else{
            $('.navbar-scroll').hide();
        }
    });

})