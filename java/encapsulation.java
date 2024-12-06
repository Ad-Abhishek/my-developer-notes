# Encapsulation
-----------------
-> hiding data

-> Controlled Access

-> Improved Maintainability

-> Enhanced Security

-> Getters and Setters

- here objects cant directly access "price" which is 'data-hiding'.
getters and setters are used to access those data.

Ex 1:

public class MainClass {
    public static void main(String[] args) {
        Laptop l1 = new Laptop();
        l1.setPrice(21);

        System.out.println(l1.getPrice());
    }
}

class Laptop {
    int ram;
    private int price;

    public void setPrice(int price){
        // is the User an Admin
        boolean isAdmin = false;
        if(!isAdmin) {
            System.out.println("You can't set the price");
        } else {
            this.price = price;
        }
    }

    public int getPrice() {
        return price;
    }
}

--------------------------------------------------

Ex 2:


public class ClassOne {
    public static void main(String[] args){
        System.out.println("checking...");
        // Person p1 = new Person(34, "Ram");
        Male m1 = new Male(45, "Ramesh");
        // Male m1 = new Male();
        m1.details();
        m1.setSalary(50000);
        m1.details();
        
    }
}

class Person{
    int age;
    String name;
    protected int salary;
    boolean isAdmin = true;

    public Person() {
        System.out.println("person object created.");
    }

    public Person(int age, String name) {
        this();
        this.age = age;
        this.name = name;
    }

    void details() {
        System.out.println(name + " is " + age + " years old. Salary: " + salary);
    }

    void setSalary(int amount) {
        if(isAdmin) {
            this.salary = amount;
        }
    }

    int getSalary() {
        return this.salary;
    }
    
}

class Male extends Person {
    public Male() {
        super();
    }
    public Male(int age, String name) {
        super(age, name);
    }
}