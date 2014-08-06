/** @constructor */
var i$VM = function() {
  this.valstack = [];
  this.valstack_top = 0;
  this.valstack_base = 0;

  this.ret = null;

  this.callstack = [];
}

var i$vm;
var i$valstack;
var i$valstack_top;
var i$valstack_base;
var i$ret;
var i$callstack;

/** @constructor */
var i$CON = function(tag,args,app,ev) {
  this.tag = tag;
  this.args = args;
  this.app = app;
  this.ev = ev;
}

var i$SCHED = function(vm) {
  i$vm = vm;
  i$valstack = vm.valstack;
  i$valstack_top = vm.valstack_top;
  i$valstack_base = vm.valstack_base;
  i$ret = vm.ret;
  i$callstack = vm.callstack;
}

var i$SLIDE = function(args) {
  for (var i = 0; i < args; ++i)
    i$valstack[i$valstack_base + i] = i$valstack[i$valstack_top + i];
}

var i$PROJECT = function(val,loc,arity) {
  for (var i = 0; i < arity; ++i)
    i$valstack[i$valstack_base + i + loc] = val.args[i];
}

var i$CALL = function(fun,args) {
  i$callstack.push(args);
  i$callstack.push(fun);
}

var i$ffiWrap = function(fid,oldbase,myoldbase) {
  return function() {
    i$callstack = [];

    var res = fid;

    for(var i = 0; i < arguments.length; ++i) {
      while (res instanceof i$CON) {
        i$valstack_top += 1;
        i$valstack[i$valstack_top] = res;
        i$valstack[i$valstack_top + 1] = arguments[i];
        i$SLIDE(2);
        i$valstack_top = i$valstack_base + 2;
        i$CALL(_idris__123_APPLY0_125_,[oldbase])
        while (i$callstack.length) {
          var func = i$callstack.pop();
          var args = i$callstack.pop();
          func.apply(this,args);
        }
        res = i$ret;
      }
    }

    i$callstack = i$vm.callstack;

    return i$ret;
  }
}

var i$charCode = function(str) {
  if (typeof str == "string")
    return str.charCodeAt(0);
  else
    return str;
}

var i$fromCharCode = function(chr) {
  if (typeof chr == "string")
    return chr;
  else
    return String.fromCharCode(chr);
}
var i$putStr = function(s) {
  console.log(s);
};


