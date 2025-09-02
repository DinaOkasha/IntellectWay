import LocationImg from "../../assets/Contact/location.png";
import emailImg from "../../assets/Contact/sms.png";
import whatsImg from "../../assets/Contact/Vector.png";
import phoneImg from "../../assets/Contact/phone.png";
import twitter from "../../assets/Contact/twitter.png";
import facebook from "../../assets/Contact/faceBook.png";
import instgram from "../../assets/Contact/instgram.png";
import linkedIn from "../../assets/Contact/linkedIn.png";
export default function ContactInfo() {
  const contactAddress = [
    {
      id: 1,
      country: "United States",
      location: ["1775 Tysons", "Boulevard Floor 5", "McLean, Virginia 22102"],
      email: "info@intellectway.com",
      whatsapp: "+1 (202 ) 820 8282",
      phone: "+1 (202 ) 601 -9001",
    },
    {
      id: 2,
      country: "United Kingdom",
      location: [
        "Hamilton House, Mabledon",
        "Place London, Greater",
        "London, WC1H 9BB",
      ],
      email: "info-uk@intellectway.com",
      whatsapp: "+44 -203 -8685-601",
      phone: "+44 -203 -8685-601",
    },
  ];
  return (
    <>
      <div className="upperInfo">
        <div className="infoTitle">
          <h3>Contact information</h3>
        </div>
        <div className="infoAddress">
          {contactAddress.map((add) => {
            return (
              <div key={add.id} className="addressBox">
                <div className="AC">{add.country}</div>
                <div className="AL">
                  <div className="ALLOuter">
                    <div className="Aicon">
                      <img src={LocationImg} alt="" />
                    </div>
                    <div className="ALL">
                      <div className="ALone">{add.location[0]}</div>
                      <div className="ALtwo">{add.location[1]}</div>
                      <div className="ALthree">{add.location[2]}</div>
                    </div>
                  </div>
                </div>
                <div className="AE">
                  <div className="Aicon">
                    <img src={emailImg} alt="" />
                  </div>
                  {add.email}
                </div>
                <div className="AW">
                  {" "}
                  <div className="Aicon">
                    <img src={whatsImg} alt="" />
                  </div>
                  {add.whatsapp}
                </div>
                <div className="AP">
                  {" "}
                  <div className="Aicon">
                    <img src={phoneImg} alt="" />
                  </div>
                  {add.phone}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="socialInfo">
        <div className="socialTitle">
          <h3>Social Media</h3>
        </div>
        <div className="socialIcons">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instgram} alt="" />
          <img src={linkedIn} alt="" />
        </div>
      </div>
    </>
  );
}
