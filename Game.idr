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
           Float ->
           Game num_cells num_players


spawnAPlayer : Game c p -> Game c (S p)
spawnAPlayer (MkGame (MkMap m ss) ps c t) =
  MkGame (MkMap m ss) ((mkPlayer $ head ss)::ps) c t


instance Lens (Vect (c + p) PhysicsBody) (Game c p) where
  getL (MkGame m ps _ _) =
    replace {P = (flip Vect) PhysicsBody} (cong $ multOneRightNeutral p)
    (Vect.(++)
     (getL m)
     (concat $ (map getL) ps))
  setL pbs (MkGame m ps ctx t) =
    let cPBs = take c pbs in
    let pPBs = map (\pb => (the (Vect 1 PhysicsBody) [pb])) $ drop c pbs in
    MkGame (setL cPBs m) (zipWith setL pPBs ps) ctx t


-- gets difference between given time index and game's time index
dt : Float -> Game c p -> Float
dt t' (MkGame _ _ _ t) = t' - t

-- sets time index of game
sett : Float -> Game c p -> Game c p
sett t' (MkGame m ps ctx _) = MkGame m ps ctx t'


tick : Float -> Game c p -> Game c p
tick t game = sett t $ mapL (runPhysics (dt t game)) game
