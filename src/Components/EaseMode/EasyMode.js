import React, { useEffect, useState } from "react";
import { handleClickCards, handleResetGame, shuffleCards } from "../../Helper/helper";
import { useNavigate } from "react-router-dom";
import { calculateResult } from "../../Helper/helper";
import {
  CardConteiner,
  Footer,
  TitleCounterAndResult,
} from "../GameParts/GameParts";
import "./index.css";

// ------------------------ images ------------------------
import chiken from "../../Assets/chiken.png";
import crocodile from "../../Assets/crocodile.png";
import deer from "../../Assets/deer.png";
import duck from "../../Assets/duck.png";
import elephant from "../../Assets/elephant.png";
import fox from "../../Assets/fox.png";
//-------------------------------------------------------

export const EasyMode = () => {
  const navegate = useNavigate();
  const [chronometer, setChronometer] = useState("");
  const cardsArray = [
    { imge: chiken, name: "chiken", selected: true, right: false },
    { imge: crocodile, name: "crocodile", selected: true, right: false },
    { imge: deer, name: "deer", selected: true, right: false },
    { imge: duck, name: "duck", selected: true, right: false },
    { imge: elephant, name: "elephant", selected: true, right: false },
    { imge: fox, name: "fox", selected: true, right: false },
    { imge: chiken, name: "chiken", selected: true, right: false },
    { imge: crocodile, name: "crocodile", selected: true, right: false },
    { imge: deer, name: "deer", selected: true, right: false },
    { imge: duck, name: "duck", selected: true, right: false },
    { imge: elephant, name: "elephant", selected: true, right: false },
    { imge: fox, name: "fox", selected: true, right: false },
  ];
  const [copyCards, setCopyCards] = useState(shuffleCards(cardsArray));
  const [isRotate, setIsRotate] = useState([]);
  let allRightTrue = true;

  copyCards.forEach((element) => {
    if (!element.right) {
      allRightTrue = false;
    }
  });
  useEffect(() => {
    setTimeout(() => {
      setChronometer(60);
      for (let i = 0; i < cardsArray.length; i++) {
        copyCards[i].selected = false;
      }
    }, 2500);

    const deshabilitarClickDerecho = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", deshabilitarClickDerecho);
    return () => {
      document.removeEventListener("contextmenu", deshabilitarClickDerecho);
    };
  }, []);
  const handleClick = (value, i) => {
    handleClickCards(value, i, isRotate, result, copyCards, setIsRotate);
  };
  const result = calculateResult(chronometer, allRightTrue);
  if (chronometer > 0 && !result) {
    setTimeout(() => {
      setChronometer(chronometer - 1);
    }, 1000);
  }
  const handleReset = () => {
    handleResetGame(setIsRotate, cardsArray, setChronometer, setCopyCards);
  };

  return (
    <>
      {!copyCards ? (
        <div className="game-screen"></div>
      ) : (
        <div className="game-screen">
          <TitleCounterAndResult
            chronometer={chronometer}
            handleReset={handleReset}
            result={result}
            navegate={navegate}
          />
          <div className="card-container-easy-mode">
            <CardConteiner
              copyCards={copyCards}
              handleClickCards={handleClick}
            />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
