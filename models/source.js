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
	// 'reference': {
	// 	'source': [{
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'Source'
	// 	}]
	// }

	// FOR NOW, I AM NOT NESTING RESOURCES.
	// ALSO, I AM NOT TRACKING PAGES.
	'reference.source': [{
		type: Schema.Types.ObjectId,
		ref: 'Source'
	}]
});

module.exports = mongoose.model('Source', SourceSchema);
