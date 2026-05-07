Mastering Complexity: The Four Pillars of OOP in TypeScript

In large-scale web development, code can quickly become a "spaghetti" mess if not structured properly. Object-Oriented Programming (OOP) provides a framework to keep logic organized, reusable, and easy to maintain. By using TypeScript, we add Type Safety to these classical concepts, making our architecture even more robust.


1. Inheritance 
Inheritance allows a class to derive properties and behaviors from another class. This reduces complexity by allowing you to write common logic once in a "parent" class and reuse it in many "child" subclasses. 

 Code Example:TypeScriptclass
 
  User {
  constructor(public name: string) {}
  save() { console.log(`${this.name} saved to DB.`); }
}

// Admin inherits from User
class Admin extends User {
  deleteUser() { console.log("User deleted."); }
}


How it helps: You don't have to rewrite the save() logic for every type of user in your system.


2. Polymorphism 
Polymorphism allows different classes to be treated as instances of the same interface or parent class, but each can implement a method in its own way. This is often achieved using Intersection types or interfaces to merge details. 

 Code Example:TypeScriptinterface 
 
 Shape { getArea(): number; }

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea() { return Math.PI * this.radius ** 2; }
}

class Square implements Shape {
  constructor(private side: number) {}
  getArea() { return this.side * this.side; }
}

How it helps: You can have an array of different shapes and calculate their areas using a single loop without knowing exactly what type of shape each one is.


3. Abstraction 

Abstraction hides complex implementation details and only shows the essential features of an object. In TypeScript, we use Abstract Classes or Interfaces to define what an object should do without explaining how it does it.

Code Example:

TypeScriptabstract class PaymentProcessor {
  abstract process(amount: number): void; // Logic hidden
}

class StripeProcessor extends PaymentProcessor {
  process(amount: number) { /* Secret Stripe Logic */ }
}


How it helps: It reduces "mental load." A developer only needs to know that process() works, not the 500 lines of code inside it.

4. Encapsulation 

Encapsulation involves bundling data and the methods that operate on that data into a single unit (class) and restricting access to some of the object's components. Using Access Modifiers (private, protected, public) ensures that internal logic isn't accidentally changed from the outside.

Code Example:TypeScriptclass

 BankAccount {
  private _balance: number = 0; // Private: hidden from outside

  deposit(amount: number) {
    if (amount > 0) this._balance += amount;
  }

  get balance() { return this._balance; }
}


How it helps: It prevents "illegal" states (like a negative bank balance) by controlling how data is modified.  


Conclusion

By implementing these four pillars, TypeScript developers can bridge the gap between theoretical knowledge and practical application. Inheritance promotes reuse, Polymorphism provides flexibility, Abstraction simplifies the interface, and Encapsulation protects data integrity. Together, they transform a chaotic codebase into a scalable, professional system.