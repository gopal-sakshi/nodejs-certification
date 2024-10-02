/*

(A) Replace---With
    Factory Method pattern suggests that you REPLACEEEEEE
    "direct object construction calls" (using the new operator) WITHHHHHH
    "calls to a special factory method"
    Don’t worry: the objects are still created via the new operator, but it’s being called from within the factory method

    USECASES: 
    - logging frameworks -- create loggers with different configurations (logging level (DEBUG/INFO); output to file/stdout )

(B) entities in factory method
    factory interface ---> the base class (vehicle)
    concrete factories ---> 2wheeler, 4wheeler, auto; 
                            these multiple sub-classes implement all the base class methods
                            provide createObj() function that the client can call
    Client ---------------> client wont create the object directly (or) 
                            we encapsulate the creation of object

    factory interface (or) factory method
    - we can make it abstract ---> so that all subclasses MUST implement their own versions of abstract methods

    client will call the factory method ---> which returns an object; be it 2wheelerObj, 4wheelerObj, autoObj
    all client knows is --> be it any object -- it must have "drive" method

    similarly ---> logging
    getLogger() is a factory function ---> it can return any of "winston", "morgan", "debug"
    but all those objects will implement log() function

    client23.js
    var loggerObj = factoryFile.getLogger()
    loggerObj.log()     // winston implements logging differently  (DEBUG, WARN, INFO)
                        // morgan implements logging differently    (outputs to json file)
*/

