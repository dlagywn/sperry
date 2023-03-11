$(document).ready(function(){
    AOS.init();

    //서브메뉴
    $('.main-menu li').mouseenter(function(){
        const data = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${data}`).addClass('active');

        $('.sub-menu-box').addClass('active');

    });


    $('.sub-menu-box').mouseleave(function(){
    //서브메뉴박스에서 마우스리브될때 박스 없어짐
        $('.sub-menu').removeClass('active');

        $('.sub-menu-box').removeClass('active');
    });

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        autoplay: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".Swiper", {
        autoplay: true,
        effect:"fade",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $('.con a').mouseenter(function(){
        let changeImage = $(this).parent('.con').attr('data-image');

        $('.bg-img').css({
            // backgroundImage : 'url('+ changeImage + ')'
            backgroundImage : `url(${changeImage})`
        });
    });

    //마우스리브 될때 설정해보기(이미지 자연스럽게 바뀌도록 css 설정하기)
    $('.con a').mouseleave(function(){
        $('.bg-img').css({
            backgroundImage : ''
        });
    });

    $('.btn li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        // 탭메뉴 연결하기
        const result = $(this).attr('data-alt');

        $('.tabs div').removeClass('active');
        // $('#' + result).addClass('active');
        $(`#${result}`).addClass('active');
    });

    // 탑버튼
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });

    $(window).scroll(function(){
        const h = $(window).scrollTop();
        console.log(h);
        if(h >= 900){
            $('.header-area').addClass('on');
        }else{
            $('.header-area').removeClass('on');
        }
        if(h >= 1700){
            $('.sec-2 .top-txt, .sec-2 .bottom-txt').addClass('on');
        }else{
            $('.sec-2 .top-txt, .sec-2 .bottom-txt').removeClass('on');
        }
      });

      $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.hamburger-menu-box').toggleClass('active');
      });
    
      $('.hamburger-sub-menu-main-name').click(function(){
        $(this).siblings('.hamburger-sub-menu').slideToggle();
        $(this).parent('.hamburger-menu').siblings().children('.hamburger-sub-menu').slideUp();
      });
});