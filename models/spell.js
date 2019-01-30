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
		type: Schema.Types.ObjectId,
		ref: 'Citation'
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
