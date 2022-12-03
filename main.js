noseX=""
noseY = "";
nose_score = "";

function setup(){
    canvas=createCanvas(450,350);
    canvas.center();
    canvas.parent('canvas');

    video=createCapture(VIDEO);
    video.size(450,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
        console.log("poseNet is Initialized");
    }

function draw(){
        image(video,0,0,450,350);
        if(nose_score > 0.2){
            fill("black");
            stroke("black");
            var canvas = document.getElementById('circle');
if (canvas.getContext)
{
var ctx = canvas.getContext('2d'); 
var X = canvas.width / 2;
var Y = canvas.height / 2;
var R = 45;
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FF0000';
ctx.stroke();
}
        }
    }

    function gotPoses(results){
        if(results.length > 0){
          console.log(results);
          rightwristX = results[0].pose.rightWrist.x;
          rightwristY = results[0].pose.rightWrist.y;
          rightwristSCORE = results[0].pose.keypoints[10].score;
          console.log("rightwristX = "+rightwristX+" ,rightwristY = "+rightwristY+" ,rightwristSCORE = "+rightwristSCORE);
        }
    }