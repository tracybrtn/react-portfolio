import React, { useState } from 'react';

// Import components
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
//main content
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [currentSection, setCurrentSection] = useState("about");

  //function that checks which section has been selected and renders the right content
  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />
      //default is to return the about me section
      default:
        return <About />;
    }
};
  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection}></Header>
      <main>{renderSection()}</main>
      {<Footer />}
    </div>
  );
}

export default App;
