import "../assets/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. Hero Principal */}
      <section className="home-banner">
        <div className="overlay">
          <h1 className="title">Agencia Pública Aquí</h1>
          <p className="subtitle">
            Publicidad hiperlocal y efectiva para pequeñas y medianas empresas en Chile.
          </p>
          <div className="home-buttons">
            <Link to="/planes" className="cta-btn primary">
              Ver Planes de Marketing
            </Link>
            <Link to="/clientes" className="cta-btn secondary">
              Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Propuesta de Valor / Características */}
      <section className="caracteristicas">
        <h2>¿Por qué hacer publicidad con nosotros?</h2>
        <div className="caracteristicas-grid">
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Anuncios Geolocalizados</h3>
            <p>Llegamos a clientes que viven o transitan cerca de tu local comercial o zona de reparto.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Horarios Inteligentes</h3>
            <p>Optimizamos tu presupuesto haciendo que tus anuncios se muestren solo cuando tu negocio está abierto.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📲</div>
            <h3>Directo a tu WhatsApp</h3>
            <p>Diseñamos campañas enfocadas en recibir mensajes directos de clientes listos para comprar.</p>
          </div>
        </div>
      </section>

      {/* 3. Banner CTA Intermedio */}
      <section className="cta-intermedio">
        <h2>¿Listo para impulsar las ventas de tu negocio local?</h2>
        <p>Comienza con inversiones desde $15.000 CLP al mes y haz rendir cada peso de tu pauta.</p>
        <Link to="/planes" className="cta-btn primary">
          Elegir Plan Ahora
        </Link>
      </section>
    </div>
  );
};

export default Home;