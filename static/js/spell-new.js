const enable = (list) => {
	for (const item of list) {
		item.removeAttribute('disabled')
	}
}

const disable = (list) => {
	for (const item of list) {
		item.setAttribute('disabled', 'disabled')
	}
}

const disableCastTimeNum = () => {
	const radio = document.getElementById('cast-time-discrete');
	const child = document.getElementById('cast-time-seconds');
	if (radio.checked) {
		enable([child])
	} else {
		disable([child])
	}
}

const disableDurationNum = () => {
	const radio = document.getElementById('duration-discrete');
	const child = document.getElementById('duration-seconds');
	if (radio.checked) {
		enable([child])
	} else {
		disable([child])
	}
}

const disableRangeNum = () => {
	const radio = document.getElementById('range-discrete');
	const child = document.getElementById('range-feet');
	if (radio.checked) {
		enable([child])
	} else {
		disable([child])
	}
}

const disableAreaNums = () => {
	const shape = document.getElementById('area-shape');
	const radius = document.getElementById('area-radius');
	const length = document.getElementById('area-length');
	const width = document.getElementById('area-width');
	const height = document.getElementById('area-height');
	if (shape.value === 'sphere' || shape.value === 'aura' || shape.value === 'cone') {
		enable([radius])
		disable([length, width, height])

	} else if (shape.value === 'line') {
		enable([length, width])
		disable([radius, height])

	} else if (shape.value === 'wall') {
		enable([radius, length, width, height])

	} else if (shape.value === 'cube') {
		enable([length])
		disable([radius, width, height])

	} else if (shape.value === 'cylinder') {
		enable([radius, height])
		disable([length, width])

	} else { // (true || shape.value === 'point')
		disable([length, radius, width, height])
	}
}

const disableComponents = () => {
	const verbal = document.getElementById('component-verbal');
	const somatic = document.getElementById('component-somatic');
	const material = document.getElementById('component-material');
	const verBox = document.getElementById('tags-verbal')
	const somBox = document.getElementById('tags-somatic')
	const matBox = document.getElementById('tags-material')
	if (verBox.checked) {
		enable([verbal])
	} else {
		disable([verbal])
	}
	if (somBox.checked) {
		enable([somatic])
	} else {
		disable([somatic])
	}
	if (matBox.checked) {
		enable([material])
	} else {
		disable([material])
	}
}

const disableSourceCitations = () => {

}

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
