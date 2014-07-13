module Map

import Matrix

%access public

data MapCellType = EmptyCell
                 | FilledCell

||| takes its dimensions in units
data Map = MkMap (d : Vect 2 Nat ** Matrix (head d) (last d) MapCellType)

mkEmptyMap : (dimensions : Vect 2 Nat) -> Map
mkEmptyMap [x, y] = MkMap ([x, y] ** replicate y $ replicate x EmptyCell)

mapSize : Vect 2 Nat
mapSize = [10, 10]

