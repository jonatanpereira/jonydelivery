import './styles.css';
import logo from './logo.png';

function Navbar() {
    return (
        <nav className="main-navbar">
            <img src={logo} alt="Logomarca de Nakatomi"/>
            <a href="home" className="logo-text">Nakatomi Tower</a>
        </nav>
    )
}

export default Navbar;