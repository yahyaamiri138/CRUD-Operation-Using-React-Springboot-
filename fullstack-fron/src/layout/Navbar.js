import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-black by-primary" style={{ background: 'blue' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> 
          Full Stack Application</Link>
          <button className="navbar-toggler"
            type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           <Link className="btn btn-outline-light" to="/adduser">
            Add User</Link>
        </div> 
      </nav>
    </div>
  )
}
export default Navbar;

