const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const SourceSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	abbreviation: {
		type: String,
		required: true,
		unique: true
	},
	official: {
		type: String,
		required: true,
		default: false,
	},
	references: [{
		type: Schema.Types.ObjectId,
		ref: 'Source'
	}],
});

module.exports = mongoose.model('Source', SourceSchema);