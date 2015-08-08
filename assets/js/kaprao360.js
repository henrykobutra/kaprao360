// kaprao360.js

window.onload = function() {
	if ($(window).width() < 480 || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	    $("#dish").fadeIn("slow").text('Tap Here');
	    $("#local").text('แตะหน้าจอ');
	}
}

window.onkeydown = function(e) {
	
    var evt = e || window.event;
    var elem = evt.target || evt.srcElement;
    if(e.keyCode == 32 && elem.nodeName.toUpperCase() === "BODY") {
        evt.preventDefault();
        console.log('space');
        mobRand();
    }
};

function mobRand(){
	$.getJSON('assets/js/thaidishes.json', function(data){
		//Temporary for Thai dishes
		var typeArray = [
		    data.rice,
		    data.noodles,
		    data.misc,
		    data.curries,
		    data.soups,
		    data.salads,
		    data.stirfried,
		    data.deepfried,
		    data.grilled,
		    data.dippings,
		    data.snacks
		];
		var typeSelector = typeArray[Math.floor(Math.random()*typeArray.length)];
		var typeSelector = typeSelector[Math.floor(Math.random()*typeSelector.length)];
		console.log(typeSelector.imgurl.src);

		$('#h').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+typeSelector.imgurl.src+")"); 
		randomDesc = typeSelector.desc;
		randomDish = typeSelector.engn;
		randomLocal = typeSelector.localn;
		$("#local").text(randomLocal);
		$("#desc").text(randomDesc);
		$("#dish").text(randomDish);
	});
	return false;
}
