const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const SpellSchema = new Schema({
	////////////////////////
	// Spell Heading Data //
	////////////////////////
	'name': {
		// Only letters, numbers, spaces, hyphens, apostrophes, and slashes.
		type: String,
		required: true,
		unique: true
	},
	'slug': {
		// Copy of name, using only letters and hyphens.
		type: String,
		required: true,
		unique: true
	},
	'level': {
		// only single-digit numbers including 0-9 are permitted.
		// 0 value is considered a cantrip.
		type: Number,
	},
	'school': {
		// Only one of the 8 schools are permitted:
		// - abjuration
		// - conjuration
		// - divination
		// - enchantment
		// - evocation
		// - illusion
		// - necromancy
		// - transmutation
		type: String,
	},
	///////////////////////////////
	// Casting Time + Spell Area //
	///////////////////////////////
	'cast-time': {
		type: String,
	},
	'cast-trigger': {
		type: String
	},
	'duration': {
		type: String,
	},
	'dur-trigger': {
		type: String
	},
	'num-targets': {
		type: String
	},
	'range': {
		type: String
	},
	'area': {
		'shape': {
			type: String
		},
		'radius': {
			type: String
		},
		'length': {
			type: String
		},
		'width': {
			type: String
		},
		'height': {
			type: String
		}
	},
	///////////////////////
	// Tags + Components //
	///////////////////////
	'tags': [{
		type: String
	}],
	'components': {
		'verbal': {
			type: String
		},
		'somatic': {
			type: String
		},
		'material': {
			type: String
		}
	},
	/////////////////
	// Description //
	/////////////////
	'description': {
		type: String
	},
	'desc-higher': {
		type: String
	},
	///////////////////
	// Compatibility //
	///////////////////
	'classes': [{
		type: String
	}],
	'subclasses': [{
		type: String
	}],
	'races': [{
		type: String
	}],
	'subraces': [{
		type: String
	}],
	/////////////////////////
	// Class Compatibility //
	/////////////////////////
	'parent-src': { // parent source for index library
		'source': {
			type: Schema.Types.ObjectId,
			ref: 'Source'
		},
		'page': {
			type: String
		}
	},
	'sibling-ref': { // sibling reference for spell diffs
		type: Schema.Types.ObjectId,
		ref: 'Spell'
	}
});

module.exports = mongoose.model('Spell', SpellSchema);
