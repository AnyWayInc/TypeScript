const { parentPort, workerData,threadId } = require('worker_threads');


function oddEvenSort(array) {
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length ; i += 2) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          sorted = false;
        }
        // console.log(array[i]);
      }
      // for (let i = 1; i < array.length ; i += 2) {
      //   if (array[i] > array[i + 1]) {
      //     [array[i], array[i + 1]] = [array[i + 1], array[i]];
      //     sorted = false;
      //   }
      //   // console.log(array[i]);
  
      // }
    }
    return array;
}


const sortedArr = oddEvenSort(workerData)
parentPort.postMessage(sortedArr)
// console.log(sortedArr);

