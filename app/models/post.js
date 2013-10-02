exports.definition = {
	config: {
		columns: {
			id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
			title: 'TEXT',
			subtitle: 'TEXT',
			image: 'TEXT'
		},
		adapter: {
			type: 'sql',
			collection_name: 'post',
			idAttribute: 'id'
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			comparator : function(modelA, modelB) {
				if (!modelA.id || modelA.id > modelB.id) return -1; // before
				if (!modelB.id || modelB.id > modelA.id) return 1; // after
				return 0; // equal
			}
		});

		return Collection;
	}
};