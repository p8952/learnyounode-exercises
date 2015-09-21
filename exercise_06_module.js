var fs = require('fs');

module.exports = function (directoryPath, fileExtension, callback) {
	fs.readdir(directoryPath, function doneReading(err, dirContents) {
		if (err) {
			return callback(err);
		}
		dirContentsArray = [];
		for (var i = 0; i < dirContents.length; i++) {
			if (dirContents[i].split('.').length === 1) { continue; }
			if (dirContents[i].split('.').splice(-1)[0] === fileExtension) {
				dirContentsArray.push(dirContents[i]);
			}
		}
		callback(err, dirContentsArray);
	});
};
