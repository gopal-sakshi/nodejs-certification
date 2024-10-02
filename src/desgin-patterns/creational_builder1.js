
var person11 = new Person("UID_123", "Saravanan AR", "25", "India", "1994", "B.Tech", "9876723730");
const user = new User("Abhishek" , 22 , 55 , "India", "Male" );
// this is bad practice... overtime we mistake what age param is, what weight param is


var person12 = new Person("UID_124", "Subbarao", undefined, "India", undefined, undefined, "7730871912");
// we have to pass undefined in the middle

/*
    Builder Design Pattern
    - create a separate class method for each argument in the constructor 
    - all the methods should return "this".

    Partial object creation
*/

// OLD STYLE --- pass all arguments to constructor
class Person {
    constructor(UID, name, age, address, DOB, education, phone_no) { 
        this.UID = UID; this.name = name; this.age = age;
        this.address = address; this.DOB = DOB; this.education = education; this.phone_no = phone_no
    }
}

// BUILDER DESIGN PATTERN ============ using CLASS
class Person {
    constructor(uid) { this.UID = uid }         // only UID is mandatory for 
    setName(name) { this.name = name; return this; }
    setAge(age) { this.age = age; return this; }
    // ... and so on

    build() { /* few checks for mandatory properties */ return this; }      // final Object creation
}

// BUILDER DESIGN PATTERN ============ using factory function
function createUser() {
    const user = { 
        name23, age:null, weight:null,        
        setAge(age23) { this.age = age23; return this; },
        setWeight(weight) { this.weight = weight; return this; },

        build() { /* few checks */ return this; }
    };
    return user;
}
const user23 = createUser('Abhishek')
    .setAge(30)
    .setWeight(70)
    .build();