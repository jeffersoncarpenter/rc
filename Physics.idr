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
                  (feelsGravity    : Bool) ->
                  PhysicsBody


-- PhysicsBody derived properties
  
gravity : PhysicsBody -> Vect 2 Float
gravity pb = if feelsGravity pb
                  then [0, 0.01]
                  else pure 0

-- electricField : PhysicsBody -> Vect 2 Float -> Vect 2 Float
-- magneticField : PhysicsBody -> Vect 2 Float -> Vect 2 Float


-- overlap : PhysicsBody -> PhysicsBody -> Float
-- overlap p1 p2 = (radius p1) + (radius p2) -
--                 distance (position p1) (position p2)


move : PhysicsBody -> PhysicsBody
move pb = record {
  position = [| Classes.(+) (position pb) (velocity pb) |],
  angle = angle pb + angularVelocity pb
  } pb


applyGravity : PhysicsBody -> PhysicsBody
applyGravity pb = record {
  velocity = [| Classes.(+) (velocity pb) (gravity pb) |]
  } pb


runPhysics : Vect n PhysicsBody -> Vect n PhysicsBody
runPhysics = (map move) . (map applyGravity)
