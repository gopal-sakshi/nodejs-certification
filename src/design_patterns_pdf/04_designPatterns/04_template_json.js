var util = require('util');
var ConfigTemplate = require('./04_template_abstract');
function JsonConfig() { }
util.inherits(JsonConfig, ConfigTemplate);

// The JsonConfig class inherits from our template, the ConfigTemplate class
    // and provides a concrete implementation for the _deserialize() and _serialize() methods.
JsonConfig.prototype._deserialize = function (data) { return JSON.parse(data); };
JsonConfig.prototype._serialize = function (data) { return JSON.stringify(data, null, ' '); }
module.exports = JsonConfig;