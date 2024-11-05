
const Animal = {
    type: 'Dog',
    breed: 'Golden retriever',
    age: 2
}

console.log(typeof(Animal))
----------------------------------
// CLASS 
class Animal {
    constructor(type, breed, age) {
        this.type = type;
        this.breed = breed;
        this.age = age;
    }
}

const zuzu = new Animal('Dog', 'Golden', 2)

console.log(typeof(Animal))
----------------------------------

// ENCAPSULATION

class BankAccount {
    #balance;

    constructor(name, initialBalance = 0) {
        this.name = name;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`Amount deposited: ${amount}`);   
        } else{
            console.log('Error depositing');
        }
    }

    withdraw(amount) {
        if(amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Amount withdrawn: ${amount}`);   
        } else{
            console.log('Error withdrawl');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const user1 = new BankAccount('Abhishek', 100);
user1.deposit(50);
console.log(user1.getBalance());
user1.withdraw(25);
console.log(user1.getBalance());

--------------------------------------------------------

// ABSTRACTION

class CoffeeMachine {
    // constructor() {
    //     this.waterLevel = 0;
    // }

    makeCoffee() {
        this.#boilWater();
        this.#brewCoffee();
        console.log('Coffee is ready!!');
    }

    #boilWater() {
        console.log('Boiling Water');
    }
    #brewCoffee() {
        console.log('Brewing Coffee');
    }
}

const myMachine = new CoffeeMachine();
myMachine.makeCoffee();

-----------------------------------------------------------

// INHERITANCE 

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog('ZUZU');
dog1.speak();

class Cat extends Animal{
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const cat = new Cat('Billi');
cat.speak();

----------------------------------------------------------------------

// POLYMORPHISM

// class Shape {
//     draw() {
//       console.log('Drawing a shape');
//     }
//   }
//   class Circle extends Shape {
//     draw() {
//       console.log('Drawing a circle');
//     }
//   }
//   class Square extends Shape {
//     draw() {
//       console.log('Drawing a square');
//     }
//   }
//   const shapes = [new Shape(), new Circle(), new Square()];
//   shapes.forEach(shape => shape.draw());
  

class Payment {
    constructor(balance) {
        this.balance = balance;
    }

    processPayment() {
        console.log('Processing Payment');
    }
}

class CreditCard extends Payment {
    processPayment() {
        console.log(`Processing Credit Card payment of ${this.balance}`);
    }
}

class PayPal extends Payment {
    processPayment() {
        console.log(`Processing PayPal payment of ${this.balance}`);
    }
}

class Payooner extends Payment{
    processPayment() {
        console.log(`Processing Payooner payment of $${this.balance}`);
    }
}

const payments = [
    new CreditCard(100),
    new PayPal(500),
    new Payooner(1000)
]

payments.forEach(payment => payment.processPayment())

--------------------------------------------------------------

// FACTORY FUNCTION
// Functions that return an object and are used as an alternative
//  to classes, especially when inheritance isn’t required.

function createAnimal(name, breed) {
    return{
        name,
        breed,
        info() {
            console.log(`${this.name} is a ${this.breed}`);
        }
    }
}

const animal1 = createAnimal('zuzu', 'golden retriever');
animal1.info()


----------------------------------------------------------------

// MIXINS:
//  Mixins allow you to add properties or methods
//  to a class without inheritance, useful when you need to add
//  shared functionality across different classes.

const flyMixin = {
    fly() {
      console.log(`${this.name} is flying`);
    }
  };
  class Bird {
    constructor(name) {
      this.name = name;
    }
  }
  Object.assign(Bird.prototype, flyMixin);
  const eagle = new Bird('Eagle');
  eagle.fly(); // Eagle is flying
  
------------------------------------------------------------------