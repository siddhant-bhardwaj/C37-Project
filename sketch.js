var drawing = [];
var point;
var currentPath=[];
var saveButton;

function setup(){
    var canvas=createCanvas(1200,400);
    canvas.mousePressed(startPath);
    //canvas.mouseReleased(endPath);
    clearButton = select('#clearButton');
    clearButton.mousePressed(clearDrawing);
}


function startPath(){
currentPath=[];
drawing.push(currentPath);
}

/*function endPath(){
    
}*/


function draw(){
background("black");



if(mouseIsPressed){
var point={
    x: mouseX,
    y:mouseY
}
console.log(point);
currentPath.push(point);


stroke(255);
strokeWeight(5);
noFill();

for(var i=0; i< drawing.length; i++){
var path=drawing[i];
beginShape();
for(var j=0; j< path.length; j++){
vertex(path[j].x,path[j].y)


}
endShape();
}



}

}


function clearDrawing(){
drawing=[];


}