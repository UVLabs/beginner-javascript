function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // console.log(billAmount, taxRate);
  console.log('Running Calculate Bill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  //  console.log(total);
  return total;
}

// const myTotal = calculateBill(100, 0.13);
// const myTotal2 = calculateBill(200, 0.13);
// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

// console.log(myTotal, myTotal2);

// console.log(`Your Total is $${myTotal}`);
// console.log(`Your Total is #2 $${calculateBill()}`);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `Hey ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
