var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


var url1 = require('url');

const urlLink = "http://localhost:50/get?year=2020&month=aug&day=26";
const urlObj = url1.parse(urlLink);
console.log(urlObj);
/*
    strike-through means the code is deprecated
    Changes to URL module... Henceforth use WHATWG URL API
        constructor new URL (parameters)
        url.hash, url.host, url.hostname
        
*/