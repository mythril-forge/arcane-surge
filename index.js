// require middleware packages
const mongoose = require('mongoose');
//	const util = require('util'); // still don't understand what util does yet...
const express = require('express');
const exprHBS = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path')
//	const cors = require('cors'); // still don't understand what cors does yet...
const methodOverride = require('method-override');

// define app, vital for using middleware!!
const app = express();

// start up handlebars engine

const hbs = exprHBS.create({
	// Specify helpers which are only registered on this instance.
	helpers: {
		ifeq: (a, b, options) => {
			if (a == b) { return options.fn(this); }
			return options.inverse(this);
		},
		ifneq: (a, b, options) => {
			if (a != b) { return options.fn(this); }
			return options.inverse(this);
		},
	},
	extname: 'hbs',
	defaultLayout: 'main'
})

// hbs.engine

app.engine('.hbs',
	hbs.engine
);

app.set('view engine', 'hbs');

// use body parser to get req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use static folder structure
app.use(express.static(path.join(__dirname, 'static')));

// override when POST has ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'));

// mount home route
app.get('/', (req, res) => {
	res.render('home.hbs');
});

// require internal files
const sources = require('./controllers/sources.js');
const spells = require('./controllers/spells.js');
const classes = require('./controllers/classes.js');
const imports = require('./controllers/imports.js');
// mount all other routes
app.use('/sources', sources);
app.use('/spells', spells);
app.use('/classes', classes);
app.use('/imports', imports);

// process.env.PORT & MONGODB_URI lets the port and database be set by Heroku
// if they don't exist, set them for local dev purposes
const port = process.env.PORT || 8080;
const url = process.env.MONGODB_URI || "mongodb://localhost/arcane-surge";

app.listen(port, () => {
	console.log(`D&D Spell API listening on port http://localhost:${port}/`)
})

mongoose.Promise = global.Promise;
mongoose.connect(
	url,
	{ useNewUrlParser: true },
	(err, db) => {
		console.log('Connected successfully to database');
	}
);

mongoose.set('useCreateIndex', true) // removes deprication warning
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));

module.exports = app