module Physics

import Data.HVect
import ExFloat
import Lens

%access public
%default total


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


-- overlap : PhysicsBody -> PhysicsBody -> Float
-- overlap p1 p2 = (radius p1) + (radius p2) -
--                 distance (position p1) (position p2)


tick : PhysicsBody -> PhysicsBody
tick pb = record {
  position = [| Classes.(+) (position pb) (velocity pb) |],
  angle = angle pb + angularVelocity pb
  } pb


gravityAccel : Vect 2 Float
gravityAccel = [0, 0.01]

-- applyGravity : PhysicsBody -> PhysicsBody
-- applyGravity pb = setVelocity
