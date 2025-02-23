// Mobile menu js
const toggleMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('open-sidebar');
    overlay.classList.toggle('!block');
};

// Sticky Header

window.onscroll = function () {
    setOnScroll();
};
const setOnScroll = () => {
    let scrollpos = window.scrollY;
    if (scrollpos > 0) {
        document.getElementById('header')?.classList.add('fix');
    } else {
        document.getElementById('header')?.classList.remove('fix');
    }
};
setOnScroll();

// AOS Animation

AOS.init({once: true});


// loader
const screen_loader = document.getElementsByClassName('screen_loader');
if (screen_loader?.length) {
    setTimeout(() => {
        document.body.removeChild(screen_loader[0]);
    }, 800);
}