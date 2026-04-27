import "../assets/Clientes.css";
import academiaImg from "../assets/Clientes/Academia_Arqueros_SM.jpg";
import muebleriaToshitaImg from "../assets/Clientes/muebleria_toshita.jpg";
import farmaciaelSolImg from "../assets/Clientes/farmacia_el_sol.png";
import BarberStudioCrcImg from "../assets/Clientes/barber_studio_crc.jpg";
import EscuelaAlfredoRojasImg from "../assets/Clientes/escuela_alfredo_rojas.png";
import LaCasadelaEmpanadaImg from "../assets/Clientes/la_casa_dela_empanada.png";
import DulceSaladoImg from "../assets/Clientes/dulce_salado.jpg";
import { Link } from "react-router-dom"; // 

const Clientes = () => {
  const clientes = [
    {
      nombre: "Academia de Arqueros SM",
      slug: "academia-arqueros-sm", // 👈 URL única
      descripcion: "Entrenamiento de arqueros para todas las edades y niveles.",
      comuna: "Curacavi",
      direccion: "Av. Ohiggins",
      contacto: "+56966471630",
      rrss: "@academiaarqueros",
      categoria: "Deporte",
      imagen: academiaImg
    },
    {
      nombre: "Mueblería Toshita",
      slug: "muebleria-toshita",
      descripcion: "Muebles de diseño y calidad para tu hogar.",
      comuna: "Curacavi",
      direccion: "Feliciano Cornejo 340",
      contacto: "+56997394227",
      rrss: "@toshita",
      categoria: "Mueblería",
      imagen: muebleriaToshitaImg
    },
    {
      nombre: "Barber Studio Crc",
      slug: "BarberStudioCrc",
      descripcion: "Barbería con estilo y servicio de calidad para hombres modernos.",
      comuna: "Curacavi",
      direccion: "Presbitero Moraga 246",
      contacto: "+5698904312",
      rrss: "@Studio.Cr.c",
      categoria: "Barbería",
      imagen: BarberStudioCrcImg
    },
    {
      nombre: "Farmacia el Sol",
      slug: "farmacia-el-sol",
      descripcion: "Farmacia con productos de calidad y servicio personalizado.",
      comuna: "Curacavi",
      direccion: "Av. Ohiggins 1447",
      contacto: "(2) 28363285",
      rrss: "@farmaciaelsol",
      categoria: "Farmacia",
      imagen: farmaciaelSolImg
    },
    {
      nombre: "Escuela De Fútbol Alfredo Rojas",
      slug: "escuela-de-futbol-alfredo-rojas",
      descripcion: "Escuela de fútbol para niños y jóvenes.",
      comuna: "Curacavi",
      direccion: "Lo Aguila 1000 y Cancha Atlanta",
      contacto: "+56968195868",
      rrss: "@escuelalfredorojas",
      categoria: "Deporte",
      imagen: EscuelaAlfredoRojasImg
    },
       {
      nombre: "Casa de la Empanada Curacaví",
      slug: "casa-de-la-empanada-curacavi",
      descripcion: "Deliciosas empanadas artesanales.",
      comuna: "Curacavi",
      direccion: "Av. Ohiggins",
      contacto: "+56982332324",
      rrss: "@laCasadelaEmpanada_cvi",
      categoria: "Comida",
      imagen: LaCasadelaEmpanadaImg
    },

     {
      nombre: "Dulce Salado Curacaví",
      slug: "dulce-salado-curacavi",
      descripcion: "Tortas, pasteles, coqteles y más.",
      comuna: "Curacavi",
      direccion: "Santa Beatriz 1336",
      contacto: "+56996125036",
      rrss: "@DulceSaladoCuracavi",
      categoria: "Comida",
      imagen: DulceSaladoImg
    }
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

            {/* 👇 Botón Ver más con URL única */}
            <Link to={`/clientes/${cliente.slug}`} className="ver-mas">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientes;
