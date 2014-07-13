module Draw

import Canvas
import Data.Floats
import Game
import Map
import Player

%access public


-- in pixels
canvasDimensions : Vect 2 Float
canvasDimensions = [1280, 1024]


-- conversion factors
pixelsPerUnit : Float
pixelsPerUnit = 32

unitsPerPixel : Float
unitsPerPixel = 1 / pixelsPerUnit


private
drawMapCell : Context2D -> MapCellType -> IO ()
drawMapCell ctx EmptyCell = strokeRect ctx 0 0 1 1
drawMapCell ctx FilledCell = do
  strokeRect ctx 0 0 1 1
  fillRect ctx 0 0 1 1
  
private
drawMapRow : Context2D -> Vect x MapCellType -> IO ()
drawMapRow ctx cs = do
  save ctx
  traverse (\m => drawMapCell ctx m $> translate ctx 1 0) cs
  restore ctx

drawMap : Context2D -> (Map dimensions) -> IO ()
drawMap ctx (MkMap cells _) = do
  save ctx
  traverse (\m => drawMapRow ctx m $> translate ctx 0 1) cells
  restore ctx


drawPlayer : Context2D -> Player -> IO ()
drawPlayer ctx (MkPlayer [x, y]) = do
  arc ctx x y 0.4 0 (2 * pi)
  stroke ctx


drawGame : Game d -> IO ()
drawGame (MkGame map players ctx) = do
  save ctx
  (let [x, y] = canvasDimensions in clearRect ctx 0 0 x y)
  scale ctx pixelsPerUnit pixelsPerUnit
  lineWidth ctx unitsPerPixel
  drawMap ctx map
  traverse (drawPlayer ctx) players
  restore ctx
  
