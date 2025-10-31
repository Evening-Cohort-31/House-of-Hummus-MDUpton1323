import { setEntreeChoice } from "./TransientState.js";

const handleEntreeChoice = () => {
  console.log("Change event fired!", changeEvent);
  if (changeEvent.target.name === "entrees") {
    const entreeId = parseInt(changeEvent.target.value);
    setEntreeChoice(entreeId);
  }
};

document.addEventListener("change", handleEntreeChoice);

export const entreeOptions = async () => {
  const response = await fetch("http://localhost:8088/entrees");
  const entrees = await response.json();

  let optionsHTML = "";

  const divStringArray = entrees.map((entree) => {
    return `<div>
                <input type="radio" name="entree" value="${entree.id}"/> ${entree.name}
                </div>`;
  });

  optionsHTML += divStringArray.join("");

  return optionsHTML;
};
