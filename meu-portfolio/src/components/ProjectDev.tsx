// 1. Importe a imagem do PET Saúde 
import petSaudeImg from '../imagens/pet_saude.jpg';

export function ProjectDev() {
    return (
        <section id="projetos-dev" className="section bg-light">
            <div className="container">
                <h2 className="section-title">Projeto em Desenvolvimento <span className="title-cursor">|</span></h2>
                
                <div className="projeto-destaque-split">
                    
                    <div className="destaque-img-box">
                        {/* 2. Substitua a string estática pela variável importada */}
                        <img src={petSaudeImg} alt="Dashboard PET Saúde" />
                    </div>
                    
                    <div className="destaque-content-box">
                        <h3 className="destaque-titulo">Dashboard Saúde Pública (PET Saúde)</h3>
                        
                        <p className="destaque-desc">
                            Plataforma modular para centralizar e dar transparência aos indicadores de saúde locais, com autenticação RBAC e integração OAuth.
                        </p>
                        
                        <div className="destaque-techs">
                            <span>Flask</span><span>Arq. Hexagonal</span><span>Medallion</span>
                        </div>

                        <div className="destaque-info-privado">
                            <h4><i className="fa-solid fa-lock"></i> Por que o repositório é privado?</h4>
                            <p>Projeto em desenvolvimento ativo vinculado ao <strong>Grupo PET-Saúde Transparência</strong>. Desenvolvido em parceria com a UNIPAMPA e as Secretarias de Saúde de Alegrete e Bagé, o sistema visa criar dashboards interativos para análise de indicadores em tempo real.</p>
                            <p>O acesso é restrito no momento para resguardar as políticas de governança e a segurança de dados de saúde integrados à RNDS.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}