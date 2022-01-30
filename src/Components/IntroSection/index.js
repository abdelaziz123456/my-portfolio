import React from 'react';
import './index.scss';
import TypewriterComponent from 'typewriter-effect';
export default function IntroSection() {
  return <div className='intro-section'>
<div id="overlay">


      <div className="typewriter">

      <TypewriterComponent

      options={{
         
          delay:60
      }}
      
      onInit={(typewriter)=>{
          typewriter.typeString('<h1>Hello Everyone</h1> ')
          .pauseFor(1000)
          .deleteAll()
          .typeString(' <h1>I  am Abdelaziz Mohamed</h1>  	<br> <br> <h4> Web Developer specializing in front end development.</h4> <br> <br> <h5>Well-versed in numerous programming languages and frameworks including HTML5,CSS3,SASS,JavaScript, bootstrap,React js,Next js.</h5>')
          .start()
      }}       
      />


      </div>

      <div className="buttons d-flex justify-content-center pt-5 w-100">
          
              <a href='../cv/abdelaziz mohamed.pdf' className="btn btn-main" download>Get Cv</a>
      </div>
     

      </div>
  </div>;
}
