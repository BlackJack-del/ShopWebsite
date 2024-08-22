document.getElementById('menu-button').addEventListener('click', () => {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('overlay').style.opacity = '1';
    document.getElementById('overlay').style.visibility = 'visible';
});

document.getElementById('navbar-menu-button').addEventListener('click', () => {
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('overlay').style.opacity = '0';
    document.getElementById('overlay').style.visibility = 'hidden';
});

document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('overlay').style.opacity = '0';
    document.getElementById('overlay').style.visibility = 'hidden';
});