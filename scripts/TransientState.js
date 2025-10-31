const transientState = {
  entreeId: 0,
  vegetableId: 0,
  sideId: 0,
};

export const setEntreeChoice = (chosenEntree) => {
  transientState.entreeId = chosenEntree;
};

export const setVegetableChoice = (chosenVegetable) => {
  transientState.vegetableId = chosenVegetable;
};

export const setSideChoice = (chosenSide) => {
  transientState.sideId = chosenSide;
};

export const savePurchaseCombo = async () => {
  if (
    transientState.entreeId === 0 ||
    transientState.vegetableId === 0 ||
    transientState.sideId === 0
  ) {
    window.alert(
      "Please make a selection for Entree, Vegetable, and Side before placing your order."
    );
    return;
  }

  const postOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(transientState),
  };

  const response = await fetch("http://localhost:8088/purchases", postOptions);

  const customEvent = new CustomEvent("newComboPlaced");
  document.dispatchEvent(customEvent);
};
