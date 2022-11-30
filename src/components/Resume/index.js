import React from "react";
import ResumePdf from "../../../src/assets/files/TRACY BURTON BRAVO - RESUME.pdf";

function Resume(){
  return(

  <section>
    <h1 id="resume">Resume</h1>
    <a href={ResumePdf} download>Download my resume</a>
    <h2>Developer Proficiencies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>node.js</li>
      <li>State</li>
    </ul>
  </section>
  );
}

export default Resume;