// 1. Mantenha as configurações no topo
const words = ["Desenvolvedor Full Stack", "Experiência com Backend e Frontend", "QA & Testes Automatizados"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    // 2. Busque o elemento dentro da função ou verifique se ele existe
    const typingTextElement = document.getElementById('typing-text');
    
    // Se o elemento não for encontrado, interrompe para não dar erro no console
    if (!typingTextElement) return;

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
        typeSpeed = 2000; // Pausa quando termina de escrever
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typeSpeed = 500; 
    }

    setTimeout(typeEffect, typeSpeed);
}

// 3. Inicia o efeito garantindo que o DOM está pronto
document.addEventListener("DOMContentLoaded", () => {
    // Verifica no console se o script carregou (aperte F12 no navegador para ver)
    console.log("Script de digitação iniciado!");
    setTimeout(typeEffect, 1000); 
});