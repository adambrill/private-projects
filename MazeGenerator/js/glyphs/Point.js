(function() {
	var Point = function() {
		// do nothing
	};
	Point.prototype.Draw = function() {
		var div = document.createElement("div");
		div.style["width"] = this.GetWidth() + "px";
		div.style["height"] = this.GetHeight() + "px";
		div.style["float"] = "left";
		div.style["background"] = "black";
		return div;
	};
	Point.prototype.GetWidth = function() {
		return 1;
	};
	Point.prototype.GetHeight = function() {
		return 1;
	};
	Factory.Register("Point", Point);
})();