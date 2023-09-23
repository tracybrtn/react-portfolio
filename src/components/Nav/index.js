//import React
import React from "react";

//Nav component function
function Nav(props) {
  //pass properties
  const {
    currentSection,
    setCurrentSection
  } = props;

  //return JSX
  return(
      <nav>
        <ul className="d-flex flex-row">
          <li className={currentSection === "about" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentSection("about")}>About me</span>
          </li>
          <li className={currentSection === "portfolio" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentSection("portfolio")}>Portfolio</span>
          </li>
          <li className={currentSection === "contact" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentSection("contact")}>Contact</span>
          </li>
          <li className={currentSection === "resume" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentSection("resume")}>Resume</span>
          </li>
        </ul>
      </nav>
  );
}

//Export nav component
export default Nav;