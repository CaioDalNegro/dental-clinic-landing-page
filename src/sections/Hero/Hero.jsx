import { ArrowUpRight } from "lucide-react";

import Button from "../../components/Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero__background">
        <img
          src="/images/hero-al-dente.png"
          alt="Paciente recebendo atendimento odontológico"
          className="hero__image"
        />
      </div>

      <div className="hero__overlay"></div>

      <div className="hero__container">
        <div className="hero__content">

          <h1 className="hero__title">
            SEU SORRISO
            <br />
            NO <span>PONTO CERTO.</span>
          </h1>

          <p className="hero__description">
            Odontologia de excelência, com cuidado
            personalizado em cada detalhe.
          </p>

          <Button
            href="#contato"
            icon={<ArrowUpRight size={17} />}
          >
            Agende sua consulta
          </Button>

        </div>
      </div>

    </section>
  );
}

export default Hero;