(function() {
	var VerticalWall = function(params) {
		this.params = params;
	};
	VerticalWall.prototype.Draw = function() {
		var div = document.createElement("div");
		div.style["width"] = this.GetWidth() + "px";
		div.style["height"] = this.GetHeight() + "px";
		div.style["float"] = "left";
		div.style["background"] = this.params.solid ? "black" : "white";
		return div;
	};
	VerticalWall.prototype.GetWidth = function() {
		return 1;
	};
	VerticalWall.prototype.GetHeight = function() {
		return 10;
	};
	Factory.Register("VerticalWall", VerticalWall);
})();