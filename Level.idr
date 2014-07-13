module Level

import Map

%access public

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
         [[2, 8]]
