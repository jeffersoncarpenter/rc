module Physics

import Data.HVect
import Matrix
import ExFloat
import Lens

%access public
%default total


data CollisionObject = ConvexPoly (n ** Vect n (Vect 2 Float))
                     | Circle Float


data CollisionPoint : CollisionObject -> Type where
  PolyCollisionPoint :
    Fin n -> -- index of vertex on collision hull
             -- collision point is between this vertex and its successor
    Float -> -- interpolation value between 0 and 1
    CollisionPoint (ConvexPoly (n ** ps))
  CircleCollisionPoint :
    Vect 2 Float -> -- normal vector
    CollisionPoint (Circle r)


data CollisionInfo : CollisionObject -> CollisionObject -> Type where
  MkCollisionInfo : CollisionPoint c1 -> -- collision point on object 1
                    CollisionPoint c2 -> -- collision point on object 2
                    Float ->             -- time index just before collision
                    CollisionInfo c1 c2


  


-- let a circle have radius r and be centered at the origin
-- let a line be defined p + t v for p, v below
-- return all t's where the line crosses the circle
intersectCircleWithLine : Float -> Vect 2 Float -> Vect 2 Float -> List Float
intersectCircleWithLine r p v =
  let r2 = r * r in
  let p2 = dotProduct p p in
  let v2 = dotProduct v v in
  let pv = dotProduct p v in
  let discriminant = r2 + p2 * v2 - (p2 + v2) in
  the (List Float)
  [(-pv - sqrt(discriminant)) / v2,
   (-pv + sqrt(discriminant)) / v2]



partial
collide : (c1 : CollisionObject) ->
          (c2 : CollisionObject) ->
          Vect 2 Float ->
          Vect 2 Float ->
          Maybe (CollisionInfo c1 c2)
collide (Circle r1) (Circle r2) d v =
  let solution = (head' . sort . filter (\t => t >= 0 && t <= 1)) $
                 intersectCircleWithLine (r1 + r2) d v in
  map (\t => let d' = [| Classes.(+) d (scale t v) |] in
             MkCollisionInfo (CircleCollisionPoint d')
                             (CircleCollisionPoint (scale (-1) d'))
                             t) solution
collide (Circle r1) (ConvexPoly (n ** ps)) d v = Nothing


partial
-- object 1 is located at [0, 0]
-- object 2 is located at d
overlap : Vect 2 Float -> CollisionObject -> CollisionObject -> Vect 2 Float
overlap d (Circle r1) (Circle r2) = map ((*) overlap) dUnit where
  overlap = magnitude d - r1 - r2
  dUnit = normalize d


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
                  -- collision object for precise collision detection
                  -- radius because everything's a circle until proven otherwise
                  (collisionObject : CollisionObject) ->
                  (radius          : Float) ->
                  (feelsGravity    : Bool) ->
                  PhysicsBody


-- PhysicsBody derived properties
  
gravity : PhysicsBody -> Vect 2 Float
gravity pb = if feelsGravity pb
                  then [0, 0.0001]
                  else pure 0

-- electricField : PhysicsBody -> Vect 2 Float -> Vect 2 Float
-- magneticField : PhysicsBody -> Vect 2 Float -> Vect 2 Float


-- returns the overlap vector between the objects
-- overlap : PhysicsBody -> PhysicsBody -> Vect 2 Float
-- overlap p1 p2 = (radius p1) + (radius p2) -
--                 distance (position p1) (position p2)


move : Float -> PhysicsBody -> PhysicsBody
move dt pb = record { 
  position = [| Classes.(+) (position pb) (scale dt $ velocity pb) |],
  angle = angle pb + dt * angularVelocity pb
  } pb


applyGravity : Float -> PhysicsBody -> PhysicsBody
applyGravity dt pb = record {
  velocity = [| Classes.(+) (velocity pb) (map (Classes.(*) dt) (gravity pb)) |]
  } pb



runPhysics : Float -> Vect n PhysicsBody -> Vect n PhysicsBody
runPhysics dt = (map (applyGravity dt)) . (map (move dt))
