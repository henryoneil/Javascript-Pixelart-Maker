// Select color input
// Select size from height & width input
// Select the table element

var inputColor = document.querySelector('#colorPicker');
var inputWidth = document.querySelector('#inputWidth');
var inputHeight = document.querySelector('#inputHeight');
var pixelCanvas = document.querySelector("#pixelCanvas");

// Add a listener for when users 'submit' each form
// Included clearGrid function to reset table when 'submit' form is submitted

document.addEventListener('submit', function (event) {
	event.preventDefault();
	var width = inputWidth.value; 
	var height = inputHeight.value; 
	clearGrid();
	makeGrid(height, width);
});

// Since cells are based off rows, remove the child until there are no rows left
// Output remove all existing children creating blank 

function clearGrid(){
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}

// When size is submitted by the user, call makeGrid()
// Function will create the table given desired dimentions
// Function also allows user to color each cell given color input

function makeGrid(height, width) {
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
