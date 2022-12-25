import React from "react"

//About me section is the default section
import avatarImage from "../../../src/assets/images/Avatar-Tracy.png";

function About() {
  return(
    <section id="about-me" className="d-flex flex-column">
      <div className="box">
        <div>
          <h2>About me</h2>
        </div>
        <div className="container">
          <img src={avatarImage} alt="Tracy Burton Bravo smiling."></img>
        </div>
        <div className="description">
          <p>
          Full stack web developer and global affairs graduate with an extensive record of teamwork and leadership experience. Motivated and reliable professional who thrives in fast-paced, dynamic environments. Third-culture kid, bilingual English and Spanish speaker, pop-culture connoisseur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;