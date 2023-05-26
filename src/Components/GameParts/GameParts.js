import React from "react";
import frontCart from "../../Assets/Cart_Front without BG.png";
import backCart from "../../Assets/Cart_Back without BG.png";
import { classNames } from "../../Helper/helper";

export const TitleCounterAndResult = ({
  chronometer,
  handleReset,
  result,
  navegate,
}) => {
  return (
    <>
      <div className="title-games-mode">
        <h1>Memory Game</h1>
        <div className="carts">
          <img className="back-cart" src={backCart} alt="" />
          <img className="front-cart" src={frontCart} alt="" />
        </div>
      </div>
      <div id={classNames(chronometer < 10 && 'is-red')} className="contador">{chronometer}</div>
      {result && (
        <div className="result">
          <p>{result}</p>
          <div className="result-buttons">
            <button onClick={() => navegate("/")}>Menu Princial</button>
            <button onClick={() => handleReset()}>Play Again</button>
          </div>
        </div>
      )}
    </>
  );
};

export const CardConteiner = ({ copyCards, handleClickCards }) => {
  return (
    <div className="cards-container">
      {copyCards.map((value, i) => (
        <div key={i} className="cards">
          <div
            onClick={() => handleClickCards(value, i)}
            className={classNames(
              "cards-parts",
              value.selected === true && "rotate"
            )}
          >
            <div className="back">
              <img src={backCart} alt="" />
            </div>
            <div
              id={classNames(value.right === true && "green-background")}
              className="front"
            >
              <img key={i} src={value.imge} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      Images taken from{" "}
      <a href="https://www.freepik.es/vector-gratis/coleccion-elementos-avatares-animales-dibujados-mano_32969449.htm">
        Freepik
      </a>
    </div>
  );
};
