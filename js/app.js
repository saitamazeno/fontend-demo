$(document).ready(function() {
    // 1. xử lý sự kiện khi nhấp vào ảnh thumb
    $('.list-thumb .thumb-item').click(function() {
        let picture_src = $(this).find('img').attr('src');
        // console.log(picture_src);
        $('.show-picture img').attr('src', picture_src);
        $('.list-thumb .thumb-item').removeClass('active');
        $(this).addClass('active');
    });
    // 2. xử lý nhấp vào next prev 
    $('.slider-nav .next-btn').click(function() {
        // alert('Clicked next!');
        if ($('.list-thumb .thumb-item:last-child').hasClass('active')) {
            $('.list-thumb .thumb-item:first-child').click();
        } else {
            $('.list-thumb .thumb-item.active').next().click();
        }
    });
    $('.slider-nav .prev-btn').click(function() {
        // alert('Clicked next!');
        if ($('.list-thumb .thumb-item:first-child').hasClass('active')) {
            $('.list-thumb .thumb-item:last-child').click();
        } else {
            $('.list-thumb .thumb-item.active').prev().click();
        }
    });
});