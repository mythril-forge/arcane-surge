const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const SpellSchema = new Schema({
	// Spell Heading Data //
	'name': {
		type: String,
		required: true,
	},
	'slug': {
		type: String,
		required: true,
	},
	'level': Number,
	'school': String,

	// Casting Time  //
	'cast-time': {
		'quality': String,
		'seconds': Number,
		'trigger': String
	},
	'duration': {
		'quality': String,
		'seconds': Number,
		'trigger': String
	},

	// Spell Area //
	'instances': Number,
	'range': {
		'quality': String,
		'feet': Number
	},
	'area': {
		'shape': String,
		'radius': Number,
		'length': Number,
		'width': Number,
		'height': Number
	},

	// Tags + Components //
	'tags': [String],
	'component': {
		'verbal': String,
		'somatic': String,
		'material': String
	},

	// Descriptions //
	'description': {
		'main': String,
		'higher': String
	},

	// Compatibility //
	'class': [String],
	'subclass': [String],
	'race': [String],
	'subrace': [String],

	// // TODO: array of objects not saving...
	// // This seems to be the correct way of modeling this.
	// // See https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/
	// // It should help! But still can't figure it out!
	// 'parent': [{ // parent source for index library
	// 	'page': Number,
	// 	'source': {
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'Source'
	// 	}
	// }],

	// FOR NOW, I AM NOT NESTING RESOURCES.
	// ALSO, I AM NOT TRACKING PAGES.
	'parent.page': [Number],
	'parent.source': [{
		type: Schema.Types.ObjectId,
		ref: 'Source'
	}],

	// 'parent': [{
	// 	'page': Number,
	// 	'book': {
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'Source'
	// 	}
	// }],

	'reference.spell': [{ // reference for spell diffs
		type: Schema.Types.ObjectId,
		ref: 'Spell'
	}]
})

// CLEANING OUTPUT:
// 	These values, along with their keys, should be deleted from the mongoose model.
//
// - null
// - undefined
// - ""
// - []
// - ["","",null,undefined...]
// - {2nd-key: {3rd-key: null}}
// - {2nd - key: null}
//
// 	This will reduce trash data in the models.
// TODO: This pre hook doesn't yet handle arrays.
// It deletes arrays of strings and doesnt delete arrays of empty objects
// I would like it to do these things!!

// SpellSchema.pre('save', function (next) {
// 	if (this.isNew) {
// 		this.schema
// 			.eachPath((path) => {

// 				const isEmptyItem = (item) => {
// 					const output =
// 						item === undefined ||
// 						item === null ||
// 						item === '' ||
// 						// this last boolean checks if the item is an empty array []
// 						(typeof this[path] !== 'undefined' && Object.getPrototypeOf(Object(this[path])) === Object.getPrototypeOf([]))
// 					return output
// 				}

// 				if (isEmptyItem(this[path])) {
// 					this[path] = undefined
// 				}
// 			})
// 	}
// 	next();
// });

module.exports = mongoose.model('Spell', SpellSchema);
