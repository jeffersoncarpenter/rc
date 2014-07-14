module Map

import Matrix
import Physics

%access public

data MapCell = MkMapCell (Vect 2 Float) -- position

instance HasPhysicsBodies MapCell where
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
data Map = MkMap
           (List MapCell)
           (Vect (S n) (Vect 2 Float)) -- spawn points


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
                                          
                       
  

instance HasPhysicsBodies Map where
  getPhysicsBodies (MkMap cells _) = cells >>= getPhysicsBodies
  setPhysicsBodies _ m = m
