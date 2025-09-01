import "./services.css";
import Heading from "../Shared/Heading/Heading";

export default function Services() {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}
