module Game

import Canvas
import Map

%access public

data Game = MkGame (dimensions : Vect 2 Nat ** Map dimensions) Context2D

