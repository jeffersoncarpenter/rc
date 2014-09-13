module Main

import Canvas
import Draw
import Game
import Level
import Map

%access public
%default total


partial
animate : Context2D -> Game c p -> Int -> IO ()
animate ctx game t = do
  requestAnimationFrame $ animate ctx (tick (cast t) game)
  drawGame ctx game


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


createGame : Game 7 1
createGame = spawnAPlayer $ MkGame level1 [] 0


partial
main : IO ()
main = do
  onClickCanvas clickFunc
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  animate ctx createGame 0
  return ()
