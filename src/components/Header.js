import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
<div>
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="#page-top">ALAT MUSIC STORE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars ms-1" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li className="nav-item"><a className="nav-link" href="#jenisalatmusik">Jenis Alat Musik</a></li>
          <li className="nav-item"><a className="nav-link" href="#listalatmusik">List Alat Musik</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          <Link to={"/dashboard"}>
          <li className="nav-item"><a className="nav-link" >Dashboard</a></li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Welcome To Musical Instrument Shop</div>
      <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
      <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
    </div>
  </header>
</div>

    </>
  )
}

export default Header
