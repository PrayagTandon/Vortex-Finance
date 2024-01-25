'use strict'

/* SELECTING ELEMENTS */

// ELEMENTS
const header = document.querySelector('.header');
const navbar = document.querySelector('.header__nav');
const linkHeader = document.querySelector('.header__nav--link-item');
const linkFooter = document.querySelector('.footer__nav--link-item');
const logo = document.querySelector('.header__nav--logo-link');
const modal = document.querySelector('.modal--container');
const overlay = document.querySelector('.overlay');

// SECTION
const sectionFeatures = document.querySelector('section--features');
const sectionServices = document.querySelector('.section--services');
const sectionTab = document.querySelector('.section--tab');
const sectionTestimonials = document.querySelector('.section--testimonials');
const footer = document.querySelector('.footer');

// BUTTONS
const btnFill = document.querySelectorAll('.btn--fill');
const btnOutline = document.querySelectorAll('.btn--outline');
const btnLink = document.querySelectorAll('.btn--link');
const btnReset = document.querySelector('.modal--reset');

// TAB
const tab = document.querySelector('.operations__tab--container-btn');
const tabContent = document.querySelector('.operations__tab--content');

// ARROW
const arrowBtn = document.querySelector('slider--btn');
const btnLeft = document.querySelector('btn--left');
const btnRight = document.querySelector('btn--right');

// FUNCTIONS

function toggleModal() {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
};

/* EVENT LISTENERS */

// MODAL EVENT
btnFill.forEach((btn) => btn.addEventListener('click', toggleModal));

btnReset.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        toggleModal()
    }
});