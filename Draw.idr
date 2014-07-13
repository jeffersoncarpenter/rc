module Draw

import Canvas
import Game
import Map

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
drawMapCell ctx FilledCell = fillRect ctx 0 0 1 1
  
private
drawMapRow : Context2D -> Vect x MapCellType -> IO ()
drawMapRow ctx cs = do
  save ctx
  traverse (\m => drawMapCell ctx m $> translate ctx 1 0) cs
  restore ctx

drawMap : Context2D -> Map [x, y] -> IO ()
drawMap ctx m = do
  save ctx
  traverse (\m => drawMapRow ctx m $> translate ctx 0 1) m
  restore ctx


drawGame : Game -> IO ()
drawGame (MkGame map ctx) = do
  save ctx
  (let [x, y] = canvasDimensions in clearRect ctx 0 0 x y)
  scale ctx pixelsPerUnit pixelsPerUnit
  lineWidth ctx unitsPerPixel
  drawMap ctx map
  restore ctx
  
