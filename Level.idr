module Level

import Player
import Map

%access public
%default total

level1 : Game 8
level1 = [ mkCell [0, 9]
         , mkCell [1, 9]
         , mkCell [2, 9]
         , mkCell [3, 9]
         , mkCell [4, 9]
         , mkCell [5, 9]
         , mkCell [6, 9]
         , mkPlayer [2, 7]
         ]
