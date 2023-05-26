import React, { useEffect, useState } from "react";
import { handleClickCards, handleResetGame, shuffleCards } from "../../Helper/helper";
import { useNavigate } from "react-router-dom";
import { calculateResult} from "../../Helper/helper";
import { CardConteiner, Footer, TitleCounterAndResult } from "../GameParts/GameParts";
import "../EaseMode/index.css";

// ------------------------ images ------------------------
import giraffe from "../../Assets/giraffe.png";
import hippo from "../../Assets/hippo.png";
import koala from "../../Assets/koala.png";
import lion from "../../Assets/lion.png";
import meerkat from "../../Assets/meerkat.png";
import monkey from "../../Assets/monkey.png";
import owl from "../../Assets/owl.png";
import penguin from "../../Assets/penguin.png";
import pig from "../../Assets/pig.png";
//-------------------------------------------------------

export const NormalMode = () => {
  const navegate = useNavigate();
  const [chronometer, setChronometer] = useState("");
  const cardsArray = [
    { imge: giraffe, name: "giraffe", selected: true, right: false },
    { imge: hippo, name: "hippo", selected: true, right: false },
    { imge: koala, name: "koala", selected: true, right: false },
    { imge: lion, name: "lion", selected: true, right: false },
    { imge: meerkat, name: "meerkat", selected: true, right: false },
    { imge: monkey, name: "monkey", selected: true, right: false },
    { imge: owl, name: "owl", selected: true, right: false },
    { imge: penguin, name: "penguin", selected: true, right: false },
    { imge: pig, name: "pig", selected: true, right: false },
    { imge: giraffe, name: "giraffe", selected: true, right: false },
    { imge: hippo, name: "hippo", selected: true, right: false },
    { imge: koala, name: "koala", selected: true, right: false },
    { imge: lion, name: "lion", selected: true, right: false },
    { imge: meerkat, name: "meerkat", selected: true, right: false },
    { imge: monkey, name: "monkey", selected: true, right: false },
    { imge: owl, name: "owl", selected: true, right: false },
		{ imge: penguin, name: "penguin", selected: true, right: false },
    { imge: pig, name: "pig", selected: true, right: false },
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
    }, 3500);

    const deshabilitarClickDerecho = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", deshabilitarClickDerecho);
    return () => {
      document.removeEventListener("contextmenu", deshabilitarClickDerecho);
    };
  }, [copyCards, cardsArray.length]);
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
          <div className="card-container-normal-mode">
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
