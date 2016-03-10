(function (console) { "use strict";
var gandalf_Main = function() { };
gandalf_Main.main = function() {
	var test_a = 1;
	var test_b = 2;
	test_a = test_a + 1 - test_a;
	null;
};
var gandalf_macros_Tools = function() { };
gandalf_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
