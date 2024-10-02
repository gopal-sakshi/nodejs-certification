/*
    Prototype pattern
    - share properties among many objects of the same type

    Instead of creating a duplicate of the property each time, 
    we can simply add the property to the prototype ===> "the base object" from which other objects are derived
    since all instances have access to the prototype object.

    useful for performance optimization
    as it avoids creating new functions for each object instance
*/

const dog = {
    bark() { return `Woof!`; },
};
const german_shepherd = Object.create(dog);
// german_shepherd is an object; it doesnt have any properties on its own
// but we cann call bark() method
console.log(german_shepherd.bark())

/****************************************************************************************/

function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
}
Car.prototype.toString23 = function () {
	return this.model + " has done " + this.miles + " miles";
};
let civic = new Car("Honda Civic", 2009, 20000);
let mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString23()); 
console.log(mondeo.toString23());
// toString23() method doesnt exist on each "civic" (or) "mondeo" object
// toString23() only exists on Car object as prototype
/****************************************************************************************/
