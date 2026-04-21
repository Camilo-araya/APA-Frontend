import { useState } from "react";
import "../assets/FilterComunas.css";

const FilterComunas = () => {
  const [comunas, setComunas] = useState(["Santiago", "Providencia", "Ñuñoa"]);
  const [selected, setSelected] = useState("");

  return (
    <div className="filter-comunas">
      <h2>Filtrar por comuna</h2>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="">Selecciona una comuna</option>
        {comunas.map((comuna, index) => (
          <option key={index} value={comuna}>{comuna}</option>
        ))}
      </select>

      {selected && (
        <p>Mostrando clientes de: <strong>{selected}</strong></p>
      )}
    </div>
  );
};

export default FilterComunas;
