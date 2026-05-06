//Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}


const input = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(input);



// Problem 2

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

const original = "typescript";
const reversed = reverseString(original);


// Problem 3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {    
    return "String";
  } else {   
    return "Number";
  }
}


// Problem 4

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

const userName = getProperty(user, "name"); 
const userId = getProperty(user, "id");     



// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,      
    isRead: true 
  };
}


const myBook: Book = { 
  title: "TypeScript Guide", 
  author: "Jane Doe", 
  publishedYear: 2024 
};

const updatedBook = toggleReadStatus(myBook);



// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {    
    super(name, age); 
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");


// Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
 
  return arr1.filter((item) => arr2.includes(item));
}


const listA = [1, 2, 3, 4, 5];
const listB = [3, 4, 5, 6, 7];

const result1 = getIntersection(listA, listB);


