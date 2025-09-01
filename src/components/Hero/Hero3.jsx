import "./hero.css";
import homeImg from "../../assets/Hero/image 23.png";
import patternImg from "../../assets/Hero/Copy of Patterns01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="image">
          <img src={homeImg} alt="" />
        </div>
        <div className="container hero-text">
          <h1>Grow with intellectway, Strengthen Your Institution</h1>
          <p>
            Partner with us to expand your institution’s global reach through
            tailored programs, strategic guidance, and dedicated support. We
            help you enhance your international presence and deliver greater
            value to your students and stakeholders.
          </p>
          <div>
            <button className="btn2">
              Book Your Consultation{" "}
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
