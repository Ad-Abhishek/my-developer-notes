# Working with Mongoose Notes

## Basic Mongoose

### Create user:

1. `const user = User.create({ name: 'Max', age: 23 })`
2. `const user = new User({ name: 'Max', age: 23})`

### Update user name:

`user.name = "John"`

### Change actual version in db

`user.save()`

### Difference between create() and save()

If you call .create(), behind the scenes, it calls .save().
It means, if I am using .create() like this:

`const John = await User.create({name: 'John', age: 99});`

Then, this is hapenning behind the scenes:

`const John = await new User.create({name: 'John', age: 99}).save();`

## Schema Types

```json
    const addressSchema = new mongoose.Schema({
        street: String,
        city: String
    })

    const userSchema = mongoose.Schema({
        name: String,
        age: Number,
        email: String,
        createdAt: Date,
        updatedAt: Date,
        bestFriend: mongoose.SchemaTypes.ObjectId,  // Nested object
        hobbies: [String],                          // Array of Strings
        address: addressSchema,                     // Nested Schema
    })
```

## Handling Errors

```json
const run = async () => {
    try {
        const user = await User.create({
            name: 'Leo',
            age: "23s",
            hobbies: ["Swimming", "Bowling"],
            address:{
                street: "Main St",
                city: "Pokhara"
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

run()
```

## Schema Validation

```json
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max : 100,
    validate: {     // Custom Validator
        validator: v => v % 2 === 0,
        message: props => `${props.value} is not an even number`,
    }
  },
  email: {
   type: String,
   minLength: 10,
   required: true,
   lowercase: true,
  },
  createdAt:{
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,  // Nested object
  hobbies: [String],    // Array of Strings
  address: addressSchema            // Nesting
});

```

Issue with Schema Validation (Built in / Custom):

```json
It's only going to run when you use create() or save() function.
Rest of the methods do not undergo validation.
```

It's always recommended to:

findById() or findOne() and save()
i.e.

```json
User.findById().save()
```

## Query Basics

```bash
await User.findById("66bbd5f87e1f02ad9b9acb09")

await User.countDocuments({ name: "Leo" })

await User.findOne({name: "Leo"})

user.updateOne({age: 23}, { $set: {age: 32} })
```

```json
const user = await User.where("age")
    .gt(12)
    .lt(50)
    .where("name")
    .equals("Leo")
    .limit(2)
    .select("age")
console.log(user)
```

### Passing refence to the Schema

```json
bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",    // reference to User Schema
}

```

### .populate("bestFriend") would log:

```bash
[
  {
    _id: new ObjectId('66bbd35a6d627daabfed37e1'),
    name: 'Leo',
    age: 23,
    email: 'abc@abc.com',
    hobbies: [ 'Swimming', 'Bowling' ],
    address: {
      street: 'Main St',
      city: 'Pokhara',
      _id: new ObjectId('66bbd35a6d627daabfed37e2')
    },
    __v: 0,
    bestFriend: {
      _id: new ObjectId('66bbd3c726662631fa96e1f7'),
      name: 'Leo',
      age: 23,
      email: 'abc@abc.com',
      hobbies: [Array],
      address: [Object],
      __v: 0
    }
  }
]
```

With .populate(), we can do join without really using join()

## Schema methods

```json
userSchema.methods.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`)
}
```

```json
const user = await User.findOne({ name: "Leo"})
console.log(user)
user.sayHi()

```

This would log:

```json
{
  _id: new ObjectId('66bbd35a6d627daabfed37e1'),
  name: 'Leo',
  age: 23,
  email: 'abc@abc.com',
  hobbies: [ 'Swimming', 'Bowling' ],
  address: {
    street: 'Main St',
    city: 'Pokhara',
    _id: new ObjectId('66bbd35a6d627daabfed37e2')
  },
  __v: 0,
  bestFriend: new ObjectId('66bbd3c726662631fa96e1f7')
}
Hi, my name is Leo
```

### Static level methods

They are available in the Model, not only the instances

```json
userSchema.statics.findByName = function(name) {
    return this.where({ name: new RegExp(name, "i" )})
}
```

```json
const user = await User.findByName("Leo")
console.log(user)
```

This would log all the users with the name "Leo".

### Query level methods

```json
userSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, "i" )})
}

userSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, "i")})
}
```

```json
const user = await User.find().byName("Leo")
console.log(user)
```

This would log all the users with the name "Leo" exactly like the above example.

### Virtuals

```json
userSchema.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`
})
```

```json
const user = await User.findOne({ name: "Leo"})
console.log(user.namedEmail)
```

This would log:

```json
Leo <abc@abc.com>
```

## Schema middleware

```json
userSchema.pre("save", function(next) {
    this.updatedAt = Date.now()
    next()
})
```

```json
const user = await User.findOne({ name: "Leo"})
await user.save()
console.log(user)
```

This would update updatedAt to current date everytime save funtion is called.
