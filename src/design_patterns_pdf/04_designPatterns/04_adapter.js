// Adapter
// The Adapter pattern allows us to access the functionality of an object using a different interface

var path = require('path');
module.exports = function createFsAdapter(db) {
    var fs = {};
    //...continues with the next code fragments


    // this readFile23 function is as close as possible to the original fs.readFile() function
    fs.readFile23 = function (filename, options, callback) {
        if (typeof options === 'function') { callback = options; options = {};  } 
        else if (typeof options === 'string') { options = { encoding: options }; }

        //  every call to readFile() and writeFile() will translate into calls to db.get() and db.put()
        db.get(path.resolve(filename), {  valueEncoding: options.encoding }, function (err, value) {
                if (err) { /* Throw error logic */  }
                callback && callback(null, value); 
            }
        );
    };
}