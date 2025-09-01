import "./heading.css";

export default function Heading({ title, content }) {
  return (
    <>
      <div className="sharedHeading">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="headContent">
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
