import React from "react";
import './index.scss'
export default function Skill(props) {
  return (
    <div className="skill col-6 col-sm-4 col-md-3 p-3  ">
      <div className="container  p-3">
        <h5>{props.name}</h5>
        <img
          src={process.env.PUBLIC_URL + props.image}
          width="55"
          height="55"
          alt=""
        />
      </div>
    </div>
  );
}
