const { parentPort, workerData } = require('worker_threads');


function oddEvenSort(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i += 2) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
    for (let i = 1; i < array.length - 1; i += 2) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        sorted = false;
      }
    }
  }
  return array;
}

// function oddEvenSort(array,id) {
//   let sorted = false;
//   while (!sorted) {
//     sorted = true;
//     if(id == 0){
//     for (let i = 0; i < array.length ; i += 2) {
//       if (array[i] > array[i + 1]) {
//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//         sorted = false;
//       }
//       console.log(array[i]);
//     }}else if (id == 1 ){
//     for (let i = 1; i < array.length ; i += 2) {
//       if (array[i] > array[i + 1]) {
//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//         sorted = false;
//       }
//       console.log(array[i]);

//     }
//   }}
//   return array;
// }



// parentPort.on('message', (message) => {
//   if (message === 'start') {
//     const sortedArray = oddEvenSort(workerData);
//     parentPort.postMessage(sortedArray);
//   }
// });


// parentPort.postMessage(console.log(workerData));


const sortArray = oddEvenSort(workerData.array)
parentPort.postMessage(sortArray)
// console.log(sortedArray)
// console.log(oddEvenSort(workerData.array,workerData.id));
