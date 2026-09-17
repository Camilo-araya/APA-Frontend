import { useState } from "react";
import { Link } from "react-router-dom";
import { clientes } from "../data/clientes"; // Importación centralizada
import "../assets/Clientes.css";
import "../assets/Filtro.css";

const Clientes = () => {
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [comunaFiltro, setComunaFiltro] = useState("");

  const categoriasUnicas = [...new Set(clientes.map((c) => c.categoria))];
  const comunasUnicas = [...new Set(clientes.map((c) => c.comuna))];

  const clientesFiltrados = clientes.filter((c) => {
    const matchCategoria = categoriaFiltro ? c.categoria === categoriaFiltro : true;
    const matchComuna = comunaFiltro ? c.comuna === comunaFiltro : true;
    return matchCategoria && matchComuna;
  });

  return (
    <section className="clientes">
      <h1>Nuestros Clientes</h1>
      <p>Conoce las empresas que confían en nuestra publicidad.</p>

      <div className="filtro-clientes">
        <select value={categoriaFiltro} onChange={(e) => setCategoriaFiltro(e.target.value)}>
          <option value="">Todas las categorías</option>
          {categoriasUnicas.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={comunaFiltro} onChange={(e) => setComunaFiltro(e.target.value)}>
          <option value="">Todas las comunas</option>
          {comunasUnicas.map((com, i) => (
            <option key={i} value={com}>{com}</option>
          ))}
        </select>
      </div>

      <div className="clientes-grid">
        {clientesFiltrados.map((cliente) => (
          <div key={cliente.slug} className="cliente-card">
            <img src={cliente.imagen} alt={cliente.nombre} className="cliente-img" />
            <h2>{cliente.nombre}</h2>
            <p className="descripcion">{cliente.descripcion}</p>
            <p className="comuna">📍 {cliente.comuna}</p>
            <p className="direccion">🏠 {cliente.direccion}</p>
            <p className="contacto">📞 {cliente.contacto}</p>
            <p className="rrss">🔗 {cliente.rrss}</p>
            <p className="categoria">📂 {cliente.categoria}</p>

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