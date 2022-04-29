import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component 
export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <button className="navbar-brand btn btn-primary">React</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* Link to Home */}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      {/* Add user button to link to addUser component */}
      <Link to="/adduser" className='btn btn-primary'>
        Add User
      </Link>
    </div>
  </div>
</nav>
  )
}