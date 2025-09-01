import "./navBar.css";
import Logo from "../../assets/Logo/Intellectway_Logo_FullColor_Horizontal_V2024-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="navItems">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"} target="_blank">
              About
            </Link>
          </li>
          <li style={{ textAlign: "center" }}>
            Services
            <span>
              <FontAwesomeIcon
                style={{ color: " #414141" }}
                icon={faAngleDown}
              />
            </span>
          </li>
          <li>Affiliates</li>
          <li>CSR</li>
          <li>Opportunities</li>
          <li>Blog</li>
        </ul>
        <div className="inter">
          <button className="signIn">Sign In</button>
          <button className="btn">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
