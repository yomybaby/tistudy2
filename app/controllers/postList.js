function doTrans(model){
	return {
		title : model.get('title'),
		template : model.get('image')?'rightTpl':'leftTpl'
	};
}

myPostCol.fetch();
