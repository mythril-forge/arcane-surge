const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const RaceSchema = new Schema({
	'name': {
		type: String,
		required: true,
	},
	'slug': {
		type: String,
		required: true,
	}
})

module.exports = mongoose.model('Race', RaceSchema);
