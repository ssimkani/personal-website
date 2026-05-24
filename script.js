/* ============================================
   Personal Website - Scripts
   Seena Simkani
   ============================================ */

'use strict';

// --- Mobile Nav Toggle -------------------------------------------
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger to X
    const spans = navToggle.querySelectorAll('span');
    spans.forEach((span) => span.classList.toggle('active'));
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.querySelectorAll('span').forEach((s) => s.classList.remove('active'));
    });
  });
}

// --- Scroll Reveal -------------------------------------------------
const revealElements = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }
);

revealElements.forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Also reveal project cards individually
const projectCards = document.querySelectorAll('.project-card');
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
  }
);

projectCards.forEach((card) => {
  card.classList.add('reveal');
  cardObserver.observe(card);
});

// --- Active Nav Link Highlighting ----------------------------------
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach((a) => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#64ffda' : '';
  });
}

window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

// --- Hamburger Animation Toggle ------------------------------------
document.querySelectorAll('.nav-toggle span').forEach((span) => {
  span.addEventListener('transitionend', () => {});
});

// --- Dynamic Year in Footer ---------------------------------------
const footerText = document.querySelector('.footer-text');
if (footerText) {
  const year = new Date().getFullYear();
  footerText.textContent = `Designed & Built by Seena Simkani © ${year}`;
}
