// 1. sum of  array

// function sum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;

//   }
//   return sum;
// }
// const numbers1 = [23, 45, 75, 38, 40]
// const subAll = sum([25, 15, 35]);
// console.log(subAll);

// 2.largest number of array

// function largestNumber(numbers) {
//   let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     if (element > largest) {
//       largest = element;
//     }

//   }
//   return largest;
// }
// const numbers1 = [23, 45, 75, 38, 40, 107]
// const numbers2 = [-4, -5, -3, -6]
// const largestNum = largestNumber(numbers2);
// console.log(largestNum);

//3. small number of  array
function smallest(numbers) {
  let smallest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (smallest > element) {
      smallest = element;
    }

  }
  return smallest;

}
const numbers1 = [23, 45, 75, 38, 40, 107]
const numbers2 = [-4, -5, -3, -6]
const smallestNum = smallest(numbers2);
console.log(smallestNum);