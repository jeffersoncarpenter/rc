module Map

import Matrix

%access public

data MapCellType = EmptyCell
                 | FilledCell

||| takes its dimensions in units
data Map : Vect 2 Nat -> Type where
  MkMap : Matrix x y MapCellType -> Map [x, y]

mkEmptyMap : (dimensions : Vect 2 Nat) -> Map dimensions
mkEmptyMap [x, y] = MkMap $ replicate y $ replicate x EmptyCell

mapSize : Vect 2 Nat
mapSize = [10, 10]

