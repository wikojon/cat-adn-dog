function setup()
{
    canvas = createCanvas(500,450);
    canvas.center()
}
function preload()
{
    img = loadImage('download.jpeg')
}

function draw()
{
    image(img, 0, 0, 500, 450)
    fill("red")
    stroke("red")
    noFill()
    text("Dog", 50, 60)
   rect(30, 60, 500, 450)
   text("cat", 300, 95)
   rect(230, 95, 500, 450)
}