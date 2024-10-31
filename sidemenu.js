document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.sidebar .nav-links li a');

    // 현재 페이지의 파일 이름 가져오기
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        // href 속성이 현재 페이지와 같으면 active 클래스 추가
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }

        // 메뉴 항목 클릭 시 다른 항목의 active 클래스 제거
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
