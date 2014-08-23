module Main

import Canvas
import Draw
import Game
import Level
import Map

%access public
%default total


partial
animate : Game c p -> Int -> IO ()
animate game t = do
  (putStrLn . show) (dt (cast t) game)
  requestAnimationFrame $ animate (tick (cast t) game)
  drawGame game


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

  
createGame : Context2D -> Game 7 1
createGame ctx = spawnAPlayer $ MkGame level1 [] ctx 0


partial
main : IO ()
main = do
  onClickCanvas clickFunc
  elem <- getElementById "canvas"
  ctx <- getContext2D elem
  animate (createGame ctx) 0
  return ()
