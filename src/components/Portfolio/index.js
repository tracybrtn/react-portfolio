import React from "react";
import Project from "../Project";

function Portfolio() {
  //Array of 6 projects
  const projects = [
    { title: "The Sun Hotel",
      link: "https://the-sun-hotel-hcmc.herokuapp.com/",
      img: "the-sun-hotel.png",
      github: "https://github.com/tracybrtn/the-sun-hotel/",},
    {
      title: "Hamburger Helper Recipe Forum",
      link: "https://murmuring-dawn-13881.herokuapp.com/",
      img: "hamburger-helper.png",
      github: "https://github.com/tracybrtn/Hamburger-Helper-Recipe-Forum",
    },
    {
      title: "Travel with Knowledge",
      link: "https://tracybrtn.github.io/travel-with-knowledge/",
      img: "travel-with-knowledge.png",
      github: "https://github.com/tracybrtn/travel-with-knowledge",
    },
    {
      title: "Just Another Text Editor",
      link: "https://github.com/tracybrtn/just-another-text-editor",
      img: "just-another-text-editor.png",
      github: "https://dry-river-17496.herokuapp.com/",
    },
    {
      title: "Code Quiz",
      link: "https://tracybrtn.github.io/code-quiz/",
      img: "code-quiz.png",
      github: "https://github.com/tracybrtn/code-quiz",
    },
    {
      title: "Weather Dashboard",
      link: "https://tracybrtn.github.io/weather-dashboard/",
      img: "weather-dashboard.png",
      github: "https://github.com/tracybrtn/weather-dashboard",
    }
  ]
  return(
    <section className="d-flex flex-column align-items-center">
      <h2 id="portfolio">Portfolio</h2>
      <div id="project-section" className="d-flex flex-column align-items-center">
            <Project projects={projects[0]}></Project>
            <Project projects={projects[1]}></Project>
            <Project projects={projects[2]}></Project>
            <Project projects={projects[3]}></Project>
            <Project projects={projects[4]}></Project>
            <Project projects={projects[5]}></Project>
      </div>
    </section>
  );
}

export default Portfolio;