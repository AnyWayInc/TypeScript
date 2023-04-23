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

 