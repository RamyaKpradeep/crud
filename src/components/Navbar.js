import React from 'react';
import './Navbar.css'

const Header = () => {
  return (
    <div style={{marginBottom:'80px'}}>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand"  href="/Home" style={{color:'white'}}>Student Management</a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button> */}
        </div>
      </nav>
    </div>
  )
}

export default Header
