module Map

import Physics

%access public
%default total



||| takes its dimensions in units
data Map : Nat -> Type where
  MkMap : (Vect cells (Vect 2 Float)) ->
          (Vect (S n) (Vect 2 Float)) -> -- spawn points
          Map cells


instance Lens (Vect n PhysicsBody) (Map n) where
  getL (MkMap cells _) = map (\pos => MkPhysicsBody
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
                                    False) cells
  setL _ m = m
