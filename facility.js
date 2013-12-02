var facility = [];

facility.options = {
	size: 5,
	eff: [1, 0.75, 0.25, 0],
};

facility.drawGrid = function() {
  sizeX = facility.options.size;
  sizeY = facility.options.size;
  
  var grid = document.createElement("tbody");
  grid.id = "facilityGrid";
  
  for (row = -Math.floor(0.5 * sizeX); row <= Math.floor(0.5 * sizeX); row++) {
    var gridRow = document.createElement("tr");
    for (cell = -Math.floor(0.5 * sizeY); cell <= Math.floor(0.5 * sizeY); cell++) {
      var gridCell = document.createElement("td");
      gridCell.id = "facilityGrid-cell:" + row + "," + cell;
      gridCell.innerHTML = "+";
      gridRow.appendChild(gridCell);
    }
    grid.appendChild(gridRow);
  }
  var section = document.getElementById("facilityLayout");
  section.appendChild(grid)
}
