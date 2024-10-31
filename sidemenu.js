document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.sidebar .nav-links li a');

    // 현재 페이지의 전체 URL 가져오기
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        // 링크의 절대 URL을 생성하여 현재 URL과 비교
        const linkUrl = link.href;

        if (currentUrl === linkUrl) {
            link.classList.add('active');
        }

        // 클릭 시 다른 항목의 active 클래스 제거
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
