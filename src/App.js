import { Suspense, Fragment } from 'react';
import './index.css';

import Navigation from './components/navigation/Navigation';
import HeroSection from './components/heroSection/HeroSection';
import AboutSection from './components/aboutSection/AboutSection';
import Skills from './components/skillSection/Skills';
import Works from './components/workSection/Works';
import Contact from './components/contactSection/Contact';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <Skills />
        <Works />
        <Contact />
      </Fragment>
    </Suspense>
  );
}

export default App;
