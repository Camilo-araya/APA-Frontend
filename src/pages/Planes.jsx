import "../assets/Planes.css";

const Planes = () => {
  const planes = [
    {
      nombre: "Plan Básico",
      precio: "$15.000 CLP / mes",
      descripcion: "Publicidad inicial geolocalizada para PyMEs que quieren empezar a captar clientes locales.",
      detalles: [
        "Inversión publicitaria en Meta Ads (Instagram / Facebook)",
        "Anuncios programados en días y horarios comerciales",
        "Geolocalización por comuna o radio específico",
        "Enfoque en mensaje directo a WhatsApp o llamadas",
        "Reporte mensual de rendimiento"
      ]
    },
    {
      nombre: "Plan Estrella",
      precio: "$50.000 CLP / mes",
      descripcion: "Campañas avanzadas con mayor frecuencia para negocios que buscan aumentar ventas semanales.",
      detalles: [
        "Mayor cobertura en Meta Ads o Google Ads",
        "Anuncios activos de 3 a 5 días clave por semana",
        "Segmentación avanzada por intereses de tu cliente ideal",
        "Pruebas con distintos diseños y textos publicitarios",
        "Optimización semanal y reporte mensual"
      ]
    },
    {
      nombre: "Plan Premium",
      precio: "$80.000 CLP / mes",
      descripcion: "Estrategia integral multicanal para dominar la presencia digital en tu zona.",
      detalles: [
        "Estrategia combinada Meta Ads + Google Ads",
        "Anuncios activos de Lunes a Sábado en horarios clave",
        "Captura directa de clientes a WhatsApp y llamadas",
        "Segmentación geográfica e intencional de alta precisión",
        "Reporte detallado de conversiones y asesoría continua"
      ]
    }
  ];

  const adicionales = [
    {
      titulo: "🤖 Sistema de Agendamiento Automático por WhatsApp",
      precio: "+$20.000 CLP / mes",
      descripcion: "Responde clientes 24/7, muestra tu catálogo en el chat y agenda citas o pedidos de forma automática sin perder ninguna venta fuera de horario."
    },
    {
      titulo: "📸 Creación de Contenido Visual & Fotografía",
      precio: "+$20.000 CLP / servicio",
      descripcion: "Diseño y producción de imágenes o piezas gráficas profesionales optimizadas para formato historias/feed y listas para pauta publicitaria."
    }
  ];

  const handleContratar = (servicio) => {
    const telefono = "569XXXXXXXX"; // Reemplaza con tu número comercial de WhatsApp
    const mensaje = encodeURIComponent(`Hola, me interesa contratar o consultar por: ${servicio}.`);
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
  };

  return (
    <section className="planes">
      <h1>Nuestros Planes de Marketing</h1>
      <p className="subtitulo">Publicidad estratégica ajustada al presupuesto de tu negocio local.</p>

      {/* Grid de Planes */}
      <div className="planes-grid">
        {planes.map((plan, index) => (
          <div key={index} className="plan-card">
            <h2>{plan.nombre}</h2>
            <span className="precio">{plan.precio}</span>
            <p className="descripcion-plan">{plan.descripcion}</p>
            
            <ul className="lista-detalles">
              {plan.detalles.map((det, i) => (
                <li key={i}>✓ {det}</li>
              ))}
            </ul>

            <button className="cta-btn" onClick={() => handleContratar(plan.nombre)}>
              Contratar por WhatsApp
            </button>
          </div>
        ))}
      </div>

      {/* Sección de Servicios Adicionales */}
      <div className="servicios-extra">
        <h2>Potencia tu Plan con Servicios Adicionales</h2>
        <div className="extras-grid">
          {adicionales.map((extra, index) => (
            <div key={index} className="extra-card">
              <h3>{extra.titulo}</h3>
              <span className="precio-extra">{extra.precio}</span>
              <p>{extra.descripcion}</p>
              <button className="cta-btn secondary" onClick={() => handleContratar(extra.titulo)}>
                Consultar Servicio
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;