module ExFloat

%access public

-- Floats, extended with a point at infinity
-- Chances are we'll need a point at negative infinity too
-- I say this because the Num type class makes no bloody sense
data ExFloat = Fl Float
             | Infinity

instance Num ExFloat where
  (Fl f1) + (Fl f2) = Fl (f1 + f2)
  Infinity + _ = Infinity
  _ + Infinity = Infinity

  -- Infinity - Infinity = Infinity, which makes no sense
  (Fl f1) - (Fl f2) = Fl (f1 - f2)
  Infinity - _ = Infinity
  _ - Infinity = Infinity

  -- ...  -1 * Infinity = Infinity ???
  (Fl f1) * (Fl f2) = Fl (f1 * f2)
  Infinity * _ = Infinity
  _ * Infinity = Infinity

  abs (Fl f) = Fl (abs f)
  abs Infinity = Infinity

  fromInteger i = Fl (fromInteger i)
