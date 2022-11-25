import React from "react";

//import Nav component
import Nav from "../Nav";

function Header() {
  return(
    <header className="d-flex flex-row">
      <h2>Tracy Burton Bravo</h2>
      <Nav />
    </header>
  );
}

export default Header;