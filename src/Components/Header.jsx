import React from 'react';
import styles from './Header.module.css';
import Logo from '../assets/logoinicio.svg?react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.headerBg}>
      <div className={`${styles.header} container`}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={`${styles.headerMenu} font-1-a c2`}>
          <Link className={styles.headerMenuAtivo} to="/servicos">
            Serviços
          </Link>
          <Link className={styles.headerMenuAtivo} to="/duvidas">
            Duvidas
          </Link>
          <Link className={styles.headerMenuAtivo} to="/localizacao">
            Localização
          </Link>
          <Link className={`${styles.ativo} botao`} to="/agendamento">
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
