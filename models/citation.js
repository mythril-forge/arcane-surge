const mongoose = require('mongoose');

// set schema
const Schema = mongoose.Schema;

// create schema
const CitationSchema = new Schema({
	'page': {
		type: Number,
		required: true,
		unique: true
	},
	'source': {
		type: Schema.Types.ObjectId,
		ref: 'Source'
	}
});

// export schema
module.exports = mongoose.model('Citation', CitationSchema);
