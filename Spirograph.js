class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Spirograph {
    constructor(R, r, p) {
        this.R = R;
        this.r = r;
        this.p = p;

        this.k = this.r / this.R;
        this.l = this.p / this.r;

        // Angle
        this.t = 0;

        // Shape made by the spirograph
        this.shape = [];

        this.finishedShape = false;

        console.log("l = " + this.l);
        console.log("k = " + this.k);
    }

    display() {
        clear('white');
        // Display outerCircle
        drawArc(WIDTH / 2, HEIGHT / 2, this.R, 0, 2 * Math.PI, 'blue');

        // Calculate shape point
        let x = this.R * ((1 - this.k) * Math.cos(this.t) + this.l * this.k * Math.cos((1 - this.k) / this.k * this.t)) + WIDTH / 2;
        let y = this.R * ((1 - this.k) * Math.sin(this.t) - this.l * this.k * Math.sin((1 - this.k) / this.k * this.t)) + HEIGHT / 2;

        if (this.t <= 6 * Math.PI)
        {
            this.shape.push(new Point(x, y));
        } 

        // Dodaj kutu
        this.t += 0.005;

        // Draw Center Point
        drawFillRect(WIDTH / 2 - 2, HEIGHT / 2 - 2, 4, 4, 'blue');

        // Calculate circle on which Ci rotates on
        let sx = (WIDTH / 2) + ((this.R - this.r) * Math.cos(this.t));
        let sy = (HEIGHT / 2) + ((this.R - this.r) * Math.sin(this.t));

        // Draw circle on which Ci rotates on
        drawArc(WIDTH / 2, HEIGHT / 2, this.R - this.r, 0, 2 * Math.PI, 'yellow');

        // Draw Ci which moves on Circle(sx, sy)
        drawArc(sx, sy, this.r, 0, 2 * Math.PI, 'green');

        // Draw radius line of Ci as it rotates and draws shape
        line(sx, sy, x, y, 'red', 2);

        // Draw shape
        let start = new Point(0, 0);
        start.x = this.R * ((1 - this.k) * Math.cos(0) + this.l * this.k * Math.cos((1 - this.k) / this.k * 0)) + WIDTH / 2;
        start.y = this.R * ((1 - this.k) * Math.sin(0) - this.l * this.k * Math.sin((1 - this.k) / this.k * 0)) + HEIGHT / 2;

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);

        for (let point of this.shape) {
            ctx.lineTo(point.x, point.y);
        }

        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}