class Walker {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }


show() {
    
    stroke(0);
    point(this.x, this.y);
}


step() {
    let choice = floor(random(4));
    if (choice === 0){
        this.x++;
    } else if (choice === 1){
        this.x--;
    } else if (choice === 2){
        this.y++;
    } else {
        this.y--;
    }

    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;

    this.x += xstep;
    this.y += ystep;
    this.x = constrain(this.x, 0, width);
	this.y = constrain(this.y, 0, height);

   }
}

let myWalker;

function setup () {
   const canvas = createCanvas(640, 240);
   canvas.parent = ('sketch');
   background(255);
   myWalker = new Walker();
}

function draw (){
myWalker.show();
myWalker.step();
}