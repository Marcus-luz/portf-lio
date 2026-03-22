// 1. Importe o PDF ficheiro
import curriculoPDF from '../assets/CurriculoMarcusViniciusDaLuzAraujoE.pdf';

export function Contact() {
    return (
        <section id="contato" className="section">
            <div className="container">
                <h2 className="section-title">Vamos conversar? <span className="title-cursor">|</span></h2>
                
                <div className="contato-grid">
                    <a href="mailto:marcusvyni3@gmail.com" className="contato-card">
                        <i className="fa-solid fa-envelope"></i>
                        <h3>E-mail</h3>
                        <p>marcusvyni3@gmail.com</p>
                    </a>

                    <a href="https://www.linkedin.com/in/marcuslara%C3%BAjo/" target="_blank" rel="noreferrer" className="contato-card">
                        <i className="fa-brands fa-linkedin"></i>
                        <h3>LinkedIn</h3>
                        <p>marcuslaraújo</p>
                    </a>

                    <a href="https://github.com/Marcus-luz" target="_blank" rel="noreferrer" className="contato-card">
                        <i className="fa-brands fa-github"></i>
                        <h3>GitHub</h3>
                        <p>Marcus-luz (Marcus Araújo)</p>
                    </a>

                    {/* 2. Utilize a variável importada no href */}
                    <a href={curriculoPDF} target="_blank" rel="noreferrer" className="contato-card">
                        <i className="fa-solid fa-file-pdf"></i>
                        <h3>Currículo</h3>
                    </a>
                </div>
            </div>
        </section>
    );
}