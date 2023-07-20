import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(uiProps) {
   const setBackgroundColor = (event, color ="#333") => {
      event.target.checked ? uiProps.setCustomBg(color) : uiProps.setCustomBg('');
      if (uiProps.customBg === '') {
         uiProps.handleUiToggle();
      } else {
         document.body.style.backgroundColor = uiProps.customBg;
      }
   }
   return (
      <>
         <nav className={`navbar navbar-expand-lg navbar-${uiProps.mode} bg-${uiProps.mode}`}>
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">{uiProps.myName}</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">{uiProps.aboutText}</Link>
                     </li>
                  </ul>
                  <div className="d-flex form-check form-switch" >
                     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={event => setBackgroundColor(event, "#2fe4")}/>
                  </div>
                  <div className="d-flex form-check form-switch" onChange={uiProps.toggleUi}>
                     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault1"/>
                  </div>
                  <form className="d-flex" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
               </div>
            </div>
         </nav>
      </>
   )
}

Navbar.propTypes = {
   myName: PropTypes.string,
   aboutText: PropTypes.string,
}

Navbar.defaultProps = {
   myName: "Set Name Here",
   aboutText: "About"
}