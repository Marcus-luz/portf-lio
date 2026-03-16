import intuitiveCareImg from '../imagens/Care.png';
import seacImg from '../imagens/seac.png';
import dncImg from '../imagens/dnc.png';
import aiProductImg from '../imagens/AI-Product-Owner.png';

export function Projects() {
    const projectsData = [
        {
            title: "Plataforma de Dados - Intuitive Care",
            description: "Solução end-to-end com Web Crawler, pipeline ETL para sanitização de dados da ANS e dashboard reativo para análise financeira.",
            image: intuitiveCareImg,
            techs: ["Python", "FastAPI", "Vue.js", "Pandas", "MySQL"],
            githubRepo: "https://github.com/Marcus-luz/intuitive-care-Test",
            liveUrl: null
        },
        {
            title: "Dashboard Financeiro SEAC (BRISA)",
            description: "Sistema de fluxo de caixa agrícola focado em alta confiabilidade de dados e componentes reutilizáveis integrados via APIs REST.",
            image: seacImg,
            techs: ["React", "TypeScript", "Supabase", "Pytest"],
            githubRepo: "https://github.com/Marcus-luz/Cash_flow",
            liveUrl: null
        },
        {
            title: "Landing Page Tech (Escola DNC)",
            description: "Interface responsiva mobile-first com funcionalidades de captura de leads e validação de dados no lado do cliente.",
            image: dncImg,
            techs: ["HTML", "CSS", "JavaScript"],
            githubRepo: "https://github.com/Marcus-luz/projeto-Landing-Page",
            liveUrl: "https://marcus-luz.github.io/projeto-Landing-Page/"
        },
        {
            title: "AI Product Backlog Generator",
            description: "Plataforma inteligente que utiliza IA (LLMs) para automatizar a geração de backlogs de produtos, épicos, requisitos e histórias de usuário.",
            image: aiProductImg,
            techs: ["Python", "Flask", "LLMs / IA", "SQLAlchemy", "JS"],
            githubRepo: "https://github.com/Marcus-luz/ai-product-backlog-generator",
            liveUrl: "https://agile-artifacts-assistant.onrender.com"
        }
    ];

    return (
        <section id="projetos" className="section">
            <div className="container">
                <h2 className="section-title">Projetos Concluídos <span className="title-cursor">|</span></h2>
                
                <div className="projetos-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="projeto-card">
                            <img src={project.image} alt={project.title} className="projeto-img" />
                            <div className="projeto-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="projeto-techs">
                                    {project.techs.map((tech, techIndex) => (
                                        <span key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                                <div className="projeto-links">
                                    {project.githubRepo && (
                                        <a href={project.githubRepo} target="_blank" rel="noreferrer">
                                            <i className="fa-brands fa-github"></i> Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i> Prévia
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}