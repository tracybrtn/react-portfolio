import React from 'react';

// Import components
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
//main content
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <Header />
      <main>
        {<About />}
        {<Portfolio />}
        {<Contact />}
        {<Resume />}
      </main>
      {<Footer />}
    </div>
  );
}

export default App;
