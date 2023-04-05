import React,{useState} from "react";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from "./routes/Home";
import {Route, Routes} from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
function App() {
  const [currentForm , setcurrentForm]= useState('login');

  const toggleForm = (formName)=>{
    setcurrentForm(formName);
  }
  return (
   <>
    <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    {/*currentForm === "login"?<Login onFormSwitch={toggleForm}/>: <Register onFormSwitch={toggleForm}/> */}
     
   </>
  );
}

export default App;
