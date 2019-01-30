const mongoose = require('mongoose');

// set schema
const Schema = mongoose.Schema;

// create schema
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
	'official': Boolean
});

// export schema
module.exports = mongoose.model('Source', SourceSchema);
