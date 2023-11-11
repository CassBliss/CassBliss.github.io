
console.log("Linked and Loaded");

const x = 1;
const y = 2;



if(x===y){
    console.log("Success");

}
else {
    console.log("Fail");
}

const btn = document.querySelector("button");


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // tells the thing what it is


function random(number){
    return Math.floor(Math.random()* number);
}


function draw() {
    console.log("button has been clicked");
    ctx.clearRect(0,0, canvas.width,canvas.height);
    
    for(let i=0; i < 1000; i++){
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let color = "rgba(" + red + "," + green + "," + blue + ",0.5)";
        //ctx.fillStyle="rgba(255,50,150,0.5)";
        ctx.fillStyle=color;
        ctx.arc( random(canvas.width), random(canvas.height),random(100),0, 2*Math.PI);
        ctx.fill();
    }

    /*
    for(let i=0;i<1000;i++){
        ctx.beginPath();
        ctx.fillStyle="rgba(25,150,150,0.5)";

        ctx.arc( random(canvas.width), random(canvas.height),random(50),0, 2*Math.PI);
        ctx.fill();
    }
    */
}


document.addEventListener("DOMContentLoaded", ()=> {
    canvas.width = document.documentElement.clientWidth;canvas.height=document.documentElement.clientHeight;
});

btn.addEventListener("click", draw);


