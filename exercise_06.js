var fs = require('fs');
var readdir = require('./exercise_06_module');

directoryPath = process.argv[2];
fileExtension = process.argv[3];

readdir(directoryPath, fileExtension, function doneReading(err, dirContents) {
	for (var i = 0; i < dirContents.length; i++) {
		console.log(dirContents[i]);
	}
});
