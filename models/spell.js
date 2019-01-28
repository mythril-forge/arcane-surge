const mongoose = require('mongoose');

// set schema
const Schema = mongoose.Schema;

// create schema
const SpellSchema = new Schema({});

// export schema
module.exports = mongoose.model('Spell', SpellSchema);
