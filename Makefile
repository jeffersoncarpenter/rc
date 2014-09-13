all:
	idris --codegen javascript -p neweffects -p canvas -p matrix rc.idr -o rc.js

repl:
	idris -p neweffects -p canvas -p matrix rc.idr
