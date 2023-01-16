class Car {
    constructor(make, model, year, isForSale = true, isInStock = false) {
        this.make = make; this.model = model; this.year = year; this.isForSale = isForSale; this.isInStock = isInStock; 
    }
    toString() { return console.log(JSON.stringify(this)); }
}

class CarBuilder {
    constructor(make, model, year) {
        this.make = make; this.model = model; this.year = year;
    }

    notForSale() { this.isForSale = false; return this; }
    addInStock() { this.isInStock23 = true; return this; }      // understand why this happens... what happens to this.isInStock23 property
    build() { return new Car(this.make, this.model, this.year, this.isForSale, this.isInStock); }
}

// module.exports = CarBuilder;

// const CarBuilder = require('./CarBuilder');

const bmw = new CarBuilder('bmw', 'x6', 2020) .addInStock().build();
const audi = new CarBuilder('audi', 'a8', 2021).notForSale().build();
const mercedes = new CarBuilder('mercedes-benz', 'c-class', 2019).build();
console.log(bmw);
// console.log(audi);
// console.log(mercedes);
/*********************************************************************************************** */

// without using car builder object
const bmw_old = new CarBuilder('bmw', 'x6', 2020, true, true);      // what does that 'true', 'true' represent ???
                                                                        // its confusing
