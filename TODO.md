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
- [x] name
- [x] slug
- [x] level
- [x] school

- [x] cast-time
	- [x] quality
	- [x] seconds
	- [x] trigger

- [x] duration
	- [x] quality
	- [x] seconds
	- [x] trigger

- [x] num-targets
- [x] range
	- [x] quality
	- [x] feet
- [x] area
	- [x] shape
	- [x] radius
	- [x] length
	- [x] width
	- [x] height

- [x] tags \*_array_
- [x] components
	- [x] verbal
	- [x] somatic
	- [x] material

- [x] description
	- [x] main
	- [?] higher <!-- might have to come back and add a checkbox for a power-up at higher levels -->

<!-- the following items need their own CRUD system to work -->
- [ ] class \*_array_
- [ ] subclass \*_array_
- [ ] race \*_array_
- [ ] subrace \*_array_

<!-- the following items need a better mongoose schema to work -->
- [ ] parent \*_array_
	- [ ] - source **id**
	- [ ] - page
- [ ] sibling
	- [ ] - reference **id**