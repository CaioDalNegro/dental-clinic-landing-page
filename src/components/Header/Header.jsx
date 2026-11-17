import { useState } from 'react';
import { Flower2, Menu, X, ArrowUpRight } from 'lucide-react';

import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header__container">

        {/* Logotipo */}
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <Flower2 size={30} strokeWidth={1.6} />

          <span>
            NÚCLEO <strong>ORAL</strong>
          </span>
        </a>

        {/* Navegação */}
        <nav
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          id="main-navigation"
        >
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>

          <a href="#tratamentos" onClick={closeMenu}>
            Tratamentos
          </a>

          <a href="#sobre" onClick={closeMenu}>
            Sobre nós
          </a>

          <a href="#equipe" onClick={closeMenu}>
            Nossa equipe
          </a>

          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </nav>

        {/* Botão de agendamento */}
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