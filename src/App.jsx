import Header from './components/Header/Header';
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Treatments from "./sections/Treatments/Treatments";
import Testimonials from "./sections/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />
        <About />
        <Treatments />
        <Testimonials />
      </main>
    </>
  );
}

export default App;