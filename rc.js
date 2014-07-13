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
var _idris_Prelude_46_Applicative_46__36__62_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 10] = new i$CON(65730,[i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65730,null);
  i$valstack[i$valstack_base + 8] = new i$CON(65729,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65729,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46_map,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$1,[oldbase,myoldbase]);
  i$CALL(_idris__64__64_constructor_32_of_32_Prelude_46_Applicative_46_Applicative_35_Functor_32_f,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__36__62_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__60__36__62_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Applicative_46__60__36__62_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$PROJECT(i$valstack[i$valstack_base + 3],4,3);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__64__64_constructor_32_of_32_Prelude_46_Applicative_46_Applicative_35_Functor_32_f = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
  i$ret = i$valstack[i$valstack_base + 2];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46_animate$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65722,[i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65722,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46_animate = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65719,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65719,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_animate$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_requestAnimationFrame,[myoldbase]);
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
  i$ret = new i$CON(65735,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65735,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Basics_46_const = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 2];
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
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 2] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Game_46_spawnAPlayer,[oldbase]);
}
var _idris_Main_46_createGame = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = null;
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_createGame$0,[oldbase,myoldbase]);
  i$CALL(_idris_Level_46_level1,[myoldbase]);
}
var _idris_Draw_46_drawGame = function(oldbase){
  var myoldbase;
  i$valstack_top += 7;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = new i$CON(65635,[i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65635,null);
  i$valstack[i$valstack_base + 8] = new i$CON(65654,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65654,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46_drawMap = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = new i$CON(65635,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65635,null);
  i$valstack[i$valstack_base + 8] = new i$CON(65680,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65680,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46_drawMapCell = function(oldbase){
  var myoldbase;
  i$valstack_top += 6;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 2] = 0.0;
      i$valstack[i$valstack_base + 3] = 0.0;
      i$valstack[i$valstack_base + 4] = 1.0;
      i$valstack[i$valstack_base + 5] = 1.0;
      i$ret = new i$CON(65638,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65638,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase;
      break;
    case 1:
      i$valstack[i$valstack_base + 2] = null;
      i$valstack[i$valstack_base + 3] = null;
      i$valstack[i$valstack_base + 4] = 0.0;
      i$valstack[i$valstack_base + 5] = 0.0;
      i$valstack[i$valstack_base + 6] = 1.0;
      i$valstack[i$valstack_base + 7] = 1.0;
      i$valstack[i$valstack_base + 4] = new i$CON(65638,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65638,null);
      i$valstack[i$valstack_base + 5] = new i$CON(65689,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65689,null);
      i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65738,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase;
      break;
  };
}
var _idris_Draw_46_drawMapRow = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = new i$CON(65635,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65635,null);
  i$valstack[i$valstack_base + 6] = new i$CON(65706,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65706,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46_drawPlayer = function(oldbase){
  var myoldbase;
  i$valstack_top += 9;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = 0.4;
  i$valstack[i$valstack_base + 9] = 0.0;
  i$valstack[i$valstack_base + 10] = 6.283185307179586;
  i$valstack[i$valstack_base + 8] = new i$CON(65630,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],_idris__123_APPLY0_125_$65630,null);
  i$valstack[i$valstack_base + 9] = new i$CON(65715,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65715,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
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
  i$valstack[i$valstack_base + 3] = new i$CON(65640,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65640,null);
  i$valstack[i$valstack_base + 4] = i$CON$65641;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_getElementById = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65642,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65642,null);
  i$valstack[i$valstack_base + 4] = i$CON$65643;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
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
var _idris_Prelude_46_Basics_46_id = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_io_95_bind$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65740,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65740,null);
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
  i$valstack_top += 20;
  i$valstack[i$valstack_base] = i$CON$0;
  i$valstack[i$valstack_base + 1] = i$CON$0;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 4] = i$CON$0;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_base] = new i$CON(1,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack[i$valstack_base + 1] = i$CON$0;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 4] = i$CON$0;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 4] = i$CON$0;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 12] = i$CON$0;
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 4] = i$CON$0;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 12] = i$CON$0;
  i$valstack[i$valstack_base + 13] = i$CON$0;
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 4] = i$CON$0;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 12] = i$CON$0;
  i$valstack[i$valstack_base + 13] = i$CON$0;
  i$valstack[i$valstack_base + 14] = i$CON$0;
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 12] = i$CON$0;
  i$valstack[i$valstack_base + 13] = i$CON$0;
  i$valstack[i$valstack_base + 14] = i$CON$0;
  i$valstack[i$valstack_base + 15] = i$CON$0;
  i$valstack[i$valstack_base + 14] = new i$CON(1,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15]],null,null);
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 6] = i$CON$0;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 12] = i$CON$0;
  i$valstack[i$valstack_base + 13] = i$CON$0;
  i$valstack[i$valstack_base + 14] = i$CON$0;
  i$valstack[i$valstack_base + 15] = i$CON$0;
  i$valstack[i$valstack_base + 16] = i$CON$0;
  i$valstack[i$valstack_base + 15] = new i$CON(1,[i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16]],null,null);
  i$valstack[i$valstack_base + 14] = new i$CON(1,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15]],null,null);
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 12] = i$CON$0;
  i$valstack[i$valstack_base + 13] = i$CON$0;
  i$valstack[i$valstack_base + 14] = i$CON$0;
  i$valstack[i$valstack_base + 15] = i$CON$0;
  i$valstack[i$valstack_base + 16] = i$CON$0;
  i$valstack[i$valstack_base + 17] = i$CON$0;
  i$valstack[i$valstack_base + 16] = new i$CON(1,[i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 17]],null,null);
  i$valstack[i$valstack_base + 15] = new i$CON(1,[i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16]],null,null);
  i$valstack[i$valstack_base + 14] = new i$CON(1,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15]],null,null);
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 8] = i$CON$0;
  i$valstack[i$valstack_base + 9] = i$CON$0;
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 11] = i$CON$0;
  i$valstack[i$valstack_base + 12] = i$CON$0;
  i$valstack[i$valstack_base + 13] = i$CON$0;
  i$valstack[i$valstack_base + 14] = i$CON$0;
  i$valstack[i$valstack_base + 15] = i$CON$0;
  i$valstack[i$valstack_base + 16] = i$CON$0;
  i$valstack[i$valstack_base + 17] = i$CON$0;
  i$valstack[i$valstack_base + 18] = i$CON$0;
  i$valstack[i$valstack_base + 17] = new i$CON(1,[i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18]],null,null);
  i$valstack[i$valstack_base + 16] = new i$CON(1,[i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 17]],null,null);
  i$valstack[i$valstack_base + 15] = new i$CON(1,[i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16]],null,null);
  i$valstack[i$valstack_base + 14] = new i$CON(1,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15]],null,null);
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 9] = i$CON$1;
  i$valstack[i$valstack_base + 10] = i$CON$1;
  i$valstack[i$valstack_base + 11] = i$CON$1;
  i$valstack[i$valstack_base + 12] = i$CON$1;
  i$valstack[i$valstack_base + 13] = i$CON$1;
  i$valstack[i$valstack_base + 14] = i$CON$1;
  i$valstack[i$valstack_base + 15] = i$CON$1;
  i$valstack[i$valstack_base + 16] = i$CON$1;
  i$valstack[i$valstack_base + 17] = i$CON$1;
  i$valstack[i$valstack_base + 18] = i$CON$1;
  i$valstack[i$valstack_base + 19] = i$CON$0;
  i$valstack[i$valstack_base + 18] = new i$CON(1,[i$valstack[i$valstack_base + 18],i$valstack[i$valstack_base + 19]],null,null);
  i$valstack[i$valstack_base + 17] = new i$CON(1,[i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18]],null,null);
  i$valstack[i$valstack_base + 16] = new i$CON(1,[i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 17]],null,null);
  i$valstack[i$valstack_base + 15] = new i$CON(1,[i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 16]],null,null);
  i$valstack[i$valstack_base + 14] = new i$CON(1,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15]],null,null);
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14]],null,null);
  i$valstack[i$valstack_base + 12] = new i$CON(1,[i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 10] = new i$CON(1,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 10] = i$CON$0;
  i$valstack[i$valstack_base + 9] = new i$CON(1,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],null,null);
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(1,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_base + 2] = new i$CON(1,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_base + 1] = new i$CON(1,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],null,null);
  i$valstack[i$valstack_base] = new i$CON(1,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack[i$valstack_base + 1] = 2.0;
  i$valstack[i$valstack_base + 2] = 8.0;
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
  i$valstack[i$valstack_base + 2] = i$CON$65720;
  i$valstack[i$valstack_base + 2] = new i$CON(65721,[i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65721,null);
  i$valstack[i$valstack_base + 3] = i$CON$65726;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Functor_46_map$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Functor_46_map = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46_map$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_onClickCanvas = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = $('#canvas').on('click', i$ffiWrap(i$valstack[i$valstack_base],oldbase,myoldbase));
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
  i$valstack_top += 2;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,3);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
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
  i$valstack[i$valstack_base + 3] = new i$CON(65644,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65644,null);
  i$valstack[i$valstack_base + 4] = i$CON$65645;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
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
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 3]],null,null);
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Game_46_spawnAPlayer$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 13];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 6;
  i$CALL(_idris_Game_46_spawnAPlayer$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0,[myoldbase]);
}
var _idris_Game_46_spawnAPlayer = function(oldbase){
  var myoldbase;
  i$valstack_top += 13;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,3);
  i$PROJECT(i$valstack[i$valstack_base + 2],5,2);
  i$valstack[i$valstack_base + 7] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = i$CON$65716;
  i$valstack[i$valstack_base + 13] = null;
  i$valstack[i$valstack_base + 14] = null;
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
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
var _idris__123_APPLY0_125_$65630 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65631 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65632 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65633 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Canvas_46_Context2D_46_lineWidth,[oldbase]);
}
var _idris__123_APPLY0_125_$65634 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46_Context2D_46_restore,[oldbase]);
}
var _idris__123_APPLY0_125_$65635 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46_Context2D_46_save,[oldbase]);
}
var _idris__123_APPLY0_125_$65636 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Canvas_46_Context2D_46_scale,[oldbase]);
}
var _idris__123_APPLY0_125_$65637 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46_Context2D_46_stroke,[oldbase]);
}
var _idris__123_APPLY0_125_$65638 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65639 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Canvas_46_Context2D_46_translate,[oldbase]);
}
var _idris__123_APPLY0_125_$65640 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_getContext2D0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65641 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_getContext2D1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65642 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_getElementById0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65643 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_getElementById1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65644 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_requestAnimationFrame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65645 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_requestAnimationFrame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65646 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46_drawPlayer,[oldbase]);
}
var _idris__123_APPLY0_125_$65647 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawGame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65648 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65649 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawGame11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65650 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Draw_46__123_drawGame12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65651 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65652 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65653 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65654 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Draw_46__123_drawGame16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65655 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawGame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65656 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65657 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65658 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65659 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65660 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65661 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawGame7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65662 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65663 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawGame9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65664 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65665 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65666 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65667 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65668 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65669 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65670 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65671 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65672 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65673 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65674 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65675 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65676 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65677 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65678 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65679 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65680 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Draw_46__123_drawMap24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65681 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65682 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65683 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65684 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65685 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65686 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMap7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65687 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65688 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMap9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65689 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapCell0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65690 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65691 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65692 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65693 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65694 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65695 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65696 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65697 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65698 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65699 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65700 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65701 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65702 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65703 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65704 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65705 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65706 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Draw_46__123_drawMapRow24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65707 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65708 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65709 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65710 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65711 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65712 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawMapRow7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65713 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65714 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Draw_46__123_drawMapRow9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65715 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46__123_drawPlayer0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65716 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Game_46__123_spawnAPlayer0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65717 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris__64_Prelude_46_Functor_46_Functor_36_List,[oldbase]);
}
var _idris__123_APPLY0_125_$65718 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris__64_Prelude_46_Traversable_46_Traversable_36_List,[oldbase]);
}
var _idris__123_APPLY0_125_$65719 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Main_46_animate,[oldbase]);
}
var _idris__123_APPLY0_125_$65720 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46_clickFunc,[oldbase]);
}
var _idris__123_APPLY0_125_$65721 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_onClickCanvas,[oldbase]);
}
var _idris__123_APPLY0_125_$65722 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_animate0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65723 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65724 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65725 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65726 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65727 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65728 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65729 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Basics_46_const,[oldbase]);
}
var _idris__123_APPLY0_125_$65730 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Basics_46_id,[oldbase]);
}
var _idris__123_APPLY0_125_$65731 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Traversable_46__123_List_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65732 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Traversable_46__123_List_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65733 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Traversable_46__123_Vect_32_n_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65734 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Prelude_46_Traversable_46__123_Vect_32_n_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65735 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_putStr,[oldbase]);
}
var _idris__123_APPLY0_125_$65736 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris__64_Prelude_46_Functor_46_Functor_36_Vect_32_n,[oldbase]);
}
var _idris__123_APPLY0_125_$65737 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65738 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65739 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_io_95_return,[oldbase]);
}
var _idris__123_APPLY0_125_$65740 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris__123_io_95_bind0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65741 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$ret = new i$CON(65717,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65717,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65742 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$ret = new i$CON(65718,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65718,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65743 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$ret = new i$CON(65736,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65736,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65744 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$ret = new i$CON(65737,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65737,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65745 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$ret = new i$CON(65741,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65741,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65746 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$ret = new i$CON(65742,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65742,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65747 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$ret = new i$CON(65743,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65743,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65748 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$ret = new i$CON(65744,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65744,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65749 = function(oldbase,myoldbase){
  i$ret = new i$CON(65745,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65745,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65750 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$ret = new i$CON(65746,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65746,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65751 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$ret = new i$CON(65747,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65747,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65752 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$ret = new i$CON(65748,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65748,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65753 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$ret = new i$CON(65750,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65750,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65754 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$ret = new i$CON(65752,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65752,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65755 = function(oldbase,myoldbase){
  i$ret = new i$CON(65753,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65753,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris__123_APPLY0_125_$65756 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$ret = new i$CON(65754,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65754,null);
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
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65739,null);
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
var _idris_Prelude_46_Traversable_46__123_List_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
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
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Draw_46_drawGame,[oldbase]);
}
var _idris_Draw_46__123_drawGame0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Draw_46__123_drawGame0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Draw_46__123_drawMap0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Draw_46__123_drawMap0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Draw_46__123_drawMapCell0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 2] = 0.0;
  i$valstack[i$valstack_base + 3] = 0.0;
  i$valstack[i$valstack_base + 4] = 1.0;
  i$valstack[i$valstack_base + 5] = 1.0;
  i$ret = new i$CON(65632,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65632,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Draw_46__123_drawMapRow0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Draw_46__123_drawPlayer0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65637,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65637,null);
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
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65739,null);
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
var _idris_Game_46__123_spawnAPlayer0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = 0.5;
  i$ret = i$valstack[i$valstack_base + 1] + i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Applicative_46__123_IO_32_instance_32_of_32_Prelude_46_Applicative_46_Applicative_44__32_method_32__60__36__62_1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65727,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65727,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Traversable_46__123_List_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65731,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65731,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Traversable_46__123_Vect_32_n_32_instance_32_of_32_Prelude_46_Traversable_46_Traversable_44__32_method_32_traverse1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65733,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65733,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65647,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65647,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65664,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65664,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65690,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65690,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_getContext2D1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_getElementById1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main1_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65723;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
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
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65655,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65655,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65675,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65675,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65701,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65701,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65724;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
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
  i$ret = i$CON$65656;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap3_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65681;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow3_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65707;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65725;
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
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
  i$ret = i$CON$65657;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap4_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65682;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow4_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65708;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame5_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap5_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow5_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame6_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65659;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap6_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65684;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow6_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65710;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame7_125_ = function(oldbase){
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
var _idris_Draw_46__123_drawMap7_125_ = function(oldbase){
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
var _idris_Draw_46__123_drawMapRow7_125_ = function(oldbase){
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
var _idris_Draw_46__123_drawGame8_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65661,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65661,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap8_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65686,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65686,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow8_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65712,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65712,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame9_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65662;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap9_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65687;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow9_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65713;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame10_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65663;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap10_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65688;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow10_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65714;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame11_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65634,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65634,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap11_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap11_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Draw_46__123_drawMap11_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Draw_46__123_drawMapRow11_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow11_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Draw_46__123_drawMapRow11_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Draw_46__123_drawGame12_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65649,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65649,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame12_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 8;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = i$CON$65658;
  i$valstack[i$valstack_base + 9] = i$CON$65660;
  i$valstack[i$valstack_base + 10] = i$CON$65648;
  i$valstack[i$valstack_base + 8] = new i$CON(0,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10]],null,null);
  i$valstack[i$valstack_base + 9] = new i$CON(65646,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65646,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 6;
  i$CALL(_idris_Draw_46__123_drawGame12_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0,[myoldbase]);
}
var _idris_Draw_46__123_drawMap12_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65666,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65666,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow12_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = new i$CON(65692,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65692,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame13_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65650,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65650,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame13_125_ = function(oldbase){
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
  i$CALL(_idris_Draw_46__123_drawGame13_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_drawMap,[myoldbase]);
}
var _idris_Draw_46__123_drawMap13_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65667,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65667,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow13_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65693,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65693,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame14_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = 3.125e-2;
  i$valstack[i$valstack_base + 6] = new i$CON(65633,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65633,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65651,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65651,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap14_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65668;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow14_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65694;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame15_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = 32.0;
  i$valstack[i$valstack_base + 7] = 32.0;
  i$valstack[i$valstack_base + 6] = new i$CON(65636,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65636,null);
  i$valstack[i$valstack_base + 7] = new i$CON(65652,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65652,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap15_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65669;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow15_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65695;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame16_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = new i$CON(65653,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65653,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawGame16_125_$0 = function(oldbase,myoldbase){
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
  i$CALL(_idris_Draw_46__123_drawGame16_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_drawGame_95_case,[myoldbase]);
}
var _idris_Draw_46__123_drawGame16_125_ = function(oldbase){
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
  i$CALL(_idris_Draw_46__123_drawGame16_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_canvasDimensions,[myoldbase]);
}
var _idris_Draw_46__123_drawMap16_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow16_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap17_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65671;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow17_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65697;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap18_125_ = function(oldbase){
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
var _idris_Draw_46__123_drawMapRow18_125_ = function(oldbase){
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
var _idris_Draw_46__123_drawMap19_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65673,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65673,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow19_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65699,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65699,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap20_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65674;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow20_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65700;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap21_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65676;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow21_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = i$CON$65702;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap22_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = 0.0;
  i$valstack[i$valstack_base + 8] = 1.0;
  i$valstack[i$valstack_base + 7] = new i$CON(65639,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65639,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_,[oldbase]);
}
var _idris_Draw_46__123_drawMap22_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 7;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = i$CON$65670;
  i$valstack[i$valstack_base + 6] = i$CON$65672;
  i$valstack[i$valstack_base + 7] = i$CON$65677;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Draw_46__123_drawMap22_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_drawMapRow,[myoldbase]);
}
var _idris_Draw_46__123_drawMapRow22_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = 1.0;
  i$valstack[i$valstack_base + 8] = 0.0;
  i$valstack[i$valstack_base + 7] = new i$CON(65639,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65639,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_Applicative_46__36__62_,[oldbase]);
}
var _idris_Draw_46__123_drawMapRow22_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 7;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = i$CON$65696;
  i$valstack[i$valstack_base + 6] = i$CON$65698;
  i$valstack[i$valstack_base + 7] = i$CON$65703;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Draw_46__123_drawMapRow22_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Draw_46_drawMapCell,[myoldbase]);
}
var _idris_Draw_46__123_drawMap23_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65634,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65634,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow23_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$ret = new i$CON(65634,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65634,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap24_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65679,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65679,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMap24_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 10;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = i$CON$65683;
  i$valstack[i$valstack_base + 11] = i$CON$65685;
  i$valstack[i$valstack_base + 12] = i$CON$65665;
  i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(65678,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65678,null);
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
  i$CALL(_idris_Draw_46__123_drawMap24_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0,[myoldbase]);
}
var _idris_Draw_46__123_drawMapRow24_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65705,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65705,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Draw_46__123_drawMapRow24_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 10;
  i$valstack[i$valstack_base + 3] = null;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = i$CON$65709;
  i$valstack[i$valstack_base + 11] = i$CON$65711;
  i$valstack[i$valstack_base + 12] = i$CON$65691;
  i$valstack[i$valstack_base + 10] = new i$CON(0,[i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12]],null,null);
  i$valstack[i$valstack_base + 11] = new i$CON(65704,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65704,null);
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
  i$CALL(_idris_Draw_46__123_drawMapRow24_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_Vect_32_n_58__33_traverse_58_0,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__64_Prelude_46_Applicative_46_Applicative_36_IO_58__33__60__36__62__58_0 = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = new i$CON(65728,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65728,null);
  i$ret = new i$CON(65738,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65738,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = i$CON$65749;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46_map,[myoldbase]);
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0 = function(oldbase){
  var myoldbase;
  i$valstack_top += 7;
  switch(i$valstack[i$valstack_base + 3].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      myoldbase = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0$0,[oldbase,myoldbase]);
      i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
      break;
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase;
      break;
  };
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 12] = new i$CON(65751,[i$valstack[i$valstack_base + 12]],_idris__123_APPLY0_125_$65751,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46_map,[myoldbase]);
}
var _idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0 = function(oldbase){
  var myoldbase;
  i$valstack_top += 7;
  switch(i$valstack[i$valstack_base + 5].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 5],6,2);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
      myoldbase = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 2;
      i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0$0,[oldbase,myoldbase]);
      i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
      break;
    case 0:
      i$ret = i$CON$0;
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase;
      break;
  };
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$9 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$10,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$9,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_base + 12] = null;
  i$valstack[i$valstack_base + 13] = i$CON$65755;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 6;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$8,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Traversable_46_traverse,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$7,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$6,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$5,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$4,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_base + 11] = i$CON$65732;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$3,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = null;
  i$valstack[i$valstack_base + 10] = null;
  i$valstack[i$valstack_base + 11] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_,[myoldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$11 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_base + 7] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0 = function(oldbase){
  var myoldbase;
  i$valstack_top += 8;
  switch(i$valstack[i$valstack_base + 5].tag){
    case 1:
      i$PROJECT(i$valstack[i$valstack_base + 5],6,2);
      i$valstack[i$valstack_base + 8] = null;
      i$valstack[i$valstack_base + 9] = null;
      i$valstack[i$valstack_base + 10] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
      myoldbase = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Applicative_46__60__36__62_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 6] = null;
      i$valstack[i$valstack_base + 7] = null;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
      myoldbase = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 3;
      i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0$11,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
      break;
  };
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
  i$valstack[i$valstack_base + 15] = new i$CON(65756,[i$valstack[i$valstack_base + 15]],_idris__123_APPLY0_125_$65756,null);
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
  i$valstack[i$valstack_base + 13] = i$CON$65734;
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
var _idris__64_Prelude_46_Functor_46_Functor_36_List = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 4] = null;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_List_58__33_map_58_0,[oldbase]);
}
var _idris__64_Prelude_46_Functor_46_Functor_36_Vect_32_n = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = null;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 4];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_Functor_46__64_Prelude_46_Functor_46_Functor_36_Vect_32_n_58__33_map_58_0,[oldbase]);
}
var _idris__64_Prelude_46_Traversable_46_Traversable_36_List = function(oldbase){
  var myoldbase;
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 6] = null;
  i$valstack[i$valstack_base + 7] = null;
  i$valstack[i$valstack_base + 8] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_Prelude_46_Traversable_46__64_Prelude_46_Traversable_46_Traversable_36_List_58__33_traverse_58_0,[oldbase]);
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
  i$ret = new i$CON(65631,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 12]],_idris__123_APPLY0_125_$65631,null);
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
var i$CON$1 = new i$CON(1,[],null,null);
var i$CON$65641 = new i$CON(65641,[],_idris__123_APPLY0_125_$65641,null);
var i$CON$65643 = new i$CON(65643,[],_idris__123_APPLY0_125_$65643,null);
var i$CON$65645 = new i$CON(65645,[],_idris__123_APPLY0_125_$65645,null);
var i$CON$65648 = new i$CON(65648,[],_idris__123_APPLY0_125_$65648,null);
var i$CON$65656 = new i$CON(65656,[],_idris__123_APPLY0_125_$65656,null);
var i$CON$65657 = new i$CON(65657,[],_idris__123_APPLY0_125_$65657,null);
var i$CON$65658 = new i$CON(65658,[],_idris__123_APPLY0_125_$65658,null);
var i$CON$65659 = new i$CON(65659,[],_idris__123_APPLY0_125_$65659,null);
var i$CON$65660 = new i$CON(65660,[],_idris__123_APPLY0_125_$65660,null);
var i$CON$65662 = new i$CON(65662,[],_idris__123_APPLY0_125_$65662,null);
var i$CON$65663 = new i$CON(65663,[],_idris__123_APPLY0_125_$65663,null);
var i$CON$65665 = new i$CON(65665,[],_idris__123_APPLY0_125_$65665,null);
var i$CON$65668 = new i$CON(65668,[],_idris__123_APPLY0_125_$65668,null);
var i$CON$65669 = new i$CON(65669,[],_idris__123_APPLY0_125_$65669,null);
var i$CON$65670 = new i$CON(65670,[],_idris__123_APPLY0_125_$65670,null);
var i$CON$65671 = new i$CON(65671,[],_idris__123_APPLY0_125_$65671,null);
var i$CON$65672 = new i$CON(65672,[],_idris__123_APPLY0_125_$65672,null);
var i$CON$65674 = new i$CON(65674,[],_idris__123_APPLY0_125_$65674,null);
var i$CON$65676 = new i$CON(65676,[],_idris__123_APPLY0_125_$65676,null);
var i$CON$65677 = new i$CON(65677,[],_idris__123_APPLY0_125_$65677,null);
var i$CON$65681 = new i$CON(65681,[],_idris__123_APPLY0_125_$65681,null);
var i$CON$65682 = new i$CON(65682,[],_idris__123_APPLY0_125_$65682,null);
var i$CON$65683 = new i$CON(65683,[],_idris__123_APPLY0_125_$65683,null);
var i$CON$65684 = new i$CON(65684,[],_idris__123_APPLY0_125_$65684,null);
var i$CON$65685 = new i$CON(65685,[],_idris__123_APPLY0_125_$65685,null);
var i$CON$65687 = new i$CON(65687,[],_idris__123_APPLY0_125_$65687,null);
var i$CON$65688 = new i$CON(65688,[],_idris__123_APPLY0_125_$65688,null);
var i$CON$65691 = new i$CON(65691,[],_idris__123_APPLY0_125_$65691,null);
var i$CON$65694 = new i$CON(65694,[],_idris__123_APPLY0_125_$65694,null);
var i$CON$65695 = new i$CON(65695,[],_idris__123_APPLY0_125_$65695,null);
var i$CON$65696 = new i$CON(65696,[],_idris__123_APPLY0_125_$65696,null);
var i$CON$65697 = new i$CON(65697,[],_idris__123_APPLY0_125_$65697,null);
var i$CON$65698 = new i$CON(65698,[],_idris__123_APPLY0_125_$65698,null);
var i$CON$65700 = new i$CON(65700,[],_idris__123_APPLY0_125_$65700,null);
var i$CON$65702 = new i$CON(65702,[],_idris__123_APPLY0_125_$65702,null);
var i$CON$65703 = new i$CON(65703,[],_idris__123_APPLY0_125_$65703,null);
var i$CON$65707 = new i$CON(65707,[],_idris__123_APPLY0_125_$65707,null);
var i$CON$65708 = new i$CON(65708,[],_idris__123_APPLY0_125_$65708,null);
var i$CON$65709 = new i$CON(65709,[],_idris__123_APPLY0_125_$65709,null);
var i$CON$65710 = new i$CON(65710,[],_idris__123_APPLY0_125_$65710,null);
var i$CON$65711 = new i$CON(65711,[],_idris__123_APPLY0_125_$65711,null);
var i$CON$65713 = new i$CON(65713,[],_idris__123_APPLY0_125_$65713,null);
var i$CON$65714 = new i$CON(65714,[],_idris__123_APPLY0_125_$65714,null);
var i$CON$65716 = new i$CON(65716,[],_idris__123_APPLY0_125_$65716,null);
var i$CON$65720 = new i$CON(65720,[],_idris__123_APPLY0_125_$65720,null);
var i$CON$65723 = new i$CON(65723,[],_idris__123_APPLY0_125_$65723,null);
var i$CON$65724 = new i$CON(65724,[],_idris__123_APPLY0_125_$65724,null);
var i$CON$65725 = new i$CON(65725,[],_idris__123_APPLY0_125_$65725,null);
var i$CON$65726 = new i$CON(65726,[],_idris__123_APPLY0_125_$65726,null);
var i$CON$65732 = new i$CON(65732,[],_idris__123_APPLY0_125_$65732,null);
var i$CON$65734 = new i$CON(65734,[],_idris__123_APPLY0_125_$65734,null);
var i$CON$65749 = new i$CON(65749,[],_idris__123_APPLY0_125_$65749,null);
var i$CON$65755 = new i$CON(65755,[],_idris__123_APPLY0_125_$65755,null);
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