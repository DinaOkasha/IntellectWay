import rocket from "../../assets/About/aboutCards/Extra.png";
import eye from "../../assets/About/aboutCards/Vector.png";
import star from "../../assets/About/aboutCards/star.png";

export default function AboutCards() {
  return (
    <>
      <div className="aboutcards">
        <div className="aboutcardItem cardOne">
          <div className="cardImg">
            <img src={rocket} alt="" />
          </div>
          <div className="cardContent">
            <h1>Mission</h1>

            <p>
              To bridge individuals and institutions worldwide with
              transformative knowledge, strategic academic connections, and
              culturally responsive guidance, empowering our clients to thrive
              in global educational and professional landscapes.
            </p>
          </div>
        </div>
        <div className="aboutcardItem cardTwo">
          <div className="cardImg">
            <img src={eye} alt="" />
          </div>
          <div className="cardContent">
            <h1>Vision</h1>

            <p>
              To cultivate empowered students, professionals, and institutions
              who contribute meaningfully to a more connected, innovative, and
              globally advanced society.
            </p>
          </div>
        </div>
        <div className="aboutcardItem cardThree">
          <div className="cardImg">
            <img src={star} alt="" />
          </div>
          <div className="cardContent">
            <h1>Values</h1>

            <p>Integrity. Honesty. Commitment. Objectivity.</p>
            <p>
              These principles guide every decision we make and every service we
              deliver.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
