// /scripts/home.js

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    menuButton.addEventListener('click', () => {
        const isSidebarVisible = sidebar.classList.contains('show');
        sidebar.classList.toggle('show', !isSidebarVisible);
        overlay.style.opacity = isSidebarVisible ? '0' : '1';
        overlay.style.visibility = isSidebarVisible ? 'hidden' : 'visible';
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    });
});
