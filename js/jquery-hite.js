$(document).ready(function(){


    jQuery('.color1').on('mouseover', function() {
        $('.brand .active').removeClass('active');
        $(this).addClass('active');
        $('.subbox div').removeClass('on');
        jQuery('.subbox .b1_sub').addClass('on');
    });

    jQuery('.color2').on('mouseover', function() {
        $('.brand .active').removeClass('active');
        $(this).addClass('active');
        $('.subbox div').removeClass('on');
        jQuery('.subbox .b2_sub').addClass('on');
    });

    jQuery('.color3').on('mouseover', function() {
        $('.brand .active').removeClass('active');
        $(this).addClass('active');
        $('.subbox div').removeClass('on');
        jQuery('.subbox .b3_sub').addClass('on');
    });

    jQuery('.color4').on('mouseover', function() {
        $('.brand .active').removeClass('active');
        $(this).addClass('active');
        $('.subbox div').removeClass('on');
        jQuery('.subbox .b4_sub').addClass('on');
    });

    jQuery('.color5').on('mouseover', function() {
        $('.brand .active').removeClass('active');
        $(this).addClass('active');
        $('.subbox div').removeClass('on');
        jQuery('.subbox .b5_sub').addClass('on');
    });

    jQuery('.color6').on('mouseover', function() {
        $('.brand .active').removeClass('active');
        $(this).addClass('active');
        $('.subbox div').removeClass('on');
        jQuery('.subbox .b6_sub').addClass('on');
    });

    
    /* 서브시작 */

    jQuery('.color1').on('mouseover', function() {
        $('.brand .active').removeClass('active');
        $(this).addClass('active');
        $('.subbox div').removeClass('on');
        jQuery('.subbox .b1_sub').addClass('on');
    });
    
    /* 서브 끝 */


    /* AUTOPLAY */
    /* var IntID = setInterval(autop, 3000); */
    var idx =  $(".section1 .bg img.active").index();
    setInterval(function autop() {
        
        // console.log(idx);
        var pastE2 = $(".section1 .bg img").eq(idx).attr("data");
        $(pastE2).hide();
        $(".section1 .bg img").eq(idx).removeClass("active");
        $(".section1 .bg img").eq(idx).addClass("fout");
        
        if(idx<2){
            idx++;
            var activeE2 = $(".section1 .bg img").eq(idx).attr("data");
            $(".section1 .bg img").eq(idx).addClass("active");
        }else{
            idx=0;
            var activeE2 = $(".section1 .bg img").eq(idx).attr("data");
            $(".section1 .bg img").eq(idx).addClass("active");
        }
        $(activeE2).show();
        
    }, 4000);

    var section1 = $(".section1").offset().top+300;
    var section2 = $(".section2").offset().top;
    var sec_cov = $(".sec_cov").offset().top;
    var section3 = $(".section3").offset().top;
    var section4 = $(".section4").offset().top;
    var section5 = $(".section5").offset().top;
    var footer = $(".footer").offset().top;
    console.log("sec2 "+section2);
    console.log("sec3 "+section3);


    var iScrollPos = 0;
 
    $(window).scroll(function(){
    
    var iCurScrollPos = $(this).scrollTop();

    if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
        $('.header').css('top', '-60px');
        
    } else {
        $('.header').css('top', '0px');
       //Scrolling Up
    }

    iScrollPos = iCurScrollPos;


        console.log($(window).scrollTop());
        if($(window).scrollTop()<10){
            $('.header').css('background','rgba(255,255,255, 0.0)');
            $('.header').css('border-bottom','solid 1px white');   
            $('.header').css('padding-bottom','3%');   
            $('.header .bar li').css('color','white');  
            $('.header .login li').css('color','white'); 
        }
        else{
            $('.header').css('background','white');
            $('.header').css('border-bottom','none');   
            $('.header').css('padding-bottom','0%');   
            $('.header .bar li').css('color','#213e92');  
            $('.header .login li').css('color','#213e92');  
        }
        /* sec2 */
        if($(window).scrollTop()>section1){
            $('.anibox .line1-bottom').addClass('changew');
            $('.anibox .line1-left').addClass('changeh');
            $('.anibox .line1-top').addClass('changew2');
            $('.anibox .line1-right').addClass('changeh2');
        }
        else{
            $('.anibox .line1-bottom').removeClass('changew');
            $('.anibox .line1-left').removeClass('changeh');
            $('.anibox .line1-top').removeClass('changew2');
            $('.anibox .line1-right').removeClass('changeh2');
        }
        if($(window).scrollTop()>section1+200){
            $('.anibox2 .line-bottom').addClass('changew');
            $('.anibox2 .line-left').addClass('changeh');
            $('.anibox2 .line-top').addClass('changew2');
            $('.anibox2 .line-right').addClass('changeh2');
        }
        else{
            $('.anibox2 .line-bottom').removeClass('changew');
            $('.anibox2 .line-left').removeClass('changeh');
            $('.anibox2 .line-top').removeClass('changew2');
            $('.anibox2 .line-right').removeClass('changeh2');
        }
        /* sec2_cov */
        if($(window).scrollTop()>section2 && $(window).scrollTop()<section3-50){
            $(".section2 img").css('position', 'fixed');
            $(".section2 .cf").css('position', 'fixed');            
        }
        else{
            $(".section2 img").css('position', 'absolute');
            $(".section2 .cf").css('position', 'absolute');
        }

        /* sec3 */
        
        if($(window).scrollTop()<sec_cov+300){
            $(".section3 .vbox2").css('width', '35%');
            $(".section3 .vbox2").css('top', '40%');
            $(".section3 .vbox2").css('left', '20%');
            $(".section3").css('background', 'white');
        }
        else{
            if($(window).scrollTop()>sec_cov+300 && $(window).scrollTop()<section3-200){
            $(".section3 .vbox2").css('width', '55%');
            $(".section3 .vbox2").css('top', '20%');
            $(".section3 .vbox2").css('left', '10%');
            $(".section3").css('background', 'rgb(124, 174, 155)');
            }
            else{
                $(".section3 .vbox2").css('width', '75%');
                $(".section3 .vbox2").css('top', '0%');
                $(".section3 .vbox2").css('left', '0%');
                $(".section3").css('background', 'rgb(76, 136, 154)');
            }
        }/* rgb(195, 230, 158) */

        /* sec4 */
        if($(window).scrollTop()>section4-200 && $(window).scrollTop()<footer){
            $(".section4 .nbox1").css('top', '35%');
            $(".section4 .nbox2").css('top', '35%');
            $(".section4 .nbox3").css('top', '35%');
            $('.anibox3 .line-bottom').addClass('changew');
            $('.anibox3 .line-left').addClass('changeh');
            $('.anibox3 .line-top').addClass('changew2');
            $('.anibox3 .line-right').addClass('changeh2');
        }
        else{
            $(".section4 .nbox1").css('top', '65%');
            $(".section4 .nbox2").css('top', '75%');
            $(".section4 .nbox3").css('top', '70%');
            $('.anibox3 .line-bottom').removeClass('changew');
            $('.anibox3 .line-left').removeClass('changeh');
            $('.anibox3 .line-top').removeClass('changew2');
            $('.anibox3 .line-right').removeClass('changeh2');
        }
        /* sec5 */
        if($(window).scrollTop()>section5-300 && $(window).scrollTop()<footer+200){
            $(".anibox h1").css('top', '20%');
            $(".anibox h2").css('top', '50%');
            $('.anibox .line-bottom').addClass('changew');
            $('.anibox .line-left').addClass('changeh');
            $('.anibox .line-top').addClass('changew2');
            $('.anibox .line-right').addClass('changeh2');
        }
        else{
            $(".anibox h1").css('top', '-65%');
            $(".anibox h2").css('top', '-35%');
            $('.anibox .line-bottom').removeClass('changew');
            $('.anibox .line-left').removeClass('changeh');
            $('.anibox .line-top').removeClass('changew2');
            $('.anibox .line-right').removeClass('changeh2');
        }
    })

    
    $(".section3 .change a").click(function(){
        
        var pastEl = $(".section3 .change a.active").attr("data");
        $(pastEl).hide();
        $(".section3 .change a.active").removeClass("active");
        
        var activeEl = $(this).attr("data");
        $(activeEl).show();
        $(this).addClass("active");

    })

})
