import Heading from "../Shared/Heading/Heading";
import "./represent.css";

import ltptn from "../../assets/Represent/Copy of Patterns01.png";
import rtptn from "../../assets/Represent/Copy of Patterns02.png";

export default function Represent() {
  return (
    <>
      <div className="outerRepresentContainer">
        <div className="ltptn">
          <img src={ltptn} alt="" />
        </div>
        <div className="innerRepresentContainer">
          {" "}
          <div className="representContainer">
            <div className="content">
              <Heading
                title={"Be Our Representative"}
                content={
                  "Join Intellectway as an official representative of your university and play a key role in connecting, guiding, and empowering future students on their academic journey. Help us expand our global impact by serving as a trusted link between institutions and motivated learners."
                }
              />
            </div>
            <div className="CTA">
              <button>Apply to Represent Us</button>
              <div className="CTAparagraph">
                <p>
                  Fill out our brief application form — a member of our team
                  will be in touch shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rtptn">
          <img src={rtptn} alt="" />
        </div>
      </div>
    </>
  );
}
