import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

export const Header = () => {
    useEffect(() => {
        let nav = document.querySelector(".header-wrapper");
        let link = document.querySelector(".nav-link");
        window.onscroll = function () {
          if (document.documentElement.scrollTop > 20) {
            nav.classList.add("header-scrolled");
            link.classList.add("scrolled-link")
          }
          else {
            nav.classList.remove("header-scrolled");
            link.classList.remove("scrolled-link")
          }
        }
      }, [])
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
            <header className="header-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand p-0 m-0" href="#">
                                    <img src={logo} className="img-fluid" />
                                    <span className="logo-text f2">Inca 2022</span>
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                    
                                    <i className="fa-solid fa-bars"></i>
                                    
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav menu-navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item d-none">
                                            <Link className="nav-link" to="/sponsorship">Sponsorship</Link>
                                        </li>
                                     
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
