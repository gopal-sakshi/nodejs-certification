function loadModule(filename, module, require) {
    var wrappedSrc = '(function(module, exports, require) {' + fs.readFileSync(filename, 'utf8') + '})(module, module.exports, require);';
    eval(wrappedSrc);
}

// the source code of a module is essentially wrapped into a function
// we pass a list of variables to the module, in particular: =====> module, exports, require


var require = function (moduleName) {

    console.log('Require invoked for module: ' + moduleName);
    var id = require.resolve(moduleName);                                   // [1]
    if (require.cache[id]) {  return require.cache[id].exports; }           // [2]
    
    var module = { exports: {}, id: id };    
    require.cache[id] = module;                                             // [4]    
    loadModule(id, module, require);                                        // [5]    
    return module.exports;                                                  // [6]
};
require.cache = {};
require.resolve = function (moduleName) {
    /* resolve a full module id from the moduleName */
}
