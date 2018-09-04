var http = require("http");

function server(request, response) {
	response.writeHead(200,{
		"Content-type": "text/html"
	});
	response.write("Hola Mundo!!.");
	response.end();
	// body...
}

http.createServer(server).listen(8080);