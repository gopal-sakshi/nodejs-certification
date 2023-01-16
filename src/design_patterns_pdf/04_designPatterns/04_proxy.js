// A proxy is an object that controls the access to another object called subject.

/*
    A proxy is useful in several circumstances
    - Data validation: The proxy validates the input before forwarding it to the subject
    - Security: The proxy verifies that the client is authorized to perform the operation 
            and it passes the request to the subject only if the outcome of the check is positive
    - Caching: The proxy keeps an internal cache so that the operations are executed on the subject only if the data is not yet present in the cache
    - Lazy initialization: If the creation of the subject is expensive, the proxy can delay it to when it's really necessary
    - Logging:

*/


