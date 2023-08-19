function differenceOfSumSquares(num) {
  let sumOfNumbers = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= num; i++) {
    sumOfNumbers += i;
    sumOfSquares += Math.pow(i,2);
  }

  let squareOfSumOfNumbers = Math.pow(sumOfNumbers,2)

  let difference = squareOfSumOfNumbers-sumOfSquares
  console.log(difference)
}

differenceOfSumSquares(100);
