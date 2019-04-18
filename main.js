let app;

function loop() {
    app.display();
    window.requestAnimationFrame(loop);

    console.log(app.shape.length);
}

window.onload = function () {
    createCanvas(400, 400);
    app = new Spirograph(200, 75, 30);

    window.requestAnimationFrame(loop);
}