// Select color input
// Select size input
var inputColor = document.querySelector('#colorPicker');
var inputWidth = document.querySelector('#inputWidth');
var inputHeight = document.querySelector('#inputHeight');

document.addEventListener('submit', function (event) {
	event.preventDefault();
	var width = inputWidth.value; 
	var height = inputHeight.value; 
	makeGrid(height, width);
	makeGrid.delete('tr');
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
	var pixelCanvas = document.querySelector("#pixelCanvas");
	for (var a = 1; a <= height; a++) {
		var tableRow = document.createElement('tr');
		pixelCanvas.appendChild(tableRow);
		for (var b = 1; b <= width; b++) {
			var tableData = document.createElement('td');
			tableRow.appendChild(tableData);
			tableData.addEventListener('click', function (event) {
				var color = inputColor.value;
				event.target.style.backgroundColor = color;
			});
		}
	}
}
