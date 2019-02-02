const mongoose = require('mongoose');

// set schema
const Schema = mongoose.Schema;

// create schema
const SpellSchema = new Schema({
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
	'description': {
		'prime': String,
		'bonus': String
	},

	'citations': [{
		'page': Number,
		'source': {
			type: Schema.Types.ObjectId,
			ref: 'Source'
		}
	}],

	'original': {
		'spells': [{
			type: Schema.Types.ObjectId,
			ref: 'Spell'
		}]
	}
});

// export schema
module.exports = mongoose.model('Spell', SpellSchema);
