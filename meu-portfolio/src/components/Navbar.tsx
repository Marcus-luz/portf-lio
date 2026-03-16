export function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="icon-logo">▶</span> Marcus Vinicius da Luz Araújo
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
}