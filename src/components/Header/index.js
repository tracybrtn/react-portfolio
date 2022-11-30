import React from "react";

//import Nav component
import Nav from "../Nav";

function Header(props) {
  const { 
    currentSection,
    setCurrentSection
  } = props;

  return(
    <header className="d-flex flex-row">
      <h2>Tracy Burton Bravo's Portfolio</h2>
      <Nav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Nav>
    </header>
  );
}

export default Header;