window.onload = function () {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
center_x = window.innerWidth/2;
center_y = window.innerHeight/2;

var big = canvas.height*0.00222222;

var theta = 0;
var up = 0;
var down = 0;

window.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
        case 38: // Up
        up = 1;
        break;

        case 40: // Down
        down = 1;
        break;
        }
}, false);

window.addEventListener('keyup', function(event) {
        switch (event.keyCode) {
        case 38: // Up
        up = 0;
        break;

        case 40: // Down
        down = 0;
        break;
        }
}, false);

var render = function () {
    if (up) {
        theta = (theta + 0.03) % 6.28;
    }
    if (down) {
        theta = (theta - 0.03) % 6.28;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.beginPath();
    ctx.arc(center_x, center_y, big*10, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    for (var i = 0; i < planets.length; i++){
        planets[i][2] = (planets[i][2] + (2*Math.PI)/(125*planets[i][1])) % (2*Math.PI);
        var x = center_x + (big*2162*planets[i][0]*Math.sin(planets[i][2]));
        var y = center_y + Math.sin(theta)*(-2162*big*planets[i][0]*(Math.cos(planets[i][2])));
        ctx.beginPath();
        ctx.arc(x, y, planets[i][3]*big, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

setInterval(render, 30);
}
