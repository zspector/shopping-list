$(document).ready(function() {
	$('.enter').keydown(function(e){
		var toAdd = $('input[name=enter]').val();
		if (e.keyCode == 13) {
			$('.list').append('<div class="item">' +toAdd+ '</div>');
			$(this).val('');
		}
	});
	$(document).on('dblclick', '.item', function() {
		$(this).remove();
	})
	.on('click', '.item', function(){
		$(this).toggleClass('cross');
	})
	.on('keydown', '.list', function(e) {
		if (e.which == 16 && e.which == 13) {
			$('.item').remove();
		}
	});
});
