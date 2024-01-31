$(document).ready(function() {
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

    // 달력 만들기 ------------------------------------------------------------

    // 현재 날짜 가져오기
    var currentDate = new Date();
    // 현재 연도
    var currentYear = currentDate.getFullYear();
    // 현재 월
    var currentMonth = currentDate.getMonth();
    
    // 캘린더 표시 함수 호출
    displayCalendar(currentYear, currentMonth);
    
    // 이전 달 버튼 클릭 이벤트
    $('#prevMonth').on('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        displayCalendar(currentYear, currentMonth);
    });
    
    // 다음 달 버튼 클릭 이벤트
    $('#nextMonth').on('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        displayCalendar(currentYear, currentMonth);
    });
});

// 캘린더 표시 함수
function displayCalendar(year, month) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // 헤더 업데이트
    $('.calendar').html('<h2>' + monthNames[month] + ' ' + year + '</h2>');
    
    // 날짜 표시
    var firstDay = new Date(year, month, 1).getDay();
    var lastDate = new Date(year, month + 1, 0).getDate();
    
    var table = '<table>';
    table += '<tr>';
    for (var i = 0; i < monthDays.length; i++) {
        table += '<th>' + monthDays[i] + '</th>';
    }
    table += '</tr><tr>';
    
    var dayCount = 1;
    for (var j = 0; j < 7; j++) {
        for (var k = 0; k < 7; k++) {
            if (j === 0 && k < firstDay) {
                table += '<td></td>';
            } else if (dayCount > lastDate) {
                break;
            } else {
                table += '<td>' + dayCount + '</td>';
                dayCount++;
            }
        }
        if (dayCount > lastDate) {
            break;
        } else {
            table += '</tr><tr>';
        }
    }
    table += '</tr></table>';
    
    $('.calendar').append(table);
}
