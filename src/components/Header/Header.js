import { Link } from "react-router-dom";
import logo from "../../assets/home.svg";

function Header() {
  return (
    <nav className=".header">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="links">
        <Link className="homeLink" to="/">
          Accueil
        </Link>
        <Link className="aboutLink" to="/about">
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
