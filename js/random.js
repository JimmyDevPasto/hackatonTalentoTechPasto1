document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.querySelector('.toggle-btn');
    var content = document.querySelector('.service_box .content');

    toggleBtn.addEventListener('click', function() {
        content.classList.toggle('expanded');
    });
});