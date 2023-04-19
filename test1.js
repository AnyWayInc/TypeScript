const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

function oddEvenSorting(array) {
    const arrayLength = array.length; //длина массива
	for (let i = 0; i < arrayLength; i++) {
	    // (i % 2) ? 0 : 1 возвращает 0, если i четное, 1, если i не четное
		for (let j = (i % 2) ? 0 : 1; j < arrayLength - 1; j += 2) {
			if (array[j] > array[j + 1])
				[array[j], array[j + 1]] = [array[j + 1], array[j]]; //swap
		}
    }
    return array;
}

// function mergeArrays(arr1, arr2) {
//     let merged = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         merged.push(arr1[i]);
//         i++;
//       } else {
//         merged.push(arr2[j]);
//         j++;
//       }
//     }
//     return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
// }

function sortArray(array){
    const startTime = Date.now();

    oddEvenSorting(array);

    const usualSortTime = Date.now() - startTime;
    console.log(`Обычная сортировка массива: ${usualSortTime}ms`);
    // console.log(array);

}

function sortArrayWithThreads(array){
    const startTime = Date.now();

    // if(isMainThread){

    let workerData = {
        array: array,
        id: 0
    }
    let workerData1 = {
        array: array,
        id: 1
    } 
            const worker1 = new Worker('./oddEvenSortWorker.js', { workerData: workerData });
            const worker2 = new Worker('./oddEvenSortWorker.js', { workerData: workerData1 });

            // const worker1 = new Worker('./oddSort.js', { workerData: array });
            // const worker2 = new Worker('./evenSort.js', { workerData: array });


            worker1.on('message',(message)=>{
                let sortedArray = message;
                // console.log(message);
                worker2.postMessage(
                    sortedArray
                )
            })

            worker2.on('message',(message)=>{
                console.log(message);
            })
            // let sortedArray = [];

            // worker1.on('message', (message) => {
            //     sortedArray = sortedArray.concat(message);
            // });

            // worker2.on('message', (message) => {
            //     sortedArray = sortedArray.concat(message);
            // });

            // worker1.on('message', (array1) => {
            // worker2.on('message', (array2) => {   
            // });
            // worker2.postMessage('start');
            // });
            // worker1.postMessage('start');
        
        // }
    const threadSortTime = Date.now() - startTime;
    console.log(`Сортировка с потоками: ${threadSortTime}ms`);
    // console.log(array);
}
// }

let array = [];
for(let i=0;i<10;i++){
    array.push(Math.floor(Math.random() * 1000))
}
arrClone = Array.from(array);
// console.log(array);
// console.log(arrClone);
sortArray(array);
sortArrayWithThreads(arrClone);
