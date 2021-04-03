import './styles.css';
import {ReactComponent as MainImage} from './main.svg';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        NAKATOMI TOWER<br /> que entregamos <br /> para você!!!
                    </h1>
                    <h3 className="home-subtitle">
                    O melhor Hotel a um clique de você!

                    </h3>
                    <a href="orders" className="home-btn-order">
                        RESERVE AGORA
                    </a>
                </div>
                <div className="home-image">
                    <MainImage />
                </div>
            </div>
        </div>
        <Footer />
        </>

    )
}

export default Home;