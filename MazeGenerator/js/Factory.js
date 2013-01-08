(function() {
	var _registrar = {};
	var Factory = function() {
		
	};
	Factory.prototype.Register = function(name, func) {
		_registrar[name] = func;
	};
	Factory.prototype.Create = function(name, obj) {
		if (_registrar[name]) {
			var obj = new _registrar[name](obj);
			return obj;
		}
		console.log(name);
		return null;
	};
	window.Factory = new Factory();
})();