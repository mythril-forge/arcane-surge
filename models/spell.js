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

	// Casting Time + Spell Area //
	'cast-time': String,
	'cast-trigger': String,
	'duration': String,
	'dur-trigger': String,
	'num-targets': String,
	'range': String,
	'area': {
		'shape': String,
		'radius': String,
		'length': String,
		'width': String,
		'height': String
	},

	// Tags + Components //
	'tags': [String],
	'components': {
		'verbal': String,
		'somatic': String,
		'material': String
	},

	// Description //
	'description': String,
	'desc-higher': String,
	// Compatibility //
	'classes': [String],
	'subclasses': [String],
	'races': [String],
	'subraces': [String],
	'parent-src': [{ // parent source for index library
		'source': {
			type: Schema.Types.ObjectId,
			ref: 'Source'
		},
		'page': String
	}],
	'sibling-ref': { // sibling reference for spell diffs
		type: Schema.Types.ObjectId,
		ref: 'Spell'
	}
});

module.exports = mongoose.model('Spell', SpellSchema);
