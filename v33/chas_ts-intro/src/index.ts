// En liten "kvitto"-generator

// "199" + "199" * 0.25
// "199" + 49,75

// String Literal - Union
type DiscountCode = "STUDENT" | "VIP" | "PENSIONÄR" | "BARN";

// Number Literal - Union
type TaxRate = 0.1 | 0.25;

interface Customer {
  firstName: string;
  discountCode: DiscountCode;
}

function calcTotal(price: number, taxRate: number) {
  return price + price * taxRate;
}

function applyDiscount(subtotal: number, code: DiscountCode) {
  if (!code) return 0;

  if (code === "STUDENT") return Math.round(subtotal * 0.1);

  if (code === "VIP") return 50;

  if (code === "BARN") return 30;

  if (code === "PENSIONÄR") return 100;

  const neverCheck: never = code;
  return neverCheck;

  // switch (code) {
  //   case "STUDENT":
  //     return Math.round(subtotal * 0.1);

  //   case "VIP":
  //     return 50;

  //   case "PENSIONÄR":
  //     return 30;

  //   case "BARN":
  //     return "100";

  //   default:
  //     const neverCheck: never = code;
  //     return neverCheck;
  // }
}

function addTip(total: number, percentage: number): number {
  return total * percentage;
}

function printReceipt(
  customer: Customer,
  price: number,
  taxRate: number,
  tipPercentage: number
): void {
  const { firstName, discountCode } = customer;

  // Typescript räknar ut vilken typ som subtotal får = Infer (härleda på svenska)
  const subtotal = calcTotal(price, taxRate);
  console.log("subtotal", subtotal);

  const tip = addTip(subtotal, tipPercentage);
  const discount = applyDiscount(subtotal, discountCode);
  const total = subtotal - discount + tip;

  // hej får typen sträng genom att ts räknar ut typen
  let hej = "Hello World";

  console.log("dricks", tip);
  console.log("rabatt", discount);

  console.log(
    "Tack " +
      firstName.toUpperCase() +
      "! Att betala: " +
      total.toFixed(2) +
      " kr"
  );
}

const customer: Customer = {
  firstName: "alex",
  discountCode: "VIP",
};

// OBS: Medvetet "slarv": pris som sträng i stället för number.
printReceipt(customer, 199, 0.25, 0.1);

// const person = { firstName: "Sven" };

// const { firstName } = person;
// console.log(firstName)
