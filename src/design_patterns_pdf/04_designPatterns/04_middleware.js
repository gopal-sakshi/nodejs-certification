/*
    Examples of the tasks carried out by an express middleware are as the following:
    • Parsing the body of the request
    • Compressing/decompressing requests and responses
    • Producing access logs
    • Managing sessions
    • Providing Cross-site Request Forgery (CSRF) protection


New middleware can be registered by invoking the use() function
- the name of this function is a common convention in many implementations of this pattern, but we can choose any name. 
- Usually, new middleware can only be appended at the end of the pipeline, but this is not a strict rule.

When new data to process is received, the registered middleware is invoked in an asynchronous sequential execution flow. 
- Each unit in the pipeline receives in input the result of the execution of the previous unit.

Each middleware can decide to stop further processing of the data by simply not invoking its callback or by passing an error to the callback. 
- An error situation usually triggers the execution of another sequence of middleware that is specifically dedicated to handling errors


Chain of responsibility pattern
- to achieve loose coupling in software design 
- where a request from the client is passed to a chain of objects to process them
- Middleware as a pattern
- NodeJs incarnation of Intercepting filter & Chain of Responsibility pattern



*/