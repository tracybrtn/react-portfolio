import React, { useState } from "react";

function Project(props){
  //imports information for current project
  const currentProject = useState(props)[0].projects;

  const img = currentProject.img
  const title = currentProject.title;
  const link = currentProject.link;
  const github = currentProject.github;

  return (
    <div className="project">
      <div className="image-container">
        <img
          src={require(`../../assets/projects/${img}`)}
          className="project-img"></img>
      </div>
      <div className="project-info">
        <p>{title}</p>
        <p>{link}</p>
        <p>{github}</p>
      </div>
    </div>
  )
}

export default Project;