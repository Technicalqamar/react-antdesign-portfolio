import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Feedback from './components/Feedback/Feedback';
import PortfolioTable from './components/PortfolioTable/PortfolioTable';
import QRSection from './components/QRSection/QRSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Feedback />
      <PortfolioTable />
      <QRSection />
      <Footer />
    </div>
  );
}

export default App;
