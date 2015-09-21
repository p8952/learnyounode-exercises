var http = require('http');
var concat = require('concat-stream');

var lock = 0;
var one;
var two;
var three;

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	res.pipe(concat(function (data) {
		lock++;
		one = data;
		complete();
	}));
});

http.get(process.argv[3], function(res) {
	res.setEncoding('utf8');
	res.pipe(concat(function (data) {
		lock++;
		two = data;
		complete();
	}));
});

http.get(process.argv[4], function(res) {
	res.setEncoding('utf8');
	res.pipe(concat(function (data) {
		lock++;
		three = data;
		complete();
	}));
});

function complete() {
	if (lock === 3) {
		console.log(one);
		console.log(two);
		console.log(three);
	}
}
