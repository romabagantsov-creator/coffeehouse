// Theme
function initTheme() {
    const btn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('coffee_theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
        btn.textContent = '☀️';
    }
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('coffee_theme', isDark ? 'dark' : 'light');
        btn.textContent = isDark ? '☀️' : '🌙';
    });
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('.nav__link, .btn').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Form
function initForm() {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMessage');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value;
            const phone = document.getElementById('phone')?.value;
            if (name && phone) {
                msg.innerHTML = '✅ Столик забронирован! Ждём вас.';
                form.reset();
                setTimeout(() => msg.innerHTML = '', 5000);
            } else {
                msg.innerHTML = '❌ Заполните все поля';
                setTimeout(() => msg.innerHTML = '', 3000);
            }
        });
    }
}

// Scroll reveal
function initScrollReveal() {
    const items = document.querySelectorAll('.menu-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    items.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSmoothScroll();
    initForm();
    initScrollReveal();
});
