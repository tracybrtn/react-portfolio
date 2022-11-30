import React from 'react';

// Import components
import Header from './components/Header';
import Contact from './components/Contact';

//About me section is the default section
import avatarImage from "../src/assets/images/Avatar-Tracy.png"


function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1 id="about">About me</h1>
          <img src={avatarImage} alt="Tracy Burton Bravo smiling."></img>
          <p>
            Full-stack web developer and global affairs graduate with plenty of experience in multicultural environments. Motivated professional comfortable in high-stress situations. Enthusiastic and reliable teammate with strong communication skills.
          </p>
        </section>
        <section>
          <h1 id="portfolio">Portfolio</h1>
          {/* TODO: add Project component */}
        </section>
          {<Contact />}
        <section>
          <h1 id="resume">Resume</h1>
          {/* TO DO: add downloadable Resume
          and list of developer proficiencies*/}
        </section>
      </main>
      <footer>
        {/*Footer component*/}
      </footer>
    </div>
  );
}

export default App;
