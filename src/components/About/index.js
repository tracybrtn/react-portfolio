//About me section is the default section
//import dependencies
import React from "react"

//import image
import avatarImage from "../../../src/assets/images/Avatar-Tracy.png";

// About function
function About() {
  return(
    <section id="about-me" className="d-flex flex-column">
      <div>
        <h2>About me</h2>
      </div>
      <div className="description">
        <h3>
          Hi! It's Tracy.
        </h3>
        <p>
          I am a&nbsp;
          <span>
            MERN stack developer
          </span> 
          &nbsp;and global affairs graduate with an extensive record of teamwork and leadership experience.
        </p>
        <p>
          Motivated and reliable professional who thrives in&nbsp;
          <span>
            fast-paced and dynamic environments
          </span>
          .
        </p>
      </div>
      <div className="container">
        <img 
          src={avatarImage} 
          alt="Tracy Burton Bravo smiling.">
        </img>
      </div>
      <div className="description">
        <p>
          Third-culture kid,&nbsp;
          <span>
            bilingual English and Spanish speaker
          </span>
          , pop-culture connoisseur, and family genealogist.
        </p>
      </div>
      <h2>Welcome to my portfolio!</h2>
    </section>
  );
}

export default About;