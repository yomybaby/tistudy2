//var info = Alloy.Collections.info;

// assign a ListItem template based on the contents of the model

var post = Alloy.Collections.instance('post');
function doTransform(model) {
	var o = model.toJSON();
	if (o.image) {
		o.template = 'leftTpl';
	} else {
		o.template = 'rightTpl';
	}
	return o;
}
post.fetch();


$.listView.addEventListener('itemclick', function(e) {
	alert(e);
});
