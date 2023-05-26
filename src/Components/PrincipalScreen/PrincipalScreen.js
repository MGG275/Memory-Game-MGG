import React from "react";
import { useNavigate } from "react-router-dom";
import frontCart from "../../Assets/Cart_Front without BG.png";
import backCart from "../../Assets/Cart_Back without BG.png";
import "./PrincipalScreen.css";
import { Footer } from "../GameParts/GameParts";
export const PrincipalScreen = () => {
  const navegate = useNavigate();

  return (
    <div className="principal-screen">
      <div className="title">
        <h1>Memory Game</h1>
        <div className="carts">
          <img className="back-cart" src={backCart} alt="" />
          <img className="front-cart" src={frontCart} alt="" />
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => navegate("/easy-mode")}>Easy</button>
        <button onClick={() => navegate("/normal-mode")}>Normal</button>
        <button onClick={() => navegate("/hard-mode")}>Hard</button>
      </div>
      <Footer/>
    </div>
  );
};
