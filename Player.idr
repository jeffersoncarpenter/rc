module Player

import Physics

%access public

data Player = MkPlayer PhysicsBody

mkPlayer : Vect 2 Float -> Player
mkPlayer pos = MkPlayer $ MkPhysicsBody
               pos
               [0, 0]
               1
               0
               0
               1
               0
               [0, 0]
               (ConvexPoly [[-0.5, -0.5],
                            [-0.5, 0.5],
                            [0.5, 0.5],
                            [0.5, -0.5]])

instance HasPhysicsBodies Player where
  getPhysicsBodies (MkPlayer pb) = []
  setPhysicsBodies [pb] _ = MkPlayer pb
