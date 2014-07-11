module Gfx

import Canvas
import Gfx.MVMatrix

%access public


data Gfx = MkGfx (List MVMatrix) Context2D

pushMat : Gfx -> Gfx
pushMat (MkGfx (mv::mvs) c) = MkGfx (mv::mv::mvs) c

popMat : Gfx -> Gfx
popMat (MkGfx (mv::mvs) c) = MkGfx mvs c

multMat : MVMatrix -> Gfx -> Gfx
multMat m (MkGfx (mv::mvs) c) = MkGfx ((multMatMat mv m)::mvs) c
                                    

-- create a Gfx with the identity matrix
mkGfx : Context2D -> Gfx
mkGfx canvas = MkGfx [identityMatrix] canvas


-- some transforms
translate : Vect 2 Float -> Gfx -> Gfx
translate v gfx = multMat (translateMat v) gfx

rotate : Float -> Gfx -> Gfx
rotate a gfx = multMat (rotateMat a) gfx

scale : Vect 2 Float -> Gfx -> Gfx
scale v gfx = multMat (scaleMat v) gfx
