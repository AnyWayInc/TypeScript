const { parentPort, workerData, threadId } = require('worker_threads');

// sort the workerData.arr by even or odd elements based on worker thread id
const isEven = (threadId % 2 === 0);

if (isEven) {
  workerData.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 0) {
      return a - b;
    } else if (a % 2 === 0) {
      return -1;
    } else if (b % 2 === 0) {
      return 1;
    } else {
      return 0;
    }
  });
} else {
  workerData.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 1) {
      return a - b;
    } else if (a % 2 === 1) {
      return -1;
    } else if (b % 2 === 1) {
      return 1;
    } else {
      return 0;
    }
  });
}

// send sorted workerData.arr back to parent thread
parentPort.postMessage(console.log(workerData));
