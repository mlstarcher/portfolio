import React from 'react'

export default function ProjectInstance({ currentProject }) {
  return (
    <div className="row py-5">
      <div className="col-sm-8 align-items-center justify-content-center">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={currentProject.videoUrl} allowFullScreen></iframe>
        </div>
      </div>
      <div className="col-sm-4 align-items-center justify-content-center">
        <div className="display-4">{currentProject.title}</div>
        <h5><small className="text-muted">{currentProject.technologies}</small></h5>
        <p>{currentProject.description}</p>
        <ul>
          <li>{currentProject.bulletPoints[0]}</li>
          <li>{currentProject.bulletPoints[1]}</li>
          <li>{currentProject.bulletPoints[2]}</li>
        </ul>
      </div>
    </div>
  )
}
