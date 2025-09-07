const headerLinks = document.querySelector('.header-links');
const burgerMenuButton = document.querySelector('.burger-menu');

burgerMenuButton.addEventListener('click', e => {
    e.stopPropagation();
    headerLinks.classList.add('active');
    burgerMenuButton.classList.add('hidden');
});

document.body.addEventListener('click', () => {
    headerLinks.classList.remove('active');
    burgerMenuButton.classList.remove('hidden');
});
