const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const ImportSchema = new Schema({
	'name': String
})

module.exports = mongoose.model('Import', ImportSchema);
