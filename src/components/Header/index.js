import React from "react";

//import Nav component
import Nav from "../Nav";

function Header(props) {
  const { 
    currentSection,
    setCurrentSection
  } = props;

  return(
    <header className="d-flex flex-column">
      <h1>Tracy Burton Bravo</h1>
      <Nav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Nav>
    </header>
  );
}

export default Header;