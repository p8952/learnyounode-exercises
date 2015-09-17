var fs = require('fs');

directoryPath = process.argv[2];
fileExtension = process.argv[3];

fs.readdir(directoryPath, function doneReading(err, dirContents) {
	for (var i = 0; i < dirContents.length; i++) {
		if (dirContents[i].split('.').length == 1) { continue; }
		if (dirContents[i].split('.').splice(-1)[0] == fileExtension) {
			console.log(dirContents[i]);
		};
	};
})
