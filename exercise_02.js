count = 0

for (var i = 0; i < process.argv.length; i++) {
	if (i === 0) { continue; }
	if (i === 1) { continue; }
	count += Number(process.argv[i]);
};

console.log(count);
