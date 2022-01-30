import React from "react";
import './index.scss';
import {projects} from '../../data'
import Project from "../Project";
export default function Projects() {
  return <div className="projects d-flex justify-content-center align-items-center p-5">
    
    <div className="layer row p-5">
   

    {
      projects.map((project)=>{
        return (
          <Project project={project} />
        )
      })
    }
    
    </div>

    
    </div>;
}
