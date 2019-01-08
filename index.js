// require middleware packages
const mongoose = require('mongoose');
//	const util = require('util'); // still don't understand what util does yet...
const express = require('express');
const exprHBS = require('express-handlebars');
const bodyParser = require('body-parser');
//	const cors = require('cors'); // still don't understand what cors does yet...
const methodOverride = require('method-override');

// define app, vital for using middleware!!
const app = express();

// Use body parser to get req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Override when POST has ?_method=DELETE or ?_method=PUT
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Set up handlebars
app.engine('.hbs', exprHBS({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// Start up home route
app.get('/', (req, res) => {
	res.render('home.hbs');
});

// // Mount all other routes
// app.use('/auth', auth);

const port = 3000;
app.listen(port, () => {
	console.log(`D&D Spell API listening on port http://localhost:${port}/`)
})

module.exports = app