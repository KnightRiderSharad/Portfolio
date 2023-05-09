import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Accio from "../../img/Acciojob.jpg";
import Oasis from "../../img/Oasis Infobyte.jpg";
import TCS from "../../img/TCS_Logo.jpg";
import Durga from "../../img/DurgaSoft.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: Oasis,
      review:
        "Oasis Infobyte offers me a great opportunity of Web Development Internship Practical Work Experience And An Introduction To Creating And Improving Web-Based Systems. This Internship Will Involve Challenging Opportunities, Real World Projects. It’s A Fantastic Opportunity To Gain Hands-On Experience In The Web And/Or App Development Field. Verified Certificates are uploaded on Linkedin",
    },
    {
      img: Accio,
      review:
        "After joining AccioJob I am skilled and was able to learn a lot and upskill myself in coding and full-stack web development.The live classes, daily assignments and doubt sessions made sure that everything was crystal clear to everyone. The multiple mock interviews are a very good simulation for the actual interviews and the feedback after those interviews is very helpful. Verified Certificates are uploaded on Linkedin",
    },   
    {
      img: Durga,
      review:
        "I am really grateful to Durga Sir who taught me Core java, Basics of UI Designs, which helpful for me to upskill myself. DURGA SOFTWARE SOLUTIONS an ISO 9001:2008 Certified Organization,adivsion of Durga organizations is the one and only place providing in-depth training on all latest Java/J2ee technologies and Java Certifications for the last decade.Verified Certificates are uploaded on Linkedin.",
    },

    {
      img: TCS,
      review:
        "I am grateful to TCS Company that they provide me this opportunity and I certified as TCS iON Career Edge - Young Professional from their Company. It is a free to access 15-day career preparedness course that has been designed with the intent to equip the youth of today with core employability skills to take on the future.. Verified Certificates are uploaded on Linkedin",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span className="intern">My Internship </span>
        <span>And </span>
        <span className="cert">Certifications...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}> </div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
