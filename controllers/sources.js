const express = require('express');
const Spell = require('../models/spell.js');
const Source = require('../models/source.js');

// new express router
const router = new express.Router();

// set up routes
router.get('/', (req, res) => { // INDEX //
	Source
		.find({})
		.then((EverySource) => {
			res
				.render('source-index.hbs', { EverySource });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/json', (req, res) => { // INDEX-JSON //
	Source
		.find({})
		.then((EverySource) => {
			res
				.json(EverySource)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/new', (req, res) => { // NEW //
	Source
		.find({})
		.then((EverySource) => {
			res
				.render('source-new.hbs', { EverySource });
		})
		.catch((err) => {
			console.error(err);
		});
});

// export routes
module.exports = router;
