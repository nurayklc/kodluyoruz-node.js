const arguments = process.argv.slice(2);

function showPrime(lowNumber, highNumber) {
  for (let i = lowNumber; i <= highNumber; i++) {
    let isPrime = true;
    for (let j = 2; j < highNumber; j++) {
      if (i % j === 0 && j != i) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
//showPrime(2,8)
showPrime(arguments[0] * 1, arguments[1] * 1 );

//console.log(process.argv.slice(2))