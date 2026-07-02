/* ======================== SHOW MENU ======================== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu on mobile link click */
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ======================== CHANGE BACKGROUND HEADER ======================== */
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ======================== DARK/LIGHT THEME ======================== */
const themeButton = document.getElementById('theme-toggle')
const icon = themeButton.querySelector('i')

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains('light-mode') ? 'light' : 'dark'
const getCurrentIcon = () => icon.classList.contains('fa-moon') ? 'fa-moon' : 'fa-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove']('light-mode')
    icon.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove']('fa-moon')
    if (selectedTheme === 'light') {
        icon.classList.remove('fa-sun')
    } else {
        icon.classList.add('fa-sun')
        icon.classList.remove('fa-moon')
    }
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode')

    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    } else {
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
    }

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ======================== TYPING ANIMATION ======================== */
const words = ["Java Full Stack Developer", "DevOps Enthusiast", "AWS Cloud Learner"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        };
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

document.addEventListener("DOMContentLoaded", () => {
    typingEffect();
});

/* ======================== SCROLL SECTIONS ACTIVE LINK ======================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 100,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ======================== SCROLL REVEAL ANIMATION ======================== */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// Add reveal class to sections on load
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section, .glass-card, .timeline-item');
    sections.forEach((sec) => {
        sec.classList.add('reveal');
    });
    // trigger once to show initial elements
    setTimeout(reveal, 100);
});

/* ======================== LOADER ======================== */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            loader.addEventListener('transitionend', () => {
                // Ensure it doesn't block clicks after fading out
                loader.style.display = 'none';
            });
        }, 500); // 500ms delay to show the animation nicely
    }
});
