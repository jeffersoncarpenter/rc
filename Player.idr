module Player

import Game
import Physics

%access public
%default total


mkPlayer : Vect 2 Float -> GameObject
mkPlayer pos = MkGameObject
               (MkPhysicsBody
                pos
                [0, 0]
                1
                0
                0
                1
                0
                [0, 0]
                (Circle 0.8)
                0.8
                True)
               (\ctx, pb => do
                   beginPath ctx
                   (let [x, y] = position pb in arc ctx x y 0.4 0 (2 * pi))
                   stroke ctx)

spawnPlayer : Vect 2 Float -> Game n -> Game (S n)
spawnPlayer pos game = (mkPlayer pos)::game
