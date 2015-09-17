var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, fileContents) {
	fileContent = fileContents.toString();
	fileContentArray = fileContent.split('\n');
	console.log(fileContentArray.length - 1);
})
