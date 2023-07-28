const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function DiscCalc(amount) {
  if (50 <= amount && amount < 100) {
    return 5;
  } else if (100 <= amount && amount < 200) {
    return 10;
  } else if (200 < amount) {
    return 15;
  } else {
    return 0;
  }
}

function DiscountedAmount(amount, discount) {
  const discountedAmount = amount - amount * (discount / 100);
  return discountedAmount;
}

rl.question("Enter the total purchase amount: ", function (userInput) {
  const totalAmount = parseFloat(userInput);

  const discountPercentage = DiscCalc(totalAmount);
  const discountedAmount = DiscountedAmount(totalAmount, discountPercentage);

  console.log("Discount: " + discountPercentage + "%");
  console.log("Total Amount: " + totalAmount);
  console.log("Discounted Amount: " + discountedAmount);

  rl.close();
});
