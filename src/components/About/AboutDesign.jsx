import colImg1 from "../../assets/About/Frame 79.png";
import colImg2 from "../../assets/About/Screenshot 2025-07-01 at 11.35.29 1.png";
import colImg3 from "../../assets/About/three.png";

export default function AboutDesign() {
  return (
    <>
      <div className="cols">
        <div className="col1">
          <div className="circle"></div>
          <div className="colImg">
            <img src={colImg1} alt="" />
          </div>
        </div>
        <div className="col2">
          <div className="colImg">
            <img src={colImg2} alt="" />
          </div>
          <div className="circle"></div>
        </div>
        <div className="col3">
          <div className="circle"></div>
          <div className="colImg">
            <img src={colImg3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