var i$systemInfo = function(index) {
  switch(index) {
    case 0:
      return "javascript";
    case 1:
      return navigator.platform;
  }
  return "";
}
var _idris_Prelude_46_Applicative_46__60__36__62_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Applicative_46__60__36__62_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_animate$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65692,[i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65692,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46_animate$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65689,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65689,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_animate$1,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_requestAnimationFrame,[myoldbase]);
}
var _idris_Main_46_animate = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Main_46_animate$0,[oldbase,myoldbase]);
  i$CALL(_idris_Game_46_tick,[myoldbase]);
}
var _idris_Canvas_46_Context2D_46_arc$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$ret = i$valstack[i$valstack_base + 7].arc(i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2], i$valstack[i$valstack_base + 3], i$valstack[i$valstack_base + 4], i$valstack[i$valstack_base + 5]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_arc = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_arc$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Draw_46_canvasDimensions = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base] = 1280.0;
  i$valstack[i$valstack_base + 1] = 1024.0;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$ret = new i$CON(1,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_clearRect$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$ret = i$valstack[i$valstack_base + 6].clearRect(i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2], i$valstack[i$valstack_base + 3], i$valstack[i$valstack_base + 4]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_clearRect = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_clearRect$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Main_46_clickFunc = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = "HELLO";
  i$ret = new i$CON(65701,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65701,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_context2DPtr = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46_createGame$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$0;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Game_46_spawnAPlayer,[oldbase]);
}
var _idris_Main_46_createGame = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_createGame$0,[oldbase,myoldbase]);
  i$CALL(_idris_Level_46_level1,[myoldbase]);
}
var _idris_Draw_46_drawGame = function(oldbase){
  var myoldbase;
  i$valstack_top += 7;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,3);
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = new i$CON(65653,[i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65653,null);
  i$valstack[i$valstack_base + 9] = new i$CON(65668,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65668,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46_drawMap = function(oldbase){
  var myoldbase;
  i$valstack_top += 9;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = i$CON$65679;
  i$valstack[i$valstack_base + 11] = i$CON$65683;
  i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(65664,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65664,null);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 3];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0,[oldbase]);
}
var _idris_Draw_46_drawMapCell = function(oldbase){
  var myoldbase;
  i$valstack_top += 8;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = new i$CON(65653,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65653,null);
  i$valstack[i$valstack_base + 9] = new i$CON(65687,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65687,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46_drawPlayer$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65688,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65688,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46_drawPlayer$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 7];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_Draw_46_drawPlayer$1,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_drawPlayer_95_case,[myoldbase]);
}
var _idris_Draw_46_drawPlayer = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Draw_46_drawPlayer$0,[oldbase,myoldbase]);
  i$CALL(_idris_Physics_46_PhysicsBody_46_position,[myoldbase]);
}
var _idris_Canvas_46_Context2D_46_fillRect$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$ret = i$valstack[i$valstack_base + 6].fillRect(i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2], i$valstack[i$valstack_base + 3], i$valstack[i$valstack_base + 4]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_fillRect = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_fillRect$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Canvas_46_getContext2D = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65658,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65658,null);
  i$valstack[i$valstack_base + 4] = i$CON$65659;
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_getElementById = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65660,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65660,null);
  i$valstack[i$valstack_base + 4] = i$CON$65661;
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Vect_46_head = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
  i$ret = i$valstack[i$valstack_base + 3];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_io_95_bind$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65705,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65705,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_prim_95_io_95_bind,[oldbase]);
}
var _idris_io_95_bind = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_io_95_bind$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_io_95_return = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Level_46_level1 = function(oldbase){
  var myoldbase;
  i$valstack_top += 9;
  i$valstack[i$valstack_base] = 0.0;
  i$valstack[i$valstack_base + 1] = 9.0;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_base] = new i$CON(1,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack[i$valstack_base + 1] = 1.0;
  i$valstack[i$valstack_base + 2] = 9.0;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_base + 2] = 2.0;
  i$valstack[i$valstack_base + 3] = 9.0;
  i$valstack[i$valstack_base + 4] = i$CON$0;
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 3] = 3.0;
  i$valstack[i$valstack_base + 4] = 9.0;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 4] = 4.0;
  i$valstack[i$valstack_base + 5] = 9.0;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 5] = 5.0;
  i$valstack[i$valstack_base + 6] = 9.0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 6] = 6.0;
  i$valstack[i$valstack_base + 7] = 9.0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_base] = new i$CON(1,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack[i$valstack_base + 1] = 2.5;
  i$valstack[i$valstack_base + 2] = 8.5;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_lineWidth$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = i$valstack[i$valstack_base + 3].lineWidth = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_lineWidth = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_lineWidth$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Main_46_main = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$65690;
  i$valstack[i$valstack_base + 2] = new i$CON(65691,[i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65691,null);
  i$valstack[i$valstack_base + 3] = i$CON$65696;
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Player_46_mkPlayer = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46_onClickCanvas = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = $('#canvas').on('click', i$ffiWrap(i$valstack[i$valstack_base],oldbase,myoldbase));
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Physics_46_PhysicsBody_46_position = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_prim_95_io_95_bind = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Applicative_46_pure = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_putStr = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$putStr(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_requestAnimationFrame = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65662,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65662,null);
  i$valstack[i$valstack_base + 4] = i$CON$65663;
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_restore$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$ret = i$valstack[i$valstack_base + 2].restore();
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_restore = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_restore$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_run_95__95_IO = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Canvas_46_Context2D_46_save$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$ret = i$valstack[i$valstack_base + 2].save();
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_save = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_save$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Canvas_46_Context2D_46_scale$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$ret = i$valstack[i$valstack_base + 4].scale(i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_scale = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_scale$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Game_46_spawnAPlayer$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 4]],null,null);
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Game_46_spawnAPlayer$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Game_46_spawnAPlayer$1,[oldbase,myoldbase]);
  i$CALL(_idris_Player_46_mkPlayer,[myoldbase]);
}
var _idris_Game_46_spawnAPlayer = function(oldbase){
  var myoldbase;
  i$valstack_top += 8;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,3);
  i$PROJECT(i$valstack[i$valstack_base + 3],6,2);
  i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Game_46_spawnAPlayer$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Vect_46_head,[myoldbase]);
}
var _idris_Canvas_46_Context2D_46_stroke$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$ret = i$valstack[i$valstack_base + 2].stroke();
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_stroke = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_stroke$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Canvas_46_Context2D_46_strokeRect$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$ret = i$valstack[i$valstack_base + 6].strokeRect(i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2], i$valstack[i$valstack_base + 3], i$valstack[i$valstack_base + 4]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_strokeRect = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_strokeRect$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Game_46_tick = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,3);
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_translate$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$ret = i$valstack[i$valstack_base + 4].translate(i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_Context2D_46_translate = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Canvas_46_Context2D_46_translate$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_Context2D_46_context2DPtr,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46_traverse$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Traversable_46_traverse$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46_traverse$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46_traverse$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46_traverse$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46_traverse = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46_traverse$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_APPLY0_125_$65648 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_Canvas_46_Context2D_46_arc,[oldbase]);
}
var _idris__123_APPLY0_125_$65649 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Canvas_46_Context2D_46_clearRect,[oldbase]);
}
var _idris__123_APPLY0_125_$65650 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Canvas_46_Context2D_46_fillRect,[oldbase]);
}
var _idris__123_APPLY0_125_$65651 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Canvas_46_Context2D_46_lineWidth,[oldbase]);
}
var _idris__123_APPLY0_125_$65652 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46_Context2D_46_restore,[oldbase]);
}
var _idris__123_APPLY0_125_$65653 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46_Context2D_46_save,[oldbase]);
}
var _idris__123_APPLY0_125_$65654 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Canvas_46_Context2D_46_scale,[oldbase]);
}
var _idris__123_APPLY0_125_$65655 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46_Context2D_46_stroke,[oldbase]);
}
var _idris__123_APPLY0_125_$65656 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Canvas_46_Context2D_46_strokeRect,[oldbase]);
}
var _idris__123_APPLY0_125_$65657 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Canvas_46_Context2D_46_translate,[oldbase]);
}
var _idris__123_APPLY0_125_$65658 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_getContext2D0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65659 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_getContext2D1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65660 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_getElementById0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65661 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_getElementById1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65662 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_requestAnimationFrame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65663 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_requestAnimationFrame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65664 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46_drawMapCell,[oldbase]);
}
var _idris__123_APPLY0_125_$65665 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46_drawPlayer,[oldbase]);
}
var _idris__123_APPLY0_125_$65666 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65667 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65668 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65669 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65670 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawGame2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65671 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65672 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65673 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65674 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawGame6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65675 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Draw_46__123_drawGame7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65676 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65677 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65678 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65679 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65680 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65681 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65682 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65683 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65684 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapCell0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65685 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapCell1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65686 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapCell2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65687 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawMapCell3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65688 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawPlayer0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65689 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46_animate,[oldbase]);
}
var _idris__123_APPLY0_125_$65690 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46_clickFunc,[oldbase]);
}
var _idris__123_APPLY0_125_$65691 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_onClickCanvas,[oldbase]);
}
var _idris__123_APPLY0_125_$65692 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_animate0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65693 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65694 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65695 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65696 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65697 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65698 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65699 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Traversable_46__123_Vect_32_n_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65700 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Traversable_46__123_Vect_32_n_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65701 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_putStr,[oldbase]);
}
var _idris__123_APPLY0_125_$65702 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n,[oldbase]);
}
var _idris__123_APPLY0_125_$65703 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_io_95_bind,[oldbase]);
}
var _idris__123_APPLY0_125_$65704 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_io_95_return,[oldbase]);
}
var _idris__123_APPLY0_125_$65705 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris__123_io_95_bind0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65706 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$ret = new i$CON(65702,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65702,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65707 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$ret = new i$CON(65706,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65706,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65708 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$ret = new i$CON(65707,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65707,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65709 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$ret = new i$CON(65708,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65708,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65710 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$ret = new i$CON(65709,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65709,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].app) {
    i$valstack[i$valstack_base].app(oldbase,myoldbase);
  } else {
    i$ret = null;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase;
  };
}
var _idris__123_EVAL0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].ev) {
    i$valstack[i$valstack_base].ev(oldbase,myoldbase);
  } else {
    i$ret = i$valstack[i$valstack_base];
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase;
  };
}
var _idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__123_Vect_32_n_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_animate0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Draw_46_drawGame,[oldbase]);
}
var _idris_Draw_46__123_drawGame0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapCell0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65652,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65652,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawPlayer0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65655,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65655,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_getContext2D0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].getContext('2d');
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_getElementById0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = document.getElementById(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_io_95_bind0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 8];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris_io_95_bind_95_case,[oldbase]);
}
var _idris__123_io_95_bind0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_io_95_bind0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_main0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_requestAnimationFrame0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = window.requestAnimationFrame(i$ffiWrap(i$valstack[i$valstack_base],oldbase,myoldbase));
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_runMain0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_EVAL0_125_,[oldbase]);
}
var _idris__123_runMain0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_runMain0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_run_95__95_IO,[myoldbase]);
}
var _idris__123_runMain0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_runMain0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_main,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65697,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65697,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Traversable_46__123_Vect_32_n_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65666;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65678;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapCell1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = 0.0;
  i$valstack[i$valstack_base + 5] = 0.0;
  i$valstack[i$valstack_base + 6] = 1.0;
  i$valstack[i$valstack_base + 7] = 1.0;
  i$valstack[i$valstack_base + 4] = new i$CON(65650,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65650,null);
  i$valstack[i$valstack_base + 5] = new i$CON(65684,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65684,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_getContext2D1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_getElementById1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main1_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65693;
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Main_46__123_main1_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_animate,[myoldbase]);
}
var _idris_Main_46__123_main1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_main1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_createGame,[myoldbase]);
}
var _idris_Canvas_46__123_requestAnimationFrame1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris_Draw_46__123_drawMap2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0,[oldbase]);
}
var _idris_Draw_46__123_drawMapCell2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = 0.0;
  i$valstack[i$valstack_base + 5] = 0.0;
  i$valstack[i$valstack_base + 6] = 1.0;
  i$valstack[i$valstack_base + 7] = 1.0;
  i$valstack[i$valstack_base + 4] = new i$CON(65656,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65656,null);
  i$valstack[i$valstack_base + 5] = new i$CON(65685,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65685,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65694;
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_main2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_getContext2D,[myoldbase]);
}
var _idris_Draw_46__123_drawGame3_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65670,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65670,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap3_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65680,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65680,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapCell3_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65657,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65657,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65686,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65686,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65695;
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main3_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "canvas";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_main3_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_getElementById,[myoldbase]);
}
var _idris_Draw_46__123_drawGame4_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65671;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap4_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65681;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame5_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65672;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap5_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65682;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame6_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65652,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65652,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame7_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65674,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65674,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame7_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 9;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = i$CON$65669;
  i$valstack[i$valstack_base + 11] = i$CON$65673;
  i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(65665,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65665,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 8;
  i$CALL(_idris_Draw_46__123_drawGame7_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0,[myoldbase]);
}
var _idris_Draw_46__123_drawGame8_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65675,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65675,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame8_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Draw_46__123_drawGame8_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_drawMap,[myoldbase]);
}
var _idris_Draw_46__123_drawGame9_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = 3.125e-2;
  i$valstack[i$valstack_base + 6] = new i$CON(65651,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65651,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65676,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65676,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame10_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = 32.0;
  i$valstack[i$valstack_base + 7] = 32.0;
  i$valstack[i$valstack_base + 6] = new i$CON(65654,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65654,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65677,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65677,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame11_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65667,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65667,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame11_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 14] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 8] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 9] = i$valstack[i$valstack_base + 14];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 10;
  i$CALL(_idris_Draw_46__123_drawGame11_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_drawGame_95_case,[myoldbase]);
}
var _idris_Draw_46__123_drawGame11_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 11;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Draw_46__123_drawGame11_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_canvasDimensions,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0 = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65698,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65698,null);
  i$ret = new i$CON(65703,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65703,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$9 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$10,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$9,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  i$valstack[i$valstack_base + 15] = null;
  i$valstack[i$valstack_base + 15] = new i$CON(65710,[i$valstack[i$valstack_base + 15]],_idris__123_APPLY0_125_$65710,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 6;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$8,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Traversable_46_traverse,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$7,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$6,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_base + 13] = i$CON$65700;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$11 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0 = function(oldbase){
  var myoldbase;
  i$valstack_top += 8;
  switch(i$valstack[i$valstack_base + 7].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 7],8,2);
      i$valstack[i$valstack_base + 10] = null;
      i$valstack[i$valstack_base + 11] = null;
      i$valstack[i$valstack_base + 12] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
      myoldbase = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      myoldbase = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0$11,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
      break;
  };
}
var _idris__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n = function(oldbase){
  var myoldbase;
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 7] = i$valstack[i$valstack_base + 6];
  i$SLIDE(8);
  i$valstack_top = i$valstack_base + 8;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0,[oldbase]);
}
var _idris_Draw_46_drawGame_95_case = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$PROJECT(i$valstack[i$valstack_base + 9],10,2);
  i$PROJECT(i$valstack[i$valstack_base + 11],12,2);
  i$valstack[i$valstack_base + 14] = 0.0;
  i$valstack[i$valstack_base + 15] = 0.0;
  i$ret = new i$CON(65649,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 12]],_idris__123_APPLY0_125_$65649,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46_drawPlayer_95_case = function(oldbase){
  var myoldbase;
  i$valstack_top += 7;
  i$PROJECT(i$valstack[i$valstack_base + 4],5,2);
  i$PROJECT(i$valstack[i$valstack_base + 6],7,2);
  i$valstack[i$valstack_base + 9] = 0.4;
  i$valstack[i$valstack_base + 10] = 0.0;
  i$valstack[i$valstack_base + 11] = 6.283185307179586;
  i$ret = new i$CON(65648,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65648,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_io_95_bind_95_case = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var i$CON$0 = new i$CON(0,[],null,null);
var i$CON$65659 = new i$CON(65659,[],_idris__123_APPLY0_125_$65659,null);
var i$CON$65661 = new i$CON(65661,[],_idris__123_APPLY0_125_$65661,null);
var i$CON$65663 = new i$CON(65663,[],_idris__123_APPLY0_125_$65663,null);
var i$CON$65666 = new i$CON(65666,[],_idris__123_APPLY0_125_$65666,null);
var i$CON$65669 = new i$CON(65669,[],_idris__123_APPLY0_125_$65669,null);
var i$CON$65671 = new i$CON(65671,[],_idris__123_APPLY0_125_$65671,null);
var i$CON$65672 = new i$CON(65672,[],_idris__123_APPLY0_125_$65672,null);
var i$CON$65673 = new i$CON(65673,[],_idris__123_APPLY0_125_$65673,null);
var i$CON$65678 = new i$CON(65678,[],_idris__123_APPLY0_125_$65678,null);
var i$CON$65679 = new i$CON(65679,[],_idris__123_APPLY0_125_$65679,null);
var i$CON$65681 = new i$CON(65681,[],_idris__123_APPLY0_125_$65681,null);
var i$CON$65682 = new i$CON(65682,[],_idris__123_APPLY0_125_$65682,null);
var i$CON$65683 = new i$CON(65683,[],_idris__123_APPLY0_125_$65683,null);
var i$CON$65690 = new i$CON(65690,[],_idris__123_APPLY0_125_$65690,null);
var i$CON$65693 = new i$CON(65693,[],_idris__123_APPLY0_125_$65693,null);
var i$CON$65694 = new i$CON(65694,[],_idris__123_APPLY0_125_$65694,null);
var i$CON$65695 = new i$CON(65695,[],_idris__123_APPLY0_125_$65695,null);
var i$CON$65696 = new i$CON(65696,[],_idris__123_APPLY0_125_$65696,null);
var i$CON$65700 = new i$CON(65700,[],_idris__123_APPLY0_125_$65700,null);
var main = function(){
if (typeof document != "undefined" && (document.readyState == "complete" || document.readyState == "loaded")) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain0_125_(0);
    while (i$callstack.length) {
      var func = i$callstack.pop();
      var args = i$callstack.pop();
      func.apply(this,args);
    };
  } else if (typeof window != "undefined") {
    window.addEventListener("DOMContentLoaded",function(){
  var vm = new i$VM();
  i$SCHED(vm);
  _idris__123_runMain0_125_(0);
  while (i$callstack.length) {
    var func = i$callstack.pop();
    var args = i$callstack.pop();
    func.apply(this,args);
  };
}
,false);
  } else if (true) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain0_125_(0);
    while (i$callstack.length) {
      var func = i$callstack.pop();
      var args = i$callstack.pop();
      func.apply(this,args);
    };
  }
}
main()