

import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";

import About from "./Components/About";
import Presentation from "./Components/Presentation";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";
import Contact from "./Components/Contact";

function App() {
  return (
  
    <div className="App">
     <Header/>
     <Feature/>
    
     <About image= {aboutimage} title="Here comes the money....money money" button= "Money Here"/>
     <Presentation/>
     <About image= {aboutimage1} title="Get your own money" button= "Download Money"/>
     <Contact/>
    </div>
  );
}

export default App;
