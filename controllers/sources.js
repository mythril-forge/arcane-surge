const express = require('express');
const Source = require('../models/source.js');


// new express router
const router = new express.Router();

// set up routes
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

router.get('/:sourceID/edit', (req, res) => { // EDIT //
	Source
		.findById(req.params.sourceID)
		.then((ChosenSource) => {
			Source
				.find({})
				.then((EverySource) => {
					res
						.render('source-edit.hbs', { ChosenSource, EverySource });
				});
		})
		.catch((err) => {
			console.error(err);
		});
});

router.post('/', (req, res) => { // CREATE //
	const NewSource = new Source(req.body);
	NewSource
		.save()
		.then(() => {
			res.redirect('/sources');
		})
		.catch((err) => {
			console.error(err);
		});
});

router.put('/:sourceID', (req, res) => { // UPDATE //
	Source
		.findByIdAndUpdate(req.params.sourceID, req.body)
		.then((ChosenSource) => {
			res.redirect(`/sources/${ChosenSource._id}`);
		})
		.catch((err) => {
			console.error(err);
		});
});

router.delete('/:sourceID', (req, res) => { // DELETE //
	Source
		.findByIdAndRemove(req.params.sourceID)
		.then(() => {
			res.redirect('/sources');
		})
		.catch((err) => {
			console.error(err);
		});
});

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

router.get('/:sourceID', (req, res) => { // SHOW //
	Source
		.findById(req.params.sourceID)
		// .populate('') ← ← ← populate some other resource
		.then((ChosenSource) => {
			res
				.render('source-show.hbs', { ChosenSource });
		})
		.catch((err) => {
			console.error(err);
		});
});

router.get('/:sourceID/json', (req, res) => { // SHOW-JSON //
	Source
		.findById(req.params.sourceID)
		// .populate('') ← ← ← populate some other resource
		.then((ChosenSource) => {
			res
				.json(ChosenSource)
				.status(200);
		})
		.catch((err) => {
			console.error(err);
		});
});

// export routes
module.exports = router;
