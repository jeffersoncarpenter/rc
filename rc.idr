module Main

import Canvas
import Draw
import Game
import Map

natToFloat : Nat -> Float
natToFloat = cast . cast . cast


animate : Game -> Int -> IO ()
animate game dt = do
  requestAnimationFrame $ animate game
  drawGame game


onClickCanvas : (() -> IO ()) -> IO ()
onClickCanvas f = mkForeign
                  (FFun "$('#canvas').on('click', %0)" [FFunction FUnit (FAny (IO ()))] FUnit) f

clickFunc : () -> IO ()
clickFunc _ = putStr "HELLO"


createGame : Context2D -> Game
createGame ctx = MkGame (mapSize ** mkEmptyMap mapSize) ctx


main : IO ()
main = do
  onClickCanvas clickFunc
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  animate (createGame ctx) 0
  return ()
