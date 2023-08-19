// let movieRating = [91, 90, 55];
// let movieRating = [70, 99, 96, 0, 30];
let movieRating = [23, 23, 23, 23, 23, 23, 23, 23];
// let movieRating = [31,52,20,86,47,76,82,27,42,29];

let lowestCount = 2;
let highestCount = 3;

function moviemovieRating(movieRating, lowestCount, highestCount) {
  let minmovieRating = 0;
  let maxmovieRating = 0;

  if (lowestCount === 0 && highestCount === 0) {
    let res = movieRating.reduce((acc, cur) => acc + cur, 0);
    res = Math.round(res / movieRating.length);
    console.log("movie movieRating ", res);
  }

  if (
    (lowestCount === 1 && highestCount === 1) ||
    (highestCount === 1 && lowestCount === 1)
  ) {
    minmovieRating = Math.min.apply({}, movieRating);
    maxmovieRating = Math.max.apply({}, movieRating);
  }

  if (maxmovieRating !== 0 || minmovieRating !== 0) {
    console.log(movieRating.at(0));
    let filteredmovieRating = movieRating
      .filter((val, index) => val !== maxmovieRating)
      .filter((val, index) => val !== minmovieRating);
    let res =
      filteredmovieRating.reduce((acc, cur) => acc + cur, 0) /
      filteredmovieRating.length;
    console.log("movie movieRating ", res);
  }

  if (lowestCount >= 0 || highestCount >= 0) {
    let sortedRating = movieRating.sort((a, b) => a - b);

    sortedRating.splice(0, lowestCount);
    sortedRating.splice(-sortedRating.length - 1, highestCount);

    let res =
      sortedRating.reduce((acc, cur) => acc + cur, 0) / sortedRating.length;

    console.log("Movie Rating", res);
  }
}

moviemovieRating(movieRating, lowestCount, highestCount);
