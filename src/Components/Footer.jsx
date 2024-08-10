import React from 'react';
import styles from './Footer.module.css';
import imgLogo from '../assets/footer/Podologia MU.svg';
import svgInsta from '../assets/footer/instagram 1.svg';
import svgFace from '../assets/footer/facebook 1.svg';
import svgYoutube from '../assets/footer/youtube 1.svg';

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footer} container`}>
        <img src={imgLogo} alt="PodologiaMU" />
        <div className={styles.footerContato}>
          <h2 className="font-1-e c10">Contato</h2>
          <ul className="font-2-b c9">
            <li>
              <a href="tel:+5543999999999">+55 (43) 99999-9999</a>
            </li>
            <li>
              <a href="mailto:pedro.karasudani@hotmail.com">
                comercial@podologiamu.com.br
              </a>
            </li>
          </ul>
          <ul className="font-2-b c9">
            <li>Rua Madre Leonia Milito, 290</li>
            <li>Londrina - PR</li>
          </ul>
          <div>
            <div className={styles.footerRedes}>
              <a href="./">
                <img src={svgInsta} alt="Instagram" />
              </a>
              <a href="./">
                <img src={svgFace} alt="Facebook" />
              </a>
              <a href="./">
                <img src={svgYoutube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2 className={'font-1-e c10'}>Informações</h2>
          <nav className={'font-2-b c'}>
            <li>
              <a href="./">Serviços</a>
            </li>
            <li>
              <a href="./">Duvidas</a>
            </li>
            <li>
              <a href="./">Termos e Condições</a>
            </li>
          </nav>
        </div>
      </div>
      <p className={`${styles.footerCopy} font-2-b c2`}>
        Podologia MU © Alguns direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
