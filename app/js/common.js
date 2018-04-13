$(function () {
    calcRightPosition();
    $(window).resize(function (e) {
        calcRightPosition();
    });

    function calcRightPosition() {
        console.log($('body').width());
        rightPosition = ($('body').width() - $('.container').width()) / 2;
        console.log(rightPosition);
        $('.always-visible-block').css('right', rightPosition);
    }

    $(document).on('scroll', function (e) {
        if ($(document).scrollTop() > 100) {
            $('.always-visible-block-clone').removeClass('hide');
            $('.always-visible-block').addClass('sticky');
        }
        else {
            $('.always-visible-block-clone').addClass('hide');
            $('.always-visible-block').removeClass('sticky');
        }
    });

    $("#btnToLeftBar").on('click', function () {
        moveAsideBar($(".left-aside"), 'left');
        // if($(".left-aside").attr('data-is_open') == 0) {
        //     $(".left-aside").animate({
        //         left: 0,
        //     }, 500);
        //     $(".left-aside").attr('data-is_open', 1);
        // } else {
        //     $(".left-aside").animate({
        //         left: '-300px',
        //     }, 500);
        //     $(".left-aside").attr('data-is_open', 0);
        // }
    });
    $("#btnToRightBar").on('click', function () {
        moveAsideBar($(".right-aside"), 'right');
        // if($(".right-aside").attr('data-is_open') == 0) {
        //     $(".right-aside").animate({
        //         right: 0,
        //     }, 500);
        //     $(".right-aside").attr('data-is_open', 1);
        // } else {
        //     $(".right-aside").animate({
        //         right: '-300px',
        //     }, 500);
        //     $(".right-aside").attr('data-is_open', 0);
        // }
    });

    function moveAsideBar(jq_terger, direction) {
        var options = {};
        if(jq_terger.hasClass('closed')) {
            options[direction] = 0;
        } else {
            options[direction] = '-300px';
        }
        jq_terger.animate(options, 500);
        jq_terger.toggleClass('closed');
    }

});