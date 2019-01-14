const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
	// Spell Heading Data //
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

	// TODO: array of objects not saving...
	// This seems to be the correct way of modeling this.
	// See https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/
	// It should help! But still can't figure it out!
	'parent': { // parent source for index library
		'page': [Number],
		'source': [{
			type: Schema.Types.ObjectId,
			ref: 'Source'
		}]
	},
	// Above TODO is also relevent here...
	'reference': { // reference for spell diffs
		'spell': [{
			type: Schema.Types.ObjectId,
			ref: 'Spell'
		}]
	}
});

module.exports = mongoose.model('Spell', SpellSchema);
