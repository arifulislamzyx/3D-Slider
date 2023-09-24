import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import img1 from "./assets/images/imge1.jpg";
import img2 from "./assets/images/image2.jpg";
import img3 from "./assets/images/image3.jpg";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Food Station</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        //animated dot pagination
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
