var mobileSearch = document.getElementById('mobile-search');
console.log(mobileSearch);
var header = document.getElementById('header');
console.log(header);
mobileSearch.onclick = function() {
    var closeSearch = header.clientHeight === 46;
    if (closeSearch) {
        header.style.height = 'auto';
        header.style.overflow = 'initial';
    }else {header.style.height = '46px';
    header.style.overflow = 'hidden';
}
}