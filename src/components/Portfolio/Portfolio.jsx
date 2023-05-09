import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Tribute from "../../img/Tribute.jpeg";
import ToDo from "../../img/ToDo.jpeg";
import calC from "../../img/calC.jpeg";
import shop1 from "../../img/shop1.jpeg";
import shop2 from "../../img/shop2.jpeg";
import movie1 from "../../img/movie1.jpeg";
import movie2 from "../../img/movie2.jpeg";
import codebook1 from "../../img/codebook1.jpeg";
import codebook2 from "../../img/codebook2.jpeg";
import Crypto1 from "../../img/Crypto1.jpeg";
import Crypto2 from "../../img/Crypto2.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Tribute} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ToDo} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={calC} alt="" id="first"/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={shop1} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={shop2} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie1} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie2} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={codebook1} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={codebook2} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Crypto1} alt="" id="first"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Crypto2} alt="" id="first"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
