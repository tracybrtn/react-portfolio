import React, { useState } from 'react';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

//main content
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  const [currentSection, setCurrentSection] = useState("about");

  //function that checks which section has been selected and renders the right content
  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      //default is to return the about me section
      default:
        return <About />;
    }
};
  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection}></Header>
      <main>
        {renderSection()}
        <Contact/>
      </main>
      {<Footer />}
    </div>
  );
}

export default App;
