let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart.reduce(sumAmount, 0);
}

let totalAmount = getTotalAmount(shoppingCart);
console.log(totalAmount); // 120

const getAmount = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart
    .map(getAmount)
    .reduce(sumAmount, 0);
}

totalAmount = getTotalAmount(shoppingCart);
console.log(totalAmount); // 120
