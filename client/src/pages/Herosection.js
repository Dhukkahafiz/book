import React from "react";
import "../asset/css/Herosection.css";

function Herosection() {
  return (
    <div className="main_hero_section">
        
        <div className="content">
          <div className="cuboid book left">
            <div className="side front">
              <label htmlFor="p-left"></label>
              <div className="author">
                JUAN
                <br />
                GÓMEZ-JURADO
              </div>
              <div className="title esp">Cicatriz</div>
              <div className="title eng">Scar</div>
              <div className="sketch">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="logo">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="side"></div>
            <div className="side pags">
              <label htmlFor="p-left"></label>
            </div>
            <div className="side"></div>
            <div className="side pags"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
          <div className="cuboid book right">
            <div className="side back">
              <label htmlFor="p-right"></label>
              <div className="cite esp">
                ¿Conoces la verdad sobre la persona con la que duermes?
              </div>
              <div className="text esp">
                Simon Sax podría ser un tipo afortunado. Es joven, listo y está
                punto de convertirse en multimillonario si vende su gran invento
                -un asombroso algoritmo- a una multinacional. Y, sin embargo, se
                siente solo. Hasta que un día vence sus prejuicios y entra en
                una web de contactos donde se enamora perdidamente de Irina, con
                la inexperiencia y la pasión de un adolescente, a pesar de los
                miles de kilómetros que los separan.
              </div>
              <div className="text esp">
                Pero ella, marcada con una enigmática cicatriz en la mejilla,
                arrastra un oscuro secreto…
              </div>
              <div className="cite esp">
                Una novela del autor español de thriller más vendido del mundo.
              </div>
              <div className="cite eng">
                Do you know the truth about the person you sleep with?
              </div>
              <div className="text eng">
                Simon Sax is a lucky guy. He's young, smart and is about to
                become a billionaire by selling a great invention, an amazing
                algorithm. And yet, he feels lonely. His success contrasts with
                his lack of social skills. He joins a dating site where he falls
                in love with Irina, with the inexperience and passion of a
                teenager.
              </div>
              <div className="text eng">
                But she has an enigmatic scar on her cheek, and carries a dark
                secret…
              </div>
              <div className="cite eng">
                A novel by the world's best-selling Spanish thriller author.
              </div>
              <div className="barcode">
                <p>
                  DISEÑO: PENGUIN RANDOM HOUSE GRUPO EDITORIAL
                  <br />
                  ILUSTRACIÓN: FRAN FERRIZ
                </p>
                <p>www.megustaleer.com</p>
              </div>
            </div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side pags">
              <label htmlFor="p-right"></label>
            </div>
            <div className="side pags"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>
          <div className="profile">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://juangomezjurado.com"
            >
              juangomezjurado.com
            </a>
          </div>
        </div>
      <div className="shadow"></div>
      <div className="lang-selector">
        <label htmlFor="lang">
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
}

export default Herosection;
