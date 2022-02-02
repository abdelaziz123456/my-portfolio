import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Contacts from "./Components/Contacts";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import LearningSkills from "./Components/Learning&skills";

import ProjectDetails from "./Components/ProjectDetails";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  const [loaded,setLoaded]= useState(false)

  function setLoading(){
    setTimeout(()=>{
      setLoaded(true)
    },1500)
  }
  return <>

{
       
       setLoading()

     }


{!loaded ?
    <div className="loading">
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
        
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
        
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
        
      </div>
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
        
      </div>
    </div>

    :
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="main-content">
          <div className="overlay">
          <Route exact path="/">
            <IntroSection />
          </Route>

          <Route exact path="/my-portfolio">
            <IntroSection />
          </Route>

          

          <Route exact path="/learning">
            <LearningSkills />
          </Route>

          <Route exact path="/skills">
            <Skills />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/project/:id" 
          render={(props)=>{
            return <ProjectDetails {...props} />
          }}/>
           

          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
 }
    </>
}


export default App;
