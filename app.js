


const http = require ("http");

function server(request, response)=>{
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write("Hola mundo!!.");
	response.end();
}.listen(8080);


//http.createServer(server)