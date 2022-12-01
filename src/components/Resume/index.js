import React from "react";
import ResumePdf from "../../../src/assets/files/TRACY BURTON BRAVO - RESUME.pdf";

function Resume(){
  return(

  <section id="resume" className="d-flex flex-column justify-content-center">
    <h2>Resume</h2>
    <a href={ResumePdf} download>Download my resume</a>
    <div id="resume-proficiencies" className="d-flex flex-column justify-content-center">
      <h3>Developer Proficiencies</h3>
      <div>
        <h4>Front-end</h4>
        <p>HTML</p>
        <p>CSS</p>
        <p>js</p>
        <p>jQuery</p>
        <p>Bootstrap</p>
      </div>
      <div>
        <h4>Back-end</h4>
        <p>node.js</p>
        <p>APIs</p>
        <p>express.js</p>
        <p>PWA</p>
        <p>MySQL</p>
        <p>NoSQL</p>
        <p>MongoDB</p>
      </div>
    </div>
 
  </section>
  );
}

export default Resume;