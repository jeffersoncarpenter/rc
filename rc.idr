module Main

import Canvas
import Gfx.Gfx


data MapCellType = EmptyCell
                 | FilledCell


||| takes its dimensions in units
Map : (Nat, Nat) -> Type
Map (x, y) = Matrix x y MapCellType

mkEmptyMap : (dimensions : (Nat, Nat)) -> Map dimensions
mkEmptyMap (x, y) = replicate x $ replicate y EmptyCell

mapSize : (Nat, Nat)
mapSize = (10, 10)

natToFloat : Nat -> Float
natToFloat = cast . cast . cast

data Game = MkGame (Map mapSize)


drawGame : Game -> IO ()
drawGame (MkGame map) = return ()


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

createGame : Game
createGame = MkGame (mkEmptyMap mapSize)

launchGame : IO ()
launchGame = do
  onClickCanvas clickFunc
  requestAnimationFrame $ animate createGame
  return ()


main : IO ()
main = runOnLoad launchGame
