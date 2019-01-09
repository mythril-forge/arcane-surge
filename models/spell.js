const mongoose = require('mongoose');

// Set Schema
const Schema = mongoose.Schema;
const SpellSchema = new Schema({
	////////////////////////
	// Spell Heading Data //
	////////////////////////
	source: { // parent source for index
		type: Schema.Types.ObjectId,
		ref: 'Source'
	},
	reference: { // reference for diffs
		type: Schema.Types.ObjectId,
		ref: 'Spell'
	},
	name: {
		type: String,
		required: true,
		unique: true
	},
	school: {
		// Only one of the eight schools are permitted:
		// - abjuration
		// - conjuration
		// - divination
		// - enchantment
		// - evocation
		// - illusion
		// - necromancy
		// - transmutation
		type: String,
		required: true,
	},
	level: {
		// only single-digit numbers including 0-9 are permitted.
		// 0 value is considered a cantrip.
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Spell', SpellSchema);
