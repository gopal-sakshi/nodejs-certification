// The Strategy pattern 
    // enables an object, called the Context, to support variations in its logic
    // by extracting the variable parts into separate, interchangeable objects called Strategies
    // useful in all those situations where supporting variations of an algorithm requires complex conditional logic 
        // (lots of if-else or switch statements)
    
/*
    Order that represents an online order of an e-commerce website. 
    The object has a method called pay() that
    - finalizes the order
    - transfers the funds from the user to the online store. 

    To support different payment systems
    - Use an if/else statement (based on chosen payment option)
        order(paymentMode:string, ...);
        order('cod', ...);
    - Delegate the logic of the payment to a strategy object that implements the logic for the specific payment gateway

    In the first solution, our Order object cannot support other payment methods unless its code is modified. 
    Also, this can become quite complex when the number of payment options grows. 
    Instead, using the Strategy pattern enables the Order object 
    - to support a virtually unlimited number of payment methods and 
    - keeps its scope limited to only managing the details of the user  

*/