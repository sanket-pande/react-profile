import { useRef } from 'react';

import Header from '../sections/header/Header';
import About from '../sections/about/About';
import Contact from '../sections/contact/Contact';
import Footer from '../sections/footer/Footer';
import Hero from '../sections/hero/Hero';
import './App.css';
import { SectionMap, scrollToSection } from '../common/utils';

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  SectionMap["about"] = aboutRef;
  SectionMap["contact"] = contactRef;
  SectionMap["hero"] = heroRef;

  return (
    <div className="App">
      <Header />
      <Hero ref={heroRef} scrollToRef={scrollToSection} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
