const updateSlug = () => {
	const name = document.getElementById('name');
	const slug = document.getElementById('slug');
	const output = name.value
		.toString()                     // Just in case
		.toLowerCase()                  // Ban the caps
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '');            // Trim - from end of text
	slug.value = output
}
