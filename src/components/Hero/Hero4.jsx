import "./hero.css";
import homeImg4 from "../../assets/Hero/image 21.png";
import patternImg from "../../assets/Hero/Copy of Patterns01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero4() {
  return (
    <>
      <div className="hero">
        <div className="image">
          <img src={homeImg4} alt="" />
        </div>
        <div
          className="container hero-text"
          style={{ top: "20px", left: "45px" }}
        >
          <h1>Corporate Social Responsibility</h1>
          <p style={{ height: "174px" }}>
            At Intellectway, our CSR initiative is committed to empowering
            student-led initiatives, community projects, volunteer programs,
            campus organizations, and entrepreneurial ventures. We invest in
            ideas that drive positive impact and support the next generation of
            changemakers.
          </p>
          <div>
            <button className="btn2" style={{ width: "197px", height: "48px" }}>
              Apply Now
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
