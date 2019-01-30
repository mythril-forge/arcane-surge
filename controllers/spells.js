const express = require('express');
const Spell = require('../models/spell.js');
const Source = require('../models/source.js');

// new express router
const router = new express.Router();

// set up routes
router.get('/', (req, res) => { // INDEX //
	Spell
		.find({})
		.then((EverySpell) => {
			res
				.render('spell-index.hbs', { EverySpell });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/json', (req, res) => { // INDEX-JSON //
	Spell
		.find({})
		.then((EverySpell) => {
			res
				.json(EverySpell)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/new', (req, res) => { // NEW //
	Spell
		.find({})
		.then((EverySpell) => {
			Source
				.find({})
				.then((EverySource) => {
					res
						.render('spell-new.hbs', { EverySource, EverySpell });
				});
		})
		.catch((err) => {
			console.error(err);
		});
});

// export routes
module.exports = router;
