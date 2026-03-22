export function Skills() {
    const skillsData = [
        {
            title: "Linguagens",
            icon: "fa-solid fa-code",
            tags: ["Python", "JavaScript", "TypeScript", "SQL", "Java"]
        },
        {
            title: "Back-end & Arquitetura",
            icon: "fa-solid fa-server",
            tags: ["Flask", "FastAPI", "APIs REST", "RBAC", "OAuth"]
        },
        {
            title: "Front-end",
            icon: "fa-solid fa-laptop-code",
            tags: ["React", "Vue.js", "HTML", "CSS", "Tailwind CSS"]
        },
        {
            title: "Dados & Engenharia",
            icon: "fa-solid fa-database",
            tags: ["MySQL", "PostgreSQL (Supabase)", "Pandas (ETL)"]
        },
        {
            title: "Qualidade & Testes (QA)",
            icon: "fa-solid fa-vial-circle-check",
            tags: ["Cypress", "BDD (Cucumber)", "Locust", "Pytest", "Unittest", "Selenium", "Postman"]
        },
        {
            title: "Ferramentas & Gestão",
            icon: "fa-solid fa-toolbox",
            tags: ["Git (GitHub/GitLab)", "Scrum", "Kanban"]
        }
    ];

    return (
        <section id="habilidades" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Habilidades & Tecnologias <span className="title-cursor">|</span></h2>
                
                <div className="habilidades-grid">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="habilidade-card">
                            <h3><i className={skill.icon}></i> {skill.title}</h3>
                            <div className="habilidade-tags">
                                {skill.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}