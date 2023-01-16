var fs = require('fs');
var objectPath = require('object-path');

function ConfigTemplate() { }

ConfigTemplate.prototype.read = function (file) {
    console.log('Deserializing from ' + file);
    this.data = this._deserialize(fs.readFileSync(file, 'utf-8'));
}
ConfigTemplate.prototype.save = function (file) {
    console.log('Serializing to ' + file);
    fs.writeFileSync(file, this._serialize(this.data));
}

ConfigTemplate.prototype.get = function (path) { return objectPath.get(this.data, path); }
ConfigTemplate.prototype.set = function (path, value) { return objectPath.set(this.data, path, value); }
ConfigTemplate.prototype._serialize = function () { throw new Error('_serialize() must be implemented'); }
ConfigTemplate.prototype._deserialize = function () { throw new Error('_deserialize() must be implemented'); }
module.exports = ConfigTemplate;

/*
    We have two template methods: 
        _deserialize()
        _serialize()
    the underscore at the beginning of their names indicates that they are for internal use only
    Since, in JavaScript, we cannot declare a method as abstract, we simply define them as stubs, throwing an exception if they are invoked
    

*/