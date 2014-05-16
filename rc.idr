module Main

import Canvas


Point2D : Type -> Type
Point2D t = (t, t)


data Surface = MkSurface Context2D (Point2D Nat)


data MapCellType = EmptyCell
                 | FilledCell


-- map type takes its dimensions as a 2D point of naturals
data Map : Point2D Nat -> Type where
  MkMap : (Vect x (Vect y MapCellType)) -> Map (x, y)


mkEmptyMap : (a : Point2D Nat) -> Map a
mkEmptyMap (x, y) = MkMap (replicate x $ replicate y EmptyCell)


data Game = MkGame (Map mapSize) Surface


--drawGame : Game -> IO ()
--drawGame g = 


animate : Int -> IO ()
animate dt = do
--  drawBackground
  requestAnimationFrame animate
  putStr "ANTOEUH"


onClickCanvas : (() -> IO ()) -> IO ()
onClickCanvas f = mkForeign
                  (FFun "$('#canvas').on('click', %0)" [FFunction FUnit (FAny (IO ()))] FUnit) f

clickFunc : () -> IO ()
clickFunc _ = putStr "HELLO"


runOnLoad : IO () -> IO ()
runOnLoad io = mkForeign
               (FFun "(%0)()" [FFunction FUnit (FAny (IO ()))] FUnit) (\_ => io)



mapCellPx : Point2D Nat
mapCellPx = (10, 10)

mapSize : Point2D Nat
mapSize = (10, 10)

--game : Game
--game = MkGame 


main : IO ()
main = runOnLoad $ do
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  onClickCanvas clickFunc
  requestAnimationFrame animate
  return ()
