import './styles.css';
import logo from './LogoGRANDE.png';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        NAKATOMI TOWER<br /> O melhor <br /> e mais seguro!!!
                    </h1>
                    <h3 className="home-subtitle">
                    O melhor Hotel a um clique de você!
                    <br/>Tradição e Inovação em um só lugar.
                    <br/><br/>Esperamos você!

                    </h3>
                    <a href="orders" className="home-btn-order">
                        RESERVE AGORA
                    </a>
                </div>
                <div className="home-image">
                <img src={logo} alt="Logomarca de Nakatomi"/>
                </div>
            </div>
        </div>
        <Footer />
        </>

    )
}

export default Home;