import Header from './components/Header/Header';
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Treatments from "./sections/Treatments/Treatments";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />
        <About />
        <Treatments />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;