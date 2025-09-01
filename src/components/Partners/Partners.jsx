import "./partners.css";
import imgPartner1 from "../../assets/Partners/image 1.png";
import imgPartner2 from "../../assets/Partners/image 12.png";
import imgPartner3 from "../../assets/Partners/image 18.png";
import imgPartner4 from "../../assets/Partners/image 5.png";
import imgPartner5 from "../../assets/Partners/image 7.png";
import imgPartner6 from "../../assets/Partners/image 8.png";
import imgPartner7 from "../../assets/Partners/image 4.png";
import imgPartner8 from "../../assets/Partners/image 6.png";
import imgPartner9 from "../../assets/Partners/image 9.png";
import imgPartner10 from "../../assets/Partners/image 2.png";
import imgPartner11 from "../../assets/Partners/image 10.png";
import imgPartner12 from "../../assets/Partners/image 17.png";
import imgPartner13 from "../../assets/Partners/image 13.png";
import imgPartner14 from "../../assets/Partners/image 11.png";
import imgPartner15 from "../../assets/Partners/image 14.png";
import imgPartner16 from "../../assets/Partners/image 15.png";

export default function Partners() {
  return (
    <>
      <div className="PartnerContainer">
        <div className="partnerContent">
          <h1>Institutions We Work With</h1>
          <p>
            We are proud to have collaborated with a wide range of reputable
            universities, training centers, and professional organizations
            around the world. These partnerships reflect our commitment to
            quality, trust, and lasting impact.
          </p>
        </div>
        <div className="partnerImg">
          <div className="one">
            {" "}
            <img src={imgPartner1} alt="" />
            <img src={imgPartner2} alt="" />
            <img src={imgPartner3} alt="" />
            <img src={imgPartner4} alt="" />
            <img src={imgPartner5} alt="" />
            <img src={imgPartner6} alt="" />
            <img src={imgPartner7} alt="" />
            <img src={imgPartner8} alt="" />
          </div>
          <div className="two">
            {" "}
            <img src={imgPartner9} alt="" />
            <img src={imgPartner10} alt="" />
            <img src={imgPartner11} alt="" />
            <img src={imgPartner12} alt="" />
            <img src={imgPartner13} alt="" />
            <img src={imgPartner14} alt="" />
            <img src={imgPartner15} alt="" />
            <img src={imgPartner16} alt="" />
          </div>
        </div>
        <div className="text">+50 more</div>
      </div>
    </>
  );
}
