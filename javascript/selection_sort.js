function selectionSort(arr) {
  let lowestNum;
  let lowestIndex;
  const sortedArray = [];
  while (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        lowestNum = arr[i];
        lowestIndex = i;
      } else if (arr[i] < lowestNum) {
        lowestNum = arr[i];
        lowestIndex = i;
      }
    }
    const spliced = arr.splice(lowestIndex, 1);
    sortedArray.push(...spliced);
  }
  return sortedArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [-10, -5, 0, 100]");
  console.log("=>", selectionSort([0, -5, 100, -10]));

  console.log("Expecting: []");
  console.log("=>", selectionSort([]));

  console.log("Expecting: [1]");
  console.log("=>", selectionSort([1]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime

  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const d = new Date();
  const start = [d.getMinutes(), d.getSeconds(), d.getMilliseconds()];

  for (let i = 0; i < 1000; i++) {
    selectionSort([2, -1, 5]);
    selectionSort([longInput]);
  }

  const dTwo = new Date();
  const end = [dTwo.getMinutes(), dTwo.getSeconds(), dTwo.getMilliseconds()];

  console.log(
    `The program took ${(end[2] - start[2]) / 2000} milliseconds on average`
  );
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
