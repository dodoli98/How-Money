$(document).ready(function() {
 
    // drop down ------------------------------------------------------------
    
    $(function () {
        const selectedItem = $('.selected-item');
        const dropdownList = $('.dropdown-list');
    
        selectedItem.on('click', function () {
            dropdownList.slideToggle(); // slideToggle 메서드를 사용하여 드롭다운을 부드럽게 열고 닫습니다.
        });
    
        dropdownList.on('click', 'li', function (event) {
            selectedItem.removeClass('formLabel');
            selectedItem.text($(this).text());
            dropdownList.slideUp(); // 아이템을 클릭하면 드롭다운을 닫습니다.
        });
    
        $(document).on('click', function (event) {
            if (!selectedItem.is(event.target) && !dropdownList.has(event.target).length) {
                dropdownList.slideUp(); // 문서 어디를 클릭하든 드롭다운을 닫습니다.
            }
        });
    });
    
    
    
    
    // toggle button ------------------------------------------------------------

    const $toggle = $('#togglebtn');
    const $body = $('body');
    const $logo = $('.header > h1');

    $toggle.on('change', function () {
        // 체크박스가 체크되었는지 여부를 확인합니다.
        if ($(this).is(':checked')) {
            // 체크되었을 때 body의 배경색을 검정으로 변경합니다.
            $body.css('background-color', 'rgb(35,35,35)');
            console.log($logo);
            $logo.css('color', 'white');
        } else {
            // 체크가 해제되었을 때 body의 배경색을 원래대로 돌립니다.
            $body.css('background-color', '');
            $logo.css('color', '');

        }
    });

    // calendar ------------------------------------------------------------

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

// 캘린더 함수
function displayCalendar(year, month) {
    // 클리어 
    // empty() 메서드로 태그는 유지한채로 내용을 삭제
    $('#calendarBody').empty();

    // 랜더 함수

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // 현재 달 입력 
    $('#currentMonth').text(monthNames[month] + ' ' + year );

      // 날짜 표시
      var firstDay = new Date(year, month, 1).getDay();
      var lastDate = new Date(year, month + 1, 0).getDate();
      
      var table = '<table>';
      table += '<tr>';
      // for (var i = 0; i < monthDays.length; i++) {
      //     table += '<th>' + monthDays[i] + '</th>';
      // }
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
      
      $('#calendarBody').append(table);


}

