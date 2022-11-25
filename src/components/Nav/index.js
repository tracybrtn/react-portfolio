import React from "react";

function Nav() {
  return(
      <nav>
        <ul className="d-flex flex-row">
          <li>
            <a>About me</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;