const testimonials = [
  {
    id: 1,
    name: "Paciente 01",
    treatment: "Clínica Geral",
    text: "Fui muito bem recebido e tive uma experiência bastante acolhedora.",
  },
  {
    id: 2,
    name: "Paciente 02",
    treatment: "Ortodontia",
    text: "Gostei da atenção aos detalhes e da clareza durante o atendimento.",
  },
  {
    id: 3,
    name: "Paciente 03",
    treatment: "Clareamento Dental",
    text: "Um atendimento atencioso, com cuidado em cada etapa.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials__container">
        <span className="testimonials__eyebrow">
          EXPERIÊNCIAS AL DENTE
        </span>

        <h2 className="testimonials__title">
          O que dizem nossos pacientes
        </h2>

        <p className="testimonials__description">
          Cada sorriso carrega uma história. Conheça algumas experiências.
        </p>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.id}
            >
              <p className="testimonial-card__text">
                "{testimonial.text}"
              </p>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="testimonial-card__info">
                  <h3 className="testimonial-card__name">
                    {testimonial.name}
                  </h3>

                  <span className="testimonial-card__treatment">
                    {testimonial.treatment}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <span className="testimonials__disclaimer">
          Conteúdo demonstrativo — depoimentos fictícios.
        </span>
      </div>
    </section>
  );
}

export default Testimonials;