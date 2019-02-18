const mongoose = require('mongoose');

// set schema
const Schema = mongoose.Schema;

// create schema
const SpellSchema = new Schema({
	// Basic Info //
	'name': String,
	'level': Number,
	'school': String,

	// Casting Time //
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
	// Needs a more organized model! //
	'tagged': {
		'concentration': Boolean,
		'ritualization': Boolean,
		'verbal': Boolean,
		'somatic': Boolean,
		'material': Boolean
	},
	'component': {
		'verbal': [{
			'entry': String,
		}],
		'somatic': [{
			'entry': String,
		}],
		'material': [{
			'entry': String,
			'price': Number,
			'quantity': Number,
			'consumed': Boolean
		}]
	},

	// Main Description //
	'description': String,

	// Racial & Class Compatibility //
	'compatible': {
		'class': [{
			type: Schema.Types.ObjectId,
			ref: 'Class'
		}],
		'race': [{
			type: Schema.Types.ObjectId,
			ref: 'Race'
		}],
		'subclass': [{
			type: Schema.Types.ObjectId,
			ref: 'Subclass'
		}],
		'subrace': [{
			type: Schema.Types.ObjectId,
			ref: 'Subrace'
		}]
	},

	// Books & References //
	'citation': [{
		'page': Number,
		'source': {
			type: Schema.Types.ObjectId,
			ref: 'Source'
		}
	}],

	// Home-Modified Spells //
	'original': {
		'spell': [{
			type: Schema.Types.ObjectId,
			ref: 'Spell'
		}]
	}
});

// export schema
module.exports = mongoose.model('Spell', SpellSchema);
