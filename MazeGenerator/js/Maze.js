(function() {
	var _GenerateRoom = function(x, y, maxX, maxY) {
		var className = null;
		var params = {};
		if (x % 2 == 0 && y % 2 == 0) {
			className = "Point";
		} else if (y == 0 || y == maxY) {
			className = "HorizontalWall";
			params["solid"] = true;
		} else if (y % 2 == 0) {
			className = "HorizontalWall";
			params["solid"] = Math.random() > .5;
		} else if (x == 0 || x == maxX) {
			className = "VerticalWall";
			params["solid"] = true;
		} else if (x % 2 == 0) {
			className = "VerticalWall";
			params["solid"] = Math.random() > .5;
		} else {
			className = "Room";
		}
		return Factory.Create(className, params);
	};
	var Rows;
	var Maze = function() {
		
	};
	Maze.prototype.Draw = function() {
		var div = document.createElement("div");
		for (var i=0; i<Rows.length; i++) {
			var row = document.createElement("div");
			row.className = "row";
			for (var j=0; j<Rows[i].length; j++) {
				row.appendChild(Rows[i][j].Draw());
			}
			div.appendChild(row);
		}
		return div;
	};
	Maze.prototype.GetWidth = function() {
		var w = 0;
		for (var i=0; i<Rows.length; i++) {
			w += Rows[i].GetWidth();
		}
		return w;
	};
	Maze.prototype.GetHeight = function() {
		var h = 0;
		for (var i=0; i<Rows[0].length; i++) {
			h += Rows[0][i].GetWidth();
		}
		return h;
	};
	Maze.prototype.Generate = function(sizeX, sizeY) {
		Rows = [];
		for (var i=0; i<sizeY*2+1; i++) {
			var row = [];
			for (var j=0; j<sizeX*2+1; j++) {
				row.push(_GenerateRoom(j, i, sizeX*2, sizeY*2));
			}
			Rows.push(row);
		}
	};
	
	Factory.Register("Maze", Maze);
})();