// Generated by Haxe 3.4.4
if (process.version < "v4.0.0") console.warn("Module " + (typeof(module) == "undefined" ? "" : module.filename) + " requires node.js version 4.0.0 or higher");
(function () { "use strict";
var Main = function() {
	console.log("Node.js Hello World Example");
	js_node_Http.createServer(function(request,response) {
		response.writeHead(200,{ "Content-Type" : "text/plain"});
		response.end("Hello World\n");
	}).listen(8080);
	console.log("Server started: ");
	console.log("open http://localhost:8080");
	console.log("Close Node with CTRL + C");
};
Main.main = function() {
	var main = new Main();
};
var haxe_io_Bytes = function() { };
var js_node_Http = require("http");
var js_node_buffer_Buffer = require("buffer").Buffer;
Main.main();
})();