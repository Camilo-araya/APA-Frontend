import "../assets/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-banner">
      <div className="overlay">
        <h1 className="title">Agencia Pública Aquí</h1>
        <p className="subtitle">
          Publicidad simple para las pequeñas y medianas empresas de Chile.
        </p>
        <div className="home-buttons">
          <Link to="/planes" className="cta-btn primary">
            Conoce nuestros planes de marketing
          </Link>
          <Link to="/clientes" className="cta-btn secondary">
            Nuestros clientes
          </Link>
          <Link to="/quienes-somos" className="cta-btn secondary">
            Quiénes somos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
