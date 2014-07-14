module ExFloat

%access public

data ExFloat = Fl Float
             | Infinity

instance Num ExFloat where
  (Fl f1) + (Fl f2) = Fl (f1 + f2)
  Infinity + _ = Infinity
  _ + Infinity = Infinity

  -- crazy - behavior is okay
  (Fl f1) - (Fl f2) = Fl (f1 - f2)
  Infinity - _ = Infinity
  _ - Infinity = Infinity

  (Fl f1) * (Fl f2) = Fl (f1 * f2)
  Infinity * _ = Infinity
  _ * Infinity = Infinity

  abs (Fl f) = Fl (abs f)
  abs Infinity = Infinity

  fromInteger i = Fl (fromInteger i)
