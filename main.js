let app;

function startApp() {
    app = new Spirograph(200, 75, 30);

    document.getElementById('showK').textContent = "k = " + app.k;
    document.getElementById('showL').textContent = "l = " + app.l;

    window.requestAnimationFrame(loop);
}

function loop() {
    app.display();
    window.requestAnimationFrame(loop);
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

    app.Reset(R, r, p, 6 * Math.PI);
    
    document.getElementById('showK').textContent = "k = " + app.k;
    document.getElementById('showL').textContent = "l = " + app.l;
}

function PeriodChange() {
    let r = document.getElementById('r').value;
    let R = document.getElementById('R').value;
    let p = document.getElementById('p').value;

    app.Reset(R, r, p, document.getElementById('t').value * Math.PI);
    
    document.getElementById('showK').textContent = "k = " + app.k;
    document.getElementById('showL').textContent = "l = " + app.l;
}
