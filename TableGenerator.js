const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function GenerateTable(num) {
  var i;
  for (i = 1; i <= 10; i++) {
    var result = num * i;
    console.log(i + " x " + num + " = " + result);
  }
}

r1.question("Generate Multiplicatation Table for: ", function (userInput) {
  const number = parseFloat(userInput);

  GenerateTable(number);
  r1.close();
});
