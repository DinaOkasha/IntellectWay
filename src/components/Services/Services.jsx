import "./services.css";
import Heading from "../Shared/Heading/Heading";
import ServiceCard from "./ServiceCard";
import ltptn from "../../assets/services/Illustrations.png";
import rtptn from "../../assets/services/Illustrations2.png";

export default function Services() {
  return (
    <>
      <div className="containerService">
        <img
          src={ltptn}
          alt=""
          style={{
            position: "absolute",
            width: "350px",
            height: "1100px",
            left: "0px",
            top: "110px",
          }}
        />
        <Heading
          title={"Our Services"}
          content={
            "intellectway delivers programs and services that empower students, professionals, and institutions worldwide."
          }
        />

        <div className="options">
          <button className="btnOptions activelt">Students</button>
          <button className="btnOptions active">Professional</button>
          <button className="btnOptions activert">Corporates</button>
        </div>

        <ServiceCard />
        <img
          src={rtptn}
          alt=""
          className="rtptn"
          style={{
            position: "absolute",
            width: "350px",
            height: "1100px",
            right: "-15px",
            top: "-60px",
          }}
        />
      </div>
    </>
  );
}
