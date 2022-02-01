import React from "react";
import "./index.scss";
import { projects } from "../../data";
export default function ProjectDetails(props) {
  let project = projects.filter((proj) => {
    return proj.id == props.match.params.id;
  })[0];
  return (
    <div className="project-details">
      <div className="layer d-flex flex-column justify-content-center align-items-center">



        <h3 className="mt-3">{project.name}</h3>


        {/* carousel start */}

        <div
          id="carouselExampleControls"
          className="carousel slide m-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active  ">
              <img
                src={process.env.PUBLIC_URL + project.images[0]}
                className="img-fluid  "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + project.images[1]}
                className="img-fluid  "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + project.images[1]}
                className="img-fluid  "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>



        {/* carousel end */}


        {/* description start */}
        <div className="description w-100 ps-5  ">
          <p className=" m-3 text-start"><ins className="h5">Description</ins>: {project.description}</p>

        </div>
        {/* description end */}

        {/* tools start */} 
        <div className="tools   w-100 ps-5">
          <p className=" m-3 text-start"> <ins className="h5">used tools</ins>  :{project.usedTools.join()}</p>

        </div>
        {/* tools end */}


      </div>
    </div>
  );
}
