class Asteroid {
    constructor(x, y, heading, velocity, size) {
        this.x = x;
        this.y = y;
        this.heading = heading;
        this.velocity = velocity;
        this.size = size;
    }
    
    render() {
        const ctx = game.ctx;
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#ffffff';
    
        // Draw the body of the cockroach (an ellipse)
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size / 2, this.size / 3, 0, 0, Math.PI * 2);
        ctx.fill();
    
        // Draw the head of the cockroach (a smaller ellipse)
        ctx.beginPath();
        ctx.ellipse(this.x, this.y - this.size / 2, this.size / 4, this.size / 6, 0, 0, Math.PI * 2);
        ctx.fill();
    
        // Draw legs (lines extending from the body)
        const legLength = this.size / 2;
        const legSpread = Math.PI / 8; // 22.5 degrees
    
        for (let i = -1; i <= 1; i += 2) { // Two sides: left (-1) and right (1)
            for (let j = -1; j <= 1; j++) { // Three legs on each side
                const angle = j * legSpread;
                ctx.beginPath();
                ctx.moveTo(this.x + i * this.size / 3, this.y + j * this.size / 6);
                ctx.lineTo(
                    this.x + i * (this.size / 3 + Math.cos(angle) * legLength),
                    this.y + j * this.size / 6 + Math.sin(angle) * legLength
                );
                ctx.stroke();
            }
        }
    
        // Draw antennae (lines extending from the head)
        const antennaLength = this.size / 2;
    
        for (let i = -1; i <= 1; i += 2) { // Two antennae: left (-1) and right (1)
            ctx.beginPath();
            ctx.moveTo(this.x + i * this.size / 8, this.y - this.size / 2);
            ctx.lineTo(
                this.x + i * (this.size / 8 + Math.cos(Math.PI / 3) * antennaLength),
                this.y - this.size / 2 - Math.sin(Math.PI / 3) * antennaLength
            );
            ctx.stroke();
        }
    }
    
    
    
}