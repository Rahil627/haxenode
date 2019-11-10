// Generated by Haxe 3.4.4
if (process.version < "v4.0.0") console.warn("Module " + (typeof(module) == "undefined" ? "" : module.filename) + " requires node.js version 4.0.0 or higher");
(function ($hx_exports) { "use strict";
var JsonDB = $hx_exports["JsonDB"] = function(dbName,isHumanReadable,isAutoSave) {
	if(isAutoSave == null) {
		isAutoSave = true;
	}
	if(isHumanReadable == null) {
		isHumanReadable = true;
	}
	this.PORT = 4000;
	this.DB_FILE = "database.json";
	this.serverdata = { };
	this.autosave = true;
	this.humanReadable = true;
	this.filename = "database.json";
	if(dbName != null && dbName.indexOf(".json") == -1) {
		dbName += ".json";
	}
	if(dbName != null) {
		this.DB_FILE = dbName;
	}
	this.humanReadable = isHumanReadable;
	this.autosave = isAutoSave;
	this.init();
};
JsonDB.__name__ = true;
JsonDB.prototype = {
	init: function() {
		try {
			if(js_node_Fs.statSync(this.DB_FILE).isFile()) {
				this.serverdata = this.readFromFile();
			}
		} catch( e ) {
			this.writeToFile(this.serverdata);
		}
	}
	,set: function(key,value) {
		this.serverdata[key] = value;
		if(this.autosave) {
			this.writeToFile(this.serverdata);
		}
	}
	,get: function(key) {
		return Reflect.getProperty(this.serverdata,key);
	}
	,has: function(key) {
		return Object.prototype.hasOwnProperty.call(this.serverdata,key);
	}
	,'delete': function(key) {
		Reflect.deleteField(this.serverdata,key);
		if(this.autosave) {
			this.writeToFile(this.serverdata);
		}
	}
	,getData: function() {
		return this.serverdata;
	}
	,setData: function(data) {
		var _g = 0;
		var _g1 = Reflect.fields(data);
		while(_g < _g1.length) {
			var ff = _g1[_g];
			++_g;
			this.serverdata[ff] = Reflect.field(data,ff);
		}
		this.writeToFile(JSON.parse(JSON.stringify(this.serverdata)));
	}
	,readFromFile: function() {
		return JSON.parse(js_node_Fs.readFileSync(this.DB_FILE,"utf8"));
	}
	,writeToFile: function(data) {
		if(this.humanReadable) {
			data = JSON.stringify(data,null,"\t");
		} else {
			data = JSON.stringify(data);
		}
		js_node_Fs.writeFileSync(this.DB_FILE,data,"utf8");
	}
	,startServer: function(port) {
		var _gthis = this;
		if(port == null) {
			port = this.PORT;
		}
		var server = js_node_Http.createServer(function(req,res) {
			var parseUrl = js_node_Url.parse(req.url,true,true);
			var statusCode = 404;
			var content = "404 - Not Found";
			if(parseUrl.pathname == "/set") {
				console.log("Inserting value into database:",parseUrl.query);
				statusCode = 200;
			} else if(parseUrl.pathname.indexOf("/get") != -1) {
				var searchKey = parseUrl.query.key;
				var getContent = { };
				console.log("parseUrl: ",parseUrl);
				console.log("parseUrl.query: ",parseUrl.query);
				console.log("searchKey: key=" + searchKey);
				statusCode = 200;
				console.log("has(searchKey) : " + Std.string(_gthis.has(searchKey)));
				console.log("get(searchKey) : " + Std.string(_gthis.get(searchKey)));
				if(parseUrl.search == "") {
					getContent = _gthis.serverdata;
				} else if(_gthis.has(searchKey)) {
					var obj = { };
					obj[searchKey] = _gthis.get(searchKey);
					getContent = obj;
				} else {
					getContent = { error : true};
				}
				res.writeHead(statusCode,{ "Content-Type" : "application/json"});
				res.end(JSON.stringify(getContent));
			} else {
				res.writeHead(statusCode,{ "Content-Type" : "application/json"});
				res.end(content);
			}
		});
		console.log("http://localhost:4000/get/name");
		console.log("http://localhost:4000/get?name");
		console.log("http://localhost:4000/get?key=name");
		server.setTimeout(3000,function(socket) {
			server.close();
			console.log("Call close");
		});
		server.listen(4000);
	}
	,server: function() {
		js_node_Http.createServer(function(req,res) {
			res.writeHead(200);
			res.end("hello world\n");
		}).listen(4000);
	}
};
var Main = function() {
	var db = new JsonDB();
	db.setData({ "name" : "foo", "number" : 1, "float" : 1.1, string : "foo", array : [1,2,3], bool : true, obj : { one : 1, two : 2}});
	console.log(db.getData());
	db.set("test0","one");
	db.set("test1",2);
	db.set("test2",[1,2,3]);
	db.set("test3",true);
	db.set("test4",{ foo : "ss"});
	console.log(db.getData());
	console.log(db.has("test0"));
	db["delete"]("test0");
	console.log(db.has("test0"));
	db.startServer();
};
Main.__name__ = true;
Main.main = function() {
	var main = new Main();
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) {
		return false;
	}
	delete(o[field]);
	return true;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_io_Bytes = function() { };
haxe_io_Bytes.__name__ = true;
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_node_Fs = require("fs");
var js_node_Http = require("http");
var js_node_Url = require("url");
var js_node_buffer_Buffer = require("buffer").Buffer;
String.__name__ = true;
Array.__name__ = true;
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);