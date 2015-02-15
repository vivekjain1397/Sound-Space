var $img;
var $doc = $(document);
var wanderTween;
console.log("hi2");
console.log($doc.width());
console.log($doc.height());

/*
setInterval(function(){
		$('body').append($('<img src="note1.png" class="notes" />'));
		
		$img = $(".notes");
		wander();
}, 3000)



setInterval(function() {
  $('.notes').first().remove();}
  , 5500);
  */



  /*
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
*/

$('.notes').each(function(){
console.log("each");

	//var index = $('.notes').index($(this)) + 1;
	//console.log("index: " + index);
  if (wanderTween) {
    wanderTween.kill();
    wanderTween = null;
    TweenLite.to($(element), 0.5, {x:0, y:0});
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
