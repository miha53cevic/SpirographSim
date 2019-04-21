let app;

function startApp(R = 200, r = 75, p = 30) {
    delete app;
    app = new Spirograph(R, r, p);

    app.period = document.getElementById('t').value * Math.PI;

    document.getElementById('showK').textContent = "k = " + app.k;
    document.getElementById('showL').textContent = "l = " + app.l;

    window.requestAnimationFrame(loop);
}

function loop() {
    app.display();
    window.requestAnimationFrame(loop);

    console.log(app.shape.length);
}

window.onload = function () {
    createCanvas(400, 400);
    startApp();
}

// Checkbox button functions
function showCi() {
    if (document.getElementById('Ci').checked)
        app.showCi = true;
    else app.showCi = false;
}

function showCo() {
    if (document.getElementById('Co').checked)
        app.showCo = true;
    else app.showCo = false;
}

function showCiPath() {
    if (document.getElementById('CiPath').checked)
        app.showCiPath = true;
    else app.showCiPath = false;
}

// Slider Functions
function SliderChange() {
    let r = document.getElementById('r').value;
    let R = document.getElementById('R').value;
    let p = document.getElementById('p').value;

    startApp(R, r, p);
}

function PeriodChange() {
    SliderChange();
}