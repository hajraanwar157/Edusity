import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  return (
    <nav className={`container ${sticky && "dark-nav"}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={menu ? `` : `hide-mobile-menu`}>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} duration={500} offset={-260}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-150}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} duration={500} offset={-230}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} offset={-230}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} duration={500} offset={-210}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
