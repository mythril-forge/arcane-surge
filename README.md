# D&D Spell Generator API

## Alternative Platforms
This application has iterations elsewhere.
- http://www.dnd5eapi.co/
- https://open5e.com/
- https://5etools.com/

### Why Create an Alternative?
The way that Nolan hosts 5th-edition D&D games is a bit different than how the original game was created. He makes slight modifications for the spells that he allows in the D&D games that he hosts. There are hundreds of spells, therefore it is neigh impossible for Nolan to keep track of these modifications without the use of additional tools.

## Usage
For this API to worl, it has to be able to import data from external sources. Here is API's usage flow:
1. Prompt user for pre-existing data, usually in form of a URL, uploaded JSON file, or even copied/pasted JSON text
	- Data must be a list of spells, in `JSON` format
	- Multiple data sources are permitted
	- Data will automatically be cleaned and added to database
	- Duplicate Entries will be erased
1. Automatically check for duplicate spell names in `JSON`
	- There should be no duplicated spell names, unless there is a typo in the JSON.
	- Sometimes, if you are importing spells from Unearthed Arcana, the data may be outdated.
	- The duplicate spells will be displayed and asked for a fix (usually by deleting one)
	- Otherwise, this step is automatic and will simply continue to the next steps
1. Create, Edit, Update, Delete data entries by hand
	- This is a manual step done by the user
	- A filter may be able to help with this
1. Output & Save new `JSON` data