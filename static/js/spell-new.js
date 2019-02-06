let citationIndex = 0;

// runs when [+] gets pressed.
const createCitation = (buttonID) => {
	citationIndex += 1; // increment citationIndex to get a unique ID for the new element
	// Adds an element to the document
	const button = document.getElementById(buttonID);
	const parent = button.parentNode; // declaring fieldset
	const newDiv = document.createElement('div');
	// Really need to implement something better. React?
	const html = `
	<button type='button' id='citations-` + citationIndex + `-delete' onclick='deleteCitation(this.id)'>
		<code>&minus;</code>
	</button>

	<select name='citations.` + citationIndex + `.source' id='citations-` + citationIndex + `-source'>
		<optgroup label='select a source:'>
			<option disabled hidden selected />
			{{#each EverySource}}
			<option label='{{this.name}}' value='{{this._id}}' />
			{{/each}}
		</optgroup>
	</select>

	<input type='number' name='citations.` + citationIndex + `.page' id='citations-` + citationIndex + `-page' min='0' max='999999' placeholder='page' />`
	newDiv.setAttribute('id', 'citations-' + citationIndex);
	newDiv.innerHTML = html;
	parent.appendChild(newDiv);
}

// runs when [-] gets pressed.
const deleteCitation = (buttonID) => {
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
