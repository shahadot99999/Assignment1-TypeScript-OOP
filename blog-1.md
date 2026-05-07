 The Four Pillars of OOP in TypeScript


In large-scale web development code need quickly. OPP helps to expose a framework to keep logic organized, reusable, and easy to maintain. TypeScript support add Type Safety to these classical concepts, making our architecture even more robust.


1. Inheritance 
Inheritance  authorize a class to derive properties and behaviors from another class. Its reduces complexity by allowing you to write common logic once in a "parent" class and repeat it in many "child" subclasses. 

 
 
  User {
  constructor(public name: string) {}
  save() { console.log(`${this.name} saved to DB.`); }
}

// Admin inherits from User
class Admin extends User {
  deleteUser() { console.log("User deleted."); }
}





2. Polymorphism 
Polymorphism approve different classes to be treated as instances of the same interface or parent class, but each can implement a method in its own way. 


 Shape { getArea(): number; }

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea() { return Math.PI * this.radius ** 2; }
}

class Square implements Shape {
  constructor(private side: number) {}
  getArea() { return this.side * this.side; }
}




3. Abstraction 

Abstraction focuses hides complex implementation details . Its only shows the essential features of an object. 



TypeScriptabstract class PaymentProcessor {
  abstract process(amount: number): void; 
}

class StripeProcessor extends PaymentProcessor {
  process(amount: number) 
}




4. Encapsulation 

Encapsulation includes bundling data and the methods . It  operate on that data into a single unit (class). Its try to  restricting access to some of the object's components.



 BankAccount {
  private _balance: number = 0; 

  deposit(amount: number) {
    if (amount > 0) this._balance += amount;
  }

  get balance() { return this._balance; }
}


 


Conclusion

By processing these four pillars, TypeScript developers try to make bridge the gap between theoretical knowledge and practical application. Its try to Inheritance promotes reuse. Its try to Polymorphism provides flexibility. Its try to Abstraction simplifies the interface. Its try to Encapsulation protects data integrity.