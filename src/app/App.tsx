import { useRef } from 'react';

import Header from '../sections/header/Header';
import About from '../sections/about/About';
import Contact from '../sections/contact/Contact';
import Footer from '../sections/footer/Footer';
import Hero from '../sections/hero/Hero';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
