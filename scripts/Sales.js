//Export an async function called Sales that
export const Sales = async () => {
  //Await a fetch request to "http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side"
  const sales = await fetch(
    "http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side"
    //Convert the response to JSON using .then()
  ).then((res) => res.json());
  //Store the sales array in a variable
  //Map over the sales array, and for each sale
  let salesDivs = sales.map((sale) => {
    //Calculate the total order price by adding the below
    //Store the result in orderPrice
    const orderPrice =
      sale.entree.price + sale.vegetable.price + sale.side.price;
    //Format the orderPrice as US currency
    //Store the formatted string in formattedPrice
    const formattedPrice = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    //Return a string containing
    //A section with class "purchase-combo"
    //A div that displays "Receipt" plus the sale's id and the formatted price
    return `
    <section class="purchase-combo">
        <div>Receipt #${sale.id} = ${formattedPrice}</div>
    </section>`;
  });
  //Store the resulting array in SalesDivs
  //Join the salesDiv array into a single string with no separator
  //Reassign salesDivs to this joined string
  salesDivs = salesDivs.join("");
  //Return salesDivs
  return salesDivs;
};
