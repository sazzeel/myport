import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from "./assets/Header";
import About from "./components/About";
import AddEdit from "./components/AddEdit";
import Home from "./components/Home";
import View from "./components/View";


function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    <ToastContainer position="bottom-center"/>
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/add" element={<AddEdit/>} />
      <Route path = "/update/:id" element={<AddEdit/>} />
      <Route path = "/about" element={<About/>} />
      <Route path = "/view/:id" element={<View/>} />
      
    </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default App
