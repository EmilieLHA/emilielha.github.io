// Import our custom CSS
import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

// GSAP transition for hero
const hero = document.querySelector('.hero');

gsap.from(hero, {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    y: -50,
    ease: 'power2.out'
});

// GSAP transition for navbar
const navbar = document.querySelector('.navbar');

gsap.from(navbar, {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    y: -50,
    ease: 'power2.out',
});

// GSAP transition for purpose section
const purpose = document.querySelector('#purpose-content');

gsap.from(purpose, {
    opacity: 0,
    duration: 0.3,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: purpose,
        start: 'top 75%',
        end: 'bottom center',
    }
});

// GSAP transition for certification section
const certification = document.querySelector('#certification-content');

gsap.from(certification, {
    opacity: 0,
    duration: 0.5,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: certification,
        start: 'top 75%',
        end: 'bottom center',
    }
});

// GSAP transition for sustainability section
const sustainability = document.querySelector('#sustainability-content');

gsap.from(sustainability, {
    opacity: 0,
    duration: 0.5,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: sustainability,
        start: 'top 75%',
        end: 'bottom center',
    }
});

// GSAP transition for expertise section
const expertise = document.querySelector('#expertise-content');

gsap.from(expertise, {
    opacity: 0,
    duration: 0.5,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: expertise,
        start: 'top 75%',
        end: 'bottom center',
    }
});


// GSAP transition for team section
const team = document.querySelector('#team-content');

gsap.from(team, {
    opacity: 0,
    duration: 0.5,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: team,
        start: 'top 75%',
        end: 'bottom center',
    }
});

// GSAP transition for contact section
const contact = document.querySelector('#contact');

gsap.from(contact, {
    opacity: 0,
    duration: 0.5,
    y: -50,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: contact,
        start: 'top center',
        end: 'bottom center',
    }
});

