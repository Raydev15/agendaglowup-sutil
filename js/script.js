/* 
   AGENDA GLOW UP - SCRIPT PURO
   Funcionalidades: Reveal on Scroll, FAQ Accordion
*/

// REVEAL ON SCROLL - Animação de entrada dos elementos
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Executar ao carregar a página
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// FAQ ACCORDION - Expandir e retrair perguntas
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        
        // Fechar todos os outros itens
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        
        // Alternar o item atual
        faqItem.classList.toggle('active');
    });
});

// SMOOTH SCROLL - Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('✨ Agenda Glow Up - Script carregado com sucesso!');
