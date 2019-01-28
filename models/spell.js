const mongoose = require('mongoose');

// set schema
const Schema = mongoose.Schema;

// create schema
const SpellSchema = new Schema({
	'name': String
});

// export schema
module.exports = mongoose.model('Spell', SpellSchema);
