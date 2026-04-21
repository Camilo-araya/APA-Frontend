import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">
  <Link to="/">Agencia Publica Aquí</Link>
</h1>

<button className="menu-toggle" onClick={() => setOpen(!open)}>
  {open ? "✖" : "☰"}
</button>

<ul className={`navbar-links ${open ? "open" : ""}`}>
  <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
  <li><Link to="/products" onClick={() => setOpen(false)}>Productos</Link></li>
  <li><Link to="/services" onClick={() => setOpen(false)}>Servicios</Link></li>
  <li><Link to="/about" onClick={() => setOpen(false)}>Quienes Somos</Link></li>
</ul>

    </nav>
  );
};

export default Navbar;
