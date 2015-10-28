function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
  background(0);
  
  // register event handler to position anytime it changes
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updatePosition);
  } else {
    alert("navigator.geolocation is not available");
  }
}

function updatePosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  background(0);
  text("Current position: " + lat + " " + lng, 50, 50);
}