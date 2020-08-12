$(document).ready(function() {
	$('article.left section').click(function() {
		    var was_selected = $(this).hasClass('section-selected');
		    $('article-left section').removeClass('section-selected');
		    if (!was_selected) {
			$(this).addClass('section-selected');
		}
	});

	$('article.right section').click(function() {
	    	$(this).toggleClass('right-selected');
		    if ($('section.right-selected')) {
			$(this).children('input.choose').toggle();
			if ($('section.right-selected')) {	
			$(this).children('input.choose').toggle();
		}		
		}
	  });

	$('input-choose').click(function() {
			var section = $('section.section-selected');
			if (section.length) {
			console.log(section.attr('section-id') + ' ' + $(this).attr('location-type'));
			console.log($(this).parents('article').attr('article-id'));
			} else if {
				console.log('none selected');
	        }
	      });
		});

