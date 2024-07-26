import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import logo from "./assets/images/logo.png";
import "./App.scss";
import { About } from "./pages/about/About";
import { Gallery } from "./pages/gallery/Gallery";
import { Error404 } from "./pages/error/Error404";

export const App: React.FC = () => {

  return (
    <>
      <Router>
        <header>
          <img className="kasa" src={logo} alt="logo kasa" />
          <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} >
              <p className="accueil1">Accueil</p>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
              <p className="accueil1">A Propos</p>
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Gallery />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </Router>
      <footer className="foot">
        <img src={logo} alt="logo" />
        <p className="ligne">© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};


