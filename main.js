const btnHambmenu = document.querySelector('.header-right');
const btnClose = document.querySelector('.hamburger-menu');
const hambmenu = document.querySelector('.hamburger-menu');

btnHambmenu .addEventListener ('click', function() {
	hambmenu.style.display = 'block';
});

btnClose .addEventListener ('click', function() {
	hambmenu.style.display = 'none';
});