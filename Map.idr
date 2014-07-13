module Map

import Matrix

%access public

data MapCellType = EmptyCell
                 | FilledCell

||| takes its dimensions in units
data Map : Vect 2 Nat -> Type where
  MkMap : Matrix x y MapCellType -> -- map cells
          List (Fin x, Fin y) -> -- spawn points
          Map [x, y]
