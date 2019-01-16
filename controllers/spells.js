const express = require('express');
const Spell = require('../models/spell.js');
const Source = require('../models/source.js')

const router = new express.Router();
router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all spells
	Spell
		.find({})
		.then((spell) => {
			res // here's where INDEX differs
				.render('spell-index', { spell });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all spells and returns json
	Spell
		.find({})
		.then((spell) => {
			res // here's where INDEX JSON differs
				.json(spell)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/new', (req, res) => { // DONE: NEW //
	// shows a spell creation form
	Spell
		.find({})
		.then((spell) => {
			Source
				.find({})
				.then((source) => {
					res
						.render('spell-new.hbs', { source, spell });
				})
		})
		.catch((err) => {
			console.error(err);
		});
});

router.post('/', (req, res) => { // DONE: CREATE //
	// creates a new spell
	const body = req.body;
	const spell = new Spell(req.body);
	spell
		.save()
		.then(() => {
			// res.json({ BEFORE: body, AFTER: spell });
			res.redirect('/spells');
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:spellID', (req, res) => { // DONE: SHOW //
	// shows a single spell in detail
	Spell
		.findById(req.params.spellID)
		.populate('predecessor.spells')
		.then((spell) => {
			res // here's where SHOW differs
				.render('spell-show.hbs', { spell });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:spellID/json', (req, res) => { // DONE: SHOW JSON //
	// shows a single spell in detail w/ json
	Spell
		.findById(req.params.spellID)
		.populate('predecessor.spells')
		.then((spell) => {
			res  // here's where SHOW JSON differs
				.json(spell)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:spellID/edit', (req, res) => { // DONE: EDIT //
	// shows a spell edit form
	Source
		.find({})
		.then((source) => {
			Spell
				.find({})
				.then((library) => {
					Spell
						.findById(req.params.spellID)
						.then((spell) => {
							res.render('spell-edit', { source, spell, library });
						})
						.catch((err) => {
							console.error(err);
						});
				});
		});
});

router.put('/:spellID', (req, res) => { // DONE: UPDATE //
	Spell
		.findByIdAndUpdate(req.params.spellID, req.body)
		.then((spell) => {
			res.redirect(`/spells/${spell._id}`);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.delete('/:spellID', (req, res) => { // DONE: DELETE //
	Spell
		.findByIdAndRemove(req.params.spellID)
		.then(() => {
			res.redirect('/spells');
		})
		.catch((err) => {
			console.error(err);
		});
});

module.exports = router;
