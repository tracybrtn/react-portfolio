import React from "react";
import Project from "../Project";

function Portfolio() {
  //Array of 6 projects
  const projects = [
    { title: "The Sun Hotel",
      link: "https://the-sun-hotel-hcmc.herokuapp.com/",
      img: "the-sun-hotel.png",
      github: "https://github.com/tracybrtn/the-sun-hotel/",
      description: "MERN full-stack application that allows The Sun Hotel's customers to login and book a reservation, as well as to learn more about the hotel.",
      tech: ["MERN full-stack", "React", "Heroku"]},
    {
      title: "Hamburger Helper Recipe Forum",
      link: "https://murmuring-dawn-13881.herokuapp.com/",
      img: "hamburger-helper.png",
      github: "https://github.com/tracybrtn/Hamburger-Helper-Recipe-Forum",
      description: "Full-stack application that allows users to share their favorite recipes with a community of like-minded individuals. Users must sign up and log in in order to post recipes.",
      tech: ["node.js", "express.js", "sequelize", "handlebars"],
    },
    {
      title: "Travel with Knowledge",
      link: "https://tracybrtn.github.io/travel-with-knowledge/",
      img: "travel-with-knowledge.png",
      github: "https://github.com/tracybrtn/travel-with-knowledge",
      description: "Front-end application that uses third-party APIs to consolidate travel information for users interested in international travel. Phase 1 was focused on travel safety.",
      tech: ["HTML5", "CSS", "JavaScript", "Third-party APIs"],
    },
    {
      title: "Just Another Text Editor",
      link: "https://github.com/tracybrtn/just-another-text-editor",
      img: "just-another-text-editor.png",
      github: "https://dry-river-17496.herokuapp.com/",
      description: "Single-page text editor that meets PWA criteria. Application features a number of data persistence techniques that serve as redundancies in case one of the options is not supported by the browser. Application also functions offline.",
      tech: ["node.js", "manifest", "indexedDB", "service worker", "webpack", "Heroku"]
    },
    {
      title: "Code Quiz",
      link: "https://tracybrtn.github.io/code-quiz/",
      img: "code-quiz.png",
      github: "https://github.com/tracybrtn/code-quiz",
      description: "A JavaScript timed coding quiz with multiple-choice questions inspired by coding assessments",
      tech: ["HTML5", "CSS", "JavaScript"],
    },
    {
      title: "Weather Dashboard",
      link: "https://tracybrtn.github.io/weather-dashboard/",
      img: "weather-dashboard.png",
      github: "https://github.com/tracybrtn/weather-dashboard",
      description: "Front-end application that provides current and future weather information for cities around the world using the Open Weather API",
      tech: ["HTML", "CSS", "JavaScript", "Open Weather API"],
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