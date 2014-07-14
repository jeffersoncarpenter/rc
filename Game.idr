module Game

import Canvas
import Map
import Physics
import Player

%access public

data Game = MkGame Map (List Player) Context2D

spawnAPlayer : Game -> Game
spawnAPlayer (MkGame (MkMap m ss) ps c) =
  MkGame (MkMap m ss) ((mkPlayer $ head ss)::ps) c



tick : Game -> Game
tick (MkGame m ps c) = MkGame m ps c
