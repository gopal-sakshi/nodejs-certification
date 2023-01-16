import Motorvehicle from './Motorvehicle';
import Aircraft from './Aircraf';
import Railvehicle from './Railvehicle';

const VehicleFactory = (type, make, model, year) => {
    if (type === car) { return new Motorvehicle('car', make, model, year); }
    else if (type === airplane) { return new Aircraft('airplane', make, model, year); }
    else if (type === helicopter) { return new Aircraft('helicopter', make, model, year); }
    else { return new Railvehicle('train', make, model, year); }
}

module.exports = VehicleFactory;

// Instead of creating an instance of each class individually
    // you can use the VehicleFactory and specify the type. 
    // You would create a new Car instance as follows:


const audiAllRoad = VehicleFactory('car', 'Audi', 'A6 Allroad', '2020');
