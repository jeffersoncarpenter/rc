module Main

import Canvas


Point2D : Type -> Type
Point2D t = (t, t)

instance (Num a) => Num (Point2D a) where
  (x1, y1) + (x2, y2) = (x1 + x2, y1 + y2)
  (x1, y1) - (x2, y2) = (x1 - x2, y1 - y2)
  (x1, y1) * (x2, y2) = (x1 * y1, x2 * y2)
  abs (x, y) = (abs x, abs y)
  fromInteger i = (fromInteger i, fromInteger i)

instance (Integral a) => Integral (Point2D a) where
  div (x1, y1) (x2, y2) = (div x1 x2, div y1 y2)
  mod (x1, y1) (x2, y2) = (mod x1 x2, mod y1 y2)



-- 2d context along with its dimensions
data Context = MkContext Context2D (Point2D Nat)

-- Viewport (units topleft) (units dimensions)
data Viewport = MkViewport (Point2D Nat) (Point2D Nat)

data Surface = MkSurface Context Viewport

getCtx : Surface -> Context2D
getCtx (MkSurface (MkContext ctx _) _) = ctx

-- returns scale factor for units to pixels
unitsToPixels : Surface -> Point2D Nat
unitsToPixels (MkSurface
               (MkContext _ ctxDimensions)
               (MkViewport _ vpDimensions)) = div ctxDimensions vpDimensions

data MapCellType = EmptyCell
                 | FilledCell



-- map type takes its dimensions as a 2D point of naturals
Map : Point2D Nat -> Type
Map (x, y) = (Vect x (Vect y MapCellType))


mkEmptyMap : (a : Point2D Nat) -> Map a
mkEmptyMap (x, y) = replicate x $ replicate y EmptyCell


mapSize : Point2D Nat
mapSize = (10, 10)

natToFloat : Nat -> Float
natToFloat = cast . cast . cast

drawMapCell : Surface -> (Point2D Nat) -> MapCellType -> IO ()
drawMapCell surface unitsOffset EmptyCell =
  let (x, y) = (unitsToPixels surface) * unitsOffset in
  let (width, height) = unitsToPixels surface in
  fillRect
    (getCtx surface)
    (natToFloat x)
    (natToFloat y)
    (natToFloat width)
    (natToFloat height)
  

--drawMap : Surface -> Map size -> IO ()
--drawMap s m = 


data Game = MkGame (Map mapSize) Surface


drawGame : Game -> IO ()
drawGame (MkGame map surface) = return ()


defaultViewport : Viewport
defaultViewport = MkViewport (5, 5) (4, 3)


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

createDefaultSurface : IO Surface
createDefaultSurface = do
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  let context = MkContext ctx (1280, 1024)
  return $ MkSurface context defaultViewport

createGame : IO Game
createGame = do
  surface <- createDefaultSurface
  return $ MkGame (mkEmptyMap mapSize) surface

launchGame : IO ()
launchGame = do
  game <- createGame
  onClickCanvas clickFunc
  requestAnimationFrame $ animate game
  return ()


main : IO ()
main = runOnLoad launchGame

