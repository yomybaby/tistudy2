var model = arguments[0].model;

$.ta.value = model.get('title');

$.ta.addEventListener('change', function(e) {
	model.save({
		'title': $.ta.value
	});
});