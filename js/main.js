$(function(){
    //ハンバーガーメニュー
    $('.js-hamburger').click(function(){
        $(this).toggleClass('hamburger--active');
        $('.js-gnav').toggleClass('gnav--open');
    });

    //料金タブ
    $('.js-price__item[id != "tab1"]').hide();
    $('.js-tab__link').click(function(){
        $('.js-price__item').hide();
        $($(this).attr("href")).show();
        $('.tab__link--current').removeClass('tab__link--current');
        $(this).addClass('tab__link--current');
        return false;
    });

    //スムーススクロール
    $('.js-nav-link').click(function(){
        var target = $(this).attr('href');
        var pos = $(target).offset().top-80;
        $('body,html').animate({scrollTop:pos},600);
        $('.js-hamburger').removeClass('hamburger--active');
        $('.js-gnav').removeClass('gnav--open');
        return false;
    });
});