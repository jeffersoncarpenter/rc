module Player

import Physics

%access public
%default total

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
               (Circle 0.8)
               0.8
               True

instance Lens (Vect 1 PhysicsBody) Player where
  getL (MkPlayer pb) = [pb]
  setL [pb] _ = MkPlayer pb
