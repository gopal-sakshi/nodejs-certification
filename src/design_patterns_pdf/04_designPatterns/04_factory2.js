/*
    Our factory also allows us 
    - to not expose the constructors of the objects it creates,
    - and prevents them from being extended or modified
*/

//  A factory function to enforce private variables
    // we leverage closures to create two objects: 
    // a person object which represents the public interface returned by the factory 
    // and a group of privateProperties that are inaccessible from the outside, 
    // and that can be manipulated only through the interface provided by the person object.
function createPerson(name) {
    var privateProperties = {};
    var person = {
        setName: function (name) { privateProperties.name = name; },
        getName: function () { return privateProperties.name; },
        modifyPrivate23: function(newProp) { privateProperties.private23 = newProp; }
    };
    person.setName(name);
    return person;
}