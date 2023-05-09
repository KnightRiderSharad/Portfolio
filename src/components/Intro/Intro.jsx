import React, { useContext } from "react";
import "./Intro.css";
import Back1 from "../../img/Back1.jpg";
import Tech2 from "../../img/Tech2.jpg";
import sharad from "../../img/sharad1.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span >Kumar Sharad</span>
          <span>
            A Frontend focused Web Developer building the frontend of Websites and Web Applications 
            that leads to the success of the overall product 
            <br/>and development, producing the Quality work..
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/KnightRiderSharad"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/kumar-sharad-49a276129/"><img src={LinkedIn} alt="" /></a>
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Back1} alt=""  className="ima1"/>
        <img src={Tech2} alt="" className="ima2"/>
        <img src={sharad} alt="" className="sharad" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Frontend" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Kumar Sharad" text2="Computer Science Engineering" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
