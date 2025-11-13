import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Stats />
      <Gallery />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
