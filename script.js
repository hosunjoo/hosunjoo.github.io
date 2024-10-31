// JavaScript로 현재 페이지에 해당하는 링크를 하이라이팅
document.addEventListener("DOMContentLoaded", function() {
  // 모든 링크를 선택
  const links = document.querySelectorAll('.nav-links li a');

  // 현재 URL의 파일 이름을 가져옴
  const currentPage = window.location.pathname.split("/").pop();

  // 각 링크의 href와 현재 URL을 비교하여 일치하는 경우에 active 클래스를 추가
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
