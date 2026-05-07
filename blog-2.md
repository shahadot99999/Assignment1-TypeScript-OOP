 Mastering Generics in TypeScript


In professional modern web development, writing code that works for a single data type is easy paste, but writing code that is very flexible enough to handle various data structures while remaining safe is a challenge. Generics are trying to the solution to this problem

Understanding the Generic "Placeholder":


Generics help you to create components that work over a variety of types rather than a single one. (typically denoted as <T>) to covered the type provided by the user.

  

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray("TypeScript"); 
const numberArray = wrapInArray(100);          






Enforcing Logic with Generic Constraints

Sometimes you  necessity a function to be flexible, but only within certain limits. This is where Constraints come in. By using the extends keyword, you can apply a Generic to possess specific properties, such as a .length. 




function logLength<T extends { length: number }>(input: T): number {
  return input.length;
}

console.log(logLength("Hello")); 
console.log(logLength([1, 2]));  
                




Securing Object Properties with keyof


Generics can also be applied to create "Property Guards". By mixed two generics and the keyof operator, you can sure that a function only accesses keys that actually exist on a specific object. 




function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Strictly typed return value [cite: 77, 155]
}

const user = { id: 1, username: "dev_user" };
const name = getProperty(user, "username"); 







Conclusion

 Generics are trying to  allow you to build reusable components that don't sacrifice safety for flexibility. 