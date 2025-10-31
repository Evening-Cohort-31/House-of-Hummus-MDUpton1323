//Create an object called transientState with three properties
const transientState = {
  entreeId: 0,
  vegetableId: 0,
  sideId: 0,
};
//Export a function called setEntreeChoice that
//Accepts a parameter called chosenEntree
export const setEntreeChoice = (chosenEntree) => {
  //Sets transientState.entreeId to the chosenEntree value
  transientState.entreeId = chosenEntree;
};
//Export a function called SetVegetableChoice that
//Accepts a parameter called chosenVegetable
export const setVegetableChoice = (chosenVegetable) => {
  //Sets transientState.vegetableId to the chosenVegetable value
  transientState.vegetableId = chosenVegetable;
};
//Export a function called SetSideChoice that
//Accepts a parameter called chosenSide
export const setSideChoice = (chosenSide) => {
  //Sets transientState.sideId to the chosenSide value
  transientState.sideId = chosenSide;
};
//Export an async function called savePurchaseCombo that
export const savePurchaseCombo = async () => {
  //Check if any of the three transientState values are still 0
  if (
    //if any are 0
    transientState.entreeId === 0 ||
    transientState.vegetableId === 0 ||
    transientState.sideId === 0
  ) {
    //Show an alert telling user to make all selections
    window.alert(
      "Please make a selection for Entree, Vegetable, and Side before placing your order."
    );
    //Exit the function early (return)
    return;
  }
  //Create an object called postOptions with
  const postOptions = {
    //method property set to "POST"
    method: "POST",
    //headers property with "Content-Type" set to "application/json"
    headers: {
      "Content-Type": "application/json",
    },
    //body property set to the transientState object converted to JSON string
    body: JSON.stringify(transientState),
  };
  //Await a fetch request to "http://localhost:8088/purchases" with postOptions
  //Store the response in a variable
  const response = await fetch("http://localhost:8088/purchases", postOptions);
  //Create a new custom event called "newComboPlaced"
  const customEvent = new CustomEvent("newComboPlaced");
  //Dispatch that event on the document
  document.dispatchEvent(customEvent);

  console.log("Saving survey to database...");
  console.log(transientState);
  //Resets transientState back to zero
  transientState.entreeId = 0;
  transientState.vegetableId = 0;
  transientState.sideId = 0;
};
