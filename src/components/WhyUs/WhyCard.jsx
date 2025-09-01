export default function WhyCard({
  whyImg,
  number,
  whyTitle,
  whyContent,
  backColor,
  numBackColor,
}) {
  return (
    <>
      <div className="whyCard" style={{ background: backColor }}>
        <div className="whyUpper">
          <div className="upperImg">
            <img src={whyImg} alt="" />
          </div>
          <div className="number" style={{ background: numBackColor }}>
            {number}
          </div>
        </div>
        <div className="lowerContent">
          <h1>{whyTitle}</h1>
          <p>{whyContent}</p>
        </div>
      </div>
    </>
  );
}
