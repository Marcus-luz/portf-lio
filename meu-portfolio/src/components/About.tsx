// 1. Importe a imagem como uma variável
import minhaFoto from '../imagens/Minha-FOTO.png';

export function About() {
    return (
        <section id="sobre" className="section">
            <div className="container">
                <h2 className="section-title">Sobre <span className="title-cursor">|</span></h2>
                
                <div className="sobre-container">
                    <div className="sobre-img-wrapper">
                        <div className="circle-bg"></div>
                        {/* 2. Use a variável no src */}
                        <img src={minhaFoto} alt="Marcus Vinicius" className="sobre-pic" />
                    </div>
                    
                    <div className="sobre-text">
                        <p>
                            Sou graduando em <span className="highlight">Engenharia de Software</span> pela Unipampa e atuo na construção de ecossistemas escaláveis e seguros.
                        </p>
                        <p>
                            Minha base técnica une a robustez do <span className="highlight">Backend (Python, Java)</span> e a dinamicidade do <span className="highlight">Frontend (React, Vue.js)</span>, apoiada por uma forte cultura de <span className="highlight">Qualidade de Software (QA)</span>.
                        </p>
                        <p>
                            Desenvolvo pipelines de ETL com Pandas, integro APIs resilientes e aplico padrões arquiteturais avançados, como <span className="highlight">Arquitetura Hexagonal</span> e <span className="highlight">Medallion Architecture</span>. Acredito que um bom produto digital deve ser rápido na tela, seguro no banco de dados e protegido por baterias de testes automatizados com <span className="highlight">Pytest e Selenium</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}