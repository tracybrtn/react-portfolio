import React from "react";

function Header() {
  return(
    <header className="d-flex flex-row">
      <h2>Tracy Burton Bravo</h2>
      {/* Hardcoded Nav as a placeholder */}
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
    </header>
  );
}

export default Header;