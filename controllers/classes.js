const express = require('express');
const Class = require('../models/class.js');

const router = new express.Router();
router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all spells
	Class
		.find({})
		.then((EveryClass) => {
			res // here's where INDEX differs
				.render('class-index.hbs', { EveryClass });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all spells and returns json
	Class
		.find({})
		.then((EveryClass) => {
			res // here's where INDEX JSON differs
				.json(EveryClass)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/new', (req, res) => { // DONE: NEW //
	res.render('class-new.hbs');
});

router.post('/', (req, res) => { // DONE: CREATE //
	const NewClass = new Class(req.body);
	NewClass
		.save()
		.then(() => {
			res.redirect('/classes/');
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:classID', (req, res) => { // DONE: SHOW //
	// shows a single class in detail
	Class
		.findById(req.params.classID)
		.then((MyClass) => {
			res // here's where SHOW differs
				.render('class-show.hbs', { MyClass });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:classID/json', (req, res) => { // DONE: SHOW JSON //
	// shows a single class in detail w/ json
	Class
		.findById(req.params.classID)
		.then((MyClass) => {
			res  // here's where SHOW JSON differs
				.json(MyClass)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:classID/edit', (req, res) => { // DONE: EDIT //
	// shows a class edit form
	Class
		.findById(req.params.classID)
		.then((MyClass) => {
			res.render('class-edit', { MyClass });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.put('/:classID', (req, res) => { // DONE: UPDATE //
	Class.findByIdAndUpdate(req.params.classID, req.body)
		.then((MyClass) => {
			res.redirect(`/classes/${MyClass._id}`);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.delete('/:classID', (req, res) => { // DONE: DELETE //
	Class
		.findByIdAndRemove(req.params.classID)
		.then(() => {
			res.redirect('/classes');
		})
		.catch((err) => {
			console.error(err);
		});
});


module.exports = router;
