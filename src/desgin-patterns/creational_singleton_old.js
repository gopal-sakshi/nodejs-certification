class DatabaseConnection {
    constructor() { this.databaseConnection = 'dummytext'; }
    getNewDBConnection() { return this.databaseConnection; }
}

class Singleton {
    constructor() { throw new Error('Use the getInstance() method on the Singleton object!'); }

    static getInstance() {
        if (!Singleton.instance) { Singleton.instance = new DatabaseConnection(); }
        return Singleton.instance;
    }
}

module.exports = Singleton;

// var db23 = new Singleton()               // throws error... Use the getInstance() method
// var db23 = Singleton.getInstance()       // works fine

// there is a lot of boilerplate to implement the Singleton