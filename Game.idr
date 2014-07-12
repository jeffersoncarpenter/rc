module Game

import Canvas
import Map

%access public

data Game = MkGame (Map mapSize) Context2D

-- in pixels
canvasDimensions : Vect 2 Float
canvasDimensions = [1280, 1024]


-- conversion factors
pixelsPerUnit : Vect 2 Float
pixelsPerUnit = [32, 32]

unitsPerPixel : Vect 2 Float
unitsPerPixel = map (1/) pixelsPerUnit


drawGame : Game -> IO ()
drawGame (MkGame map ctx) = return ()
  

