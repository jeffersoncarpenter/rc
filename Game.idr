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



-- map from Game to a list of physics objects, and back again
-- private
-- pbsFromSources : Game n -> List (List PhysicsBody)
-- pbsFromSources (MkGame m ps _) =
--   [getPhysicsBodies m, map (head . getPhysicsBodies) ps]


-- pbSourceLengths : Game -> List Nat
-- pbSourceLengths g = map length $ pbsFromSources g

-- pbsToListsForSources : Game -> List PhysicsBody -> List (List PhysicsBody)
-- pbsToListsForSources g pbs = let lengths = pbSourceLengths g in
--   fst $ foldr (\n, (lists, pbs) => (take n pbs :: lists, drop n pbs)) ([], pbs) lengths

-- pbsToSources : List (List PhysicsBody) -> Game -> Game
-- pbsToSources [mapPBs, playerPBs] (MkGame m ps ctx) =
--   MkGame
--   (setPhysicsBodies mapPBs m)
--   ((map (setPhysicsBodies . (::Nil)) playerPBs) <$> ps)
--   ctx


-- instance HasPhysicsObjects Game where
--   getPhysicsBodies = concat (getPhysicsBodies m) (map (head . getPhysicsBodies) ps)


tick : Game c p -> Game c p
tick (MkGame m ps c) = MkGame m ps c

