import React from "react"

//About me section is the default section
import avatarImage from "../../../src/assets/images/Avatar-Tracy.png";

function About() {
  return(
    <section id="about-me" className="d-flex flex-column">
        <h2>About me</h2>
        <div className="container">
          <img src={avatarImage} alt="Tracy Burton Bravo smiling."></img>
        </div>
        <p>
          Full-stack web developer and global affairs graduate with plenty of experience in multicultural environments. Motivated professional comfortable in high-stress situations. Enthusiastic and reliable teammate with strong communication skills.
        </p>
    </section>
  );
}

export default About;