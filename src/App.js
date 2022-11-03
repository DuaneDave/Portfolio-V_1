import { Suspense, Fragment } from 'react';
import './index.css';

import Navigation from './components/navigation/Navigation';
import HeroSection from './components/heroSection/HeroSection';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        <Navigation />
        <HeroSection />
      </Fragment>
    </Suspense>
  );
}

export default App;
