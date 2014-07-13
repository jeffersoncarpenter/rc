module Physics

%access public

data PhysicsBody = MkPhysicsBody
                   (Vect 2 Float) -- position
                   (Vect 2 Float) -- velocity
                   Float          -- radius
                   Float          -- charge
