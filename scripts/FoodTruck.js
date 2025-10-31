import { Sales } from "./Sales.js";
import { entreeOptions } from "./Entrees.js";
import { Veggies } from "./Vegetables.js";
import { Sides } from "./SideDishes.js";
import { PurchaseCombo } from "./PuchaseComboOrder.js";

export const FoodTruck = () => {
  const salesHTML = Sales();
  const entreeHTML = entreeOptions();
  const veggiesHTML = Veggies();
  const sidesHTML = Sides();
  const purchaseComboHTML = PurchaseCombo();

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
            <button id="purchase">Purchase Combo</button>
            ${purchaseComboHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `;
};
