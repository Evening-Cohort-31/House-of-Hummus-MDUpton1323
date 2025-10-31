//Import the following functions below
import { Sales } from "./Sales.js";
import { entreeOptions } from "./Entrees.js";
import { Veggies } from "./Vegetables.js";
import { Sides } from "./SideDishes.js";
import { PurchaseCombo } from "./PuchaseComboOrder.js";
//Export an async function called FoodTruck that, that uses Await functions and stores the returned HTML for the following functions below
export const FoodTruck = async () => {
  const salesHTML = await Sales();
  const entreeHTML = await entreeOptions();
  const veggiesHTML = await Veggies();
  const sidesHTML = await Sides();
  //Call the PurchaseCombo function and store the returned HTML in purchaseComboHTML
  const purchaseComboHTML = PurchaseCombo();
  //Return a template string that contains, A header, an article with 3 sections, an article for the purchase button, and an article for the customers orders while all are using string Interpolation.
  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices_entrees options">
                <h2>Base Dish</h2>
                ${entreeHTML}
            </section>
        
            <section class="choices_vegetables options">
                <h2>Vegetable</h2>
                ${veggiesHTML}
            </section>

            <section class="choices_sides options">
                <h2>Sides</h2>
                ${sidesHTML}
            </section>
        </article>

        <article>
            <button id="purchaseCombo-button">Purchase Combo</button>
            ${purchaseComboHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `;
};
