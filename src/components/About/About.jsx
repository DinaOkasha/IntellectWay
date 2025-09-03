import "./about.css";
import AboutCards from "./AboutCards";
import AboutContent from "./AboutContent";
import AboutDesign from "./AboutDesign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="Aboutarrow">
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
        <div className="upper">
          <AboutContent />
          <AboutDesign />
        </div>
        {/* <div className="lower"></div> */}
        <AboutCards />
      </div>
    </>
  );
}
