import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <ToastContainer position = "top-center"/>
        <Routes>
          <Route path = "/" element= {<Home/>} />
          <Route path = "/addContact" element= {<AddEdit/>} />
          <Route path = "/update/:id" element= {<AddEdit/>} />
          <Route path = "/view/:id" element= {<View/>} />

          
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App
