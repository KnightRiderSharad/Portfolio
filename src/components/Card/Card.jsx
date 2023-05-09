import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href="https://www.edureka.co/blog/front-end-developer-skills">
      <button className="c-button">KNOW MORE</button>
      </a>
    </div>
  );
};

export default Card;
