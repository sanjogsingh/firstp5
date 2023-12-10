function preload()
{

}

function setup()
{
 canvas=createCanvas(500,400)
 canvas.center()
 video=createCapture(VIDEO)
 video.hide()
 Color=""
}

function draw()
{
image(video,0,0,500,400)
   tint(Color)
   fill("brown")
   rect(0,0,100,30)
   fill("brown")
   rect(100,0,100,30)
   fill("brown")
   rect(200,0,100,30)
   fill("brown")
   rect(300,0,100,30)
   fill("brown")
   rect(400,0,100,30)
   fill("brown")
   rect(0,0,30,100)
   fill("brown")
   rect(0,100,30,100)
   fill("brown")
   rect(0,200,30,100)
   fill("brown")
   rect(0,300,30,100)
   fill("brown")
   rect(470,0,30,100)
   fill("brown")
   rect(470,100,30,100)
   fill("brown")
   rect(470,200,30,100)
   fill("brown")
   rect(470,300,30,100)
   fill("brown")
   rect(0,370,100,30)
   fill("brown")
   rect(200,370,100,30)
   fill("brown")
   rect(300,370,100,30)
   fill("brown")
   rect(400,370,100,30)
   fill("brown")
   rect(100,370,100,30)
}
function changeFilter()
{
 Color=document.getElementById("filter").value
 console.log(Color)
}

function take_snapshot()
{
    save("pic.png")
}