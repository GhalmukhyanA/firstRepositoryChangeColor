
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
    change = setInterval(setRandomColor, 500);
}

function stopChangeColor() {
    clearInterval(change);
}