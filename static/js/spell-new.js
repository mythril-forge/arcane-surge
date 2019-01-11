const disableCastTimeNum = () => {
	const radioBtn = document.getElementById("cast-time-discrete");
	const children = document.getElementById("cast-time-seconds");
	if (radioBtn.checked) {
		children.removeAttribute("disabled");
	} else {
		children.setAttribute("disabled", "disabled");
	}
}

const disableDurationNum = () => {
	const radioBtn = document.getElementById("duration-discrete");
	const children = document.getElementById("duration-seconds");
	if (radioBtn.checked) {
		children.removeAttribute("disabled");
	} else {
		children.setAttribute("disabled", "disabled");
	}
}

const disableRangeNum = () => {
	const radioBtn = document.getElementById("range-discrete");
	const children = document.getElementById("range-feet");
	if (radioBtn.checked) {
		children.removeAttribute("disabled");
	} else {
		children.setAttribute("disabled", "disabled");
	}
}

const sourceArray = []
const addSourceArray = () => {
	const sourceBook = document.getElementById("source");
	const sourcePage = document.getElementById("page");
	sourceArray.push({
		source: sourceBook.value,
		page: sourcePage.value
	})
	const hiddenItem = document.getElementById('parent-src');
	hiddenItem.value = JSON.stringify(sourceArray)
}

// JSON.parse(JSON.stringify(sourceArray)