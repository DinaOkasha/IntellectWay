import "./about.css";
import AboutCards from "./AboutCards";
import AboutContent from "./AboutContent";
import AboutDesign from "./AboutDesign";

export default function About() {
  return (
    <>
      <div className="container2">
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
