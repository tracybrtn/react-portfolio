import React from "react"

//About me section is the default section
import avatarImage from "../src/assets/images/Avatar-Tracy.png";

function About() {
  return(
    <section>
      <h1 id="about">About me</h1>
      <img src={avatarImage} alt="Tracy Burton Bravo smiling."></img>
      <p>
        Full-stack web developer and global affairs graduate with plenty of experience in multicultural environments. Motivated professional comfortable in high-stress situations. Enthusiastic and reliable teammate with strong communication skills.
      </p>
    </section>
  );
}

export default About;