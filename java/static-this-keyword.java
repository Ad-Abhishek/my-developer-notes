# static keyword:
-------------
static int count; 

- this implies that count is a class property not an object property.

- To access count, we dont need to create any object.
OR
	it can be accessed directly through class.
	
Example:
class Person{
    String name;
    int age;

    static int count;

    public Person() {
        count++;
        System.out.println("person created!");
    }
	
	void details() {
        System.out.println(name + " is " + age + " years old.");
        System.out.println("Person count: " + Person.count);
    }
}
	
==========================================================

# this keyword:
--------------
- used to call one constructor from another constructor
eg:
public Person() {
	count++;
	S

- used to access parameters of this class.
eg:
public class Hello{
    public static void main(String[] args) {
        // System.out.println("Hello World!");

        Person p1 = new Person();
        p1.name = "ram";
        p1.age = 12;

        p1.details();

        Person p2 = new Person(12, "Hari");
        p2.details();

    }
}

class Person{
    String name;
    int age;

    static int count;

    public Person() {
        count++;
        System.out.println("person created!");
    }

    public Person(int age, String name) {
        this();
        this.name = name;
        this.age = age;
    }

    void details() {
        System.out.println(name + " is " + age + " years old.");
        System.out.println("Person count: " + Person.count);
    }
}

=====================================================
# super keyword:

- used to call constructor of parent class

Eg:
class Developer extends Person {
	public Developer(int age, String name) {
		super(age, name);
	}
	
}	