// Script para interações do site Agenda Glow Up
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth scroll para links internos
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Efeito de scroll no header (transparência)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 8%';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.padding = '1.2rem 8%';
            header.style.backgroundColor = 'var(--dark-bg)';
        }
    });

    // 3. Funcionalidade do FAQ (Acordeão)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Fecha outros itens abertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Alterna o item atual
            item.classList.toggle('active');
        });
    });
});
