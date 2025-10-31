import { setVegetableChoice } from "./TransientState.js";

const handleVegetableChoice = (changeEvent) => {
  if (changeEvent.target.name === "vegetable") {
    const vegetableId = parseInt(changeEvent.target.value);
    setVegetableChoice(vegetableId);
  }
};

document.addEventListener("change", handleVegetableChoice);

export const Veggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables");

  const vegetables = await response.json();

  let html = "";

  const divStringArray = vegetables.map((vegetable) => {
    return `<div>
                <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}</div>`;
  });

  html += divStringArray.join("");

  return html;
};
