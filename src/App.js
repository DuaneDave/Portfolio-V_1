import { Suspense, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';

import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import Articles from './components/workSection/Articles';
import Projects from './components/workSection/Projects';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        </Routes>
      </Fragment>
    </Suspense>
  );
}

export default App;
