// Object augmentation
    //  modifying the subject directly by replacing a method with its proxied implementation;
    // drawback of modifying the subject object directly
    
function createProxy(subject) {
    var helloOrig = subject.hello;
    subject.hello = function () { return helloOrig.call(this) + '_____world!'; }
    return subject;
}