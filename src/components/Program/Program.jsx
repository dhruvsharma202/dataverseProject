import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Program = () => {
  return (
    <div className="programs" id="program">
      <div className="programs-heading">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="categories">
            {program.image}
            <span>{program.heading}</span>

            <span>{program.details}</span>
            <div className="join-me">
              <span>Join-me</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
