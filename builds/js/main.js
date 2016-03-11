(function (console) { "use strict";
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
var StringTools = function() { };
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var gandalf_Main = function() { };
gandalf_Main.main = function() {
	var test = { a : 1, b : 2, c : 1000, d : "Hello", e : "hi"};
	var x = 100;
	test.a = test.a + 1 - test.a;
	test.a = test.a + 1;
	test.b = test.b + 1;
	test.a = test.a + x;
	test.b = test.b + x;
	test.c = test.c + x;
	test.d = test.d.toUpperCase();
	test.e = test.e.toUpperCase();
	console.log(test);
};
var gandalf_macros_Helpers = function() { };
gandalf_macros_Helpers.clean_properties = function(s) {
	return StringTools.replace(StringTools.replace(s,"[",""),"]","").split(",").map(function(_) {
		return StringTools.trim(_);
	});
};
var gandalf_macros_Tools = function() { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
gandalf_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
