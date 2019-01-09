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

// use body parser to get req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// override when POST has ?_method=DELETE or ?_method=PUT
app.use(express.static('public'));
app.use(methodOverride('_method'));

// start up handlebars engine
app.engine('.hbs', exprHBS({
	extname: '.hbs',
	defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// mount home route
app.get('/', (req, res) => {
	res.render('home.hbs');
});

// require internal files
const sources = require('./controllers/sources.js');
const spells = require('./controllers/spells.js');

// mount all other routes
app.use('/sources', sources);
app.use('/spells', spells);

const port = 3000;
app.listen(port, () => {
	console.log(`D&D Spell API listening on port http://localhost:${port}/`)
})

// Mongoose Connection
const url = process.env.MONGODB_URI;
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