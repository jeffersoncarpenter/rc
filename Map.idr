module Map

import Game
import Physics

%access public
%default total

mkCell : Vect 2 Float -> GameObject
mkCell pos = MkGameObject (MkPhysicsBody
                           pos
                           [0, 0]
                           Infinity
                           0
                           0
                           Infinity
                           0
                           [0, 0]
                           (ConvexPoly (4 ** [[-0.5, -0.5],
                                              [-0.5, 0.5],
                                              [0.5, 0.5],
                                              [0.5, -0.5]]))
                           0.8 -- 0.8 >= 1 / sqrt(2)
                           False)
             (\ctx, pb => do
                          save ctx
                          (let [x, y] = position pb in translate ctx x y)
                          strokeRect ctx 0 0 1 1
                          fillRect ctx 0 0 1 1
                          restore ctx)
