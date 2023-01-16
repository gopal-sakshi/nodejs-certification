# design patterns 
- allow us to re-use code for re-occurring problems
    instead of rewriting same code again & again
    instead of solving problem again & again

Design Patterns - Elements of Reusable Object-Oriented Software
- a book... 4 authors (Gang Of Four)
- they identified 23 design Patterns ====> called `GoF Design Patterns`
- 
-------------------------------------------------------------------------------------------
3 types of design patterns:

Creational (5) - the creation of the object instances
Structural (7) - the way the objects are designed
Behavioural (11) - how objects interact with each other
-------------------------------------------------------------------------------------------

# creational
`Singleton`
    when we only want a single instance of a class
    we cannot create multiple instances - just one
    If there is an existing instance, it will use that one.
`Factory`
    to define an interface or abstract class used to create an object. 
    We then use the interface/abstract class to instantiate different objects.
    it decouples the objects' constructions from the objects themselves. 
    You can also introduce new objects into your application without breaking existing code
`Builder`
    to separate the construction of objects from their representation. 
    Thus, it simplifies the code that creates complex objects.
`Prototype`
    JS is a Prototype-based language, which means it uses Prototypal inheritance. 
    That means each object inherits from other objects.
    we create new objects by cloning the prototype's values (or) prototype acts as a blueprint for the new objects
    functions defined in objects are created by reference. 
        That means all objects point to the same function instead of having their copies of that function
`Abstract Factory`
    Allows us to create a Factory for factory classes
-------------------------------------------------------------------------------------------

# structural

`Adapter`
    Provides an interface between two unrelated entities so that they can work together.
`Composite`
	Used when we have to implement a part-whole hierarchy. 
    For example, a diagram made of other pieces such as circle, square, triangle, etc.
`Proxy`
    Provide a surrogate or placeholder for another object to control access to it.
`Flyweight`
	Caching & reusing object instances, used with immutable objects. For example, string pool.
`Facade`
	Creating a wrapper interfaces on top of existing interfaces to help client applications.
`Bridge`
	The bridge design pattern is used to decouple the interfaces from implementation 
    and hiding the implementation details from the client program.
`Decorator`
    The decorator design pattern is used to modify the functionality of an object at runtime.
-------------------------------------------------------------------------------------------

# behavioural

`Template Method`
	used to create a template method stub and defer some of the steps of implementation to the subclasses.
`Mediator`
	used to provide a centralized communication medium between different objects in a system.
`Chain of Responsibility`
	used to achieve loose coupling in software design where a request from the client is passed to a chain of objects to process them.
`Observer`
	useful when you are interested in the state of an object and want to get notified whenever there is any change.
`Strategy`
	Strategy pattern is used when we have multiple algorithm for a specific task and client decides the actual implementation to be used at runtime.
`Command`
	Command Pattern is used to implement lose coupling in a request-response model.
`State`
	State design pattern is used when an Object change it’s behavior based on it’s internal state.
`Visitor`
	Visitor pattern is used when we have to perform an operation on a group of similar kind of Objects.
`Interpreter`
	defines a grammatical representation for a language and provides an interpreter to deal with this grammar.
`Iterator`	
    used to provide a standard way to traverse through a group of Objects.
`Memento`
    The memento design pattern is used when we want to save the state of an object so that we can restore later on.
-------------------------------------------------------------------------------------------