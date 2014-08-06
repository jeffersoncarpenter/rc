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
var _idris_Main_46_clickFunc = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = "HELLO";
  i$ret = new i$CON(65657,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65657,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_getContext2D = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65648,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65648,null);
  i$valstack[i$valstack_base + 4] = i$CON$65649;
  i$ret = new i$CON(65658,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65658,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46_getElementById = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = new i$CON(65650,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65650,null);
  i$valstack[i$valstack_base + 4] = i$CON$65651;
  i$ret = new i$CON(65658,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65658,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_io_95_bind$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_base + 8] = new i$CON(65660,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65660,null);
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
var _idris_Main_46_main = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base] = null;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$65652;
  i$valstack[i$valstack_base + 2] = new i$CON(65653,[i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65653,null);
  i$valstack[i$valstack_base + 3] = i$CON$65656;
  i$ret = new i$CON(65658,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65658,null);
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
var _idris_prim_95_io_95_bind = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
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
var _idris__123_APPLY0_125_$65648 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_getContext2D0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65649 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_getContext2D1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65650 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Canvas_46__123_getElementById0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65651 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Canvas_46__123_getElementById1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65652 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46_clickFunc,[oldbase]);
}
var _idris__123_APPLY0_125_$65653 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46_onClickCanvas,[oldbase]);
}
var _idris__123_APPLY0_125_$65654 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65655 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65656 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65657 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_putStr,[oldbase]);
}
var _idris__123_APPLY0_125_$65658 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65659 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_io_95_return,[oldbase]);
}
var _idris__123_APPLY0_125_$65660 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris__123_io_95_bind0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
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
  i$ret = new i$CON(65659,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65659,null);
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
var _idris_Canvas_46__123_getContext2D1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = i$CON$0;
  i$ret = new i$CON(65659,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65659,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Canvas_46__123_getElementById1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 1] = null;
  i$ret = new i$CON(65659,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65659,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65654;
  i$ret = new i$CON(65658,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65658,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main1_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_main1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_getContext2D,[myoldbase]);
}
var _idris_Main_46__123_main2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65655;
  i$ret = new i$CON(65658,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65658,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase;
}
var _idris_Main_46__123_main2_125_ = function(oldbase){
  var myoldbase;
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 1] = null;
  i$valstack[i$valstack_base + 2] = null;
  i$valstack[i$valstack_base + 3] = "canvas";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  myoldbase = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_main2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Canvas_46_getElementById,[myoldbase]);
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
var i$CON$65649 = new i$CON(65649,[],_idris__123_APPLY0_125_$65649,null);
var i$CON$65651 = new i$CON(65651,[],_idris__123_APPLY0_125_$65651,null);
var i$CON$65652 = new i$CON(65652,[],_idris__123_APPLY0_125_$65652,null);
var i$CON$65654 = new i$CON(65654,[],_idris__123_APPLY0_125_$65654,null);
var i$CON$65655 = new i$CON(65655,[],_idris__123_APPLY0_125_$65655,null);
var i$CON$65656 = new i$CON(65656,[],_idris__123_APPLY0_125_$65656,null);
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