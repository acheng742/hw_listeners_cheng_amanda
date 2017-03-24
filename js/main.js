// Custom branch

var heading = document.getElementById("h1");

heading.addEventListener("click", function (){
	heading.className = "yellow";
}); //this event listens to a click in the heading and changes the color to yellow


window.addEventListener("resize", function(){
    document.getElementById("randomizer").innerHTML = Math.random();
}); //this event listens to the resizing of the browser and displays random numbers when resized
