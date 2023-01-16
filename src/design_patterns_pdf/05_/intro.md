# Stateful modules

In JavaScript, everything is an object. 
- We don't have abstract concepts such as pure interfaces or classes; 
- its dynamic typing already provides a natural mechanism to decouple the interface (or policy) from the implementation (or detail).

if we use require() to load a module that exports a stateful instance
- a db handle
- an HTTP server instance
- the instance of a service
- or in general any object which is not stateless
- we are actually referencing something very similar to a Singleton, thus inheriting its pros and cons

