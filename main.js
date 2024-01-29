$(function () {
    const $toggle = $('#togglebtn');
    const $body = $('body');
    const $logo = $('.header > h1');

    $toggle.on('change', function () {
        // 체크박스가 체크되었는지 여부를 확인합니다.
        if ($(this).is(':checked')) {
            // 체크되었을 때 body의 배경색을 검정으로 변경합니다.
            $body.css('background-color', 'black');
            console.log($logo);
            $logo.css('color', 'white');
        } else {
            // 체크가 해제되었을 때 body의 배경색을 원래대로 돌립니다.
            $body.css('background-color', '');
            $logo.css('color', '');

        }
    });

});
