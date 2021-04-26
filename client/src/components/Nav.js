import React from 'react'
import { Link }  from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      {/* <a className="navbar-brand" href="/"> */}
        <img src="https://msportfoliocontent.s3-us-west-1.amazonaws.com/MS+Logo.png" className="navbar-brand w-25 img-fluid" alt="Responsive image" ></img>
      {/* </a> */}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav  ml-auto">
          <Link className="nav-item nav-link ml-auto h3" to='/'>
            About <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link ml-auto h3" to='/projects'>
            Projects
          </Link>
          <Link className="nav-item nav-link ml-auto h3" to='/resume'>
            Resume
          </Link>
          <Link className="nav-item nav-link ml-auto h3" to='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
