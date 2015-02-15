var imgObj = null;
var animate ;
var imgObj2 = null;
var animate2 ;
var imgObj3 = null;
var animate3 ;
var imgObj4 = null;
var animate4 ;

var context = new AudioContext()
var defaultTime = 500;

var cOscillator = context.createOscillator(); cOscillator.frequency.value = 523.25;
cOscillator.type = "square"
var cGainNode = context.createGain()
cOscillator.connect(cGainNode)
cGainNode.connect(context.destination)
cOscillator.start(0)
cGainNode.gain.value = 0

var dOscillator = context.createOscillator(); dOscillator.frequency.value = 587.33;
dOscillator.type = "square"
var dGainNode = context.createGain()
dOscillator.connect(dGainNode)
dGainNode.connect(context.destination)
dOscillator.start(0)
dGainNode.gain.value = 0

var eOscillator = context.createOscillator(); eOscillator.frequency.value = 659.25;
eOscillator.type = "square"
var eGainNode = context.createGain()
eOscillator.connect(eGainNode)
eGainNode.connect(context.destination)
eOscillator.start(0)
eGainNode.gain.value = 0

var fOscillator = context.createOscillator(); fOscillator.frequency.value = 698.46;
fOscillator.type = "square"
var fGainNode = context.createGain()
fOscillator.connect(fGainNode)
fGainNode.connect(context.destination)
fOscillator.start(0)
fGainNode.gain.value = 0

function init(){
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.top = '70px'; 
   imgObj.style.left = '0px'; 
}
function init2() {
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


setInterval(function() {
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.open("GET", "http://104.236.209.35:3000/sound", false)
	xmlHttp.send(null)
	var response = xmlHttp.responseText
	switch(response) {
		case "loud1":
			gammaFunction(cGainNode, init, showImage, moveRight, stop)
			break;
		case "loud2":
			gammaFunction(dGainNode, init2, showImage2, moveRight2, stop2)
			break;
		case "loud3":
			gammaFunction(eGainNode, init3, showImage3, moveRight3, stop3)
			break;
		case "percussion":
			gammaFunction(fGainNode, init4, showImage4, moveRight4, stop4)
			break;
		default:
			break;
	}
}, defaultTime);


function gammaFunction(gNode, ini, sho, mv, st) {
	//$('body').append($('<img src="note1.png" class="notes" />'));
	createNewImage();
	
	var ww = $(window).width();
    var wh = $(window).height();
	
	$(".notes").each(function(i){
        var posx = Math.round(Math.random() * ww)-20;
        var posy = Math.round(Math.random() * wh)-20;
        $(this).css("top", posy + "px").css("left", posx + "px");
    });
		
	$img = $(".notes");
	wander();
	

  
	gNode.gain.value = 1
	init()
	sho()
	mv()
	setTimeout(function() {gNode.gain.value = 0; st();}, defaultTime)
}

addEventListener("keydown", function(event) {
    switch(event.keyCode) {
		case 67:
			gammaFunction(cGainNode, init, showImage, moveRight, stop)
			break;
		case 68:
			gammaFunction(dGainNode, init2, showImage2, moveRight2, stop2)
			break;
		case 69:
			gammaFunction(eGainNode, init3, showImage3, moveRight3, stop3)
			break;
		case 71:
			gammaFunction(fGainNode, init4, showImage4, moveRight4, stop4)
			break;
		default:
			break;
	}
});

  
  
