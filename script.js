// 현재 URL과 매칭되는 사이드바 링크에 "active" 클래스 추가
document.addEventListener("DOMContentLoaded", function() {
    // 모든 사이드바 링크 요소를 선택
    const links = document.querySelectorAll('.sidebar .nav-links li a');
    
    // 현재 URL의 경로명 (pathname)을 가져옴
    const currentPath = window.location.pathname;

    // 링크의 href와 현재 경로를 비교하여 "active" 클래스 추가
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
