import logo from "../../assets/home.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" className="logo-footer" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
