import { Link } from "react-router-dom";
import logo from "../../assets/a-home.png";

function Header() {
  return (
    <nav className=".header">
      <div className="logo">
        <h1>
          K <img src={logo} alt="logo"></img> sa
        </h1>
      </div>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
