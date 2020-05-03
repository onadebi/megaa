import React from 'react';
import {NavLink, BrowserRouter,Switch} from 'react-router-dom'
import _LayoutDefault from './_LayoutDefault';

//Stateless Functional Components
export default function NavBar(props) {
  return (
    <React.Fragment>
    <div className="top-nav d-md-flex pb-lg-0" style={{backgroundColor:'#2a2a2a',color:'#fff', fontSize:'smaller'}}>
        <span className="pl-lg-5 my-lg-1 pl-md-5 ml-lg-2 mr-md-auto d-flex py-md-2 pt-2 justify-content-center" style={{fontStyle:'italic'}}>
            »Knowledge for empowerment
        </span>
        <span className="d-flex justify-content-center pr-md-5 mr-lg-3 py-md-2 pb-2 my-lg-1">Helpline: <a href="tel:+234808039375759" id="phone" className="pl-2" style={{textDecoration:'none'}}> +234 (0) 8039375759</a></span>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#fff', minHeight:'50px',borderBottom: '1px dashed #2a2a2a'}}>
    <a className="navbar-brand" href="/">Megaa Hearing Impaired Foundation</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse pr-5" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutus" className="nav-link" activeClassName="onx-link-active">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/school" className="nav-link" activeClassName="onx-link-active">Our school</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className="nav-link" activeClassName="onx-link-active">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contactus" className="nav-link" activeClassName="onx-link-active">Contact us</NavLink>
        </li>     
      </ul>
    </div>
  </nav>
  </React.Fragment>    
  )
}
