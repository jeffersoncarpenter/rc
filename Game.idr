module Game

import Canvas
import Map
import Player

%access public

data Game : Vect 2 Nat -> Type where
  MkGame : Map d -> Context2D -> Game d

