$(function() {
  $(document).on('click', 'li', function() {
    $('li.active').removeClass('active'); // 모든 li 요소의 active 클래스를 제거
    $(this).addClass('active'); // 클릭한 li 요소에 active 클래스를 추가
  });
});
