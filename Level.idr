module Level

import Map

%access public

level1 : Map
level1 = MkMap [MkMapCell [0, 9],
                MkMapCell [1, 9],
                MkMapCell [2, 9],
                MkMapCell [3, 9],
                MkMapCell [4, 9],
                MkMapCell [5, 9],
                MkMapCell [6, 9]]
         
         -- spawn points
         [[2, 8]]
