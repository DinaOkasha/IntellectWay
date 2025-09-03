import "./footer.css";
import FooterInfo from "./FooterInfo";
import HeadFooter from "./HeadFooter";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerUpper">
          <div className="headFooter">
            <HeadFooter />
          </div>
          <div className="navFooter">
            <div className="navLinks">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Affiliates</a>
              <a href="">Blog</a>
              <a href="">Career</a>
              <a href="">CRS</a>
            </div>
            <div className="navInfo">
              <FooterInfo />
            </div>
          </div>
        </div>
        <div className="footerLower">
          <div className="links">
            <button className="linkItem">Sitemap</button>
            <button className="linkItem">Privacy & Policy</button>
            <button className="linkItem">Terms & Conditions</button>
          </div>
          <div className="copyRights">
            <div>© Copyright 2025 Intellectway</div>
            <div>Designed and Developed by Entertab All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}
