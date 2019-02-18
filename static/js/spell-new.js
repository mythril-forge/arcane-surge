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
	/* === THIS PIECE MAY PROVE TO BE A BETTER ALTERNATIVE ===
		const test = ({ optionsArray, citationIndex }) => {
			return (`
		<select name='citations.${citationIndex}.source' id='citations-` + citationIndex + `-source'>
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

const placeholder = "Usually, spells have dice, conditions, and references to other mechanics (like other spells). A **condition** is emboldened, `dice` are coded, and *Other Spells* are italicized. Each of these are also hyperlinks, giving them an underline on hover.\r\n\r\n> Quote text is special. It adds fluff to the spell without compounding any mechanical features, or it clarifies a specific rule with an example.\r\n\r\nParagraphs are seperated by two line breaks.\r\n\r\nList items are seperated by one line break. An unordered list can have several forms. It can list features that occur concurrently, a list of selectable features, or a list of titles referencing more complex features, detailed at the end of the spell description. Here is an example:\r\n- option 1\r\n- option 2\r\n- option 3\r\n\r\nSometimes there is a larger list of options to choose from, like the *Ceremony* spell. Other times, each bullet is conditional, like the \r\n\r\nSome list items all happen concurrently. Others explicitly state that you can choose one effect. If an option is substantially longer than one to three sentances, than it can be split up into an option heading instead.\r\n\r\n### Option 1\r\nHere is an example of an option heading. Usually, these option headings have atleast three sentances.\r\n\r\n### Option 2\r\nOption headings do not require a preceding option list. Note that ordered lists are far more rare, producing a sequential effect. For example, for six turns, the spell might produce a different effect like so:\r\n1. A storm brews...\r\n2. Heavy rain pours. All creatures are lightly obscured; lightly obscured creatures are heavily obscured. Fire damage is weakened, and lightning damage is enhanced.\r\n3. Heavy winds blow creatures away.\r\n4. Lightning strikes a creature of your choice.\r\n5. A funnel cloud forms in the center of the storm.\r\n6. You move the funnel cloud.\r\n7. The spell ends.\r\n\r\n### Option 3\r\nHere is the third option. Do note that each option is a H3 heading.\r\n\r\n### Bonus at Higher Levels\r\nSome spells have a bonus when cast at higher levels. In the Mythril Forge house rules, cantrips don't scale upwards with character level. Instead, cantrips can be upcast by expending spell slots. Usually, this scales in the form of extra damage dice for each level.";

const entry = new EasyMDE({
	placeholder: "Enter spell description...",
	element: document.getElementById('description'),
	renderingConfig: {
		singleLineBreaks: false
	},
	tabSize: 8,
	minHeight: "300px",
	toolbar: [
		"bold", "italic", "heading-3", "|",
		"unordered-list", "ordered-list", "|",
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
