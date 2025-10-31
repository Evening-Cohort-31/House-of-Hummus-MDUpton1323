//Import the savePurchaseCombo function from TransientState.js
import { savePurchaseCombo } from "./TransientState.js";
//Define a function called handlePurchaseCombo that
//Accepts a parameter called clickEvent
const handlePurchaseCombo = (clickEvent) => {
  //Check if the event target's id is "purchaseCombo-button"
  if (clickEvent.target.id === "purchaseCombo-button") {
    console.log("Button Clicked!");
    savePurchaseCombo();
  }
};
//Export a function called PurchaseCombo that
export const PurchaseCombo = () => {
  //Listen for "click" events on the document
  //When a click happens, call handlePurchaseCombo
  document.addEventListener("click", handlePurchaseCombo);
  //Return an empty string
  return "";
};
