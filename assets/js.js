/* nav */
var btnElementa = document.querySelector('.header__nav-menu-button');
var showNav = document.querySelector('.nav-second__main');
    btnElementa.onclick = function () {
        showNav.classList.toggle('open__nav');
    }
