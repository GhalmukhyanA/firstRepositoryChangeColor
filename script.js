var isRunning = false;

function randomColors() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById('p').innerHTML = color;
    return color;
}

var change;

function setRandomColor() {
    var elem = document.getElementById('round');
    elem.style.backgroundColor = randomColors();
}
function startChangeColor() {
    if(isRunning === false){
        isRunning = true;
        document.getElementById('start').style.background = "#cecece";
        document.getElementById('stop').style.background = "#ff0009";
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
        change = setInterval(setRandomColor, 500);
    }
}
function stopChangeColor() {

    if(isRunning === true) {
        isRunning = false;
        document.getElementById('start').style.background = "lightgreen";
        document.getElementById('stop').style.background = "#cecece";
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        clearInterval(change);
    }
}