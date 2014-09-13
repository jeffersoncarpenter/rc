module Level

import Map

%access public
%default total

level1 : Map 7
level1 = MkMap [[0, 9],
                [1, 9],
                [2, 9],
                [3, 9],
                [4, 9],
                [5, 9],
                [6, 9]]
         
         -- spawn points
         [[2.5, 8.5]]
