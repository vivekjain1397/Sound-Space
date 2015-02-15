var imgObj = null;
var animate ;
var imgObj2 = null;
var animate2 ;
var imgObj3 = null;
var animate3 ;
var imgObj4 = null;
var animate4 ;

function init(){
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.top = '70px'; 
   imgObj.style.left = '0px'; 
}
function init2()
{

   imgObj2 = document.getElementById('myImage2');
   imgObj2.style.position= 'relative'; 
   imgObj2.style.top = '220px'; 
   imgObj2.style.left = '0px'; 

}
function init3()
{

   imgObj3 = document.getElementById('myImage3');
   imgObj3.style.position= 'relative'; 
   imgObj3.style.top = '370px'; 
   imgObj3.style.left = '0px'; 

}
function init4()
{

   imgObj4 = document.getElementById('myImage4');
   imgObj4.style.position= 'relative'; 
   imgObj4.style.top = '520px'; 
   imgObj4.style.left = '0px'; 
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
   imgObj2.style.top = '220px'; 
   imgObj2.style.left = '0px'; 
}
function moveRight3(){
   imgObj3.style.left = parseInt(imgObj3.style.left) + 10 + 'px';
   animate3 = setTimeout(moveRight3,20); 
}
function stop3(){
   clearTimeout(animate3);
   imgObj3.style.top = '370px'; 
   imgObj3.style.left = '0px'; 
}
function moveRight4(){
   imgObj4.style.left = parseInt(imgObj4.style.left) + 10 + 'px';
   animate4 = setTimeout(moveRight4,20); 
}
function stop4(){
   clearTimeout(animate4);
   imgObj4.style.top = '520px'; 
   imgObj4.style.left = '0px'; 
}

function showImage() {
    var img = document.getElementById('myImage');
    img.style.visibility = 'visible';
}
function showImage2() {
    var img = document.getElementById('myImage2');
    img.style.visibility = 'visible';
}
function showImage3() {
    var img = document.getElementById('myImage3');
    img.style.visibility = 'visible';
}
function showImage4() {
    var img = document.getElementById('myImage4');
    img.style.visibility = 'visible';
}

addEventListener("keydown", function(event) {
    if (event.keyCode == 67)
    {
      init();
      document.getElementById('c').play() 
      showImage();
      moveRight();
      setInterval(function () {stop();}, 1500);
    
    }
  });

addEventListener("keydown", function(event) {
    if (event.keyCode == 68)
    {
       init2();
       document.getElementById('d').play() 
       showImage2();
       moveRight2();
      setInterval(function () {stop2();}, 1500);
    }
  });

  
  addEventListener("keydown", function(event) {
    if (event.keyCode == 69)
    {
      init3();
       document.getElementById('e').play() 
       showImage3();
        moveRight3();
      setInterval(function () {stop3();}, 1500);
    }
  });


  addEventListener("keydown", function(event) {
    if (event.keyCode == 71)
    {
      init4();
       document.getElementById('g').play() 
       showImage4();
       moveRight4();
      setInterval(function () {stop4();}, 1500);
    }
  });
  

  
  
