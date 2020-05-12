const express = require('express');
const Spell = require('../models/spell.js');
const Source = require('../models/source.js');
const Class = require('../models/class.js')
const Race = require('../models/race.js')

const router = new express.Router();
router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all spells
	Spell
		.find({})
		.then((EverySpell) => {
			res // here's where INDEX differs
				.render('spell-index', { EverySpell });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all spells and returns json
	Spell
		.find({})
		.then((EverySpell) => {
			res // here's where INDEX JSON differs
				.json(EverySpell)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/new', (req, res) => { // DONE: NEW //
	// shows a spell creation form
	// NEED TO PASS IN:
	// every-spell
	// every-source
	Spell
		.find({})
		.then((EverySpell) => {
			Source
				.find({})
				.then((EverySource) => {
					Class
						.find({})
						.then((EveryClass) => {
							Race
								.find({})
								.then((EveryRace) => {
									res
										.render('spell-new.hbs', {
											EverySource,
											EverySpell,
											EveryClass,
											EveryRace
										});
								})
						})
				})
		})
		.catch((err) => {
			console.error(err);
		});
});

router.post('/', (req, res) => { // DONE: CREATE //
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
		.then((MySpell) => {
			res // here's where SHOW differs
				.render('spell-show.hbs', { MySpell });
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
		.then((MySpell) => {
			res  // here's where SHOW JSON differs
				.json(MySpell)
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
		.then((EverySource) => {
			Spell
				.find({})
				.then((EverySpell) => {
					Spell
						.findById(req.params.spellID)
						.then((MySpell) => {
							res.render('spell-edit', { EverySource, EverySpell, MySpell });
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
		.then((MySpell) => {
			res.redirect(`/spells/${MySpell._id}`);
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
