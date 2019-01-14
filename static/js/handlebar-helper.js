console.log('obtained')
// If Equals
Handlebars.registerHelper('ifeq', (a, b, options) => {
	if (a == b) { return options.fn(this); }
	return options.inverse(this);
});

Handlebars.registerHelper('!ifeq', (a, b, options) => {
	if (a != b) { return options.fn(this); }
	return options.inverse(this);
});

