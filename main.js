var imgObj = null;
var animate ;
var imgObj2 = null;
var animate2 ;
function init(){
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 

   imgObj2 = document.getElementById('myImage2');
   imgObj2.style.position= 'relative'; 
   imgObj2.style.top = '200px'; 
   imgObj.style.left = '0px'; 
}
function moveRight(){
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
   animate = setTimeout(moveRight,20); 
}
function stop(){
   clearTimeout(animate);
   imgObj.style.left = '0px'; 
}

function moveRight2(){
   imgObj2.style.left = parseInt(imgObj2.style.left) + 10 + 'px';
   animate2 = setTimeout(moveRight2,20); 
}
function stop2(){
   clearTimeout(animate2);
   imgObj2.style.top = '200px'; 
   imgObj2.style.left = '0px'; 
}
window.onload =init;

addEventListener("keydown", function(event) {
    if (event.keyCode == 67)
    {
      document.getElementById('c').play()  
      moveRight();
      setInterval(function () {stop();}, 2000);
    /*  requestAnimationFrame(drawCircle);
      setInterval(function () {cancelAnimationFrame(cancel)}, 3000);
      setInterval(function () {mainContext.clearRect(0, 0, canvasWidth, canvasHeight)}, 500); */
    }
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 68)
    {
       document.getElementById('d').play() 
       moveRight2();
      setInterval(function () {stop2();}, 2000);
      /* requestAnimationFrame(drawCircle);
      setInterval(function () {cancelAnimationFrame(cancel)}, 3000); */
    }
  });

  
  addEventListener("keydown", function(event) {
    if (event.keyCode == 69)
    {
       document.getElementById('e').play() 
      /* requestAnimationFrame(drawCircle);
      setInterval(function () {cancelAnimationFrame(cancel)}, 3000); 
      setInterval(function () {mainContext.clearRect(0, 0, canvasWidth, canvasHeight)}, 500); */
    }
  });


  addEventListener("keydown", function(event) {
    if (event.keyCode == 71)
    {
       document.getElementById('g').play() 
     /*  requestAnimationFrame(drawCircle);
      setInterval(function () {cancelAnimationFrame(cancel)}, 3000); 
      setInterval(function () {mainContext.clearRect(0, 0, canvasWidth, canvasHeight)}, 500); */
    }
  });

  
  
/*var mainCanvas = document.querySelector("#myCanvas");
var mainContext = mainCanvas.getContext("2d");
var cancel = "";
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
var angle = 0;

var requestAnimationFrame = window.requestAnimationFrame || 
   window.mozRequestAnimationFrame || 
   window.webkitRequestAnimationFrame || 
   window.msRequestAnimationFrame;
 
function drawCircle() {
  mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
          
  mainContext.beginPath();
     
    var radius = 75 + 200 * Math.abs(Math.cos(angle));
    mainContext.arc(700, 300, radius, 0, Math.PI * 2, false);

      
    mainContext.closePath();
   

    mainContext.fillStyle = "#006699";
    mainContext.fill();

    angle += Math.PI / 64
    cancel = requestAnimationFrame(drawCircle);
}*/
  