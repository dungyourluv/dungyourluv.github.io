
/* close, open mobile menu */
var mobileSearch = document.getElementById('mobile-search');
var header = document.getElementById('header');
var headerHight = header.clientHeight;
mobileSearch.onclick = function() {
    var closeSearch = header.clientHeight === headerHight;
    if (closeSearch) {
        header.style.height = 'auto';
        header.style.overflow = 'initial';
    }else {header.style.height = null;
    header.style.overflow = 'hidden';
}
}

/* close element when choose menu */
