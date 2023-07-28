const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

rl.question("Enter the student's score: ", function (userInput) {
  const studentScore = parseFloat(userInput);

  const grade = calculateGrade(studentScore);
  console.log("Grade:", grade);

  rl.close();
});
