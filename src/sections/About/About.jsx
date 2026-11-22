import { HeartHandshake, UserRoundCheck, Sparkles, ArrowUpRight, } from "lucide-react";

import "./About.css";

function About() {
  return (
    <section className="about" id="sobre">

      <div className="about__container">

        {/* Imagem institucional */}
        <div className="about__visual">

          <img
            src="/images/about-al-dente.jpg"
            alt="Ambiente moderno e acolhedor da clínica Al Dente"
            className="about__image"
          />
        </div>

        {/* Conteúdo institucional */}
        <div className="about__content">

          <span className="about__eyebrow">
            CONHEÇA A AL DENTE
          </span>

          <h2 className="about__title">
            Mais do que cuidar de sorrisos,
            <span> cuidamos de pessoas.</span>
          </h2>

          <p className="about__description">
            Acreditamos que um sorriso saudável começa
            com uma experiência de cuidado e confiança.
            Na Al Dente, cada paciente é recebido com
            atenção, respeito e dedicação.
          </p>

          <p className="about__description">
            Nosso propósito é oferecer uma experiência
            odontológica diferenciada, unindo acolhimento,
            planejamento individualizado e atenção aos
            detalhes em cada etapa do atendimento.
          </p>

          {/* Pilares da clínica */}
          <div className="about__features">

            <div className="about__feature">
              <HeartHandshake size={22} />
              <span>Atendimento humanizado</span>
            </div>

            <div className="about__feature">
              <UserRoundCheck size={22} />
              <span>Cuidado individualizado</span>
            </div>

            <div className="about__feature">
              <Sparkles size={22} />
              <span>Atenção aos detalhes</span>
            </div>

          </div>

          {/* Link para tratamentos */}
          <a
            href="#tratamentos"
            className="about__link"
          >
            Conheça nossos tratamentos
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;