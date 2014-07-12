module Main

import Canvas
import Game
import Map

natToFloat : Nat -> Float
natToFloat = cast . cast . cast


animate : Game -> Int -> IO ()
animate game dt = do
  drawGame game
  requestAnimationFrame $ animate game
  putStr "ANTOEUH"


onClickCanvas : (() -> IO ()) -> IO ()
onClickCanvas f = mkForeign
                  (FFun "$('#canvas').on('click', %0)" [FFunction FUnit (FAny (IO ()))] FUnit) f

clickFunc : () -> IO ()
clickFunc _ = putStr "HELLO"


runOnLoad : IO () -> IO ()
runOnLoad io = mkForeign
               (FFun "(%0)()" [FFunction FUnit (FAny (IO ()))] FUnit) (\_ => io)

createGame : Context2D -> Game
createGame ctx = MkGame (mkEmptyMap mapSize) ctx

launchGame : IO ()
launchGame = do
  onClickCanvas clickFunc
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  requestAnimationFrame $ animate (createGame ctx)
  return ()

main : IO ()
main = runOnLoad launchGame
