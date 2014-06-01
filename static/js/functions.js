$('.carousel').carousel({
	interval: 2500
})


function rolar_para(elemento) {
  $('html, body').animate({
    scrollTop: $(elemento).offset().top
  }, 2000);
}

/**/

largura = $(window).width();

if (largura < 400) {
	for(var i=1; i<=3; i++) {
		$('#slide'+i).attr({
			src: "static/images/slide"+i+"-320.png"
		});
	}
}
else if (largura < 800) {
	for(var i=1; i<=3; i++) {
		$('#slide'+i).attr({
			src: "static/images/slide"+i+"-768.png"
		});
	}
}
else if (largura < 1100) {
	for(var i=1; i<=3; i++) {
		$('#slide'+i).attr({
			src: "static/images/slide"+i+"-1024.png"
		});
	}
}
else if (largura < 1300) {
	for(var i=1; i<=3; i++) {
		$('#slide'+i).attr({
			src: "static/images/slide"+i+"-1280.png"
		});
	}
}

