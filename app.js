// console.log('hello world')

// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3))

// module.exports = { sum };



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(a) {
   let yen = a * oneEuroIs.JPY;
   return yen
}

function fromEuroToDollar(b) {
    let dollar = b * oneEuroIs.USD;
    return dollar
 }
 function fromYenToPound(c) {
    let pound = c * oneEuroIs.GBP;
    return pound
 }

console.log(fromDollarToYen(100));
console.log(fromEuroToDollar(100));
console.log(fromYenToPound(100));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };