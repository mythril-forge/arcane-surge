const express = require('express');
const Source = require('../models/source.js');

const router = new express.Router();

router.get('/', (req, res) => { // DONE: INDEX //
	Source
		.find({})
		.then((source) => {
			res // here's where INDEX differs
				.render('source-index.hbs', { source });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/json', (req, res) => { // DONE: INDEX JSON //
	// indexes all sources and returns json
	Source
		.find({})
		.then((source) => {
			res // here's where INDEX JSON differs
				.json(source)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/new', (req, res) => { // DONE: NEW //
	// shows a source creation form
	Source
		.find({})
		.then((source) => {
			res // here's where INDEX differs
				.render('source-new.hbs', { source });
		});
});

router.post('/', (req, res) => { // DONE: CREATE //
	// must clean the req.body before sending data
	const cleanBody = req.body;
	cleanBody.references = [];
	for (const key in cleanBody) {
		if (cleanBody[key] === '$reference-on') {
			// console.log("\n\nkey:")
			// console.log(key)
			// console.log("\n\nvalue:")
			// console.log(cleanBody[key])
			cleanBody.references.push(key);
		}
	}
	// creates a new source
	const source = new Source(cleanBody);
	source
		.save()
		.then(() => {
			res.redirect('/');
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:sourceID', (req, res) => { // DONE: SHOW //
	// shows a single source in detail
	Source
		.findById(req.params.sourceID)
		.populate('references')
		.then((source) => {
			res // here's where SHOW differs
				.render('source-show.hbs', { source });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:sourceID/json', (req, res) => { // DONE: SHOW JSON //
	// shows a single source in detail w/ json
	Source
		.findById(req.params.sourceID)
		.populate('references')
		.then((source) => {
			res  // here's where SHOW JSON differs
				.json(source)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:sourceID/edit', (req, res) => { // TODO: EDIT //
	// // shows a source edit form
	// Source
	// 	.findById(req.params.sourceID)
	// 	.then((source) => {
	// 		res.render('source-edit', { source });
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.put('/:sourceID', (req, res) => { // TODO: UPDATE //
	// Source.findByIdAndUpdate(req.params.sourceID, req.body)
	// 	.then((source) => {
	// 		res.redirect(`/source/${source._id}`);
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.delete('/:sourceID', (req, res) => { // TODO: DELETE //
	// Source
	// 	.findByIdAndRemove(req.params.sourceID)
	// 	.then(() => {
	// 		res.redirect('/source');
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

module.exports = router;
