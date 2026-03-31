function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active', 'page-enter'));

    const target = document.getElementById(pageId);
    target.classList.add('active');

    // Trigger reflow then add animation class
    void target.offsetWidth;
    target.classList.add('page-enter');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
}

// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('open') && !nav.contains(e.target)) {
        closeMenu();
    }
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

themeBtn.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    themeBtn.querySelector('i').className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
});

// Animate hero elements on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-in').forEach(el => {
        el.style.animationPlayState = 'running';
    });
});
