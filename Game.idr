module Game

import Canvas
import Data.HVect
import Physics

%access public
%default total


record GameObject : Type where
  MkGameObject : (body : PhysicsBody) ->
                 (draw : Context2D -> PhysicsBody -> IO ()) ->
                 GameObject
                 
Game : Nat -> Type
Game n = Vect n GameObject

getBodies : Game n -> Vect n PhysicsBody
getBodies = map body

setBodies : Vect n PhysicsBody -> Game n -> Game n
setBodies bs os = map (\b => record { body = b }) bs <$> os

tick : Float -> Game n -> Game n
tick dt g = setBodies (runPhysics dt $ getBodies g) g


drawGame : Context2D -> Game n -> IO ()
drawGame _ [] = return ()
drawGame ctx ((MkGameObject b d)::objs) = do
  d ctx b
  drawGame ctx objs
