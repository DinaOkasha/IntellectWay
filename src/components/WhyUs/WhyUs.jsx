import "./whyUs.css";
import Heading from "../Shared/Heading/Heading";
import WhyCard from "./WhyCard";

import whyImg1 from "../../assets/WhyUs/icon.png";
import whyImg2 from "../../assets/WhyUs/Vector.png";
import whyImg3 from "../../assets/WhyUs/peopleChat.png";
import whyImg4 from "../../assets/WhyUs/starWhyUs.png";
import whyImg5 from "../../assets/WhyUs/handChat.png";
import whyImg6 from "../../assets/WhyUs/puzzle.png";

const Cards = [
  {
    id: 1,
    image: whyImg1,
    number: 1,
    title: "Team",
    content:
      "A diverse and highly qualified team with over 20 years of combined expertise in the global education sector passionate about guiding clients to success.",
    backColor: "#D1EEF2",
    numBackColor: "#A2DDE6",
  },
  {
    id: 2,
    image: whyImg2,
    number: 2,
    title: "Delivery",
    content:
      "We focus on delivering the right solutions not just quickly, but meaningfully. Our goal is long-term value, built on trust and results.",
    backColor: "#FDF4D3",
    numBackColor: "#FAE8A7",
  },
  {
    id: 3,
    image: whyImg3,
    number: 3,
    title: "Need-Based Approach",
    content:
      "No two clients are the same. We take the time to listen, understand your goals, and tailor our solutions to meet your specific needs with clarity and precision.",
    backColor: "#EBF6ED",
    numBackColor: "#D7EEDC",
  },
  {
    id: 4,
    image: whyImg4,
    number: 4,
    title: "Accreditation",
    content:
      "We work closely with leading accreditation bodies across the U.S. and U.K. including ICEF Academy, NAFSA, and AIRC to align our clients with programs that meet global standards.",
    backColor: "#D2DAE1",
    numBackColor: "#A5B4C3",
  },
  {
    id: 5,
    image: whyImg5,
    number: 5,
    title: "Research and Execution",
    content:
      "Grounded in the latest industry trends and insights, we collaborate with top institutions and experts to design practical, effective strategies for academic and professional advancement.",
    backColor: "#FFE2DF",
    numBackColor: "#FFC5C0",
  },
  {
    id: 6,
    image: whyImg6,
    number: 6,
    title: "Partnerships",
    content:
      "Our strength lies in our global network. We partner with top-tier academic and professional institutions worldwide to open doors and create lasting impact.",
    backColor: "#EFF0F9",
    numBackColor: "#DFE1F3",
  },
];

export default function WhyUs() {
  return (
    <>
      <div className="whyContainer">
        <div>
          <Heading
            title={"Why intellectway"}
            content={
              "Our advising team delivers a personalized, high-touch experience rooted in professionalism, cultural understanding, and a commitment to excellence. Every client engagement is guided by a structured approach designed to ensure clarity, efficiency, and meaningful results."
            }
          />
        </div>
        <div className="whyCards">
          {Cards.map((card) => {
            return (
              <WhyCard
                key={card.id}
                whyImg={card.image}
                number={card.number}
                whyTitle={card.title}
                whyContent={card.content}
                backColor={card.backColor}
                numBackColor={card.numBackColor}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
