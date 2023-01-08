// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        console.log('hwwwwwwww');
    } else {
        console.log(false);
        header.classList.remove('navbar-fixed');
    }
};



// hamburger
function togglemenu(){
    // const navMenu = document.querySelector('nav-menu');
    document.getElementById('nav-menu').classList.toggle('hidden');
    document.getElementById('hamburger').classList.toggle('active');
    navMenu.classList.toggle('hidden');

}