module Physics

import Data.HVect
import ExFloat

%access public


data CollisionObject = ConvexPoly (List (Vect 2 Float))
                     | Circle Float -- radius


record PhysicsBody : Type where
  MkPhysicsBody : (position        : Vect 2 Float) ->
                  (velocity        : Vect 2 Float) ->
                  (mass            : ExFloat) ->
                  (angle           : Float) ->
                  (angularVelocity : Float) ->
                  (momentOfInteria : ExFloat) ->
                  -- charge and magnetism will be replaced with EM fields
                  -- or something like that
                  (charge          : Float) ->
                  (magnetism       : Vect 2 Float) ->
                  -- radius is for collisions
                  -- will be replaced with a convex poly or something
                  (collisionObject : CollisionObject) ->
                  PhysicsBody


class HasPhysicsBodies o (n : Nat) where
  getPhysicsBodies : o -> Vect n PhysicsBody
  setPhysicsBodies : Vect n PhysicsBody -> o -> o


class AsPhysicsBody o (n : Nat) where
  toPhysicsBody : o -> Vect n PhysicsBody
  asPhysicsBody : o -> (Vect n PhysicsBody -> Vect n PhysicsBody) -> o


-- data Physics : (Vect k Nat) -> Type where
--   MkPhysics : HVect (map (\l => flip Vect $ (t ** HasPhysicsBodies t l))) ls ->
--   Physics ls
-- data Physics : Vect k (Nat, Type) -> Type where
--   EmPhysics : Physics []
--   MkPhysics : (HasPhysicsBodies t n) =>
--               t ->
--               Physics nts -> Physics ((n, t)::nts)


-- runPhysics : (Vect n PhysicsBody -> Vect n PhysicsBody) ->
--              Physics ts ->
--              Physics ts
-- runPhysics f EmPhysics = EmPhysics
-- runPhysics f (MkPhysics t p) =
--   let longresult = runPhysics $ (getPhysicsBodies t ++  in
--   MkPhysics (setPhysicsBodies (take n longvect) t) 


-- overlap : PhysicsBody -> PhysicsBody -> Float
-- overlap p1 p2 = (radius p1) + (radius p2) -
--                 distance (position p1) (position p2)


tick : PhysicsBody -> PhysicsBody
tick pb = record {
  position = [| Classes.(+) (position pb) (velocity pb) |],
  angle = angle pb + angularVelocity pb
  } pb


-- applyGravity : PhysicsBody -> PhysicsBody
-- applyGravity pb = setVelocity
