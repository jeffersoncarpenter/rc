module Level

import Map

%access public

mkEmptyMap : (dimensions : Vect 2 Nat) -> Map dimensions
mkEmptyMap [x, y] = MkMap (replicate y $ replicate x EmptyCell) []

emptyLevel : Map [10, 10]
emptyLevel = mkEmptyMap [10, 10]

-- cell type
private
e : MapCellType
e = EmptyCell

private
f : MapCellType
f = FilledCell

level1 : Map [10, 10]
level1 = MkMap [[e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [e, e, e, e, e, e, e, e, e, e],
                [f, f, f, f, f, f, f, f, f, f]]
         
         -- spawn points
         [(2, 8)]
