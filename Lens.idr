module Lens

%access public
%default total

class Lens view orig where
  getL : orig -> view
  setL : view -> orig -> orig


mapL : (Lens view orig) => (view -> view) -> orig -> orig
mapL f o = (setL . f . getL) o o
