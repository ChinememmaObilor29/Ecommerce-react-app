import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/"><i className="fa-solid fa-shop me-2"></i> <strong>GEAR SHOP</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div className="input-group">
            <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" className="form-control border-warning" style={{color:"#7a7a7a"}}/>
            <button className="btn btn-warning text-white">Search</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto d-none d-lg-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className="form-control border-warning" style={{color:"#7a7a7a"}}/>
              <button className="btn btn-warning text-white">Search</button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-2 text-uppercase active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/product" className="nav-link mx-2 text-uppercase">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="#">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="#">Services</Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link mx-2 text-uppercase">About</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="#"><i className="fa-solid fa-cart-shopping me-1"></i> Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2 text-uppercase" to="#"><i className="fa-solid fa-circle-user me-1"></i> Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar