import React from "react";
import "./index.scss";

export default function Contacts() {
  return <div className="contacts">
    <div className="main-container d-flex row p-5">
      <div className="left p-3 col-12 col-md-6">
        <form action="">
          <h2>Send Me A Message</h2>

          <input type="text" className="form-control" placeholder="Name" />
          <input type="email" className="form-control" placeholder="Email" />
          <input type="text" className="form-control" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="6" className="form-control" placeholder="Message"></textarea>
          <input type="button" value="Send Message"  className="btn  mt-3" />
        </form>
      </div>
      <div className="right p-3 col-12 col-md-6">
      <h2>Contact Me</h2>


     
      <h5 className="my-2"> <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
 <span>Address:</span> <span>Shoubra ,Cairo</span></h5>

      <h5 className="my-2"> <i class="fa fa-mobile fa-lg" aria-hidden="true"></i>
 <span>Phone:</span> <span>01158793928</span></h5>
      <h5 className="my-2"> <i class="fa fa-envelope" aria-hidden="true"></i>
 <span>Gmail:</span> <span>abdelazizmohamed12121@gmail.com</span></h5>

      <div className="icons d-flex justify-content-around w-100">
        <a href="https://github.com/abdelaziz123456"><i className="mx-3 fa fa-github-square fa-3x" aria-hidden="true"></i></a>
      
      <a href="https://www.linkedin.com/in/abdelaziz12315/"><i
            className="mx-3 fa fa-linkedin-square fa-3x"
            aria-hidden="true"
          ></i></a>
      
      </div>
      
      </div>
    </div>
  </div>;
}
