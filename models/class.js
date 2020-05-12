const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const ClassSchema = new Schema({
	'name': {
		type: String,
		required: true,
	},
	'slug': {
		type: String,
		required: true,
	}
})

module.exports = mongoose.model('Class', ClassSchema);
