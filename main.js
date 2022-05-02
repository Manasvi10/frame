function preload()
{
}

function setup()
{
    canvas = createCanvas(600,400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video,100,100,400,200);
    tint(tint_color);
   fill('red');
   stroke('red');
   circle(50,50,40);
   circle(550,50,40);
   circle(50,350,40);
   circle(550,350,40);
   fill('green')
   stroke('green')
   rect(50,50,500,10);
   rect(50,50,10,300);
   rect(50,350,500,10);
   rect(550,50,10,310);

}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}