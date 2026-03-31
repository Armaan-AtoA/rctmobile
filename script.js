function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active', 'page-enter'));

    const target = document.getElementById(pageId);
    target.classList.add('active');

    void target.offsetWidth;
    target.classList.add('page-enter');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMenu() {
    document.getElementById('nav-links').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

themeBtn.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    themeBtn.querySelector('i').className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
});
