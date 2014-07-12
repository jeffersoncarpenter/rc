module Draw

import Canvas
import Game
import Map

%access public

drawMapCell : MapCellType -> Context2D -> IO ()
drawMapCell EmptyCell = do
  stroke

--drawMap : Map [x, y] -> IO ()

drawGame : Game -> IO ()
drawGame (MkGame map ctx) = do
  save ctx
  (let [x, y] = pixelsPerUnit in scale ctx x y)
  restore ctx
  

