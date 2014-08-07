module Main

import Canvas
import Draw
import Game
import Level
import Map

%access public
%default total

data FunctorVect : Type


natToFloat : Nat -> Float
natToFloat = cast . cast . cast


partial
animate : Game c p -> Int -> IO ()
animate game dt = do
  requestAnimationFrame $ animate (tick game)
  drawGame game


onClickCanvas : (() -> IO ()) -> IO ()
onClickCanvas f = mkForeign
                  (FFun "$('#canvas').on('click', %0)" [FFunction FUnit (FAny (IO ()))] FUnit) f


clickFunc : () -> IO ()
clickFunc _ = putStr "HELLO"


createGame : Context2D -> Game 7 1
createGame ctx = spawnAPlayer $ MkGame level1 [] ctx


partial
main : IO ()
main = do
  onClickCanvas clickFunc
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  animate (createGame ctx) 0
  return ()
