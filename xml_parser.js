const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');

const parser = new xml2js.Parser();

fs.readFile('yazarlar.xml', (err, data) => {
	parser.parseString(data, (err, result) => {
		console.log(util.inspect(result, false, null, true));
	});
});