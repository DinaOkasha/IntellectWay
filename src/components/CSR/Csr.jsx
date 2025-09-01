import "./csr.css";
import CsrImg from "../../assets/CSR/illustration.png";
export default function Csr() {
  return (
    <>
      <div className="csrOuterContainer">
        <div className="csrInnerConatainer">
          <div className="ltCsrContent">
            <div className="CsrTitle">
              <h1>Corporate Social Responsibility</h1>
              <p>
                At Intellectway, our CSR initiative is designed to empower
                students, organizations, and changemakers. We actively support
                community-driven events, volunteer projects, student clubs, and
                entrepreneurial ventures amplifying ideas that create lasting
                social impact.
              </p>
            </div>
            <div className="csrbtn">
              <button>Get Involved</button>
            </div>
          </div>
          <div className="rtCsrImg">
            <img src={CsrImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
