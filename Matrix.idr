module Matrix

import Data.Floats

%access public
%default total


||| Dot product of two vectors
dotProduct : (Num a) => Vect (S n) a -> Vect (S n) a -> a
dotProduct a b = foldr1 (+) $ zipWith (*) a b

||| Cross product of two 3-vectors
crossProduct : (Num a) => Vect 3 a -> Vect 3 a -> Vect 3 a
crossProduct [a1, a2, a3] [b1, b2, b3] =
  [a2 * b3 - a3 * b2
  ,a3 * b1 - a1 * b3
  ,a1 * b2 - b1 * a2]

||| The nonzero component of the "cross product" of two 2-vectors
||| It makes no difference whether we take x or z to be the nonzero component
crossProduct2 : (Num a) => Vect 2 a -> Vect 2 a -> a
crossProduct2 a b = head $ crossProduct (0::a) (0::b)


||| Some specific operations currently only defined for the Float type

magnitude : Vect (S n) Float -> Float
magnitude v = sqrt $ dotProduct v v

distance : Vect (S n) Float -> Vect (S n) Float -> Float
distance a b = magnitude [| Classes.(-) a b |]

normalize : Vect (S n) Float -> Vect (S n) Float
normalize v = map (\x => x / magnitude v) v

scale : (Num a) => a -> Vect n a -> Vect n a
scale k v = map (Classes.(*) k) v



||| A Matrix is a Vect of Vects
Matrix : Nat -> Nat -> Type -> Type
Matrix cols rows a = Vect rows (Vect cols a)

||| Multiply a Matrix by a Vector
multVect : (Num a) => Matrix (S m) (S n) a -> Vect (S m) a -> Vect (S n) a
multVect vs v = map (dotProduct v) vs

||| Multiply a Matrix by a Matrix
multMat : (Num a) => Matrix (S m) (S n) a -> Matrix (S n) (S o) a -> Matrix (S m) (S o) a
multMat a b = map (multVect (transpose a)) b

||| Identity matrix
identityMatrix : (Num a) => Matrix n n a
identityMatrix {n = Z}   = []
identityMatrix {n = S m} = (one :: replicate m zero) :: (map (zero ::) identityMatrix) where
  zero = fromInteger 0
  one  = fromInteger 1

