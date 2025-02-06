let Mathematics = 85.76,
  Biology = 98.56,
  Chemistry = 76.98,
  Physics = 83.9,
  Bangla = 73.89;

let totalNumber = Mathematics + 
Biology + Chemistry + Physics + Bangla;
let totalNumberSubject = 5;

// Calculate Average:
let avg = totalNumber % totalNumberSubject;

console.log(totalNumber);
console.log(totalNumberSubject);

console.log("G.P.A " + avg.toFixed(2) + " out of 5.");