import React, { useContext } from "react";
import "./Works.css";
import html5 from "../../img/html5.png";
import css3 from "../../img/css3.png";
import Developer from "../../img/Developer.jpg";
import Javscript from "../../img/Javscript.png";
import rered from "../../img/rered.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills I have as a
          </span>
          <span>Frontend Developer</span>
          <spane>
            I am skilled, flexible and adaptive in learning skills..
            <br />
            I am skilled in languages like- <span className="lang">HTML5, CSS3, Javascript, ReactJs,
            <br />
            Redux, Responsive Designing.</span>
            <br />
            My skills are my strength and I will be an Asset to the Company if
            <br />
            I am choosen to be contribute.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={html5} alt="" className="html"/>
          </div>
          <div className="w-secCircle">
            <img src={css3} alt="" className="css"/>
          </div>
          <div className="w-secCircle">
            <img src={Developer} alt="" className="front"/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Javscript} alt="" className="js"/>
          </div>
          <div className="w-secCircle">
            <img src={rered} alt="" className="rered"/>
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
