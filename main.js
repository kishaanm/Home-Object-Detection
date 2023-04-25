function preload(){
    img = loadImage('IMG-4077.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("#FF0000");
    text("Bed", 105, 115);
    noFill();
    stroke("#FF0000");
    rect(100, 100, 500, 400);

    fill("#FF0000");
    text("Nightstand Stuff", 480, 110);
    noFill();
    stroke("#FF0000");
    rect(475, 90, 200, 270);

    fill("#FF0000");
    text("Chair", 0, 165);
    noFill();
    stroke("#FF0000");
    rect(0, 150, 155, 270);
}