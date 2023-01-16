// Object composition
    // an object is combined with another object for the purpose of extending or using its functionality
    // we intercept the methods that we are interested in manipulating (such as hello()), 
    // while simply delegating the rest of them to the subject (as we did with goodbye())
    // drawback is that we have to manually delegate all the methods, even if we want to proxy only one of them
    
function createProxy(subject) {

    var proto = Object.getPrototypeOf(subject);
    function Proxy(subject) { this.subject = subject; }
    Proxy.prototype = Object.create(proto);

    //proxied method
    Proxy.prototype.hello = function () { return this.subject.hello() + '________world!'; }

    //delegated method
    Proxy.prototype.goodbye = function () {
        return this.subject.goodbye
            .apply(this.subject, arguments);
    }
    
    return new Proxy(subject);
}

var subject23 = {
    hello: function() { return 'hello print chesaa'; },
    goodbye: function() { return 'good bye print chesa'; }
}

var proxy23 = createProxy(subject23);
// we wont expose subject23 object to outsiders... instead we expose proxy23
    // proxy23 will have the same methods & properties as subject23
    // we will modify hello() functionality here
console.log(proxy23.hello());
console.log(subject23.hello());         // notice the difference
console.log(proxy23.goodbye());