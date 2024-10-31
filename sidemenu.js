document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.sidebar .nav-links li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 모든 링크에서 active 클래스를 제거
            navLinks.forEach(item => item.classList.remove('active'));
            // 클릭한 링크에만 active 클래스를 추가
            this.classList.add('active');
        });
    });
});
