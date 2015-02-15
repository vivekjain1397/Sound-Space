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
var defaultFilter = 'bandpass';

// var beatBuffer = null;
// var request = new XMLHttpRequest();
// request.open('GET', "http://104.236.209.35:3000/snare.wav", true);
// request.responseType = 'arraybuffer';
// request.onload = function() {
// context.decodeAudioData(request.response, function(buffer) {
	// beatBuffer = buffer;
	// });
// }
// request.send();

var cOscillator = context.createOscillator(); cOscillator.frequency.value = 523.25;
var cGainNode = context.createGain()
var cBQFilter = context.createBiquadFilter(); cBQFilter.type = defaultFilter
cOscillator.connect(cBQFilter)
cBQFilter.connect(cGainNode)
cGainNode.connect(context.destination)
cOscillator.start(0)
cGainNode.gain.value = 0

var dOscillator = context.createOscillator(); dOscillator.frequency.value = 587.33;
var dGainNode = context.createGain()
var dBQFilter = context.createBiquadFilter(); dBQFilter.type = defaultFilter
dOscillator.connect(dBQFilter)
dBQFilter.connect(dGainNode)
dGainNode.connect(context.destination)
dOscillator.start(0)
dGainNode.gain.value = 0

var eOscillator = context.createOscillator(); eOscillator.frequency.value = 659.25;
var eGainNode = context.createGain()
var eBQFilter = context.createBiquadFilter(); eBQFilter.type = defaultFilter
eOscillator.connect(eBQFilter)
eBQFilter.connect(eGainNode)
eGainNode.connect(context.destination)
eOscillator.start(0)
eGainNode.gain.value = 0

var fOscillator = context.createOscillator(); fOscillator.frequency.value = 698.46;
var fGainNode = context.createGain()
var fBQFilter = context.createBiquadFilter(); fBQFilter.type = defaultFilter
fOscillator.connect(fBQFilter)
fBQFilter.connect(fGainNode)
fGainNode.connect(context.destination)
fOscillator.start(0)
fGainNode.gain.value = 0

var gOscillator = context.createOscillator(); gOscillator.frequency.value = 783.99;
var gGainNode = context.createGain()
var gBQFilter = context.createBiquadFilter(); gBQFilter.type = defaultFilter
gOscillator.connect(gBQFilter)
gBQFilter.connect(gGainNode)
gGainNode.connect(context.destination)
gOscillator.start(0)
gGainNode.gain.value = 0

setInterval(function() {
	var xmlHttp = new XMLHttpRequest()
	xmlHttp.open("GET", "http://104.236.209.35:3000/sound", false)
	xmlHttp.send(null)
	var response = xmlHttp.responseText
	switch(response) {
		case "loud1":
			gammaFunction(cGainNode, cOscillator)
			break;
		case "loud2":
			gammaFunction(dGainNode, dOscillator)
			break;
		case "loud3":
			gammaFunction(eGainNode, eOscillator)
			break;
		case "loud4":
			gammaFunction(fGainNode, fOscillator)
			break;
		case "loud5":
			gammaFunction(gGainNode, gOscillator)
			break;
		case "percussion"
			beatFunction()
			break;
		default:
			break;
	}
}, defaultTime);


function gammaFunction(gNode, osc) {
	var choices = ["sine", "square", "sawtooth", "triangle"]
	var idx = Math.floor(Math.random() * choices.length);
	osc.type = choices[idx]
	
	gNode.gain.value = 1
	
	createNewImage();
	
	var ww = $(window).width();
    var wh = $(window).height();
	
	$(".notes").each(function(i){
        var posx = Math.round(Math.random() * ww)-(Math.random()*20);
        var posy = Math.round(Math.random() * wh)-50;
        $(this).css("top", posy + "px").css("left", posx + "px");
    });
		
	$img = $(".notes");
	wander();
	
	setTimeout(function() {gNode.gain.value = 0}, defaultTime)
}

function beatFunction() {
	// var source = context.createBufferSource(); // creates a sound source
	// source.buffer = beatBuffer;                    // tell the source which sound to play
	// source.connect(context.destination);       // connect the source to the context's destination (the speakers)
	// source.start(0);  
	var audio = new Audio('drum.wav');
	audio.play();
}

addEventListener("keydown", function(event) {
    switch(event.keyCode) {
		case 67:
			gammaFunction(cGainNode, cOscillator)
			break;
		case 68:
			gammaFunction(dGainNode, dOscillator)
			break;
		case 69:
			gammaFunction(eGainNode, eOscillator)
			break;
		case 70:
			gammaFunction(fGainNode, fOscillator)
			break;
		case 71:
			gammaFunction(gGainNode, gOscillator)
			break;
		case 80:
			beatFunction()
		default:
			break;
	}
});

  
  
