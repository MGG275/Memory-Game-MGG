export const shuffleCards = (array) => {
  let currentIndex = array.length;
  let randomIndex, temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const calculateResult = (chronometer, allRightTrue, attempts) => {
  if (chronometer === 0 && !allRightTrue) {
    return "Sorry the time is over, you lost the game";
  }
  if (chronometer >= 0 && chronometer !== "" && allRightTrue) {
    return `Congratulation you won the game. It took you ${
      attempts
    } tries to complete it`;
  }
};

export const handleClickCards = (
  value,
  i,
  isRotate,
  result,
  copyCards,
  setIsRotate,
  attempts,
  setAttempts
) => {
  if (value.selected === false && isRotate.length < 2 && !result) {
    copyCards[i].selected = true;
    setIsRotate([...isRotate, i]);

    if (isRotate.length === 1) {
      const card1 = copyCards[isRotate[0]];
      const card2 = copyCards[i];
      if (card1.name === card2.name) {
        card1.right = true;
        card2.right = true;
        setIsRotate([]);
      } else {
        setTimeout(() => {
          card1.selected = false;
          card2.selected = false;
          setIsRotate([]);
        }, 700);
      }
      setAttempts(attempts + 1)
    }
  }
};
export const handleResetGame = (
  setIsRotate,
  cardsArray,
  setChronometer,
  setCopyCards,
  hardMode,
  easyNormalMode
) => {
  const newCardsArray = shuffleCards(cardsArray);
  setCopyCards(newCardsArray);
  setChronometer("");
  setIsRotate([]);
  setTimeout(() => {
    for (let i = 0; i < newCardsArray.length; i++) {
      newCardsArray[i].selected = false;
      newCardsArray[i].right = false;
    }
    if (easyNormalMode) {
      setChronometer(50);
    }
    if (hardMode) {
      setChronometer(45);
    }
    setCopyCards(newCardsArray);
  }, 3500);
};
