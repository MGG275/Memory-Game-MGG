import React, { useEffect, useState } from "react";
import { handleClickCards, handleResetGame, shuffleCards } from "../../Helper/helper";
import { useNavigate } from "react-router-dom";
import { calculateResult} from "../../Helper/helper";
import { CardConteiner, Footer, TitleCounterAndResult } from "../GameParts/GameParts";
import "../EaseMode/index.css";

// ------------------------ images ------------------------
import porcupine from "../../Assets/porcupine.png";
import rabbit from "../../Assets/rabbit.png";
import raccoon from "../../Assets/raccoon.png";
import rhino from "../../Assets/rhinoceros.png";
import seal from "../../Assets/seal.png";
import shark from "../../Assets/shark.png";
import wildpig from "../../Assets/wild-pig.png";
import sheep from "../../Assets/sheep.png";
import sloth from "../../Assets/sloth.png";
import tiger from "../../Assets/tiger-removebg-preview.png";
import warlus from "../../Assets/walrus.png";
import elephant from "../../Assets/elephant.png";
//-------------------------------------------------------

export const HardMode = () => {
  const navegate = useNavigate();
  const [chronometer, setChronometer] = useState("");
  const cardsArray = [
    { imge: porcupine, name: "porcupine", selected: true, right: false },
    { imge: rabbit, name: "rabbit", selected: true, right: false },
    { imge: raccoon, name: "raccoon", selected: true, right: false },
    { imge: rhino, name: "rhino", selected: true, right: false },
    { imge: seal, name: "seal", selected: true, right: false },
    { imge: shark, name: "shark", selected: true, right: false },
    { imge: wildpig, name: "wildpig", selected: true, right: false },
    { imge: sheep, name: "sheep", selected: true, right: false },
    { imge: sloth, name: "sloth", selected: true, right: false },
    { imge: tiger, name: "tiger", selected: true, right: false },
    { imge: warlus, name: "warlus", selected: true, right: false },
    { imge: elephant, name: "elephant", selected: true, right: false },
    { imge: porcupine, name: "porcupine", selected: true, right: false },
    { imge: rabbit, name: "rabbit", selected: true, right: false },
    { imge: raccoon, name: "raccoon", selected: true, right: false },
    { imge: rhino, name: "rhino", selected: true, right: false },
    { imge: seal, name: "seal", selected: true, right: false },
    { imge: shark, name: "shark", selected: true, right: false },
    { imge: wildpig, name: "wildpig", selected: true, right: false },
		{ imge: sheep, name: "sheep", selected: true, right: false },
    { imge: sloth, name: "sloth", selected: true, right: false },
		{ imge: tiger, name: "tiger", selected: true, right: false },
    { imge: warlus, name: "warlus", selected: true, right: false },
    { imge: elephant, name: "elephant", selected: true, right: false },
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
    }, 4000);

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
          <div className="card-container-hard-mode">
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
