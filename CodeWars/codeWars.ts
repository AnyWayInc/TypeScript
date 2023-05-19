// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function recordStr(str:any):any{
//     if(str<10){
//         return str;
//     }else{
//         let numOfString:string[] = str.toString().split('');
//         let mass = numOfString.map(el=>{return Number(el)}).reduce((a,b)=>{return a+b},0)
//         console.log(mass);
//         return recordStr(mass);
//     }
// }

// recordStr(493193);



// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers:any){
//     let firstpart = ""
//     let secondpart = ""
//     let thirdpart = ""
//     for (let i = 0; i < numbers.length; i++) {
//         if (i < 3) {
//             firstpart += numbers[i].toString()
//         } else if (i >= 3 && i < 6) {
//             secondpart += numbers[i].toString()
//         } else if (i >= 6) {
//             thirdpart += numbers[i].toString()
//         }
//     }
//     return `(${firstpart}) ${secondpart}-${thirdpart}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

 
// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, 
// но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката). 
// Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, 
// если присутствует более одного слова.

// Примеры:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


// function spinWords(string:string):string{
//     let changedStr = string.split(' ');
//     let res = '';
//     changedStr.map((el,index)=>{
//         if(el.length>=5){
//             changedStr[index] = el.split('').reverse().join('')
//         }else{
//             changedStr[index] = el
//         }})
//     res = changedStr.join(' ');
//     return res
// }


// Хорошо познакомился со старшим братом Фибоначчи, также известным как Трибоначчи.

// Как уже видно из названия, он работает в основном как Фибоначчи, но суммирует последние 3 (вместо 2) чисел последовательности для генерации следующего.
// И, что еще хуже, к сожалению, я не услышу, как его произносят не носители итальянского языка :(

// Итак, если мы хотим начать нашу последовательность Трибоначчи в [1, 1, 1]качестве начального ввода ( подпись AKA ), у нас есть эта последовательность:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// Но что, если мы начали с [0, 0, 1]подписи? 
// Поскольку, начиная с [0, 1]вместо [1, 1]основного сдвига обычной последовательности Фибоначчи на одну позицию, у вас может возникнуть соблазн подумать, что мы получим ту же самую последовательность,
// сдвинутую на 2 позиции, но это не так, и мы получим:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Что ж, вы, возможно, уже догадались об этом, но для ясности: вам нужно создать функцию Фибоначчи, 
// которая по заданному массиву / списку сигнатур возвращает первые n элементов — сигнатуру, включенную в последовательность, заполненную таким образом.

// Подпись всегда будет содержать 3 цифры; n всегда будет неотрицательным числом; если n == 0, то верните пустой массив 
// (за исключением C, возвращающего NULL) и будьте готовы ко всему, что не указано явно;)


// function tribonacci(signature,n){
//     //your code here
// }


//Вернуть труе если последние символы совпадают иначе фалсе

// function solution(str: string, end: string): boolean{
//     let secondRes = str.slice(-(end.length));
//     if(secondRes == end){
//         return true;
//     }else if(end == ''){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(solution('abc',''));


// //Вернуть наибольшее и наименьшее число в строчку через пробел

// function hightAndLow(num: string){
//     let res = num.split(' ').map(el => Number(el)).sort((a,b)=> a-b);
//     let b = [];
//     b.push(res[res.length-1], res[0])
//     return b.join(' ');
// }

// console.log(hightAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))