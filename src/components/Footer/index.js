//import react
import React from "react"

//import logos
import GithubLogo from "../../assets/images/github-logo.png";
import LinkedInLogo from "../../assets/images/linkedin-logo.png";
import WordpressLogo from "../../assets/images/wordpress-logo.png";

//footer component
function Footer() {
  return(
    <footer className="d-flex flex-row justify-content-center">
      <div>
        <a
          href="https://github.com/tracybrtn"
          target="_blank"
          rel="noreferrer">
          <img
            src={GithubLogo}
            alt="Github"
            className="logo">
          </img>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/tracybrtn/"
          target="_blank"
          rel="noreferrer">
            <img
              src={LinkedInLogo}
              alt="LinkedIn"
              className="logo">
            </img>
          </a>
      </div>
      <div>
        <a
         href="https://unpackingtracy.wordpress.com/"
         target="_blank"
         rel="noreferrer">
          <img
            src={WordpressLogo}
            alt="Wordpress"
            className="logo">
          </img>
        </a>
      </div>
    </footer>
  )
}

//export footer
export default Footer;