import React from 'react'
import PropTypes from 'prop-types'


export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mx-3`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="/788629.png" alt="Logo" className="logo mx-1" style={{ width: '25px', height: '25px' }} />{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="/About">About</a>
        </li>
      </ul>
      <div className={`form-check form-switch mx-2 text-${props.mode==='light'? 'dark' : 'light'}`}>
      {/*<i class="fa-solid fa-palette"></i>*/}
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>  
      </div>
    </div>
    
  </div>
</nav>
  )
}

NavBar.propTypes = {title: PropTypes.string, }