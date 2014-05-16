all:
	idris --codegen javascript --package canvas rc.idr -o rc.js
