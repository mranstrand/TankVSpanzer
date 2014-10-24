var c, ctx;
var p1x,
    p1y,
    p1vx,
    p2x,
    p2y,
    p2vx;


function start() {
    c = document.getElementById("duk");
    ctx = c.getContext("2d");

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    p1x = c.width * 0.1;
    p1y = c.height * 0.8;
    p1vx = 0;
    p2x = c.width * 0.85;
    p2y = c.height * 0.8;
    p2vx = 0;

    window.setInterval(update, 20);
}

function update() {
    repaint();
}

function repaint() {
    paintTank(p1x, p1y);
    paintTank(p2x, p2y);
}

function paintTank(x, y) {

    ctx.fillRect(x, y, c.width * 0.05, c.height * 0.05);

}