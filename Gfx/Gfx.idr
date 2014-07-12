module Gfx

import Canvas
import Gfx.MVMatrix

%access public


data Gfx = MkGfx MVMatrix Context2D

multMat : MVMatrix -> Gfx -> Gfx
multMat m (MkGfx mv c) = MkGfx (multMatMat mv m) c
                                    

-- create a Gfx with the identity matrix
mkGfx : Context2D -> Gfx
mkGfx canvas = MkGfx identityMatrix canvas


-- some transforms
translate : Vect 2 Float -> Gfx -> Gfx
translate v gfx = multMat (translateMat v) gfx

rotate : Float -> Gfx -> Gfx
rotate a gfx = multMat (rotateMat a) gfx

scale : Vect 2 Float -> Gfx -> Gfx
scale v gfx = multMat (scaleMat v) gfx
