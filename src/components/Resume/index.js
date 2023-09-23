import React from "react";
import ResumePdf from "../../../src/assets/files/TRACY BURTON BRAVO - RESUME.pdf";

function Resume(){
  return(

  <section id="resume" className="d-flex flex-column justify-content-center">
    <h2>Resume</h2>
    <a  className="resume-text" href={ResumePdf} download>Download my resume</a>
    <br></br>
    <div id="resume-proficiencies" className="d-flex justify-content-center">
      <div>
        <h3>Technical Skills</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>jQuery</p>
        <p>Bootstrap</p>
        <p>node.js</p>
        <p>Restful APIs</p>
        <p>Handlebars</p>
        <p>MERN</p>
        <p>GraphQL</p>
        <p>MySQL</p>
        <p>NoSQL</p>
        <p>MongoDB</p>
      </div>
      <div>
        <h3>Soft Skills</h3>
        <p>Leadership</p>
        <p>Team Work</p>
        <p>Adaptability</p>
        <p>English/Spanish proficiency</p>
        <p>Compassion</p>
        <p>Patience</p>
        <p>Positive Attitude</p>
      </div>
    </div>
 
  </section>
  );
}

export default Resume;