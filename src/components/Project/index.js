import React, { useState } from "react";

function Project(props){
  //imports information for current project
  const currentProject = useState(props)[0].projects;

  const img = currentProject.img
  const title = currentProject.title;
  const link = currentProject.link;
  const github = currentProject.github;
  const description = currentProject.description;
  const tech = currentProject.tech;
  const alt = `Deployed ${title} website`

  return (
    <div className="project">
      <h3>{title}</h3>
      <div className="image-container">
        <a 
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require(`../../assets/projects/${img}`)}
            className="project-img" alt={alt}></img>
        </a>
        <div className="hover-text">
            <p>{description}</p>
            <ul className="tech-list">
              {tech.map((technologies) => (
                <li 
                  className="tech-item"
                  key= {technologies}
                >{technologies}</li>
              ))}
            </ul>
        </div>
      </div>
      <br></br>
      <div className="project-info">
      <a 
          href={github}
          target="_blank"
          rel="noreferrer"
      >Github Repository</a>
      </div>
    </div>
  )
}

export default Project;