import { savePurchaseCombo } from "./TransientState.js";

const handlePurchaseCombo = (clickEvent) => {
  if (clickEvent.target.id === "purchaseCombo-button") {
    console.log("Button Clicked!");
    savePurchaseCombo();
  }
};

export const PurchaseCombo = () => {
  document.addEventListener("click", handlePurchaseCombo);
  return;
};
