import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './context/ThemeProvider';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { KineticBand } from './components/sections/KineticBand';
import { Work } from './components/sections/Work';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { About } from './components/sections/About';
import { Platforms } from './components/sections/Platforms';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function Divider() {
  return (
    <div className="container">
      <hr className="hairline" />
    </div>
  );
}

export default function App() {
  const reduced = usePrefersReducedMotion();

  return (
    <ThemeProvider>
      {/* Globally honor reduced motion — turns transforms into instant transitions. */}
      <MotionConfig reducedMotion={reduced ? 'always' : 'user'}>
        <a href="#work" className="visually-hidden">
          Skip to content
        </a>
        <Header />
        <main>
          <Hero />
          <KineticBand />
          <Work />
          <Divider />
          <Services />
          <Divider />
          <Process />
          <Divider />
          <About />
          <Divider />
          <Platforms />
          <Divider />
          <Testimonials />
          <Divider />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}
