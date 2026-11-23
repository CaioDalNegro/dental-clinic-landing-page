import { ArrowUpRight } from "lucide-react";

import "./Treatments.css";

const treatments = [
  {
    id: 1,
    name: "Clínica Geral",
    description:
      "Cuidados essenciais para manter sua saúde bucal em dia, com prevenção e acompanhamento.",
    image: "/images/treatments/clinica-geral.jpg",
    alt: "Dentista realizando exame odontológico",
  },
  {
    id: 2,
    name: "Ortodontia",
    description:
      "Tratamentos para alinhamento dentário e correção da mordida.",
    image: "/images/treatments/ortodontia.jpg",
    alt: "Detalhe de tratamento ortodôntico",
  },
  {
    id: 3,
    name: "Clareamento Dental",
    description:
      "Procedimentos odontológicos voltados à estética e luminosidade do sorriso.",
    image: "/images/treatments/clareamento.jpg",
    alt: "Procedimento profissional de clareamento dental",
  },
  {
    id: 4,
    name: "Implantodontia",
    description:
      "Soluções para reabilitação oral e reposição de dentes ausentes.",
    image: "/images/treatments/implantodontia.jpg",
    alt: "Procedimento odontológico de implantodontia",
  },
  {
    id: 5,
    name: "Estética Odontológica",
    description:
      "Cuidados voltados à harmonia, estética e naturalidade do sorriso.",
    image: "/images/treatments/estetica.jpg",
    alt: "Resultado estético de tratamento odontológico",
  },
  {
    id: 6,
    name: "Odontopediatria",
    description:
      "Acompanhamento e cuidados odontológicos dedicados à saúde bucal infantil.",
    image: "/images/treatments/odontopediatria.jpg",
    alt: "Atendimento odontológico infantil",
  },
];

function Treatments() {
  return (
    <section className="treatments" id="tratamentos">

      <div className="treatments__container">

        {/* Cabeçalho da seção */}
        <div className="treatments__header">

          <span className="treatments__eyebrow">
            CUIDADO COMPLETO PARA SEU SORRISO
          </span>

          <h2 className="treatments__title">
            Nossos <span>tratamentos</span>
          </h2>

          <p className="treatments__description">
            Soluções odontológicas pensadas para cuidar
            da sua saúde e valorizar seu sorriso em cada
            detalhe.
          </p>

        </div>

        {/* Grade de tratamentos */}
        <div className="treatments__grid">

          {treatments.map((treatment) => (
            <article
              className="treatment-card"
              key={treatment.id}
            >

              <div className="treatment-card__image-wrapper">

                <img
                  src={treatment.image}
                  alt={treatment.alt}
                  className="treatment-card__image"
                  loading="lazy"
                />

              </div>

              <div className="treatment-card__content">

                <h3 className="treatment-card__title">
                  {treatment.name}
                </h3>

                <p className="treatment-card__description">
                  {treatment.description}
                </p>

                <a
                  href="#contato"
                  className="treatment-card__link"
                  aria-label={`Agendar avaliação para ${treatment.name}`}
                >
                  Saiba mais
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </article>
          ))}

        </div>

        {/* Chamada final */}
        <div className="treatments__footer">

          <p>
            Não sabe qual tratamento é ideal para você?
          </p>

          <a
            href="#contato"
            className="treatments__cta"
          >
            Agende uma avaliação
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Treatments;