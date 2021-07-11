import React from 'react';
import "./Nav.css";


function Nav() {

    return(
        <>

<nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <a href="/" class="nav-link">
          <span className="link-text logo-text">What if ?</span>
          
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>

      <li className="nav-item">
        <a href="/tech" className="nav-link">
          <div style={{fontsize: "50px"},{color:"#01949A"}}>
            <i class="fas fa-microchip fa-lg"></i>
          </div>
          
          <span className="link-text">Tech</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="/Sports" className="nav-link">
          <div style={{color:"rgb(111, 255, 0)"}}>
          <i class="fas fa-baseball-ball fa-lg"></i>
        </div>
          <span className="link-text">Sports</span>
        </a>
      </li>


      <li className="nav-item">
        <a href="/Space" className="nav-link">
          <div style={{fontsize: "40px"},{color:"#bf6cff"}}>
            <i class="fas fa-rocket fa-lg"></i>
          </div>
          <span className="link-text">Space</span>
        </a>
      </li>


      <li className="nav-item">
        <a href="/Eco" className="nav-link">
          <div style={{fontsize: "40px"},{color:"#FFD523"}}>
            <i class="fas fa-chart-line fa-lg"></i>
          </div>
          <span className="link-text">Economy</span>
        </a>
      </li> 


      <li className="nav-item">
        <a href="/Edu" className="nav-link">
          <div style={{fontsize: "40px"},{color:"#ff6f00"}}>
            <i class="fas fa-user-graduate fa-lg"></i>
          </div>
          <span className="link-text">Education</span>
        </a>
      </li>


    </ul>
  </nav>
        </>
    );
}
//"#bf6cff"
//rgb(111, 255, 0)
//color:#01949A;

export default Nav;