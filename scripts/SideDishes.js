import { setSideChoice } from "./TransientState.js";

const handleSideChoice = (changeEvent) => {
  if (changeEvent.target.name === "side") {
    const sideId = parseInt(changeEvent.target.value);
    setSideChoice(sideId);
  }
};

document.addEventListener("change", handleSideChoice);

export const Sides = async () => {
  const response = await fetch("http://localhost:8088/sides");
  const sides = await response.json();

  let html = "";

  const divStringArray = sides.map((side) => {
    return `<div>
        <input type="radio" name="side" value="${side.id}"/> ${side.title}
        </div>`;
  });

  html += divStringArray.join("");

  return html;
};
