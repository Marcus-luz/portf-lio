# 🚀 Marcus Vinicius | Portfólio

[![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](#)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)

> **Acesse o projeto online:** [Marcus Vinicius | Portfólio](https://marcus-luz-portfolio.vercel.app/)

Portfólio profissional desenvolvido para apresentar meus projetos, habilidades e trajetória como Engenheiro de Software Full Stack. O projeto foi arquitetado com foco em performance, componentização e tipagem estática.

## 🛠️ Tecnologias e Arquitetura

Este projeto foi inicialmente desenhado em Vanilla HTML/JS e posteriormente **refatorado para uma arquitetura moderna**, utilizando:

* **[React](https://reactjs.org/)**: Biblioteca para a construção de interfaces de usuário componentizadas.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build de front-end ultrarrápida (substituindo o CRA).
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, garantindo um código mais seguro e previsível.
* **CSS3**: Estilização global customizada e responsiva (Mobile-First).
* **FontAwesome**: Biblioteca de ícones.
* **[Vercel](https://vercel.com/)**: Plataforma de hospedagem com pipeline de CI/CD contínuo.

## ✨ Funcionalidades e Destaques Técnicos

* **Arquitetura Baseada em Componentes**: Separação clara de responsabilidades (Hero, About, Skills, Projects, Contact).
* **Custom Hooks (`useTypewriter`)**: O efeito visual de digitação (Typewriter) foi encapsulado num React Hook customizado, gerindo o ciclo de vida e estado (via `useState` e `useEffect`) para evitar vazamentos de memória.
* **Renderização Dinâmica**: Utilização do método `.map()` do JavaScript/TypeScript para renderizar os cards de projetos e habilidades a partir de arrays de dados, facilitando a escalabilidade e a manutenção do código.
* **Acessibilidade e Semântica**: Estrutura de tags HTML5 mantida dentro do JSX.
* **Download/Visualização Direta de Assets**: Configuração correta de caminhos estáticos para visualização imediata do currículo em PDF.
