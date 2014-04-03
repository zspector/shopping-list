$(document).ready(function() {
	$('.enter').keydown(function(e){
		var toAdd = $('input[name=enter]').val();
		if (e.keyCode == 13) {
			$('.list').append('<div class="item"><span>' +toAdd+ '</span></div>');
			$(this).val('');
		}
	});
	$(document).on('dblclick', '.item', function() {
		$(this).remove();
	})
	.on('click', '.item', function(){
		$(this).toggleClass('cross');
	});
	var map = {16: false, 13: false};
	$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[16] && map[13]) {
            $('.item').remove();
        }
    }
	})
	.keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});
});
