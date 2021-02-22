// V = r2 * π * H

var radius = parseFloat(prompt("Please enter the cylinder base radius value: "))
var height = parseFloat(prompt("Please enter the cylinder height value: "))

function cylinderVolume() {
    var volume = Math.pow(radius, 2) * Math.PI * height
    alert("The volume of your cylinder is " +  volume.toFixed(2))
    }

cylinderVolume()