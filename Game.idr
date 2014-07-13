module Game

import Canvas
import Map

%access public

data Game = MkGame (Map mapSize) Context2D

