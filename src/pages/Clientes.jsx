import "../assets/Clientes.css";
import academiaImg from "../assets/clientes/academia_arqueros_sm.jpg";
import muebleriaToshitaImg from "../assets/clientes/muebleria_toshita.jpg";
import farmaciaelSolImg from "../assets/clientes/farmacia_el_sol.png";

const Clientes = () => {
  const clientes = [
     {
    nombre: "Academia de Arqueros SM",
    descripcion: "Entrenamiento de arqueros para todas las edades y niveles.",
    comuna: "Curacavi",
    direccion: "Av. Ohiggins",
    contacto: "+56 9 1234 5678",
    rrss: "@academiaarqueros",
    categoria: "Deporte",
    imagen: academiaImg
  },
    {
      nombre: "Mueblería Toshita",
      descripcion: "Muebles de diseño y calidad para tu hogar.",
      comuna: "Curacavi",
      direccion: "Feliciano Cornejo 340",
      contacto: "+56 9 8765 4321",
      rrss: "@toshita",
      categoria: "Mueblería",
      imagen: muebleriaToshitaImg
    },
    {
      nombre: "TechPyme",
      descripcion: "Productos tecnológicos y soporte técnico.",
      comuna: "Las Condes",
      direccion: "Av. Apoquindo 4321",
      contacto: "+56 2 2345 6789",
      rrss: "@techpyme",
      categoria: "Tecnología",
      imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
        {
      nombre: "Farmacia el Sol",
      descripcion: "Farmacia con productos de calidad y servicio personalizado.",
      comuna: "Curacavi",
      direccion: "Av. Ohiggins",
      contacto: "+56 2 2345 6789",
      rrss: "@farmaciaelsol",
      categoria: "Farmacia",
      imagen: farmaciaelSolImg
    },
  ];

  return (
    <section className="clientes">
      <h1>Nuestros Clientes</h1>
      <p>Conoce las empresas que confían en nuestra publicidad.</p>

      <div className="clientes-grid">
        {clientes.map((cliente, index) => (
          <div key={index} className="cliente-card">
            <img src={cliente.imagen} alt={cliente.nombre} className="cliente-img" />
            <h2>{cliente.nombre}</h2>
            <p className="descripcion">{cliente.descripcion}</p>
            <p className="comuna">📍 {cliente.comuna}</p>
            <p className="direccion">🏠 {cliente.direccion}</p>
            <p className="contacto">📞 {cliente.contacto}</p>
            <p className="rrss">🔗 {cliente.rrss}</p>
            <p className="categoria">📂 {cliente.categoria}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientes;
