(function() {
	var Room = function() {
		// do nothing
	};
	Room.prototype.Draw = function() {
		var div = document.createElement("div");
		div.style["width"] = this.GetWidth() + "px";
		div.style["height"] = this.GetHeight() + "px";
		div.style["float"] = "left";
		div.style["background"] = "white";
		return div;
	};
	Room.prototype.GetWidth = function() {
		return 10;
	};
	Room.prototype.GetHeight = function() {
		return 10;
	};
	Factory.Register("Room", Room);
})();