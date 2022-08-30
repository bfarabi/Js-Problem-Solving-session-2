// 1.  Fahrenheit to celsius converter

// function farenToCel(F) {
//   let cels = (F - 32) * 5 / 9;
//   return cels
// }
// const celsius = farenToCel(96);
// console.log(celsius, 'deg')

// 2. remove or sepating duplice element of array

const fruits = ['amm', 'jam', 'kathal', 'peyara', "lichi", 'amm', "kathal"];

function duplicateName(fruitika) {
  let uniqueName = [];
  for (let i = 0; i < fruitika.length; i++) {
    const element = fruitika[i];
    if (uniqueName.indexOf(element) === -1) {
      uniqueName.push(element)
    }

  }
  return uniqueName;

}

const allName = duplicateName(fruits)
console.log(allName);