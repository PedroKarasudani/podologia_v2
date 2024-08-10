import React from 'react';
import jpgPrincipal from '../assets/introducao/principal.jpg';
import pngComentario1 from '../assets/comentario/Ellipse 1.png';
import pngComentario2 from '../assets/comentario/Ellipse 2.png';
import pngComentario3 from '../assets/comentario/Ellipse 3.png';
import pngComentario4 from '../assets/comentario/Ellipse 4.png';
import svgMissao from '../assets/empresa/missao 1.svg';
import svgVisao from '../assets/empresa/valor 1.svg';
import svgValor from '../assets/empresa/visao 1.svg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <section className={`${styles.introducao} container`}>
        <div>
          <img src={jpgPrincipal} alt="Podologa" />
        </div>
        <ul className={`${styles.introducaoTexto} font-1-d c2`}>
          <li>Tratamento de Unhas encravadas</li>
          <li>Eliminação rápida da dor</li>
          <li>Acompanhamento do processo de cicatrização</li>
          <li>Atendimento Adulto e Infantil</li>
          <li>Equipamentos especiais para melhor recuperação </li>
          <li>Localização central</li>
        </ul>
      </section>

      <article className={`${styles.mapaBg}`}>
        <div className={`${styles.mapa} container font-1-c c10`}>
          <a href="./">Localização Priveligiada</a>
          <a href="./">Rua Madre Leonia Milito, 290</a>
        </div>
      </article>

      <article className={`${styles.comentario} container font-2-a c2`}>
        <p>
          <img
            className={`${styles.comentarioEsquerdo}`}
            src={pngComentario1}
            alt="avatar1"
          />
          “Muito bom atendimento. Só peço pra melhorar a comunicação com o
          cliente. Assim o mesmo se sente mais a vontade em voltar.”
        </p>
        <p>
          <img
            className={`${styles.comentarioDireito}`}
            src={pngComentario2}
            alt="avatar2"
          />
          “Esse profissional, Curou minhas unhas é ainda me fez aumentar minha
          alta estima!! Muito obrigada minha querida! Recomendo para todos!!
          obrigada!!”
        </p>
        <p>
          <img
            className={`${styles.comentarioDireito}`}
            src={pngComentario3}
            alt="avatar3"
          />
          “Super indico! Minha unha crescia para dentro nas pontas, doía muito.
          Agora minhas unhas estão normais. Foi tão bom que continuo indo para
          manutenção”
        </p>
        <p>
          <img
            className={`${styles.comentarioEsquerdo}`}
            src={pngComentario4}
            alt="avatar4"
          />
          “Excelente profissional, resolveu todos meus problemas sem dor.
          Atenciosa e muito cuidadosa, sem falar que é muito rápida. Recomendo
          de olhos fechados.”
        </p>
      </article>
      <article className={styles.missaoBg}>
        <div className={`${styles.missao} container`}>
          <div className={styles.missaoConteudo}>
            <img src={svgMissao} alt="missao" />
            <h1 className="font-1-e c3">Missão</h1>
            <p className="font-1-d c4">
              Preservar a saúde e a qualidade da vida das pessoas, a partir de
              um atendimento profissional, ético, humano e personalizado.
            </p>
          </div>
          <div className={styles.missaoConteudo}>
            <img src={svgVisao} alt="visao" />
            <h1 className="font-1-e c3">Visão</h1>
            <p className="font-1-d c4">
              Estar entre as clinicas de podologia de referência em Londrina,
              pela excelência dos atendimentos exclusivos ao paciente.
            </p>
          </div>
          <div className={styles.missaoConteudo}>
            <img src={svgValor} alt="valor" />
            <h1 className="font-1-e c3">Valor</h1>
            <p className="font-1-d c4">
              Compromisso com o cliente, respeito e valorização do ser humano,
              transparência, paixão pelo trabalho e excelência.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
