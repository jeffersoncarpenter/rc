module Map

import Physics

%access public

data MapCell = MkMapCell (Vect 2 Float) -- position

instance Lens (Vect 1 PhysicsBody)  MapCell where
  getL (MkMapCell pos) = [MkPhysicsBody
                                    pos
                                    [0, 0]
                                    Infinity
                                    0
                                    0
                                    Infinity
                                    0
                                    [0, 0]
                                    (ConvexPoly [[-0.5, -0.5],
                                                 [-0.5, 0.5],
                                                 [0.5, 0.5],
                                                 [0.5, -0.5]])]
  setL _ c = c


||| takes its dimensions in units
data Map : Nat -> Type where
  MkMap : (Vect cells MapCell) ->
          (Vect (S n) (Vect 2 Float)) -> -- spawn points
          Map cells


mapCellToPhysicsBody : MapCell -> PhysicsBody
mapCellToPhysicsBody (MkMapCell pos) = MkPhysicsBody
                                          pos
                                          [0, 0]
                                          Infinity
                                          0
                                          0
                                          Infinity
                                          0
                                          [0, 0]
                                          (ConvexPoly [[-0.5, -0.5],
                                                       [-0.5, 0.5],
                                                       [0.5, 0.5],
                                                       [0.5, -0.5]])




instance Lens (Vect n PhysicsBody) (Map n) where
  getL (MkMap cells _) = map (\[a] => a) $ map getL cells
  setL _ m = m
