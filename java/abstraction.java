# Abstraction
----------------
-> hide/reduce complexity
 
-> is done in java using abstract keyword and Interface

Eg: bike..., turn on light, ATM 


Abstract keyword:
---------------
Abstract => Concept
- an abstract class can't have objects
	abstract class Car {}
- abstract methods have no definition
	abstract void start();
	
- Astract methods must be over-ridden else error will occur.

	
Note:
- to make an abstract function, class needs to be abstract
- abstract class cant have children
- abstract functions must be over-ridden

Example:
public class Abstraction {
    public static void main(String[] args) {
        // Car c1 = new Car();
        // c1.start();
        Audi a1 = new Audi();
        a1.start();

        BMW b1 = new BMW();
        b1.start();
    }
}


abstract class Car {
    int price;
    String model;

    abstract void start();
}

class Audi extends Car{
    void start() {
        System.out.println("Audi started..");
    }
}

class BMW extends Car{
    void start() {
        System.out.println("BMW started..");
    }
}
------------------------------------------------

# Interfaces
------------

-> Functions or methods inside interface are by default public and abstract.



public class Interdatces implements Car{
	public static void main(String[] args) {
		SYSout("");
	}
	
	public void start(){
			SYSOUT("my car is starting");
	}
)

interface Car {
	void start();
}

---------------------------
# DIfference between abstract and interface:
-------------
-> function definition can be done inside an abstract but not inside an interface.


------------------------------------------------

# Multiple Inheritance:

public class Interdatces implements Car, Person{
	public static void main(String[] args) {
		SYSout("");
	}
	
	public void start(){
			SYSOUT("my car is starting");
	}
	
	public void walk(){
		SYSOUT("Person walks");
)

interface Car {
	void start();
}

interface Person {
	void walk();
}