import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
    const words = [
        "Engenheiro de Software", 
        "Desenvolvedor Full Stack", 
        "QA & Testes Automatizados"
    ];
    const typingText = useTypewriter(words);

    return (
        <main className="hero" id="home">
            <div className="hero-content">
                <p className="saudacao">Olá, eu sou o...</p>
                <h1 className="nome">Marcus Vinicius da Luz Araújo</h1>
                <h2 className="cargo">
                    <span>{typingText}</span>
                    <span className="cursor">|</span>
                </h2>
            </div>
        </main>
    );
}