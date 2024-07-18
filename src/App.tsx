import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import logo from "./assets/images/logo.png";
import ImageHome from "./assets/images/ImageHome.png";
import "./App.scss";
import { About } from "./pages/about/About";

export const App: React.FC = () => {

  return (
    <>
      <Router>
        <header>
          <img src={logo} alt="logo kasa" />
          <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
              Accueil
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
              A Propos
            </NavLink>
          </nav>
        </header>
        <main>
        <div className="image-container">
            <img src={ImageHome} alt="Image Home" className="home-image" />
            <div className="overlay"></div>
            <div className="text-overlay">Chez vous, partout et ailleurs</div>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
      <footer>
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};


