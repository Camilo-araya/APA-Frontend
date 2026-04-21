import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Clientes from "./pages/Clientes";
import FilterComunas from "./components/FilterComunas";
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
          <Route path="/filter" element={<FilterComunas />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
