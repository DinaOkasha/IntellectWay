import Heading from "../Shared/Heading/Heading";
import "./Blog.css";
import BlogCardMain from "./BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

//import swipper
// import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

const BlogCardArray = [
  {
    id: 1,
    BlogTitle:
      "The Intellectway Approach: Bridging Cultures, Systems, and Success",
    BlogSubtitle:
      "Let’s face it, education isn’t one-size-fits-all. Especially when you’re an international student navigating unfamiliar systems, expectations, and even languages. That’s where Intellectway steps in not as a service provider, but as a strategic partner in academic and personal growth.",
    BlogDate: "2025-6-30",
  },
  {
    id: 2,
    BlogTitle:
      "Education That Works: How Intellectway Designs Progr That Stick",
    BlogSubtitle:
      "A lot of companies talk about “innovative education.” We actually build it. At Intellectway, we believe that if a training or academic programs isn’t practical, relevant, and personalized, then it’s just noise.",
    BlogDate: "2025-06-30",
  },
  {
    id: 3,
    BlogTitle:
      "From Idea to Impact: The Real Value of Intellectway’s Educational Model",
    BlogSubtitle:
      "A training session is just a few hours. A course might last a semester. But the impact of great education? That lasts a lifetime.",
    BlogDate: "2025-06-30",
  },
  {
    id: 4,
    BlogTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
    BlogSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    BlogDate: "2025-06-30",
  },
  {
    id: 5,
    BlogTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
    BlogSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    BlogDate: "2025-06-30",
  },
];

export default function Blog() {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="BlogContainer">
        <div className="BlogHeading">
          {" "}
          <Heading
            title={"Latests Blog Posts"}
            content={"Discover news, insights, and success stories"}
          />
        </div>

        <div className="BlogCards">
          {/* <SwiperComponent
            slidesPerView={3}
            spaceBetween={130}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {BlogCardArray.map((card) => (
              <SwiperSlide key={card.id}>
                <BlogCardMain
                  BlogTitle={card.BlogTitle}
                  BlogSubtitle={card.BlogSubtitle}
                  BlogDate={formatter.format(new Date(card.BlogDate))}
                />
              </SwiperSlide>
            ))}
          </SwiperComponent> */}

          {BlogCardArray.map((card) => (
            <BlogCardMain
              key={card.id}
              BlogTitle={card.BlogTitle}
              BlogSubtitle={card.BlogSubtitle}
              BlogDate={formatter.format(new Date(card.BlogDate))}
            />
          ))}
        </div>

        <div className="BlogFooter">
          <div className="slider">
            <span className="oneBlog"></span>
            <span className="twoBlog"></span>
            <span className="threeBlog"></span>
            <span className="fourBlog"></span>
          </div>
          <div className="Blogbtn">
            <button>
              View More{" "}
              <FontAwesomeIcon
                style={{ marginLeft: "8px" }}
                icon={faAngleRight}
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

//   <Swiper
//         // slidesPerView={3}
//         // spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>{BlogCardArray.map((card) => (
//             <BlogCardMain
//               key={card.id}
//               BlogTitle={card.BlogTitle}
//               BlogSubtitle={card.BlogSubtitle}
//               BlogDate={formatter.format(new Date(card.BlogDate))}
//             />
//           ))}</SwiperSlide>

//       </Swiper>
