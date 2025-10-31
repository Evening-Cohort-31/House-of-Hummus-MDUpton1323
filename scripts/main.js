//Import the FoodTruck component function from FoodTruck.js
import { FoodTruck } from "./FoodTruck.js";

const mainContainer = document.querySelector("#container");
//Define an async function called renderAllHTML that awaits the FoodTruck funciton to get the complete HTML string
const renderAllHTML = async () => {
  //Set the innerHTML of the container to that HTML string
  mainContainer.innerHTML = await FoodTruck();
};
//Call renderAllHTML to intially display the page
renderAllHTML();
//Listens for a custom event called "newComboPlaced" on the document
//When the event fires it logs a message to console saying the HTML is regenerating

document.addEventListener("newComboPlaced", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  //Call renderAllHTML again to refresh the page with updated data
  renderAllHTML();
});
