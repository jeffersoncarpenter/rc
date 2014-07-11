module MVMatrix

import Data.Floats
import Matrix

%access public


-- model view matrix
-- it's an affine matrix
-- the translation component is prepended onto it
MVMatrix : Type
MVMatrix = Matrix 3 3 Float


-- some transform matrices
translateMat : Vect 2 Float -> MVMatrix
translateMat [x, y] = [[1, 0, 0],
                       [x, 1, 0],
                       [y, 0, 1]]

rotateMat : Float -> MVMatrix
rotateMat a = [[1, 0    , 0],
               [0, cos a, -sin a],
               [0, sin a, cos a]]

scaleMat : Vect 2 Float -> MVMatrix
scaleMat [x, y] = [[1, 0, 0],
                   [0, x, 0],
                   [0, 0, y]]
