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
           Float ->
           Game num_cells num_players


class GameObject a where
  draw : Context2D -> a -> IO ()


spawnPlayer : Vect 2 Float -> Game c p -> Game c (S p)
spawnPlayer pos (MkGame m ps t) = MkGame m ((mkPlayer pos)::ps) t


spawnAPlayer : Game c p -> Game c (S p)
spawnAPlayer (MkGame (MkMap m ss) ps t) =
  MkGame (MkMap m ss) ((mkPlayer $ head ss)::ps) t


instance Lens (Vect (c + p) PhysicsBody) (Game c p) where
  getL (MkGame m ps _) =
    replace {P = (flip Vect) PhysicsBody} (cong $ multOneRightNeutral p)
    (Vect.(++)
     (getL m)
     (concat $ (map getL) ps))
  setL pbs (MkGame m ps t) =
    let cPBs = take c pbs in
    let pPBs = map (\pb => (the (Vect 1 PhysicsBody) [pb])) $ drop c pbs in
    MkGame (setL cPBs m) (zipWith setL pPBs ps) t


-- gets difference between given time index and game's time index
dt : Float -> Game c p -> Float
dt t' (MkGame _ _ t) = t' - t

-- sets time index of game
sett : Float -> Game c p -> Game c p
sett t' (MkGame m ps _) = MkGame m ps t'


tick : Float -> Game c p -> Game c p
tick t game = sett t $ mapL (runPhysics (dt t game)) game
