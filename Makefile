all: gen compile 

compile:
	node main.js

gen:
	npm run gen
