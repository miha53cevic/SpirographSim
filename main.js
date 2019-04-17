window.onload = function() {
    createCanvas(400, 400);
    let app = new Spirograph(200, 75, 30);
    
    setInterval(function() {
        app.display();

        console.log(app.shape.length);
    });
}