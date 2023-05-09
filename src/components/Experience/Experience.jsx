import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
        <span  style={{color: darkMode?'white':''}}>Months </span>
        <span>Trainee Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>14+</div>
        <span  style={{color: darkMode?'white':''}}>Completed </span>
        <span>Mini & Major Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span  style={{color: darkMode?'white':''}}>Companies Internship </span>
        <span>Hands On Experience Projects</span>
      </div>
    </div>
  );
};

export default Experience;
