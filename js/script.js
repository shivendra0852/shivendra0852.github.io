$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY>20){
            $("#navbar").addClass("sticky");
        }else{
            $("#navbar").removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('#navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // $('.menu a').click(function(){
    //     $('.menu a').toggleClass("active");
    // })

    $('#navbar .menu a').click(function(){
        $('#navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });
});

