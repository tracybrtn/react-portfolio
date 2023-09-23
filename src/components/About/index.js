//About me section is the default section
//import dependencies
import React from "react"

//import image
import avatarImage from "../../../src/assets/images/Avatar-Tracy.png";

// About function
function About() {
  return(
    <section id="about-me" className="d-flex">
      <h2>Hi! It's Tracy.</h2>
      <p className="description">
        I am a&nbsp;
        <span>
          MERN stack developer
        </span> 
        &nbsp;and global affairs graduate with an extensive record of teamwork and leadership experience.
      </p>
      <p className="description">
        Motivated and reliable professional who thrives in&nbsp;
        <span>
          fast-paced and dynamic environments
        </span>
        .
      </p>
      <div className="avatar-container">
        <img 
          src={avatarImage} 
          alt="Tracy Burton Bravo smiling.">
        </img>
      </div>
      <p className="description">
        Third-culture kid,&nbsp;
        <span>
          bilingual English and Spanish speaker
        </span>
        , pop-culture connoisseur, and family genealogist.
      </p>
      <h3>Welcome to my portfolio!</h3>
    </section>
  );
}

export default About;