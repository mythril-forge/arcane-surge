const express = require('express');
const Import = require('../models/import.js');

const router = new express.Router();
router.get('/new', (req, res) => { // DONE: NEW //
	// shows a source creation form

	res // here's where INDEX differs
		.render('import-new.hbs');
});

router.post('/', (req, res) => { // TODO: CREATE //

	const source = new Source(req.body);
	source
		.save()
		.then(() => {
			res.redirect('/sources/');
		})
		.catch((err) => {
			console.error(err);
		});
});


module.exports = router;
