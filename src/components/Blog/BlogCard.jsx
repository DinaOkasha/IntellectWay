import BlogArrow from "../../assets/Blog/send.png";

export default function BlogCardMain({ BlogTitle, BlogSubtitle, BlogDate }) {
  return (
    <>
      <div className="BlogCard">
        <div className="BlogContent">
          <h1>{BlogTitle}</h1>
          <p>{BlogSubtitle}</p>
        </div>
        <div className="BlogFrame">
          <div className="BlogDate">{BlogDate}</div>
          <div className="BlogArrow">
            <img src={BlogArrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
