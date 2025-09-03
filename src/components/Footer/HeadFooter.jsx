import FooterLogo from "../../assets/Footer/Intellectway_Logo_Black Color_Horizontal_V2024-01.png";
import Social from "../ContactUs/Social";

export default function HeadFooter() {
  return (
    <>
      <img src={FooterLogo} alt="" />
      <p>Academic Partnerships & Global Programs</p>
      <div className="socialFooter">
        <Social title={"Keep in Touch"} />
      </div>
    </>
  );
}
