module Game

import Canvas
import Map
import Player

%access public

data Game : Vect 2 Nat -> Type where
  MkGame : Map [x, y] ->
           List Player ->
           Context2D ->
           Game [x, y]

spawnAPlayer : Game d -> Game d
spawnAPlayer (MkGame (MkMap m ss) ps c) =
  let p = MkPlayer (map (0.5+) $ head ss) in
  MkGame (MkMap m ss) (p::ps) c
