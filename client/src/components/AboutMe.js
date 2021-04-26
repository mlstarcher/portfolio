import React from 'react'

import About from '../content/AboutMe';

export default function AboutMe() {
  return (
    <div className="container pt-5">
      <div className="row justify-content-center align-items-start mt-2">
        <div className="col-md-6">
          <img className="img-fluid" style={{ borderRadius: "50% 50% 0 0" }} src="https://msportfoliocontent.s3-us-west-1.amazonaws.com/Profile.jpg"></img>
        </div>
      {/* </div> */}
      {/* <div className="row justify-content-center"> */}
        <div className="col-md-6">
          <h1 className="display-4">Matthew Starcher</h1>
          <h5>Software Engineer:<br />
            <small className="text-muted">Handy with javascript, great with humans</small>
          </h5>
          <p>{About.paragraphOne}</p>
          <p>{About.paragraphTwo}</p>
          <p>{About.paragraphThree}</p>
        </div>
      </div>
    </div>
  )
}
