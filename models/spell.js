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
	'num-targets': Number,
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
		'verbals': String,
		'somatics': String,
		'materials': String
	},

	// Descriptions //
	'description': {
		'main': String,
		'higher': String
	},

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
