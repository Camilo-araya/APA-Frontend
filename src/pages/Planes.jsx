import "../assets/Planes.css";

const Planes = () => {
  const planes = [
    {
      nombre: "Plan Básico",
      descripcion: "Publicidad inicial para tu Pyme con bajo costo y resultados medibles.",
      precio: "$15.000 CLP / mes",
    },
    {
      nombre: "Plan Estrella",
      descripcion: "Campañas digitales avanzadas con mayor alcance y optimización.",
      precio: "$50.000 CLP / mes",
    },
    {
      nombre: "Plan Premium",
      descripcion: "Marketing integral con gestión personalizada y reportes detallados.",
      precio: "$80.000 CLP / mes",
    },
  ];

  const handleContratar = (nombrePlan) => {
    const telefono = "569XXXXXXXX"; // Reemplaza con tu número comercial
    const mensaje = encodeURIComponent(`Hola, me interesa contratar el ${nombrePlan} para mi PyME.`);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
  };

  return (
    <section className="planes">
      <h1>Nuestros Planes de Marketing</h1>
      <div className="planes-grid">
        {planes.map((plan, index) => (
          <div key={index} className="plan-card">
            <h2>{plan.nombre}</h2>
            <p>{plan.descripcion}</p>
            <span className="precio">{plan.precio}</span>
            <button className="cta-btn" onClick={() => handleContratar(plan.nombre)}>
              Contratar por WhatsApp
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Planes;