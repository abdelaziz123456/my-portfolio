import React from "react";
import Skill from "../Skill";
import "./index.scss";
import {skills} from '../../data'
export default function Skills() {
 
  return (
    <div className="skills d-flex justify-content-center align-items-center">
      <div className="main-container row p-3 mx-0">
        {skills.map(
         function (skill) {
           return (
             <Skill image={skill.image}   name={skill.name}/>
           )
          }
          //  <>
          //      <Skill image={skill.image} name={skill.name}/>
          //      </>
        )}
      </div>
    </div>
  );
}
