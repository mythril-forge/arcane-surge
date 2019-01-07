const mongoose = require('mongoose');
//	const util = require('util'); // still don't understand what util does yet...
const express = require('express');
const exprHBS = require('express-handlebars');
const bodyParser = require('body-parser');
//	const cors = require('cors'); // still don't understand what cors does yet...
const methodOverride = require('method-override');

// DEFINE APPLICATION, VITAL FOR MIDDLEWARE
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

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(
	mongoUri,
	{ useNewUrlParser: true },
	{ server: { socketOptions: { keepAlive: 1 } } }
);

mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${mongoUri}`);
});

// print mongoose logs in dev env
if (config.mongooseDebug) {
	mongoose.set('debug', (collectionName, method, query, doc) => {
		debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
	});
}

module.exports = app