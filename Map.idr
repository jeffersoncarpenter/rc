module Map

import Matrix

%access public

data MapCellType = EmptyCell
                 | FilledCell


||| takes its dimensions in units
Map : Vect 2 Nat -> Type
Map [x, y] = Matrix x y MapCellType

mkEmptyMap : (dimensions : Vect 2 Nat) -> Map dimensions
mkEmptyMap [x, y] = replicate y $ replicate x EmptyCell

mapSize : Vect 2 Nat
mapSize = [10, 10]

