import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} className="img" alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kumar.sharad.123123@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"2rem"} />
          <Facebook color="white" size={"2rem"} />
          <Gitub color="white" size={"2rem"} />
         
    
        </div>
        
        <div className="copy">
        
          <span>@Copyright 2023, made by <a className="anch" href="">Kumar Sharad</a></span>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;
