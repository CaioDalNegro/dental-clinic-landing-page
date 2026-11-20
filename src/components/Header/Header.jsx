
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header__container">

        {/* Logo Al Dente */}
        <a
          href="#inicio"
          className="header__logo"
          onClick={closeMenu}
          aria-label="Al Dente - Página inicial"
        >
          <svg
            className="header__logo-icon"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M13 5.5C7.5 5.5 5 10 6.5 17c1.2 5.5 4 8.2 5.5 15.2.8 4 2.5 9.5 5.1 9.5 3.2 0 2.8-11.8 6.9-11.8s3.7 11.8 6.9 11.8c2.6 0 4.3-5.5 5.1-9.5 1.5-7 4.3-9.7 5.5-15.2C43 10 40.5 5.5 35 5.5c-4.1 0-6.4 2.5-11 2.5s-6.9-2.5-11-2.5Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path
              d="M16 15c2-2 4-2 6-1"
              stroke="#77A9A4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span>
            AL <strong>DENTE</strong>
          </span>
        </a>

        {/* Navegação */}
        <nav
          className={`header__nav ${
            menuOpen ? 'header__nav--open' : ''
          }`}
          id="main-navigation"
        >
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#tratamentos" onClick={closeMenu}>Tratamentos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
          <a href="#equipe" onClick={closeMenu}>Nossa equipe</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>

        {/* Agendamento */}
        <a href="#contato" className="header__cta">
          Agendar consulta
          <ArrowUpRight size={17} />
        </a>

        {/* Menu mobile */}
        <button
          className="header__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Header;