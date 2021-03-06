import { Link } from "react-router-dom";
import logo from "../../assets/home.svg";
import { useLocation } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <nav className="links">
        {useLocation().pathname === "/" ? (
          <Link className="homeLink active" to="/">
            Accueil
          </Link>
        ) : (
          <Link className="homeLink" to="/">
            Accueil
          </Link>
        )}
        {useLocation().pathname === "/about" ? (
          <Link className="aboutLink active" to="/about">
            A Propos
          </Link>
        ) : (
          <Link className="aboutLink" to="/about">
            A Propos
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
