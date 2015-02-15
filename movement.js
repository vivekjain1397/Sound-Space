
var $doc = $(document);
var wanderTween;
console.log("hi2");
console.log($doc.width());
console.log($doc.height());


$('body').append($('<img src="note1.png" class="notes" />'));
$('body').append($('<img src="note1.png" class="notes" />'));
$('body').append($('<img src="note1.png" class="notes" />'));
$('body').append($('<img src="note1.png" class="notes" />'));

var $img = $(".notes");

setTimeout(function() {
  $('.notes').first().remove();}
  , 2000);
  



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

$('.notes').each(function(index, element){
console.log("each");

	//var index = $('.notes').index($(this)) + 1;
	console.log("index: " + index);
  if (wanderTween) {
    wanderTween.kill();
    wanderTween = null;
    TweenLite.to($(element), 0.5, {x:0, y:0});
  } else {
    wander(index);
  }
});

function wander(index) {
  var x = (($doc.width() - $img.width()) / 2) * (Math.random() * 1.8 - 0.3 + index/10),
      y = (($doc.height() - $img.height()) / 2) * (Math.random() * 1.4 - 0.1 + index/10);

	 console.log("x:" + x);
	 console.log("y:" + y);
  var wanderTween = TweenLite.to($img, 2.5, {x:x, y:y, ease:Power1.easeInOut, onComplete:wander});
}
