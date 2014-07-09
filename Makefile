all:
	idris --codegen javascript -p canvas -p matrix rc.idr -o rc.js
