import { Link } from "react-router-dom";
import "./HeaderStyles.css";
import { MenuItems } from "./MenuItems";

import React, { useState } from 'react'

export default function Header() {
   const [state,setState] = useState({clicked: false})
  const handleClick = ()=>{
    setState({clicked : !state.clicked})
  }
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Foodie</h1>
     <div className="menu-icons" onClick={handleClick}>
      <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
     </div>
     <ul className={state.clicked ? "nav-menu active": "nav-menu"}>
        {
            MenuItems.map((item,index)=>{
                return(
                  
                    <li key={index}>
                    <Link to={item.url} className={item.cName}>
                     <i className={item.icon}></i>
                     {item.title}</Link>
                    </li>
                    
            )
            })
        }
      <button>Sign Up</button>
     </ul>
      </nav>
    </div>
  )
}
