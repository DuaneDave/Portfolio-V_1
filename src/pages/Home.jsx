import HeroSection from '../components/heroSection/HeroSection';
import AboutSection from '../components/aboutSection/AboutSection';
import Skills from '../components/skillSection/Skills';
import Works from '../components/workSection/Works';
import Contact from '../components/contactSection/Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Works />
      <Contact />
    </>
  )
}

export default Home   