$('.carousel').carousel({
	interval: 2500
})


function rolar_para(elemento) {
  $('html, body').animate({
    scrollTop: $(elemento).offset().top
  }, 2000);
}

/**/
function load_carousel() {
  largura = $(window).width();

  if (largura < 400) {
	  for(var i=1; i<=3; i++) {
		  $('#slide'+i).attr({
			  src: "static/images/slide"+i+"-320.jpg"
		  });
	  }
  }
  else if (largura < 800) {
	  for(var i=1; i<=3; i++) {
		  $('#slide'+i).attr({
			  src: "static/images/slide"+i+"-768.jpg"
		  });
	  }
  }
  else if (largura < 1100) {
	  for(var i=1; i<=3; i++) {
		  $('#slide'+i).attr({
			  src: "static/images/slide"+i+"-1024.jpg"
		  });
	  }
  }
  else if (largura < 1300) {
	  for(var i=1; i<=3; i++) {
		  $('#slide'+i).attr({
			  src: "static/images/slide"+i+"-1280.jpg"
		  });
	  }
  }
};

load_carousel();
