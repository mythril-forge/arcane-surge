const express = require('express');
const Source = require('../models/source.js');

const router = new express.Router();

router.get('/', (req, res) => { // DONE: INDEX //
	// indexes all sources
	res.render(req.body)
	// Source
	// 	.find({})
	// 	.then((sources) => {
	// 		res // here's where INDEX differs
	// 			.render('source-index', { sources });
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.get('/json', (req, res) => { // TODO: INDEX JSON //
	// // indexes all sources and returns json
	// Source
	// 	.find({})
	// 	.then((sources) => {
	// 		res // here's where INDEX JSON differs
	// 			.json({
	// 				message: 'Get all sources',
	// 				sources
	// 			})
	// 			.status(200);
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.get('/new', (req, res) => { // DONE: NEW //
	// shows a source creation form
	res.render('source-new.hbs');
});

router.post('/', (req, res) => { // TODO: CREATE //
	// creates a new source

	const source = new Source(req.body);
	res.json(source)
	// source
	// 	.save()
	// 	.then(() => {
	// 		res.redirect('/');
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.get('/:sourceID', (req, res) => { // TODO: SHOW //
	// // shows a single source in detail
	// Source
	// 	.findById(req.params.sourceID)
	// 	.populate('fusions')
	// 	.then((sources) => {
	// 		res // here's where SHOW differs
	// 			.render('source-show.hbs', { sources });
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
});

router.get('/:sourceID/json', (req, res) => { // TODO: SHOW JSON //
	// // shows a single source in detail
	// Source
	// 	.findById(req.params.sourceID)
	// 	// .populate('fusions')
	// 	.then((sources) => {
	// 		res  // here's where SHOW JSON differs
	// 			.json({
	// 				message: 'Show this fusion with the sources who create it',
	// 				sources
	// 			})
	// 			.status(200);
	// 	})
	// 	.catch((err) => {
	// 		console.error(err);
	// 	});
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
