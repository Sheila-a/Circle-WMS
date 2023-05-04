import { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import styles from "./style.module.css";
// import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation();

  // update activeItem based on current location
  useEffect(() => {
    if (location.pathname === "/how-it-works") {
      setActiveItem("how-it-works");
    } else if (location.pathname === "/contact-us") {
      setActiveItem("contact-us");
    }
  }, [location]);
  // define active and inactive colors
  const activeColor = "#8bc34a";

  // set style for active link
  const activeLinkStyle = {
    color: activeColor,
    textDecoration: "none",
    borderBottom: "3px solid #8bc34a",
    paddingBottom: "5px",
    marginBottom: "-2px",
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={`${styles.navbarContainer} ${styles.container}`}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={Logo} alt="" className={styles.navLogo} />
          </Link>

          <input type="checkbox" />
          <div className={styles.hamburgerLines}>
            <span className={`${styles.line} ${styles.line1}`}></span>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <span className={`${styles.line} ${styles.line3}`}></span>
          </div>
          <ul className={styles.menuItems}>
            <li>
              <Link
                to="/how-it-works"
                style={activeItem === "how-it-works" ? activeLinkStyle : {}}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                style={activeItem === "contact-us" ? activeLinkStyle : {}}
              >
                Contact us
              </Link>
            </li>
          </ul>
          <div className={styles.right_content}>
            <Link to="signup"> Register</Link>

            <Link
              to="/login-in"
              style={{ textDecoration: "none" }}
              onMouseOver="this.style.color='blue'"
            >
              <Button
                content="Log in"
                style={{ backgroundColor: "#8bc34a", border: "none" }}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
