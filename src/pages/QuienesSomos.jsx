import "../assets/QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <section className="quienes-somos">
      <div className="quienes-somos-container">
        <h1>Quiénes Somos</h1>
        <p className="intro">
          En <strong>Agencia Pública Aquí</strong> nos apasiona impulsar el crecimiento de las pequeñas y medianas empresas de Chile mediante estrategias de marketing digital accesibles, transparentes y efectivas.
        </p>

        <div className="valores-grid">
          <div className="valor-card">
            <h2>🎯 Nuestra Misión</h2>
            <p>
              Democratizar la publicidad digital para que las PyMEs locales tengan las mismas oportunidades de destacar y conectar con sus clientes ideales.
            </p>
          </div>

          <div className="valor-card">
            <h2>🚀 Nuestra Visión</h2>
            <p>
              Ser la plataforma publicitaria referente para emprendedores, brindando soluciones simples que maximicen el retorno de inversión sin complicaciones técnicas.
            </p>
          </div>
        </div>

        <div className="compromiso">
          <h2>🤝 Nuestro Compromiso</h2>
          <p>
            Trabajamos mano a mano con cada negocio para entender sus necesidades reales y ofrecer planes a la medida con resultados medibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;