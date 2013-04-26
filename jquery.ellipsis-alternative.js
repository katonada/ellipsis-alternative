var text_box =  $('.box_1-8 a.title.fontcompress');

// css [text_box: height: 40px; /*some height*/ overflow: hidden; ]
text_box.each(function(){

	$(this).html('<div>' + $(this).html() + '</div>');

	if($('div', this).height() > $(this).height()){

		var ls = 0.01;
		while($('div', this).height() > $(this).height()){


			ls -= 0.01
			$(this).css({
				'letter-spacing': ls + 'em'
			})

			console.log(ls + ': ' +$('div', this).height() + ' > ' + $(this).height())
		}
	}
})