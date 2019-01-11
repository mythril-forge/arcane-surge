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
	const shape = document.getElementById('shape');
	const area = document.getElementById('area');
	const radius = document.getElementById('area-radius');
	const length = document.getElementById('area-length');
	const width = document.getElementById('area-width');
	const height = document.getElementById('area-height');
	if (shape.value === 'point') {
		disable([area, length, radius, width, height])

	} else if (shape.value === 'sphere') {
		enable([area, radius])
		disable([length, width, height])

	} else if (shape.value === 'aura') {
		enable([area, radius])
		disable([length, width, height])

	} else if (shape.value === 'cone') {
		enable([area, radius])
		disable([length, width, height])

	} else if (shape.value === 'line') {
		enable([area, length, width])
		disable([radius, height])

	} else if (shape.value === 'wall') {
		enable([area, radius, length, width, height])

	} else if (shape.value === 'cube') {
		enable([area, length])
		disable([radius, width, height])

	} else if (shape.value === 'cylinder') {
		enable([area, radius, height])
		disable([length, width])

	} else {
		disable([area, length, radius, width, height])
	}
}

const disableComponents = () => {
	const verbals = document.getElementById('components-verbals');
	const somatics = document.getElementById('components-somatics');
	const materials = document.getElementById('components-materials');
	const verBox = document.getElementById('tags-verbal')
	const somBox = document.getElementById('tags-somatic')
	const matBox = document.getElementById('tags-material')
	if (verBox.checked) {
		enable([verbals])
	} else {
		disable([verbals])
	}
	if (somBox.checked) {
		enable([somatics])
	} else {
		disable([somatics])
	}
	if (matBox.checked) {
		enable([materials])
	} else {
		disable([materials])
	}
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

// const sourceArray = []
// const addSourceArray = () => {
// 	const sourceBook = document.getElementById('source');
// 	const sourcePage = document.getElementById('page');
// 	sourceArray.push({
// 		source: sourceBook.value,
// 		page: sourcePage.value
// 	})
// 	const hiddenItem = document.getElementById('parent-src');
// 	hiddenItem.value = JSON.stringify(sourceArray)
// }

// JSON.parse(JSON.stringify(sourceArray)