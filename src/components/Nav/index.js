import React from "react";

function Nav() {
  return(
      <nav>
        <ul className="d-flex flex-row">
          <li>
            About me
          </li>
          <li>
            Portfolio
          </li>
          <li>
            Contact
          </li>
          <li>
            Resume
          </li>
        </ul>
      </nav>
  );
}

export default Nav;