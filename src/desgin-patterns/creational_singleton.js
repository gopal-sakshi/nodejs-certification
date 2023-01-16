class DatabaseConnection {
    constructor() { this.databaseConnection = 'dummytext'; }  
    getNewDBConnection() { return this.databaseConnection; }
}
  
module.exports = new DatabaseConnection();

// Why does this work? 
    // In Node.js, it works because of the module caching system. 
    // The module caching system says that "modules are cached after the first time they are loaded" 
    // That means in the second example above, the new instance exported is cached and re-used each time it's required.