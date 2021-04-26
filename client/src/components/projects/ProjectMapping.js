import React from 'react'

import projectList from '../../content/ProjectList'
import ProjectInstance from './ProjectInstance'

export default function ProjectMapping() {
  console.log(projectList)
  return (
    <div className="container">
      {projectList.map((currentProject, key) => {
        return <ProjectInstance currentProject={currentProject} key={key}/>
      })}
    </div>
  )
}
