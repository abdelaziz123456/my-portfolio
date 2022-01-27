import React from "react";
import "./index.scss";
export default function Footer() {
  return (
    <div className="footer text-center pt-3 ">
      <p> &copy;Copyrights. All rights reserved.</p>

      <div className="d-flex justify-content-center">
        <a href="https://github.com/abdelaziz123456" target="_blank">
          <i className="mx-3 fa fa-github-square fa-2x" aria-hidden="true"></i>
        </a>

        <a href="https://www.linkedin.com/in/abdelaziz12315/" target="_blank">
          <i
            className="mx-3 fa fa-linkedin-square fa-2x"
            aria-hidden="true"
          ></i>
        </a>
        <a href="#">
          <i
            className="mx-3 fa fa-facebook-square fa-2x"
            aria-hidden="true"
          ></i>
        </a>

        <a href="#">
          <i className="mx-3 fa fa-twitter-square fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
