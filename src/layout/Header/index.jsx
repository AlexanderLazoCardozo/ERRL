import React from 'react'

import './style.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 


const Header = () => {
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png" alt="" />
      </div>
      <div className="l_header_menu">
        <div>
          <p>Home</p>
        </div>
        <div>
          <p>Heros</p>
        </div>
        <div>
          <p>Otros</p>
        </div>
        <Link to="/Creditos">
          Creditos
        </Link>
        <Link to="/Fuentes">
          Fuentes
        </Link>
      </div>
    </div>
  )
}

export default Header
