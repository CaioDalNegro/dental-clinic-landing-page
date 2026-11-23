import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__container">

        <div className="contact__info">
          <span className="contact__eyebrow">
            ENTRE EM CONTATO
          </span>

          <h2 className="contact__title">
            Vamos cuidar do seu sorriso?
          </h2>

          <p className="contact__description">
            Estamos prontos para receber você.
            Entre em contato e agende sua avaliação.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <h3>Telefone</h3>
              <p>(16) 99999-9999</p>
            </div>

            <div className="contact__detail">
              <h3>Endereço</h3>
              <p>Rua Exemplo, 123 — Araraquara/SP</p>
            </div>

            <div className="contact__detail">
              <h3>Horário de atendimento</h3>
              <p>Segunda a sexta, das 08h às 18h</p>
            </div>
          </div>
        </div>

        <div className="contact__form-wrapper">
          <h3 className="contact__form-title">
            Envie sua mensagem
          </h3>

          <form className="contact__form">
            <div className="contact__field">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Como podemos ajudar?"
                required
              />
            </div>

            <button type="submit" className="contact__button">
              Enviar mensagem
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;