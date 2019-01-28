const express = require('express');
const Spell = require('../models/spell.js');
const Source = require('../models/source.js');

// new express router
const router = new express.Router();

// set up routes
router.get('/', (req, res) => { });

// export routes
module.exports = router;
