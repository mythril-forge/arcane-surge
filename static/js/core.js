const updateSlug = () => {
	const name = document.getElementById('name');
	const slug = document.getElementById('slug');
	const output = name.value
		.toString()                // Just in case…
		.toLowerCase()             // Ban the caps!
		.replace(/\s+/g, '-')      // Replace " " with "-"
		.replace(/[^\w\-]+/g, '')  // Remove all non-word chars
		.replace(/\-\-+/g, '-')    // Replace multiple "---" with single "-"
		.replace(/^-+/, '')        // Trim "-" from start of text
		.replace(/-+$/, '');       // Trim "-" from end of text
	slug.value = output
}

const updateFormTab = () => {
	const formTabs = document.getElementsByName('form-tab');
	const sections = document.getElementsByTagName('section');
	for (const eachTab of formTabs) {
		if (eachTab.checked === true) {
			for (const eachSec of sections) {
				if (eachTab.value === eachSec.id) {
					console.log(eachSec);
					eachSec.removeAttribute('hidden');
				} else {
					eachSec.setAttribute('hidden', '');
				}
			}
		}
	}
}
