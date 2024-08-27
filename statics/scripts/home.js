document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const accountButton = document.getElementById('account-button');
    const loginBox = document.getElementById('login-box');
    const signupButton = document.getElementById('signup-button');

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
        loginBox.style.display = 'none'; // Hide the login box
    });

    accountButton.addEventListener('click', () => {
        const isModalVisible = loginBox.style.display === 'block';
        loginBox.style.display = isModalVisible ? 'none' : 'block';
        overlay.style.opacity = isModalVisible ? '0' : '1';
        overlay.style.visibility = isModalVisible ? 'hidden' : 'visible';
    });

    signupButton.addEventListener('click', () => {
        window.location.href = '/signup'; // Redirect to the sign-up page
    });
});
