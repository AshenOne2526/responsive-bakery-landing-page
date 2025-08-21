/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
   })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

/* When we click on each link, we remove the show-menu class*/
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header');
   // Add a class if the bottom offset is greater than 50 of the viewport
   this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    //reset: true, //Animations repeat
});

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`);
sr.reveal(`.home__image, .footer__img-1, .footer__img-2`, { rotate: {z: -15} });
sr.reveal(`.home__bread, .about__bread`, { rotate: {z: 15} });
sr.reveal(`.home__footer`, { scale: 1, origin: 'bottom' });

sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z: -30}, distance: 0});
sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: 15}, distance: 0, delay: 600});
sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z: -30}, distance: 0, delay: 900});

sr.reveal(`.favorite__card img`, { interval: 100, rotate: {z: 15}, distance: 0});

sr.reveal(`.footer__container`, { scale: 1 });