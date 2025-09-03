import LocationImg from "../../assets/Footer/location.png";
import emailImg from "../../assets/Footer/sms.png";
import phoneImg from "../../assets/Footer/Vector.png";
// import Social from "./Social";

export default function FooterInfo() {
  const contactAddress = [
    {
      id: 1,
      country: "United States",
      location: ["1775 Tysons Boulevard FL 5", "McLean, Virginia 22102"],
      email: "info@intellectway.com",

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

      phone: "+44 -203 -8685-601",
    },
  ];
  return (
    <>
      <div className="upperInfo">
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
    </>
  );
}
