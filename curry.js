//函数柯里化
function curry (fn) {
	var args = Array.prototype.slice.call(arguments,1);
	return function () {
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		return fn.apply(null,finalArgs);
	}
}