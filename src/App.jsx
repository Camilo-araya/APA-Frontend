import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Clientes from "./pages/Clientes";
import ClienteDetalle from "./pages/ClienteDetalle";
import QuienesSomos from "./pages/QuienesSomos"; // Asegúrate de crear este componente
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/:slug" element={<ClienteDetalle />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;