import "./hero.css";
import homeImg2 from "../../assets/Hero/ChatGPT Image Jun 29, 2025 at 11_51_47 PM 1.png";
import patternImg from "../../assets/Hero/Copy of Patterns01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero2() {
  return (
    <>
      <div className="heroContainer">
        <div className="image">
          <img src={homeImg2} alt="" />
        </div>
        <div className="hero-text">
          <h1>Begin Your Global Education Journey.</h1>
          <p>
            Explore world-class opportunities through scholarships, exchange
            programs, and strategic partnerships designed to expand your
            academic and professional horizons.
          </p>
          <div>
            <button className="btn2">
              Apply For Admission
              <FontAwesomeIcon
                style={{ marginLeft: "8px" }}
                icon={faAngleRight}
              />
            </button>
          </div>
        </div>
        <div className="pattern">
          <img src={patternImg} alt="" />
        </div>
      </div>
    </>
  );
}
