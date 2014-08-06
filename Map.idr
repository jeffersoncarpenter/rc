module Map

import Physics

%access public

data MapCell = MkMapCell (Vect 2 Float) -- position

instance HasPhysicsBodies MapCell 1 where
  getPhysicsBodies (MkMapCell pos) = [MkPhysicsBody
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
  setPhysicsBodies _ c = c


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




instance HasPhysicsBodies (Map n) n where
  getPhysicsBodies (MkMap cells _) =
    map (\[a] => a) $ map getPhysicsBodies cells
  setPhysicsBodies _ m = m
