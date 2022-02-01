import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.scss'
export default function Project(props) {

  let project=props.project;
  return <div className='project col-12 col-sm-6 col-md-4 col-lg-3 p-3 d-flex justify-content-center align-items-center'>
    <div className="layer d-flex flex-column justify-content-between align-items-center p-3">
    <h5 >{project.name}</h5>

    <img
          src={process.env.PUBLIC_URL + project.images[0]}
          width="120"
          height="170"
          alt=""
        />

        <div className="buttons">

          <div className="d-flex justify-content-between my-2">
          <a href={project.code} className="btn btn-dark me-2 " target='_blank'><i className="fa fa-code" aria-hidden="true"></i> </a>
          <a href={project.live} className="btn btn-dark ms-2" target='_blank'><i className="fa fa-eye" aria-hidden="true"></i> </a>
          </div>
         
          <Link to={`/project/${project.id}`} className="btn form-control btn-dark" > <i className="fa fa-arrow-circle-right" aria-hidden="true"></i> More Details</Link>
        </div>
    </div>
     
     </div>;
}


