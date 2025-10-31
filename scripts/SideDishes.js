//Import the setSideChoice function from TransientState.js
import { setSideChoice } from "./TransientState.js";
//Define a function called handleSideChoice that
//Accepts a parameter called changeEvent
const handleSideChoice = (changeEvent) => {
  //Check if the event target's name is "side"
  //If it is
  if (changeEvent.target.name === "side") {
    //Parse the event target's name is "side"
    const sideId = parseInt(changeEvent.target.value);
    //Call setSideChoice with sideId
    setSideChoice(sideId);
  }
};
//Listen for "change" events on the document
//When a change happens, call handleSideChoice
document.addEventListener("change", handleSideChoice);
//Export an async function called Sides that
export const Sides = async () => {
  //Await a fetch request to "http://localhost:8088/sides"
  //Store the response in a variable
  const response = await fetch("http://localhost:8088/sides");
  //Await converting the response to JSON
  //Store the sides array in a variable
  const sides = await response.json();
  //Create an empty string variable called html
  let html = "";
  //Map over the sides array, and for each side
  const divStringArray = sides.map((side) => {
    //Return a div string containing a radio input with name="side" and value set to the side's id
    //Store the resulting array in divStringArray
    return `<div>
        <input type="radio" name="side" value="${side.id}"/> ${side.title}
        </div>`;
  });
  //Join the divStringArray into a single string with no separator
  //Add the joined string to html
  html += divStringArray.join("");
  //Return html
  return html;
};
