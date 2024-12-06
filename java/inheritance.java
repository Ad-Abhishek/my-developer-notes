#Inheritance

public class Person{
    public static void main(String[] args) {
        System.out.println("hey");

        Dog d1 = new Dog(2, "Zuzu");
        d1.details();

        Retriever r1 = new Retriever(4, "Coco");
        r1.details();
    }
}

class Dog {
    int age;
    String name;

    public Dog() {
        System.out.println("Dog object created.");
    }

    public Dog(int age, String name) {
        this();
        this.age = age;
        this.name = name;
    }

    void details() {
        System.out.println(name + " is a dog of age " + age + " years old.");
    }
}

class Retriever extends Dog {
    public Retriever(int age, String name) {
        super(age, name);
    }
}