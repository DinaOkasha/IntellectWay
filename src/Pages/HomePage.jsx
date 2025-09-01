// import Hero from "../components/Hero/Hero";
// import Hero2 from "../components/Hero/Hero2";
// import Hero3 from "../components/Hero/Hero";
// import Hero4 from "../components/Hero/Hero4";
// import About from "../components/About/About";
// import Opportunities from "../components/Opportunities/Opportunities";

// export default function HomePage() {
//   return (
//     <>
//       {/* <Hero /> */}
//       <Swiper />
//       <About />
//       <Opportunities />
//     </>
//   );
// }

// HomePage.tsx / HomePage.jsx
import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero/Hero2";
import Hero3 from "../components/Hero/Hero"; // ✅ correct file
import Hero4 from "../components/Hero/Hero4";
import About from "../components/About/About";
import Opportunities from "../components/Opportunities/Opportunities";

// ✅ import the React wrapper + modules + styles
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Services from "../components/Services/Services";

export default function HomePage() {
  return (
    <>
      <SwiperComponent
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Hero2 />
        </SwiperSlide>
        <SwiperSlide>
          <Hero3 />
        </SwiperSlide>
        <SwiperSlide>
          <Hero4 />
        </SwiperSlide>
      </SwiperComponent>

      <About />
      <Opportunities />
      <Services />
    </>
  );
}
