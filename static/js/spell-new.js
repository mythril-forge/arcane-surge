let citationIndex = 0;

// runs when [+] gets pressed.
const createCitation = (buttonID, SourceDict) => {
	citationIndex += 1; // increment citationIndex to get a unique ID for the new element
	// Adds an element to the document
	const button = document.getElementById(buttonID);
	const parent = button.parentNode.parentNode; // declaring fieldset
	const newDiv = document.createElement('div');

	let options = ''
	for (sourceID in SourceDict) {
		options += `<option label="${SourceDict[sourceID]}" value="${sourceID}" />\n`
	}

	const html =
		`
		<button type='button' id='citations-${citationIndex}-delete' onclick='deleteCitation(this.id)'>
			<code>&minus;</code>
		</button>

		<select name='citations.${citationIndex}.source' id='citations-${citationIndex}-source'>
			<optgroup label='select a source:'>
				<option disabled hidden selected />
				${options}
			</optgroup>
		</select>

		<input type='number' name='citations.${citationIndex}.page' id='citations-${citationIndex}-page' min='0' max='999999' placeholder='page' />
		`

	newDiv.setAttribute('id', `citations-${citationIndex}`);
	newDiv.innerHTML = html;
	parent.appendChild(newDiv);
	/* === THIS PIECE MAY BE A BETTER ALTERNATIVE ===
		const test = ({ optionsArray, citationIndex }) => {
			return (`
		<select name='citations. ${citationIndex} .source' id='citations-` + citationIndex + `-source'>
			<optgroup label='select a source:'>
				<option disabled hidden selected />
				${optionsArray.map((option) => `<option value="${option.value}">${option.name}</option>`).concat()}
			</optgroup>
		</select>
	*/
}


// runs when [-] gets pressed.
const deleteCitation = (buttonID) => {
	citationIndex -= 1;
	const button = document.getElementById(buttonID);
	const parent = button.parentNode; // declaring fieldset
	parent.parentNode.removeChild(parent); // removing self
	// This is so convoluted it's GROSS!
	// Isn't there a way to removeNode!?
	// EX button.parentNode.removeNode()
}

// runs when spell-edit loads.
const regainCitation = () => {

}

const entry = new EasyMDE({
	element: document.getElementById('description'),
	renderingConfig: {
		singleLineBreaks: false
	},
	tabSize: 8,
	minHeight: "300px",
	toolbar: [
		"bold", "italic", "|",
		"unordered-list", "ordered-list", "|",
		"heading-1", "heading-2", "heading-3", "|",
		"quote", "code", "|",
		"link", "image", "table", "|",
		"clean-block", "preview", "guide"
	],
	status: false,
	shortcuts: {
		"toggleSideBySide": null,
		"toggleFullScreen": null
	},
})
