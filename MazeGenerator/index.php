<html>
	<head>
		<title>Maze Generator</title>
		<script src="js/Factory.js" type="text/javascript"></script>
		<script src="js/Maze.js" type="text/javascript"></script>
		<script src="js/glyphs/Point.js" type="text/javascript"></script>
		<script src="js/glyphs/HorizontalWall.js" type="text/javascript"></script>
		<script src="js/glyphs/VerticalWall.js" type="text/javascript"></script>
		<script src="js/glyphs/Room.js" type="text/javascript"></script>
		<style type="text/css">
		div.row {
			clear: both;
		}
		div.row div {
			float: left;
		}
		</style>
	</head>
	<body>
		<h1>Maze Generator</h1>
		
		<div id="maze">
			
		</div>
		<script type="text/javascript">
		var maze = Factory.Create("Maze");
		maze.Generate(20, 20);
		document.getElementById("maze").appendChild(maze.Draw());
		</script>
	</body>
</html>