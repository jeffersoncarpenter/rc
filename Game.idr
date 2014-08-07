module Game

import Canvas
import Map
import Physics
import Player

%access public


data Game : Nat -> Nat -> Type where
  MkGame : (Map num_cells) ->
           (Vect num_players Player) ->
           Context2D ->
           Game num_cells num_players


spawnAPlayer : Game c p -> Game c (S p)
spawnAPlayer (MkGame (MkMap m ss) ps c) =
  MkGame (MkMap m ss) ((mkPlayer $ head ss)::ps) c


tick : Game c p -> Game c p
tick (MkGame m ps c) = MkGame m ps c

