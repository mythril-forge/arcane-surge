# `TODO` List

## Create Pages
1. Sources
	- [ ] Create Source
	- [ ] Index Sources
	- [ ] Show 1 Source / Index Spells
	- [ ] Modify Source
	- [ ] Delete Source
2. Spells
	- [ ] Create Source
	- [ ] Index Sources
	- [ ] Show 1 Spell
	- [ ] Modify Spell
	- [ ] Delete Spell
3. Importing Spells from JSON
	- [ ] Import Source(s)
		- [ ] Clean Sources
			- [ ] Manual Cleaning
			- [ ] Automated Cleaning
	- [ ] Confirm Import

- Additional `CRUD` Functionality

---

# Spell Metadata

- [X] _id: (automatic)

- [X] slug: string (automatic)
- [X] name: string
- [X] level: integer 0-9 (level)
- [X] school: string

- [X] casting_time: integer (seconds)
	- can also be "action", "bonus action", or "reaction"
- [X] duration: integer (seconds)

---

- [X] range: integer (feet)
	- note that self, touch, 0ft, and 5ft are discrete values!
- [X] area_effect:
	- [X] shape
	- [X] width/radius
	- [X] height
- [X] targets: integer (num targets)

- [X] concentration: (boolean)
- [X] ritual: (boolean)

- [X] somatic: (none / list)
- [X] verbal: (none / list)
- [X] material: (none / dictionary)
	- [X] item: integer (cp)

- [X] description (long string)
- [X] desc_higher (long string)

<!-- Difficulty with multiple sources of damage -->
- [!] damage_dice: (string)
- [!] damage_types: (list of strings)
- [X] conditions: (list of strings)

- [X] races: (list of strings)
- [X] classes: (list of strings)
- [X] subclasses: (list of strings)

- [X] citation (dictionary)
	- [X] book: integer (page)

- [X] comparison
