module Game

import Canvas
import Map
import Physics
import Player

%access public

data Game = MkGame Map (List Player) Context2D

spawnAPlayer : Game -> Game
spawnAPlayer (MkGame (MkMap m ss) ps c) =
  let p = MkPlayer (map (0.5+) $ head ss) in
  MkGame (MkMap m ss) (p::ps) c


  

tick : Game -> Game
tick (MkGame m ps c) = MkGame m ps c
