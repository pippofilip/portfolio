const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-nav'); 
const pageWrapper = document.querySelector('.page-wrapper');
const icons = document.querySelectorAll('.icon');

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
})

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('change');
    mobileNav.classList.toggle('show');
    document.body.classList.toggle('overflow');
    document.body.classList.toggle('lock-screen');
})

// add current year in footer
document.querySelector('.copyright-year').textContent = new Date().getFullYear();

for (const icon of icons) {
    icon.addEventListener('click', () => {
        icon.classList.toggle('show-tooltip');
    })
}
