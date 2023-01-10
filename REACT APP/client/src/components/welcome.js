import React from 'react'
//import { useNavigate } from "react-router-dom";
const welcome = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


       <div className="jumbotron container mt-5 "style={{display:"block",width:"1000%"}}  >
        <center>
        <h1 style={{"text-align":"center","fontFamily":"Bodoni MT BlacCopperplate Gothic Bold"}} className="display-4">FACE-RECOGNITION WEBPAGE</h1>
        <br></br>
        <p className="lead" style={{"fontFamily":"Calibri (Body)"}}> Welcome to face recognition website.This page detects face from the provided dataset of 100 people.Explore many things by logging-in into the website.</p>
        <hr className="my-4" />
        <p>It uses deeplearning model yolov5 to detect the face.This a single page application developed in React-js.</p>
      <br/>
        <a className="btn btn-info btn-lg" href="/signup" role="button" style={{background:"#715Df2"}}>Signup</a>
        <br></br>
        <section>
          <br></br>
        </section>
        <a className="btn btn-info btn-lg" href="/login" role="button" style={{background:"#715Df2"}}>Login</a>
        </center>
        &nbsp;&nbsp;&nbsp;&nbsp;</div>

    </>
  )
}

export default welcome;