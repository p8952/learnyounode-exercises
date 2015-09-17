var fs = require('fs');

fileBuffer = fs.readFileSync(process.argv[2]);
fileContent = fileBuffer.toString();
fileContentArray = fileContent.split('\n');
console.log(fileContentArray.length - 1);
