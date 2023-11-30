function randomRGB(){
    //return randomRGB(${random(0,255)},${random(0,255),${random(0,255)})
}


class ball{
    constructor(x,y,velx,vely,color,size){
        this.x=x;
        this.y=y;
        this.velx=velx;
        this.vely=vely;
        this.color=color;
        this.size=size;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,0,2*Math.PI);
        ctx.fill();
    }

    update() {
        //if the ball is located past the screen 
        if((this.x +this.size) >= width){
            //we can change the velocity to move the ball in the negative direction
            this.velx = -(this.velx);
        }

        //this handles the left edge
        if((this.x + this.size <= 0)){
            this.velx = -(this.velx);
        }

        //this handles the bottom of the screen
        if((this.y +this.size) >= height){
            //we can change the velocity to move the ball in the negative direction
            this.vely = -(this.vely);
        }

        //this handles the top of the screen
        if((this.y + this.size <= 0)){
            this.vely = -(this.vely);
        }

        //will still update the position
        this.x += this.velx;
        this.y += this.vely;
        this.color = randomRGB();

    }

    collisionDetect(){
        for(const ball of balls){
            if (this !==ball) {
                const dx = this.x -ball.y;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx*dx + dy*dy);

                if(distance < this.size + ball.size){
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }

    
}
//end of class declaration

const balls = [];

while(balls.length < 25){
    const size = random(1,50);
    const ball = new ball(
        random(0+size, width+size),
        random(0+size, height+size),
        random(-7,7),
        random(-7,7),
        randomRGB(),
        size,
    );
    balls.push(ball);

    console.log(balls)

}

function loop(){
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,width,height);

    for(const ball of balls){
        ball.draw();
        ball.update;
    }

    requestAnimationFrame(loop);
}

loop();

