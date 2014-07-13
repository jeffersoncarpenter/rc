module Map

import Matrix

%access public

data MapCellType = EmptyCell
                 | FilledCell

||| takes its dimensions in units
data Map : Vect 2 Nat -> Type where
  MkMap : Matrix x y MapCellType -> -- map cells
          Vect (S n) (Vect 2 Float) -> -- spawn points
          Map [x, y]
