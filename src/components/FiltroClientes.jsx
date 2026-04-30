import { useState } from "react";

const FiltroClientes = ({ onFilter }) => {
  const [categoria, setCategoria] = useState("");
  const [comuna, setComuna] = useState("");

  const handleFilter = () => {
    onFilter({ categoria, comuna });
  };

  return (
    <div className="filtro-clientes">
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Todas las categorías</option>
        <option value="Deporte">Deporte</option>
        <option value="Mueblería">Mueblería</option>
        <option value="Barbería">Barbería</option>
        <option value="Farmacia">Farmacia</option>
        <option value="Comida">Comida</option>
      </select>

      <select value={comuna} onChange={(e) => setComuna(e.target.value)}>
        <option value="">Todas las comunas</option>
        <option value="Curacavi">Curacaví</option>
        <option value="Santiago">Santiago</option>
        <option value="Providencia">Providencia</option>
        <option value="Las Condes">Las Condes</option>
      </select>

      <button onClick={handleFilter}>Filtrar</button>
    </div>
  );
};

export default FiltroClientes;
