var $img;
var $doc = $(document);
var wanderTween;
console.log("hi2");
console.log($doc.width());
console.log($doc.height());


function createNewImage(){
	$('body').append($('<img src="note1.png" class="notes" />'));
		var $elem = $('img:last');
		var pos = $elem.position();
		//$elem.offset({left: (Math.random()*4)});
		console.log("pos: " + (Math.random()*10));
		
		
	
		$img = $(".notes");
}

/*
setInterval(function(){
		createNewImage();
}, 3000)
*/
var ww = $(window).width();
var wh = $(window).height();
	
	/*
setInterval(function(){
	$(".notes").each(function(i){
		console.log('setting pos');
        var posx = Math.round(Math.random() * ww)-20;
        var posy = Math.round(Math.random() * wh)-20;
        $(this).css("top", posy + "px").css("left", posx + "px");
    });
}, 1400);
*/

setInterval(function() {
  $('.notes').first().remove();}
  , 3400);
  



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

setInterval(function(){
$('.notes').each(function(i){
		console.log("each");

			//var index = $('.notes').index($(this)) + 1;
			//console.log("index: " + i);
		 /* if (wanderTween) {
			wanderTween.kill();
			wanderTween = null;
			//TweenLite.to($(this), 0.5, {x:0, y:0});
		  } else {
			wander();
		  }
		  */
		  wander();
		  
		});
}, 500);


function wander() {
	var t = ""+$.now();
	var digit = t%10;
	//console.log("t: " + t);
	//console.log("digit: " + digit);
	
	
	var coordX = ($img.position().left)%10;
	var coordY = ($img.position().top)%10;
	
	//console.log("random: " + +Math.random());
	
  var x = (($doc.width() - $img.width()) / 2) * (Math.random() * 3 - (digit+Math.random())/5),
      y = (($doc.height() - $img.height()) / 2) * (Math.random() * 1.4 - 0.1 - (digit+Math.random())/5);

	 //console.log("x:" + x);
	 //console.log("y:" + y);
  var wanderTween = TweenLite.to($img, 2.5, {x:x, y:y, ease:Power1.easeInOut, onComplete:wander});
}
