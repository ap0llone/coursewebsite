//navbar
var menu = document.querySelector('#menu-icon');
var navList = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

//scrollreveal
const scroll = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

scroll.reveal('.home-text',{delay:450, origin:'left'});
scroll.reveal('.home-img',{delay:450, origin:'top'});
