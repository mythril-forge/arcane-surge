const express = require('express');
const Race = require('../models/race.js');

const router = new express.Router();
router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all spells
	Race
		.find({})
		.then((EveryRace) => {
			res // here's where INDEX differs
				.render('race-index.hbs', { EveryRace });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all spells and returns json
	Race
		.find({})
		.then((EveryRace) => {
			res // here's where INDEX JSON differs
				.json(EveryRace)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/new', (req, res) => { // DONE: NEW //
	res.render('race-new.hbs');
});

router.post('/', (req, res) => { // DONE: CREATE //
	const NewRace = new Race(req.body);
	NewRace
		.save()
		.then(() => {
			res.redirect('/races/');
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:raceID', (req, res) => { // DONE: SHOW //
	// shows a single race in detail
	Race
		.findById(req.params.raceID)
		.then((MyRace) => {
			res // here's where SHOW differs
				.render('race-show.hbs', { MyRace });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:raceID/json', (req, res) => { // DONE: SHOW JSON //
	// shows a single race in detail w/ json
	Race
		.findById(req.params.raceID)
		.then((MyRace) => {
			res  // here's where SHOW JSON differs
				.json(MyRace)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:raceID/edit', (req, res) => { // DONE: EDIT //
	// shows a race edit form
	Race
		.findById(req.params.raceID)
		.then((MyRace) => {
			res.render('race-edit', { MyRace });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.put('/:raceID', (req, res) => { // DONE: UPDATE //
	Race.findByIdAndUpdate(req.params.raceID, req.body)
		.then((MyRace) => {
			res.redirect(`/races/${MyRace._id}`);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.delete('/:raceID', (req, res) => { // DONE: DELETE //
	Race
		.findByIdAndRemove(req.params.raceID)
		.then(() => {
			res.redirect('/races');
		})
		.catch((err) => {
			console.error(err);
		});
});


module.exports = router;
