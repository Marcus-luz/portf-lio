const typingTextElement = document.getElementById('typing-text');
const words = ["Desenvolvedor Full Stack", "Especialista em Backend", "QA & Testes Automatizados"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Apagando a palavra
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Escrevendo a palavra
        typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Controle de velocidade
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typeSpeed = 500; 
    }

    setTimeout(typeEffect, typeSpeed);
}

// Inicia o efeito quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000); 
});