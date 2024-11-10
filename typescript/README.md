
# Learn TypeScript
```
const welcome = (name: string) => {
    return `Hello welcome to the team ${name}`
}

console.log(welcome('Ram'));
```
Output:
``` Hello welcome to the team Ram ```

---

## Type Annotation
```
const square = (num: number): number => {
    return num * num;
}

console.log(square(5));
```

Output: ```25```

---

## Interface

```
interface Person {
    name: string,
    age: number,
    married: boolean,
}

const personDetails = (person: Person) => {
    console.log(`${person.name} is ${person.age} years old.`);
}

const person: Person = {name: 'Ram', age:34, married: false};

personDetails(person);
```

Output: ```Ram is 34 years old. ```

---

## Arrays and Tuples

```
const numbers: number[] = [1,2 ,3]
numbers.push(7);
console.log(numbers);

const tuple: [string, number] = ['apple', 4];
tuple.push('grapes')
tuple.push(3, 'mango')
console.log(tuple.filter((element) => typeof(element) === 'string'))
```

Output: 
``` 
[ 1, 2, 3, 7 ]
[ 'apple', 'grapes', 'mango' ] 
```

----

## Union

Union types allow a variable to hold more than one type of value.

```
let id: string | number;
id = 112;   ✅
id = "random string"; ✅

const check = (id: number | string) => {
    console.log(`Your Id is: ${id}`)
}

check('apple'); ✅
check(12);      ✅
```

---

## Type Alias

Type aliases allow you to create custom types that can be reused throughout your code.
```
type StringOrNumber = string | number;

const display = (value: StringOrNumber) => {
    console.log(value)
};

display("petid");

display(5);
```

## Enums
Enums allow you to define a set of named constants, making code more readable.

```
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let move: Direction = Direction.Down; // Output: 0 (the index of 'Down')

console.log(move)
```
You can also specify custom values:

```
enum Status {
    NotFound = 404,
    Success = 200,
    ServerError = 500 // Output: 500
}

console.log(Status.ServerError)
```

---

## Optional Property

```
interface Person {
    name: string,
    age?: number
}

const user1: Person = { name: 'Abhishek'}; 
const user2: Person = { name: 'Abhishek', age: 34}; 

console.log(user1);  // Output: { name: 'Abhishek' }
console.log(user2); // Output: { name: 'Abhishek', age: 34 }
```

---

## Readonly Properties
Properties can be marked as readonly to prevent modification after initialization.

```
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 15; // ❌ Error: Cannot assign to 'x' because it is a read-only
```
---

## Intersection Types
Intersection types combine multiple types into one.

```
interface Admin {
  name: string;
  isAdmin: boolean;
}

interface Employee {
  employeeId: number;
}

type AdminEmployee = Admin & Employee;

const admin: AdminEmployee = {
  name: "Alice",
  isAdmin: true,
  employeeId: 101,
};
```
---

## Generics
Generics allow you to create reusable components that can work with different types.

```
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(5)); // Output: 5
console.log(identity<string>("Hello")); // Output: Hello
```
Generic Interface Example

```
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "TypeScript" };
```
---

## Utility Types
TypeScript provides several built-in utility types like Partial, Required, Pick, and Omit.

```
interface User {
  name: string;
  age: number;
  email?: string;
}

const updateUser = (user: Partial<User>) => {
  // 'user' can have any subset of properties from 'User'
  console.log(user);
};

updateUser({ name: "John" });
updateUser({ email: "john@example.com" });
```
---

## Type Assertions
Type assertions are a way to tell the TypeScript compiler to treat a value as a specific type.

```
let value: any = "Hello, World!";
let length: number = (value as string).length;

console.log(length); // Output: 13
```
---

## Never Type
The never type represents values that never occur. It's often used in functions that throw errors or infinite loops.

```
function throwError(message: string): never {
  throw new Error(message);
}
```
---

## Unknown Type
The unknown type is a safer alternative to any, requiring type checks before use.

```
let input: unknown;
input = "Hello";

if (typeof input === "string") {
  console.log(input.toUpperCase()); // Output: HELLO
}
```
---

## Modules and Namespaces
TypeScript supports ES6 modules for code organization.

Example: Exporting and Importing

math.ts:
```
export const add = (a: number, b: number): number => a + b;
```
app.ts:
```
import { add } from './math';
console.log(add(2, 3)); // Output: 5
```
---

##  Decorators (Advanced)
Decorators are a TypeScript feature used mainly with classes for meta-programming.

```
function Log(target: any, key: string) {
  console.log(`${key} was called`);
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 3); // Output: add was called
```
---
