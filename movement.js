var $img = $("#myImage");
var $doc = $(document);
var wanderTween;
console.log("hi2");
console.log($doc.width());
console.log($doc.height());


$('body').append($('<img>', { 
    src : "note1.png", 
}));

$("#move").click(function() {
	
	console.log("hi");
  if (wanderTween) {
    wanderTween.kill();
    wanderTween = null;
    TweenLite.to($img, 0.5, {x:0, y:0});
  } else {
    wander();
  }
});

function wander() {
  var x = (($doc.width() - $img.width()) / 2) * (Math.random() * 1.8 - 0.3),
      y = (($doc.height() - $img.height()) / 2) * (Math.random() * 1.4 - 0.1);

	 console.log("x:" + x);
	 console.log("y:" + y);
  var wanderTween = TweenLite.to($img, 2.5, {x:x, y:y, ease:Power1.easeInOut, onComplete:wander});
}
