function doTrans(model){
	return {
		title : model.get('title'),
		template : model.get('image')?'rightTpl':'leftTpl',
		id: model.id
	};
}

$.listView.addEventListener('itemclick', function(e) {
	if(e.itemId){
		var myModel = myPostCol.get(e.itemId);
		//alert(model.toJSON());
		
		var postDC = Alloy.createController('postDetail',{
			"model" : myModel
		});
		Alloy.Globals.mainTG.activeTab.open(postDC.getView());
		
	}
});

$.writeBtn.addEventListener('click', function(e) {
	var newM = myPostCol.create();
	var postDC = Alloy.createController('postDetail',{
		"model" : newM
	});
	Alloy.Globals.mainTG.activeTab.open(postDC.getView());
});


myPostCol.fetch();
