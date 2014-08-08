module Game

import Canvas
import Map
import Physics
import Player

%access public
%default total


data Game : Nat -> Nat -> Type where
  MkGame : (Map num_cells) ->
           (Vect num_players Player) ->
           Context2D ->
           Game num_cells num_players


spawnAPlayer : Game c p -> Game c (S p)
spawnAPlayer (MkGame (MkMap m ss) ps c) =
  MkGame (MkMap m ss) ((mkPlayer $ head ss)::ps) c


instance Lens (Vect (c + p) PhysicsBody) (Game c p) where
  getL (MkGame m ps _) =
    replace {P = (flip Vect) PhysicsBody} (cong $ multOneRightNeutral p)
    (Vect.(++)
     (getL m)
     (concat $ (map getL) ps))
  setL pbs (MkGame m ps ctx) =
    let cPBs = take c pbs in
    let pPBs = map (\pb => (the (Vect 1 PhysicsBody) [pb])) $ drop c pbs in
    MkGame (setL cPBs m) (zipWith setL pPBs ps) ctx


tick : Game c p -> Game c p
tick game = mapL runPhysics game
