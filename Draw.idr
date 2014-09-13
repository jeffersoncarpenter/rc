module Draw

import Canvas
import Data.Floats
import Game
import Map
import Player

%access public
%default total


-- in pixels
canvasDimensions : Vect 2 Float
canvasDimensions = [1280, 1024]


-- conversion factors
pixelsPerUnit : Float
pixelsPerUnit = 32

unitsPerPixel : Float
unitsPerPixel = 1 / pixelsPerUnit


drawMap : Context2D -> Map n -> IO (Vect n ())
drawMap ctx (MkMap cells _) = traverse (\([x, y]) => do
  save ctx
  translate ctx x y
  strokeRect ctx 0 0 1 1
  fillRect ctx 0 0 1 1
  restore ctx) cells


drawPlayer : Context2D -> Player -> IO ()
drawPlayer ctx (MkPlayer pb) = do
  beginPath ctx
  (let [x, y] = position pb in arc ctx x y 0.4 0 (2 * pi))
  stroke ctx


drawGame : Context2D -> Game c p -> IO ()
drawGame ctx (MkGame map players t) = do
  save ctx
  (let [x, y] = canvasDimensions in clearRect ctx 0 0 x y)
  scale ctx pixelsPerUnit pixelsPerUnit
  lineWidth ctx unitsPerPixel
  drawMap ctx map
  traverse (drawPlayer ctx) players
  restore ctx
  
