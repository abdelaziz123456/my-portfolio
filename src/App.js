import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Contacts from "./Components/Contacts";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
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
      <div class="spinner-grow text-light" role="status">
        <span class="visually-hidden">Loading...</span>
        
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="visually-hidden">Loading...</span>
        
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="visually-hidden">Loading...</span>
        
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="visually-hidden">Loading...</span>
        
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

          <Route exact path="/experience">
            <Experience />
          </Route>

          <Route exact path="/skills">
            <Skills />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

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
