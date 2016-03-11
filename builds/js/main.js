(function (console) { "use strict";
var gandalf_Main = function() { };
gandalf_Main.main = function() {
	var test = { a : 1, b : 2, c : 1000, d : "Hello", e : "hi"};
	test.a = test.a + 1 - test.a;
	test.a = test.a + 1;
	test.b = test.b + 1;
	test.a = test.a + 100;
	test.b = test.b + 100;
	test.c = test.c + 100;
	test.d = test.d.toUpperCase();
	test.e = test.e.toUpperCase();
	console.log(test);
};
gandalf_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
