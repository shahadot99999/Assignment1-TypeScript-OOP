//Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}


const input = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(input);

//console.log(result);




// Problem 2

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}


const original = "typescript";
const reversed = reverseString(original);

console.log(reversed);