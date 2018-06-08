var assert = require('assert');
var testPipes = require('./app.js');
describe('Should take out the pipe delimiter, remove Mid. Init. and change dashes to slashes.', function() {
	var theTest = "Bonk | Radek | S | M | Green | 6-3-1975";
	var result = testPipes.noPipes(theTest);

});