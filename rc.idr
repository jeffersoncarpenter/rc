module Main

import Canvas
import Draw
import Game
import Level
import Map

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

partial
animate : Context2D -> Game n -> Int -> Int -> IO ()
animate ctx game t t' = do
  putStrLn $ show (t' - t)
  requestAnimationFrame $ animate ctx (tick (cast (t' - t)) game) t'
  save ctx
  (let [x, y] = canvasDimensions in clearRect ctx 0 0 x y)
  scale ctx pixelsPerUnit pixelsPerUnit
  lineWidth ctx unitsPerPixel
  drawGame ctx game
  restore ctx


partial
startGame : Context2D -> Game n -> IO ()
startGame ctx g = do
  requestAnimationFrame (\t => do
    requestAnimationFrame $ animate ctx g t
    return ())
  return ()
  

-- this doesn't work yet
-- for some reason it gives me the x value as both parameters
onClickCanvas : (Float -> Float -> IO ()) -> IO ()
onClickCanvas f = mkForeign
                  (FFun """
(function () {
  var func = %0;
  $('#canvas').on('click', function (ev) {
    func(ev.clientX, ev.clientY);
  });
})();
""" [FFunction FFloat (FFunction FFloat (FAny (IO ())))] FUnit) f


clickFunc : Float -> Float -> IO ()
clickFunc x y = do
  putStr (show x)
  putStr (show y)


partial
main : IO ()
main = do
  onClickCanvas clickFunc
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  startGame ctx level1
  return ()
