import { Suspense, Fragment } from 'react';
import './index.css';

import Navigation from './components/navigation/Navigation';
import HeroSection from './components/heroSection/HeroSection';
import AboutSection from './components/aboutSection/AboutSection';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        <Navigation />
        <HeroSection />
        <AboutSection />
      </Fragment>
    </Suspense>
  );
}

export default App;
