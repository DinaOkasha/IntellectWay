import serviceImg from "../../assets/services/Slider.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard() {
  return (
    <>
      <div className="serviceCard">
        <div className="image">
          <img src={serviceImg} alt="" />
        </div>
        <div className="serviceContent">
          <div>
            <h1>
              Empower every student’s journey, from language learning to career
              success
            </h1>
            <p>
              Build strong English skills, gain admissions to top universities,
              prepare for tests, and shape your career with services designed to
              help you thrive, in the classroom and beyond.
            </p>
          </div>
          <button>
            Explore student services{" "}
            <FontAwesomeIcon
              style={{
                marginLeft: "8px",
                width: "20px",
                height: "20px",
              }}
              icon={faAngleRight}
            />
          </button>
        </div>
      </div>
    </>
  );
}
