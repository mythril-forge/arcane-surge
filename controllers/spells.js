const express = require('express');
const Spell = require('../models/spell.js');

const router = new express.Router();
router.get('/', (req, res) => { // TODO: INDEX //
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

router.get('/json', (req, res) => { // TODO: INDEX JSON //
	// // indexes all spells and returns json
	// Spell
	// 	.find({})
	// 	.then((spells) => {
	// 		res // here's where INDEX JSON differs
	// 			.json({
	// 				message: 'Get all spells',
	// 				spells
	// 			})
	// 			.status(200);
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.get('/new', (req, res) => { // DONE: NEW //
	// shows a spell creation form
	res.render('spell-new.hbs');
});

router.post('/', (req, res) => { // TODO: CREATE //
	// creates a new spell
	const spell = new Spell(req.body);
	// res.json(req.body);
	spell
		.save()
		.then(() => {
			res.redirect('/spells');
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:spellID', (req, res) => { // TODO: SHOW //
	// // shows a single spell in detail
	// Spell
	// 	.findById(req.params.spellID)
	// 	.populate('fusions')
	// 	.then((spells) => {
	// 		res // here's where SHOW differs
	// 			.render('spell-show.hbs', { spells });
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.get('/:spellID/json', (req, res) => { // TODO: SHOW JSON //
	// // shows a single spell in detail
	// Spell
	// 	.findById(req.params.spellID)
	// 	// .populate('fusions')
	// 	.then((spells) => {
	// 		res  // here's where SHOW JSON differs
	// 			.json({
	// 				message: 'Show this fusion with the spells who create it',
	// 				spells
	// 			})
	// 			.status(200);
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.get('/:spellID/edit', (req, res) => { // TODO: EDIT //
	// // shows a spell edit form
	// Spell
	// 	.findById(req.params.spellID)
	// 	.then((spell) => {
	// 		res.render('spell-edit', { spell });
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.put('/:spellID', (req, res) => { // TODO: UPDATE //
	// Spell.findByIdAndUpdate(req.params.spellID, req.body)
	// 	.then((spell) => {
	// 		res.redirect(`/spell/${spell._id}`);
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.delete('/:spellID', (req, res) => { // TODO: DELETE //
	// Spell
	// 	.findByIdAndRemove(req.params.spellID)
	// 	.then(() => {
	// 		res.redirect('/spell');
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

module.exports = router;
