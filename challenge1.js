class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.interests = interests
  }

  bio() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old. ${this.firstName} likes ${this.interests}.`
  }
  greeting() {
    return `Hi. I'm ${this.firstName} ${this.lastName}. `
  }
}


class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interests, subject, prefix) {
    super(firstName, lastName, age, gender, interests)
    this.subject = subject
    this.prefix = prefix

  }

  greeting() {
    return `Hello. My name is ${this.prefix} ${this.lastName}, and I teach ${this.subject}.`
  }

}


class Student extends Person {
  constructor(firstName, lastName, age, gender, interests) {
    super(firstName, lastName, age, gender, interests)

  }

  greeting() {
    return `Yo. I'm ${this.firstName}.`
  }

}
let lucas = new Person("Lucas", "Gonçalves", 23, "male", ["code", " beer", " music"])
let andre = new Teacher("Andre", "Gonçalves", 56, "male", ["beer", " code", " aliens", " action movies"], "Meteorology", "Mr.")
let pedro = new Student("Pedro", "Gonçalves", 11, "male", ["games", " animes", " movies"])

//exemples of execution
console.log(lucas)
console.log(lucas instanceof Person)
console.log(lucas instanceof Teacher)
console.log(lucas instanceof Student)
console.log(lucas.bio())
console.log(lucas.greeting())
console.log(andre)
console.log(andre instanceof Person)
console.log(andre instanceof Teacher)
console.log(andre instanceof Student)
console.log(andre.bio())
console.log(andre.greeting())
console.log(pedro)
console.log(pedro instanceof Person)
console.log(pedro instanceof Teacher)
console.log(pedro instanceof Student)
console.log(pedro.bio())
console.log(pedro.greeting())
