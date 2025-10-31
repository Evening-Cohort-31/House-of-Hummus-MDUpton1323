export const Sales = async () => {
  const sales = await fetch(
    "http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side"
  ).then((res) => res.json());

  let salesDivs = sales.map((sale) => {
    return `<div>${sale.product} - $${sale.amount}</div>`;
  });

  salesDivs = salesDivs.join("");

  return salesDivs;
};
