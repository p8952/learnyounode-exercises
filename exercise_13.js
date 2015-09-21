var http = require('http');
var strftime = require('strftime');
var url = require('url');

var server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });

	urlReq = url.parse(req.url, true);
	if (urlReq.pathname === '/api/parsetime') {
		resObj = {
			'hour': parseInt(strftime('%H', new Date(urlReq.query.iso))),
			'minute': parseInt(strftime('%M', new Date(urlReq.query.iso))),
			'second': parseInt(strftime('%S', new Date(urlReq.query.iso))),
		};

		res.write(JSON.stringify(resObj));
	} else if (urlReq.pathname === '/api/unixtime') {
		resObj = {
			'unixtime': new Date(urlReq.query.iso).getTime(),
		};

		res.write(JSON.stringify(resObj));
	}

	res.end();
});
server.listen(process.argv[2]);
