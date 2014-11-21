var c, ctx, tankimg;
var p1x,
    p1y,
    p1vx,
    p2x,
    p2y,
    p2vx,
    s1x,
    s1y,
    s1vx,
    s1vy,
    s2x,
    s2y,
    s2vx,
    s2vy,
    say,
    f1x = -40,
    f1y = -40,
    f2x = -40,
    f2y = -40;


function start() {
    c = document.getElementById("duk");
    ctx = c.getContext("2d");

    tankimg = document.getElementById("tankimg");
    exploimg = document.getElementById("exploimg");

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    p1x = c.width * 0.1;
    p1y = c.height * 0.8;
    p1vx = 0;
    p2x = c.width * 0.85;
    p2y = c.height * 0.8;
    p2vx = 0;
    s1x = -40;
    s1y = -40;
    s1vx = 0;
    s1vy = 0;
    say = 0.05;

    window.setInterval(update, 20);
}

function update() {

    updatePositions();
    repaint();

}

function updatePositions() {
    //Tanks
    p1x += p1vx;
    p2x += p2vx;

    //Skott 1
    s1x += s1vx;
    s1y += s1vy;
    //Ändra hastighet på skottet.
    s1vy += say;

    // Skott 2
    s2x += s2vx;
    s2y += s2vy;
    //Ändra hastighet på skottet.
    s2vy += say;

    // Kontrollera om skottet träffar
    if (s2x > p1x && s2x < p1x + c.width * 0.05 && s2y > p1y && s2y < p1y + c.height * 0.05) {

        f1x = p1x;
        f1y = p1y;

    }
    if (s1x > p2x && s1x < p2x + c.width * 0.05 && s1y > p2y && s1y < p2y + c.height * 0.05) {

        f2x = p2x;
        f2y = p2y;

    }

}

function repaint() {
    //Sudda
    ctx.clearRect(0, 0, c.width, c.height);
    //Måla pansar
    paintTank(p1x, p1y);
    paintTank(p2x, p2y);

    paintShot(s1x, s1y);
    paintShot(s2x, s2y);

    paintFire(f1x, f1y);
    paintFire(f2x, f2y);
}

function paintTank(x, y) {

    ctx.drawImage(tankimg, x, y, c.width * 0.05, c.height * 0.05);

}

function paintShot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function paintFire(x, y) {

    ctx.drawImage(exploimg, x, y, c.width * 0.05, c.height * 0.05);


}

function keyDown(e) {
    // Förhindra scroll
    e.preventDefault();

    console.log(e.keyCode);

    if (e.keyCode == 37) {
        // Vänster
        p2vx = -c.width * 0.001;
    }

    if (e.keyCode == 39) {
        //Höger
        p2vx = c.width * 0.0005;
    }

    if (e.keyCode == 65) {
        // Vänster
        p1vx = -c.width * 0.0005;
    }

    if (e.keyCode == 68) {
        //Höger
        p1vx = c.width * 0.001;
    }
    if (e.keyCode == 32) {
        //Space - fire pl1

        s1x = p1x + c.width * 0.05;
        s1y = p1y;
        s1vx = 2;
        s1vy = -3;
    }
    if (e.keyCode == 13) {
        //Enter - fire pl2

        s2x = p2x;
        s2y = p2y;
        s2vx = -2;
        s2vy = -3;
    }


}

function keyUp(e) {
    if (e.keyCode == 37 || e.keyCode == 39) {
        // Stanna pl 2
        p2vx = 0;
    }
    if (e.keyCode == 65 || e.keyCode == 68) {
        // Stanna pl 2
        p1vx = 0;
    }
}