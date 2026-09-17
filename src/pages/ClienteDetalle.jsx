import { useParams, Link } from "react-router-dom";
import { clientes } from "../data/clientes";
import "../assets/ClienteDetalle.css";

const ClienteDetalle = () => {
  const { slug } = useParams();
  const cliente = clientes.find((c) => c.slug === slug);

  if (!cliente) {
    return (
      <section className="cliente-detalle">
        <h2>Cliente no encontrado</h2>
        <Link to="/clientes" className="volver-clientes">← Volver a Clientes</Link>
      </section>
    );
  }

  return (
    <section className="cliente-detalle">
      <h1>{cliente.nombre}</h1>

      <div className="galeria">
        <img src={cliente.imagen} alt={cliente.nombre} />
        {cliente.extraImagenes &&
          cliente.extraImagenes.map((img, i) => (
            <img key={i} src={img} alt={`${cliente.nombre} ${i + 1}`} />
          ))}
      </div>

      <p className="descripcion">{cliente.descripcion}</p>
      <p className="comuna">📍 {cliente.comuna}</p>
      <p className="direccion">🏠 {cliente.direccion}</p>
      <p className="contacto">📞 {cliente.contacto}</p>
      <p className="rrss">🔗 {cliente.rrss}</p>
      <p className="categoria">📂 {cliente.categoria}</p>

      {/* Cambiado <a> por <Link> para evitar recargar la app */}
      <Link to="/clientes" className="volver-clientes">← Volver a Clientes</Link>
    </section>
  );
};

export default ClienteDetalle;