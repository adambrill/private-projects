(function() {
	var HorizontalWall = function(params) {
		// do nothing
		this.params = params;
	};
	HorizontalWall.prototype.Draw = function() {
		var div = document.createElement("div");
		div.style["width"] = this.GetWidth() + "px";
		div.style["height"] = this.GetHeight() + "px";
		div.attributes["style"] = "float: left;";
		div.style["background"] = this.params.solid ? "black" : "white";
		return div;
	};
	HorizontalWall.prototype.GetWidth = function() {
		return 10;
	};
	HorizontalWall.prototype.GetHeight = function() {
		return 1;
	};
	
	Factory.Register("HorizontalWall", HorizontalWall);
})();