const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const SourceSchema = new Schema({
	'name': {
		type: String,
		required: true,
		unique: true
	},
	'slug': {
		type: String,
		required: true,
		unique: true
	},
	'abbreviation': {
		type: String,
		required: true,
		unique: true
	},
	'color': String,
	'official': Boolean,
	// // TODO: array of objects not saving...
	// // This seems to be the correct way of modeling this.
	// // See https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/
	// // It should help! But still can't figure it out!
	// 'predecessor': {
	// 	'source': [{
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'Source'
	// 	}]
	// }

	'carbon-copy.source': [{ // carbon copies are made to be modified
		type: Schema.Types.ObjectId,
		ref: 'Source'
	}]
});

module.exports = mongoose.model('Source', SourceSchema);
