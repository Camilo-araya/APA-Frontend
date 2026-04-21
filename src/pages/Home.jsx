import "../assets/Home.css";

const Home = () => {
  return (
    <section className="home">
      <h1>Agencia de Marketing Pyme</h1>
      <p>
        Somos una agencia enfocada en entregar publicidad simple y efectiva
        para las pequeñas y medianas empresas de Chile.
      </p>

      <div className="home-info">
        <h2>Misión</h2>
        <p>Entregar publicidad a bajo costo con resultados medibles.</p>

        <h2>Visión</h2>
        <p>Ser la agencia de marketing de fácil acceso en Chile.</p>
      </div>
    </section>
  );
};

export default Home;
