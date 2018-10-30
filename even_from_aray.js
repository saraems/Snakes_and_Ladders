/* You have a given table: const numbers = [2, 5, 7, 10, 34, 16, 879, 1]. 
Write a function that will write a new table in the console containing 
only even numbers from the numbers array. */


const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i])
    }
};
