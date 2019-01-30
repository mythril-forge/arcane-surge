const express = require('express');
const Spell = require('../models/spell.js');
const Source = require('../models/source.js');

// new express router
const router = new express.Router();

// set up routes
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

router.post('/', (req, res) => { // CREATE //
	const NewSpell = new Spell(req.body);
	NewSpell
		.save()
		.then(() => {
			res.redirect('/spells');
		})
		.catch((err) => {
			console.error(err);
		});
});

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

router.get('/:spellID', (req, res) => { // SHOW //
	Spell
		.findById(req.params.spellID)
		// .populate('') ← ← ← populate some other resource
		.then((ChosenSpell) => {
			res
				.render('spell-show.hbs', { ChosenSpell });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:spellID/json', (req, res) => { // SHOW-JSON //
	Spell
		.findById(req.params.spellID)
		// .populate('') ← ← ← populate some other resource
		.then((ChosenSpell) => {
			res
				.json(ChosenSpell)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

// export routes
module.exports = router;
