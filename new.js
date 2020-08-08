// ... 1
// let arr = [4, 6, 5, 3, 2];
// let oddNumbers = [];
// let evenNumbers = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//          evenNumbers.push(arr[i]);
//         alert (evenNumbers);
//     } else oddNumbers.push(arr[i]);
// } alert(oddNumbers);


// ... 2
// let arr_1 = [1, 2, 3, 4];
// let arr_2 = [5, 6, 7, 8];
// let arr_3 = [];
// for (let i = 0; i < arr_1.length; i++){
//     arr_3.push(arr_1[i])
// } for (let j = 0; j < arr_2.length; j++){
//     arr_3.push(arr_2[j])
// }
// alert (arr_3)

// ... 3
// let arr_4 = [2, 3, 4];
// let elem = 2;
// function match(elem){
// for(let i = 0; i < arr_4.length; i++){
//     if(elem === arr_4[i]){
//         return true;
//     } else 
//     return false;
// }
// }
// alert(match(elem));

// ... 4
// let objKeys = [];
// let obj = {
//     name: "Vahagn",
//     lstName: "Stepanyan",
//     age: 23
// }
// objKeys = Object.keys(obj);
// alert(objKeys);

// ... 5
// let number_1 = 7;
// let digit_1 = 87;
// function check(number_1, digit_1){
//     if (digit_1 % 10 === number_1 || Math.ceil(digit_1 / 10 === number_1)){
//         return "contains";
//     } else 
//     return "not contain"
// }
// alert(check(number_1, digit_1));

// ... 6
let number_2 = 7695;
let numStr = number_2.toString();
let numArray = numStr.split(" ");

let big = Math.max(numArray);
alert(big);
let small = Math.min(number_2);
let difference = big - small;
// alert(difference);

// function MaxAndMin(number_2){
//     var MaxNum = number_2[0];
//     var minNum = number_2[0];
//     var difference = MaxNum - minNum;
//     for(var i = 1; i < number_2.length; i++){
//         if(MaxNum < number_2[i]){
//             MaxNum = number_2[i];
//      } if(minNum > number_2[i]){
//         minNum = number_2[i];
//  }
//     } return difference;
//     } 
// alert(MaxAndMin(number_2))