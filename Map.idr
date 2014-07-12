module Map

import Matrix

%access public

data MapCellType = EmptyCell
                 | FilledCell


||| takes its dimensions in units
Map : (Nat, Nat) -> Type
Map (x, y) = Matrix x y MapCellType

mkEmptyMap : (dimensions : (Nat, Nat)) -> Map dimensions
mkEmptyMap (x, y) = replicate x $ replicate y EmptyCell

mapSize : (Nat, Nat)
mapSize = (10, 10)

