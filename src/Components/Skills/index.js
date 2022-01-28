import React from "react";
import Skill from "../Skill";
import "./index.scss";
export default function Skills() {
  let skills = [
    { name: "HTML5", image: '/img/skills/html5.svg' },
    { name: "CSS3", image: '/img/skills/css3.svg' },
    { name: "Bootstrap", image: '/img/skills/bootstrap-5-1.svg' },
    { name: "SASS", image: '/img/skills/sass-1.svg' },
    { name: "JAVASCRIPT", image: '/img/skills/javascript-1.svg' },
    { name: "REACT JS", image: '/img/skills/react.svg' },
    { name: "TYPESCRIPT", image: '/img/skills/typescript.svg' },
    { name: "GIT", image: '/img/skills/git-icon.svg' },
    { name: "GITHUB", image: '/img/skills/github-icon-1.svg' },
    { name: "ADOBE XD", image: '/img/skills/adobe-xd-1.svg' },
    { name: "NEXT JS", image: '/img/skills/next-js.svg' },
    { name: "TAILWIND ", image: '/img/skills/tailwind-css-2.svg' },
  ];
  return (
    <div className="skills d-flex justify-content-center align-items-center">
      <div className="main-container row p-3">
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
