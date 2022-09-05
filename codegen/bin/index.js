#!/usr/bin/env node

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// elm:/Users/henrique/coding/elm-eos/codegen/src/Main.elm
var require_Main = __commonJS({
  "elm:/Users/henrique/coding/elm-eos/codegen/src/Main.elm"(exports) {
    (function(scope) {
      "use strict";
      function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
      }
      function F2(fun) {
        return F(2, fun, function(a) {
          return function(b) {
            return fun(a, b);
          };
        });
      }
      function F3(fun) {
        return F(3, fun, function(a) {
          return function(b) {
            return function(c) {
              return fun(a, b, c);
            };
          };
        });
      }
      function F4(fun) {
        return F(4, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return fun(a, b, c, d);
              };
            };
          };
        });
      }
      function F5(fun) {
        return F(5, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return fun(a, b, c, d, e);
                };
              };
            };
          };
        });
      }
      function F6(fun) {
        return F(6, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return fun(a, b, c, d, e, f);
                  };
                };
              };
            };
          };
        });
      }
      function F7(fun) {
        return F(7, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return fun(a, b, c, d, e, f, g);
                    };
                  };
                };
              };
            };
          };
        });
      }
      function F8(fun) {
        return F(8, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return function(h) {
                        return fun(a, b, c, d, e, f, g, h);
                      };
                    };
                  };
                };
              };
            };
          };
        });
      }
      function F9(fun) {
        return F(9, fun, function(a) {
          return function(b) {
            return function(c) {
              return function(d) {
                return function(e) {
                  return function(f) {
                    return function(g) {
                      return function(h) {
                        return function(i) {
                          return fun(a, b, c, d, e, f, g, h, i);
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        });
      }
      function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
      }
      function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
      }
      function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
      }
      function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
      }
      function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
      }
      function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
      }
      function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
      }
      function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
      }
      var _JsArray_empty = [];
      function _JsArray_singleton(value) {
        return [value];
      }
      function _JsArray_length(array) {
        return array.length;
      }
      var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
          result[i] = func(offset + i);
        }
        return result;
      });
      var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
          result[i] = ls.a;
          ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
      });
      var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index];
      });
      var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = array[i];
        }
        result[index] = value;
        return result;
      });
      var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
          result[i] = array[i];
        }
        result[length] = value;
        return result;
      });
      var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
          acc = A2(func, array[i], acc);
        }
        return acc;
      });
      var _JsArray_foldr = F3(function(func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
          acc = A2(func, array[i], acc);
        }
        return acc;
      });
      var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = func(array[i]);
        }
        return result;
      });
      var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
          result[i] = A2(func, offset + i, array[i]);
        }
        return result;
      });
      var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to);
      });
      var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
          itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
          result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
          result[i + destLen] = source[i];
        }
        return result;
      });
      var _Debug_log = F2(function(tag, value) {
        return value;
      });
      var _Debug_log_UNUSED = F2(function(tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
      });
      function _Debug_todo(moduleName, region) {
        return function(message) {
          _Debug_crash(8, moduleName, region, message);
        };
      }
      function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
          _Debug_crash(9, moduleName, region, value, message);
        };
      }
      function _Debug_toString(value) {
        return "<internals>";
      }
      function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value);
      }
      function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
          return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
          return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
          return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
          return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
          return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
        }
        if (typeof value === "object" && "$" in value) {
          var tag = value.$;
          if (typeof tag === "number") {
            return _Debug_internalColor(ansi, "<internals>");
          }
          if (tag[0] === "#") {
            var output = [];
            for (var k in value) {
              if (k === "$")
                continue;
              output.push(_Debug_toAnsiString(ansi, value[k]));
            }
            return "(" + output.join(",") + ")";
          }
          if (tag === "Set_elm_builtin") {
            return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
          }
          if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
            return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
          }
          if (tag === "Array_elm_builtin") {
            return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
          }
          if (tag === "::" || tag === "[]") {
            var output = "[";
            value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
            for (; value.b; value = value.b) {
              output += "," + _Debug_toAnsiString(ansi, value.a);
            }
            return output + "]";
          }
          var output = "";
          for (var i in value) {
            if (i === "$")
              continue;
            var str = _Debug_toAnsiString(ansi, value[i]);
            var c0 = str[0];
            var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
            output += " " + (parenless ? str : "(" + str + ")");
          }
          return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
          return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
          return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
          var output = [];
          for (var key in value) {
            var field = key[0] === "_" ? key.slice(1) : key;
            output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
          }
          if (output.length === 0) {
            return "{}";
          }
          return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
      }
      function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar) {
          return s.replace(/\'/g, "\\'");
        } else {
          return s.replace(/\"/g, '\\"');
        }
      }
      function _Debug_ctorColor(ansi, string) {
        return ansi ? "\x1B[96m" + string + "\x1B[0m" : string;
      }
      function _Debug_numberColor(ansi, string) {
        return ansi ? "\x1B[95m" + string + "\x1B[0m" : string;
      }
      function _Debug_stringColor(ansi, string) {
        return ansi ? "\x1B[93m" + string + "\x1B[0m" : string;
      }
      function _Debug_charColor(ansi, string) {
        return ansi ? "\x1B[92m" + string + "\x1B[0m" : string;
      }
      function _Debug_fadeColor(ansi, string) {
        return ansi ? "\x1B[37m" + string + "\x1B[0m" : string;
      }
      function _Debug_internalColor(ansi, string) {
        return ansi ? "\x1B[36m" + string + "\x1B[0m" : string;
      }
      function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
      }
      function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
      }
      function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
          case 0:
            throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
          case 1:
            throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
          case 2:
            var jsonErrorString = fact1;
            throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
          case 3:
            var portName = fact1;
            throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
          case 4:
            var portName = fact1;
            var problem = fact2;
            throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
          case 5:
            throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
          case 6:
            var moduleName = fact1;
            throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
          case 8:
            var moduleName = fact1;
            var region = fact2;
            var message = fact3;
            throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
          case 9:
            var moduleName = fact1;
            var region = fact2;
            var value = fact3;
            var message = fact4;
            throw new Error(
              "TODO in module `" + moduleName + "` from the `case` expression " + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    ")
            );
          case 10:
            throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
          case 11:
            throw new Error("Cannot perform mod 0. Division by zero error.");
        }
      }
      function _Debug_regionToString(region) {
        if (region.eS.ad === region.bw.ad) {
          return "on line " + region.eS.ad;
        }
        return "on lines " + region.eS.ad + " through " + region.bw.ad;
      }
      function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {
        }
        return isEqual;
      }
      function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
          return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
          typeof x === "function" && _Debug_crash(5);
          return false;
        }
        if (depth > 100) {
          stack.push(_Utils_Tuple2(x, y));
          return true;
        }
        if (x.$ < 0) {
          x = $elm$core$Dict$toList(x);
          y = $elm$core$Dict$toList(y);
        }
        for (var key in x) {
          if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
            return false;
          }
        }
        return true;
      }
      var _Utils_equal = F2(_Utils_eq);
      var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b);
      });
      function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
          return x === y ? 0 : x < y ? -1 : 1;
        }
        if (typeof x.$ === "undefined") {
          return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {
        }
        return ord || (x.b ? 1 : y.b ? -1 : 0);
      }
      var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0;
      });
      var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1;
      });
      var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0;
      });
      var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0;
      });
      var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
      });
      var _Utils_Tuple0 = 0;
      var _Utils_Tuple0_UNUSED = { $: "#0" };
      function _Utils_Tuple2(a, b) {
        return { a, b };
      }
      function _Utils_Tuple2_UNUSED(a, b) {
        return { $: "#2", a, b };
      }
      function _Utils_Tuple3(a, b, c) {
        return { a, b, c };
      }
      function _Utils_Tuple3_UNUSED(a, b, c) {
        return { $: "#3", a, b, c };
      }
      function _Utils_chr(c) {
        return c;
      }
      function _Utils_chr_UNUSED(c) {
        return new String(c);
      }
      function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
          newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
          newRecord[key] = updatedFields[key];
        }
        return newRecord;
      }
      var _Utils_append = F2(_Utils_ap);
      function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
          return xs + ys;
        }
        if (!xs.b) {
          return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
          curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
      }
      var _List_Nil = { $: 0 };
      var _List_Nil_UNUSED = { $: "[]" };
      function _List_Cons(hd, tl) {
        return { $: 1, a: hd, b: tl };
      }
      function _List_Cons_UNUSED(hd, tl) {
        return { $: "::", a: hd, b: tl };
      }
      var _List_cons = F2(_List_Cons);
      function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--; ) {
          out = _List_Cons(arr[i], out);
        }
        return out;
      }
      function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
          out.push(xs.a);
        }
        return out;
      }
      var _List_map2 = F3(function(f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
          arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map3 = F4(function(f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
          arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
      });
      var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
          return _Utils_cmp(f(a), f(b));
        }));
      });
      var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
          var ord = A2(f, a, b);
          return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
      });
      var _Basics_add = F2(function(a, b) {
        return a + b;
      });
      var _Basics_sub = F2(function(a, b) {
        return a - b;
      });
      var _Basics_mul = F2(function(a, b) {
        return a * b;
      });
      var _Basics_fdiv = F2(function(a, b) {
        return a / b;
      });
      var _Basics_idiv = F2(function(a, b) {
        return a / b | 0;
      });
      var _Basics_pow = F2(Math.pow);
      var _Basics_remainderBy = F2(function(b, a) {
        return a % b;
      });
      var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
      });
      var _Basics_pi = Math.PI;
      var _Basics_e = Math.E;
      var _Basics_cos = Math.cos;
      var _Basics_sin = Math.sin;
      var _Basics_tan = Math.tan;
      var _Basics_acos = Math.acos;
      var _Basics_asin = Math.asin;
      var _Basics_atan = Math.atan;
      var _Basics_atan2 = F2(Math.atan2);
      function _Basics_toFloat(x) {
        return x;
      }
      function _Basics_truncate(n) {
        return n | 0;
      }
      function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity;
      }
      var _Basics_ceiling = Math.ceil;
      var _Basics_floor = Math.floor;
      var _Basics_round = Math.round;
      var _Basics_sqrt = Math.sqrt;
      var _Basics_log = Math.log;
      var _Basics_isNaN = isNaN;
      function _Basics_not(bool) {
        return !bool;
      }
      var _Basics_and = F2(function(a, b) {
        return a && b;
      });
      var _Basics_or = F2(function(a, b) {
        return a || b;
      });
      var _Basics_xor = F2(function(a, b) {
        return a !== b;
      });
      var _String_cons = F2(function(chr, str) {
        return chr + str;
      });
      function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word) ? $elm$core$Maybe$Just(
          55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
        ) : $elm$core$Maybe$Nothing;
      }
      var _String_append = F2(function(a, b) {
        return a + b;
      });
      function _String_length(str) {
        return str.length;
      }
      var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
          var word = string.charCodeAt(i);
          if (55296 <= word && word <= 56319) {
            array[i] = func(_Utils_chr(string[i] + string[i + 1]));
            i += 2;
            continue;
          }
          array[i] = func(_Utils_chr(string[i]));
          i++;
        }
        return array.join("");
      });
      var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
          var char = str[i];
          var word = str.charCodeAt(i);
          i++;
          if (55296 <= word && word <= 56319) {
            char += str[i];
            i++;
          }
          if (isGood(_Utils_chr(char))) {
            arr.push(char);
          }
        }
        return arr.join("");
      });
      function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
          var word = str.charCodeAt(i);
          if (55296 <= word && word <= 56319) {
            arr[len - i] = str[i + 1];
            i++;
            arr[len - i] = str[i - 1];
            i++;
          } else {
            arr[len - i] = str[i];
            i++;
          }
        }
        return arr.join("");
      }
      var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
          var char = string[i];
          var word = string.charCodeAt(i);
          i++;
          if (55296 <= word && word <= 56319) {
            char += string[i];
            i++;
          }
          state = A2(func, _Utils_chr(char), state);
        }
        return state;
      });
      var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          state = A2(func, _Utils_chr(char), state);
        }
        return state;
      });
      var _String_split = F2(function(sep, str) {
        return str.split(sep);
      });
      var _String_join = F2(function(sep, strs) {
        return strs.join(sep);
      });
      var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end);
      });
      function _String_trim(str) {
        return str.trim();
      }
      function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
      }
      function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
      }
      function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
      }
      function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
      }
      function _String_toUpper(str) {
        return str.toUpperCase();
      }
      function _String_toLower(str) {
        return str.toLowerCase();
      }
      var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          if (isGood(_Utils_chr(char))) {
            return true;
          }
        }
        return false;
      });
      var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
          var char = string[i];
          var word = string.charCodeAt(i);
          if (56320 <= word && word <= 57343) {
            i--;
            char = string[i] + char;
          }
          if (!isGood(_Utils_chr(char))) {
            return false;
          }
        }
        return true;
      });
      var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1;
      });
      var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0;
      });
      var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
      });
      var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
          return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
          is.push(i);
          i = i + subLen;
        }
        return _List_fromArray(is);
      });
      function _String_fromNumber(number) {
        return number + "";
      }
      function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
          var code = str.charCodeAt(i);
          if (code < 48 || 57 < code) {
            return $elm$core$Maybe$Nothing;
          }
          total = 10 * total + code - 48;
        }
        return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
      }
      function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
          return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
      }
      function _String_fromList(chars) {
        return _List_toArray(chars).join("");
      }
      function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
          return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
      }
      function _Char_fromCode(code) {
        return _Utils_chr(
          code < 0 || 1114111 < code ? "\uFFFD" : code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320))
        );
      }
      function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
      }
      function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
      }
      function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
      }
      function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
      }
      function _Json_succeed(msg) {
        return {
          $: 0,
          a: msg
        };
      }
      function _Json_fail(msg) {
        return {
          $: 1,
          a: msg
        };
      }
      function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
      }
      var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
      });
      var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === "boolean" ? $elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value);
      });
      var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === "number" ? $elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value);
      });
      var _Json_decodeValue = _Json_decodePrim(function(value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
      });
      var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === "string" ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value);
      });
      function _Json_decodeList(decoder) {
        return { $: 3, b: decoder };
      }
      function _Json_decodeArray(decoder) {
        return { $: 4, b: decoder };
      }
      function _Json_decodeNull(value) {
        return { $: 5, c: value };
      }
      var _Json_decodeField = F2(function(field, decoder) {
        return {
          $: 6,
          d: field,
          b: decoder
        };
      });
      var _Json_decodeIndex = F2(function(index, decoder) {
        return {
          $: 7,
          e: index,
          b: decoder
        };
      });
      function _Json_decodeKeyValuePairs(decoder) {
        return {
          $: 8,
          b: decoder
        };
      }
      function _Json_mapMany(f, decoders) {
        return {
          $: 9,
          f,
          g: decoders
        };
      }
      var _Json_andThen = F2(function(callback, decoder) {
        return {
          $: 10,
          b: decoder,
          h: callback
        };
      });
      function _Json_oneOf(decoders) {
        return {
          $: 11,
          g: decoders
        };
      }
      var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [d1]);
      });
      var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
      });
      var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
      });
      var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
      });
      var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
      });
      var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
      });
      var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
      });
      var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
      });
      var _Json_runOnString = F2(function(decoder, string) {
        try {
          var value = JSON.parse(string);
          return _Json_runHelp(decoder, value);
        } catch (e) {
          return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
      });
      var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
      });
      function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
          case 2:
            return decoder.b(value);
          case 5:
            return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
          case 3:
            if (!_Json_isArray(value)) {
              return _Json_expecting("a LIST", value);
            }
            return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
          case 4:
            if (!_Json_isArray(value)) {
              return _Json_expecting("an ARRAY", value);
            }
            return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
          case 6:
            var field = decoder.d;
            if (typeof value !== "object" || value === null || !(field in value)) {
              return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
            }
            var result = _Json_runHelp(decoder.b, value[field]);
            return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
          case 7:
            var index = decoder.e;
            if (!_Json_isArray(value)) {
              return _Json_expecting("an ARRAY", value);
            }
            if (index >= value.length) {
              return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
            }
            var result = _Json_runHelp(decoder.b, value[index]);
            return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
          case 8:
            if (typeof value !== "object" || value === null || _Json_isArray(value)) {
              return _Json_expecting("an OBJECT", value);
            }
            var keyValuePairs = _List_Nil;
            for (var key in value) {
              if (value.hasOwnProperty(key)) {
                var result = _Json_runHelp(decoder.b, value[key]);
                if (!$elm$core$Result$isOk(result)) {
                  return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                }
                keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
              }
            }
            return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
          case 9:
            var answer = decoder.f;
            var decoders = decoder.g;
            for (var i = 0; i < decoders.length; i++) {
              var result = _Json_runHelp(decoders[i], value);
              if (!$elm$core$Result$isOk(result)) {
                return result;
              }
              answer = answer(result.a);
            }
            return $elm$core$Result$Ok(answer);
          case 10:
            var result = _Json_runHelp(decoder.b, value);
            return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
          case 11:
            var errors = _List_Nil;
            for (var temp = decoder.g; temp.b; temp = temp.b) {
              var result = _Json_runHelp(temp.a, value);
              if ($elm$core$Result$isOk(result)) {
                return result;
              }
              errors = _List_Cons(result.a, errors);
            }
            return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
          case 1:
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
          case 0:
            return $elm$core$Result$Ok(decoder.a);
        }
      }
      function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
          var result = _Json_runHelp(decoder, value[i]);
          if (!$elm$core$Result$isOk(result)) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
          }
          array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
      }
      function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
      }
      function _Json_toElmArray(array) {
        return A2($elm$core$Array$initialize, array.length, function(i) {
          return array[i];
        });
      }
      function _Json_expecting(type, value) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
      }
      function _Json_equality(x, y) {
        if (x === y) {
          return true;
        }
        if (x.$ !== y.$) {
          return false;
        }
        switch (x.$) {
          case 0:
          case 1:
            return x.a === y.a;
          case 2:
            return x.b === y.b;
          case 5:
            return x.c === y.c;
          case 3:
          case 4:
          case 8:
            return _Json_equality(x.b, y.b);
          case 6:
            return x.d === y.d && _Json_equality(x.b, y.b);
          case 7:
            return x.e === y.e && _Json_equality(x.b, y.b);
          case 9:
            return x.f === y.f && _Json_listEquality(x.g, y.g);
          case 10:
            return x.h === y.h && _Json_equality(x.b, y.b);
          case 11:
            return _Json_listEquality(x.g, y.g);
        }
      }
      function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
          return false;
        }
        for (var i = 0; i < len; i++) {
          if (!_Json_equality(aDecoders[i], bDecoders[i])) {
            return false;
          }
        }
        return true;
      }
      var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
      });
      function _Json_wrap_UNUSED(value) {
        return { $: 0, a: value };
      }
      function _Json_unwrap_UNUSED(value) {
        return value.a;
      }
      function _Json_wrap(value) {
        return value;
      }
      function _Json_unwrap(value) {
        return value;
      }
      function _Json_emptyArray() {
        return [];
      }
      function _Json_emptyObject() {
        return {};
      }
      var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
      });
      function _Json_addEntry(func) {
        return F2(function(entry, array) {
          array.push(_Json_unwrap(func(entry)));
          return array;
        });
      }
      var _Json_encodeNull = _Json_wrap(null);
      function _Scheduler_succeed(value) {
        return {
          $: 0,
          a: value
        };
      }
      function _Scheduler_fail(error) {
        return {
          $: 1,
          a: error
        };
      }
      function _Scheduler_binding(callback) {
        return {
          $: 2,
          b: callback,
          c: null
        };
      }
      var _Scheduler_andThen = F2(function(callback, task) {
        return {
          $: 3,
          b: callback,
          d: task
        };
      });
      var _Scheduler_onError = F2(function(callback, task) {
        return {
          $: 4,
          b: callback,
          d: task
        };
      });
      function _Scheduler_receive(callback) {
        return {
          $: 5,
          b: callback
        };
      }
      var _Scheduler_guid = 0;
      function _Scheduler_rawSpawn(task) {
        var proc = {
          $: 0,
          e: _Scheduler_guid++,
          f: task,
          g: null,
          h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
      }
      function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
          callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
      }
      function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
      }
      var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
          _Scheduler_rawSend(proc, msg);
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      });
      function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
          var task = proc.f;
          if (task.$ === 2 && task.c) {
            task.c();
          }
          proc.f = null;
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      }
      var _Scheduler_working = false;
      var _Scheduler_queue = [];
      function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
          return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
          _Scheduler_step(proc);
        }
        _Scheduler_working = false;
      }
      function _Scheduler_step(proc) {
        while (proc.f) {
          var rootTag = proc.f.$;
          if (rootTag === 0 || rootTag === 1) {
            while (proc.g && proc.g.$ !== rootTag) {
              proc.g = proc.g.i;
            }
            if (!proc.g) {
              return;
            }
            proc.f = proc.g.b(proc.f.a);
            proc.g = proc.g.i;
          } else if (rootTag === 2) {
            proc.f.c = proc.f.b(function(newRoot) {
              proc.f = newRoot;
              _Scheduler_enqueue(proc);
            });
            return;
          } else if (rootTag === 5) {
            if (proc.h.length === 0) {
              return;
            }
            proc.f = proc.f.b(proc.h.shift());
          } else {
            proc.g = {
              $: rootTag === 3 ? 0 : 1,
              b: proc.f.b,
              i: proc.g
            };
            proc.f = proc.f.d;
          }
        }
      }
      function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
          var id = setTimeout(function() {
            callback(_Scheduler_succeed(_Utils_Tuple0));
          }, time);
          return function() {
            clearTimeout(id);
          };
        });
      }
      var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(
          flagDecoder,
          args,
          impl.ec,
          impl.e4,
          impl.eX,
          function() {
            return function() {
            };
          }
        );
      });
      function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : void 0));
        $elm$core$Result$isOk(result) || _Debug_crash(2);
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
          var pair = A2(update, msg, model);
          stepper(model = pair.a, viewMetadata);
          _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports } : {};
      }
      var _Platform_preload;
      function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
      }
      var _Platform_effectManagers = {};
      function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
          var manager = _Platform_effectManagers[key];
          if (manager.a) {
            ports = ports || {};
            ports[key] = manager.a(key, sendToApp);
          }
          managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
      }
      function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
          b: init,
          c: onEffects,
          d: onSelfMsg,
          e: cmdMap,
          f: subMap
        };
      }
      function _Platform_instantiateManager(info, sendToApp) {
        var router = {
          g: sendToApp,
          h: void 0
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
          return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
            var value = msg.a;
            if (msg.$ === 0) {
              return A3(onSelfMsg, router, value, state);
            }
            return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
          }));
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
      }
      var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
          router.g(msg);
          callback(_Scheduler_succeed(_Utils_Tuple0));
        });
      });
      var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
          $: 0,
          a: msg
        });
      });
      function _Platform_leaf(home) {
        return function(value) {
          return {
            $: 1,
            k: home,
            l: value
          };
        };
      }
      function _Platform_batch(list) {
        return {
          $: 2,
          m: list
        };
      }
      var _Platform_map = F2(function(tagger, bag) {
        return {
          $: 3,
          n: tagger,
          o: bag
        };
      });
      var _Platform_effectsQueue = [];
      var _Platform_effectsActive = false;
      function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
        if (_Platform_effectsActive)
          return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift(); ) {
          _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
      }
      function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
          _Scheduler_rawSend(managers[home], {
            $: "fx",
            a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
          });
        }
      }
      function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
          case 1:
            var home = bag.k;
            var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
            effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
            return;
          case 2:
            for (var list = bag.m; list.b; list = list.b) {
              _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
            }
            return;
          case 3:
            _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
              s: bag.n,
              t: taggers
            });
            return;
        }
      }
      function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
          for (var temp = taggers; temp; temp = temp.t) {
            x = temp.s(x);
          }
          return x;
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
      }
      function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects;
      }
      function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
          _Debug_crash(3, name);
        }
      }
      function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
          e: _Platform_outgoingPortMap,
          u: converter,
          a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
      }
      var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value;
      });
      function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
          for (; cmdList.b; cmdList = cmdList.b) {
            var currentSubs = subs;
            var value = _Json_unwrap(converter(cmdList.a));
            for (var i = 0; i < currentSubs.length; i++) {
              currentSubs[i](value);
            }
          }
          return init;
        });
        function subscribe(callback) {
          subs.push(callback);
        }
        function unsubscribe(callback) {
          subs = subs.slice();
          var index = subs.indexOf(callback);
          if (index >= 0) {
            subs.splice(index, 1);
          }
        }
        return {
          subscribe,
          unsubscribe
        };
      }
      function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
          f: _Platform_incomingPortMap,
          u: converter,
          a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
      }
      var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
          return tagger(finalTagger(value));
        };
      });
      function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
          subs = subList;
          return init;
        });
        function send(incomingValue) {
          var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
          $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
          var value = result.a;
          for (var temp = subs; temp.b; temp = temp.b) {
            sendToApp(temp.a(value));
          }
        }
        return { send };
      }
      function _Platform_export(exports2) {
        scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports2) : scope["Elm"] = exports2;
      }
      function _Platform_mergeExportsProd(obj, exports2) {
        for (var name in exports2) {
          name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports2[name]) : obj[name] = exports2[name];
        }
      }
      function _Platform_export_UNUSED(exports2) {
        scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports2) : scope["Elm"] = exports2;
      }
      function _Platform_mergeExportsDebug(moduleName, obj, exports2) {
        for (var name in exports2) {
          name in obj ? name == "init" ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports2[name]) : obj[name] = exports2[name];
        }
      }
      var _Regex_never = /.^/;
      var _Regex_fromStringWith = F2(function(options, string) {
        var flags = "g";
        if (options.el) {
          flags += "m";
        }
        if (options.dN) {
          flags += "i";
        }
        try {
          return $elm$core$Maybe$Just(new RegExp(string, flags));
        } catch (error) {
          return $elm$core$Maybe$Nothing;
        }
      });
      var _Regex_contains = F2(function(re, string) {
        return string.match(re) !== null;
      });
      var _Regex_findAtMost = F3(function(n, re, str) {
        var out = [];
        var number = 0;
        var string = str;
        var lastIndex = re.lastIndex;
        var prevLastIndex = -1;
        var result;
        while (number++ < n && (result = re.exec(string))) {
          if (prevLastIndex == re.lastIndex)
            break;
          var i = result.length - 1;
          var subs = new Array(i);
          while (i > 0) {
            var submatch = result[i];
            subs[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
          }
          out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
          prevLastIndex = re.lastIndex;
        }
        re.lastIndex = lastIndex;
        return _List_fromArray(out);
      });
      var _Regex_replaceAtMost = F4(function(n, re, replacer, string) {
        var count = 0;
        function jsReplacer(match) {
          if (count++ >= n) {
            return match;
          }
          var i = arguments.length - 3;
          var submatches = new Array(i);
          while (i > 0) {
            var submatch = arguments[i];
            submatches[--i] = submatch ? $elm$core$Maybe$Just(submatch) : $elm$core$Maybe$Nothing;
          }
          return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
        }
        return string.replace(re, jsReplacer);
      });
      var _Regex_splitAtMost = F3(function(n, re, str) {
        var string = str;
        var out = [];
        var start = re.lastIndex;
        var restoreLastIndex = re.lastIndex;
        while (n--) {
          var result = re.exec(string);
          if (!result)
            break;
          out.push(string.slice(start, result.index));
          start = re.lastIndex;
        }
        out.push(string.slice(start));
        re.lastIndex = restoreLastIndex;
        return _List_fromArray(out);
      });
      var _Regex_infinity = Infinity;
      var _Http_toTask = F3(function(router, toTask, request) {
        return _Scheduler_binding(function(callback) {
          function done(response) {
            callback(toTask(request.aP.a(response)));
          }
          var xhr = new XMLHttpRequest();
          xhr.addEventListener("error", function() {
            done($elm$http$Http$NetworkError_);
          });
          xhr.addEventListener("timeout", function() {
            done($elm$http$Http$Timeout_);
          });
          xhr.addEventListener("load", function() {
            done(_Http_toResponse(request.aP.b, xhr));
          });
          $elm$core$Maybe$isJust(request.dl) && _Http_track(router, xhr, request.dl.a);
          try {
            xhr.open(request.ei, request.aI, true);
          } catch (e) {
            return done($elm$http$Http$BadUrl_(request.aI));
          }
          _Http_configureRequest(xhr, request);
          request.dL.a && xhr.setRequestHeader("Content-Type", request.dL.a);
          xhr.send(request.dL.b);
          return function() {
            xhr.c = true;
            xhr.abort();
          };
        });
      });
      function _Http_configureRequest(xhr, request) {
        for (var headers = request.ea; headers.b; headers = headers.b) {
          xhr.setRequestHeader(headers.a.a, headers.a.b);
        }
        xhr.timeout = request.e1.a || 0;
        xhr.responseType = request.aP.d;
        xhr.withCredentials = request.dF;
      }
      function _Http_toResponse(toBody, xhr) {
        return A2(
          200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
          _Http_toMetadata(xhr),
          toBody(xhr.response)
        );
      }
      function _Http_toMetadata(xhr) {
        return {
          aI: xhr.responseURL,
          eT: xhr.status,
          eU: xhr.statusText,
          ea: _Http_parseHeaders(xhr.getAllResponseHeaders())
        };
      }
      function _Http_parseHeaders(rawHeaders) {
        if (!rawHeaders) {
          return $elm$core$Dict$empty;
        }
        var headers = $elm$core$Dict$empty;
        var headerPairs = rawHeaders.split("\r\n");
        for (var i = headerPairs.length; i--; ) {
          var headerPair = headerPairs[i];
          var index = headerPair.indexOf(": ");
          if (index > 0) {
            var key = headerPair.substring(0, index);
            var value = headerPair.substring(index + 2);
            headers = A3($elm$core$Dict$update, key, function(oldValue) {
              return $elm$core$Maybe$Just(
                $elm$core$Maybe$isJust(oldValue) ? value + ", " + oldValue.a : value
              );
            }, headers);
          }
        }
        return headers;
      }
      var _Http_expect = F3(function(type, toBody, toValue) {
        return {
          $: 0,
          d: type,
          b: toBody,
          a: toValue
        };
      });
      var _Http_mapExpect = F2(function(func, expect) {
        return {
          $: 0,
          d: expect.d,
          b: expect.b,
          a: function(x) {
            return func(expect.a(x));
          }
        };
      });
      function _Http_toDataView(arrayBuffer) {
        return new DataView(arrayBuffer);
      }
      var _Http_emptyBody = { $: 0 };
      var _Http_pair = F2(function(a, b) {
        return { $: 0, a, b };
      });
      function _Http_toFormData(parts) {
        for (var formData = new FormData(); parts.b; parts = parts.b) {
          var part = parts.a;
          formData.append(part.a, part.b);
        }
        return formData;
      }
      var _Http_bytesToBlob = F2(function(mime, bytes) {
        return new Blob([bytes], { type: mime });
      });
      function _Http_track(router, xhr, tracker) {
        xhr.upload.addEventListener("progress", function(event) {
          if (xhr.c) {
            return;
          }
          _Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
            eQ: event.loaded,
            cU: event.total
          }))));
        });
        xhr.addEventListener("progress", function(event) {
          if (xhr.c) {
            return;
          }
          _Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
            eM: event.loaded,
            cU: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
          }))));
        });
      }
      var _Bitwise_and = F2(function(a, b) {
        return a & b;
      });
      var _Bitwise_or = F2(function(a, b) {
        return a | b;
      });
      var _Bitwise_xor = F2(function(a, b) {
        return a ^ b;
      });
      function _Bitwise_complement(a) {
        return ~a;
      }
      ;
      var _Bitwise_shiftLeftBy = F2(function(offset, a) {
        return a << offset;
      });
      var _Bitwise_shiftRightBy = F2(function(offset, a) {
        return a >> offset;
      });
      var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
        return a >>> offset;
      });
      var $author$project$InteropDefinitions$PrintAndExitFailure = function(a) {
        return { $: 0, a };
      };
      var $author$project$InteropDefinitions$PrintAndExitSuccess = function(a) {
        return { $: 1, a };
      };
      var $elm$core$List$cons = _List_cons;
      var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
      var $elm$core$Array$foldr = F3(
        function(func, baseCase, _v0) {
          var tree = _v0.c;
          var tail = _v0.d;
          var helper = F2(
            function(node, acc) {
              if (!node.$) {
                var subTree = node.a;
                return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
              } else {
                var values = node.a;
                return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
              }
            }
          );
          return A3(
            $elm$core$Elm$JsArray$foldr,
            helper,
            A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
            tree
          );
        }
      );
      var $elm$core$Array$toList = function(array) {
        return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
      };
      var $elm$core$Dict$foldr = F3(
        function(func, acc, t) {
          foldr:
            while (true) {
              if (t.$ === -2) {
                return acc;
              } else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(
                  func,
                  key,
                  value,
                  A3($elm$core$Dict$foldr, func, acc, right)
                ), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
              }
            }
        }
      );
      var $elm$core$Dict$toList = function(dict) {
        return A3(
          $elm$core$Dict$foldr,
          F3(
            function(key, value, list) {
              return A2(
                $elm$core$List$cons,
                _Utils_Tuple2(key, value),
                list
              );
            }
          ),
          _List_Nil,
          dict
        );
      };
      var $elm$core$Dict$keys = function(dict) {
        return A3(
          $elm$core$Dict$foldr,
          F3(
            function(key, value, keyList) {
              return A2($elm$core$List$cons, key, keyList);
            }
          ),
          _List_Nil,
          dict
        );
      };
      var $elm$core$Set$toList = function(_v0) {
        var dict = _v0;
        return $elm$core$Dict$keys(dict);
      };
      var $elm$core$Basics$EQ = 1;
      var $elm$core$Basics$GT = 2;
      var $elm$core$Basics$LT = 0;
      var $elm$core$Result$Err = function(a) {
        return { $: 1, a };
      };
      var $elm$json$Json$Decode$Failure = F2(
        function(a, b) {
          return { $: 3, a, b };
        }
      );
      var $elm$json$Json$Decode$Field = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $elm$json$Json$Decode$Index = F2(
        function(a, b) {
          return { $: 1, a, b };
        }
      );
      var $elm$core$Result$Ok = function(a) {
        return { $: 0, a };
      };
      var $elm$json$Json$Decode$OneOf = function(a) {
        return { $: 2, a };
      };
      var $elm$core$Basics$False = 1;
      var $elm$core$Basics$add = _Basics_add;
      var $elm$core$Maybe$Just = function(a) {
        return { $: 0, a };
      };
      var $elm$core$Maybe$Nothing = { $: 1 };
      var $elm$core$String$all = _String_all;
      var $elm$core$Basics$and = _Basics_and;
      var $elm$core$Basics$append = _Utils_append;
      var $elm$json$Json$Encode$encode = _Json_encode;
      var $elm$core$String$fromInt = _String_fromNumber;
      var $elm$core$String$join = F2(
        function(sep, chunks) {
          return A2(
            _String_join,
            sep,
            _List_toArray(chunks)
          );
        }
      );
      var $elm$core$String$split = F2(
        function(sep, string) {
          return _List_fromArray(
            A2(_String_split, sep, string)
          );
        }
      );
      var $elm$json$Json$Decode$indent = function(str) {
        return A2(
          $elm$core$String$join,
          "\n    ",
          A2($elm$core$String$split, "\n", str)
        );
      };
      var $elm$core$List$foldl = F3(
        function(func, acc, list) {
          foldl:
            while (true) {
              if (!list.b) {
                return acc;
              } else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
              }
            }
        }
      );
      var $elm$core$List$length = function(xs) {
        return A3(
          $elm$core$List$foldl,
          F2(
            function(_v0, i) {
              return i + 1;
            }
          ),
          0,
          xs
        );
      };
      var $elm$core$List$map2 = _List_map2;
      var $elm$core$Basics$le = _Utils_le;
      var $elm$core$Basics$sub = _Basics_sub;
      var $elm$core$List$rangeHelp = F3(
        function(lo, hi, list) {
          rangeHelp:
            while (true) {
              if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
              } else {
                return list;
              }
            }
        }
      );
      var $elm$core$List$range = F2(
        function(lo, hi) {
          return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
        }
      );
      var $elm$core$List$indexedMap = F2(
        function(f, xs) {
          return A3(
            $elm$core$List$map2,
            f,
            A2(
              $elm$core$List$range,
              0,
              $elm$core$List$length(xs) - 1
            ),
            xs
          );
        }
      );
      var $elm$core$Char$toCode = _Char_toCode;
      var $elm$core$Char$isLower = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122;
      };
      var $elm$core$Char$isUpper = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code;
      };
      var $elm$core$Basics$or = _Basics_or;
      var $elm$core$Char$isAlpha = function(_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
      };
      var $elm$core$Char$isDigit = function(_char) {
        var code = $elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code;
      };
      var $elm$core$Char$isAlphaNum = function(_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
      };
      var $elm$core$List$reverse = function(list) {
        return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
      };
      var $elm$core$String$uncons = _String_uncons;
      var $elm$json$Json$Decode$errorOneOf = F2(
        function(i, error) {
          return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent(
            $elm$json$Json$Decode$errorToString(error)
          )));
        }
      );
      var $elm$json$Json$Decode$errorToString = function(error) {
        return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
      };
      var $elm$json$Json$Decode$errorToStringHelp = F2(
        function(error, context) {
          errorToStringHelp:
            while (true) {
              switch (error.$) {
                case 0:
                  var f = error.a;
                  var err = error.b;
                  var isSimple = function() {
                    var _v1 = $elm$core$String$uncons(f);
                    if (_v1.$ === 1) {
                      return false;
                    } else {
                      var _v2 = _v1.a;
                      var _char = _v2.a;
                      var rest = _v2.b;
                      return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                    }
                  }();
                  var fieldName = isSimple ? "." + f : "['" + (f + "']");
                  var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                  error = $temp$error;
                  context = $temp$context;
                  continue errorToStringHelp;
                case 1:
                  var i = error.a;
                  var err = error.b;
                  var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                  var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                  error = $temp$error;
                  context = $temp$context;
                  continue errorToStringHelp;
                case 2:
                  var errors = error.a;
                  if (!errors.b) {
                    return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                      if (!context.b) {
                        return "!";
                      } else {
                        return " at json" + A2(
                          $elm$core$String$join,
                          "",
                          $elm$core$List$reverse(context)
                        );
                      }
                    }();
                  } else {
                    if (!errors.b.b) {
                      var err = errors.a;
                      var $temp$error = err, $temp$context = context;
                      error = $temp$error;
                      context = $temp$context;
                      continue errorToStringHelp;
                    } else {
                      var starter = function() {
                        if (!context.b) {
                          return "Json.Decode.oneOf";
                        } else {
                          return "The Json.Decode.oneOf at json" + A2(
                            $elm$core$String$join,
                            "",
                            $elm$core$List$reverse(context)
                          );
                        }
                      }();
                      var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt(
                        $elm$core$List$length(errors)
                      ) + " ways:"));
                      return A2(
                        $elm$core$String$join,
                        "\n\n",
                        A2(
                          $elm$core$List$cons,
                          introduction,
                          A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)
                        )
                      );
                    }
                  }
                default:
                  var msg = error.a;
                  var json = error.b;
                  var introduction = function() {
                    if (!context.b) {
                      return "Problem with the given value:\n\n";
                    } else {
                      return "Problem with the value at json" + (A2(
                        $elm$core$String$join,
                        "",
                        $elm$core$List$reverse(context)
                      ) + ":\n\n    ");
                    }
                  }();
                  return introduction + ($elm$json$Json$Decode$indent(
                    A2($elm$json$Json$Encode$encode, 4, json)
                  ) + ("\n\n" + msg));
              }
            }
        }
      );
      var $elm$core$Array$branchFactor = 32;
      var $elm$core$Array$Array_elm_builtin = F4(
        function(a, b, c, d) {
          return { $: 0, a, b, c, d };
        }
      );
      var $elm$core$Elm$JsArray$empty = _JsArray_empty;
      var $elm$core$Basics$ceiling = _Basics_ceiling;
      var $elm$core$Basics$fdiv = _Basics_fdiv;
      var $elm$core$Basics$logBase = F2(
        function(base, number) {
          return _Basics_log(number) / _Basics_log(base);
        }
      );
      var $elm$core$Basics$toFloat = _Basics_toFloat;
      var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
        A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor)
      );
      var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
      var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
      var $elm$core$Array$Leaf = function(a) {
        return { $: 1, a };
      };
      var $elm$core$Basics$apL = F2(
        function(f, x) {
          return f(x);
        }
      );
      var $elm$core$Basics$apR = F2(
        function(x, f) {
          return f(x);
        }
      );
      var $elm$core$Basics$eq = _Utils_equal;
      var $elm$core$Basics$floor = _Basics_floor;
      var $elm$core$Elm$JsArray$length = _JsArray_length;
      var $elm$core$Basics$gt = _Utils_gt;
      var $elm$core$Basics$max = F2(
        function(x, y) {
          return _Utils_cmp(x, y) > 0 ? x : y;
        }
      );
      var $elm$core$Basics$mul = _Basics_mul;
      var $elm$core$Array$SubTree = function(a) {
        return { $: 0, a };
      };
      var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
      var $elm$core$Array$compressNodes = F2(
        function(nodes, acc) {
          compressNodes:
            while (true) {
              var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
              var node = _v0.a;
              var remainingNodes = _v0.b;
              var newAcc = A2(
                $elm$core$List$cons,
                $elm$core$Array$SubTree(node),
                acc
              );
              if (!remainingNodes.b) {
                return $elm$core$List$reverse(newAcc);
              } else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
              }
            }
        }
      );
      var $elm$core$Tuple$first = function(_v0) {
        var x = _v0.a;
        return x;
      };
      var $elm$core$Array$treeFromBuilder = F2(
        function(nodeList, nodeListSize) {
          treeFromBuilder:
            while (true) {
              var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
              if (newNodeSize === 1) {
                return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
              } else {
                var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
              }
            }
        }
      );
      var $elm$core$Array$builderToArray = F2(
        function(reverseNodeList, builder) {
          if (!builder.p) {
            return A4(
              $elm$core$Array$Array_elm_builtin,
              $elm$core$Elm$JsArray$length(builder.r),
              $elm$core$Array$shiftStep,
              $elm$core$Elm$JsArray$empty,
              builder.r
            );
          } else {
            var treeLen = builder.p * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor(
              A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1)
            );
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.t) : builder.t;
            var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.p);
            return A4(
              $elm$core$Array$Array_elm_builtin,
              $elm$core$Elm$JsArray$length(builder.r) + treeLen,
              A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
              tree,
              builder.r
            );
          }
        }
      );
      var $elm$core$Basics$idiv = _Basics_idiv;
      var $elm$core$Basics$lt = _Utils_lt;
      var $elm$core$Array$initializeHelp = F5(
        function(fn, fromIndex, len, nodeList, tail) {
          initializeHelp:
            while (true) {
              if (fromIndex < 0) {
                return A2(
                  $elm$core$Array$builderToArray,
                  false,
                  { t: nodeList, p: len / $elm$core$Array$branchFactor | 0, r: tail }
                );
              } else {
                var leaf = $elm$core$Array$Leaf(
                  A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn)
                );
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
              }
            }
        }
      );
      var $elm$core$Basics$remainderBy = _Basics_remainderBy;
      var $elm$core$Array$initialize = F2(
        function(len, fn) {
          if (len <= 0) {
            return $elm$core$Array$empty;
          } else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
            var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
            return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
          }
        }
      );
      var $elm$core$Basics$True = 0;
      var $elm$core$Result$isOk = function(result) {
        if (!result.$) {
          return true;
        } else {
          return false;
        }
      };
      var $elm$json$Json$Decode$andThen = _Json_andThen;
      var $elm$core$Basics$composeR = F3(
        function(f, g, x) {
          return g(
            f(x)
          );
        }
      );
      var $elm$core$Basics$identity = function(x) {
        return x;
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Program$Config = $elm$core$Basics$identity;
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser = $elm$core$Basics$identity;
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end = function(_v0) {
        var record = _v0;
        return record;
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Program$add = F2(
        function(optionsParser, _v0) {
          var programRecord = _v0;
          var optionsParsers = programRecord.ax;
          return _Utils_update(
            programRecord,
            {
              ax: _Utils_ap(
                optionsParsers,
                _List_fromArray(
                  [
                    $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end(optionsParser)
                  ]
                )
              )
            }
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$Decoder = $elm$core$Basics$identity;
      var $elm$core$Result$map = F2(
        function(func, ra) {
          if (!ra.$) {
            var a = ra.a;
            return $elm$core$Result$Ok(
              func(a)
            );
          } else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$map = F2(
        function(mapFunction, _v0) {
          var _function = _v0;
          return A2(
            $elm$core$Basics$composeR,
            _function,
            function(fn) {
              return A2(
                $elm$core$Result$map,
                function(_v1) {
                  var validationErrors = _v1.a;
                  var value = _v1.b;
                  return _Utils_Tuple2(
                    validationErrors,
                    mapFunction(value)
                  );
                },
                fn
              );
            }
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Option$Option = $elm$core$Basics$identity;
      var $dillonkearns$elm_cli_options_parser$Cli$Option$updateDecoder = F2(
        function(mappedDecoder, _v0) {
          var option = _v0;
          var dataGrabber = option.aa;
          var usageSpec = option.I;
          var decoder = option.G;
          return {
            aa: dataGrabber,
            G: mappedDecoder(decoder),
            I: usageSpec
          };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Option$map = F2(
        function(mapFn, option) {
          return A2(
            $dillonkearns$elm_cli_options_parser$Cli$Option$updateDecoder,
            function(decoder) {
              return A2($dillonkearns$elm_cli_options_parser$Cli$Decode$map, mapFn, decoder);
            },
            option
          );
        }
      );
      var $elm$core$Maybe$map = F2(
        function(f, maybe) {
          if (!maybe.$) {
            var value = maybe.a;
            return $elm$core$Maybe$Just(
              f(value)
            );
          } else {
            return $elm$core$Maybe$Nothing;
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError = function(a) {
        return { $: 0, a };
      };
      var $dillonkearns$elm_cli_options_parser$Occurences$Optional = 0;
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$decoder = function(value) {
        return $elm$core$Result$Ok(
          _Utils_Tuple2(_List_Nil, value)
        );
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Option$buildOption = F2(
        function(dataGrabber, usageSpec) {
          return { aa: dataGrabber, G: $dillonkearns$elm_cli_options_parser$Cli$Decode$decoder, I: usageSpec };
        }
      );
      var $elm_community$list_extra$List$Extra$find = F2(
        function(predicate, list) {
          find:
            while (true) {
              if (!list.b) {
                return $elm$core$Maybe$Nothing;
              } else {
                var first = list.a;
                var rest = list.b;
                if (predicate(first)) {
                  return $elm$core$Maybe$Just(first);
                } else {
                  var $temp$predicate = predicate, $temp$list = rest;
                  predicate = $temp$predicate;
                  list = $temp$list;
                  continue find;
                }
              }
            }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$FlagOrKeywordArg = F3(
        function(a, b, c) {
          return { $: 0, a, b, c };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$KeywordArg = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$keywordArg = F2(
        function(keywordArgName, occurences) {
          return A3(
            $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$FlagOrKeywordArg,
            $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$KeywordArg(keywordArgName),
            $elm$core$Maybe$Nothing,
            occurences
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Option$optionalKeywordArg = function(optionName) {
        return A2(
          $dillonkearns$elm_cli_options_parser$Cli$Option$buildOption,
          function(_v0) {
            var operands = _v0.ae;
            var options = _v0.aw;
            var _v1 = A2(
              $elm_community$list_extra$List$Extra$find,
              function(_v2) {
                var thisOptionName = _v2.a;
                var optionKind = _v2.b;
                return _Utils_eq(thisOptionName, optionName);
              },
              options
            );
            if (_v1.$ === 1) {
              return $elm$core$Result$Ok($elm$core$Maybe$Nothing);
            } else {
              if (_v1.a.b.$ === 1) {
                var _v3 = _v1.a;
                var optionArg = _v3.b.a;
                return $elm$core$Result$Ok(
                  $elm$core$Maybe$Just(optionArg)
                );
              } else {
                return $elm$core$Result$Err(
                  $dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError("Expected option " + (optionName + " to have arg but found none."))
                );
              }
            }
          },
          A2($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$keywordArg, optionName, 0)
        );
      };
      var $elm$core$Maybe$withDefault = F2(
        function(_default, maybe) {
          if (!maybe.$) {
            var value = maybe.a;
            return value;
          } else {
            return _default;
          }
        }
      );
      var $author$project$Main$baseArg = A2(
        $dillonkearns$elm_cli_options_parser$Cli$Option$map,
        A2(
          $elm$core$Basics$composeR,
          $elm$core$Maybe$map(
            $elm$core$String$split(".")
          ),
          $elm$core$Maybe$withDefault(_List_Nil)
        ),
        $dillonkearns$elm_cli_options_parser$Cli$Option$optionalKeywordArg("base")
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build = function(cliOptionsConstructor) {
        return {
          G: function(_v0) {
            return $elm$core$Result$Ok(
              _Utils_Tuple2(_List_Nil, cliOptionsConstructor)
            );
          },
          R: $elm$core$Maybe$Nothing,
          Q: $elm$core$Maybe$Nothing,
          a0: _List_Nil
        };
      };
      var $elm$core$List$foldrHelper = F4(
        function(fn, acc, ctr, ls) {
          if (!ls.b) {
            return acc;
          } else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
              return A2(fn, a, acc);
            } else {
              var b = r1.a;
              var r2 = r1.b;
              if (!r2.b) {
                return A2(
                  fn,
                  a,
                  A2(fn, b, acc)
                );
              } else {
                var c = r2.a;
                var r3 = r2.b;
                if (!r3.b) {
                  return A2(
                    fn,
                    a,
                    A2(
                      fn,
                      b,
                      A2(fn, c, acc)
                    )
                  );
                } else {
                  var d = r3.a;
                  var r4 = r3.b;
                  var res = ctr > 500 ? A3(
                    $elm$core$List$foldl,
                    fn,
                    acc,
                    $elm$core$List$reverse(r4)
                  ) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                  return A2(
                    fn,
                    a,
                    A2(
                      fn,
                      b,
                      A2(
                        fn,
                        c,
                        A2(fn, d, res)
                      )
                    )
                  );
                }
              }
            }
          }
        }
      );
      var $elm$core$List$foldr = F3(
        function(fn, acc, ls) {
          return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
        }
      );
      var $elm$core$List$isEmpty = function(xs) {
        if (!xs.b) {
          return true;
        } else {
          return false;
        }
      };
      var $dillonkearns$elm_cli_options_parser$Occurences$ZeroOrMore = 2;
      var $elm$core$List$maybeCons = F3(
        function(f, mx, xs) {
          var _v0 = f(mx);
          if (!_v0.$) {
            var x = _v0.a;
            return A2($elm$core$List$cons, x, xs);
          } else {
            return xs;
          }
        }
      );
      var $elm$core$List$filterMap = F2(
        function(f, xs) {
          return A3(
            $elm$core$List$foldr,
            $elm$core$List$maybeCons(f),
            _List_Nil,
            xs
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Option$keywordArgList = function(flagName) {
        return A2(
          $dillonkearns$elm_cli_options_parser$Cli$Option$buildOption,
          function(_v0) {
            var options = _v0.aw;
            return $elm$core$Result$Ok(
              A2(
                $elm$core$List$filterMap,
                function(_v1) {
                  var optionName = _v1.a;
                  var optionKind = _v1.b;
                  var _v2 = _Utils_Tuple2(
                    _Utils_eq(optionName, flagName),
                    optionKind
                  );
                  if (!_v2.a) {
                    return $elm$core$Maybe$Nothing;
                  } else {
                    if (_v2.b.$ === 1) {
                      var optionValue = _v2.b.a;
                      return $elm$core$Maybe$Just(optionValue);
                    } else {
                      return $elm$core$Maybe$Nothing;
                    }
                  }
                },
                options
              )
            );
          },
          A2($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$keywordArg, flagName, 2)
        );
      };
      var $elm$core$List$map = F2(
        function(f, xs) {
          return A3(
            $elm$core$List$foldr,
            F2(
              function(x, acc) {
                return A2(
                  $elm$core$List$cons,
                  f(x),
                  acc
                );
              }
            ),
            _List_Nil,
            xs
          );
        }
      );
      var $elm$core$Basics$not = _Basics_not;
      var $dillonkearns$elm_cli_options_parser$Cli$Validate$Invalid = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Validate$Valid = { $: 0 };
      var $dillonkearns$elm_cli_options_parser$Cli$Validate$predicate = F2(
        function(message, predicateFunction) {
          return A2(
            $elm$core$Basics$composeR,
            predicateFunction,
            function(boolResult) {
              return boolResult ? $dillonkearns$elm_cli_options_parser$Cli$Validate$Valid : $dillonkearns$elm_cli_options_parser$Cli$Validate$Invalid(message);
            }
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$mapValidationErrors = F2(
        function(addValidationErrors, _v0) {
          var _function = _v0;
          var something = function(value) {
            var _v2 = addValidationErrors(value);
            if (!_v2.$) {
              var validationError = _v2.a;
              return _List_fromArray(
                [validationError]
              );
            } else {
              return _List_Nil;
            }
          };
          return A2(
            $elm$core$Basics$composeR,
            _function,
            function(fn) {
              return A2(
                $elm$core$Result$map,
                function(_v1) {
                  var validationErrors = _v1.a;
                  var value = _v1.b;
                  return _Utils_Tuple2(
                    _Utils_ap(
                      validationErrors,
                      something(value)
                    ),
                    value
                  );
                },
                fn
              );
            }
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name = function(usageSpec) {
        switch (usageSpec.$) {
          case 0:
            var option = usageSpec.a;
            var mutuallyExclusiveValues = usageSpec.b;
            var occurences = usageSpec.c;
            if (!option.$) {
              var flagName = option.a;
              return flagName;
            } else {
              var keywordArgName = option.a;
              return keywordArgName;
            }
          case 1:
            var operandOptionName = usageSpec.a;
            var mutuallyExclusiveValues = usageSpec.b;
            var occurences = usageSpec.c;
            return operandOptionName;
          default:
            var restArgsDescription = usageSpec.a;
            return restArgsDescription;
        }
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Option$validate = F2(
        function(validateFunction, _v0) {
          var option = _v0;
          var mappedDecoder = A2(
            $dillonkearns$elm_cli_options_parser$Cli$Decode$mapValidationErrors,
            function(value) {
              var _v1 = validateFunction(value);
              if (!_v1.$) {
                return $elm$core$Maybe$Nothing;
              } else {
                var invalidReason = _v1.a;
                return $elm$core$Maybe$Just(
                  {
                    ee: invalidReason,
                    x: $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name(option.I)
                  }
                );
              }
            },
            option.G
          );
          return _Utils_update(
            option,
            { G: mappedDecoder }
          );
        }
      );
      var $elm$core$Basics$composeL = F3(
        function(g, f, x) {
          return g(
            f(x)
          );
        }
      );
      var $elm$core$String$endsWith = _String_endsWith;
      var $elm$core$String$filter = _String_filter;
      var $elm$core$String$cons = _String_cons;
      var $elm$core$String$fromChar = function(_char) {
        return A2($elm$core$String$cons, _char, "");
      };
      var $elm$core$String$length = _String_length;
      var $elm$core$List$any = F2(
        function(isOkay, list) {
          any:
            while (true) {
              if (!list.b) {
                return false;
              } else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) {
                  return true;
                } else {
                  var $temp$isOkay = isOkay, $temp$list = xs;
                  isOkay = $temp$isOkay;
                  list = $temp$list;
                  continue any;
                }
              }
            }
        }
      );
      var $elm$core$List$member = F2(
        function(x, xs) {
          return A2(
            $elm$core$List$any,
            function(a) {
              return _Utils_eq(a, x);
            },
            xs
          );
        }
      );
      var $elm$core$String$foldr = _String_foldr;
      var $elm$core$String$toList = function(string) {
        return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
      };
      var $elm$core$String$toLower = _String_toLower;
      var $elm$core$String$trim = _String_trim;
      var $author$project$Main$validateContractName = function(contract) {
        var sanitizedContract = $elm$core$String$toLower(
          $elm$core$String$trim(contract)
        );
        var isCharacterAllowed = function(_char) {
          return $elm$core$Char$isAlpha(_char) || A2(
            $elm$core$List$member,
            _char,
            _List_fromArray(
              ["1", "2", "3", "4", "5", "."]
            )
          );
        };
        var _v0 = $elm$core$String$toList(
          A2(
            $elm$core$String$filter,
            A2($elm$core$Basics$composeL, $elm$core$Basics$not, isCharacterAllowed),
            sanitizedContract
          )
        );
        if (_v0.b) {
          if (!_v0.b.b) {
            var firstInvalidCharacter = _v0.a;
            return $elm$core$Result$Err(
              contract + (": Invalid character: " + ($elm$core$String$fromChar(firstInvalidCharacter) + "."))
            );
          } else {
            var invalidCharacters = _v0;
            return $elm$core$Result$Err(
              contract + (": Invalid characters: " + (A2(
                $elm$core$String$join,
                ", ",
                A2($elm$core$List$map, $elm$core$String$fromChar, invalidCharacters)
              ) + "."))
            );
          }
        } else {
          return $elm$core$String$length(sanitizedContract) > 12 ? $elm$core$Result$Err(contract + ": Contract name is too long. It must be 12 characters or less.") : A2($elm$core$String$endsWith, ".", sanitizedContract) ? $elm$core$Result$Err(contract + ": Contract name ends with `.`. You can use `.` in a contract name, just not as the last character.") : $elm$core$Result$Ok(sanitizedContract);
        }
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$UnrecoverableValidationError = function(a) {
        return { $: 2, a };
      };
      var $elm$core$Result$andThen = F2(
        function(callback, result) {
          if (!result.$) {
            var value = result.a;
            return callback(value);
          } else {
            var msg = result.a;
            return $elm$core$Result$Err(msg);
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$mapProcessingError = F2(
        function(mapFunction, _v0) {
          var _function = _v0;
          return A2(
            $elm$core$Basics$composeR,
            _function,
            function(fn) {
              return A2(
                $elm$core$Result$andThen,
                function(_v1) {
                  var validationErrors = _v1.a;
                  var value = _v1.b;
                  var _v2 = mapFunction(value);
                  if (!_v2.$) {
                    var mappedValue = _v2.a;
                    return $elm$core$Result$Ok(
                      _Utils_Tuple2(validationErrors, mappedValue)
                    );
                  } else {
                    var error = _v2.a;
                    return $elm$core$Result$Err(error);
                  }
                },
                fn
              );
            }
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Option$validateMap = F2(
        function(mapFn, option) {
          var optionRecord = option;
          return A2(
            $dillonkearns$elm_cli_options_parser$Cli$Option$updateDecoder,
            function(decoder) {
              return A2(
                $dillonkearns$elm_cli_options_parser$Cli$Decode$mapProcessingError,
                function(value) {
                  var _v0 = mapFn(value);
                  if (!_v0.$) {
                    var mappedValue = _v0.a;
                    return $elm$core$Result$Ok(mappedValue);
                  } else {
                    var invalidReason = _v0.a;
                    return $elm$core$Result$Err(
                      $dillonkearns$elm_cli_options_parser$Cli$Decode$UnrecoverableValidationError(
                        {
                          ee: invalidReason,
                          x: $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name(optionRecord.I)
                        }
                      )
                    );
                  }
                },
                decoder
              );
            },
            option
          );
        }
      );
      var $author$project$Main$contractsArg = A2(
        $dillonkearns$elm_cli_options_parser$Cli$Option$validateMap,
        A2(
          $elm$core$Basics$composeR,
          A2(
            $elm$core$List$foldr,
            F2(
              function(contract, context) {
                var _v0 = $author$project$Main$validateContractName(contract);
                if (!_v0.$) {
                  var validContract = _v0.a;
                  return _Utils_update(
                    context,
                    {
                      au: A2($elm$core$List$cons, validContract, context.au)
                    }
                  );
                } else {
                  var errorMessage = _v0.a;
                  return _Utils_update(
                    context,
                    {
                      am: A2($elm$core$List$cons, errorMessage, context.am)
                    }
                  );
                }
              }
            ),
            { am: _List_Nil, au: _List_Nil }
          ),
          function(_v1) {
            var errs = _v1.am;
            var oks = _v1.au;
            return $elm$core$List$isEmpty(errs) ? $elm$core$Result$Ok(oks) : $elm$core$Result$Err(
              "All contract names must be up to 12 characters long, with characters from a-Z, 1-5 and . (except for the last character, which can't be a .). Here are all the errors I found:\n\n" + (A2(
                $elm$core$String$join,
                "\n",
                A2(
                  $elm$core$List$map,
                  function(err) {
                    return "	- " + err;
                  },
                  errs
                )
              ) + "\n")
            );
          }
        ),
        A2(
          $dillonkearns$elm_cli_options_parser$Cli$Option$validate,
          A2(
            $dillonkearns$elm_cli_options_parser$Cli$Validate$predicate,
            "I need at least one contract. You can give me a list like this:\n\n	elm-eos https://mydomain.com/v1/chain --contract first --contract second --contract third\n",
            A2($elm$core$Basics$composeR, $elm$core$List$isEmpty, $elm$core$Basics$not)
          ),
          $dillonkearns$elm_cli_options_parser$Cli$Option$keywordArgList("contract")
        )
      );
      var $author$project$Main$outputArg = A2(
        $dillonkearns$elm_cli_options_parser$Cli$Option$map,
        $elm$core$Maybe$withDefault("generated"),
        $dillonkearns$elm_cli_options_parser$Cli$Option$optionalKeywordArg("output")
      );
      var $elm$core$Basics$negate = function(n) {
        return -n;
      };
      var $elm$core$String$slice = _String_slice;
      var $elm$core$String$dropRight = F2(
        function(n, string) {
          return n < 1 ? string : A3($elm$core$String$slice, 0, -n, string);
        }
      );
      var $elm$core$List$drop = F2(
        function(n, list) {
          drop:
            while (true) {
              if (n <= 0) {
                return list;
              } else {
                if (!list.b) {
                  return list;
                } else {
                  var x = list.a;
                  var xs = list.b;
                  var $temp$n = n - 1, $temp$list = xs;
                  n = $temp$n;
                  list = $temp$list;
                  continue drop;
                }
              }
            }
        }
      );
      var $elm$core$List$head = function(list) {
        if (list.b) {
          var x = list.a;
          var xs = list.b;
          return $elm$core$Maybe$Just(x);
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $elm_community$list_extra$List$Extra$getAt = F2(
        function(idx, xs) {
          return idx < 0 ? $elm$core$Maybe$Nothing : $elm$core$List$head(
            A2($elm$core$List$drop, idx, xs)
          );
        }
      );
      var $elm$core$String$concat = function(strings) {
        return A2($elm$core$String$join, "", strings);
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Option$listToString = function(list) {
        return $elm$core$String$concat(
          _List_fromArray(
            [
              "[",
              A2($elm$core$String$join, ", ", list),
              "]"
            ]
          )
        );
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$Operand = F3(
        function(a, b, c) {
          return { $: 1, a, b, c };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Occurences$Required = 1;
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$operand = function(operandName) {
        return A3($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$Operand, operandName, $elm$core$Maybe$Nothing, 1);
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Option$requiredPositionalArg = function(operandDescription) {
        return A2(
          $dillonkearns$elm_cli_options_parser$Cli$Option$buildOption,
          function(_v0) {
            var usageSpecs = _v0.a0;
            var operands = _v0.ae;
            var operandsSoFar = _v0.eB;
            var _v1 = A2($elm_community$list_extra$List$Extra$getAt, operandsSoFar, operands);
            if (!_v1.$) {
              var operandValue = _v1.a;
              return $elm$core$Result$Ok(operandValue);
            } else {
              return $elm$core$Result$Err(
                $dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError(
                  "Expect operand " + (operandDescription + ("at " + ($elm$core$String$fromInt(operandsSoFar) + (" but had operands " + $dillonkearns$elm_cli_options_parser$Cli$Option$listToString(operands)))))
                )
              );
            }
          },
          $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$operand(operandDescription)
        );
      };
      var $author$project$Main$urlArg = A2(
        $dillonkearns$elm_cli_options_parser$Cli$Option$map,
        function(url) {
          return A2($elm$core$String$endsWith, "/", url) ? A2($elm$core$String$dropRight, 1, url) : url;
        },
        $dillonkearns$elm_cli_options_parser$Cli$Option$requiredPositionalArg("url")
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$decodeFunction = function(_v0) {
        var decodeFn = _v0;
        return decodeFn;
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$operandCount = function(usageSpecs) {
        return $elm$core$List$length(
          A2(
            $elm$core$List$filterMap,
            function(spec) {
              switch (spec.$) {
                case 0:
                  return $elm$core$Maybe$Nothing;
                case 1:
                  var operandName = spec.a;
                  var mutuallyExclusiveValues = spec.b;
                  var occurences = spec.c;
                  return $elm$core$Maybe$Just(operandName);
                default:
                  return $elm$core$Maybe$Nothing;
              }
            },
            usageSpecs
          )
        );
      };
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$resultMap = F2(
        function(mapFunction, result) {
          return A2(
            $elm$core$Result$map,
            function(_v0) {
              var validationErrors = _v0.a;
              var value = _v0.b;
              return _Utils_Tuple2(
                validationErrors,
                mapFunction(value)
              );
            },
            result
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$updateDecoder = F2(
        function(decoder, _v0) {
          var optionsParserRecord = _v0;
          return { G: decoder, R: optionsParserRecord.R, Q: optionsParserRecord.Q, a0: optionsParserRecord.a0 };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withCommon = F2(
        function(_v0, fullOptionsParser) {
          var innerOption = _v0;
          var optionsParser = fullOptionsParser;
          var decoder = optionsParser.G;
          var usageSpecs = optionsParser.a0;
          return function(_v4) {
            var record = _v4;
            return _Utils_update(
              record,
              {
                a0: _Utils_ap(
                  usageSpecs,
                  _List_fromArray(
                    [innerOption.I]
                  )
                )
              }
            );
          }(
            A2(
              $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$updateDecoder,
              function(optionsAndOperands) {
                return A2(
                  $elm$core$Result$andThen,
                  function(_v1) {
                    var validationErrors = _v1.a;
                    var fromValue = _v1.b;
                    var _v2 = A2(
                      $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$resultMap,
                      function(fn) {
                        return fn(fromValue);
                      },
                      decoder(optionsAndOperands)
                    );
                    if (!_v2.$) {
                      var _v3 = _v2.a;
                      var previousValidationErrors = _v3.a;
                      var thing = _v3.b;
                      return $elm$core$Result$Ok(
                        _Utils_Tuple2(
                          _Utils_ap(previousValidationErrors, validationErrors),
                          thing
                        )
                      );
                    } else {
                      var value = _v2;
                      return value;
                    }
                  },
                  A2(
                    $elm$core$Result$andThen,
                    $dillonkearns$elm_cli_options_parser$Cli$Decode$decodeFunction(innerOption.G),
                    innerOption.aa(
                      {
                        ae: optionsAndOperands.ae,
                        eB: $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$operandCount(usageSpecs),
                        aw: optionsAndOperands.aw,
                        a0: optionsAndOperands.a0
                      }
                    )
                  )
                );
              },
              fullOptionsParser
            )
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$with = $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withCommon;
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withDoc = F2(
        function(docString, _v0) {
          var optionsParserRecord = _v0;
          return _Utils_update(
            optionsParserRecord,
            {
              R: $elm$core$Maybe$Just(docString)
            }
          );
        }
      );
      var $author$project$Main$baseUrlOptionsParser = A2(
        $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withDoc,
        "Get specified contracts from url. For example:\n\n	elm-eos https://mydomain.com/v1/chain --contract first --contract second --output generated --base My.Contract\n",
        A2(
          $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$with,
          $author$project$Main$contractsArg,
          A2(
            $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$with,
            $author$project$Main$baseArg,
            A2(
              $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$with,
              $author$project$Main$outputArg,
              A2(
                $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$with,
                $author$project$Main$urlArg,
                $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build(
                  F4(
                    function(url, output, base, contracts) {
                      return { aK: base, _: contracts, eD: output, aI: url };
                    }
                  )
                )
              )
            )
          )
        )
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Program$config = { ax: _List_Nil };
      var $author$project$Main$config = A2($dillonkearns$elm_cli_options_parser$Cli$Program$add, $author$project$Main$baseUrlOptionsParser, $dillonkearns$elm_cli_options_parser$Cli$Program$config);
      var $author$project$Main$GotAbis = function(a) {
        return { $: 0, a };
      };
      var $author$project$InteropDefinitions$WriteToFiles = function(a) {
        return { $: 2, a };
      };
      var $elm$core$Task$andThen = _Scheduler_andThen;
      var $elm$core$Task$Perform = $elm$core$Basics$identity;
      var $elm$core$Task$succeed = _Scheduler_succeed;
      var $elm$core$Task$init = $elm$core$Task$succeed(0);
      var $elm$core$Task$map = F2(
        function(func, taskA) {
          return A2(
            $elm$core$Task$andThen,
            function(a) {
              return $elm$core$Task$succeed(
                func(a)
              );
            },
            taskA
          );
        }
      );
      var $elm$core$Task$map2 = F3(
        function(func, taskA, taskB) {
          return A2(
            $elm$core$Task$andThen,
            function(a) {
              return A2(
                $elm$core$Task$andThen,
                function(b) {
                  return $elm$core$Task$succeed(
                    A2(func, a, b)
                  );
                },
                taskB
              );
            },
            taskA
          );
        }
      );
      var $elm$core$Task$sequence = function(tasks) {
        return A3(
          $elm$core$List$foldr,
          $elm$core$Task$map2($elm$core$List$cons),
          $elm$core$Task$succeed(_List_Nil),
          tasks
        );
      };
      var $elm$core$Platform$sendToApp = _Platform_sendToApp;
      var $elm$core$Task$spawnCmd = F2(
        function(router, _v0) {
          var task = _v0;
          return _Scheduler_spawn(
            A2(
              $elm$core$Task$andThen,
              $elm$core$Platform$sendToApp(router),
              task
            )
          );
        }
      );
      var $elm$core$Task$onEffects = F3(
        function(router, commands, state) {
          return A2(
            $elm$core$Task$map,
            function(_v0) {
              return 0;
            },
            $elm$core$Task$sequence(
              A2(
                $elm$core$List$map,
                $elm$core$Task$spawnCmd(router),
                commands
              )
            )
          );
        }
      );
      var $elm$core$Task$onSelfMsg = F3(
        function(_v0, _v1, _v2) {
          return $elm$core$Task$succeed(0);
        }
      );
      var $elm$core$Task$cmdMap = F2(
        function(tagger, _v0) {
          var task = _v0;
          return A2($elm$core$Task$map, tagger, task);
        }
      );
      _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
      var $elm$core$Task$command = _Platform_leaf("Task");
      var $elm$core$Task$onError = _Scheduler_onError;
      var $elm$core$Task$attempt = F2(
        function(resultToMessage, task) {
          return $elm$core$Task$command(
            A2(
              $elm$core$Task$onError,
              A2(
                $elm$core$Basics$composeL,
                A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
                $elm$core$Result$Err
              ),
              A2(
                $elm$core$Task$andThen,
                A2(
                  $elm$core$Basics$composeL,
                  A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
                  $elm$core$Result$Ok
                ),
                task
              )
            )
          );
        }
      );
      var $elm$json$Json$Decode$decodeString = _Json_runOnString;
      var $elm_community$maybe_extra$Maybe$Extra$combineHelp = F2(
        function(list, acc) {
          combineHelp:
            while (true) {
              if (list.b) {
                var head = list.a;
                var tail = list.b;
                if (!head.$) {
                  var a = head.a;
                  var $temp$list = tail, $temp$acc = A2($elm$core$List$cons, a, acc);
                  list = $temp$list;
                  acc = $temp$acc;
                  continue combineHelp;
                } else {
                  return $elm$core$Maybe$Nothing;
                }
              } else {
                return $elm$core$Maybe$Just(
                  $elm$core$List$reverse(acc)
                );
              }
            }
        }
      );
      var $elm_community$maybe_extra$Maybe$Extra$combine = function(list) {
        return A2($elm_community$maybe_extra$Maybe$Extra$combineHelp, list, _List_Nil);
      };
      var $elm$core$Basics$compare = _Utils_compare;
      var $elm$core$Dict$get = F2(
        function(targetKey, dict) {
          get:
            while (true) {
              if (dict.$ === -2) {
                return $elm$core$Maybe$Nothing;
              } else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = A2($elm$core$Basics$compare, targetKey, key);
                switch (_v1) {
                  case 0:
                    var $temp$targetKey = targetKey, $temp$dict = left;
                    targetKey = $temp$targetKey;
                    dict = $temp$dict;
                    continue get;
                  case 1:
                    return $elm$core$Maybe$Just(value);
                  default:
                    var $temp$targetKey = targetKey, $temp$dict = right;
                    targetKey = $temp$targetKey;
                    dict = $temp$dict;
                    continue get;
                }
              }
            }
        }
      );
      var $elm$core$Maybe$map2 = F3(
        function(func, ma, mb) {
          if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
          } else {
            var a = ma.a;
            if (mb.$ === 1) {
              return $elm$core$Maybe$Nothing;
            } else {
              var b = mb.a;
              return $elm$core$Maybe$Just(
                A2(func, a, b)
              );
            }
          }
        }
      );
      var $author$project$Abi$abiFromRaw = function(rawAbi) {
        var maybeTables = $elm_community$maybe_extra$Maybe$Extra$combine(
          A2(
            $elm$core$List$map,
            function(rawTable) {
              return A2(
                $elm$core$Maybe$map,
                function(fields) {
                  return { bi: fields, x: rawTable.x };
                },
                A2($elm$core$Dict$get, rawTable.aL, rawAbi.aE)
              );
            },
            rawAbi.ah
          )
        );
        var maybeActions = $elm_community$maybe_extra$Maybe$Extra$combine(
          A2(
            $elm$core$List$map,
            function(rawAction) {
              return A2(
                $elm$core$Maybe$map,
                function(fields) {
                  return { a6: fields, x: rawAction.x };
                },
                A2($elm$core$Dict$get, rawAction.aJ, rawAbi.aE)
              );
            },
            rawAbi.Y
          )
        );
        return A3(
          $elm$core$Maybe$map2,
          F2(
            function(actions, tables) {
              return { Y: actions, ah: tables };
            }
          ),
          maybeActions,
          maybeTables
        );
      };
      var $elm$json$Json$Decode$fail = _Json_fail;
      var $elm$json$Json$Decode$field = _Json_decodeField;
      var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
      var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
      var $elm$core$Dict$Black = 1;
      var $elm$core$Dict$RBNode_elm_builtin = F5(
        function(a, b, c, d, e) {
          return { $: -1, a, b, c, d, e };
        }
      );
      var $elm$core$Dict$Red = 0;
      var $elm$core$Dict$balance = F5(
        function(color, key, value, left, right) {
          if (right.$ === -1 && !right.a) {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if (left.$ === -1 && !left.a) {
              var _v3 = left.a;
              var lK = left.b;
              var lV = left.c;
              var lLeft = left.d;
              var lRight = left.e;
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                0,
                key,
                value,
                A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
                A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight)
              );
            } else {
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                color,
                rK,
                rV,
                A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
                rRight
              );
            }
          } else {
            if (left.$ === -1 && !left.a && left.d.$ === -1 && !left.d.a) {
              var _v5 = left.a;
              var lK = left.b;
              var lV = left.c;
              var _v6 = left.d;
              var _v7 = _v6.a;
              var llK = _v6.b;
              var llV = _v6.c;
              var llLeft = _v6.d;
              var llRight = _v6.e;
              var lRight = left.e;
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                0,
                lK,
                lV,
                A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
                A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right)
              );
            } else {
              return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
            }
          }
        }
      );
      var $elm$core$Dict$insertHelp = F3(
        function(key, value, dict) {
          if (dict.$ === -2) {
            return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
          } else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = A2($elm$core$Basics$compare, key, nKey);
            switch (_v1) {
              case 0:
                return A5(
                  $elm$core$Dict$balance,
                  nColor,
                  nKey,
                  nValue,
                  A3($elm$core$Dict$insertHelp, key, value, nLeft),
                  nRight
                );
              case 1:
                return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
              default:
                return A5(
                  $elm$core$Dict$balance,
                  nColor,
                  nKey,
                  nValue,
                  nLeft,
                  A3($elm$core$Dict$insertHelp, key, value, nRight)
                );
            }
          }
        }
      );
      var $elm$core$Dict$insert = F3(
        function(key, value, dict) {
          var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
          if (_v0.$ === -1 && !_v0.a) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
          } else {
            var x = _v0;
            return x;
          }
        }
      );
      var $elm$core$Dict$fromList = function(assocs) {
        return A3(
          $elm$core$List$foldl,
          F2(
            function(_v0, dict) {
              var key = _v0.a;
              var value = _v0.b;
              return A3($elm$core$Dict$insert, key, value, dict);
            }
          ),
          $elm$core$Dict$empty,
          assocs
        );
      };
      var $elm$json$Json$Decode$list = _Json_decodeList;
      var $elm$json$Json$Decode$map3 = _Json_map3;
      var $elm$json$Json$Decode$map2 = _Json_map2;
      var $elm$json$Json$Decode$string = _Json_decodeString;
      var $author$project$Abi$rawActionDecoder = A3(
        $elm$json$Json$Decode$map2,
        F2(
          function(name, argumentsField) {
            return { aJ: argumentsField, x: name };
          }
        ),
        A2($elm$json$Json$Decode$field, "name", $elm$json$Json$Decode$string),
        A2($elm$json$Json$Decode$field, "type", $elm$json$Json$Decode$string)
      );
      var $author$project$Abi$rawTableDecoder = A3(
        $elm$json$Json$Decode$map2,
        F2(
          function(name, columnsField) {
            return { aL: columnsField, x: name };
          }
        ),
        A2($elm$json$Json$Decode$field, "name", $elm$json$Json$Decode$string),
        A2($elm$json$Json$Decode$field, "type", $elm$json$Json$Decode$string)
      );
      var $author$project$EosType$Asset = { $: 13 };
      var $author$project$EosType$BlockTimestampType = { $: 5 };
      var $author$project$EosType$Checksum = { $: 8 };
      var $author$project$EosType$EosBool = { $: 0 };
      var $author$project$EosType$EosFloat = { $: 2 };
      var $author$project$EosType$EosInt = { $: 1 };
      var $author$project$EosType$EosList = function(a) {
        return { $: 15, a };
      };
      var $author$project$EosType$EosString = { $: 7 };
      var $author$project$EosType$ExtendedAsset = { $: 14 };
      var $author$project$EosType$Name = { $: 6 };
      var $author$project$EosType$PublicKey = { $: 9 };
      var $author$project$EosType$Signature = { $: 10 };
      var $author$project$EosType$Symbol = { $: 11 };
      var $author$project$EosType$SymbolCode = { $: 12 };
      var $author$project$EosType$TimePoint = { $: 3 };
      var $author$project$EosType$TimePointSec = { $: 4 };
      var $author$project$EosType$fromString = function(stringType) {
        if (A2($elm$core$String$endsWith, "[]", stringType)) {
          return A2(
            $elm$core$Maybe$map,
            $author$project$EosType$EosList,
            $author$project$EosType$fromString(
              A2($elm$core$String$dropRight, 2, stringType)
            )
          );
        } else {
          switch (stringType) {
            case "bool":
              return $elm$core$Maybe$Just($author$project$EosType$EosBool);
            case "int8":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "uint8":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "int16":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "uint16":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "int32":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "uint32":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "int64":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "uint64":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "int128":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "uint128":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "varint32":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "varuint32":
              return $elm$core$Maybe$Just($author$project$EosType$EosInt);
            case "float32":
              return $elm$core$Maybe$Just($author$project$EosType$EosFloat);
            case "float64":
              return $elm$core$Maybe$Just($author$project$EosType$EosFloat);
            case "float128":
              return $elm$core$Maybe$Just($author$project$EosType$EosFloat);
            case "time_point":
              return $elm$core$Maybe$Just($author$project$EosType$TimePoint);
            case "time_point_sec":
              return $elm$core$Maybe$Just($author$project$EosType$TimePointSec);
            case "block_timestamp_type":
              return $elm$core$Maybe$Just($author$project$EosType$BlockTimestampType);
            case "name":
              return $elm$core$Maybe$Just($author$project$EosType$Name);
            case "string":
              return $elm$core$Maybe$Just($author$project$EosType$EosString);
            case "checksum160":
              return $elm$core$Maybe$Just($author$project$EosType$Checksum);
            case "checksum256":
              return $elm$core$Maybe$Just($author$project$EosType$Checksum);
            case "checksum512":
              return $elm$core$Maybe$Just($author$project$EosType$Checksum);
            case "public_key":
              return $elm$core$Maybe$Just($author$project$EosType$PublicKey);
            case "signature":
              return $elm$core$Maybe$Just($author$project$EosType$Signature);
            case "symbol":
              return $elm$core$Maybe$Just($author$project$EosType$Symbol);
            case "symbol_code":
              return $elm$core$Maybe$Just($author$project$EosType$SymbolCode);
            case "asset":
              return $elm$core$Maybe$Just($author$project$EosType$Asset);
            case "extended_asset":
              return $elm$core$Maybe$Just($author$project$EosType$ExtendedAsset);
            default:
              return $elm$core$Maybe$Nothing;
          }
        }
      };
      var $elm$json$Json$Decode$succeed = _Json_succeed;
      var $author$project$EosType$decoder = A2(
        $elm$json$Json$Decode$andThen,
        function(decodedString) {
          var _v0 = $author$project$EosType$fromString(decodedString);
          if (_v0.$ === 1) {
            return $elm$json$Json$Decode$fail("Invalid eos type.");
          } else {
            var validType = _v0.a;
            return $elm$json$Json$Decode$succeed(validType);
          }
        },
        $elm$json$Json$Decode$string
      );
      var $author$project$Abi$fieldDecoder = A3(
        $elm$json$Json$Decode$map2,
        F2(
          function(name, type_) {
            return { x: name, $7: type_ };
          }
        ),
        A2($elm$json$Json$Decode$field, "name", $elm$json$Json$Decode$string),
        A2($elm$json$Json$Decode$field, "type", $author$project$EosType$decoder)
      );
      var $author$project$Abi$structDecoder = A3(
        $elm$json$Json$Decode$map2,
        F2(
          function(name, fields) {
            return { bF: fields, x: name };
          }
        ),
        A2($elm$json$Json$Decode$field, "name", $elm$json$Json$Decode$string),
        A2(
          $elm$json$Json$Decode$field,
          "fields",
          $elm$json$Json$Decode$list($author$project$Abi$fieldDecoder)
        )
      );
      var $author$project$Abi$rawAbiDecoder = A4(
        $elm$json$Json$Decode$map3,
        F3(
          function(structs, actions, tables) {
            return {
              Y: actions,
              aE: $elm$core$Dict$fromList(
                A2(
                  $elm$core$List$map,
                  function(_v0) {
                    var name = _v0.x;
                    var fields = _v0.bF;
                    return _Utils_Tuple2(name, fields);
                  },
                  structs
                )
              ),
              ah: tables
            };
          }
        ),
        A2(
          $elm$json$Json$Decode$field,
          "structs",
          $elm$json$Json$Decode$list($author$project$Abi$structDecoder)
        ),
        A2(
          $elm$json$Json$Decode$field,
          "actions",
          $elm$json$Json$Decode$list($author$project$Abi$rawActionDecoder)
        ),
        A2(
          $elm$json$Json$Decode$field,
          "tables",
          $elm$json$Json$Decode$list($author$project$Abi$rawTableDecoder)
        )
      );
      var $author$project$Abi$decoder = A2(
        $elm$json$Json$Decode$andThen,
        function(rawAbi) {
          var _v0 = $author$project$Abi$abiFromRaw(rawAbi);
          if (_v0.$ === 1) {
            return $elm$json$Json$Decode$fail("Invalid ABI");
          } else {
            var validAbi = _v0.a;
            return $elm$json$Json$Decode$succeed(validAbi);
          }
        },
        $author$project$Abi$rawAbiDecoder
      );
      var $dillonkearns$elm_ts_json$TsJson$Encode$encoder = F2(
        function(_v0, input) {
          var encodeFn = _v0.a;
          return encodeFn(input);
        }
      );
      var $dillonkearns$elm_ts_json$TsJson$Internal$Decode$Decoder = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$ArrayIndex = F2(
        function(a, b) {
          return { $: 5, a, b };
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$Intersection = function(a) {
        return { $: 13, a };
      };
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$Optional = 0;
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$Required = 1;
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$TsNever = { $: 12 };
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$TypeObject = function(a) {
        return { $: 8, a };
      };
      var $elm$core$Dict$values = function(dict) {
        return A3(
          $elm$core$Dict$foldr,
          F3(
            function(key, value, valueList) {
              return A2($elm$core$List$cons, value, valueList);
            }
          ),
          _List_Nil,
          dict
        );
      };
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$deduplicateBy = F2(
        function(toComparable, list) {
          return $elm$core$Dict$values(
            A3(
              $elm$core$List$foldl,
              F2(
                function(value, accum) {
                  return A3(
                    $elm$core$Dict$insert,
                    toComparable(value),
                    value,
                    accum
                  );
                }
              ),
              $elm$core$Dict$empty,
              list
            )
          );
        }
      );
      var $elm$core$Dict$getMin = function(dict) {
        getMin:
          while (true) {
            if (dict.$ === -1 && dict.d.$ === -1) {
              var left = dict.d;
              var $temp$dict = left;
              dict = $temp$dict;
              continue getMin;
            } else {
              return dict;
            }
          }
      };
      var $elm$core$Dict$moveRedLeft = function(dict) {
        if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
          if (dict.e.d.$ === -1 && !dict.e.d.a) {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v1 = dict.d;
            var lClr = _v1.a;
            var lK = _v1.b;
            var lV = _v1.c;
            var lLeft = _v1.d;
            var lRight = _v1.e;
            var _v2 = dict.e;
            var rClr = _v2.a;
            var rK = _v2.b;
            var rV = _v2.c;
            var rLeft = _v2.d;
            var _v3 = rLeft.a;
            var rlK = rLeft.b;
            var rlV = rLeft.c;
            var rlL = rLeft.d;
            var rlR = rLeft.e;
            var rRight = _v2.e;
            return A5(
              $elm$core$Dict$RBNode_elm_builtin,
              0,
              rlK,
              rlV,
              A5(
                $elm$core$Dict$RBNode_elm_builtin,
                1,
                k,
                v,
                A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
                rlL
              ),
              A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight)
            );
          } else {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v4 = dict.d;
            var lClr = _v4.a;
            var lK = _v4.b;
            var lV = _v4.c;
            var lLeft = _v4.d;
            var lRight = _v4.e;
            var _v5 = dict.e;
            var rClr = _v5.a;
            var rK = _v5.b;
            var rV = _v5.c;
            var rLeft = _v5.d;
            var rRight = _v5.e;
            if (clr === 1) {
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                1,
                k,
                v,
                A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
                A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
              );
            } else {
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                1,
                k,
                v,
                A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
                A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
              );
            }
          }
        } else {
          return dict;
        }
      };
      var $elm$core$Dict$moveRedRight = function(dict) {
        if (dict.$ === -1 && dict.d.$ === -1 && dict.e.$ === -1) {
          if (dict.d.d.$ === -1 && !dict.d.d.a) {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v1 = dict.d;
            var lClr = _v1.a;
            var lK = _v1.b;
            var lV = _v1.c;
            var _v2 = _v1.d;
            var _v3 = _v2.a;
            var llK = _v2.b;
            var llV = _v2.c;
            var llLeft = _v2.d;
            var llRight = _v2.e;
            var lRight = _v1.e;
            var _v4 = dict.e;
            var rClr = _v4.a;
            var rK = _v4.b;
            var rV = _v4.c;
            var rLeft = _v4.d;
            var rRight = _v4.e;
            return A5(
              $elm$core$Dict$RBNode_elm_builtin,
              0,
              lK,
              lV,
              A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
              A5(
                $elm$core$Dict$RBNode_elm_builtin,
                1,
                k,
                v,
                lRight,
                A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
              )
            );
          } else {
            var clr = dict.a;
            var k = dict.b;
            var v = dict.c;
            var _v5 = dict.d;
            var lClr = _v5.a;
            var lK = _v5.b;
            var lV = _v5.c;
            var lLeft = _v5.d;
            var lRight = _v5.e;
            var _v6 = dict.e;
            var rClr = _v6.a;
            var rK = _v6.b;
            var rV = _v6.c;
            var rLeft = _v6.d;
            var rRight = _v6.e;
            if (clr === 1) {
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                1,
                k,
                v,
                A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
                A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
              );
            } else {
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                1,
                k,
                v,
                A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
                A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)
              );
            }
          }
        } else {
          return dict;
        }
      };
      var $elm$core$Dict$removeHelpPrepEQGT = F7(
        function(targetKey, dict, color, key, value, left, right) {
          if (left.$ === -1 && !left.a) {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return A5(
              $elm$core$Dict$RBNode_elm_builtin,
              color,
              lK,
              lV,
              lLeft,
              A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right)
            );
          } else {
            _v2$2:
              while (true) {
                if (right.$ === -1 && right.a === 1) {
                  if (right.d.$ === -1) {
                    if (right.d.a === 1) {
                      var _v3 = right.a;
                      var _v4 = right.d;
                      var _v5 = _v4.a;
                      return $elm$core$Dict$moveRedRight(dict);
                    } else {
                      break _v2$2;
                    }
                  } else {
                    var _v6 = right.a;
                    var _v7 = right.d;
                    return $elm$core$Dict$moveRedRight(dict);
                  }
                } else {
                  break _v2$2;
                }
              }
            return dict;
          }
        }
      );
      var $elm$core$Dict$removeMin = function(dict) {
        if (dict.$ === -1 && dict.d.$ === -1) {
          var color = dict.a;
          var key = dict.b;
          var value = dict.c;
          var left = dict.d;
          var lColor = left.a;
          var lLeft = left.d;
          var right = dict.e;
          if (lColor === 1) {
            if (lLeft.$ === -1 && !lLeft.a) {
              var _v3 = lLeft.a;
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                color,
                key,
                value,
                $elm$core$Dict$removeMin(left),
                right
              );
            } else {
              var _v4 = $elm$core$Dict$moveRedLeft(dict);
              if (_v4.$ === -1) {
                var nColor = _v4.a;
                var nKey = _v4.b;
                var nValue = _v4.c;
                var nLeft = _v4.d;
                var nRight = _v4.e;
                return A5(
                  $elm$core$Dict$balance,
                  nColor,
                  nKey,
                  nValue,
                  $elm$core$Dict$removeMin(nLeft),
                  nRight
                );
              } else {
                return $elm$core$Dict$RBEmpty_elm_builtin;
              }
            }
          } else {
            return A5(
              $elm$core$Dict$RBNode_elm_builtin,
              color,
              key,
              value,
              $elm$core$Dict$removeMin(left),
              right
            );
          }
        } else {
          return $elm$core$Dict$RBEmpty_elm_builtin;
        }
      };
      var $elm$core$Dict$removeHelp = F2(
        function(targetKey, dict) {
          if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
          } else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
              if (left.$ === -1 && left.a === 1) {
                var _v4 = left.a;
                var lLeft = left.d;
                if (lLeft.$ === -1 && !lLeft.a) {
                  var _v6 = lLeft.a;
                  return A5(
                    $elm$core$Dict$RBNode_elm_builtin,
                    color,
                    key,
                    value,
                    A2($elm$core$Dict$removeHelp, targetKey, left),
                    right
                  );
                } else {
                  var _v7 = $elm$core$Dict$moveRedLeft(dict);
                  if (_v7.$ === -1) {
                    var nColor = _v7.a;
                    var nKey = _v7.b;
                    var nValue = _v7.c;
                    var nLeft = _v7.d;
                    var nRight = _v7.e;
                    return A5(
                      $elm$core$Dict$balance,
                      nColor,
                      nKey,
                      nValue,
                      A2($elm$core$Dict$removeHelp, targetKey, nLeft),
                      nRight
                    );
                  } else {
                    return $elm$core$Dict$RBEmpty_elm_builtin;
                  }
                }
              } else {
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  color,
                  key,
                  value,
                  A2($elm$core$Dict$removeHelp, targetKey, left),
                  right
                );
              }
            } else {
              return A2(
                $elm$core$Dict$removeHelpEQGT,
                targetKey,
                A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right)
              );
            }
          }
        }
      );
      var $elm$core$Dict$removeHelpEQGT = F2(
        function(targetKey, dict) {
          if (dict.$ === -1) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
              var _v1 = $elm$core$Dict$getMin(right);
              if (_v1.$ === -1) {
                var minKey = _v1.b;
                var minValue = _v1.c;
                return A5(
                  $elm$core$Dict$balance,
                  color,
                  minKey,
                  minValue,
                  left,
                  $elm$core$Dict$removeMin(right)
                );
              } else {
                return $elm$core$Dict$RBEmpty_elm_builtin;
              }
            } else {
              return A5(
                $elm$core$Dict$balance,
                color,
                key,
                value,
                left,
                A2($elm$core$Dict$removeHelp, targetKey, right)
              );
            }
          } else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
          }
        }
      );
      var $elm$core$Dict$remove = F2(
        function(key, dict) {
          var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
          if (_v0.$ === -1 && !_v0.a) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
          } else {
            var x = _v0;
            return x;
          }
        }
      );
      var $elm$core$Dict$update = F3(
        function(targetKey, alter, dictionary) {
          var _v0 = alter(
            A2($elm$core$Dict$get, targetKey, dictionary)
          );
          if (!_v0.$) {
            var value = _v0.a;
            return A3($elm$core$Dict$insert, targetKey, value, dictionary);
          } else {
            return A2($elm$core$Dict$remove, targetKey, dictionary);
          }
        }
      );
      var $elm_community$dict_extra$Dict$Extra$insertDedupe = F4(
        function(combine, key, value, dict) {
          var _with = function(mbValue) {
            if (!mbValue.$) {
              var oldValue = mbValue.a;
              return $elm$core$Maybe$Just(
                A2(combine, oldValue, value)
              );
            } else {
              return $elm$core$Maybe$Just(value);
            }
          };
          return A3($elm$core$Dict$update, key, _with, dict);
        }
      );
      var $elm_community$dict_extra$Dict$Extra$fromListDedupeBy = F3(
        function(combine, keyfn, xs) {
          return A3(
            $elm$core$List$foldl,
            F2(
              function(x, acc) {
                return A4(
                  $elm_community$dict_extra$Dict$Extra$insertDedupe,
                  combine,
                  keyfn(x),
                  x,
                  acc
                );
              }
            ),
            $elm$core$Dict$empty,
            xs
          );
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$either = F2(
        function(predicateFn, _v0) {
          var type1 = _v0.a;
          var type2 = _v0.b;
          return predicateFn(type1) || predicateFn(type2);
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$isNonEmptyObject = function(tsType) {
        if (tsType.$ === 8 && tsType.a.b) {
          var _v1 = tsType.a;
          var atLeastOne = _v1.a;
          var possiblyMore = _v1.b;
          return true;
        } else {
          return false;
        }
      };
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$isPrimitive = function(tsType) {
        switch (tsType.$) {
          case 2:
            return true;
          case 1:
            return true;
          case 0:
            return true;
          case 3:
            return true;
          default:
            return false;
        }
      };
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$isContradictory = function(types) {
        return A2($dillonkearns$elm_ts_json$Internal$TypeReducer$either, $dillonkearns$elm_ts_json$Internal$TypeReducer$isNonEmptyObject, types) && A2($dillonkearns$elm_ts_json$Internal$TypeReducer$either, $dillonkearns$elm_ts_json$Internal$TypeReducer$isPrimitive, types);
      };
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$Unknown = { $: 11 };
      var $elm$core$List$maximum = function(list) {
        if (list.b) {
          var x = list.a;
          var xs = list.b;
          return $elm$core$Maybe$Just(
            A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs)
          );
        } else {
          return $elm$core$Maybe$Nothing;
        }
      };
      var $dillonkearns$elm_ts_json$Internal$TypeToString$parenthesize = function(string) {
        return "(" + (string + ")");
      };
      var $dillonkearns$elm_ts_json$Internal$TypeToString$doubleQuote = function(string) {
        return '"' + (string + '"');
      };
      var $elm$regex$Regex$Match = F4(
        function(match, index, number, submatches) {
          return { bV: index, V: match, ey: number, eV: submatches };
        }
      );
      var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
      var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
      var $elm$regex$Regex$fromString = function(string) {
        return A2(
          $elm$regex$Regex$fromStringWith,
          { dN: false, el: false },
          string
        );
      };
      var $elm$regex$Regex$never = _Regex_never;
      var $dillonkearns$elm_ts_json$Internal$TypeToString$identifierRegex = A2(
        $elm$core$Maybe$withDefault,
        $elm$regex$Regex$never,
        $elm$regex$Regex$fromString("^[a-zA-Z_][a-zA-Z0-9_]*$")
      );
      var $dillonkearns$elm_ts_json$Internal$TypeToString$isIdentifier = A2(
        $elm$core$Basics$composeR,
        $elm$regex$Regex$find($dillonkearns$elm_ts_json$Internal$TypeToString$identifierRegex),
        $elm$core$List$isEmpty
      );
      var $dillonkearns$elm_ts_json$Internal$TypeToString$quoteObjectKey = function(key) {
        var needsQuotes = $dillonkearns$elm_ts_json$Internal$TypeToString$isIdentifier(key);
        return needsQuotes ? $dillonkearns$elm_ts_json$Internal$TypeToString$doubleQuote(key) : key;
      };
      var $elm$core$List$sortBy = _List_sortBy;
      var $dillonkearns$elm_ts_json$Internal$TypeToString$parenthesizeToString = function(type_) {
        var needsParens = function() {
          if (type_.$ === 10) {
            var types = type_.a;
            return true;
          } else {
            return false;
          }
        }();
        return needsParens ? $dillonkearns$elm_ts_json$Internal$TypeToString$parenthesize(
          $dillonkearns$elm_ts_json$Internal$TypeToString$toString(type_)
        ) : $dillonkearns$elm_ts_json$Internal$TypeToString$toString(type_);
      };
      var $dillonkearns$elm_ts_json$Internal$TypeToString$toString = function(tsType_) {
        switch (tsType_.$) {
          case 12:
            return "never";
          case 0:
            return "string";
          case 1:
            return "number";
          case 2:
            return "number";
          case 3:
            return "boolean";
          case 11:
            return "JsonValue";
          case 4:
            var listType = tsType_.a;
            return $dillonkearns$elm_ts_json$Internal$TypeToString$parenthesizeToString(listType) + "[]";
          case 7:
            var literalValue = tsType_.a;
            return A2($elm$json$Json$Encode$encode, 0, literalValue);
          case 10:
            var _v1 = tsType_.a;
            var firstType = _v1.a;
            var tsTypes = _v1.b;
            return A2(
              $elm$core$String$join,
              " | ",
              A2(
                $elm$core$List$map,
                $dillonkearns$elm_ts_json$Internal$TypeToString$parenthesizeToString,
                A2($elm$core$List$cons, firstType, tsTypes)
              )
            );
          case 8:
            var keyTypes = tsType_.a;
            return "{ " + (A2(
              $elm$core$String$join,
              "; ",
              A2(
                $elm$core$List$map,
                function(_v3) {
                  var optionality = _v3.a;
                  var key = _v3.b;
                  var tsType__ = _v3.c;
                  var quotedKey = $dillonkearns$elm_ts_json$Internal$TypeToString$quoteObjectKey(key);
                  return function() {
                    if (optionality === 1) {
                      return quotedKey;
                    } else {
                      return quotedKey + "?";
                    }
                  }() + (" : " + $dillonkearns$elm_ts_json$Internal$TypeToString$toString(tsType__));
                },
                A2(
                  $elm$core$List$sortBy,
                  function(_v2) {
                    var fieldName = _v2.b;
                    return fieldName;
                  },
                  keyTypes
                )
              )
            ) + " }");
          case 9:
            var tsType = tsType_.a;
            return "{ [key: string]: " + ($dillonkearns$elm_ts_json$Internal$TypeToString$toString(tsType) + " }");
          case 6:
            var tsTypes = tsType_.a;
            var maybeRestType = tsType_.b;
            var restTypePart = A2(
              $elm$core$Maybe$map,
              function(restType) {
                return "...(" + ($dillonkearns$elm_ts_json$Internal$TypeToString$toString(restType) + ")[]");
              },
              maybeRestType
            );
            return "[ " + (A2(
              $elm$core$String$join,
              ", ",
              A2(
                $elm$core$List$filterMap,
                $elm$core$Basics$identity,
                _Utils_ap(
                  A2(
                    $elm$core$List$map,
                    function(type_) {
                      return $elm$core$Maybe$Just(
                        $dillonkearns$elm_ts_json$Internal$TypeToString$toString(type_)
                      );
                    },
                    tsTypes
                  ),
                  _List_fromArray(
                    [restTypePart]
                  )
                )
              )
            ) + " ]");
          case 13:
            var types = tsType_.a;
            return $dillonkearns$elm_ts_json$Internal$TypeToString$parenthesize(
              A2(
                $elm$core$String$join,
                " & ",
                A2($elm$core$List$map, $dillonkearns$elm_ts_json$Internal$TypeToString$parenthesizeToString, types)
              )
            );
          default:
            var _v5 = tsType_.a;
            var index = _v5.a;
            var tsType = _v5.b;
            var otherIndices = tsType_.b;
            var dict = $elm$core$Dict$fromList(
              A2(
                $elm$core$List$cons,
                _Utils_Tuple2(index, tsType),
                otherIndices
              )
            );
            var highestIndex = A2(
              $elm$core$Maybe$withDefault,
              0,
              $elm$core$List$maximum(
                $elm$core$Dict$keys(dict)
              )
            );
            return "[" + (A2(
              $elm$core$String$join,
              ",",
              _Utils_ap(
                A2(
                  $elm$core$List$map,
                  function(cur) {
                    return $dillonkearns$elm_ts_json$Internal$TypeToString$toString(
                      A2(
                        $elm$core$Maybe$withDefault,
                        $dillonkearns$elm_ts_json$Internal$TsJsonType$Unknown,
                        A2($elm$core$Dict$get, cur, dict)
                      )
                    );
                  },
                  A2($elm$core$List$range, 0, highestIndex)
                ),
                _List_fromArray(
                  ["...JsonValue[]"]
                )
              )
            ) + "]");
        }
      };
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$intersect = F2(
        function(type1, type2) {
          if ($dillonkearns$elm_ts_json$Internal$TypeReducer$isContradictory(
            _Utils_Tuple2(type1, type2)
          )) {
            return $dillonkearns$elm_ts_json$Internal$TsJsonType$TsNever;
          } else {
            if (_Utils_eq(type1, type2)) {
              return type1;
            } else {
              var _v8 = _Utils_Tuple2(type1, type2);
              _v8$1:
                while (true) {
                  _v8$8:
                    while (true) {
                      switch (_v8.a.$) {
                        case 11:
                          var _v9 = _v8.a;
                          var known = _v8.b;
                          return known;
                        case 13:
                          switch (_v8.b.$) {
                            case 11:
                              break _v8$1;
                            case 13:
                              var types1 = _v8.a.a;
                              var types2 = _v8.b.a;
                              return $dillonkearns$elm_ts_json$Internal$TypeReducer$simplifyIntersection(
                                _Utils_ap(types1, types2)
                              );
                            default:
                              break _v8$8;
                          }
                        case 5:
                          switch (_v8.b.$) {
                            case 11:
                              break _v8$1;
                            case 5:
                              if (!_v8.a.b.b && !_v8.b.b.b) {
                                var _v11 = _v8.a;
                                var _v12 = _v11.a;
                                var index1 = _v12.a;
                                var indexType1 = _v12.b;
                                var _v13 = _v8.b;
                                var _v14 = _v13.a;
                                var index2 = _v14.a;
                                var indexType2 = _v14.b;
                                return A2(
                                  $dillonkearns$elm_ts_json$Internal$TsJsonType$ArrayIndex,
                                  _Utils_Tuple2(index1, indexType1),
                                  _List_fromArray(
                                    [
                                      _Utils_Tuple2(index2, indexType2)
                                    ]
                                  )
                                );
                              } else {
                                break _v8$8;
                              }
                            default:
                              break _v8$8;
                          }
                        case 8:
                          switch (_v8.b.$) {
                            case 11:
                              break _v8$1;
                            case 8:
                              var fields1 = _v8.a.a;
                              var fields2 = _v8.b.a;
                              return $dillonkearns$elm_ts_json$Internal$TsJsonType$TypeObject(
                                A2($dillonkearns$elm_ts_json$Internal$TypeReducer$mergeFields, fields1, fields2)
                              );
                            case 10:
                              var fields1 = _v8.a.a;
                              var unionedTypes = _v8.b.a;
                              return $dillonkearns$elm_ts_json$Internal$TsJsonType$Intersection(
                                _List_fromArray(
                                  [type1, type2]
                                )
                              );
                            default:
                              break _v8$8;
                          }
                        case 0:
                          switch (_v8.b.$) {
                            case 11:
                              break _v8$1;
                            case 2:
                              var _v15 = _v8.a;
                              var _v16 = _v8.b;
                              return $dillonkearns$elm_ts_json$Internal$TsJsonType$TsNever;
                            default:
                              break _v8$8;
                          }
                        case 2:
                          switch (_v8.b.$) {
                            case 11:
                              break _v8$1;
                            case 0:
                              var _v17 = _v8.a;
                              var _v18 = _v8.b;
                              return $dillonkearns$elm_ts_json$Internal$TsJsonType$TsNever;
                            default:
                              break _v8$8;
                          }
                        default:
                          if (_v8.b.$ === 11) {
                            break _v8$1;
                          } else {
                            break _v8$8;
                          }
                      }
                    }
                  return _Utils_eq(type1, type2) ? type1 : $dillonkearns$elm_ts_json$Internal$TsJsonType$Intersection(
                    _List_fromArray(
                      [type1, type2]
                    )
                  );
                }
              var known = _v8.a;
              var _v10 = _v8.b;
              return known;
            }
          }
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$mergeFields = F2(
        function(fields1, fields2) {
          return $elm$core$Dict$values(
            A3(
              $elm_community$dict_extra$Dict$Extra$fromListDedupeBy,
              F2(
                function(_v5, _v6) {
                  var optionality1 = _v5.a;
                  var fieldName1 = _v5.b;
                  var fieldType1 = _v5.c;
                  var optionality2 = _v6.a;
                  var fieldName2 = _v6.b;
                  var fieldType2 = _v6.c;
                  return optionality1 === 1 || optionality2 === 1 ? _Utils_Tuple3(
                    1,
                    fieldName1,
                    A2($dillonkearns$elm_ts_json$Internal$TypeReducer$intersect, fieldType1, fieldType2)
                  ) : _Utils_Tuple3(0, fieldName1, fieldType1);
                }
              ),
              function(_v7) {
                var fieldName = _v7.b;
                return fieldName;
              },
              _Utils_ap(fields1, fields2)
            )
          );
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$simplifyIntersection = function(types) {
        var thing = function() {
          var _v0 = A2($dillonkearns$elm_ts_json$Internal$TypeReducer$deduplicateBy, $dillonkearns$elm_ts_json$Internal$TypeToString$toString, types);
          if (_v0.b) {
            if (!_v0.b.b) {
              var single = _v0.a;
              return single;
            } else {
              var first = _v0.a;
              var rest = _v0.b;
              if (first.$ === 8) {
                var fields = first.a;
                var _v2 = A3(
                  $elm$core$List$foldr,
                  F2(
                    function(thisType, _v3) {
                      var objectsSoFar = _v3.a;
                      var otherSoFar = _v3.b;
                      if (thisType.$ === 8) {
                        var theseFields = thisType.a;
                        return _Utils_Tuple2(
                          A2($dillonkearns$elm_ts_json$Internal$TypeReducer$mergeFields, theseFields, objectsSoFar),
                          otherSoFar
                        );
                      } else {
                        return _Utils_Tuple2(
                          objectsSoFar,
                          A2($elm$core$List$cons, thisType, otherSoFar)
                        );
                      }
                    }
                  ),
                  _Utils_Tuple2(fields, _List_Nil),
                  rest
                );
                var otherObjects = _v2.a;
                var nonObjectTypes = _v2.b;
                return $dillonkearns$elm_ts_json$Internal$TsJsonType$Intersection(
                  A2(
                    $elm$core$List$cons,
                    $dillonkearns$elm_ts_json$Internal$TsJsonType$TypeObject(otherObjects),
                    nonObjectTypes
                  )
                );
              } else {
                return $dillonkearns$elm_ts_json$Internal$TsJsonType$Intersection(types);
              }
            }
          } else {
            return $dillonkearns$elm_ts_json$Internal$TsJsonType$TsNever;
          }
        }();
        return thing;
      };
      var $dillonkearns$elm_ts_json$TsJson$Decode$map2 = F3(
        function(mapFn, _v0, _v1) {
          var innerDecoder1 = _v0.a;
          var innerType1 = _v0.b;
          var innerDecoder2 = _v1.a;
          var innerType2 = _v1.b;
          return A2(
            $dillonkearns$elm_ts_json$TsJson$Internal$Decode$Decoder,
            A3($elm$json$Json$Decode$map2, mapFn, innerDecoder1, innerDecoder2),
            A2($dillonkearns$elm_ts_json$Internal$TypeReducer$intersect, innerType1, innerType2)
          );
        }
      );
      var $dillonkearns$elm_ts_json$TsJson$Decode$andMap = $dillonkearns$elm_ts_json$TsJson$Decode$map2($elm$core$Basics$apR);
      var $dillonkearns$elm_ts_json$TsJson$Decode$field = F2(
        function(fieldName, _v0) {
          var innerDecoder = _v0.a;
          var innerType = _v0.b;
          return A2(
            $dillonkearns$elm_ts_json$TsJson$Internal$Decode$Decoder,
            A2($elm$json$Json$Decode$field, fieldName, innerDecoder),
            $dillonkearns$elm_ts_json$Internal$TsJsonType$TypeObject(
              _List_fromArray(
                [
                  _Utils_Tuple3(1, fieldName, innerType)
                ]
              )
            )
          );
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$List = function(a) {
        return { $: 4, a };
      };
      var $dillonkearns$elm_ts_json$TsJson$Decode$list = function(_v0) {
        var innerDecoder = _v0.a;
        var innerType = _v0.b;
        return A2(
          $dillonkearns$elm_ts_json$TsJson$Internal$Decode$Decoder,
          $elm$json$Json$Decode$list(innerDecoder),
          $dillonkearns$elm_ts_json$Internal$TsJsonType$List(innerType)
        );
      };
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$String = { $: 0 };
      var $dillonkearns$elm_ts_json$TsJson$Decode$string = A2($dillonkearns$elm_ts_json$TsJson$Internal$Decode$Decoder, $elm$json$Json$Decode$string, $dillonkearns$elm_ts_json$Internal$TsJsonType$String);
      var $dillonkearns$elm_ts_json$TsJson$Decode$succeed = function(value_) {
        return A2(
          $dillonkearns$elm_ts_json$TsJson$Internal$Decode$Decoder,
          $elm$json$Json$Decode$succeed(value_),
          $dillonkearns$elm_ts_json$Internal$TsJsonType$Unknown
        );
      };
      var $author$project$InteropDefinitions$flags = A2(
        $dillonkearns$elm_ts_json$TsJson$Decode$andMap,
        A2($dillonkearns$elm_ts_json$TsJson$Decode$field, "versionMessage", $dillonkearns$elm_ts_json$TsJson$Decode$string),
        A2(
          $dillonkearns$elm_ts_json$TsJson$Decode$andMap,
          A2(
            $dillonkearns$elm_ts_json$TsJson$Decode$field,
            "argv",
            $dillonkearns$elm_ts_json$TsJson$Decode$list($dillonkearns$elm_ts_json$TsJson$Decode$string)
          ),
          $dillonkearns$elm_ts_json$TsJson$Decode$succeed(
            F2(
              function(argv, versionMessage) {
                return { dH: argv, e6: versionMessage };
              }
            )
          )
        )
      );
      var $dillonkearns$elm_ts_json$TsJson$Internal$Encode$Encoder = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$Union = function(a) {
        return { $: 10, a };
      };
      var $elm$core$List$filter = F2(
        function(isGood, list) {
          return A3(
            $elm$core$List$foldr,
            F2(
              function(x, xs) {
                return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
              }
            ),
            _List_Nil,
            list
          );
        }
      );
      var $elm$core$Basics$neq = _Utils_notEqual;
      var $dillonkearns$elm_ts_json$Internal$TypeReducer$union = function(tsTypes) {
        var withoutNevers = A2(
          $elm$core$List$filter,
          $elm$core$Basics$neq($dillonkearns$elm_ts_json$Internal$TsJsonType$TsNever),
          tsTypes
        );
        var hadNevers = !_Utils_eq(
          $elm$core$List$length(tsTypes),
          $elm$core$List$length(withoutNevers)
        );
        if (!withoutNevers.b) {
          return hadNevers ? $dillonkearns$elm_ts_json$Internal$TsJsonType$TsNever : $dillonkearns$elm_ts_json$Internal$TsJsonType$Unknown;
        } else {
          if (!withoutNevers.b.b) {
            var singleType = withoutNevers.a;
            return singleType;
          } else {
            var first = withoutNevers.a;
            var rest = withoutNevers.b;
            return $dillonkearns$elm_ts_json$Internal$TsJsonType$Union(
              _Utils_Tuple2(first, rest)
            );
          }
        }
      };
      var $dillonkearns$elm_ts_json$TsJson$Encode$unwrapUnion = function(_v0) {
        var rawValue = _v0;
        return rawValue;
      };
      var $dillonkearns$elm_ts_json$TsJson$Encode$buildUnion = function(_v0) {
        var toValue = _v0.a;
        var tsTypes_ = _v0.b;
        return A2(
          $dillonkearns$elm_ts_json$TsJson$Internal$Encode$Encoder,
          A2($elm$core$Basics$composeR, toValue, $dillonkearns$elm_ts_json$TsJson$Encode$unwrapUnion),
          $dillonkearns$elm_ts_json$Internal$TypeReducer$union(tsTypes_)
        );
      };
      var $elm$json$Json$Encode$list = F2(
        function(func, entries) {
          return _Json_wrap(
            A3(
              $elm$core$List$foldl,
              _Json_addEntry(func),
              _Json_emptyArray(0),
              entries
            )
          );
        }
      );
      var $dillonkearns$elm_ts_json$TsJson$Encode$list = function(_v0) {
        var encodeFn = _v0.a;
        var tsType_ = _v0.b;
        return A2(
          $dillonkearns$elm_ts_json$TsJson$Internal$Encode$Encoder,
          function(input) {
            return A2($elm$json$Json$Encode$list, encodeFn, input);
          },
          $dillonkearns$elm_ts_json$Internal$TsJsonType$List(tsType_)
        );
      };
      var $elm$json$Json$Encode$object = function(pairs) {
        return _Json_wrap(
          A3(
            $elm$core$List$foldl,
            F2(
              function(_v0, obj) {
                var k = _v0.a;
                var v = _v0.b;
                return A3(_Json_addField, k, v, obj);
              }
            ),
            _Json_emptyObject(0),
            pairs
          )
        );
      };
      var $dillonkearns$elm_ts_json$TsJson$Encode$object = function(propertyEncoders) {
        var propertyTypes = $dillonkearns$elm_ts_json$Internal$TsJsonType$TypeObject(
          A2(
            $elm$core$List$map,
            function(_v1) {
              var optionality = _v1.a;
              var propertyName = _v1.b;
              var tsType_ = _v1.d;
              return _Utils_Tuple3(optionality, propertyName, tsType_);
            },
            propertyEncoders
          )
        );
        var encodeObject = function(input) {
          return $elm$json$Json$Encode$object(
            A2(
              $elm$core$List$filterMap,
              function(_v0) {
                var propertyName = _v0.b;
                var encodeFn = _v0.c;
                return A2(
                  $elm$core$Maybe$map,
                  function(encoded) {
                    return _Utils_Tuple2(propertyName, encoded);
                  },
                  encodeFn(input)
                );
              },
              propertyEncoders
            )
          );
        };
        return A2($dillonkearns$elm_ts_json$TsJson$Internal$Encode$Encoder, encodeObject, propertyTypes);
      };
      var $dillonkearns$elm_ts_json$TsJson$Encode$Property = F4(
        function(a, b, c, d) {
          return { $: 0, a, b, c, d };
        }
      );
      var $dillonkearns$elm_ts_json$TsJson$Encode$required = F3(
        function(name, getter, _v0) {
          var encodeFn = _v0.a;
          var tsType_ = _v0.b;
          return A4(
            $dillonkearns$elm_ts_json$TsJson$Encode$Property,
            1,
            name,
            function(input) {
              return $elm$core$Maybe$Just(
                encodeFn(
                  getter(input)
                )
              );
            },
            tsType_
          );
        }
      );
      var $elm$json$Json$Encode$string = _Json_wrap;
      var $dillonkearns$elm_ts_json$TsJson$Encode$string = A2($dillonkearns$elm_ts_json$TsJson$Internal$Encode$Encoder, $elm$json$Json$Encode$string, $dillonkearns$elm_ts_json$Internal$TsJsonType$String);
      var $dillonkearns$elm_ts_json$TsJson$Internal$Encode$UnionBuilder = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $dillonkearns$elm_ts_json$TsJson$Encode$union = function(constructor) {
        return A2($dillonkearns$elm_ts_json$TsJson$Internal$Encode$UnionBuilder, constructor, _List_Nil);
      };
      var $dillonkearns$elm_ts_json$Internal$TsJsonType$Literal = function(a) {
        return { $: 7, a };
      };
      var $dillonkearns$elm_ts_json$TsJson$Encode$literal = function(literalValue) {
        return A2(
          $dillonkearns$elm_ts_json$TsJson$Internal$Encode$Encoder,
          function(_v0) {
            return literalValue;
          },
          $dillonkearns$elm_ts_json$Internal$TsJsonType$Literal(literalValue)
        );
      };
      var $dillonkearns$elm_ts_json$TsJson$Internal$Encode$UnionEncodeValue = $elm$core$Basics$identity;
      var $dillonkearns$elm_ts_json$TsJson$Encode$variant = F2(
        function(_v0, _v1) {
          var encoder_ = _v0.a;
          var tsType_ = _v0.b;
          var builder = _v1.a;
          var tsTypes_ = _v1.b;
          return A2(
            $dillonkearns$elm_ts_json$TsJson$Internal$Encode$UnionBuilder,
            builder(
              A2($elm$core$Basics$composeR, encoder_, $elm$core$Basics$identity)
            ),
            A2($elm$core$List$cons, tsType_, tsTypes_)
          );
        }
      );
      var $dillonkearns$elm_ts_json$TsJson$Encode$variantObject = F3(
        function(variantName, objectFields, unionBuilder) {
          return A2(
            $dillonkearns$elm_ts_json$TsJson$Encode$variant,
            $dillonkearns$elm_ts_json$TsJson$Encode$object(
              A2(
                $elm$core$List$cons,
                A3(
                  $dillonkearns$elm_ts_json$TsJson$Encode$required,
                  "tag",
                  $elm$core$Basics$identity,
                  $dillonkearns$elm_ts_json$TsJson$Encode$literal(
                    $elm$json$Json$Encode$string(variantName)
                  )
                ),
                objectFields
              )
            ),
            unionBuilder
          );
        }
      );
      var $dillonkearns$elm_ts_json$TsJson$Encode$variantTagged = F3(
        function(tagName, dataEncoder, builder) {
          return A3(
            $dillonkearns$elm_ts_json$TsJson$Encode$variantObject,
            tagName,
            _List_fromArray(
              [
                A3($dillonkearns$elm_ts_json$TsJson$Encode$required, "data", $elm$core$Basics$identity, dataEncoder)
              ]
            ),
            builder
          );
        }
      );
      var $author$project$InteropDefinitions$fromElm = $dillonkearns$elm_ts_json$TsJson$Encode$buildUnion(
        A3(
          $dillonkearns$elm_ts_json$TsJson$Encode$variantTagged,
          "writeToFiles",
          $dillonkearns$elm_ts_json$TsJson$Encode$object(
            _List_fromArray(
              [
                A3(
                  $dillonkearns$elm_ts_json$TsJson$Encode$required,
                  "output",
                  function($) {
                    return $.eD;
                  },
                  $dillonkearns$elm_ts_json$TsJson$Encode$string
                ),
                A3(
                  $dillonkearns$elm_ts_json$TsJson$Encode$required,
                  "files",
                  function($) {
                    return $.d5;
                  },
                  $dillonkearns$elm_ts_json$TsJson$Encode$list(
                    $dillonkearns$elm_ts_json$TsJson$Encode$object(
                      _List_fromArray(
                        [
                          A3(
                            $dillonkearns$elm_ts_json$TsJson$Encode$required,
                            "path",
                            function($) {
                              return $.eE;
                            },
                            $dillonkearns$elm_ts_json$TsJson$Encode$string
                          ),
                          A3(
                            $dillonkearns$elm_ts_json$TsJson$Encode$required,
                            "contents",
                            function($) {
                              return $.dT;
                            },
                            $dillonkearns$elm_ts_json$TsJson$Encode$string
                          )
                        ]
                      )
                    )
                  )
                )
              ]
            )
          ),
          A3(
            $dillonkearns$elm_ts_json$TsJson$Encode$variantTagged,
            "printAndExitSuccess",
            $dillonkearns$elm_ts_json$TsJson$Encode$object(
              _List_fromArray(
                [
                  A3($dillonkearns$elm_ts_json$TsJson$Encode$required, "message", $elm$core$Basics$identity, $dillonkearns$elm_ts_json$TsJson$Encode$string)
                ]
              )
            ),
            A3(
              $dillonkearns$elm_ts_json$TsJson$Encode$variantTagged,
              "printAndExitFailure",
              $dillonkearns$elm_ts_json$TsJson$Encode$object(
                _List_fromArray(
                  [
                    A3($dillonkearns$elm_ts_json$TsJson$Encode$required, "message", $elm$core$Basics$identity, $dillonkearns$elm_ts_json$TsJson$Encode$string)
                  ]
                )
              ),
              $dillonkearns$elm_ts_json$TsJson$Encode$union(
                F4(
                  function(vPrintAndExitFailure, vPrintAndExitSuccess, vWriteAbisToFile, value) {
                    switch (value.$) {
                      case 0:
                        var message = value.a;
                        return vPrintAndExitFailure(message);
                      case 1:
                        var message = value.a;
                        return vPrintAndExitSuccess(message);
                      default:
                        var info = value.a;
                        return vWriteAbisToFile(info);
                    }
                  }
                )
              )
            )
          )
        )
      );
      var $author$project$InteropDefinitions$FinishedWritingToFiles = 0;
      var $author$project$InteropDefinitions$FinishedWritingToFilesWithError = 1;
      var $dillonkearns$elm_ts_json$TsJson$Decode$decoder = function(_v0) {
        var decoder_ = _v0.a;
        return decoder_;
      };
      var $dillonkearns$elm_ts_json$TsJson$Decode$tsType = function(_v0) {
        var tsType_ = _v0.b;
        return tsType_;
      };
      var $dillonkearns$elm_ts_json$TsJson$Decode$discriminatedUnion = F2(
        function(discriminantField, decoders) {
          var table = $elm$core$Dict$fromList(decoders);
          return A2(
            $dillonkearns$elm_ts_json$TsJson$Internal$Decode$Decoder,
            A2(
              $elm$json$Json$Decode$andThen,
              function(discriminantValue) {
                var _v0 = A2($elm$core$Dict$get, discriminantValue, table);
                if (!_v0.$) {
                  var variantDecoder = _v0.a;
                  return $dillonkearns$elm_ts_json$TsJson$Decode$decoder(variantDecoder);
                } else {
                  return $elm$json$Json$Decode$fail("Unexpected discriminant value '" + (discriminantValue + ("' for field '" + (discriminantField + "'"))));
                }
              },
              A2($elm$json$Json$Decode$field, discriminantField, $elm$json$Json$Decode$string)
            ),
            $dillonkearns$elm_ts_json$Internal$TypeReducer$union(
              A2(
                $elm$core$List$map,
                function(_v1) {
                  var discriminantValue = _v1.a;
                  var variantDecoder = _v1.b;
                  return A2(
                    $dillonkearns$elm_ts_json$Internal$TypeReducer$intersect,
                    $dillonkearns$elm_ts_json$Internal$TsJsonType$TypeObject(
                      _List_fromArray(
                        [
                          _Utils_Tuple3(
                            1,
                            discriminantField,
                            $dillonkearns$elm_ts_json$Internal$TsJsonType$Literal(
                              $elm$json$Json$Encode$string(discriminantValue)
                            )
                          )
                        ]
                      )
                    ),
                    $dillonkearns$elm_ts_json$TsJson$Decode$tsType(variantDecoder)
                  );
                },
                decoders
              )
            )
          );
        }
      );
      var $author$project$InteropDefinitions$toElm = A2(
        $dillonkearns$elm_ts_json$TsJson$Decode$discriminatedUnion,
        "tag",
        _List_fromArray(
          [
            _Utils_Tuple2(
              "finishedWritingToFiles",
              $dillonkearns$elm_ts_json$TsJson$Decode$succeed(0)
            ),
            _Utils_Tuple2(
              "finishedWritingToFilesWithError",
              $dillonkearns$elm_ts_json$TsJson$Decode$succeed(1)
            )
          ]
        )
      );
      var $author$project$InteropDefinitions$interop = { d6: $author$project$InteropDefinitions$flags, d7: $author$project$InteropDefinitions$fromElm, e2: $author$project$InteropDefinitions$toElm };
      var $author$project$InteropPorts$interopFromElm = _Platform_outgoingPort("interopFromElm", $elm$core$Basics$identity);
      var $author$project$InteropPorts$fromElm = function(value) {
        return $author$project$InteropPorts$interopFromElm(
          A3($elm$core$Basics$apR, $author$project$InteropDefinitions$interop.d7, $dillonkearns$elm_ts_json$TsJson$Encode$encoder, value)
        );
      };
      var $elm$http$Http$BadStatus_ = F2(
        function(a, b) {
          return { $: 3, a, b };
        }
      );
      var $elm$http$Http$BadUrl_ = function(a) {
        return { $: 0, a };
      };
      var $elm$http$Http$GoodStatus_ = F2(
        function(a, b) {
          return { $: 4, a, b };
        }
      );
      var $elm$http$Http$NetworkError_ = { $: 2 };
      var $elm$http$Http$Receiving = function(a) {
        return { $: 1, a };
      };
      var $elm$http$Http$Sending = function(a) {
        return { $: 0, a };
      };
      var $elm$http$Http$Timeout_ = { $: 1 };
      var $elm$core$Maybe$isJust = function(maybe) {
        if (!maybe.$) {
          return true;
        } else {
          return false;
        }
      };
      var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
      var $elm$http$Http$jsonBody = function(value) {
        return A2(
          _Http_pair,
          "application/json",
          A2($elm$json$Json$Encode$encode, 0, value)
        );
      };
      var $elm$http$Http$stringResolver = A2(_Http_expect, "", $elm$core$Basics$identity);
      var $elm$core$Task$fail = _Scheduler_fail;
      var $elm$http$Http$resultToTask = function(result) {
        if (!result.$) {
          var a = result.a;
          return $elm$core$Task$succeed(a);
        } else {
          var x = result.a;
          return $elm$core$Task$fail(x);
        }
      };
      var $elm$http$Http$task = function(r) {
        return A3(
          _Http_toTask,
          0,
          $elm$http$Http$resultToTask,
          { dF: false, dL: r.dL, aP: r.eO, ea: r.ea, ei: r.ei, e1: r.e1, dl: $elm$core$Maybe$Nothing, aI: r.aI }
        );
      };
      var $author$project$Main$effectToCmd = function(effect) {
        switch (effect.$) {
          case 0:
            var message = effect.a;
            return $author$project$InteropPorts$fromElm(
              $author$project$InteropDefinitions$PrintAndExitFailure(message)
            );
          case 1:
            var message = effect.a;
            return $author$project$InteropPorts$fromElm(
              $author$project$InteropDefinitions$PrintAndExitSuccess(message)
            );
          case 2:
            var baseUrl = effect.a.dK;
            var contracts = effect.a._;
            var contractDecoder = A3(
              $elm$json$Json$Decode$map2,
              F2(
                function(contract, abi) {
                  return { dA: abi, dK: baseUrl, bk: contract };
                }
              ),
              A2($elm$json$Json$Decode$field, "account_name", $elm$json$Json$Decode$string),
              A2($elm$json$Json$Decode$field, "abi", $author$project$Abi$decoder)
            );
            var fetchContract = function(contract) {
              return $elm$http$Http$task(
                {
                  dL: $elm$http$Http$jsonBody(
                    $elm$json$Json$Encode$object(
                      _List_fromArray(
                        [
                          _Utils_Tuple2(
                            "account_name",
                            $elm$json$Json$Encode$string(contract)
                          )
                        ]
                      )
                    )
                  ),
                  ea: _List_Nil,
                  ei: "POST",
                  eO: $elm$http$Http$stringResolver(
                    function(response) {
                      switch (response.$) {
                        case 4:
                          var body = response.b;
                          var _v2 = A2($elm$json$Json$Decode$decodeString, contractDecoder, body);
                          if (!_v2.$) {
                            var valid = _v2.a;
                            return $elm$core$Result$Ok(valid);
                          } else {
                            var error = _v2.a;
                            return $elm$core$Result$Err(
                              "Failed to decode response from " + (baseUrl + ("/get_abi:\n\n	 " + ($elm$json$Json$Decode$errorToString(error) + "\n")))
                            );
                          }
                        case 3:
                          var metadata = response.a;
                          return $elm$core$Result$Err(
                            "The server returned a bad status:\n\n	" + ($elm$core$String$fromInt(metadata.eT) + (" " + (metadata.eU + "\n")))
                          );
                        case 2:
                          return $elm$core$Result$Err("I got a network error when I tried to reach the servers. Check your internet connection and try again. If that doesn't work, maybe the server is down.\n");
                        case 1:
                          return $elm$core$Result$Err("The request to the server timed out! Try again later.\n");
                        default:
                          var badUrl = response.a;
                          return $elm$core$Result$Err("It seems like you gave me a bad url. This is what you gave me:\n\n	" + (badUrl + "\n"));
                      }
                    }
                  ),
                  e1: $elm$core$Maybe$Nothing,
                  aI: baseUrl + "/get_abi"
                }
              );
            };
            return A2(
              $elm$core$Task$attempt,
              $author$project$Main$GotAbis,
              A3(
                $elm$core$List$foldr,
                F2(
                  function(contract, currentTask) {
                    return A2(
                      $elm$core$Task$andThen,
                      function(result) {
                        return A2(
                          $elm$core$Task$map,
                          function(abis) {
                            return A2($elm$core$List$cons, result, abis);
                          },
                          currentTask
                        );
                      },
                      fetchContract(contract)
                    );
                  }
                ),
                $elm$core$Task$succeed(_List_Nil),
                contracts
              )
            );
          default:
            var files = effect.a;
            return $author$project$InteropPorts$fromElm(
              $author$project$InteropDefinitions$WriteToFiles(files)
            );
        }
      };
      var $author$project$Main$FetchContracts = function(a) {
        return { $: 2, a };
      };
      var $author$project$Main$init = F2(
        function(_v0, cliOptions) {
          return _Utils_Tuple2(
            {},
            $author$project$Main$FetchContracts(
              { dK: cliOptions.aI, _: cliOptions._ }
            )
          );
        }
      );
      var $elm$core$Tuple$mapSecond = F2(
        function(func, _v0) {
          var x = _v0.a;
          var y = _v0.b;
          return _Utils_Tuple2(
            x,
            func(y)
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage = { $: 0 };
      var $dillonkearns$elm_cli_options_parser$Cli$Program$UserModel = F2(
        function(a, b) {
          return { $: 1, a, b };
        }
      );
      var $elm$core$Platform$Cmd$batch = _Platform_batch;
      var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
      var $elm$core$Platform$Sub$batch = _Platform_batch;
      var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
      var $dillonkearns$elm_cli_options_parser$Cli$Program$CustomMatch = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Failure = 1;
      var $dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Success = 0;
      var $dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getSubCommand = function(_v0) {
        var subCommand = _v0.Q;
        return subCommand;
      };
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getUsageSpecs = function(_v0) {
        var usageSpecs = _v0.a0;
        return usageSpecs;
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$mutuallyExclusiveSynopsis = function(_v0) {
        var values = _v0;
        return A2($elm$core$String$join, "|", values);
      };
      var $dillonkearns$elm_cli_options_parser$Occurences$qualifySynopsis = F2(
        function(occurences, rawSynopsis) {
          switch (occurences) {
            case 0:
              return "[" + (rawSynopsis + "]");
            case 1:
              return rawSynopsis;
            default:
              return "[" + (rawSynopsis + "]...");
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionSynopsis = F3(
        function(occurences, option, maybeMutuallyExclusiveValues) {
          return A2(
            $dillonkearns$elm_cli_options_parser$Occurences$qualifySynopsis,
            occurences,
            function() {
              if (!option.$) {
                var flagName = option.a;
                return "--" + flagName;
              } else {
                var keywordArgName = option.a;
                if (!maybeMutuallyExclusiveValues.$) {
                  var mutuallyExclusiveValues = maybeMutuallyExclusiveValues.a;
                  return "--" + (keywordArgName + (" <" + ($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$mutuallyExclusiveSynopsis(mutuallyExclusiveValues) + ">")));
                } else {
                  return "--" + (keywordArgName + (" <" + (keywordArgName + ">")));
                }
              }
            }()
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$synopsis = F2(
        function(programName, _v0) {
          var usageSpecs = _v0.a0;
          var description = _v0.R;
          var subCommand = _v0.Q;
          return programName + (" " + (A2(
            $elm$core$String$join,
            " ",
            A2(
              $elm$core$List$filterMap,
              $elm$core$Basics$identity,
              A2(
                $elm$core$List$cons,
                subCommand,
                A2(
                  $elm$core$List$map,
                  function(spec) {
                    return $elm$core$Maybe$Just(
                      function() {
                        switch (spec.$) {
                          case 0:
                            var option = spec.a;
                            var mutuallyExclusiveValues = spec.b;
                            var occurences = spec.c;
                            return A3($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionSynopsis, occurences, option, mutuallyExclusiveValues);
                          case 1:
                            var operandName = spec.a;
                            var mutuallyExclusiveValues = spec.b;
                            var occurences = spec.c;
                            var positionalArgSummary = A2(
                              $elm$core$Maybe$withDefault,
                              operandName,
                              A2($elm$core$Maybe$map, $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$mutuallyExclusiveSynopsis, mutuallyExclusiveValues)
                            );
                            switch (occurences) {
                              case 1:
                                return "<" + (positionalArgSummary + ">");
                              case 0:
                                return "[<" + (positionalArgSummary + ">]");
                              default:
                                return "TODO shouldn't reach this case";
                            }
                          default:
                            var restArgsDescription = spec.a;
                            return "<" + (restArgsDescription + ">...");
                        }
                      }()
                    );
                  },
                  usageSpecs
                )
              )
            )
          ) + A2(
            $elm$core$Maybe$withDefault,
            "",
            A2(
              $elm$core$Maybe$map,
              function(doc) {
                return " # " + doc;
              },
              description
            )
          )));
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$synopsis = F2(
        function(programName, optionsParser) {
          return A2(
            $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$synopsis,
            programName,
            function(_v0) {
              var record = _v0;
              return record;
            }(optionsParser)
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpText = F2(
        function(programName, optionsParsers) {
          return A2(
            $elm$core$String$join,
            "\n",
            A2(
              $elm$core$List$map,
              $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$synopsis(programName),
              optionsParsers
            )
          );
        }
      );
      var $elm_community$list_extra$List$Extra$last = function(items) {
        last:
          while (true) {
            if (!items.b) {
              return $elm$core$Maybe$Nothing;
            } else {
              if (!items.b.b) {
                var x = items.a;
                return $elm$core$Maybe$Just(x);
              } else {
                var rest = items.b;
                var $temp$items = rest;
                items = $temp$items;
                continue last;
              }
            }
          }
      };
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$SubCommand = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$buildSubCommandSuggestions = function(optionsParsers) {
        return A2(
          $elm$core$List$map,
          $dillonkearns$elm_cli_options_parser$TypoSuggestion$SubCommand,
          A2(
            $elm$core$List$filterMap,
            $elm$core$Basics$identity,
            A2(
              $elm$core$List$map,
              function($) {
                return $.Q;
              },
              optionsParsers
            )
          )
        );
      };
      var $dillonkearns$elm_cli_options_parser$Fuzzy$Match = F4(
        function(score, offset, length, keys) {
          return { eg: keys, eh: length, aX: offset, P: score };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$Result = F2(
        function(score, matches) {
          return { aT: matches, P: score };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$ConfigModel = F4(
        function(addPenalty, movePenalty, removePenalty, insertPenalty) {
          return { aj: addPenalty, ao: insertPenalty, ar: movePenalty, aC: removePenalty };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$defaultConfig = A4($dillonkearns$elm_cli_options_parser$Fuzzy$ConfigModel, 10, 1e3, 1e4, 1);
      var $elm$core$String$indexes = _String_indexes;
      var $elm$core$Tuple$second = function(_v0) {
        var y = _v0.b;
        return y;
      };
      var $dillonkearns$elm_cli_options_parser$Fuzzy$dissect = F2(
        function(separators, strings) {
          dissect:
            while (true) {
              if (!separators.b) {
                return strings;
              } else {
                var head = separators.a;
                var tail = separators.b;
                var dissectEntry = function(entry) {
                  var separatorLength = $elm$core$String$length(head);
                  var slice = F2(
                    function(index, _v1) {
                      var prevIndex = _v1.a;
                      var sum = _v1.b;
                      var separatorSlice = _List_fromArray(
                        [
                          A3($elm$core$String$slice, index, index + separatorLength, entry)
                        ]
                      );
                      var precedingSlice = _Utils_eq(prevIndex, index) ? _List_Nil : _List_fromArray(
                        [
                          A3($elm$core$String$slice, prevIndex, index, entry)
                        ]
                      );
                      return _Utils_Tuple2(
                        index + separatorLength,
                        _Utils_ap(
                          sum,
                          _Utils_ap(precedingSlice, separatorSlice)
                        )
                      );
                    }
                  );
                  var indexes = A2($elm$core$String$indexes, head, entry);
                  var result = A3(
                    $elm$core$List$foldl,
                    slice,
                    _Utils_Tuple2(0, _List_Nil),
                    indexes
                  );
                  var lastIndex = result.a;
                  var first = result.b;
                  var entryLength = $elm$core$String$length(entry);
                  var last = _Utils_eq(lastIndex, entryLength) ? _List_Nil : _List_fromArray(
                    [
                      A3($elm$core$String$slice, lastIndex, entryLength, entry)
                    ]
                  );
                  return _Utils_ap(first, last);
                };
                var dissected = A3(
                  $elm$core$List$foldl,
                  F2(
                    function(e, s) {
                      return _Utils_ap(
                        s,
                        dissectEntry(e)
                      );
                    }
                  ),
                  _List_Nil,
                  strings
                );
                var $temp$separators = tail, $temp$strings = dissected;
                separators = $temp$separators;
                strings = $temp$strings;
                continue dissect;
              }
            }
        }
      );
      var $elm$core$String$foldl = _String_foldl;
      var $dillonkearns$elm_cli_options_parser$Fuzzy$initialModel = _List_Nil;
      var $elm$core$List$partition = F2(
        function(pred, list) {
          var step = F2(
            function(x, _v0) {
              var trues = _v0.a;
              var falses = _v0.b;
              return pred(x) ? _Utils_Tuple2(
                A2($elm$core$List$cons, x, trues),
                falses
              ) : _Utils_Tuple2(
                trues,
                A2($elm$core$List$cons, x, falses)
              );
            }
          );
          return A3(
            $elm$core$List$foldr,
            step,
            _Utils_Tuple2(_List_Nil, _List_Nil),
            list
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$quickSort = function(entries) {
        if (!entries.b) {
          return _Utils_Tuple2(0, _List_Nil);
        } else {
          var head = entries.a;
          var tail = entries.b;
          var partition = A2(
            $elm$core$List$partition,
            function(e) {
              return _Utils_cmp(e, head) < 0;
            },
            tail
          );
          var smaller = $dillonkearns$elm_cli_options_parser$Fuzzy$quickSort(partition.a);
          var penalty = $elm$core$List$isEmpty(smaller.b) ? 0 : 1;
          var larger = $dillonkearns$elm_cli_options_parser$Fuzzy$quickSort(partition.b);
          return _Utils_Tuple2(
            smaller.a + penalty + larger.a,
            _Utils_ap(
              smaller.b,
              _Utils_ap(
                _List_fromArray(
                  [head]
                ),
                larger.b
              )
            )
          );
        }
      };
      var $dillonkearns$elm_cli_options_parser$Fuzzy$distance = F3(
        function(config, needle, hay) {
          var accumulateInsertPenalty = F2(
            function(elem, result) {
              if (!result.a.$) {
                var prev = result.a.a;
                var score = result.b;
                return _Utils_Tuple2(
                  $elm$core$Maybe$Just(elem),
                  elem - 1 - prev + score
                );
              } else {
                var _v2 = result.a;
                var score = result.b;
                return _Utils_Tuple2(
                  $elm$core$Maybe$Just(elem),
                  score
                );
              }
            }
          );
          var accumulate = F2(
            function(c, indexList) {
              var indexes = A2(
                $elm$core$String$indexes,
                $elm$core$String$fromChar(c),
                hay
              );
              var hayIndex = $elm$core$List$head(
                A2(
                  $elm$core$List$filter,
                  function(e) {
                    return !A2($elm$core$List$member, e, indexList);
                  },
                  indexes
                )
              );
              if (!hayIndex.$) {
                var v = hayIndex.a;
                return _Utils_ap(
                  indexList,
                  _List_fromArray(
                    [v]
                  )
                );
              } else {
                return indexList;
              }
            }
          );
          var accumulated = A3($elm$core$String$foldl, accumulate, $dillonkearns$elm_cli_options_parser$Fuzzy$initialModel, needle);
          var hPenalty = ($elm$core$String$length(hay) - $elm$core$List$length(accumulated)) * config.aj;
          var nPenalty = ($elm$core$String$length(needle) - $elm$core$List$length(accumulated)) * config.aC;
          var sorted = $dillonkearns$elm_cli_options_parser$Fuzzy$quickSort(accumulated);
          var iPenalty = A3(
            $elm$core$List$foldl,
            accumulateInsertPenalty,
            _Utils_Tuple2($elm$core$Maybe$Nothing, 0),
            sorted.b
          ).b * config.ao;
          var mPenalty = sorted.a * config.ar;
          return A4(
            $dillonkearns$elm_cli_options_parser$Fuzzy$Match,
            mPenalty + hPenalty + nPenalty + iPenalty,
            0,
            $elm$core$String$length(hay),
            sorted.b
          );
        }
      );
      var $elm$core$List$repeatHelp = F3(
        function(result, n, value) {
          repeatHelp:
            while (true) {
              if (n <= 0) {
                return result;
              } else {
                var $temp$result = A2($elm$core$List$cons, value, result), $temp$n = n - 1, $temp$value = value;
                result = $temp$result;
                n = $temp$n;
                value = $temp$value;
                continue repeatHelp;
              }
            }
        }
      );
      var $elm$core$List$repeat = F2(
        function(n, value) {
          return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$padHays = F2(
        function(ns, hs) {
          return _Utils_ap(
            hs,
            A2(
              $elm$core$List$repeat,
              ns - $elm$core$List$length(hs),
              ""
            )
          );
        }
      );
      var $elm$core$List$takeReverse = F3(
        function(n, list, kept) {
          takeReverse:
            while (true) {
              if (n <= 0) {
                return kept;
              } else {
                if (!list.b) {
                  return kept;
                } else {
                  var x = list.a;
                  var xs = list.b;
                  var $temp$n = n - 1, $temp$list = xs, $temp$kept = A2($elm$core$List$cons, x, kept);
                  n = $temp$n;
                  list = $temp$list;
                  kept = $temp$kept;
                  continue takeReverse;
                }
              }
            }
        }
      );
      var $elm$core$List$takeTailRec = F2(
        function(n, list) {
          return $elm$core$List$reverse(
            A3($elm$core$List$takeReverse, n, list, _List_Nil)
          );
        }
      );
      var $elm$core$List$takeFast = F3(
        function(ctr, n, list) {
          if (n <= 0) {
            return _List_Nil;
          } else {
            var _v0 = _Utils_Tuple2(n, list);
            _v0$1:
              while (true) {
                _v0$5:
                  while (true) {
                    if (!_v0.b.b) {
                      return list;
                    } else {
                      if (_v0.b.b.b) {
                        switch (_v0.a) {
                          case 1:
                            break _v0$1;
                          case 2:
                            var _v2 = _v0.b;
                            var x = _v2.a;
                            var _v3 = _v2.b;
                            var y = _v3.a;
                            return _List_fromArray(
                              [x, y]
                            );
                          case 3:
                            if (_v0.b.b.b.b) {
                              var _v4 = _v0.b;
                              var x = _v4.a;
                              var _v5 = _v4.b;
                              var y = _v5.a;
                              var _v6 = _v5.b;
                              var z = _v6.a;
                              return _List_fromArray(
                                [x, y, z]
                              );
                            } else {
                              break _v0$5;
                            }
                          default:
                            if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                              var _v7 = _v0.b;
                              var x = _v7.a;
                              var _v8 = _v7.b;
                              var y = _v8.a;
                              var _v9 = _v8.b;
                              var z = _v9.a;
                              var _v10 = _v9.b;
                              var w = _v10.a;
                              var tl = _v10.b;
                              return ctr > 1e3 ? A2(
                                $elm$core$List$cons,
                                x,
                                A2(
                                  $elm$core$List$cons,
                                  y,
                                  A2(
                                    $elm$core$List$cons,
                                    z,
                                    A2(
                                      $elm$core$List$cons,
                                      w,
                                      A2($elm$core$List$takeTailRec, n - 4, tl)
                                    )
                                  )
                                )
                              ) : A2(
                                $elm$core$List$cons,
                                x,
                                A2(
                                  $elm$core$List$cons,
                                  y,
                                  A2(
                                    $elm$core$List$cons,
                                    z,
                                    A2(
                                      $elm$core$List$cons,
                                      w,
                                      A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)
                                    )
                                  )
                                )
                              );
                            } else {
                              break _v0$5;
                            }
                        }
                      } else {
                        if (_v0.a === 1) {
                          break _v0$1;
                        } else {
                          break _v0$5;
                        }
                      }
                    }
                  }
                return list;
              }
            var _v1 = _v0.b;
            var x = _v1.a;
            return _List_fromArray(
              [x]
            );
          }
        }
      );
      var $elm$core$List$take = F2(
        function(n, list) {
          return A3($elm$core$List$takeFast, 0, n, list);
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$reduceLeft = F3(
        function(ns, c, hs) {
          return _Utils_Tuple2(
            A3(
              $elm$core$List$foldl,
              F2(
                function(e, sum) {
                  return $elm$core$String$length(e) + sum;
                }
              ),
              0,
              A2($elm$core$List$take, c, hs)
            ),
            A2($elm$core$List$drop, c, hs)
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$reduceRight = F3(
        function(ns, c, hs) {
          return A2(
            $elm$core$List$take,
            $elm$core$List$length(hs) - (ns - c - 1),
            hs
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Fuzzy$match = F4(
        function(configs, separators, needle, hay) {
          var reduceHays = F3(
            function(ns, c, hs) {
              return A3(
                $dillonkearns$elm_cli_options_parser$Fuzzy$reduceLeft,
                ns,
                c,
                A3(
                  $dillonkearns$elm_cli_options_parser$Fuzzy$reduceRight,
                  ns,
                  c,
                  A2($dillonkearns$elm_cli_options_parser$Fuzzy$padHays, ns, hs)
                )
              );
            }
          );
          var needles = A2(
            $dillonkearns$elm_cli_options_parser$Fuzzy$dissect,
            separators,
            _List_fromArray(
              [needle]
            )
          );
          var initialResult = A2($dillonkearns$elm_cli_options_parser$Fuzzy$Result, 0, _List_Nil);
          var hays = A2(
            $dillonkearns$elm_cli_options_parser$Fuzzy$dissect,
            separators,
            _List_fromArray(
              [hay]
            )
          );
          var accumulateConfig = F2(
            function(c, sum) {
              switch (c.$) {
                case 0:
                  var val = c.a;
                  return _Utils_update(
                    sum,
                    { aj: val }
                  );
                case 1:
                  var val = c.a;
                  return _Utils_update(
                    sum,
                    { aC: val }
                  );
                case 2:
                  var val = c.a;
                  return _Utils_update(
                    sum,
                    { ar: val }
                  );
                default:
                  var val = c.a;
                  return _Utils_update(
                    sum,
                    { ao: val }
                  );
              }
            }
          );
          var config = A3($elm$core$List$foldl, accumulateConfig, $dillonkearns$elm_cli_options_parser$Fuzzy$defaultConfig, configs);
          var minScore = F2(
            function(n, _v2) {
              var offset = _v2.a;
              var hs = _v2.b;
              var initialPenalty = $elm$core$String$length(n) * config.aC + $elm$core$String$length(n) * config.ar + $elm$core$String$length(hay) * config.aj + $elm$core$String$length(hay) * $elm$core$String$length(n) * config.ao;
              var initialMatch = A4($dillonkearns$elm_cli_options_parser$Fuzzy$Match, initialPenalty, offset, 0, _List_Nil);
              var accumulateMatch = F2(
                function(e, _v1) {
                  var prev = _v1.a;
                  var prevOffset = _v1.b;
                  var newOffset = prevOffset + $elm$core$String$length(e);
                  var eDistance = A3($dillonkearns$elm_cli_options_parser$Fuzzy$distance, config, n, e);
                  var newMatch = _Utils_cmp(eDistance.P, prev.P) < 0 ? _Utils_update(
                    eDistance,
                    { aX: prevOffset }
                  ) : prev;
                  return _Utils_Tuple2(newMatch, newOffset);
                }
              );
              return A3(
                $elm$core$List$foldl,
                accumulateMatch,
                _Utils_Tuple2(initialMatch, offset),
                hs
              ).a;
            }
          );
          var accumulateResult = F2(
            function(n, _v0) {
              var prev = _v0.a;
              var num = _v0.b;
              var matchResult = A2(
                minScore,
                n,
                A3(
                  reduceHays,
                  $elm$core$List$length(needles),
                  num,
                  hays
                )
              );
              var newResult = _Utils_update(
                prev,
                {
                  aT: _Utils_ap(
                    prev.aT,
                    _List_fromArray(
                      [matchResult]
                    )
                  ),
                  P: matchResult.P + prev.P
                }
              );
              return _Utils_Tuple2(newResult, num + 1);
            }
          );
          return A3(
            $elm$core$List$foldl,
            accumulateResult,
            _Utils_Tuple2(initialResult, 0),
            needles
          ).a;
        }
      );
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$name = function(typoSuggestion) {
        if (!typoSuggestion.$) {
          var suggestionName = typoSuggestion.a;
          return suggestionName;
        } else {
          var suggestionName = typoSuggestion.a;
          return suggestionName;
        }
      };
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$Flag = function(a) {
        return { $: 0, a };
      };
      var $elm$core$List$append = F2(
        function(xs, ys) {
          if (!ys.b) {
            return xs;
          } else {
            return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
          }
        }
      );
      var $elm$core$List$concat = function(lists) {
        return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
      };
      var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
        function(f, existing, remaining, accumulator) {
          uniqueHelp:
            while (true) {
              if (!remaining.b) {
                return $elm$core$List$reverse(accumulator);
              } else {
                var first = remaining.a;
                var rest = remaining.b;
                var computedFirst = f(first);
                if (A2($elm$core$List$member, computedFirst, existing)) {
                  var $temp$f = f, $temp$existing = existing, $temp$remaining = rest, $temp$accumulator = accumulator;
                  f = $temp$f;
                  existing = $temp$existing;
                  remaining = $temp$remaining;
                  accumulator = $temp$accumulator;
                  continue uniqueHelp;
                } else {
                  var $temp$f = f, $temp$existing = A2($elm$core$List$cons, computedFirst, existing), $temp$remaining = rest, $temp$accumulator = A2($elm$core$List$cons, first, accumulator);
                  f = $temp$f;
                  existing = $temp$existing;
                  remaining = $temp$remaining;
                  accumulator = $temp$accumulator;
                  continue uniqueHelp;
                }
              }
            }
        }
      );
      var $elm_community$list_extra$List$Extra$uniqueBy = F2(
        function(f, list) {
          return A4($elm_community$list_extra$List$Extra$uniqueHelp, f, _List_Nil, list, _List_Nil);
        }
      );
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$optionSuggestions = function(optionsParsers) {
        return A2(
          $elm$core$List$map,
          $dillonkearns$elm_cli_options_parser$TypoSuggestion$Flag,
          A2(
            $elm$core$List$map,
            $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name,
            A2(
              $elm_community$list_extra$List$Extra$uniqueBy,
              $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name,
              $elm$core$List$concat(
                A2(
                  $elm$core$List$map,
                  function($) {
                    return $.a0;
                  },
                  optionsParsers
                )
              )
            )
          )
        );
      };
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$getSuggestions = F2(
        function(optionsParsers, unexpectedOption) {
          var something = F2(
            function(needle, hay) {
              return A4($dillonkearns$elm_cli_options_parser$Fuzzy$match, _List_Nil, _List_Nil, needle, hay).P;
            }
          );
          return A2(
            $elm$core$List$sortBy,
            A2(
              $elm$core$Basics$composeR,
              $dillonkearns$elm_cli_options_parser$TypoSuggestion$name,
              something(unexpectedOption)
            ),
            _Utils_ap(
              $dillonkearns$elm_cli_options_parser$TypoSuggestion$buildSubCommandSuggestions(optionsParsers),
              $dillonkearns$elm_cli_options_parser$TypoSuggestion$optionSuggestions(optionsParsers)
            )
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$suggestionToString = function(typoSuggestion) {
        return "`" + (function() {
          if (!typoSuggestion.$) {
            var flagName = typoSuggestion.a;
            return "--" + flagName;
          } else {
            var buildSubCommandName = typoSuggestion.a;
            return buildSubCommandName;
          }
        }() + "`");
      };
      var $dillonkearns$elm_cli_options_parser$TypoSuggestion$toMessage = F2(
        function(optionsParsers, unexpectedOption) {
          var _v0 = $elm$core$List$head(
            A2($dillonkearns$elm_cli_options_parser$TypoSuggestion$getSuggestions, optionsParsers, unexpectedOption)
          );
          if (!_v0.$) {
            var bestSuggestion = _v0.a;
            return "The `--" + (unexpectedOption + ("` flag was not found. Maybe it was one of these typos?\n\n`--" + (unexpectedOption + ("` <> " + $dillonkearns$elm_cli_options_parser$TypoSuggestion$suggestionToString(bestSuggestion)))));
          } else {
            return "TODO";
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$Match = function(a) {
        return { $: 2, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$NoMatch = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$SystemParser = function(a) {
        return { $: 0, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$UserParser = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$ValidationErrors = function(a) {
        return { $: 0, a };
      };
      var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
      var $elm$core$Set$empty = $elm$core$Dict$empty;
      var $elm$core$Set$insert = F2(
        function(key, _v0) {
          var dict = _v0;
          return A3($elm$core$Dict$insert, key, 0, dict);
        }
      );
      var $elm$core$Set$fromList = function(list) {
        return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
      };
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowHelp = { $: 3 };
      var $dillonkearns$elm_cli_options_parser$Tokenizer$Flag = { $: 0 };
      var $dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$Flag = function(a) {
        return { $: 0, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$flag = F2(
        function(flagName, occurences) {
          return A3(
            $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$FlagOrKeywordArg,
            $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$Flag(flagName),
            $elm$core$Maybe$Nothing,
            occurences
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectFlag = F2(
        function(flagName, _v0) {
          var optionsParser = _v0;
          var usageSpecs = optionsParser.a0;
          var decoder = optionsParser.G;
          return _Utils_update(
            optionsParser,
            {
              G: function(stuff) {
                var options = stuff.aw;
                return A2(
                  $elm$core$List$member,
                  A2($dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption, flagName, $dillonkearns$elm_cli_options_parser$Tokenizer$Flag),
                  options
                ) ? decoder(stuff) : $elm$core$Result$Err(
                  $dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError("Expect flag " + ("--" + flagName))
                );
              },
              a0: _Utils_ap(
                usageSpecs,
                _List_fromArray(
                  [
                    A2($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$flag, flagName, 1)
                  ]
                )
              )
            }
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpParser = A2(
        $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectFlag,
        "help",
        $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build($dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowHelp)
      );
      var $elm$core$Dict$foldl = F3(
        function(func, acc, dict) {
          foldl:
            while (true) {
              if (dict.$ === -2) {
                return acc;
              } else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(
                  func,
                  key,
                  value,
                  A3($elm$core$Dict$foldl, func, acc, left)
                ), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
              }
            }
        }
      );
      var $elm$core$Dict$filter = F2(
        function(isGood, dict) {
          return A3(
            $elm$core$Dict$foldl,
            F3(
              function(k, v, d) {
                return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
              }
            ),
            $elm$core$Dict$empty,
            dict
          );
        }
      );
      var $elm$core$Dict$member = F2(
        function(key, dict) {
          var _v0 = A2($elm$core$Dict$get, key, dict);
          if (!_v0.$) {
            return true;
          } else {
            return false;
          }
        }
      );
      var $elm$core$Dict$intersect = F2(
        function(t1, t2) {
          return A2(
            $elm$core$Dict$filter,
            F2(
              function(k, _v0) {
                return A2($elm$core$Dict$member, k, t2);
              }
            ),
            t1
          );
        }
      );
      var $elm$core$Set$intersect = F2(
        function(_v0, _v1) {
          var dict1 = _v0;
          var dict2 = _v1;
          return A2($elm$core$Dict$intersect, dict1, dict2);
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$intersection = function(sets) {
        if (!sets.b) {
          return $elm$core$Set$empty;
        } else {
          if (!sets.b.b) {
            var set = sets.a;
            return set;
          } else {
            var first = sets.a;
            var rest = sets.b;
            return A2(
              $elm$core$Set$intersect,
              first,
              $dillonkearns$elm_cli_options_parser$Cli$LowLevel$intersection(rest)
            );
          }
        }
      };
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map = F2(
        function(mapFunction, optionsParser) {
          var decoder = optionsParser.G;
          return A2(
            $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$updateDecoder,
            A2(
              $elm$core$Basics$composeR,
              decoder,
              $elm$core$Result$map(
                $elm$core$Tuple$mapSecond(mapFunction)
              )
            ),
            optionsParser
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$matchResultToMaybe = function(matchResult) {
        if (!matchResult.$) {
          var thing = matchResult.a;
          return $elm$core$Maybe$Just(thing);
        } else {
          var unknownFlags = matchResult.a;
          return $elm$core$Maybe$Nothing;
        }
      };
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$oneOf = A2(
        $elm$core$List$foldl,
        F2(
          function(x, acc) {
            return !_Utils_eq(acc, $elm$core$Maybe$Nothing) ? acc : x;
          }
        ),
        $elm$core$Maybe$Nothing
      );
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowVersion = { $: 4 };
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$showVersionParser = A2(
        $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectFlag,
        "version",
        $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build($dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowVersion)
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match = function(a) {
        return { $: 0, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$hasRestArgs = function(usageSpecs) {
        return A2(
          $elm$core$List$any,
          function(usageSpec) {
            if (usageSpec.$ === 2) {
              return true;
            } else {
              return false;
            }
          },
          usageSpecs
        );
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$isOperand = function(option) {
        switch (option.$) {
          case 1:
            var operandName = option.a;
            var mutuallyExclusiveValues = option.b;
            var occurences = option.c;
            return true;
          case 0:
            return false;
          default:
            return false;
        }
      };
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectedPositionalArgCountOrFail = function(_v0) {
        var optionsParser = _v0;
        var decoder = optionsParser.G;
        var usageSpecs = optionsParser.a0;
        return _Utils_update(
          optionsParser,
          {
            G: function(stuff) {
              var operands = stuff.ae;
              return !$dillonkearns$elm_cli_options_parser$Cli$UsageSpec$hasRestArgs(usageSpecs) && _Utils_cmp(
                $elm$core$List$length(operands),
                $elm$core$List$length(
                  A2($elm$core$List$filter, $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$isOperand, usageSpecs)
                )
              ) > 0 ? $elm$core$Result$Err(
                $dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError("Wrong number of operands")
              ) : decoder(stuff);
            }
          }
        );
      };
      var $dillonkearns$elm_cli_options_parser$Cli$Decode$UnexpectedOptions = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionName = function(option) {
        if (!option.$) {
          var flagName = option.a;
          return flagName;
        } else {
          var keywordArgName = option.a;
          return keywordArgName;
        }
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionExists = F2(
        function(usageSpecs, thisOptionName) {
          return A2(
            $elm_community$list_extra$List$Extra$find,
            function(option) {
              return _Utils_eq(
                $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionName(option),
                thisOptionName
              );
            },
            A2(
              $elm$core$List$filterMap,
              function(usageSpec) {
                switch (usageSpec.$) {
                  case 0:
                    var option = usageSpec.a;
                    var mutuallyExclusiveValues = usageSpec.b;
                    var occurences = usageSpec.c;
                    return $elm$core$Maybe$Just(option);
                  case 1:
                    return $elm$core$Maybe$Nothing;
                  default:
                    return $elm$core$Maybe$Nothing;
                }
              },
              usageSpecs
            )
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$unexpectedOptions_ = F2(
        function(_v0, options) {
          var usageSpecs = _v0.a0;
          return A2(
            $elm$core$List$filterMap,
            function(_v1) {
              var optionName = _v1.a;
              var optionKind = _v1.b;
              return _Utils_eq(
                A2($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionExists, usageSpecs, optionName),
                $elm$core$Maybe$Nothing
              ) ? $elm$core$Maybe$Just(optionName) : $elm$core$Maybe$Nothing;
            },
            options
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$failIfUnexpectedOptions = function(fullOptionsParser) {
        var optionsParser = fullOptionsParser;
        var decoder = optionsParser.G;
        var usageSpecs = optionsParser.a0;
        return _Utils_update(
          optionsParser,
          {
            G: function(flagsAndOperands) {
              var unexpectedOptions = A2($dillonkearns$elm_cli_options_parser$Cli$OptionsParser$unexpectedOptions_, fullOptionsParser, flagsAndOperands.aw);
              return $elm$core$List$isEmpty(unexpectedOptions) ? decoder(flagsAndOperands) : $elm$core$Result$Err(
                $dillonkearns$elm_cli_options_parser$Cli$Decode$UnexpectedOptions(unexpectedOptions)
              );
            }
          }
        );
      };
      var $dillonkearns$elm_cli_options_parser$Tokenizer$KeywordArg = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionHasArg = F2(
        function(options, optionNameToCheck) {
          var _v0 = A2(
            $elm_community$list_extra$List$Extra$find,
            function(spec) {
              return _Utils_eq(
                $dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionName(spec),
                optionNameToCheck
              );
            },
            A2(
              $elm$core$List$filterMap,
              function(spec) {
                switch (spec.$) {
                  case 0:
                    var option2 = spec.a;
                    var mutuallyExclusiveValues = spec.b;
                    var occurences = spec.c;
                    return $elm$core$Maybe$Just(option2);
                  case 1:
                    return $elm$core$Maybe$Nothing;
                  default:
                    return $elm$core$Maybe$Nothing;
                }
              },
              options
            )
          );
          if (!_v0.$) {
            var option = _v0.a;
            if (!option.$) {
              var flagName = option.a;
              return false;
            } else {
              var optionName_ = option.a;
              return true;
            }
          } else {
            return false;
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$KeywordArg = function(a) {
        return { $: 1, a };
      };
      var $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$NotOption = { $: 2 };
      var $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$Option = function(a) {
        return { $: 0, a };
      };
      var $elm$core$String$fromList = _String_fromList;
      var $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$split = function(string) {
        var _v0 = $elm$core$String$toList(string);
        if (_v0.b && "-" === _v0.a && _v0.b.b && "-" === _v0.b.a) {
          var _v1 = _v0.b;
          var optionName = _v1.b;
          var _v2 = A2(
            $elm$core$String$split,
            "=",
            $elm$core$String$fromList(optionName)
          );
          if (_v2.b) {
            if (!_v2.b.b) {
              var singleOptionName = _v2.a;
              return $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$Option(singleOptionName);
            } else {
              var firstOptionName = _v2.a;
              var splitAfterOptionName = _v2.b;
              return $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$KeywordArg(
                {
                  x: firstOptionName,
                  dq: $elm$core$String$concat(splitAfterOptionName)
                }
              );
            }
          } else {
            return $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$Option(
              $elm$core$String$fromList(optionName)
            );
          }
        } else {
          return $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$NotOption;
        }
      };
      var $dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands_ = F3(
        function(usageSpecs, argv, soFar) {
          flagsAndOperands_:
            while (true) {
              if (!argv.b) {
                return soFar;
              } else {
                var firstArg = argv.a;
                var restArgs = argv.b;
                var _v1 = $dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$split(firstArg);
                switch (_v1.$) {
                  case 0:
                    var optionName = _v1.a;
                    if (A2($dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionHasArg, usageSpecs, optionName)) {
                      if (restArgs.b) {
                        var secondArg = restArgs.a;
                        var afterSecondArg = restArgs.b;
                        var $temp$usageSpecs = usageSpecs, $temp$argv = afterSecondArg, $temp$soFar = {
                          ae: soFar.ae,
                          aw: _Utils_ap(
                            soFar.aw,
                            _List_fromArray(
                              [
                                A2(
                                  $dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption,
                                  optionName,
                                  $dillonkearns$elm_cli_options_parser$Tokenizer$KeywordArg(secondArg)
                                )
                              ]
                            )
                          )
                        };
                        usageSpecs = $temp$usageSpecs;
                        argv = $temp$argv;
                        soFar = $temp$soFar;
                        continue flagsAndOperands_;
                      } else {
                        var $temp$usageSpecs = usageSpecs, $temp$argv = restArgs, $temp$soFar = {
                          ae: soFar.ae,
                          aw: _Utils_ap(
                            soFar.aw,
                            _List_fromArray(
                              [
                                A2($dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption, optionName, $dillonkearns$elm_cli_options_parser$Tokenizer$Flag)
                              ]
                            )
                          )
                        };
                        usageSpecs = $temp$usageSpecs;
                        argv = $temp$argv;
                        soFar = $temp$soFar;
                        continue flagsAndOperands_;
                      }
                    } else {
                      var $temp$usageSpecs = usageSpecs, $temp$argv = restArgs, $temp$soFar = {
                        ae: soFar.ae,
                        aw: _Utils_ap(
                          soFar.aw,
                          _List_fromArray(
                            [
                              A2($dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption, optionName, $dillonkearns$elm_cli_options_parser$Tokenizer$Flag)
                            ]
                          )
                        )
                      };
                      usageSpecs = $temp$usageSpecs;
                      argv = $temp$argv;
                      soFar = $temp$soFar;
                      continue flagsAndOperands_;
                    }
                  case 1:
                    var name = _v1.a.x;
                    var value = _v1.a.dq;
                    var $temp$usageSpecs = usageSpecs, $temp$argv = restArgs, $temp$soFar = {
                      ae: soFar.ae,
                      aw: _Utils_ap(
                        soFar.aw,
                        _List_fromArray(
                          [
                            A2(
                              $dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption,
                              name,
                              $dillonkearns$elm_cli_options_parser$Tokenizer$KeywordArg(value)
                            )
                          ]
                        )
                      )
                    };
                    usageSpecs = $temp$usageSpecs;
                    argv = $temp$argv;
                    soFar = $temp$soFar;
                    continue flagsAndOperands_;
                  default:
                    var $temp$usageSpecs = usageSpecs, $temp$argv = restArgs, $temp$soFar = {
                      ae: _Utils_ap(
                        soFar.ae,
                        _List_fromArray(
                          [firstArg]
                        )
                      ),
                      aw: soFar.aw
                    };
                    usageSpecs = $temp$usageSpecs;
                    argv = $temp$argv;
                    soFar = $temp$soFar;
                    continue flagsAndOperands_;
                }
              }
            }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands = F2(
        function(usageSpecs, argv) {
          return A3(
            $dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands_,
            usageSpecs,
            argv,
            { ae: _List_Nil, aw: _List_Nil }
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getDecoder = function(_v0) {
        var decoder = _v0.G;
        return decoder;
      };
      var $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$tryMatch = F2(
        function(argv, optionsParser) {
          var usageSpecs = optionsParser.a0;
          var subCommand = optionsParser.Q;
          var flagsAndOperands = function(record) {
            var _v5 = _Utils_Tuple2(subCommand, record.ae);
            if (_v5.a.$ === 1) {
              var _v6 = _v5.a;
              return $elm$core$Result$Ok(
                { ae: record.ae, aw: record.aw, a0: usageSpecs }
              );
            } else {
              if (_v5.b.b) {
                var buildSubCommandName = _v5.a.a;
                var _v7 = _v5.b;
                var actualSubCommand = _v7.a;
                var remainingOperands = _v7.b;
                return _Utils_eq(actualSubCommand, buildSubCommandName) ? $elm$core$Result$Ok(
                  { ae: remainingOperands, aw: record.aw, a0: usageSpecs }
                ) : $elm$core$Result$Err(
                  { aO: "Sub optionsParser does not match", aw: record.aw }
                );
              } else {
                var buildSubCommandName = _v5.a.a;
                return $elm$core$Result$Err(
                  { aO: "No sub optionsParser provided", aw: record.aw }
                );
              }
            }
          }(
            A2($dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands, usageSpecs, argv)
          );
          var decoder = $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getDecoder(
            $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$failIfUnexpectedOptions(
              $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectedPositionalArgCountOrFail(optionsParser)
            )
          );
          if (!flagsAndOperands.$) {
            var actualFlagsAndOperands = flagsAndOperands.a;
            return function(result) {
              if (result.$ === 1) {
                var error = result.a;
                switch (error.$) {
                  case 0:
                    var matchError = error.a;
                    return $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch(_List_Nil);
                  case 2:
                    var validationError = error.a;
                    return $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match(
                      $elm$core$Result$Err(
                        _List_fromArray(
                          [validationError]
                        )
                      )
                    );
                  default:
                    var unexpectedOptions = error.a;
                    return $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch(unexpectedOptions);
                }
              } else {
                if (!result.a.a.b) {
                  var _v3 = result.a;
                  var value = _v3.b;
                  return $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match(
                    $elm$core$Result$Ok(value)
                  );
                } else {
                  var _v4 = result.a;
                  var validationErrors = _v4.a;
                  var value = _v4.b;
                  return $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match(
                    $elm$core$Result$Err(validationErrors)
                  );
                }
              }
            }(
              decoder(actualFlagsAndOperands)
            );
          } else {
            var errorMessage = flagsAndOperands.a.aO;
            var options = flagsAndOperands.a.aw;
            return $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch(
              A2($dillonkearns$elm_cli_options_parser$Cli$OptionsParser$unexpectedOptions_, optionsParser, options)
            );
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$LowLevel$try = F2(
        function(optionsParsers, argv) {
          var matchResults = A2(
            $elm$core$List$map,
            $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$tryMatch(
              A2($elm$core$List$drop, 2, argv)
            ),
            _Utils_ap(
              A2(
                $elm$core$List$map,
                $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end,
                A2(
                  $elm$core$List$map,
                  $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map($dillonkearns$elm_cli_options_parser$Cli$LowLevel$UserParser),
                  optionsParsers
                )
              ),
              _List_fromArray(
                [
                  A2(
                    $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map,
                    $dillonkearns$elm_cli_options_parser$Cli$LowLevel$SystemParser,
                    $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end($dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpParser)
                  ),
                  A2(
                    $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map,
                    $dillonkearns$elm_cli_options_parser$Cli$LowLevel$SystemParser,
                    $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end($dillonkearns$elm_cli_options_parser$Cli$LowLevel$showVersionParser)
                  )
                ]
              )
            )
          );
          var commonUnmatchedFlags = $elm$core$Set$toList(
            $dillonkearns$elm_cli_options_parser$Cli$LowLevel$intersection(
              A2(
                $elm$core$List$map,
                function(matchResult) {
                  if (matchResult.$ === 1) {
                    var unknownFlags = matchResult.a;
                    return $elm$core$Set$fromList(unknownFlags);
                  } else {
                    return $elm$core$Set$empty;
                  }
                },
                matchResults
              )
            )
          );
          return function(maybeResult) {
            if (!maybeResult.$) {
              var result = maybeResult.a;
              if (!result.$) {
                var msg = result.a;
                if (!msg.$) {
                  var systemMsg = msg.a;
                  return systemMsg;
                } else {
                  var userMsg = msg.a;
                  return $dillonkearns$elm_cli_options_parser$Cli$LowLevel$Match(userMsg);
                }
              } else {
                var validationErrors = result.a;
                return $dillonkearns$elm_cli_options_parser$Cli$LowLevel$ValidationErrors(validationErrors);
              }
            } else {
              return $dillonkearns$elm_cli_options_parser$Cli$LowLevel$NoMatch(commonUnmatchedFlags);
            }
          }(
            $dillonkearns$elm_cli_options_parser$Cli$LowLevel$oneOf(
              A2($elm$core$List$map, $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$matchResultToMaybe, matchResults)
            )
          );
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Program$run = F3(
        function(_v0, argv, versionMessage) {
          var optionsParsers = _v0.ax;
          var matchResult = A2($dillonkearns$elm_cli_options_parser$Cli$LowLevel$try, optionsParsers, argv);
          var errorMessage = "TODO - show error message explaining that user needs to pass unmodified `process.argv` from node here.";
          var programName = function() {
            if (argv.b && argv.b.b) {
              var first = argv.a;
              var _v4 = argv.b;
              var programPath = _v4.a;
              return A2(
                $elm$core$Maybe$withDefault,
                errorMessage,
                $elm_community$list_extra$List$Extra$last(
                  A2($elm$core$String$split, "/", programPath)
                )
              );
            } else {
              return errorMessage;
            }
          }();
          switch (matchResult.$) {
            case 1:
              var unexpectedOptions = matchResult.a;
              return _Utils_eq(unexpectedOptions, _List_Nil) ? A2(
                $dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
                1,
                "\nNo matching optionsParser...\n\nUsage:\n\n" + A2($dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpText, programName, optionsParsers)
              ) : A2(
                $dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
                1,
                A2(
                  $elm$core$String$join,
                  "\n",
                  A2(
                    $elm$core$List$map,
                    $dillonkearns$elm_cli_options_parser$TypoSuggestion$toMessage(
                      A2(
                        $elm$core$List$map,
                        function(optionsParser) {
                          return {
                            Q: $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getSubCommand(optionsParser),
                            a0: $dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getUsageSpecs(optionsParser)
                          };
                        },
                        optionsParsers
                      )
                    ),
                    unexpectedOptions
                  )
                )
              );
            case 0:
              var validationErrors = matchResult.a;
              return A2(
                $dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
                1,
                "Validation errors:\n\n" + A2(
                  $elm$core$String$join,
                  "\n",
                  A2(
                    $elm$core$List$map,
                    function(_v2) {
                      var name = _v2.x;
                      var invalidReason = _v2.ee;
                      return "Invalid " + ("`--" + (name + ("` option." + ("\n" + invalidReason))));
                    },
                    validationErrors
                  )
                )
              );
            case 2:
              var msg = matchResult.a;
              return $dillonkearns$elm_cli_options_parser$Cli$Program$CustomMatch(msg);
            case 3:
              return A2(
                $dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
                0,
                A2($dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpText, programName, optionsParsers)
              );
            default:
              return A2($dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage, 0, versionMessage);
          }
        }
      );
      var $dillonkearns$elm_cli_options_parser$Cli$Program$statefulInit = F2(
        function(options, flags) {
          var matchResult = A3($dillonkearns$elm_cli_options_parser$Cli$Program$run, options.dR, flags.dH, flags.e6);
          var cmd = function() {
            if (!matchResult.$) {
              var exitStatus = matchResult.a;
              var message = matchResult.b;
              if (exitStatus === 1) {
                return _Utils_Tuple2(
                  $dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage,
                  options.eJ(message)
                );
              } else {
                return _Utils_Tuple2(
                  $dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage,
                  options.eK(message)
                );
              }
            } else {
              var cliOptions = matchResult.a;
              var _v2 = A2(options.ec, flags, cliOptions);
              var userModel = _v2.a;
              var userCmd = _v2.b;
              return _Utils_Tuple2(
                A2($dillonkearns$elm_cli_options_parser$Cli$Program$UserModel, userModel, cliOptions),
                userCmd
              );
            }
          }();
          return cmd;
        }
      );
      var $elm$core$Platform$worker = _Platform_worker;
      var $dillonkearns$elm_cli_options_parser$Cli$Program$stateful = function(options) {
        return $elm$core$Platform$worker(
          {
            ec: $dillonkearns$elm_cli_options_parser$Cli$Program$statefulInit(options),
            eX: function(model) {
              if (model.$ === 1) {
                var actualModel = model.a;
                var cliOptions = model.b;
                return options.eX(actualModel);
              } else {
                return $elm$core$Platform$Sub$none;
              }
            },
            e4: F2(
              function(msg, model) {
                if (model.$ === 1) {
                  var actualModel = model.a;
                  var cliOptions = model.b;
                  var _v2 = A3(options.e4, cliOptions, msg, actualModel);
                  var userModel = _v2.a;
                  var userCmd = _v2.b;
                  return _Utils_Tuple2(
                    A2($dillonkearns$elm_cli_options_parser$Cli$Program$UserModel, userModel, cliOptions),
                    userCmd
                  );
                } else {
                  return _Utils_Tuple2($dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage, $elm$core$Platform$Cmd$none);
                }
              }
            )
          }
        );
      };
      var $author$project$Main$FinishedWritingToFiles = { $: 1 };
      var $author$project$Main$FinishedWritingToFilesWithError = { $: 2 };
      var $author$project$Main$GotInteropPortsToElmDecodingError = function(a) {
        return { $: 3, a };
      };
      var $elm$core$Platform$Sub$map = _Platform_map;
      var $elm$json$Json$Decode$decodeValue = _Json_run;
      var $elm$json$Json$Decode$value = _Json_decodeValue;
      var $author$project$InteropPorts$interopToElm = _Platform_incomingPort("interopToElm", $elm$json$Json$Decode$value);
      var $author$project$InteropPorts$toElm = $author$project$InteropPorts$interopToElm(
        $elm$json$Json$Decode$decodeValue(
          $dillonkearns$elm_ts_json$TsJson$Decode$decoder($author$project$InteropDefinitions$interop.e2)
        )
      );
      var $author$project$Main$subscriptions = function(_v0) {
        return A2(
          $elm$core$Platform$Sub$map,
          function(toElm) {
            if (!toElm.$) {
              if (!toElm.a) {
                var _v2 = toElm.a;
                return $author$project$Main$FinishedWritingToFiles;
              } else {
                var _v3 = toElm.a;
                return $author$project$Main$FinishedWritingToFilesWithError;
              }
            } else {
              var error = toElm.a;
              return $author$project$Main$GotInteropPortsToElmDecodingError(error);
            }
          },
          $author$project$InteropPorts$toElm
        );
      };
      var $author$project$Main$PrintAndExitFailure = function(a) {
        return { $: 0, a };
      };
      var $author$project$Main$PrintAndExitSuccess = function(a) {
        return { $: 1, a };
      };
      var $author$project$Main$WriteToFiles = function(a) {
        return { $: 3, a };
      };
      var $elm$core$List$concatMap = F2(
        function(f, list) {
          return $elm$core$List$concat(
            A2($elm$core$List$map, f, list)
          );
        }
      );
      var $elm$core$Basics$always = F2(
        function(a, _v0) {
          return a;
        }
      );
      var $elm_community$string_extra$String$Extra$regexFromString = A2(
        $elm$core$Basics$composeR,
        $elm$regex$Regex$fromString,
        $elm$core$Maybe$withDefault($elm$regex$Regex$never)
      );
      var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
      var $elm$core$String$toUpper = _String_toUpper;
      var $elm_community$string_extra$String$Extra$camelize = function(string) {
        return A3(
          $elm$regex$Regex$replace,
          $elm_community$string_extra$String$Extra$regexFromString("[-_\\s]+(.)?"),
          function(_v0) {
            var submatches = _v0.eV;
            if (submatches.b && !submatches.a.$) {
              var match = submatches.a.a;
              return $elm$core$String$toUpper(match);
            } else {
              return "";
            }
          },
          $elm$core$String$trim(string)
        );
      };
      var $elm$core$String$replace = F3(
        function(before, after, string) {
          return A2(
            $elm$core$String$join,
            after,
            A2($elm$core$String$split, before, string)
          );
        }
      );
      var $elm_community$string_extra$String$Extra$changeCase = F2(
        function(mutator, word) {
          return A2(
            $elm$core$Maybe$withDefault,
            "",
            A2(
              $elm$core$Maybe$map,
              function(_v0) {
                var head = _v0.a;
                var tail = _v0.b;
                return A2(
                  $elm$core$String$cons,
                  mutator(head),
                  tail
                );
              },
              $elm$core$String$uncons(word)
            )
          );
        }
      );
      var $elm$core$Char$toUpper = _Char_toUpper;
      var $elm_community$string_extra$String$Extra$toSentenceCase = function(word) {
        return A2($elm_community$string_extra$String$Extra$changeCase, $elm$core$Char$toUpper, word);
      };
      var $elm_community$string_extra$String$Extra$classify = function(string) {
        return $elm_community$string_extra$String$Extra$toSentenceCase(
          A3(
            $elm$core$String$replace,
            " ",
            "",
            $elm_community$string_extra$String$Extra$camelize(
              A3(
                $elm$regex$Regex$replace,
                $elm_community$string_extra$String$Extra$regexFromString("[\\W_]"),
                $elm$core$Basics$always(" "),
                string
              )
            )
          )
        );
      };
      var $mdgriffith$elm_codegen$Elm$docs = function(group) {
        var _v0 = group.U;
        if (_v0.$ === 1) {
          return "@docs " + A2($elm$core$String$join, ", ", group.cg);
        } else {
          var groupName = _v0.a;
          return "## " + (groupName + ("\n\n@docs " + A2($elm$core$String$join, ", ", group.cg)));
        }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$Annotation = $elm$core$Basics$identity;
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(
        function(a, b) {
          return { $: 1, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey = F2(
        function(mod, name) {
          return A2($elm$core$String$join, ".", mod) + ("." + name);
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Node$value = function(_v0) {
        var v = _v0.b;
        return v;
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
      var $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper = function(ann) {
        switch (ann.$) {
          case 0:
            var str = ann.a;
            return _List_fromArray(
              [str]
            );
          case 1:
            var modName = ann.a;
            var anns = ann.b;
            return A2(
              $elm$core$List$concatMap,
              A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper, $mdgriffith$elm_codegen$Internal$Compiler$denode),
              anns
            );
          case 2:
            return _List_Nil;
          case 3:
            var tupled = ann.a;
            return A2(
              $elm$core$List$concatMap,
              A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper, $mdgriffith$elm_codegen$Internal$Compiler$denode),
              tupled
            );
          case 4:
            var recordDefinition = ann.a;
            return A2(
              $elm$core$List$concatMap,
              function(nodedField) {
                var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodedField);
                var name = _v1.a;
                var field = _v1.b;
                return $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(field)
                );
              },
              recordDefinition
            );
          case 5:
            var recordName = ann.a;
            var recordDefinition = ann.b;
            return A2(
              $elm$core$List$concatMap,
              function(nodedField) {
                var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodedField);
                var name = _v2.a;
                var field = _v2.b;
                return $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(field)
                );
              },
              $mdgriffith$elm_codegen$Internal$Compiler$denode(recordDefinition)
            );
          default:
            var one = ann.a;
            var two = ann.b;
            return A2(
              $elm$core$List$concatMap,
              $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper,
              _List_fromArray(
                [
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(one),
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(two)
                ]
              )
            );
        }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp = F4(
        function(f, existing, remaining, accumulator) {
          uniqueHelp:
            while (true) {
              if (!remaining.b) {
                return $elm$core$List$reverse(accumulator);
              } else {
                var first = remaining.a;
                var rest = remaining.b;
                var computedFirst = f(first);
                if (A2($elm$core$List$member, computedFirst, existing)) {
                  var $temp$f = f, $temp$existing = existing, $temp$remaining = rest, $temp$accumulator = accumulator;
                  f = $temp$f;
                  existing = $temp$existing;
                  remaining = $temp$remaining;
                  accumulator = $temp$accumulator;
                  continue uniqueHelp;
                } else {
                  var $temp$f = f, $temp$existing = A2($elm$core$List$cons, computedFirst, existing), $temp$remaining = rest, $temp$accumulator = A2($elm$core$List$cons, first, accumulator);
                  f = $temp$f;
                  existing = $temp$existing;
                  remaining = $temp$remaining;
                  accumulator = $temp$accumulator;
                  continue uniqueHelp;
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$unique = function(list) {
        return A4($mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp, $elm$core$Basics$identity, _List_Nil, list, _List_Nil);
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getGenerics = function(_v0) {
        var details = _v0;
        return $mdgriffith$elm_codegen$Internal$Compiler$unique(
          $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(details.Z)
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$addAlias = F4(
        function(mod, name, ann, aliasCache) {
          var annDetails = ann;
          return A3(
            $elm$core$Dict$insert,
            A2($mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey, mod, name),
            {
              ai: annDetails.Z,
              a1: $mdgriffith$elm_codegen$Internal$Compiler$getGenerics(ann)
            },
            aliasCache
          );
        }
      );
      var $elm$core$String$dropLeft = F2(
        function(n, string) {
          return n < 1 ? string : A3(
            $elm$core$String$slice,
            n,
            $elm$core$String$length(string),
            string
          );
        }
      );
      var $elm$core$String$left = F2(
        function(n, string) {
          return n < 1 ? "" : A3($elm$core$String$slice, 0, n, string);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$formatType = function(str) {
        return _Utils_ap(
          $elm$core$String$toUpper(
            A2($elm$core$String$left, 1, str)
          ),
          A2($elm$core$String$dropLeft, 1, str)
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getAliases = function(_v0) {
        var ann = _v0;
        return ann.dE;
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports = function(_v0) {
        var details = _v0;
        return details.b;
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation = function(_v0) {
        var details = _v0;
        return details.Z;
      };
      var $elm$core$Dict$union = F2(
        function(t1, t2) {
          return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases = $elm$core$Dict$union;
      var $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
        bw: { bh: 0, cJ: 0 },
        eS: { bh: 0, cJ: 0 }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$nodify = function(exp) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
      };
      var $mdgriffith$elm_codegen$Elm$Annotation$alias = F4(
        function(mod, name, vars, target) {
          return {
            dE: A4(
              $mdgriffith$elm_codegen$Internal$Compiler$addAlias,
              mod,
              name,
              target,
              A3(
                $elm$core$List$foldl,
                F2(
                  function(ann, aliases) {
                    return A2(
                      $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
                      $mdgriffith$elm_codegen$Internal$Compiler$getAliases(ann),
                      aliases
                    );
                  }
                ),
                $mdgriffith$elm_codegen$Internal$Compiler$getAliases(target),
                vars
              )
            ),
            Z: A2(
              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
              $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                _Utils_Tuple2(
                  mod,
                  $mdgriffith$elm_codegen$Internal$Compiler$formatType(name)
                )
              ),
              A2(
                $elm$core$List$map,
                A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$nodify, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation),
                vars
              )
            ),
            b: function() {
              if (!mod.b) {
                return _Utils_ap(
                  $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(target),
                  A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, vars)
                );
              } else {
                return _Utils_ap(
                  _List_fromArray(
                    [mod]
                  ),
                  _Utils_ap(
                    $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(target),
                    A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, vars)
                  )
                );
              }
            }()
          };
        }
      );
      var $author$project$Gen$Eos$Authorization$moduleName_ = _List_fromArray(
        ["Eos", "Authorization"]
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases = $elm$core$Dict$empty;
      var $mdgriffith$elm_codegen$Elm$Annotation$getAliases = function(_v0) {
        var ann = _v0;
        return ann.dE;
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$Compiler$nodify);
      var $mdgriffith$elm_codegen$Elm$Annotation$namedWith = F3(
        function(mod, name, args) {
          return {
            dE: A3(
              $elm$core$List$foldl,
              F2(
                function(ann, aliases) {
                  return A2(
                    $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
                    $mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
                    aliases
                  );
                }
              ),
              $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
              args
            ),
            Z: A2(
              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
              $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                _Utils_Tuple2(
                  mod,
                  $mdgriffith$elm_codegen$Internal$Compiler$formatType(name)
                )
              ),
              $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, args)
              )
            ),
            b: A2(
              $elm$core$List$cons,
              mod,
              A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, args)
            )
          };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function(a) {
        return { $: 4, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$sanitize = function(str) {
        switch (str) {
          case "in":
            return "in_";
          case "type":
            return "type_";
          case "case":
            return "case_";
          case "let":
            return "let_";
          case "module":
            return "module_";
          case "exposing":
            return "exposing_";
          case "where":
            return "where_";
          case "main":
            return "main_";
          case "port":
            return "port_";
          case "as":
            return "as_";
          case "if":
            return "if_";
          case "import":
            return "import_";
          default:
            return str;
        }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$formatValue = function(str) {
        var formatted = _Utils_ap(
          $elm$core$String$toLower(
            A2($elm$core$String$left, 1, str)
          ),
          A2($elm$core$String$dropLeft, 1, str)
        );
        return $mdgriffith$elm_codegen$Internal$Compiler$sanitize(formatted);
      };
      var $mdgriffith$elm_codegen$Elm$Annotation$record = function(fields) {
        return {
          dE: A3(
            $elm$core$List$foldl,
            F2(
              function(_v0, aliases) {
                var ann = _v0.b;
                return A2(
                  $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
                  $mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
                  aliases
                );
              }
            ),
            $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
            fields
          ),
          Z: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(
            $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
              A2(
                $elm$core$List$map,
                function(_v1) {
                  var name = _v1.a;
                  var ann = _v1.b;
                  return _Utils_Tuple2(
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      $mdgriffith$elm_codegen$Internal$Compiler$formatValue(name)
                    ),
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(ann)
                    )
                  );
                },
                fields
              )
            )
          ),
          b: A2(
            $elm$core$List$concatMap,
            A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports),
            fields
          )
        };
      };
      var $author$project$Gen$Eos$Authorization$annotation_ = {
        bb: A4(
          $mdgriffith$elm_codegen$Elm$Annotation$alias,
          $author$project$Gen$Eos$Authorization$moduleName_,
          "Authorization",
          _List_Nil,
          $mdgriffith$elm_codegen$Elm$Annotation$record(
            _List_fromArray(
              [
                _Utils_Tuple2(
                  "actor",
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Eos", "Name"]
                    ),
                    "Name",
                    _List_Nil
                  )
                ),
                _Utils_Tuple2(
                  "permission",
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Eos", "Permission"]
                    ),
                    "Permission",
                    _List_Nil
                  )
                )
              ]
            )
          )
        )
      };
      var $author$project$Gen$Json$Encode$annotation_ = {
        dq: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Json", "Encode"]
          ),
          "Value",
          _List_Nil
        )
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function(a) {
        return { $: 1, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs = F2(
        function(a, b) {
          return { $: 3, a, b };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function(a) {
        return { $: 0, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(
        function(a, b) {
          return { $: 5, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$addInference = F3(
        function(key, value, infs) {
          return A3(
            $elm$core$Dict$update,
            key,
            function(maybeValue) {
              if (maybeValue.$ === 1) {
                return $elm$core$Maybe$Just(value);
              } else {
                if (maybeValue.a.$ === 5) {
                  var _v1 = maybeValue.a;
                  var _v2 = _v1.a;
                  var range = _v2.a;
                  var recordName = _v2.b;
                  var _v3 = _v1.b;
                  var fieldRange = _v3.a;
                  var fields = _v3.b;
                  if (value.$ === 5) {
                    var _v5 = value.a;
                    var existingRange = _v5.a;
                    var existingRecordName = _v5.b;
                    var _v6 = value.b;
                    var existingFieldRange = _v6.a;
                    var existingFields = _v6.b;
                    return $elm$core$Maybe$Just(
                      A2(
                        $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
                        A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, recordName),
                        A2(
                          $stil4m$elm_syntax$Elm$Syntax$Node$Node,
                          fieldRange,
                          _Utils_ap(fields, existingFields)
                        )
                      )
                    );
                  } else {
                    return maybeValue;
                  }
                } else {
                  var existing = maybeValue.a;
                  return $elm$core$Maybe$Just(existing);
                }
              }
            },
            infs
          );
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(
        function(a, b) {
          return { $: 6, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper = F2(
        function(last, reversedArgs) {
          makeFunctionReversedHelper:
            while (true) {
              if (!reversedArgs.b) {
                return last;
              } else {
                if (!reversedArgs.b.b) {
                  var penUlt = reversedArgs.a;
                  return A2(
                    $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                    A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, penUlt),
                    A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, last)
                  );
                } else {
                  var penUlt = reversedArgs.a;
                  var remain = reversedArgs.b;
                  var $temp$last = A2(
                    $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                    A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, penUlt),
                    A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, last)
                  ), $temp$reversedArgs = remain;
                  last = $temp$last;
                  reversedArgs = $temp$reversedArgs;
                  continue makeFunctionReversedHelper;
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$makeFunction = F2(
        function(result, args) {
          return A2(
            $mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper,
            result,
            $elm$core$List$reverse(args)
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables = { $: 4 };
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function(a) {
        return { $: 3, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify = F2(
        function(a, b) {
          return { $: 14, a, b };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = { $: 2 };
      var $mdgriffith$elm_codegen$Internal$Compiler$getAlias = F2(
        function(_v0, cache) {
          var _v1 = _v0.b;
          var modName = _v1.a;
          var name = _v1.b;
          return A2(
            $elm$core$Dict$get,
            A2($mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey, modName, name),
            cache
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField = function(a) {
        return { $: 7, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getField = F4(
        function(name, val, fields, captured) {
          getField:
            while (true) {
              if (!fields.b) {
                return $elm$core$Result$Err(
                  $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField(
                    {
                      d$: A2(
                        $elm$core$List$map,
                        A2(
                          $elm$core$Basics$composeR,
                          $mdgriffith$elm_codegen$Internal$Compiler$denode,
                          A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)
                        ),
                        captured
                      ),
                      an: name
                    }
                  )
                );
              } else {
                var top = fields.a;
                var remain = fields.b;
                var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(top);
                var topFieldName = _v1.a;
                var topFieldVal = _v1.b;
                var topName = $mdgriffith$elm_codegen$Internal$Compiler$denode(topFieldName);
                var topVal = $mdgriffith$elm_codegen$Internal$Compiler$denode(topFieldVal);
                if (_Utils_eq(topName, name)) {
                  return $elm$core$Result$Ok(
                    _Utils_Tuple2(
                      topVal,
                      _Utils_ap(captured, remain)
                    )
                  );
                } else {
                  var $temp$name = name, $temp$val = val, $temp$fields = remain, $temp$captured = A2($elm$core$List$cons, top, captured);
                  name = $temp$name;
                  val = $temp$val;
                  fields = $temp$fields;
                  captured = $temp$captured;
                  continue getField;
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$isAppendable = function(annotation) {
        _v0$2:
          while (true) {
            if (annotation.$ === 1 && !annotation.a.b.a.b) {
              switch (annotation.a.b.b) {
                case "String":
                  var _v1 = annotation.a;
                  var _v2 = _v1.b;
                  return true;
                case "List":
                  if (annotation.b.b && !annotation.b.b.b) {
                    var _v3 = annotation.a;
                    var _v4 = _v3.b;
                    var _v5 = annotation.b;
                    var _v6 = _v5.a;
                    var inner = _v6.b;
                    return true;
                  } else {
                    break _v0$2;
                  }
                default:
                  break _v0$2;
              }
            } else {
              break _v0$2;
            }
          }
        return false;
      };
      var $elm$core$List$all = F2(
        function(isOkay, list) {
          return !A2(
            $elm$core$List$any,
            A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
            list
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$isComparable = function(annotation) {
        isComparable:
          while (true) {
            _v0$6:
              while (true) {
                switch (annotation.$) {
                  case 1:
                    if (annotation.a.b.a.b) {
                      if (annotation.a.b.a.a === "Char" && !annotation.a.b.a.b.b && annotation.a.b.b === "Char") {
                        var _v5 = annotation.a;
                        var _v6 = _v5.b;
                        var _v7 = _v6.a;
                        return true;
                      } else {
                        break _v0$6;
                      }
                    } else {
                      switch (annotation.a.b.b) {
                        case "Int":
                          var _v1 = annotation.a;
                          var _v2 = _v1.b;
                          return true;
                        case "Float":
                          var _v3 = annotation.a;
                          var _v4 = _v3.b;
                          return true;
                        case "String":
                          var _v8 = annotation.a;
                          var _v9 = _v8.b;
                          return true;
                        case "List":
                          if (annotation.b.b && !annotation.b.b.b) {
                            var _v10 = annotation.a;
                            var _v11 = _v10.b;
                            var _v12 = annotation.b;
                            var _v13 = _v12.a;
                            var inner = _v13.b;
                            var $temp$annotation = inner;
                            annotation = $temp$annotation;
                            continue isComparable;
                          } else {
                            break _v0$6;
                          }
                        default:
                          break _v0$6;
                      }
                    }
                  case 3:
                    var innerList = annotation.a;
                    return A2(
                      $elm$core$List$all,
                      A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$isComparable, $mdgriffith$elm_codegen$Internal$Compiler$denode),
                      innerList
                    );
                  default:
                    break _v0$6;
                }
              }
            return false;
          }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$isNumber = function(annotation) {
        _v0$2:
          while (true) {
            if (annotation.$ === 1 && !annotation.a.b.a.b) {
              switch (annotation.a.b.b) {
                case "Int":
                  var _v1 = annotation.a;
                  var _v2 = _v1.b;
                  return true;
                case "Float":
                  var _v3 = annotation.a;
                  var _v4 = _v3.b;
                  return true;
                default:
                  break _v0$2;
              }
            } else {
              break _v0$2;
            }
          }
        return false;
      };
      var $elm$core$Bitwise$and = _Bitwise_and;
      var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
      var $elm$core$String$repeatHelp = F3(
        function(n, chunk, result) {
          return n <= 0 ? result : A3(
            $elm$core$String$repeatHelp,
            n >> 1,
            _Utils_ap(chunk, chunk),
            !(n & 1) ? result : _Utils_ap(result, chunk)
          );
        }
      );
      var $elm$core$String$repeat = F2(
        function(n, chunk) {
          return A3($elm$core$String$repeatHelp, n, chunk, "");
        }
      );
      var $stil4m$structured_writer$StructuredWriter$asIndent = function(amount) {
        return A2($elm$core$String$repeat, amount, " ");
      };
      var $stil4m$structured_writer$StructuredWriter$writeIndented = F2(
        function(indent_, w) {
          switch (w.$) {
            case 0:
              var _v1 = w.a;
              var pre = _v1.a;
              var sep = _v1.b;
              var post = _v1.c;
              var differentLines = w.b;
              var items = w.c;
              var seperator = differentLines ? "\n" + ($stil4m$structured_writer$StructuredWriter$asIndent(indent_) + sep) : sep;
              return $elm$core$String$concat(
                _List_fromArray(
                  [
                    pre,
                    A2(
                      $elm$core$String$join,
                      seperator,
                      A2(
                        $elm$core$List$map,
                        A2(
                          $elm$core$Basics$composeR,
                          $elm$core$Basics$identity,
                          $stil4m$structured_writer$StructuredWriter$writeIndented(indent_)
                        ),
                        items
                      )
                    ),
                    post
                  ]
                )
              );
            case 1:
              var items = w.a;
              return A2(
                $elm$core$String$join,
                "\n" + $stil4m$structured_writer$StructuredWriter$asIndent(indent_),
                A2(
                  $elm$core$List$concatMap,
                  A2(
                    $elm$core$Basics$composeR,
                    $stil4m$structured_writer$StructuredWriter$writeIndented(0),
                    $elm$core$String$split("\n")
                  ),
                  items
                )
              );
            case 2:
              var s = w.a;
              return s;
            case 4:
              var n = w.a;
              var next = w.b;
              return _Utils_ap(
                $stil4m$structured_writer$StructuredWriter$asIndent(n + indent_),
                A2($stil4m$structured_writer$StructuredWriter$writeIndented, n + indent_, next)
              );
            case 5:
              var items = w.a;
              return A2(
                $elm$core$String$join,
                " ",
                A2(
                  $elm$core$List$map,
                  $stil4m$structured_writer$StructuredWriter$writeIndented(indent_),
                  items
                )
              );
            case 6:
              var items = w.a;
              return $elm$core$String$concat(
                A2(
                  $elm$core$List$map,
                  $stil4m$structured_writer$StructuredWriter$writeIndented(indent_),
                  items
                )
              );
            default:
              var x = w.a;
              var y = w.b;
              return _Utils_ap(
                A2($stil4m$structured_writer$StructuredWriter$writeIndented, indent_, x),
                A2($stil4m$structured_writer$StructuredWriter$writeIndented, indent_, y)
              );
          }
        }
      );
      var $stil4m$structured_writer$StructuredWriter$write = $stil4m$structured_writer$StructuredWriter$writeIndented(0);
      var $stil4m$elm_syntax$Elm$Writer$write = $stil4m$structured_writer$StructuredWriter$write;
      var $stil4m$structured_writer$StructuredWriter$Sep = F3(
        function(a, b, c) {
          return { $: 0, a, b, c };
        }
      );
      var $stil4m$structured_writer$StructuredWriter$bracesComma = $stil4m$structured_writer$StructuredWriter$Sep(
        _Utils_Tuple3("{", ", ", "}")
      );
      var $stil4m$structured_writer$StructuredWriter$Joined = function(a) {
        return { $: 6, a };
      };
      var $stil4m$structured_writer$StructuredWriter$join = $stil4m$structured_writer$StructuredWriter$Joined;
      var $stil4m$structured_writer$StructuredWriter$parensComma = $stil4m$structured_writer$StructuredWriter$Sep(
        _Utils_Tuple3("(", ", ", ")")
      );
      var $elm$core$String$contains = _String_contains;
      var $stil4m$structured_writer$StructuredWriter$Str = function(a) {
        return { $: 2, a };
      };
      var $stil4m$structured_writer$StructuredWriter$string = $stil4m$structured_writer$StructuredWriter$Str;
      var $stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces = function(w) {
        return A2(
          $elm$core$String$contains,
          " ",
          $stil4m$structured_writer$StructuredWriter$write(w)
        ) ? $stil4m$structured_writer$StructuredWriter$join(
          _List_fromArray(
            [
              $stil4m$structured_writer$StructuredWriter$string("("),
              w,
              $stil4m$structured_writer$StructuredWriter$string(")")
            ]
          )
        ) : w;
      };
      var $stil4m$structured_writer$StructuredWriter$sepByComma = $stil4m$structured_writer$StructuredWriter$Sep(
        _Utils_Tuple3("", ", ", "")
      );
      var $stil4m$structured_writer$StructuredWriter$Spaced = function(a) {
        return { $: 5, a };
      };
      var $stil4m$structured_writer$StructuredWriter$spaced = $stil4m$structured_writer$StructuredWriter$Spaced;
      var $stil4m$elm_syntax$Elm$Writer$writeRecordField = function(_v4) {
        var _v5 = _v4.b;
        var name = _v5.a;
        var ref = _v5.b;
        return $stil4m$structured_writer$StructuredWriter$spaced(
          _List_fromArray(
            [
              $stil4m$structured_writer$StructuredWriter$string(
                $stil4m$elm_syntax$Elm$Syntax$Node$value(name)
              ),
              $stil4m$structured_writer$StructuredWriter$string(":"),
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(ref)
            ]
          )
        );
      };
      var $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation = function(_v0) {
        var typeAnnotation = _v0.b;
        switch (typeAnnotation.$) {
          case 0:
            var s = typeAnnotation.a;
            return $stil4m$structured_writer$StructuredWriter$string(s);
          case 1:
            var moduleNameAndName = typeAnnotation.a;
            var args = typeAnnotation.b;
            var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).a;
            var k = $stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).b;
            return $stil4m$structured_writer$StructuredWriter$spaced(
              A2(
                $elm$core$List$cons,
                $stil4m$structured_writer$StructuredWriter$string(
                  A2(
                    $elm$core$String$join,
                    ".",
                    _Utils_ap(
                      moduleName,
                      _List_fromArray(
                        [k]
                      )
                    )
                  )
                ),
                A2(
                  $elm$core$List$map,
                  A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, $stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces),
                  args
                )
              )
            );
          case 2:
            return $stil4m$structured_writer$StructuredWriter$string("()");
          case 3:
            var xs = typeAnnotation.a;
            return A2(
              $stil4m$structured_writer$StructuredWriter$parensComma,
              false,
              A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, xs)
            );
          case 4:
            var xs = typeAnnotation.a;
            return A2(
              $stil4m$structured_writer$StructuredWriter$bracesComma,
              false,
              A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Writer$writeRecordField, xs)
            );
          case 5:
            var name = typeAnnotation.a;
            var fields = typeAnnotation.b;
            return $stil4m$structured_writer$StructuredWriter$spaced(
              _List_fromArray(
                [
                  $stil4m$structured_writer$StructuredWriter$string("{"),
                  $stil4m$structured_writer$StructuredWriter$string(
                    $stil4m$elm_syntax$Elm$Syntax$Node$value(name)
                  ),
                  $stil4m$structured_writer$StructuredWriter$string("|"),
                  A2(
                    $stil4m$structured_writer$StructuredWriter$sepByComma,
                    false,
                    A2(
                      $elm$core$List$map,
                      $stil4m$elm_syntax$Elm$Writer$writeRecordField,
                      $stil4m$elm_syntax$Elm$Syntax$Node$value(fields)
                    )
                  ),
                  $stil4m$structured_writer$StructuredWriter$string("}")
                ]
              )
            );
          default:
            var left = typeAnnotation.a;
            var right = typeAnnotation.b;
            var addParensForSubTypeAnnotation = function(type_) {
              if (type_.b.$ === 6) {
                var _v3 = type_.b;
                return $stil4m$structured_writer$StructuredWriter$join(
                  _List_fromArray(
                    [
                      $stil4m$structured_writer$StructuredWriter$string("("),
                      $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_),
                      $stil4m$structured_writer$StructuredWriter$string(")")
                    ]
                  )
                );
              } else {
                return $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_);
              }
            };
            return $stil4m$structured_writer$StructuredWriter$spaced(
              _List_fromArray(
                [
                  addParensForSubTypeAnnotation(left),
                  $stil4m$structured_writer$StructuredWriter$string("->"),
                  addParensForSubTypeAnnotation(right)
                ]
              )
            );
        }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions = F2(
        function(restrictions, type_) {
          switch (restrictions.$) {
            case 0:
              return $elm$core$Result$Ok(type_);
            case 5:
              var constraints = restrictions.a;
              return $elm$core$Result$Err(
                $stil4m$elm_syntax$Elm$Writer$write(
                  $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(type_)
                  )
                ) + (" needs to be: " + (A2(
                  $elm$core$String$join,
                  ", ",
                  A2(
                    $elm$core$List$concatMap,
                    function(constraint) {
                      switch (constraint.$) {
                        case 0:
                          return _List_Nil;
                        case 5:
                          return _List_Nil;
                        case 1:
                          return _List_fromArray(
                            ["a number"]
                          );
                        case 3:
                          return _List_fromArray(
                            ["comparable"]
                          );
                        case 2:
                          return _List_fromArray(
                            ["appendable"]
                          );
                        default:
                          return _List_fromArray(
                            ["appendable and comparable"]
                          );
                      }
                    },
                    constraints
                  )
                ) + "\n\nbut that's impossible!  Or Elm Codegen's s typechecker is off."))
              );
            case 1:
              return $mdgriffith$elm_codegen$Internal$Compiler$isNumber(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
                $stil4m$elm_syntax$Elm$Writer$write(
                  $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(type_)
                  )
                ) + " is not a number"
              );
            case 3:
              return $mdgriffith$elm_codegen$Internal$Compiler$isComparable(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
                $stil4m$elm_syntax$Elm$Writer$write(
                  $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(type_)
                  )
                ) + " is not comparable.  Only Ints, Floats, Chars, Strings and Lists and Tuples of those things are comparable."
              );
            case 2:
              return $mdgriffith$elm_codegen$Internal$Compiler$isAppendable(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
                $stil4m$elm_syntax$Elm$Writer$write(
                  $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(type_)
                  )
                ) + " is not appendable.  Only Strings and Lists are appendable."
              );
            default:
              return $mdgriffith$elm_codegen$Internal$Compiler$isComparable(type_) || $mdgriffith$elm_codegen$Internal$Compiler$isAppendable(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
                $stil4m$elm_syntax$Elm$Writer$write(
                  $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(type_)
                  )
                ) + " is not appendable/comparable.  Only Strings and Lists are allowed here."
              );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions = { $: 0 };
      var $mdgriffith$elm_codegen$Internal$Compiler$IsAppendable = { $: 2 };
      var $mdgriffith$elm_codegen$Internal$Compiler$IsAppendableComparable = { $: 4 };
      var $mdgriffith$elm_codegen$Internal$Compiler$IsComparable = { $: 3 };
      var $mdgriffith$elm_codegen$Internal$Compiler$IsNumber = { $: 1 };
      var $elm$core$String$startsWith = _String_startsWith;
      var $mdgriffith$elm_codegen$Internal$Compiler$nameToRestrictions = function(name) {
        return A2($elm$core$String$startsWith, "number", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsNumber : A2($elm$core$String$startsWith, "comparable", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsComparable : A2($elm$core$String$startsWith, "appendable", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsAppendable : A2($elm$core$String$startsWith, "compappend", name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsAppendableComparable : $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions;
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted = function(a) {
        return { $: 5, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$restrictFurther = F2(
        function(restriction, newRestriction) {
          switch (restriction.$) {
            case 0:
              return newRestriction;
            case 5:
              var constraints = restriction.a;
              switch (newRestriction.$) {
                case 5:
                  var newConstraints = newRestriction.a;
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    _Utils_ap(constraints, newConstraints)
                  );
                case 0:
                  return restriction;
                default:
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    A2($elm$core$List$cons, newRestriction, constraints)
                  );
              }
            case 1:
              switch (newRestriction.$) {
                case 1:
                  return newRestriction;
                case 0:
                  return restriction;
                case 5:
                  var constraints = newRestriction.a;
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    A2($elm$core$List$cons, restriction, constraints)
                  );
                default:
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    _List_fromArray(
                      [restriction, newRestriction]
                    )
                  );
              }
            case 3:
              switch (newRestriction.$) {
                case 0:
                  return restriction;
                case 4:
                  return newRestriction;
                case 3:
                  return newRestriction;
                case 5:
                  var constraints = newRestriction.a;
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    A2($elm$core$List$cons, restriction, constraints)
                  );
                default:
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    _List_fromArray(
                      [restriction, newRestriction]
                    )
                  );
              }
            case 2:
              switch (newRestriction.$) {
                case 0:
                  return restriction;
                case 4:
                  return newRestriction;
                case 3:
                  return newRestriction;
                case 5:
                  var constraints = newRestriction.a;
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    A2($elm$core$List$cons, restriction, constraints)
                  );
                default:
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    _List_fromArray(
                      [restriction, newRestriction]
                    )
                  );
              }
            default:
              switch (newRestriction.$) {
                case 0:
                  return restriction;
                case 4:
                  return newRestriction;
                case 3:
                  return newRestriction;
                case 2:
                  return newRestriction;
                case 5:
                  var constraints = newRestriction.a;
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    A2($elm$core$List$cons, restriction, constraints)
                  );
                default:
                  return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
                    _List_fromArray(
                      [restriction, newRestriction]
                    )
                  );
              }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper = F3(
        function(existingRestrictions, notation, cache) {
          getRestrictionsHelper:
            while (true) {
              switch (notation.$) {
                case 6:
                  var _v1 = notation.a;
                  var oneCoords = _v1.a;
                  var one = _v1.b;
                  var _v2 = notation.b;
                  var twoCoords = _v2.a;
                  var two = _v2.b;
                  return existingRestrictions;
                case 0:
                  var name = notation.a;
                  var $temp$existingRestrictions = A2(
                    $mdgriffith$elm_codegen$Internal$Compiler$restrictFurther,
                    existingRestrictions,
                    $mdgriffith$elm_codegen$Internal$Compiler$nameToRestrictions(name)
                  ), $temp$notation = A2(
                    $elm$core$Maybe$withDefault,
                    $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit,
                    A2($elm$core$Dict$get, name, cache)
                  ), $temp$cache = cache;
                  existingRestrictions = $temp$existingRestrictions;
                  notation = $temp$notation;
                  cache = $temp$cache;
                  continue getRestrictionsHelper;
                case 1:
                  var nodedModuleName = notation.a;
                  var vars = notation.b;
                  return existingRestrictions;
                case 2:
                  return existingRestrictions;
                case 3:
                  var nodes = notation.a;
                  return existingRestrictions;
                case 4:
                  var fields = notation.a;
                  return existingRestrictions;
                default:
                  var baseName = notation.a;
                  var _v3 = notation.b;
                  var recordNode = _v3.a;
                  var fields = _v3.b;
                  return existingRestrictions;
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$getRestrictions = F2(
        function(notation, cache) {
          return A3($mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper, $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions, notation, cache);
        }
      );
      var $elm$core$Result$map2 = F3(
        function(func, ra, rb) {
          if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
          } else {
            var a = ra.a;
            if (rb.$ === 1) {
              var x = rb.a;
              return $elm$core$Result$Err(x);
            } else {
              var b = rb.a;
              return $elm$core$Result$Ok(
                A2(func, a, b)
              );
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList = F3(
        function(cache, nodes, processed) {
          resolveVariableList:
            while (true) {
              if (!nodes.b) {
                return $elm$core$Result$Ok(
                  $elm$core$List$reverse(processed)
                );
              } else {
                var _v17 = nodes.a;
                var coords = _v17.a;
                var top = _v17.b;
                var remain = nodes.b;
                var _v18 = A2($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, cache, top);
                if (!_v18.$) {
                  var resolved = _v18.a;
                  var $temp$cache = cache, $temp$nodes = remain, $temp$processed = A2(
                    $elm$core$List$cons,
                    A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, coords, resolved),
                    processed
                  );
                  cache = $temp$cache;
                  nodes = $temp$nodes;
                  processed = $temp$processed;
                  continue resolveVariableList;
                } else {
                  var err = _v18.a;
                  return $elm$core$Result$Err(err);
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables = F2(
        function(cache, annotation) {
          resolveVariables:
            while (true) {
              switch (annotation.$) {
                case 6:
                  var _v1 = annotation.a;
                  var oneCoords = _v1.a;
                  var one = _v1.b;
                  var _v2 = annotation.b;
                  var twoCoords = _v2.a;
                  var two = _v2.b;
                  return A3(
                    $elm$core$Result$map2,
                    F2(
                      function(oneResolved, twoResolved) {
                        return A2(
                          $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                          A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, oneCoords, oneResolved),
                          A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, twoCoords, twoResolved)
                        );
                      }
                    ),
                    A2($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, cache, one),
                    A2($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, cache, two)
                  );
                case 0:
                  var name = annotation.a;
                  var _v3 = A2($elm$core$Dict$get, name, cache);
                  if (_v3.$ === 1) {
                    return $elm$core$Result$Ok(annotation);
                  } else {
                    var newType = _v3.a;
                    var $temp$cache = cache, $temp$annotation = newType;
                    cache = $temp$cache;
                    annotation = $temp$annotation;
                    continue resolveVariables;
                  }
                case 1:
                  var nodedModuleName = annotation.a;
                  var vars = annotation.b;
                  return A2(
                    $elm$core$Result$map,
                    $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed(nodedModuleName),
                    A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList, cache, vars, _List_Nil)
                  );
                case 2:
                  return $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit);
                case 3:
                  var nodes = annotation.a;
                  return A2(
                    $elm$core$Result$map,
                    $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled,
                    A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList, cache, nodes, _List_Nil)
                  );
                case 4:
                  var fields = annotation.a;
                  return A2(
                    $elm$core$Result$map,
                    A2($elm$core$Basics$composeL, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record, $elm$core$List$reverse),
                    A3(
                      $elm$core$List$foldl,
                      F2(
                        function(_v4, found) {
                          var fieldRange = _v4.a;
                          var _v5 = _v4.b;
                          var name2 = _v5.a;
                          var _v6 = _v5.b;
                          var fieldTypeRange = _v6.a;
                          var fieldType = _v6.b;
                          if (found.$ === 1) {
                            var err = found.a;
                            return $elm$core$Result$Err(err);
                          } else {
                            var processedFields = found.a;
                            var _v8 = A2($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, cache, fieldType);
                            if (_v8.$ === 1) {
                              var err = _v8.a;
                              return $elm$core$Result$Err(err);
                            } else {
                              var resolvedField = _v8.a;
                              var restrictions = A2($mdgriffith$elm_codegen$Internal$Compiler$getRestrictions, annotation, cache);
                              var _v9 = A2($mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions, restrictions, resolvedField);
                              if (!_v9.$) {
                                return $elm$core$Result$Ok(
                                  A2(
                                    $elm$core$List$cons,
                                    A2(
                                      $stil4m$elm_syntax$Elm$Syntax$Node$Node,
                                      fieldRange,
                                      _Utils_Tuple2(
                                        name2,
                                        A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, fieldTypeRange, resolvedField)
                                      )
                                    ),
                                    processedFields
                                  )
                                );
                              } else {
                                var err = _v9.a;
                                return $elm$core$Result$Err(err);
                              }
                            }
                          }
                        }
                      ),
                      $elm$core$Result$Ok(_List_Nil),
                      fields
                    )
                  );
                default:
                  var baseName = annotation.a;
                  var _v10 = annotation.b;
                  var recordNode = _v10.a;
                  var fields = _v10.b;
                  var newFieldResult = A3(
                    $elm$core$List$foldl,
                    F2(
                      function(_v11, found) {
                        var fieldRange = _v11.a;
                        var _v12 = _v11.b;
                        var name2 = _v12.a;
                        var _v13 = _v12.b;
                        var fieldTypeRange = _v13.a;
                        var fieldType = _v13.b;
                        if (found.$ === 1) {
                          var err = found.a;
                          return $elm$core$Result$Err(err);
                        } else {
                          var processedFields = found.a;
                          var _v15 = A2($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, cache, fieldType);
                          if (_v15.$ === 1) {
                            var err = _v15.a;
                            return $elm$core$Result$Err(err);
                          } else {
                            var resolvedField = _v15.a;
                            var restrictions = A2($mdgriffith$elm_codegen$Internal$Compiler$getRestrictions, annotation, cache);
                            return $elm$core$Result$Ok(
                              A2(
                                $elm$core$List$cons,
                                A2(
                                  $stil4m$elm_syntax$Elm$Syntax$Node$Node,
                                  fieldRange,
                                  _Utils_Tuple2(
                                    name2,
                                    A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, fieldTypeRange, resolvedField)
                                  )
                                ),
                                processedFields
                              )
                            );
                          }
                        }
                      }
                    ),
                    $elm$core$Result$Ok(_List_Nil),
                    fields
                  );
                  return A2(
                    $elm$core$Result$map,
                    function(newFields) {
                      return A2(
                        $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
                        baseName,
                        A2(
                          $stil4m$elm_syntax$Elm$Syntax$Node$Node,
                          recordNode,
                          $elm$core$List$reverse(newFields)
                        )
                      );
                    },
                    newFieldResult
                  );
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$unifiable = F4(
        function(aliases, vars, one, two) {
          unifiable:
            while (true) {
              switch (one.$) {
                case 0:
                  var varName = one.a;
                  var _v21 = A2($elm$core$Dict$get, varName, vars);
                  if (_v21.$ === 1) {
                    if (!two.$) {
                      var varNameB = two.a;
                      return _Utils_eq(varNameB, varName) ? _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Ok(one)
                      ) : _Utils_Tuple2(
                        A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, varName, two, vars),
                        $elm$core$Result$Ok(two)
                      );
                    } else {
                      return _Utils_Tuple2(
                        A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, varName, two, vars),
                        $elm$core$Result$Ok(two)
                      );
                    }
                  } else {
                    var found = _v21.a;
                    if (!two.$) {
                      var varNameB = two.a;
                      var _v24 = A2($elm$core$Dict$get, varNameB, vars);
                      if (_v24.$ === 1) {
                        return _Utils_Tuple2(
                          A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, varNameB, found, vars),
                          $elm$core$Result$Ok(two)
                        );
                      } else {
                        var foundTwo = _v24.a;
                        var $temp$aliases = aliases, $temp$vars = vars, $temp$one = found, $temp$two = foundTwo;
                        aliases = $temp$aliases;
                        vars = $temp$vars;
                        one = $temp$one;
                        two = $temp$two;
                        continue unifiable;
                      }
                    } else {
                      var $temp$aliases = aliases, $temp$vars = vars, $temp$one = found, $temp$two = two;
                      aliases = $temp$aliases;
                      vars = $temp$vars;
                      one = $temp$one;
                      two = $temp$two;
                      continue unifiable;
                    }
                  }
                case 1:
                  var oneName = one.a;
                  var oneVars = one.b;
                  switch (two.$) {
                    case 1:
                      var twoName = two.a;
                      var twoContents = two.b;
                      if (_Utils_eq(
                        $mdgriffith$elm_codegen$Internal$Compiler$denode(oneName),
                        $mdgriffith$elm_codegen$Internal$Compiler$denode(twoName)
                      )) {
                        var _v26 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableLists, aliases, vars, oneVars, twoContents, _List_Nil);
                        if (!_v26.b.$) {
                          var newVars = _v26.a;
                          var unifiedContent = _v26.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Ok(
                              A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, twoName, unifiedContent)
                            )
                          );
                        } else {
                          var newVars = _v26.a;
                          var err = _v26.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Err(err)
                          );
                        }
                      } else {
                        return _Utils_Tuple2(
                          vars,
                          $elm$core$Result$Err(
                            A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                          )
                        );
                      }
                    case 0:
                      var b = two.a;
                      return _Utils_Tuple2(
                        A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
                        $elm$core$Result$Ok(one)
                      );
                    default:
                      var _v27 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias, aliases, vars, oneName, oneVars, two);
                      if (_v27.$ === 1) {
                        return _Utils_Tuple2(
                          vars,
                          $elm$core$Result$Err(
                            A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                          )
                        );
                      } else {
                        var unified = _v27.a;
                        return unified;
                      }
                  }
                case 2:
                  switch (two.$) {
                    case 0:
                      var b = two.a;
                      var _v29 = A2($elm$core$Dict$get, b, vars);
                      if (_v29.$ === 1) {
                        return _Utils_Tuple2(
                          A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
                          $elm$core$Result$Ok(one)
                        );
                      } else {
                        var foundTwo = _v29.a;
                        var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                        aliases = $temp$aliases;
                        vars = $temp$vars;
                        one = $temp$one;
                        two = $temp$two;
                        continue unifiable;
                      }
                    case 2:
                      return _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit)
                      );
                    default:
                      return _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Err(
                          A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                        )
                      );
                  }
                case 3:
                  var valsA = one.a;
                  switch (two.$) {
                    case 0:
                      var b = two.a;
                      var _v31 = A2($elm$core$Dict$get, b, vars);
                      if (_v31.$ === 1) {
                        return _Utils_Tuple2(
                          A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
                          $elm$core$Result$Ok(one)
                        );
                      } else {
                        var foundTwo = _v31.a;
                        var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                        aliases = $temp$aliases;
                        vars = $temp$vars;
                        one = $temp$one;
                        two = $temp$two;
                        continue unifiable;
                      }
                    case 3:
                      var valsB = two.a;
                      var _v32 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableLists, aliases, vars, valsA, valsB, _List_Nil);
                      if (!_v32.b.$) {
                        var newVars = _v32.a;
                        var unified = _v32.b.a;
                        return _Utils_Tuple2(
                          newVars,
                          $elm$core$Result$Ok(
                            $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(unified)
                          )
                        );
                      } else {
                        var newVars = _v32.a;
                        var err = _v32.b.a;
                        return _Utils_Tuple2(
                          newVars,
                          $elm$core$Result$Err(err)
                        );
                      }
                    default:
                      return _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Err(
                          A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                        )
                      );
                  }
                case 4:
                  var fieldsA = one.a;
                  switch (two.$) {
                    case 0:
                      var b = two.a;
                      var _v34 = A2($elm$core$Dict$get, b, vars);
                      if (_v34.$ === 1) {
                        return _Utils_Tuple2(
                          A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
                          $elm$core$Result$Ok(one)
                        );
                      } else {
                        var foundTwo = _v34.a;
                        var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                        aliases = $temp$aliases;
                        vars = $temp$vars;
                        one = $temp$one;
                        two = $temp$two;
                        continue unifiable;
                      }
                    case 5:
                      var _v35 = two.a;
                      var twoRecName = _v35.b;
                      var _v36 = two.b;
                      var fieldsB = _v36.b;
                      var _v37 = A2($elm$core$Dict$get, twoRecName, vars);
                      if (_v37.$ === 1) {
                        var _v38 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
                        if (!_v38.b.$) {
                          var newVars = _v38.a;
                          var unifiedFields = _v38.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Ok(
                              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)
                            )
                          );
                        } else {
                          var newVars = _v38.a;
                          var err = _v38.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Err(err)
                          );
                        }
                      } else {
                        var knownType = _v37.a;
                        var _v39 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
                        if (!_v39.b.$) {
                          var newVars = _v39.a;
                          var unifiedFields = _v39.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Ok(
                              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)
                            )
                          );
                        } else {
                          var newVars = _v39.a;
                          var err = _v39.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Err(err)
                          );
                        }
                      }
                    case 4:
                      var fieldsB = two.a;
                      var _v40 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
                      if (!_v40.b.$) {
                        var newVars = _v40.a;
                        var unifiedFields = _v40.b.a;
                        return _Utils_Tuple2(
                          newVars,
                          $elm$core$Result$Ok(
                            $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)
                          )
                        );
                      } else {
                        var newVars = _v40.a;
                        var err = _v40.b.a;
                        return _Utils_Tuple2(
                          newVars,
                          $elm$core$Result$Err(err)
                        );
                      }
                    case 1:
                      var twoName = two.a;
                      var twoVars = two.b;
                      var _v41 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias, aliases, vars, twoName, twoVars, one);
                      if (_v41.$ === 1) {
                        return _Utils_Tuple2(
                          vars,
                          $elm$core$Result$Err(
                            A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                          )
                        );
                      } else {
                        var unified = _v41.a;
                        return unified;
                      }
                    default:
                      return _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Err(
                          A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                        )
                      );
                  }
                case 5:
                  var _v42 = one.a;
                  var reVarName = _v42.b;
                  var _v43 = one.b;
                  var fieldsARange = _v43.a;
                  var fieldsA = _v43.b;
                  switch (two.$) {
                    case 0:
                      var b = two.a;
                      var _v45 = A2($elm$core$Dict$get, b, vars);
                      if (_v45.$ === 1) {
                        return _Utils_Tuple2(
                          A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
                          $elm$core$Result$Ok(one)
                        );
                      } else {
                        var foundTwo = _v45.a;
                        var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                        aliases = $temp$aliases;
                        vars = $temp$vars;
                        one = $temp$one;
                        two = $temp$two;
                        continue unifiable;
                      }
                    case 5:
                      var _v46 = two.a;
                      var twoRecName = _v46.b;
                      var _v47 = two.b;
                      var fieldsB = _v47.b;
                      var _v48 = A2($elm$core$Dict$get, twoRecName, vars);
                      if (_v48.$ === 1) {
                        var _v49 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
                        if (!_v49.b.$) {
                          var newVars = _v49.a;
                          var unifiedFields = _v49.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Ok(
                              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)
                            )
                          );
                        } else {
                          var newVars = _v49.a;
                          var err = _v49.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Err(err)
                          );
                        }
                      } else {
                        var knownType = _v48.a;
                        var _v50 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
                        if (!_v50.b.$) {
                          var newVars = _v50.a;
                          var unifiedFields = _v50.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Ok(
                              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)
                            )
                          );
                        } else {
                          var newVars = _v50.a;
                          var err = _v50.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Err(err)
                          );
                        }
                      }
                    case 4:
                      var fieldsB = two.a;
                      var _v51 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
                      if (!_v51.b.$) {
                        var newVars = _v51.a;
                        var unifiedFields = _v51.b.a;
                        return _Utils_Tuple2(
                          newVars,
                          $elm$core$Result$Ok(
                            $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)
                          )
                        );
                      } else {
                        var newVars = _v51.a;
                        var err = _v51.b.a;
                        return _Utils_Tuple2(
                          newVars,
                          $elm$core$Result$Err(err)
                        );
                      }
                    case 1:
                      var twoName = two.a;
                      var twoVars = two.b;
                      var _v52 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias, aliases, vars, twoName, twoVars, one);
                      if (_v52.$ === 1) {
                        return _Utils_Tuple2(
                          vars,
                          $elm$core$Result$Err(
                            A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                          )
                        );
                      } else {
                        var unified = _v52.a;
                        return unified;
                      }
                    default:
                      return _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Err(
                          A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                        )
                      );
                  }
                default:
                  var oneA = one.a;
                  var oneB = one.b;
                  switch (two.$) {
                    case 0:
                      var b = two.a;
                      var _v54 = A2($elm$core$Dict$get, b, vars);
                      if (_v54.$ === 1) {
                        return _Utils_Tuple2(
                          A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
                          $elm$core$Result$Ok(one)
                        );
                      } else {
                        var foundTwo = _v54.a;
                        var $temp$aliases = aliases, $temp$vars = vars, $temp$one = one, $temp$two = foundTwo;
                        aliases = $temp$aliases;
                        vars = $temp$vars;
                        one = $temp$one;
                        two = $temp$two;
                        continue unifiable;
                      }
                    case 6:
                      var twoA = two.a;
                      var twoB = two.b;
                      var _v55 = A4(
                        $mdgriffith$elm_codegen$Internal$Compiler$unifiable,
                        aliases,
                        vars,
                        $mdgriffith$elm_codegen$Internal$Compiler$denode(oneA),
                        $mdgriffith$elm_codegen$Internal$Compiler$denode(twoA)
                      );
                      if (!_v55.b.$) {
                        var aVars = _v55.a;
                        var unifiedA = _v55.b.a;
                        var _v56 = A4(
                          $mdgriffith$elm_codegen$Internal$Compiler$unifiable,
                          aliases,
                          aVars,
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(oneB),
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(twoB)
                        );
                        if (!_v56.b.$) {
                          var bVars = _v56.a;
                          var unifiedB = _v56.b.a;
                          return _Utils_Tuple2(
                            bVars,
                            $elm$core$Result$Ok(
                              A2(
                                $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                                $mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedA),
                                $mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedB)
                              )
                            )
                          );
                        } else {
                          var otherwise = _v56;
                          return otherwise;
                        }
                      } else {
                        var otherwise = _v55;
                        return otherwise;
                      }
                    default:
                      return _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Err(
                          A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)
                        )
                      );
                  }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields = F5(
        function(aliases, vars, one, two, unified) {
          unifiableFields:
            while (true) {
              var _v13 = _Utils_Tuple2(one, two);
              if (!_v13.a.b) {
                if (!_v13.b.b) {
                  return _Utils_Tuple2(
                    vars,
                    $elm$core$Result$Ok(
                      $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                        $elm$core$List$reverse(unified)
                      )
                    )
                  );
                } else {
                  return _Utils_Tuple2(
                    vars,
                    $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables)
                  );
                }
              } else {
                var _v14 = _v13.a;
                var oneX = _v14.a;
                var oneRemain = _v14.b;
                var twoFields = _v13.b;
                var _v15 = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneX);
                var oneFieldName = _v15.a;
                var oneFieldVal = _v15.b;
                var oneName = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneFieldName);
                var oneVal = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneFieldVal);
                var _v16 = A4($mdgriffith$elm_codegen$Internal$Compiler$getField, oneName, oneVal, twoFields, _List_Nil);
                if (!_v16.$) {
                  var _v17 = _v16.a;
                  var matchingFieldVal = _v17.a;
                  var remainingTwo = _v17.b;
                  var _v18 = A4($mdgriffith$elm_codegen$Internal$Compiler$unifiable, aliases, vars, oneVal, matchingFieldVal);
                  var newVars = _v18.a;
                  var unifiedFieldResult = _v18.b;
                  if (!unifiedFieldResult.$) {
                    var unifiedField = unifiedFieldResult.a;
                    var $temp$aliases = aliases, $temp$vars = newVars, $temp$one = oneRemain, $temp$two = remainingTwo, $temp$unified = A2(
                      $elm$core$List$cons,
                      _Utils_Tuple2(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(oneName),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedField)
                      ),
                      unified
                    );
                    aliases = $temp$aliases;
                    vars = $temp$vars;
                    one = $temp$one;
                    two = $temp$two;
                    unified = $temp$unified;
                    continue unifiableFields;
                  } else {
                    var err = unifiedFieldResult.a;
                    return _Utils_Tuple2(
                      newVars,
                      $elm$core$Result$Err(err)
                    );
                  }
                } else {
                  var notFound = _v16.a;
                  return _Utils_Tuple2(
                    vars,
                    $elm$core$Result$Err(notFound)
                  );
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$unifiableLists = F5(
        function(aliases, vars, one, two, unified) {
          unifiableLists:
            while (true) {
              var _v6 = _Utils_Tuple2(one, two);
              _v6$3:
                while (true) {
                  if (!_v6.a.b) {
                    if (!_v6.b.b) {
                      return _Utils_Tuple2(
                        vars,
                        $elm$core$Result$Ok(
                          $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                            $elm$core$List$reverse(unified)
                          )
                        )
                      );
                    } else {
                      break _v6$3;
                    }
                  } else {
                    if (_v6.b.b) {
                      if (!_v6.a.b.b && !_v6.b.b.b) {
                        var _v7 = _v6.a;
                        var oneX = _v7.a;
                        var _v8 = _v6.b;
                        var twoX = _v8.a;
                        var _v9 = A4(
                          $mdgriffith$elm_codegen$Internal$Compiler$unifiable,
                          aliases,
                          vars,
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(oneX),
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(twoX)
                        );
                        if (!_v9.b.$) {
                          var newVars = _v9.a;
                          var un = _v9.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Ok(
                              $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                                $elm$core$List$reverse(
                                  A2($elm$core$List$cons, un, unified)
                                )
                              )
                            )
                          );
                        } else {
                          var newVars = _v9.a;
                          var err = _v9.b.a;
                          return _Utils_Tuple2(
                            newVars,
                            $elm$core$Result$Err(err)
                          );
                        }
                      } else {
                        var _v10 = _v6.a;
                        var oneX = _v10.a;
                        var oneRemain = _v10.b;
                        var _v11 = _v6.b;
                        var twoX = _v11.a;
                        var twoRemain = _v11.b;
                        var _v12 = A4(
                          $mdgriffith$elm_codegen$Internal$Compiler$unifiable,
                          aliases,
                          vars,
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(oneX),
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(twoX)
                        );
                        if (!_v12.b.$) {
                          var newVars = _v12.a;
                          var un = _v12.b.a;
                          var $temp$aliases = aliases, $temp$vars = newVars, $temp$one = oneRemain, $temp$two = twoRemain, $temp$unified = A2($elm$core$List$cons, un, unified);
                          aliases = $temp$aliases;
                          vars = $temp$vars;
                          one = $temp$one;
                          two = $temp$two;
                          unified = $temp$unified;
                          continue unifiableLists;
                        } else {
                          var newVars = _v12.a;
                          var err = _v12.b.a;
                          return _Utils_Tuple2(
                            vars,
                            $elm$core$Result$Err(err)
                          );
                        }
                      }
                    } else {
                      break _v6$3;
                    }
                  }
                }
              return _Utils_Tuple2(
                vars,
                $elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables)
              );
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias = F5(
        function(aliases, vars, typename, typeVars, typeToUnifyWith) {
          var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$getAlias, typename, aliases);
          if (_v0.$ === 1) {
            return $elm$core$Maybe$Nothing;
          } else {
            var foundAlias = _v0.a;
            var fullAliasedType = function() {
              var _v3 = foundAlias.a1;
              if (!_v3.b) {
                return foundAlias.ai;
              } else {
                var makeAliasVarCache = F2(
                  function(varName, _v5) {
                    var varType = _v5.b;
                    return _Utils_Tuple2(varName, varType);
                  }
                );
                var _v4 = A2(
                  $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables,
                  $elm$core$Dict$fromList(
                    A3($elm$core$List$map2, makeAliasVarCache, foundAlias.a1, typeVars)
                  ),
                  foundAlias.ai
                );
                if (!_v4.$) {
                  var resolvedType = _v4.a;
                  return resolvedType;
                } else {
                  return foundAlias.ai;
                }
              }
            }();
            var _v1 = A4($mdgriffith$elm_codegen$Internal$Compiler$unifiable, aliases, vars, fullAliasedType, typeToUnifyWith);
            var returnedVars = _v1.a;
            var unifiedResult = _v1.b;
            if (!unifiedResult.$) {
              var finalInference = unifiedResult.a;
              return $elm$core$Maybe$Just(
                _Utils_Tuple2(
                  returnedVars,
                  $elm$core$Result$Ok(fullAliasedType)
                )
              );
            } else {
              var err = unifiedResult.a;
              return $elm$core$Maybe$Nothing;
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper = F4(
        function(aliases, cache, fn, args) {
          applyTypeHelper:
            while (true) {
              switch (fn.$) {
                case 6:
                  var one = fn.a;
                  var two = fn.b;
                  if (!args.b) {
                    return $elm$core$Result$Ok(
                      { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, d: cache, $7: fn }
                    );
                  } else {
                    var top = args.a;
                    var rest = args.b;
                    var _v2 = A4(
                      $mdgriffith$elm_codegen$Internal$Compiler$unifiable,
                      aliases,
                      cache,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(one),
                      top
                    );
                    if (!_v2.b.$) {
                      var variableCache = _v2.a;
                      var $temp$aliases = aliases, $temp$cache = variableCache, $temp$fn = $mdgriffith$elm_codegen$Internal$Compiler$denode(two), $temp$args = rest;
                      aliases = $temp$aliases;
                      cache = $temp$cache;
                      fn = $temp$fn;
                      args = $temp$args;
                      continue applyTypeHelper;
                    } else {
                      var varCache = _v2.a;
                      var err = _v2.b.a;
                      return $elm$core$Result$Err(
                        _List_fromArray(
                          [err]
                        )
                      );
                    }
                  }
                case 0:
                  var varName = fn.a;
                  if (!args.b) {
                    return $elm$core$Result$Ok(
                      { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, d: cache, $7: fn }
                    );
                  } else {
                    var resultType = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(varName + "_result");
                    return $elm$core$Result$Ok(
                      {
                        dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                        d: A3(
                          $mdgriffith$elm_codegen$Internal$Compiler$addInference,
                          varName,
                          A2($mdgriffith$elm_codegen$Internal$Compiler$makeFunction, resultType, args),
                          cache
                        ),
                        $7: resultType
                      }
                    );
                  }
                default:
                  var _final = fn;
                  if (!args.b) {
                    return $elm$core$Result$Ok(
                      { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, d: cache, $7: fn }
                    );
                  } else {
                    return $elm$core$Result$Err(
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs, _final, args)
                        ]
                      )
                    );
                  }
              }
            }
        }
      );
      var $elm$core$Dict$merge = F6(
        function(leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
          var stepState = F3(
            function(rKey, rValue, _v0) {
              stepState:
                while (true) {
                  var list = _v0.a;
                  var result = _v0.b;
                  if (!list.b) {
                    return _Utils_Tuple2(
                      list,
                      A3(rightStep, rKey, rValue, result)
                    );
                  } else {
                    var _v2 = list.a;
                    var lKey = _v2.a;
                    var lValue = _v2.b;
                    var rest = list.b;
                    if (_Utils_cmp(lKey, rKey) < 0) {
                      var $temp$rKey = rKey, $temp$rValue = rValue, $temp$_v0 = _Utils_Tuple2(
                        rest,
                        A3(leftStep, lKey, lValue, result)
                      );
                      rKey = $temp$rKey;
                      rValue = $temp$rValue;
                      _v0 = $temp$_v0;
                      continue stepState;
                    } else {
                      if (_Utils_cmp(lKey, rKey) > 0) {
                        return _Utils_Tuple2(
                          list,
                          A3(rightStep, rKey, rValue, result)
                        );
                      } else {
                        return _Utils_Tuple2(
                          rest,
                          A4(bothStep, lKey, lValue, rValue, result)
                        );
                      }
                    }
                  }
                }
            }
          );
          var _v3 = A3(
            $elm$core$Dict$foldl,
            stepState,
            _Utils_Tuple2(
              $elm$core$Dict$toList(leftDict),
              initialResult
            ),
            rightDict
          );
          var leftovers = _v3.a;
          var intermediateResult = _v3.b;
          return A3(
            $elm$core$List$foldl,
            F2(
              function(_v4, result) {
                var k = _v4.a;
                var v = _v4.b;
                return A3(leftStep, k, v, result);
              }
            ),
            intermediateResult,
            leftovers
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences = F2(
        function(one, two) {
          return A6(
            $elm$core$Dict$merge,
            $elm$core$Dict$insert,
            F4(
              function(key, oneVal, twoVal, d) {
                if (oneVal.$ === 5) {
                  var recordName = oneVal.a;
                  var _v1 = oneVal.b;
                  var oneRange = _v1.a;
                  var recordDefinition = _v1.b;
                  if (twoVal.$ === 5) {
                    var twoRecordName = twoVal.a;
                    var _v3 = twoVal.b;
                    var twoRange = _v3.a;
                    var twoRecordDefinition = _v3.b;
                    return A3(
                      $elm$core$Dict$insert,
                      key,
                      A2(
                        $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
                        recordName,
                        A2(
                          $stil4m$elm_syntax$Elm$Syntax$Node$Node,
                          oneRange,
                          _Utils_ap(recordDefinition, twoRecordDefinition)
                        )
                      ),
                      d
                    );
                  } else {
                    return A3($elm$core$Dict$insert, key, oneVal, d);
                  }
                } else {
                  return A3($elm$core$Dict$insert, key, oneVal, d);
                }
              }
            ),
            $elm$core$Dict$insert,
            one,
            two,
            $elm$core$Dict$empty
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences = F3(
        function(expressions, annotations, inferences) {
          mergeArgInferences:
            while (true) {
              if (!expressions.b) {
                return $elm$core$Result$Ok(
                  {
                    d: inferences,
                    aG: $elm$core$List$reverse(annotations)
                  }
                );
              } else {
                var top = expressions.a;
                var remain = expressions.b;
                var _v1 = top.Z;
                if (!_v1.$) {
                  var ann = _v1.a;
                  var $temp$expressions = remain, $temp$annotations = A2($elm$core$List$cons, ann.$7, annotations), $temp$inferences = A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, inferences, ann.d);
                  expressions = $temp$expressions;
                  annotations = $temp$annotations;
                  inferences = $temp$inferences;
                  continue mergeArgInferences;
                } else {
                  var err = _v1.a;
                  return $elm$core$Result$Err(err);
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$applyType = F2(
        function(annotation, args) {
          if (annotation.$ === 1) {
            var err = annotation.a;
            return $elm$core$Result$Err(err);
          } else {
            var fnAnnotation = annotation.a;
            var _v1 = A3($mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences, args, _List_Nil, fnAnnotation.d);
            if (!_v1.$) {
              var mergedArgs = _v1.a;
              return A4($mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper, fnAnnotation.dE, mergedArgs.d, fnAnnotation.$7, mergedArgs.aG);
            } else {
              var err = _v1.a;
              return $elm$core$Result$Err(err);
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$Expression = $elm$core$Basics$identity;
      var $mdgriffith$elm_codegen$Internal$Compiler$Index = F3(
        function(a, b, c) {
          return { $: 0, a, b, c };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$dive = function(_v0) {
        var top = _v0.a;
        var tail = _v0.b;
        var scope2 = _v0.c;
        return A3(
          $mdgriffith$elm_codegen$Internal$Compiler$Index,
          0,
          A2($elm$core$List$cons, top, tail),
          scope2
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$expression = function(toExp) {
        return function(index) {
          return toExp(
            $mdgriffith$elm_codegen$Internal$Compiler$dive(index)
          );
        };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getImports = function(exp) {
        return exp.b;
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function(a) {
        return { $: 14, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$parens = function(expr) {
        switch (expr.$) {
          case 0:
            return expr;
          case 7:
            var i = expr.a;
            return expr;
          case 11:
            return expr;
          case 8:
            return expr;
          case 9:
            return expr;
          case 13:
            return expr;
          case 14:
            return expr;
          case 12:
            return expr;
          case 19:
            return expr;
          case 3:
            return expr;
          case 21:
            return expr;
          case 22:
            return expr;
          case 18:
            return expr;
          case 17:
            return expr;
          default:
            return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
              $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr)
            );
        }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$next = function(_v0) {
        var top = _v0.a;
        var tail = _v0.b;
        var scope2 = _v0.c;
        return A3($mdgriffith$elm_codegen$Internal$Compiler$Index, top + 1, tail, scope2);
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$threadHelper = F3(
        function(index, exps, rendered) {
          threadHelper:
            while (true) {
              if (!exps.b) {
                return $elm$core$List$reverse(rendered);
              } else {
                var toExpDetails = exps.a;
                var remain = exps.b;
                var $temp$index = $mdgriffith$elm_codegen$Internal$Compiler$next(index), $temp$exps = remain, $temp$rendered = A2(
                  $elm$core$List$cons,
                  toExpDetails(index),
                  rendered
                );
                index = $temp$index;
                exps = $temp$exps;
                rendered = $temp$rendered;
                continue threadHelper;
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$thread = F2(
        function(index, exps) {
          return A3($mdgriffith$elm_codegen$Internal$Compiler$threadHelper, index, exps, _List_Nil);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails = F2(
        function(index, _v0) {
          var toExp = _v0;
          return _Utils_Tuple2(
            $mdgriffith$elm_codegen$Internal$Compiler$next(index),
            toExp(index)
          );
        }
      );
      var $mdgriffith$elm_codegen$Elm$apply = F2(
        function(fnExp, argExpressions) {
          return $mdgriffith$elm_codegen$Internal$Compiler$expression(
            function(index) {
              var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, fnExp);
              var annotationIndex = _v0.a;
              var fnDetails = _v0.b;
              var args = A2($mdgriffith$elm_codegen$Internal$Compiler$thread, annotationIndex, argExpressions);
              return {
                Z: A2($mdgriffith$elm_codegen$Internal$Compiler$applyType, fnDetails.Z, args),
                a: $stil4m$elm_syntax$Elm$Syntax$Expression$Application(
                  $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                    A2(
                      $elm$core$List$cons,
                      fnDetails.a,
                      A2(
                        $elm$core$List$map,
                        A2(
                          $elm$core$Basics$composeL,
                          $mdgriffith$elm_codegen$Internal$Compiler$parens,
                          function($) {
                            return $.a;
                          }
                        ),
                        args
                      )
                    )
                  )
                ),
                b: _Utils_ap(
                  fnDetails.b,
                  A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getImports, args)
                )
              };
            }
          );
        }
      );
      var $mdgriffith$elm_codegen$Elm$Annotation$typed = F3(
        function(mod, name, args) {
          return {
            dE: A3(
              $elm$core$List$foldl,
              F2(
                function(ann, aliases) {
                  return A2(
                    $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
                    $mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
                    aliases
                  );
                }
              ),
              $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
              args
            ),
            Z: A2(
              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
              $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                _Utils_Tuple2(mod, name)
              ),
              $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, args)
              )
            ),
            b: A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, args)
          };
        }
      );
      var $mdgriffith$elm_codegen$Elm$Annotation$bool = A3($mdgriffith$elm_codegen$Elm$Annotation$typed, _List_Nil, "Bool", _List_Nil);
      var $mdgriffith$elm_codegen$Elm$Annotation$float = A3($mdgriffith$elm_codegen$Elm$Annotation$typed, _List_Nil, "Float", _List_Nil);
      var $mdgriffith$elm_codegen$Elm$Annotation$function = F2(
        function(anns, _return) {
          return {
            dE: A3(
              $elm$core$List$foldl,
              F2(
                function(ann, aliases) {
                  return A2(
                    $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
                    $mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
                    aliases
                  );
                }
              ),
              $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
              A2($elm$core$List$cons, _return, anns)
            ),
            Z: A3(
              $elm$core$List$foldr,
              F2(
                function(ann, fn) {
                  return A2(
                    $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(ann),
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(fn)
                  );
                }
              ),
              $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(_return),
              A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, anns)
            ),
            b: _Utils_ap(
              $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(_return),
              A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, anns)
            )
          };
        }
      );
      var $mdgriffith$elm_codegen$Elm$Annotation$int = A3($mdgriffith$elm_codegen$Elm$Annotation$typed, _List_Nil, "Int", _List_Nil);
      var $mdgriffith$elm_codegen$Elm$Annotation$list = function(inner) {
        return A3(
          $mdgriffith$elm_codegen$Elm$Annotation$typed,
          _List_Nil,
          "List",
          _List_fromArray(
            [inner]
          )
        );
      };
      var $mdgriffith$elm_codegen$Elm$Annotation$string = A3($mdgriffith$elm_codegen$Elm$Annotation$typed, _List_Nil, "String", _List_Nil);
      var $mdgriffith$elm_codegen$Elm$Annotation$tuple = F2(
        function(one, two) {
          return {
            dE: A2(
              $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
              $mdgriffith$elm_codegen$Elm$Annotation$getAliases(one),
              $mdgriffith$elm_codegen$Elm$Annotation$getAliases(two)
            ),
            Z: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
              $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(one),
                    $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(two)
                  ]
                )
              )
            ),
            b: _Utils_ap(
              $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(one),
              $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(two)
            )
          };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(
        function(a, b) {
          return { $: 3, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$indexToString = function(_v0) {
        var top = _v0.a;
        var tail = _v0.b;
        var scope2 = _v0.c;
        return _Utils_ap(
          !top ? "" : "_" + $elm$core$String$fromInt(top),
          function() {
            if (!tail.b) {
              return "";
            } else {
              if (!tail.b.b) {
                var one = tail.a;
                return "_" + $elm$core$String$fromInt(one);
              } else {
                if (!tail.b.b.b) {
                  var one = tail.a;
                  var _v2 = tail.b;
                  var two = _v2.a;
                  return "_" + ($elm$core$String$fromInt(one) + ("_" + $elm$core$String$fromInt(two)));
                } else {
                  if (!tail.b.b.b.b) {
                    var one = tail.a;
                    var _v3 = tail.b;
                    var two = _v3.a;
                    var _v4 = _v3.b;
                    var three = _v4.a;
                    return "_" + ($elm$core$String$fromInt(one) + ("_" + ($elm$core$String$fromInt(two) + ("_" + $elm$core$String$fromInt(three)))));
                  } else {
                    return "_" + A2(
                      $elm$core$String$join,
                      "_",
                      A2($elm$core$List$map, $elm$core$String$fromInt, tail)
                    );
                  }
                }
              }
            }
          }()
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$mapNode = F2(
        function(fn, _v0) {
          var range = _v0.a;
          var n = _v0.b;
          return A2(
            $stil4m$elm_syntax$Elm$Syntax$Node$Node,
            range,
            fn(n)
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation = F2(
        function(index, ann) {
          switch (ann.$) {
            case 0:
              var str = ann.a;
              return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
                _Utils_ap(
                  str,
                  $mdgriffith$elm_codegen$Internal$Compiler$indexToString(index)
                )
              );
            case 1:
              var modName = ann.a;
              var anns = ann.b;
              return A2(
                $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
                modName,
                A2(
                  $elm$core$List$map,
                  $mdgriffith$elm_codegen$Internal$Compiler$mapNode(
                    $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index)
                  ),
                  anns
                )
              );
            case 2:
              return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit;
            case 3:
              var tupled = ann.a;
              return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
                A2(
                  $elm$core$List$map,
                  $mdgriffith$elm_codegen$Internal$Compiler$mapNode(
                    $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index)
                  ),
                  tupled
                )
              );
            case 4:
              var recordDefinition = ann.a;
              return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(
                A2(
                  $elm$core$List$map,
                  $mdgriffith$elm_codegen$Internal$Compiler$protectField(index),
                  recordDefinition
                )
              );
            case 5:
              var recordName = ann.a;
              var _v3 = ann.b;
              var recordRange = _v3.a;
              var recordDefinition = _v3.b;
              return A2(
                $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
                A2(
                  $mdgriffith$elm_codegen$Internal$Compiler$mapNode,
                  function(n) {
                    return _Utils_ap(
                      n,
                      $mdgriffith$elm_codegen$Internal$Compiler$indexToString(index)
                    );
                  },
                  recordName
                ),
                A2(
                  $stil4m$elm_syntax$Elm$Syntax$Node$Node,
                  recordRange,
                  A2(
                    $elm$core$List$map,
                    $mdgriffith$elm_codegen$Internal$Compiler$protectField(index),
                    recordDefinition
                  )
                )
              );
            default:
              var one = ann.a;
              var two = ann.b;
              return A2(
                $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                A2(
                  $mdgriffith$elm_codegen$Internal$Compiler$mapNode,
                  $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index),
                  one
                ),
                A2(
                  $mdgriffith$elm_codegen$Internal$Compiler$mapNode,
                  $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index),
                  two
                )
              );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$protectField = F2(
        function(index, _v0) {
          var nodeRange = _v0.a;
          var _v1 = _v0.b;
          var nodedName = _v1.a;
          var nodedType = _v1.b;
          return A2(
            $stil4m$elm_syntax$Elm$Syntax$Node$Node,
            nodeRange,
            _Utils_Tuple2(
              nodedName,
              A2(
                $mdgriffith$elm_codegen$Internal$Compiler$mapNode,
                $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index),
                nodedType
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$getInnerInference = F2(
        function(index, _v0) {
          var details = _v0;
          return {
            dE: details.dE,
            d: $elm$core$Dict$empty,
            $7: A2($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation, index, details.Z)
          };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$protectTypeName = F2(
        function(base, index) {
          var top = index.a;
          var tail = index.b;
          var scope2 = index.c;
          if (!tail.b) {
            return $mdgriffith$elm_codegen$Internal$Compiler$formatValue(base);
          } else {
            return $mdgriffith$elm_codegen$Internal$Compiler$formatValue(
              _Utils_ap(
                base,
                $mdgriffith$elm_codegen$Internal$Compiler$indexToString(index)
              )
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Elm$value = function(details) {
        return function(index) {
          return {
            Z: function() {
              var _v0 = details.Z;
              if (_v0.$ === 1) {
                var typename = A2($mdgriffith$elm_codegen$Internal$Compiler$protectTypeName, details.x, index);
                return $elm$core$Result$Ok(
                  {
                    dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                    d: $elm$core$Dict$empty,
                    $7: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(typename)
                  }
                );
              } else {
                var ann = _v0.a;
                return $elm$core$Result$Ok(
                  A2($mdgriffith$elm_codegen$Internal$Compiler$getInnerInference, index, ann)
                );
              }
            }(),
            a: A2(
              $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue,
              details.ab,
              $mdgriffith$elm_codegen$Internal$Compiler$sanitize(details.x)
            ),
            b: function() {
              var _v1 = details.Z;
              if (_v1.$ === 1) {
                var _v2 = details.ab;
                if (!_v2.b) {
                  return _List_Nil;
                } else {
                  return _List_fromArray(
                    [details.ab]
                  );
                }
              } else {
                var ann = _v1.a;
                var _v3 = details.ab;
                if (!_v3.b) {
                  return $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(ann);
                } else {
                  return A2(
                    $elm$core$List$cons,
                    details.ab,
                    $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(ann)
                  );
                }
              }
            }()
          };
        };
      };
      var $mdgriffith$elm_codegen$Elm$Annotation$var = function(a) {
        return {
          dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
          Z: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
            $mdgriffith$elm_codegen$Internal$Compiler$formatValue(a)
          ),
          b: _List_Nil
        };
      };
      var $author$project$Gen$Json$Encode$call_ = {
        a7: F2(
          function(arrayArg, arrayArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A2(
                            $mdgriffith$elm_codegen$Elm$Annotation$function,
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                              ]
                            ),
                            A3(
                              $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                              _List_fromArray(
                                ["Json", "Encode"]
                              ),
                              "Value",
                              _List_Nil
                            )
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Array"]
                            ),
                            "Array",
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                              ]
                            )
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  x: "array"
                }
              ),
              _List_fromArray(
                [arrayArg, arrayArg0]
              )
            );
          }
        ),
        bd: function(boolArg) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [$mdgriffith$elm_codegen$Elm$Annotation$bool]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Encode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Json", "Encode"]
                ),
                x: "bool"
              }
            ),
            _List_fromArray(
              [boolArg]
            )
          );
        },
        bt: F3(
          function(dictArg, dictArg0, dictArg1) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A2(
                            $mdgriffith$elm_codegen$Elm$Annotation$function,
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("k")
                              ]
                            ),
                            $mdgriffith$elm_codegen$Elm$Annotation$string
                          ),
                          A2(
                            $mdgriffith$elm_codegen$Elm$Annotation$function,
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                              ]
                            ),
                            A3(
                              $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                              _List_fromArray(
                                ["Json", "Encode"]
                              ),
                              "Value",
                              _List_Nil
                            )
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Dict"]
                            ),
                            "Dict",
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                                $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                              ]
                            )
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  x: "dict"
                }
              ),
              _List_fromArray(
                [dictArg, dictArg0, dictArg1]
              )
            );
          }
        ),
        H: F2(
          function(encodeArg, encodeArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$int,
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Json", "Encode"]
                            ),
                            "Value",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$string
                    )
                  ),
                  ab: _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  x: "encode"
                }
              ),
              _List_fromArray(
                [encodeArg, encodeArg0]
              )
            );
          }
        ),
        bH: function(floatArg) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [$mdgriffith$elm_codegen$Elm$Annotation$float]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Encode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Json", "Encode"]
                ),
                x: "float"
              }
            ),
            _List_fromArray(
              [floatArg]
            )
          );
        },
        aR: function(intArg) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [$mdgriffith$elm_codegen$Elm$Annotation$int]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Encode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Json", "Encode"]
                ),
                x: "int"
              }
            ),
            _List_fromArray(
              [intArg]
            )
          );
        },
        b4: F2(
          function(listArg, listArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A2(
                            $mdgriffith$elm_codegen$Elm$Annotation$function,
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                              ]
                            ),
                            A3(
                              $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                              _List_fromArray(
                                ["Json", "Encode"]
                              ),
                              "Value",
                              _List_Nil
                            )
                          ),
                          $mdgriffith$elm_codegen$Elm$Annotation$list(
                            $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  x: "list"
                }
              ),
              _List_fromArray(
                [listArg, listArg0]
              )
            );
          }
        ),
        cs: function(objectArg) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Elm$Annotation$list(
                          A2(
                            $mdgriffith$elm_codegen$Elm$Annotation$tuple,
                            $mdgriffith$elm_codegen$Elm$Annotation$string,
                            A3(
                              $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                              _List_fromArray(
                                ["Json", "Encode"]
                              ),
                              "Value",
                              _List_Nil
                            )
                          )
                        )
                      ]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Encode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Json", "Encode"]
                ),
                x: "object"
              }
            ),
            _List_fromArray(
              [objectArg]
            )
          );
        },
        cR: F2(
          function(setArg, setArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A2(
                            $mdgriffith$elm_codegen$Elm$Annotation$function,
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                              ]
                            ),
                            A3(
                              $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                              _List_fromArray(
                                ["Json", "Encode"]
                              ),
                              "Value",
                              _List_Nil
                            )
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Set"]
                            ),
                            "Set",
                            _List_fromArray(
                              [
                                $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                              ]
                            )
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  x: "set"
                }
              ),
              _List_fromArray(
                [setArg, setArg0]
              )
            );
          }
        ),
        cX: function(stringArg) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [$mdgriffith$elm_codegen$Elm$Annotation$string]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Encode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Json", "Encode"]
                ),
                x: "string"
              }
            ),
            _List_fromArray(
              [stringArg]
            )
          );
        }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$Declaration = F3(
        function(a, b, c) {
          return { $: 0, a, b, c };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function(a) {
        return { $: 0, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$NotExposed = { $: 0 };
      var $elm$core$Result$mapError = F2(
        function(f, result) {
          if (!result.$) {
            var v = result.a;
            return $elm$core$Result$Ok(v);
          } else {
            var e = result.a;
            return $elm$core$Result$Err(
              f(e)
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$nodifyMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$Compiler$nodify);
      var $mdgriffith$elm_codegen$Internal$Compiler$inferenceErrorToString = function(inf) {
        switch (inf.$) {
          case 1:
            var str = inf.a;
            return "Todo " + str;
          case 0:
            var one = inf.a;
            var two = inf.b;
            return "There are multiple different types in a list: \n\n" + ("    " + ($stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(one)
              )
            ) + ("\n\n    " + $stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(two)
              )
            ))));
          case 11:
            var details = inf.a;
            return "Mismatched record update";
          case 2:
            return "Case statement is empty";
          case 3:
            var fn = inf.a;
            var args = inf.b;
            return "The following is being called as a function\n\n    " + ($stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(fn)
              )
            ) + ("\n\nwith these arguments:\n\n    " + (A2(
              $elm$core$String$join,
              " -> ",
              A2(
                $elm$core$List$map,
                function(arg) {
                  return $stil4m$elm_syntax$Elm$Writer$write(
                    $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                      $mdgriffith$elm_codegen$Internal$Compiler$nodify(arg)
                    )
                  );
                },
                args
              )
            ) + "\n\nbut that's wrong, right?")));
          case 5:
            var fieldName = inf.a;
            return "There is a duplicate field in a record: " + fieldName;
          case 6:
            return "Case returns different types.";
          case 7:
            var found = inf.a;
            return "I can't find ." + (found.an + (", this record only has these fields:\n\n    " + A2($elm$core$String$join, "\n    ", found.d$)));
          case 8:
            var attempting = inf.a;
            return "You're trying to access\n\n    ." + (attempting.an + ("\n\nbut this value isn't a record. It's a\n\n    " + $stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(attempting.X)
              )
            )));
          case 9:
            var attempting = inf.a;
            return "You're trying to access\n\n    ." + (attempting.an + ("\n\nbut this value isn't a record, it's a\n\n    " + ($stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(attempting.X)
              )
            ) + "\n\nIs this value supposed to be an alias for a record? If so, check out Elm.alias!")));
          case 10:
            var details = inf.a;
            return details.dX + " not found, though I was trying to unpack it in a let expression.";
          case 12:
            var type_ = inf.a;
            return $stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(type_)
              )
            ) + " is not appendable.  Only Strings and Lists are appendable";
          case 13:
            var type_ = inf.a;
            return $stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(type_)
              )
            ) + " is not appendable.  Only Strings and Lists are appendable";
          case 14:
            var one = inf.a;
            var two = inf.b;
            return "I found\n\n    " + ($stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(one)
              )
            ) + ("\n\nBut I was expecting:\n\n    " + $stil4m$elm_syntax$Elm$Writer$write(
              $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(two)
              )
            )));
          default:
            return "Different lists of type variables";
        }
      };
      var $mdgriffith$elm_codegen$Elm$renderError = function(err) {
        return "-- ELM-CODEGEN ERROR --\n\n" + (A2(
          $elm$core$String$join,
          "\n\n",
          A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$inferenceErrorToString, err)
        ) + "\n\n");
      };
      var $mdgriffith$elm_codegen$Elm$renderDocumentation = F2(
        function(resolvedType, bodyAnnotation) {
          if (!resolvedType.$) {
            var sig = resolvedType.a;
            if (!bodyAnnotation.$) {
              var inference = bodyAnnotation.a;
              return $elm$core$Maybe$Nothing;
            } else {
              var err = bodyAnnotation.a;
              return $elm$core$Maybe$Just(
                $mdgriffith$elm_codegen$Elm$renderError(err)
              );
            }
          } else {
            var err = resolvedType.a;
            return $elm$core$Maybe$Just(err);
          }
        }
      );
      var $elm$core$Set$member = F2(
        function(key, _v0) {
          var dict = _v0;
          return A2($elm$core$Dict$member, key, dict);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$simplify = function(fullStr) {
        return A3(
          $elm$core$List$foldl,
          F2(
            function(piece, str) {
              var isDigit = A2($elm$core$String$all, $elm$core$Char$isDigit, piece);
              if (isDigit) {
                return str;
              } else {
                if (str === "") {
                  return piece;
                } else {
                  return str + ("_" + piece);
                }
              }
            }
          ),
          "",
          A2($elm$core$String$split, "_", fullStr)
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper = F3(
        function(existing, renames, type_) {
          switch (type_.$) {
            case 0:
              var varName = type_.a;
              var _v1 = A2($elm$core$Dict$get, varName, renames);
              if (_v1.$ === 1) {
                var simplified = $mdgriffith$elm_codegen$Internal$Compiler$simplify(varName);
                return A2($elm$core$Set$member, simplified, existing) && !_Utils_eq(varName, simplified) ? _Utils_Tuple2(
                  renames,
                  $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(simplified)
                ) : _Utils_Tuple2(
                  A3($elm$core$Dict$insert, varName, simplified, renames),
                  $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(simplified)
                );
              } else {
                var rename = _v1.a;
                return _Utils_Tuple2(
                  renames,
                  $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(rename)
                );
              }
            case 1:
              var name = type_.a;
              var vars = type_.b;
              var _v2 = A3(
                $elm$core$List$foldl,
                F2(
                  function(typevar, _v3) {
                    var varUsed = _v3.a;
                    var varList = _v3.b;
                    var _v4 = A3(
                      $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper,
                      existing,
                      varUsed,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(typevar)
                    );
                    var oneUsed2 = _v4.a;
                    var oneType2 = _v4.b;
                    return _Utils_Tuple2(
                      oneUsed2,
                      A2(
                        $elm$core$List$cons,
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(oneType2),
                        varList
                      )
                    );
                  }
                ),
                _Utils_Tuple2(renames, _List_Nil),
                vars
              );
              var newUsed = _v2.a;
              var newVars = _v2.b;
              return _Utils_Tuple2(
                newUsed,
                A2(
                  $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
                  name,
                  $elm$core$List$reverse(newVars)
                )
              );
            case 2:
              return _Utils_Tuple2(renames, type_);
            case 3:
              var valsA = type_.a;
              return _Utils_Tuple2(renames, type_);
            case 4:
              var fieldsA = type_.a;
              return _Utils_Tuple2(renames, type_);
            case 5:
              var _v5 = type_.a;
              var reVarName = _v5.b;
              var _v6 = type_.b;
              var fieldsARange = _v6.a;
              var fieldsA = _v6.b;
              return _Utils_Tuple2(renames, type_);
            default:
              var one = type_.a;
              var two = type_.b;
              var _v7 = A3(
                $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper,
                existing,
                renames,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(one)
              );
              var oneUsed = _v7.a;
              var oneType = _v7.b;
              var _v8 = A3(
                $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper,
                existing,
                oneUsed,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(two)
              );
              var twoUsed = _v8.a;
              var twoType = _v8.b;
              return _Utils_Tuple2(
                twoUsed,
                A2(
                  $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                  $mdgriffith$elm_codegen$Internal$Compiler$nodify(oneType),
                  $mdgriffith$elm_codegen$Internal$Compiler$nodify(twoType)
                )
              );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariables = function(type_) {
        var existing = $elm$core$Set$fromList(
          $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(type_)
        );
        return A3($mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper, existing, $elm$core$Dict$empty, type_).b;
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$resolve = F2(
        function(cache, annotation) {
          var restrictions = A2($mdgriffith$elm_codegen$Internal$Compiler$getRestrictions, annotation, cache);
          var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, cache, annotation);
          if (!_v0.$) {
            var newAnnotation = _v0.a;
            return A2(
              $mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions,
              restrictions,
              $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariables(newAnnotation)
            );
          } else {
            var err = _v0.a;
            return $elm$core$Result$Err(err);
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$startIndex = A3($mdgriffith$elm_codegen$Internal$Compiler$Index, 0, _List_Nil, $elm$core$Set$empty);
      var $mdgriffith$elm_codegen$Elm$declaration = F2(
        function(name, _v0) {
          var toBody = _v0;
          var body = toBody($mdgriffith$elm_codegen$Internal$Compiler$startIndex);
          var resolvedType = A2(
            $elm$core$Result$andThen,
            function(sig) {
              return A2($mdgriffith$elm_codegen$Internal$Compiler$resolve, sig.d, sig.$7);
            },
            A2($elm$core$Result$mapError, $mdgriffith$elm_codegen$Elm$renderError, body.Z)
          );
          return A3(
            $mdgriffith$elm_codegen$Internal$Compiler$Declaration,
            $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
            body.b,
            $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
              {
                bp: function() {
                  var _v1 = body.a;
                  if (_v1.$ === 17) {
                    var lam = _v1.a;
                    return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      {
                        a6: lam.s,
                        a: lam.a,
                        x: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          $mdgriffith$elm_codegen$Internal$Compiler$formatValue(name)
                        )
                      }
                    );
                  } else {
                    return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      {
                        a6: _List_Nil,
                        a: $mdgriffith$elm_codegen$Internal$Compiler$nodify(body.a),
                        x: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          $mdgriffith$elm_codegen$Internal$Compiler$formatValue(name)
                        )
                      }
                    );
                  }
                }(),
                aN: $mdgriffith$elm_codegen$Internal$Compiler$nodifyMaybe(
                  A2($mdgriffith$elm_codegen$Elm$renderDocumentation, resolvedType, body.Z)
                ),
                eR: function() {
                  var _v2 = body.Z;
                  if (!_v2.$) {
                    var sig = _v2.a;
                    if (!resolvedType.$) {
                      var finalType = resolvedType.a;
                      return $elm$core$Maybe$Just(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          {
                            x: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                              $mdgriffith$elm_codegen$Internal$Compiler$formatValue(name)
                            ),
                            aF: $mdgriffith$elm_codegen$Internal$Compiler$nodify(finalType)
                          }
                        )
                      );
                    } else {
                      var errMsg = resolvedType.a;
                      return $elm$core$Maybe$Nothing;
                    }
                  } else {
                    return $elm$core$Maybe$Nothing;
                  }
                }()
              }
            )
          );
        }
      );
      var $author$project$Gen$Eos$Authorization$encode = function(encodeArg) {
        return A2(
          $mdgriffith$elm_codegen$Elm$apply,
          $mdgriffith$elm_codegen$Elm$value(
            {
              Z: $elm$core$Maybe$Just(
                A2(
                  $mdgriffith$elm_codegen$Elm$Annotation$function,
                  _List_fromArray(
                    [
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Authorization", _List_Nil)
                    ]
                  ),
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Json", "Encode"]
                    ),
                    "Value",
                    _List_Nil
                  )
                )
              ),
              ab: _List_fromArray(
                ["Eos", "Authorization"]
              ),
              x: "encode"
            }
          ),
          _List_fromArray(
            [encodeArg]
          )
        );
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function(a) {
        return { $: 17, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function(a) {
        return { $: 11, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getName = F2(
        function(desiredName, index) {
          var top = index.a;
          var tail = index.b;
          var scope2 = index.c;
          var formattedName = $mdgriffith$elm_codegen$Internal$Compiler$formatValue(desiredName);
          if (!A2($elm$core$Set$member, formattedName, scope2)) {
            return _Utils_Tuple2(
              formattedName,
              A3(
                $mdgriffith$elm_codegen$Internal$Compiler$Index,
                top,
                tail,
                A2($elm$core$Set$insert, formattedName, scope2)
              )
            );
          } else {
            var protectedName = _Utils_ap(
              formattedName,
              $elm$core$String$fromInt(top)
            );
            if (!A2($elm$core$Set$member, protectedName, scope2)) {
              return _Utils_Tuple2(
                protectedName,
                A3(
                  $mdgriffith$elm_codegen$Internal$Compiler$Index,
                  top + 1,
                  tail,
                  A2($elm$core$Set$insert, protectedName, scope2)
                )
              );
            } else {
              var protectedNameLevel2 = _Utils_ap(
                formattedName,
                $mdgriffith$elm_codegen$Internal$Compiler$indexToString(index)
              );
              return _Utils_Tuple2(
                protectedNameLevel2,
                A3(
                  $mdgriffith$elm_codegen$Internal$Compiler$Index,
                  top + 1,
                  tail,
                  A2($elm$core$Set$insert, protectedNameLevel2, scope2)
                )
              );
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType = F3(
        function(index, desiredName, maybeAnnotation) {
          var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$getName, desiredName, index);
          var name = _v0.a;
          var newIndex = _v0.b;
          var _v1 = function() {
            if (maybeAnnotation.$ === 1) {
              return {
                dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                Z: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
                  A2($mdgriffith$elm_codegen$Internal$Compiler$protectTypeName, desiredName, index)
                ),
                b: _List_Nil
              };
            } else {
              var ann = maybeAnnotation.a;
              return ann;
            }
          }();
          var imports = _v1.b;
          var annotation = _v1.Z;
          var aliases = _v1.dE;
          return {
            bV: newIndex,
            x: name,
            $7: annotation,
            n: function(ignoredIndex_) {
              return {
                Z: $elm$core$Result$Ok(
                  { dE: aliases, d: $elm$core$Dict$empty, $7: annotation }
                ),
                a: A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, _List_Nil, name),
                b: imports
              };
            }
          };
        }
      );
      var $mdgriffith$elm_codegen$Elm$fn2 = F3(
        function(_v0, _v1, toExpression) {
          var oneBaseName = _v0.a;
          var maybeOneType = _v0.b;
          var twoBaseName = _v1.a;
          var maybeTwoType = _v1.b;
          return $mdgriffith$elm_codegen$Internal$Compiler$expression(
            function(index) {
              var one = A3($mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType, index, oneBaseName, maybeOneType);
              var two = A3($mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType, one.bV, twoBaseName, maybeTwoType);
              var _v2 = A2(
                $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails,
                two.bV,
                A2(toExpression, one.n, two.n)
              );
              var newIndex_ = _v2.a;
              var _return = _v2.b;
              return {
                Z: function() {
                  var _v3 = _return.Z;
                  if (_v3.$ === 1) {
                    var err = _v3.a;
                    return _return.Z;
                  } else {
                    var returnAnnotation = _v3.a;
                    return $elm$core$Result$Ok(
                      {
                        dE: returnAnnotation.dE,
                        d: returnAnnotation.d,
                        $7: A2(
                          $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(one.$7),
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                            A2(
                              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                              $mdgriffith$elm_codegen$Internal$Compiler$nodify(two.$7),
                              $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.$7)
                            )
                          )
                        )
                      }
                    );
                  }
                }(),
                a: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
                  {
                    s: _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.x)
                        ),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(two.x)
                        )
                      ]
                    ),
                    a: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.a)
                  }
                ),
                b: _return.b
              };
            }
          );
        }
      );
      var $mdgriffith$elm_codegen$Elm$Annotation$named = F2(
        function(mod, name) {
          return {
            dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
            Z: A2(
              $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
              $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                _Utils_Tuple2(
                  mod,
                  $mdgriffith$elm_codegen$Internal$Compiler$formatType(name)
                )
              ),
              _List_Nil
            ),
            b: function() {
              if (!mod.b) {
                return _List_Nil;
              } else {
                return _List_fromArray(
                  [mod]
                );
              }
            }()
          };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function(a) {
        return { $: 19, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$MismatchedList = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$unifyHelper = F2(
        function(exps, existing) {
          unifyHelper:
            while (true) {
              if (!exps.b) {
                return $elm$core$Result$Ok(existing);
              } else {
                var top = exps.a;
                var remain = exps.b;
                var _v1 = top.Z;
                if (!_v1.$) {
                  var ann = _v1.a;
                  var _v2 = A4($mdgriffith$elm_codegen$Internal$Compiler$unifiable, ann.dE, ann.d, ann.$7, existing.$7);
                  if (_v2.b.$ === 1) {
                    var err = _v2.b.a;
                    return $elm$core$Result$Err(
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_codegen$Internal$Compiler$MismatchedList, ann.$7, existing.$7)
                        ]
                      )
                    );
                  } else {
                    var cache = _v2.a;
                    var _new = _v2.b.a;
                    var $temp$exps = remain, $temp$existing = {
                      dE: existing.dE,
                      d: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, existing.d, cache),
                      $7: _new
                    };
                    exps = $temp$exps;
                    existing = $temp$existing;
                    continue unifyHelper;
                  }
                } else {
                  var err = _v1.a;
                  return $elm$core$Result$Err(err);
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$unify = function(exps) {
        if (!exps.b) {
          return $elm$core$Result$Ok(
            {
              dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
              d: $elm$core$Dict$empty,
              $7: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType("a")
            }
          );
        } else {
          var top = exps.a;
          var remain = exps.b;
          var _v1 = top.Z;
          if (!_v1.$) {
            var ann = _v1.a;
            return A2($mdgriffith$elm_codegen$Internal$Compiler$unifyHelper, remain, ann);
          } else {
            var err = _v1.a;
            return $elm$core$Result$Err(err);
          }
        }
      };
      var $mdgriffith$elm_codegen$Elm$list = function(exprs) {
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(
          function(index) {
            var exprDetails = A2($mdgriffith$elm_codegen$Internal$Compiler$thread, index, exprs);
            return {
              Z: A2(
                $elm$core$Result$map,
                function(inner) {
                  return {
                    dE: inner.dE,
                    d: inner.d,
                    $7: A2(
                      $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
                      $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                        _Utils_Tuple2(_List_Nil, "List")
                      ),
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(inner.$7)
                        ]
                      )
                    )
                  };
                },
                $mdgriffith$elm_codegen$Internal$Compiler$unify(exprDetails)
              ),
              a: $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(
                A2(
                  $elm$core$List$map,
                  A2(
                    $elm$core$Basics$composeR,
                    function($) {
                      return $.a;
                    },
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify
                  ),
                  exprDetails
                )
              ),
              b: A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getImports, exprDetails)
            };
          }
        );
      };
      var $author$project$Gen$Json$Encode$object = function(objectArg) {
        return A2(
          $mdgriffith$elm_codegen$Elm$apply,
          $mdgriffith$elm_codegen$Elm$value(
            {
              Z: $elm$core$Maybe$Just(
                A2(
                  $mdgriffith$elm_codegen$Elm$Annotation$function,
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$list(
                        A2(
                          $mdgriffith$elm_codegen$Elm$Annotation$tuple,
                          $mdgriffith$elm_codegen$Elm$Annotation$string,
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Json", "Encode"]
                            ),
                            "Value",
                            _List_Nil
                          )
                        )
                      )
                    ]
                  ),
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Json", "Encode"]
                    ),
                    "Value",
                    _List_Nil
                  )
                )
              ),
              ab: _List_fromArray(
                ["Json", "Encode"]
              ),
              x: "object"
            }
          ),
          _List_fromArray(
            [
              $mdgriffith$elm_codegen$Elm$list(objectArg)
            ]
          )
        );
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function(a) {
        return { $: 11, a };
      };
      var $mdgriffith$elm_codegen$Internal$Types$nodify = function(exp) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
      };
      var $mdgriffith$elm_codegen$Internal$Types$string = A2(
        $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
        $mdgriffith$elm_codegen$Internal$Types$nodify(
          _Utils_Tuple2(_List_Nil, "String")
        ),
        _List_Nil
      );
      var $mdgriffith$elm_codegen$Elm$string = function(literal) {
        return function(_v0) {
          return {
            Z: $elm$core$Result$Ok(
              { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, d: $elm$core$Dict$empty, $7: $mdgriffith$elm_codegen$Internal$Types$string }
            ),
            a: $stil4m$elm_syntax$Elm$Syntax$Expression$Literal(literal),
            b: _List_Nil
          };
        };
      };
      var $author$project$Gen$Json$Encode$string = function(stringArg) {
        return A2(
          $mdgriffith$elm_codegen$Elm$apply,
          $mdgriffith$elm_codegen$Elm$value(
            {
              Z: $elm$core$Maybe$Just(
                A2(
                  $mdgriffith$elm_codegen$Elm$Annotation$function,
                  _List_fromArray(
                    [$mdgriffith$elm_codegen$Elm$Annotation$string]
                  ),
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Json", "Encode"]
                    ),
                    "Value",
                    _List_Nil
                  )
                )
              ),
              ab: _List_fromArray(
                ["Json", "Encode"]
              ),
              x: "string"
            }
          ),
          _List_fromArray(
            [
              $mdgriffith$elm_codegen$Elm$string(stringArg)
            ]
          )
        );
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function(a) {
        return { $: 13, a };
      };
      var $mdgriffith$elm_codegen$Elm$tuple = F2(
        function(oneExp, twoExp) {
          return function(index) {
            var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, oneExp);
            var oneIndex = _v0.a;
            var one = _v0.b;
            var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, oneIndex, twoExp);
            var twoIndex = _v1.a;
            var two = _v1.b;
            return {
              Z: A3(
                $elm$core$Result$map2,
                F2(
                  function(oneA, twoA) {
                    return {
                      dE: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeAliases, twoA.dE, oneA.dE),
                      d: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, twoA.d, oneA.d),
                      $7: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
                        _List_fromArray(
                          [
                            $mdgriffith$elm_codegen$Internal$Compiler$nodify(oneA.$7),
                            $mdgriffith$elm_codegen$Internal$Compiler$nodify(twoA.$7)
                          ]
                        )
                      )
                    };
                  }
                ),
                one.Z,
                two.Z
              ),
              a: $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(one.a),
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(two.a)
                  ]
                )
              ),
              b: _Utils_ap(one.b, two.b)
            };
          };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function(a) {
        return { $: 1, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function(a) {
        return { $: 2, a };
      };
      var $elm$core$String$isEmpty = function(string) {
        return string === "";
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$documentation = F2(
        function(rawDoc, decl) {
          var doc = $elm$core$String$trim(rawDoc);
          if ($elm$core$String$isEmpty(doc)) {
            return decl;
          } else {
            switch (decl.$) {
              case 1:
                return decl;
              case 2:
                var source = decl.a;
                return decl;
              default:
                var exp = decl.a;
                var imports = decl.b;
                var body = decl.c;
                var addDocs = function(maybeNodedExistingDocs) {
                  if (maybeNodedExistingDocs.$ === 1) {
                    return doc;
                  } else {
                    var _v3 = maybeNodedExistingDocs.a;
                    var range = _v3.a;
                    var existing = _v3.b;
                    return doc + ("\n\n" + existing);
                  }
                };
                switch (body.$) {
                  case 0:
                    var func = body.a;
                    return A3(
                      $mdgriffith$elm_codegen$Internal$Compiler$Declaration,
                      exp,
                      imports,
                      $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
                        _Utils_update(
                          func,
                          {
                            aN: $elm$core$Maybe$Just(
                              $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                                addDocs(func.aN)
                              )
                            )
                          }
                        )
                      )
                    );
                  case 1:
                    var typealias = body.a;
                    return A3(
                      $mdgriffith$elm_codegen$Internal$Compiler$Declaration,
                      exp,
                      imports,
                      $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
                        _Utils_update(
                          typealias,
                          {
                            aN: $elm$core$Maybe$Just(
                              $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                                addDocs(typealias.aN)
                              )
                            )
                          }
                        )
                      )
                    );
                  case 2:
                    var typeDecl = body.a;
                    return A3(
                      $mdgriffith$elm_codegen$Internal$Compiler$Declaration,
                      exp,
                      imports,
                      $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(
                        _Utils_update(
                          typeDecl,
                          {
                            aN: $elm$core$Maybe$Just(
                              $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                                addDocs(typeDecl.aN)
                              )
                            )
                          }
                        )
                      )
                    );
                  case 3:
                    var sig = body.a;
                    return decl;
                  case 4:
                    return decl;
                  default:
                    return decl;
                }
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Elm$withDocumentation = $mdgriffith$elm_codegen$Internal$Compiler$documentation;
      var $mdgriffith$elm_codegen$Internal$Compiler$unifyOn = F2(
        function(_v0, res) {
          var annDetails = _v0;
          if (res.$ === 1) {
            return res;
          } else {
            var inf = res.a;
            var _v2 = A4($mdgriffith$elm_codegen$Internal$Compiler$unifiable, inf.dE, inf.d, annDetails.Z, inf.$7);
            var newInferences = _v2.a;
            var finalResult = _v2.b;
            if (!finalResult.$) {
              var finalType = finalResult.a;
              return $elm$core$Result$Ok(
                {
                  dE: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeAliases, annDetails.dE, inf.dE),
                  d: newInferences,
                  $7: finalType
                }
              );
            } else {
              var err = finalResult.a;
              return $elm$core$Result$Err(
                _List_fromArray(
                  [err]
                )
              );
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Elm$withType = F2(
        function(ann, _v0) {
          var annDetails = ann;
          var toExp = _v0;
          return function(index) {
            var exp = toExp(index);
            return _Utils_update(
              exp,
              {
                Z: function() {
                  var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$unifyOn, ann, exp.Z);
                  if (!_v1.$) {
                    var unified = _v1.a;
                    return $elm$core$Result$Ok(unified);
                  } else {
                    var _v2 = exp.Z;
                    if (!_v2.$) {
                      var expressionAnnotation = _v2.a;
                      return $elm$core$Result$Ok(
                        { dE: expressionAnnotation.dE, d: expressionAnnotation.d, $7: annDetails.Z }
                      );
                    } else {
                      var err = _v2.a;
                      return $elm$core$Result$Ok(
                        { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, d: $elm$core$Dict$empty, $7: annDetails.Z }
                      );
                    }
                  }
                }(),
                b: _Utils_ap(exp.b, annDetails.b)
              }
            );
          };
        }
      );
      var $author$project$Generate$Action$encode = function(context) {
        return A2(
          $mdgriffith$elm_codegen$Elm$withDocumentation,
          "Turn an [Action](#Action) into a JSON value to perform a transaction. You can then send it through a port to eosjs, or similar.",
          A2(
            $mdgriffith$elm_codegen$Elm$declaration,
            "encode",
            A2(
              $mdgriffith$elm_codegen$Elm$withType,
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $author$project$Gen$Eos$Authorization$annotation_.bb,
                    A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action")
                  ]
                ),
                $author$project$Gen$Json$Encode$annotation_.dq
              ),
              A3(
                $mdgriffith$elm_codegen$Elm$fn2,
                _Utils_Tuple2(
                  "authorization",
                  $elm$core$Maybe$Just($author$project$Gen$Eos$Authorization$annotation_.bb)
                ),
                _Utils_Tuple2(
                  "action",
                  $elm$core$Maybe$Just(
                    A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action")
                  )
                ),
                F2(
                  function(authorizationArg, actionArg) {
                    return $author$project$Gen$Json$Encode$object(
                      _List_fromArray(
                        [
                          A2(
                            $mdgriffith$elm_codegen$Elm$tuple,
                            $mdgriffith$elm_codegen$Elm$string("account"),
                            $author$project$Gen$Json$Encode$string(context.bk)
                          ),
                          A2(
                            $mdgriffith$elm_codegen$Elm$tuple,
                            $mdgriffith$elm_codegen$Elm$string("name"),
                            $author$project$Gen$Json$Encode$call_.cX(
                              A2(
                                $mdgriffith$elm_codegen$Elm$apply,
                                $mdgriffith$elm_codegen$Elm$value(
                                  {
                                    Z: $elm$core$Maybe$Just(
                                      A2(
                                        $mdgriffith$elm_codegen$Elm$Annotation$function,
                                        _List_fromArray(
                                          [
                                            A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action")
                                          ]
                                        ),
                                        $mdgriffith$elm_codegen$Elm$Annotation$string
                                      )
                                    ),
                                    ab: _List_Nil,
                                    x: "getName"
                                  }
                                ),
                                _List_fromArray(
                                  [actionArg]
                                )
                              )
                            )
                          ),
                          A2(
                            $mdgriffith$elm_codegen$Elm$tuple,
                            $mdgriffith$elm_codegen$Elm$string("authorization"),
                            $author$project$Gen$Eos$Authorization$encode(authorizationArg)
                          ),
                          A2(
                            $mdgriffith$elm_codegen$Elm$tuple,
                            $mdgriffith$elm_codegen$Elm$string("data"),
                            A2(
                              $mdgriffith$elm_codegen$Elm$apply,
                              $mdgriffith$elm_codegen$Elm$value(
                                {
                                  Z: $elm$core$Maybe$Just(
                                    A2(
                                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                                      _List_fromArray(
                                        [
                                          A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action")
                                        ]
                                      ),
                                      $author$project$Gen$Json$Encode$annotation_.dq
                                    )
                                  ),
                                  ab: _List_Nil,
                                  x: "encodeSingleAction"
                                }
                              ),
                              _List_fromArray(
                                [actionArg]
                              )
                            )
                          )
                        ]
                      )
                    );
                  }
                )
              )
            )
          )
        );
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function(a) {
        return { $: 16, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$EmptyCaseStatement = { $: 2 };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2(
        function(a, b) {
          return { $: 12, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Elm$Case$combineInferences = F2(
        function(infs, infResult) {
          if (!infResult.$) {
            var inferred = infResult.a;
            return $elm$core$Result$Ok(
              _Utils_update(
                inferred,
                {
                  d: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, infs, inferred.d)
                }
              )
            );
          } else {
            var err = infResult.a;
            return $elm$core$Result$Err(err);
          }
        }
      );
      var $mdgriffith$elm_codegen$Elm$Case$captureCaseHelper = F3(
        function(mainCaseExpressionModule, _v0, accum) {
          var toBranch = _v0;
          var _v1 = toBranch(
            $mdgriffith$elm_codegen$Internal$Compiler$dive(accum.bV)
          );
          var branchIndex = _v1.a;
          var originalPattern = _v1.b;
          var caseExpression = _v1.c;
          var _v2 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, branchIndex, caseExpression);
          var newIndex = _v2.a;
          var exp = _v2.b;
          var pattern = function() {
            if (!mainCaseExpressionModule.b) {
              return originalPattern;
            } else {
              if (originalPattern.$ === 12) {
                var named = originalPattern.a;
                var vars = originalPattern.b;
                return A2(
                  $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
                  { ci: mainCaseExpressionModule, x: named.x },
                  vars
                );
              } else {
                return originalPattern;
              }
            }
          }();
          return {
            Z: function() {
              var _v3 = accum.Z;
              if (_v3.$ === 1) {
                return $elm$core$Maybe$Just(exp.Z);
              } else {
                if (!_v3.a.$) {
                  var gatheredAnnotation = _v3.a.a;
                  return $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Internal$Compiler$unifyOn,
                      { dE: gatheredAnnotation.dE, Z: gatheredAnnotation.$7, b: _List_Nil },
                      A2($mdgriffith$elm_codegen$Elm$Case$combineInferences, gatheredAnnotation.d, exp.Z)
                    )
                  );
                } else {
                  var err = _v3.a;
                  return $elm$core$Maybe$Just(err);
                }
              }
            }(),
            q: A2(
              $elm$core$List$cons,
              _Utils_Tuple2(
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(pattern),
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(exp.a)
              ),
              accum.q
            ),
            b: _Utils_ap(accum.b, exp.b),
            bV: accum.bV
          };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$importInferences = F2(
        function(one, two) {
          return {
            dE: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeAliases, one.dE, two.dE),
            d: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, one.d, two.d),
            $7: two.$7
          };
        }
      );
      var $mdgriffith$elm_codegen$Elm$Case$captureCase = F4(
        function(mainExpression, mainExpressionTypeModule, index, branches) {
          var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, mainExpression);
          var branchIndex = _v0.a;
          var mainExpressionDetails = _v0.b;
          var caseExp = A3(
            $elm$core$List$foldl,
            $mdgriffith$elm_codegen$Elm$Case$captureCaseHelper(mainExpressionTypeModule),
            { Z: $elm$core$Maybe$Nothing, q: _List_Nil, b: _List_Nil, bV: branchIndex },
            branches
          );
          return _Utils_Tuple2(
            mainExpressionDetails,
            _Utils_update(
              caseExp,
              {
                Z: function() {
                  var _v1 = caseExp.Z;
                  if (!_v1.$ && !_v1.a.$) {
                    var inference = _v1.a.a;
                    var _v2 = mainExpressionDetails.Z;
                    if (_v2.$ === 1) {
                      var err = _v2.a;
                      return $elm$core$Maybe$Just(
                        $elm$core$Result$Err(err)
                      );
                    } else {
                      var mainAnn = _v2.a;
                      return $elm$core$Maybe$Just(
                        $elm$core$Result$Ok(
                          A2($mdgriffith$elm_codegen$Internal$Compiler$importInferences, mainAnn, inference)
                        )
                      );
                    }
                  } else {
                    return caseExp.Z;
                  }
                }()
              }
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$getTypeModule = function(_v0) {
        var annotation = _v0;
        var _v1 = annotation.Z;
        if (_v1.$ === 1) {
          var _v2 = _v1.a;
          var _v3 = _v2.b;
          var mod = _v3.a;
          var typeName = _v3.b;
          return mod;
        } else {
          return _List_Nil;
        }
      };
      var $mdgriffith$elm_codegen$Elm$Case$custom = F3(
        function(mainExpression, annotation, branches) {
          return function(index) {
            var myMain = A2($mdgriffith$elm_codegen$Elm$withType, annotation, mainExpression);
            var _v0 = A4(
              $mdgriffith$elm_codegen$Elm$Case$captureCase,
              myMain,
              $mdgriffith$elm_codegen$Internal$Compiler$getTypeModule(annotation),
              $mdgriffith$elm_codegen$Internal$Compiler$dive(index),
              branches
            );
            var expr = _v0.a;
            var gathered = _v0.b;
            return {
              Z: function() {
                var _v1 = gathered.Z;
                if (_v1.$ === 1) {
                  return $elm$core$Result$Err(
                    _List_fromArray(
                      [$mdgriffith$elm_codegen$Internal$Compiler$EmptyCaseStatement]
                    )
                  );
                } else {
                  var ann = _v1.a;
                  return ann;
                }
              }(),
              a: $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(
                {
                  q: $elm$core$List$reverse(gathered.q),
                  a: $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr.a)
                }
              ),
              b: _Utils_ap(expr.b, gathered.b)
            };
          };
        }
      );
      var $author$project$Gen$Eos$Asset$moduleName_ = _List_fromArray(
        ["Eos", "Asset"]
      );
      var $author$project$Gen$Eos$Asset$annotation_ = {
        dI: A4(
          $mdgriffith$elm_codegen$Elm$Annotation$alias,
          $author$project$Gen$Eos$Asset$moduleName_,
          "Asset",
          _List_Nil,
          $mdgriffith$elm_codegen$Elm$Annotation$record(
            _List_fromArray(
              [
                _Utils_Tuple2("amount", $mdgriffith$elm_codegen$Elm$Annotation$float),
                _Utils_Tuple2(
                  "symbol",
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Eos", "Symbol"]
                    ),
                    "Symbol",
                    _List_Nil
                  )
                )
              ]
            )
          )
        )
      };
      var $author$project$Gen$Eos$Checksum$annotation_ = {
        dO: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "Checksum"]
          ),
          "Checksum",
          _List_Nil
        )
      };
      var $author$project$Gen$Eos$ExtendedAsset$moduleName_ = _List_fromArray(
        ["Eos", "ExtendedAsset"]
      );
      var $author$project$Gen$Eos$ExtendedAsset$annotation_ = {
        d2: A4(
          $mdgriffith$elm_codegen$Elm$Annotation$alias,
          $author$project$Gen$Eos$ExtendedAsset$moduleName_,
          "ExtendedAsset",
          _List_Nil,
          $mdgriffith$elm_codegen$Elm$Annotation$record(
            _List_fromArray(
              [
                _Utils_Tuple2("amount", $mdgriffith$elm_codegen$Elm$Annotation$float),
                _Utils_Tuple2(
                  "symbol",
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Eos", "Symbol"]
                    ),
                    "Symbol",
                    _List_Nil
                  )
                ),
                _Utils_Tuple2(
                  "contract",
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Eos", "Name"]
                    ),
                    "Name",
                    _List_Nil
                  )
                )
              ]
            )
          )
        )
      };
      var $author$project$Gen$Eos$Name$annotation_ = {
        bx: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "Name"]
          ),
          "Error",
          _List_Nil
        ),
        x: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "Name"]
          ),
          "Name",
          _List_Nil
        )
      };
      var $author$project$Gen$Eos$PublicKey$annotation_ = {
        eL: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "PublicKey"]
          ),
          "PublicKey",
          _List_Nil
        )
      };
      var $author$project$Gen$Eos$Signature$annotation_ = {
        eR: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "Signature"]
          ),
          "Signature",
          _List_Nil
        )
      };
      var $author$project$Gen$Eos$Symbol$annotation_ = {
        bx: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "Symbol"]
          ),
          "Error",
          _List_Nil
        ),
        aA: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "Symbol"]
          ),
          "PrecisionError",
          _List_Nil
        ),
        eY: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "Symbol"]
          ),
          "Symbol",
          _List_Nil
        )
      };
      var $author$project$Gen$Eos$SymbolCode$annotation_ = {
        bx: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "SymbolCode"]
          ),
          "Error",
          _List_Nil
        ),
        eZ: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "SymbolCode"]
          ),
          "SymbolCode",
          _List_Nil
        )
      };
      var $author$project$Gen$Eos$TimePoint$annotation_ = {
        e$: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "TimePoint"]
          ),
          "TimePoint",
          _List_Nil
        )
      };
      var $author$project$Gen$Eos$TimePointSec$annotation_ = {
        e0: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Eos", "TimePointSec"]
          ),
          "TimePointSec",
          _List_Nil
        )
      };
      var $author$project$Gen$Time$annotation_ = {
        ck: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Time"]
          ),
          "Month",
          _List_Nil
        ),
        eG: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Time"]
          ),
          "Posix",
          _List_Nil
        ),
        ds: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Time"]
          ),
          "Weekday",
          _List_Nil
        ),
        e7: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Time"]
          ),
          "Zone",
          _List_Nil
        ),
        dz: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Time"]
          ),
          "ZoneName",
          _List_Nil
        )
      };
      var $author$project$EosType$toAnnotation = function(eosType) {
        switch (eosType.$) {
          case 0:
            return $mdgriffith$elm_codegen$Elm$Annotation$bool;
          case 1:
            return $mdgriffith$elm_codegen$Elm$Annotation$int;
          case 2:
            return $mdgriffith$elm_codegen$Elm$Annotation$float;
          case 3:
            return $author$project$Gen$Eos$TimePoint$annotation_.e$;
          case 4:
            return $author$project$Gen$Eos$TimePointSec$annotation_.e0;
          case 5:
            return $author$project$Gen$Time$annotation_.eG;
          case 6:
            return $author$project$Gen$Eos$Name$annotation_.x;
          case 7:
            return $mdgriffith$elm_codegen$Elm$Annotation$string;
          case 8:
            return $author$project$Gen$Eos$Checksum$annotation_.dO;
          case 9:
            return $author$project$Gen$Eos$PublicKey$annotation_.eL;
          case 10:
            return $author$project$Gen$Eos$Signature$annotation_.eR;
          case 11:
            return $author$project$Gen$Eos$Symbol$annotation_.eY;
          case 12:
            return $author$project$Gen$Eos$SymbolCode$annotation_.eZ;
          case 13:
            return $author$project$Gen$Eos$Asset$annotation_.dI;
          case 14:
            return $author$project$Gen$Eos$ExtendedAsset$annotation_.d2;
          default:
            var innerType = eosType.a;
            return $mdgriffith$elm_codegen$Elm$Annotation$list(
              $author$project$EosType$toAnnotation(innerType)
            );
        }
      };
      var $author$project$Generate$Action$actionParameter = function(action) {
        return $mdgriffith$elm_codegen$Elm$Annotation$record(
          A2(
            $elm$core$List$map,
            function(arg) {
              return _Utils_Tuple2(
                $elm_community$string_extra$String$Extra$camelize(arg.x),
                $author$project$EosType$toAnnotation(arg.$7)
              );
            },
            action.a6
          )
        );
      };
      var $mdgriffith$elm_codegen$Elm$Case$Branch = $elm$core$Basics$identity;
      var $mdgriffith$elm_codegen$Internal$Compiler$toVarWithType = F3(
        function(index, desiredName, _v0) {
          var ann = _v0;
          var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$getName, desiredName, index);
          var name = _v1.a;
          var newIndex = _v1.b;
          return {
            m: function(ignoredIndex_) {
              return {
                Z: $elm$core$Result$Ok(
                  { dE: ann.dE, d: $elm$core$Dict$empty, $7: ann.Z }
                ),
                a: A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, _List_Nil, name),
                b: ann.b
              };
            },
            bV: newIndex,
            x: name
          };
        }
      );
      var $mdgriffith$elm_codegen$Elm$Case$branch1 = F3(
        function(name, _v0, toExp) {
          var argName = _v0.a;
          var argType = _v0.b;
          return function(index) {
            var _var = A3($mdgriffith$elm_codegen$Internal$Compiler$toVarWithType, index, argName, argType);
            return _Utils_Tuple3(
              _var.bV,
              A2(
                $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
                {
                  ci: _List_Nil,
                  x: $mdgriffith$elm_codegen$Internal$Compiler$formatType(name)
                },
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(_var.x)
                    )
                  ]
                )
              ),
              toExp(_var.m)
            );
          };
        }
      );
      var $mdgriffith$elm_codegen$Elm$Op$BinOp = F3(
        function(a, b, c) {
          return { $: 0, a, b, c };
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Infix$Left = 0;
      var $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication = F4(
        function(a, b, c, d) {
          return { $: 2, a, b, c, d };
        }
      );
      var $mdgriffith$elm_codegen$Elm$Op$applyInfix2 = F4(
        function(_v0, infixAnnotation, l, r) {
          var symbol = _v0.a;
          var dir = _v0.b;
          return function(index) {
            var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, l);
            var leftIndex = _v1.a;
            var left = _v1.b;
            var _v2 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, leftIndex, r);
            var rightIndex = _v2.a;
            var right = _v2.b;
            var annotationIndex = $mdgriffith$elm_codegen$Internal$Compiler$next(rightIndex);
            return {
              Z: A2(
                $mdgriffith$elm_codegen$Internal$Compiler$applyType,
                $elm$core$Result$Ok(
                  { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, d: $elm$core$Dict$empty, $7: infixAnnotation }
                ),
                _List_fromArray(
                  [left, right]
                )
              ),
              a: A4(
                $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
                symbol,
                dir,
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                  $mdgriffith$elm_codegen$Internal$Compiler$parens(left.a)
                ),
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                  $mdgriffith$elm_codegen$Internal$Compiler$parens(right.a)
                )
              ),
              b: _Utils_ap(left.b, right.b)
            };
          };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Types$function = F2(
        function(args, _return) {
          return A3(
            $elm$core$List$foldr,
            F2(
              function(ann, fn) {
                return A2(
                  $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                  $mdgriffith$elm_codegen$Internal$Types$nodify(ann),
                  $mdgriffith$elm_codegen$Internal$Types$nodify(fn)
                );
              }
            ),
            _return,
            args
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Types$formatValue = function(str) {
        var formatted = _Utils_eq(
          $elm$core$String$toUpper(str),
          str
        ) ? $elm$core$String$toLower(str) : _Utils_ap(
          $elm$core$String$toLower(
            A2($elm$core$String$left, 1, str)
          ),
          A2($elm$core$String$dropLeft, 1, str)
        );
        return $mdgriffith$elm_codegen$Internal$Compiler$sanitize(formatted);
      };
      var $mdgriffith$elm_codegen$Internal$Types$var = function(name) {
        return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
          $mdgriffith$elm_codegen$Internal$Types$formatValue(name)
        );
      };
      var $mdgriffith$elm_codegen$Elm$Op$pipe = F2(
        function(r, l) {
          return A4(
            $mdgriffith$elm_codegen$Elm$Op$applyInfix2,
            A3($mdgriffith$elm_codegen$Elm$Op$BinOp, "|>", 0, 0),
            A2(
              $mdgriffith$elm_codegen$Internal$Types$function,
              _List_fromArray(
                [
                  $mdgriffith$elm_codegen$Internal$Types$var("a"),
                  A2(
                    $mdgriffith$elm_codegen$Internal$Types$function,
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Internal$Types$var("a")
                      ]
                    ),
                    $mdgriffith$elm_codegen$Internal$Types$var("b")
                  )
                ]
              ),
              $mdgriffith$elm_codegen$Internal$Types$var("b")
            ),
            l,
            r
          );
        }
      );
      var $author$project$Gen$Eos$Asset$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Asset", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Asset"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Asset", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Asset"]
            ),
            x: "encode"
          }
        )
      };
      var $author$project$Gen$Eos$Checksum$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Checksum", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Checksum"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Checksum", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Checksum"]
            ),
            x: "encode"
          }
        )
      };
      var $author$project$Gen$Eos$ExtendedAsset$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "ExtendedAsset", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "ExtendedAsset"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "ExtendedAsset", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "ExtendedAsset"]
            ),
            x: "encode"
          }
        )
      };
      var $author$project$Gen$Eos$Name$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Name", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Name"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Name", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Name"]
            ),
            x: "encode"
          }
        ),
        by: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Error", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$string
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Name"]
            ),
            x: "errorToString"
          }
        ),
        bP: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$string]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_Nil,
                  "Result",
                  _List_fromArray(
                    [
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Error", _List_Nil),
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Name", _List_Nil)
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Name"]
            ),
            x: "fromString"
          }
        ),
        dg: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Name", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$string
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Name"]
            ),
            x: "toString"
          }
        )
      };
      var $author$project$Gen$Eos$PublicKey$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "PublicKey", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "PublicKey"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "PublicKey", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "PublicKey"]
            ),
            x: "encode"
          }
        )
      };
      var $author$project$Gen$Eos$Signature$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Signature", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Signature"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Signature", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Signature"]
            ),
            x: "encode"
          }
        )
      };
      var $author$project$Gen$Eos$Symbol$values_ = {
        bf: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Symbol", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Eos", "SymbolCode"]
                  ),
                  "SymbolCode",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Symbol"]
            ),
            x: "code"
          }
        ),
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Symbol", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Symbol"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Symbol", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Symbol"]
            ),
            x: "encode"
          }
        ),
        by: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Error", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$string
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Symbol"]
            ),
            x: "errorToString"
          }
        ),
        bM: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$int,
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Eos", "SymbolCode"]
                      ),
                      "SymbolCode",
                      _List_Nil
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_Nil,
                  "Result",
                  _List_fromArray(
                    [
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "PrecisionError", _List_Nil),
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Symbol", _List_Nil)
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Symbol"]
            ),
            x: "fromPrecisionAndCode"
          }
        ),
        bN: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$int, $mdgriffith$elm_codegen$Elm$Annotation$string]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_Nil,
                  "Result",
                  _List_fromArray(
                    [
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Error", _List_Nil),
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Symbol", _List_Nil)
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Symbol"]
            ),
            x: "fromPrecisionAndCodeString"
          }
        ),
        cz: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Symbol", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Eos", "Symbol"]
            ),
            x: "precision"
          }
        )
      };
      var $author$project$Gen$Eos$SymbolCode$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "SymbolCode", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "SymbolCode"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "SymbolCode", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "SymbolCode"]
            ),
            x: "encode"
          }
        ),
        by: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Error", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$string
              )
            ),
            ab: _List_fromArray(
              ["Eos", "SymbolCode"]
            ),
            x: "errorToString"
          }
        ),
        bP: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$string]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_Nil,
                  "Result",
                  _List_fromArray(
                    [
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Error", _List_Nil),
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "SymbolCode", _List_Nil)
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "SymbolCode"]
            ),
            x: "fromString"
          }
        ),
        dg: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "SymbolCode", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$string
              )
            ),
            ab: _List_fromArray(
              ["Eos", "SymbolCode"]
            ),
            x: "toString"
          }
        )
      };
      var $author$project$Gen$Eos$TimePoint$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePoint", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePoint"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePoint", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePoint"]
            ),
            x: "encode"
          }
        ),
        bK: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$int]
                ),
                A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePoint", _List_Nil)
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePoint"]
            ),
            x: "fromMicroseconds"
          }
        ),
        bL: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePoint", _List_Nil)
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePoint"]
            ),
            x: "fromPosix"
          }
        ),
        c9: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePoint", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePoint"]
            ),
            x: "toMicroseconds"
          }
        ),
        dd: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePoint", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Time"]
                  ),
                  "Posix",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePoint"]
            ),
            x: "toPosix"
          }
        )
      };
      var $author$project$Gen$Eos$TimePointSec$values_ = {
        G: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePointSec", _List_Nil)
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePointSec"]
            ),
            x: "decoder"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePointSec", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePointSec"]
            ),
            x: "encode"
          }
        ),
        bL: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePointSec", _List_Nil)
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePointSec"]
            ),
            x: "fromPosix"
          }
        ),
        bO: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$int]
                ),
                A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePointSec", _List_Nil)
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePointSec"]
            ),
            x: "fromSeconds"
          }
        ),
        dd: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePointSec", _List_Nil)
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Time"]
                  ),
                  "Posix",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePointSec"]
            ),
            x: "toPosix"
          }
        ),
        df: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "TimePointSec", _List_Nil)
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Eos", "TimePointSec"]
            ),
            x: "toSeconds"
          }
        )
      };
      var $author$project$Gen$Json$Encode$values_ = {
        a7: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Array"]
                      ),
                      "Array",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "array"
          }
        ),
        bd: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$bool]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "bool"
          }
        ),
        bt: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("k")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$string
                    ),
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Dict"]
                      ),
                      "Dict",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("k"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("v")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "dict"
          }
        ),
        H: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$int,
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Encode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$string
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "encode"
          }
        ),
        bH: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$float]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "float"
          }
        ),
        aR: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$int]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "int"
          }
        ),
        b4: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    ),
                    $mdgriffith$elm_codegen$Elm$Annotation$list(
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "list"
          }
        ),
        cq: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Encode"]
                ),
                "Value",
                _List_Nil
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "null"
          }
        ),
        cs: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$list(
                      A2(
                        $mdgriffith$elm_codegen$Elm$Annotation$tuple,
                        $mdgriffith$elm_codegen$Elm$Annotation$string,
                        A3(
                          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                          _List_fromArray(
                            ["Json", "Encode"]
                          ),
                          "Value",
                          _List_Nil
                        )
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "object"
          }
        ),
        cR: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Encode"]
                        ),
                        "Value",
                        _List_Nil
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Set"]
                      ),
                      "Set",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "set"
          }
        ),
        cX: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$string]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Encode"]
                  ),
                  "Value",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Encode"]
            ),
            x: "string"
          }
        )
      };
      var $author$project$Gen$Time$values_ = {
        bm: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$int,
                    $mdgriffith$elm_codegen$Elm$Annotation$list(
                      $mdgriffith$elm_codegen$Elm$Annotation$record(
                        _List_fromArray(
                          [
                            _Utils_Tuple2("start", $mdgriffith$elm_codegen$Elm$Annotation$int),
                            _Utils_Tuple2("offset", $mdgriffith$elm_codegen$Elm$Annotation$int)
                          ]
                        )
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Time"]
                  ),
                  "Zone",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "customZone"
          }
        ),
        bz: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$float,
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_Nil,
                  "Sub",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "every"
          }
        ),
        d8: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Task"]
                ),
                "Task",
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$var("x"),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "ZoneName",
                      _List_Nil
                    )
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "getZoneName"
          }
        ),
        eb: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Task"]
                ),
                "Task",
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$var("x"),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    )
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "here"
          }
        ),
        ej: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$int]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Time"]
                  ),
                  "Posix",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "millisToPosix"
          }
        ),
        ex: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Task"]
                ),
                "Task",
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$var("x"),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "now"
          }
        ),
        eH: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "posixToMillis"
          }
        ),
        c7: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toDay"
          }
        ),
        c8: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toHour"
          }
        ),
        da: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toMillis"
          }
        ),
        db: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toMinute"
          }
        ),
        dc: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Time"]
                  ),
                  "Month",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toMonth"
          }
        ),
        de: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toSecond"
          }
        ),
        dh: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Time"]
                  ),
                  "Weekday",
                  _List_Nil
                )
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toWeekday"
          }
        ),
        di: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Zone",
                      _List_Nil
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$int
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "toYear"
          }
        ),
        e5: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Time"]
                ),
                "Zone",
                _List_Nil
              )
            ),
            ab: _List_fromArray(
              ["Time"]
            ),
            x: "utc"
          }
        )
      };
      var $author$project$EosType$generateEncoder = function(eosType) {
        switch (eosType.$) {
          case 0:
            return $author$project$Gen$Json$Encode$values_.bd;
          case 1:
            return $author$project$Gen$Json$Encode$values_.aR;
          case 2:
            return $author$project$Gen$Json$Encode$values_.bH;
          case 3:
            return $author$project$Gen$Eos$TimePoint$values_.H;
          case 4:
            return $author$project$Gen$Eos$TimePointSec$values_.H;
          case 5:
            return A2($mdgriffith$elm_codegen$Elm$Op$pipe, $author$project$Gen$Json$Encode$values_.aR, $author$project$Gen$Time$values_.eH);
          case 6:
            return $author$project$Gen$Eos$Name$values_.H;
          case 7:
            return $author$project$Gen$Json$Encode$values_.cX;
          case 8:
            return $author$project$Gen$Eos$Checksum$values_.H;
          case 9:
            return $author$project$Gen$Eos$PublicKey$values_.H;
          case 10:
            return $author$project$Gen$Eos$Signature$values_.H;
          case 11:
            return $author$project$Gen$Eos$Symbol$values_.H;
          case 12:
            return $author$project$Gen$Eos$SymbolCode$values_.H;
          case 13:
            return $author$project$Gen$Eos$Asset$values_.H;
          case 14:
            return $author$project$Gen$Eos$ExtendedAsset$values_.H;
          default:
            var innerType = eosType.a;
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $author$project$Gen$Json$Encode$values_.b4,
              _List_fromArray(
                [
                  $author$project$EosType$generateEncoder(innerType)
                ]
              )
            );
        }
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(
        function(a, b) {
          return { $: 20, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$AttemptingGetOnTypeNameNotAnAlias = function(a) {
        return { $: 9, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType = function(a) {
        return { $: 8, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList = F2(
        function(selector, fields) {
          getFieldFromList:
            while (true) {
              if (!fields.b) {
                return $elm$core$Maybe$Nothing;
              } else {
                var nodifiedTop = fields.a;
                var remain = fields.b;
                var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodifiedTop);
                var fieldname = _v1.a;
                var contents = _v1.b;
                if (_Utils_eq(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(fieldname),
                  selector
                )) {
                  return $elm$core$Maybe$Just(
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(contents)
                  );
                } else {
                  var $temp$selector = selector, $temp$fields = remain;
                  selector = $temp$selector;
                  fields = $temp$fields;
                  continue getFieldFromList;
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$inferRecordField = F2(
        function(index, _v0) {
          var nameOfRecord = _v0.cl;
          var fieldName = _v0.bE;
          var fieldType = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
            $mdgriffith$elm_codegen$Internal$Compiler$formatValue(
              _Utils_ap(
                fieldName,
                $mdgriffith$elm_codegen$Internal$Compiler$indexToString(index)
              )
            )
          );
          return $elm$core$Result$Ok(
            {
              dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
              d: A3(
                $mdgriffith$elm_codegen$Internal$Compiler$addInference,
                nameOfRecord,
                A2(
                  $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
                  $mdgriffith$elm_codegen$Internal$Compiler$nodify(nameOfRecord),
                  $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          _Utils_Tuple2(
                            $mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName),
                            $mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldType)
                          )
                        )
                      ]
                    )
                  )
                ),
                $elm$core$Dict$empty
              ),
              $7: fieldType
            }
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$resolveField = F5(
        function(index, type_, aliases, inferences, fieldName) {
          resolveField:
            while (true) {
              switch (type_.$) {
                case 4:
                  var fields = type_.a;
                  var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList, fieldName, fields);
                  if (!_v1.$) {
                    var ann = _v1.a;
                    return $elm$core$Result$Ok(
                      { dE: aliases, d: inferences, $7: ann }
                    );
                  } else {
                    return $elm$core$Result$Err(
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField(
                            {
                              d$: A2(
                                $elm$core$List$map,
                                A2(
                                  $elm$core$Basics$composeR,
                                  $mdgriffith$elm_codegen$Internal$Compiler$denode,
                                  A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)
                                ),
                                fields
                              ),
                              an: fieldName
                            }
                          )
                        ]
                      )
                    );
                  }
                case 5:
                  var name = type_.a;
                  var fields = type_.b;
                  var _v2 = A2(
                    $mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList,
                    fieldName,
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(fields)
                  );
                  if (!_v2.$) {
                    var ann = _v2.a;
                    return $elm$core$Result$Ok(
                      { dE: aliases, d: inferences, $7: ann }
                    );
                  } else {
                    return $elm$core$Result$Err(
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField(
                            {
                              d$: A2(
                                $elm$core$List$map,
                                A2(
                                  $elm$core$Basics$composeR,
                                  $mdgriffith$elm_codegen$Internal$Compiler$denode,
                                  A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)
                                ),
                                $mdgriffith$elm_codegen$Internal$Compiler$denode(fields)
                              ),
                              an: fieldName
                            }
                          )
                        ]
                      )
                    );
                  }
                case 0:
                  var nameOfRecord = type_.a;
                  return A2(
                    $mdgriffith$elm_codegen$Internal$Compiler$inferRecordField,
                    index,
                    { bE: fieldName, cl: nameOfRecord }
                  );
                case 1:
                  var nodedModAndName = type_.a;
                  var vars = type_.b;
                  var _v3 = A2($mdgriffith$elm_codegen$Internal$Compiler$getAlias, nodedModAndName, aliases);
                  if (_v3.$ === 1) {
                    return $elm$core$Result$Err(
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Internal$Compiler$AttemptingGetOnTypeNameNotAnAlias(
                            { an: fieldName, X: type_ }
                          )
                        ]
                      )
                    );
                  } else {
                    var aliased = _v3.a;
                    var $temp$index = index, $temp$type_ = aliased.ai, $temp$aliases = aliases, $temp$inferences = inferences, $temp$fieldName = fieldName;
                    index = $temp$index;
                    type_ = $temp$type_;
                    aliases = $temp$aliases;
                    inferences = $temp$inferences;
                    fieldName = $temp$fieldName;
                    continue resolveField;
                  }
                case 3:
                  return $elm$core$Result$Err(
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType(
                          { an: fieldName, X: type_ }
                        )
                      ]
                    )
                  );
                case 2:
                  return $elm$core$Result$Err(
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType(
                          { an: fieldName, X: type_ }
                        )
                      ]
                    )
                  );
                default:
                  return $elm$core$Result$Err(
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType(
                          { an: fieldName, X: type_ }
                        )
                      ]
                    )
                  );
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Elm$get = F2(
        function(unformattedFieldName, recordExpression) {
          return function(index) {
            var fieldName = $mdgriffith$elm_codegen$Internal$Compiler$formatValue(unformattedFieldName);
            var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, recordExpression);
            var expr = _v0.b;
            return {
              Z: function() {
                var _v1 = expr.Z;
                if (!_v1.$) {
                  var recordAnn = _v1.a;
                  return A5($mdgriffith$elm_codegen$Internal$Compiler$resolveField, index, recordAnn.$7, recordAnn.dE, recordAnn.d, fieldName);
                } else {
                  var otherwise = _v1;
                  return otherwise;
                }
              }(),
              a: A2(
                $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess,
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr.a),
                $mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName)
              ),
              b: expr.b
            };
          };
        }
      );
      var $author$project$Generate$Action$encodeActionBranch = function(action) {
        return A3(
          $mdgriffith$elm_codegen$Elm$Case$branch1,
          $elm_community$string_extra$String$Extra$camelize(action.x),
          _Utils_Tuple2(
            "args",
            $author$project$Generate$Action$actionParameter(action)
          ),
          function(argsRecord) {
            return $author$project$Gen$Json$Encode$object(
              A2(
                $elm$core$List$map,
                function(argument) {
                  return A2(
                    $mdgriffith$elm_codegen$Elm$tuple,
                    $mdgriffith$elm_codegen$Elm$string(argument.x),
                    A2(
                      $mdgriffith$elm_codegen$Elm$Op$pipe,
                      $author$project$EosType$generateEncoder(argument.$7),
                      A2(
                        $mdgriffith$elm_codegen$Elm$get,
                        $elm_community$string_extra$String$Extra$camelize(argument.x),
                        argsRecord
                      )
                    )
                  );
                },
                action.a6
              )
            );
          }
        );
      };
      var $mdgriffith$elm_codegen$Elm$fn = F2(
        function(_v0, toExpression) {
          var oneBaseName = _v0.a;
          var maybeAnnotation = _v0.b;
          return $mdgriffith$elm_codegen$Internal$Compiler$expression(
            function(index) {
              var one = A3($mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType, index, oneBaseName, maybeAnnotation);
              var _v1 = toExpression(one.n);
              var toExpr = _v1;
              var _return = toExpr(one.bV);
              return {
                Z: function() {
                  var _v2 = _return.Z;
                  if (_v2.$ === 1) {
                    var err = _v2.a;
                    return _return.Z;
                  } else {
                    var returnAnnotation = _v2.a;
                    return $elm$core$Result$Ok(
                      {
                        dE: returnAnnotation.dE,
                        d: returnAnnotation.d,
                        $7: A2(
                          $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(one.$7),
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.$7)
                        )
                      }
                    );
                  }
                }(),
                a: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
                  {
                    s: _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.x)
                        )
                      ]
                    ),
                    a: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.a)
                  }
                ),
                b: _return.b
              };
            }
          );
        }
      );
      var $author$project$Generate$Action$encodeSingleAction = function(actions) {
        return A2(
          $mdgriffith$elm_codegen$Elm$withDocumentation,
          "Turn an [Action](#Action) into a JSON value. If you want to send the action to the blockchain, use [encode](#encode) instead.",
          A2(
            $mdgriffith$elm_codegen$Elm$declaration,
            "encodeSingleAction",
            A2(
              $mdgriffith$elm_codegen$Elm$withType,
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action")
                  ]
                ),
                $author$project$Gen$Json$Encode$annotation_.dq
              ),
              A2(
                $mdgriffith$elm_codegen$Elm$fn,
                _Utils_Tuple2(
                  "action",
                  $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action")
                        ]
                      ),
                      $author$project$Gen$Json$Encode$annotation_.dq
                    )
                  )
                ),
                function(actionToEncode) {
                  return A3(
                    $mdgriffith$elm_codegen$Elm$Case$custom,
                    actionToEncode,
                    A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action"),
                    A2($elm$core$List$map, $author$project$Generate$Action$encodeActionBranch, actions)
                  );
                }
              )
            )
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$Exposed = function(a) {
        return { $: 1, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$exposeWith = F2(
        function(opts, decl) {
          switch (decl.$) {
            case 1:
              return decl;
            case 2:
              return decl;
            default:
              var imports = decl.b;
              var body = decl.c;
              return A3(
                $mdgriffith$elm_codegen$Internal$Compiler$Declaration,
                $mdgriffith$elm_codegen$Internal$Compiler$Exposed(opts),
                imports,
                body
              );
          }
        }
      );
      var $mdgriffith$elm_codegen$Elm$exposeWith = $mdgriffith$elm_codegen$Internal$Compiler$exposeWith;
      var $mdgriffith$elm_codegen$Internal$Compiler$fullModName = function(name) {
        return A2($elm$core$String$join, ".", name);
      };
      var $mdgriffith$elm_codegen$Elm$addImports = F3(
        function(self, newImports, _v0) {
          addImports:
            while (true) {
              var set = _v0.a;
              var deduped = _v0.b;
              if (!newImports.b) {
                return _Utils_Tuple2(set, deduped);
              } else {
                var _new = newImports.a;
                var remain = newImports.b;
                var full = $mdgriffith$elm_codegen$Internal$Compiler$fullModName(_new);
                if (A2($elm$core$Set$member, full, set) || _Utils_eq(
                  full,
                  $mdgriffith$elm_codegen$Internal$Compiler$fullModName(self)
                )) {
                  var $temp$self = self, $temp$newImports = remain, $temp$_v0 = _Utils_Tuple2(set, deduped);
                  self = $temp$self;
                  newImports = $temp$newImports;
                  _v0 = $temp$_v0;
                  continue addImports;
                } else {
                  var $temp$self = self, $temp$newImports = remain, $temp$_v0 = _Utils_Tuple2(
                    A2($elm$core$Set$insert, full, set),
                    A2($elm$core$List$cons, _new, deduped)
                  );
                  self = $temp$self;
                  newImports = $temp$newImports;
                  _v0 = $temp$_v0;
                  continue addImports;
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Elm$reduceDeclarationImports = F3(
        function(self, decs, imports) {
          reduceDeclarationImports:
            while (true) {
              if (!decs.b) {
                return imports;
              } else {
                switch (decs.a.$) {
                  case 1:
                    var remain = decs.b;
                    var $temp$self = self, $temp$decs = remain, $temp$imports = imports;
                    self = $temp$self;
                    decs = $temp$decs;
                    imports = $temp$imports;
                    continue reduceDeclarationImports;
                  case 2:
                    var remain = decs.b;
                    var $temp$self = self, $temp$decs = remain, $temp$imports = imports;
                    self = $temp$self;
                    decs = $temp$decs;
                    imports = $temp$imports;
                    continue reduceDeclarationImports;
                  default:
                    var _v1 = decs.a;
                    var newImports = _v1.b;
                    var body = _v1.c;
                    var remain = decs.b;
                    var $temp$self = self, $temp$decs = remain, $temp$imports = A3($mdgriffith$elm_codegen$Elm$addImports, self, newImports, imports);
                    self = $temp$self;
                    decs = $temp$decs;
                    imports = $temp$imports;
                    continue reduceDeclarationImports;
                }
              }
            }
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function(a) {
        return { $: 0, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function(a) {
        return { $: 1, a };
      };
      var $mdgriffith$elm_codegen$Internal$Comments$Markdown = function(a) {
        return { $: 0, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function(a) {
        return { $: 0, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function(a) {
        return { $: 1, a };
      };
      var $mdgriffith$elm_codegen$Internal$Comments$Comment = $elm$core$Basics$identity;
      var $mdgriffith$elm_codegen$Internal$Comments$addPart = F2(
        function(_v0, part) {
          var parts = _v0;
          return A2($elm$core$List$cons, part, parts);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Comments$emptyComment = _List_Nil;
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function(a) {
        return { $: 1, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function(a) {
        return { $: 3, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function(a) {
        return { $: 2, a };
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getExposed = function(decls) {
        return A2(
          $elm$core$List$filterMap,
          function(decl) {
            switch (decl.$) {
              case 1:
                return $elm$core$Maybe$Nothing;
              case 2:
                var source = decl.a;
                return $elm$core$Maybe$Nothing;
              default:
                var exp = decl.a;
                var decBody = decl.c;
                if (!exp.$) {
                  return $elm$core$Maybe$Nothing;
                } else {
                  var details = exp.a;
                  switch (decBody.$) {
                    case 0:
                      var fn = decBody.a;
                      var fnName = $mdgriffith$elm_codegen$Internal$Compiler$denode(
                        function($) {
                          return $.x;
                        }(
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(fn.bp)
                        )
                      );
                      return $elm$core$Maybe$Just(
                        $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose(fnName)
                      );
                    case 1:
                      var synonym = decBody.a;
                      var aliasName = $mdgriffith$elm_codegen$Internal$Compiler$denode(synonym.x);
                      return $elm$core$Maybe$Just(
                        $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(aliasName)
                      );
                    case 2:
                      var myType = decBody.a;
                      var typeName = $mdgriffith$elm_codegen$Internal$Compiler$denode(myType.x);
                      return details.T ? $elm$core$Maybe$Just(
                        $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
                          {
                            x: typeName,
                            eA: $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
                          }
                        )
                      ) : $elm$core$Maybe$Just(
                        $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(typeName)
                      );
                    case 3:
                      var myPort = decBody.a;
                      var typeName = $mdgriffith$elm_codegen$Internal$Compiler$denode(myPort.x);
                      return $elm$core$Maybe$Just(
                        $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose(typeName)
                      );
                    case 4:
                      var inf = decBody.a;
                      return $elm$core$Maybe$Nothing;
                    default:
                      return $elm$core$Maybe$Nothing;
                  }
                }
            }
          },
          decls
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$declName = function(decl) {
        switch (decl.$) {
          case 1:
            return $elm$core$Maybe$Nothing;
          case 2:
            return $elm$core$Maybe$Nothing;
          default:
            var exp = decl.a;
            var decBody = decl.c;
            switch (decBody.$) {
              case 0:
                var fn = decBody.a;
                return $elm$core$Maybe$Just(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(
                    function($) {
                      return $.x;
                    }(
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(fn.bp)
                    )
                  )
                );
              case 1:
                var synonym = decBody.a;
                return $elm$core$Maybe$Just(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(synonym.x)
                );
              case 2:
                var myType = decBody.a;
                return $elm$core$Maybe$Just(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(myType.x)
                );
              case 3:
                var myPort = decBody.a;
                return $elm$core$Maybe$Just(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(myPort.x)
                );
              case 4:
                var inf = decBody.a;
                return $elm$core$Maybe$Nothing;
              default:
                return $elm$core$Maybe$Nothing;
            }
        }
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$matchName = F2(
        function(one, two) {
          if (one.$ === 1) {
            if (two.$ === 1) {
              return true;
            } else {
              return false;
            }
          } else {
            var oneName = one.a;
            if (two.$ === 1) {
              return false;
            } else {
              var twoName = two.a;
              return _Utils_eq(oneName, twoName);
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$groupExposing = function(items) {
        return A3(
          $elm$core$List$foldr,
          F2(
            function(_v0, acc) {
              var maybeGroup = _v0.a;
              var name = _v0.b;
              if (!acc.b) {
                return _List_fromArray(
                  [
                    {
                      U: maybeGroup,
                      cg: _List_fromArray(
                        [name]
                      )
                    }
                  ]
                );
              } else {
                var top = acc.a;
                var groups = acc.b;
                return A2($mdgriffith$elm_codegen$Internal$Compiler$matchName, maybeGroup, top.U) ? A2(
                  $elm$core$List$cons,
                  {
                    U: top.U,
                    cg: A2($elm$core$List$cons, name, top.cg)
                  },
                  groups
                ) : A2(
                  $elm$core$List$cons,
                  {
                    U: maybeGroup,
                    cg: _List_fromArray(
                      [name]
                    )
                  },
                  acc
                );
              }
            }
          ),
          _List_Nil,
          items
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getExposedGroups = function(decls) {
        return $mdgriffith$elm_codegen$Internal$Compiler$groupExposing(
          A2(
            $elm$core$List$sortBy,
            function(_v3) {
              var group = _v3.a;
              if (group.$ === 1) {
                return "zzzzzzzzz";
              } else {
                var name = group.a;
                return name;
              }
            },
            A2(
              $elm$core$List$filterMap,
              function(decl) {
                switch (decl.$) {
                  case 1:
                    return $elm$core$Maybe$Nothing;
                  case 2:
                    return $elm$core$Maybe$Nothing;
                  default:
                    var exp = decl.a;
                    if (!exp.$) {
                      return $elm$core$Maybe$Nothing;
                    } else {
                      var details = exp.a;
                      var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$declName(decl);
                      if (_v2.$ === 1) {
                        return $elm$core$Maybe$Nothing;
                      } else {
                        var name = _v2.a;
                        return $elm$core$Maybe$Just(
                          _Utils_Tuple2(details.U, name)
                        );
                      }
                    }
                }
              },
              decls
            )
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$hasPorts = function(decls) {
        return A2(
          $elm$core$List$any,
          function(decl) {
            switch (decl.$) {
              case 1:
                return false;
              case 2:
                return false;
              default:
                var exp = decl.a;
                var decBody = decl.c;
                if (!exp.$) {
                  return false;
                } else {
                  if (decBody.$ === 3) {
                    var myPort = decBody.a;
                    return true;
                  } else {
                    return false;
                  }
                }
            }
          },
          decls
        );
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$builtIn = function(name) {
        _v0$4:
          while (true) {
            if (name.b && !name.b.b) {
              switch (name.a) {
                case "List":
                  return true;
                case "Maybe":
                  return true;
                case "String":
                  return true;
                case "Basics":
                  return true;
                default:
                  break _v0$4;
              }
            } else {
              break _v0$4;
            }
          }
        return false;
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$findAlias = F2(
        function(modName, aliases) {
          findAlias:
            while (true) {
              if (!aliases.b) {
                return $elm$core$Maybe$Nothing;
              } else {
                var _v1 = aliases.a;
                var aliasModName = _v1.a;
                var alias = _v1.b;
                var remain = aliases.b;
                if (_Utils_eq(modName, aliasModName)) {
                  return $elm$core$Maybe$Just(alias);
                } else {
                  var $temp$modName = modName, $temp$aliases = remain;
                  modName = $temp$modName;
                  aliases = $temp$aliases;
                  continue findAlias;
                }
              }
            }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$makeImport = F2(
        function(aliases, name) {
          if (!name.b) {
            return $elm$core$Maybe$Nothing;
          } else {
            var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$findAlias, name, aliases);
            if (_v1.$ === 1) {
              return $mdgriffith$elm_codegen$Internal$Compiler$builtIn(name) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
                {
                  d1: $elm$core$Maybe$Nothing,
                  ch: $elm$core$Maybe$Nothing,
                  ci: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
                }
              );
            } else {
              var alias = _v1.a;
              return $elm$core$Maybe$Just(
                {
                  d1: $elm$core$Maybe$Nothing,
                  ch: $elm$core$Maybe$Just(
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      _List_fromArray(
                        [alias]
                      )
                    )
                  ),
                  ci: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
                }
              );
            }
          }
        }
      );
      var $the_sett$elm_pretty_printer$Internals$Concatenate = F2(
        function(a, b) {
          return { $: 1, a, b };
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$append = F2(
        function(doc1, doc2) {
          return A2(
            $the_sett$elm_pretty_printer$Internals$Concatenate,
            function(_v0) {
              return doc1;
            },
            function(_v1) {
              return doc2;
            }
          );
        }
      );
      var $elm_community$basics_extra$Basics$Extra$flip = F3(
        function(f, b, a) {
          return A2(f, a, b);
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$a = $elm_community$basics_extra$Basics$Extra$flip($the_sett$elm_pretty_printer$Pretty$append);
      var $the_sett$elm_pretty_printer$Internals$Line = F2(
        function(a, b) {
          return { $: 4, a, b };
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$line = A2($the_sett$elm_pretty_printer$Internals$Line, " ", "");
      var $the_sett$elm_pretty_printer$Internals$Empty = { $: 0 };
      var $the_sett$elm_pretty_printer$Pretty$empty = $the_sett$elm_pretty_printer$Internals$Empty;
      var $the_sett$elm_pretty_printer$Pretty$join = F2(
        function(sep, docs) {
          join:
            while (true) {
              if (!docs.b) {
                return $the_sett$elm_pretty_printer$Pretty$empty;
              } else {
                if (!docs.a.$) {
                  var _v1 = docs.a;
                  var ds = docs.b;
                  var $temp$sep = sep, $temp$docs = ds;
                  sep = $temp$sep;
                  docs = $temp$docs;
                  continue join;
                } else {
                  var d = docs.a;
                  var ds = docs.b;
                  var step = F2(
                    function(x, rest) {
                      if (!x.$) {
                        return rest;
                      } else {
                        var doc = x;
                        return A2(
                          $the_sett$elm_pretty_printer$Pretty$append,
                          sep,
                          A2($the_sett$elm_pretty_printer$Pretty$append, doc, rest)
                        );
                      }
                    }
                  );
                  var spersed = A3($elm$core$List$foldr, step, $the_sett$elm_pretty_printer$Pretty$empty, ds);
                  return A2($the_sett$elm_pretty_printer$Pretty$append, d, spersed);
                }
              }
            }
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$lines = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$line);
      var $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$Compiler$denode);
      var $mdgriffith$elm_codegen$Internal$Compiler$denodeAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$Compiler$denode);
      var $the_sett$elm_pretty_printer$Internals$Text = F2(
        function(a, b) {
          return { $: 3, a, b };
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$char = function(c) {
        return A2(
          $the_sett$elm_pretty_printer$Internals$Text,
          $elm$core$String$fromChar(c),
          $elm$core$Maybe$Nothing
        );
      };
      var $the_sett$elm_pretty_printer$Pretty$surround = F3(
        function(left, right, doc) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$append,
            A2($the_sett$elm_pretty_printer$Pretty$append, left, doc),
            right
          );
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$parens = function(doc) {
        return A3(
          $the_sett$elm_pretty_printer$Pretty$surround,
          $the_sett$elm_pretty_printer$Pretty$char("("),
          $the_sett$elm_pretty_printer$Pretty$char(")"),
          doc
        );
      };
      var $the_sett$elm_pretty_printer$Pretty$string = function(val) {
        return A2($the_sett$elm_pretty_printer$Internals$Text, val, $elm$core$Maybe$Nothing);
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExpose = function(tlExpose) {
        switch (tlExpose.$) {
          case 0:
            var val = tlExpose.a;
            return $the_sett$elm_pretty_printer$Pretty$parens(
              $the_sett$elm_pretty_printer$Pretty$string(val)
            );
          case 1:
            var val = tlExpose.a;
            return $the_sett$elm_pretty_printer$Pretty$string(val);
          case 2:
            var val = tlExpose.a;
            return $the_sett$elm_pretty_printer$Pretty$string(val);
          default:
            var exposedType = tlExpose.a;
            var _v1 = exposedType.eA;
            if (_v1.$ === 1) {
              return $the_sett$elm_pretty_printer$Pretty$string(exposedType.x);
            } else {
              return A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $the_sett$elm_pretty_printer$Pretty$string("(..)"),
                $the_sett$elm_pretty_printer$Pretty$string(exposedType.x)
              );
            }
        }
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExposes = function(exposes) {
        return A2(
          $the_sett$elm_pretty_printer$Pretty$join,
          $the_sett$elm_pretty_printer$Pretty$string(", "),
          A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExpose, exposes)
        );
      };
      var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function(a) {
        return { $: 0, a };
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineTopLevelExposes = function(exposes) {
        if (!exposes.b) {
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose("");
        } else {
          var hd = exposes.a;
          var tl = exposes.b;
          return A3(
            $elm$core$List$foldl,
            F2(
              function(exp, result) {
                var _v1 = _Utils_Tuple2(exp, result);
                if (_v1.a.$ === 3) {
                  var typeExpose = _v1.a.a;
                  var _v2 = typeExpose.eA;
                  if (!_v2.$) {
                    return exp;
                  } else {
                    return result;
                  }
                } else {
                  if (_v1.b.$ === 3) {
                    var typeExpose = _v1.b.a;
                    var _v3 = typeExpose.eA;
                    if (!_v3.$) {
                      return result;
                    } else {
                      return exp;
                    }
                  } else {
                    return result;
                  }
                }
              }
            ),
            hd,
            tl
          );
        }
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName = function(tle) {
        switch (tle.$) {
          case 0:
            var val = tle.a;
            return val;
          case 1:
            var val = tle.a;
            return val;
          case 2:
            var val = tle.a;
            return val;
          default:
            var exposedType = tle.a;
            return exposedType.x;
        }
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByExposingName = function(innerImports) {
        var _v0 = function() {
          if (!innerImports.b) {
            return _Utils_Tuple3(
              "",
              _List_Nil,
              _List_fromArray(
                [_List_Nil]
              )
            );
          } else {
            var hd = innerImports.a;
            return A3(
              $elm$core$List$foldl,
              F2(
                function(exp, _v2) {
                  var currName = _v2.a;
                  var currAccum = _v2.b;
                  var accum = _v2.c;
                  var nextName = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(exp);
                  return _Utils_eq(nextName, currName) ? _Utils_Tuple3(
                    currName,
                    A2($elm$core$List$cons, exp, currAccum),
                    accum
                  ) : _Utils_Tuple3(
                    nextName,
                    _List_fromArray(
                      [exp]
                    ),
                    A2($elm$core$List$cons, currAccum, accum)
                  );
                }
              ),
              _Utils_Tuple3(
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(hd),
                _List_Nil,
                _List_Nil
              ),
              innerImports
            );
          }
        }();
        var hdGroup = _v0.b;
        var remGroups = _v0.c;
        return $elm$core$List$reverse(
          A2($elm$core$List$cons, hdGroup, remGroups)
        );
      };
      var $elm$core$List$sortWith = _List_sortWith;
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder = F2(
        function(tlel, tler) {
          var _v0 = _Utils_Tuple2(tlel, tler);
          if (!_v0.a.$) {
            if (!_v0.b.$) {
              return A2(
                $elm$core$Basics$compare,
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tlel),
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tler)
              );
            } else {
              return 0;
            }
          } else {
            if (!_v0.b.$) {
              return 2;
            } else {
              return A2(
                $elm$core$Basics$compare,
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tlel),
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tler)
              );
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings = function(tlExposings) {
        return A2(
          $elm$core$List$map,
          $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineTopLevelExposes,
          $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByExposingName(
            A2($elm$core$List$sortWith, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder, tlExposings)
          )
        );
      };
      var $the_sett$elm_pretty_printer$Pretty$space = $the_sett$elm_pretty_printer$Pretty$char(" ");
      var $mdgriffith$elm_codegen$Internal$Write$prettyExposing = function(exposing_) {
        var exposings = function() {
          if (!exposing_.$) {
            return $the_sett$elm_pretty_printer$Pretty$parens(
              $the_sett$elm_pretty_printer$Pretty$string("..")
            );
          } else {
            var tll = exposing_.a;
            return $the_sett$elm_pretty_printer$Pretty$parens(
              $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExposes(
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings(
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(tll)
                )
              )
            );
          }
        }();
        return A2(
          $the_sett$elm_pretty_printer$Pretty$a,
          exposings,
          A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$space,
            $the_sett$elm_pretty_printer$Pretty$string("exposing")
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyMaybe = F2(
        function(prettyFn, maybeVal) {
          return A2(
            $elm$core$Maybe$withDefault,
            $the_sett$elm_pretty_printer$Pretty$empty,
            A2($elm$core$Maybe$map, prettyFn, maybeVal)
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$dot = $the_sett$elm_pretty_printer$Pretty$string(".");
      var $mdgriffith$elm_codegen$Internal$Write$prettyModuleName = function(name) {
        return A2(
          $the_sett$elm_pretty_printer$Pretty$join,
          $mdgriffith$elm_codegen$Internal$Write$dot,
          A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name)
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameAlias = function(name) {
        if (!name.b) {
          return $the_sett$elm_pretty_printer$Pretty$empty;
        } else {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            A2(
              $the_sett$elm_pretty_printer$Pretty$join,
              $mdgriffith$elm_codegen$Internal$Write$dot,
              A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name)
            ),
            $the_sett$elm_pretty_printer$Pretty$string("as ")
          );
        }
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyImport = function(import_) {
        return A2(
          $the_sett$elm_pretty_printer$Pretty$join,
          $the_sett$elm_pretty_printer$Pretty$space,
          _List_fromArray(
            [
              $the_sett$elm_pretty_printer$Pretty$string("import"),
              $mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(import_.ci)
              ),
              A2(
                $mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
                $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameAlias,
                $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(import_.ch)
              ),
              A2(
                $mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
                $mdgriffith$elm_codegen$Internal$Write$prettyExposing,
                $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(import_.d1)
              )
            ]
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode);
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode);
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify = function(exp) {
        return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify);
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings = F2(
        function(left, right) {
          var _v0 = _Utils_Tuple2(left, right);
          if (!_v0.a.$) {
            var range = _v0.a.a;
            return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
          } else {
            if (!_v0.b.$) {
              var range = _v0.b.a;
              return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
            } else {
              var leftNodes = _v0.a.a;
              var rightNodes = _v0.b.a;
              return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll(
                  A2(
                    $elm$core$List$append,
                    $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll(leftNodes),
                    $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll(rightNodes)
                  )
                )
              );
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings = F2(
        function(maybeLeft, maybeRight) {
          var _v0 = _Utils_Tuple2(maybeLeft, maybeRight);
          if (_v0.a.$ === 1) {
            if (_v0.b.$ === 1) {
              var _v1 = _v0.a;
              var _v2 = _v0.b;
              return $elm$core$Maybe$Nothing;
            } else {
              var _v4 = _v0.a;
              var right = _v0.b.a;
              return $elm$core$Maybe$Just(right);
            }
          } else {
            if (_v0.b.$ === 1) {
              var left = _v0.a.a;
              var _v3 = _v0.b;
              return $elm$core$Maybe$Just(left);
            } else {
              var left = _v0.a.a;
              var right = _v0.b.a;
              return $elm$core$Maybe$Just(
                A2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings, left, right)
              );
            }
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify);
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$or = F2(
        function(ma, mb) {
          if (ma.$ === 1) {
            return mb;
          } else {
            return ma;
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposing = function(exp) {
        if (!exp.$) {
          var range = exp.a;
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
        } else {
          var nodes = exp.a;
          return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
            $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll(
              $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings(
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll(nodes)
              )
            )
          );
        }
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineImports = function(innerImports) {
        if (!innerImports.b) {
          return {
            d1: $elm$core$Maybe$Nothing,
            ch: $elm$core$Maybe$Nothing,
            ci: $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify(_List_Nil)
          };
        } else {
          var hd = innerImports.a;
          var tl = innerImports.b;
          var combinedImports = A3(
            $elm$core$List$foldl,
            F2(
              function(imp, result) {
                return {
                  d1: $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe(
                    A2(
                      $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings,
                      $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe(imp.d1),
                      $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe(result.d1)
                    )
                  ),
                  ch: A2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$or, imp.ch, result.ch),
                  ci: imp.ci
                };
              }
            ),
            hd,
            tl
          );
          return _Utils_update(
            combinedImports,
            {
              d1: A2(
                $elm$core$Maybe$map,
                A2(
                  $elm$core$Basics$composeR,
                  $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode,
                  A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposing, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify)
                ),
                combinedImports.d1
              )
            }
          );
        }
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByModuleName = function(innerImports) {
        var _v0 = function() {
          if (!innerImports.b) {
            return _Utils_Tuple3(
              _List_Nil,
              _List_Nil,
              _List_fromArray(
                [_List_Nil]
              )
            );
          } else {
            var hd = innerImports.a;
            return A3(
              $elm$core$List$foldl,
              F2(
                function(imp, _v2) {
                  var currName = _v2.a;
                  var currAccum = _v2.b;
                  var accum = _v2.c;
                  var nextName = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(imp.ci);
                  return _Utils_eq(nextName, currName) ? _Utils_Tuple3(
                    currName,
                    A2($elm$core$List$cons, imp, currAccum),
                    accum
                  ) : _Utils_Tuple3(
                    nextName,
                    _List_fromArray(
                      [imp]
                    ),
                    A2($elm$core$List$cons, currAccum, accum)
                  );
                }
              ),
              _Utils_Tuple3(
                $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(hd.ci),
                _List_Nil,
                _List_Nil
              ),
              innerImports
            );
          }
        }();
        var hdGroup = _v0.b;
        var remGroups = _v0.c;
        return $elm$core$List$reverse(
          A2($elm$core$List$cons, hdGroup, remGroups)
        );
      };
      var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupImports = function(imports) {
        var impName = function(imp) {
          return $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(imp.ci);
        };
        return A2(
          $elm$core$List$map,
          $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineImports,
          $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByModuleName(
            A2($elm$core$List$sortBy, impName, imports)
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyImports = function(imports) {
        return $the_sett$elm_pretty_printer$Pretty$lines(
          A2(
            $elm$core$List$map,
            $mdgriffith$elm_codegen$Internal$Write$prettyImport,
            $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupImports(imports)
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$importsPretty = function(imports) {
        if (!imports.b) {
          return $the_sett$elm_pretty_printer$Pretty$line;
        } else {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$line,
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              $the_sett$elm_pretty_printer$Pretty$line,
              A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $the_sett$elm_pretty_printer$Pretty$line,
                $mdgriffith$elm_codegen$Internal$Write$prettyImports(imports)
              )
            )
          );
        }
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyComments = function(comments) {
        if (!comments.b) {
          return $the_sett$elm_pretty_printer$Pretty$empty;
        } else {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$line,
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              $the_sett$elm_pretty_printer$Pretty$line,
              $the_sett$elm_pretty_printer$Pretty$lines(
                A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, comments)
              )
            )
          );
        }
      };
      var $the_sett$elm_pretty_printer$Internals$Nest = F2(
        function(a, b) {
          return { $: 2, a, b };
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$nest = F2(
        function(depth, doc) {
          return A2(
            $the_sett$elm_pretty_printer$Internals$Nest,
            depth,
            function(_v0) {
              return doc;
            }
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyDocumentation = function(docs) {
        return A2($elm$core$String$contains, "\n", docs) ? $the_sett$elm_pretty_printer$Pretty$string("{-| " + (docs + "\n-}")) : $the_sett$elm_pretty_printer$Pretty$string("{-| " + (docs + " -}"));
      };
      var $the_sett$elm_pretty_printer$Internals$Union = F2(
        function(a, b) {
          return { $: 5, a, b };
        }
      );
      var $the_sett$elm_pretty_printer$Internals$flatten = function(doc) {
        flatten:
          while (true) {
            switch (doc.$) {
              case 1:
                var doc1 = doc.a;
                var doc2 = doc.b;
                return A2(
                  $the_sett$elm_pretty_printer$Internals$Concatenate,
                  function(_v1) {
                    return $the_sett$elm_pretty_printer$Internals$flatten(
                      doc1(0)
                    );
                  },
                  function(_v2) {
                    return $the_sett$elm_pretty_printer$Internals$flatten(
                      doc2(0)
                    );
                  }
                );
              case 2:
                var i = doc.a;
                var doc1 = doc.b;
                return A2(
                  $the_sett$elm_pretty_printer$Internals$Nest,
                  i,
                  function(_v3) {
                    return $the_sett$elm_pretty_printer$Internals$flatten(
                      doc1(0)
                    );
                  }
                );
              case 5:
                var doc1 = doc.a;
                var doc2 = doc.b;
                var $temp$doc = doc1;
                doc = $temp$doc;
                continue flatten;
              case 4:
                var hsep = doc.a;
                return A2($the_sett$elm_pretty_printer$Internals$Text, hsep, $elm$core$Maybe$Nothing);
              case 6:
                var fn = doc.a;
                var $temp$doc = fn(0);
                doc = $temp$doc;
                continue flatten;
              case 7:
                var fn = doc.a;
                var $temp$doc = fn(0);
                doc = $temp$doc;
                continue flatten;
              default:
                var x = doc;
                return x;
            }
          }
      };
      var $the_sett$elm_pretty_printer$Pretty$group = function(doc) {
        return A2(
          $the_sett$elm_pretty_printer$Internals$Union,
          $the_sett$elm_pretty_printer$Internals$flatten(doc),
          doc
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$isNakedCompound = function(typeAnn) {
        switch (typeAnn.$) {
          case 1:
            if (!typeAnn.b.b) {
              return false;
            } else {
              var args = typeAnn.b;
              return true;
            }
          case 6:
            return true;
          default:
            return false;
        }
      };
      var $elm$core$Tuple$mapBoth = F3(
        function(funcA, funcB, _v0) {
          var x = _v0.a;
          var y = _v0.b;
          return _Utils_Tuple2(
            funcA(x),
            funcB(y)
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot = F2(
        function(aliases, name) {
          if (!name.b) {
            return $the_sett$elm_pretty_printer$Pretty$empty;
          } else {
            var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$findAlias, name, aliases);
            if (_v1.$ === 1) {
              return A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $mdgriffith$elm_codegen$Internal$Write$dot,
                A2(
                  $the_sett$elm_pretty_printer$Pretty$join,
                  $mdgriffith$elm_codegen$Internal$Write$dot,
                  A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name)
                )
              );
            } else {
              var alias = _v1.a;
              return A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $mdgriffith$elm_codegen$Internal$Write$dot,
                $the_sett$elm_pretty_printer$Pretty$string(alias)
              );
            }
          }
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$separators = function(sep) {
        return $the_sett$elm_pretty_printer$Pretty$join(
          A2($the_sett$elm_pretty_printer$Internals$Line, sep, sep)
        );
      };
      var $the_sett$elm_pretty_printer$Pretty$words = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$space);
      var $mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn = F2(
        function(aliases, _v8) {
          var name = _v8.a;
          var ann = _v8.b;
          return $the_sett$elm_pretty_printer$Pretty$group(
            A2(
              $the_sett$elm_pretty_printer$Pretty$nest,
              4,
              $the_sett$elm_pretty_printer$Pretty$lines(
                _List_fromArray(
                  [
                    $the_sett$elm_pretty_printer$Pretty$words(
                      _List_fromArray(
                        [
                          $the_sett$elm_pretty_printer$Pretty$string(name),
                          $the_sett$elm_pretty_printer$Pretty$string(":")
                        ]
                      )
                    ),
                    A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, ann)
                  ]
                )
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation = F3(
        function(aliases, left, right) {
          var expandLeft = function(ann) {
            if (ann.$ === 6) {
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens, aliases, ann);
            } else {
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, ann);
            }
          };
          var innerFnTypeAnn = F2(
            function(innerLeft, innerRight) {
              var rightSide = expandRight(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(innerRight)
              );
              if (rightSide.b) {
                var hd = rightSide.a;
                var tl = rightSide.b;
                return A2(
                  $elm$core$List$cons,
                  expandLeft(
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(innerLeft)
                  ),
                  A2(
                    $elm$core$List$cons,
                    $the_sett$elm_pretty_printer$Pretty$words(
                      _List_fromArray(
                        [
                          $the_sett$elm_pretty_printer$Pretty$string("->"),
                          hd
                        ]
                      )
                    ),
                    tl
                  )
                );
              } else {
                return _List_Nil;
              }
            }
          );
          var expandRight = function(ann) {
            if (ann.$ === 6) {
              var innerLeft = ann.a;
              var innerRight = ann.b;
              return A2(innerFnTypeAnn, innerLeft, innerRight);
            } else {
              return _List_fromArray(
                [
                  A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, ann)
                ]
              );
            }
          };
          return $the_sett$elm_pretty_printer$Pretty$group(
            $the_sett$elm_pretty_printer$Pretty$lines(
              A2(innerFnTypeAnn, left, right)
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord = F3(
        function(aliases, paramName, fields) {
          var open = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$line,
            $the_sett$elm_pretty_printer$Pretty$words(
              _List_fromArray(
                [
                  $the_sett$elm_pretty_printer$Pretty$string("{"),
                  $the_sett$elm_pretty_printer$Pretty$string(paramName)
                ]
              )
            )
          );
          var close = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string("}"),
            $the_sett$elm_pretty_printer$Pretty$line
          );
          var addBarToFirst = function(exprs) {
            if (!exprs.b) {
              return _List_Nil;
            } else {
              var hd = exprs.a;
              var tl = exprs.b;
              return A2(
                $elm$core$List$cons,
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  hd,
                  $the_sett$elm_pretty_printer$Pretty$string("| ")
                ),
                tl
              );
            }
          };
          if (!fields.b) {
            return $the_sett$elm_pretty_printer$Pretty$string("{}");
          } else {
            return $the_sett$elm_pretty_printer$Pretty$group(
              A3(
                $the_sett$elm_pretty_printer$Pretty$surround,
                $the_sett$elm_pretty_printer$Pretty$empty,
                close,
                A2(
                  $the_sett$elm_pretty_printer$Pretty$nest,
                  4,
                  A2(
                    $the_sett$elm_pretty_printer$Pretty$a,
                    A2(
                      $the_sett$elm_pretty_printer$Pretty$separators,
                      ", ",
                      addBarToFirst(
                        A2(
                          $elm$core$List$map,
                          $mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn(aliases),
                          A2(
                            $elm$core$List$map,
                            A2($elm$core$Tuple$mapBoth, $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denode),
                            fields
                          )
                        )
                      )
                    ),
                    open
                  )
                )
              )
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyRecord = F2(
        function(aliases, fields) {
          var open = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$space,
            $the_sett$elm_pretty_printer$Pretty$string("{")
          );
          var close = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string("}"),
            $the_sett$elm_pretty_printer$Pretty$line
          );
          if (!fields.b) {
            return $the_sett$elm_pretty_printer$Pretty$string("{}");
          } else {
            return $the_sett$elm_pretty_printer$Pretty$group(
              A3(
                $the_sett$elm_pretty_printer$Pretty$surround,
                open,
                close,
                A2(
                  $the_sett$elm_pretty_printer$Pretty$separators,
                  ", ",
                  A2(
                    $elm$core$List$map,
                    $mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn(aliases),
                    A2(
                      $elm$core$List$map,
                      A2($elm$core$Tuple$mapBoth, $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denode),
                      fields
                    )
                  )
                )
              )
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyTupled = F2(
        function(aliases, anns) {
          return $the_sett$elm_pretty_printer$Pretty$parens(
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              $the_sett$elm_pretty_printer$Pretty$space,
              A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                A2(
                  $the_sett$elm_pretty_printer$Pretty$join,
                  $the_sett$elm_pretty_printer$Pretty$string(", "),
                  A2(
                    $elm$core$List$map,
                    $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation(aliases),
                    $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(anns)
                  )
                ),
                $the_sett$elm_pretty_printer$Pretty$space
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation = F2(
        function(aliases, typeAnn) {
          switch (typeAnn.$) {
            case 0:
              var val = typeAnn.a;
              return $the_sett$elm_pretty_printer$Pretty$string(val);
            case 1:
              var fqName = typeAnn.a;
              var anns = typeAnn.b;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyTyped, aliases, fqName, anns);
            case 2:
              return $the_sett$elm_pretty_printer$Pretty$string("()");
            case 3:
              var anns = typeAnn.a;
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyTupled, aliases, anns);
            case 4:
              var recordDef = typeAnn.a;
              return A2(
                $mdgriffith$elm_codegen$Internal$Write$prettyRecord,
                aliases,
                $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(recordDef)
              );
            case 5:
              var paramName = typeAnn.a;
              var recordDef = typeAnn.b;
              return A3(
                $mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord,
                aliases,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(paramName),
                $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(recordDef)
                )
              );
            default:
              var fromAnn = typeAnn.a;
              var toAnn = typeAnn.b;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation, aliases, fromAnn, toAnn);
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens = F2(
        function(aliases, typeAnn) {
          return $mdgriffith$elm_codegen$Internal$Write$isNakedCompound(typeAnn) ? $the_sett$elm_pretty_printer$Pretty$parens(
            A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, typeAnn)
          ) : A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, typeAnn);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyTyped = F3(
        function(aliases, fqName, anns) {
          var argsDoc = $the_sett$elm_pretty_printer$Pretty$words(
            A2(
              $elm$core$List$map,
              $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens(aliases),
              $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(anns)
            )
          );
          var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$denode(fqName);
          var moduleName = _v0.a;
          var typeName = _v0.b;
          var typeDoc = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string(typeName),
            A2($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot, aliases, moduleName)
          );
          return $the_sett$elm_pretty_printer$Pretty$words(
            _List_fromArray(
              [typeDoc, argsDoc]
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor = F2(
        function(aliases, cons) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$nest,
            4,
            $the_sett$elm_pretty_printer$Pretty$group(
              $the_sett$elm_pretty_printer$Pretty$lines(
                _List_fromArray(
                  [
                    $the_sett$elm_pretty_printer$Pretty$string(
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(cons.x)
                    ),
                    $the_sett$elm_pretty_printer$Pretty$lines(
                      A2(
                        $elm$core$List$map,
                        $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens(aliases),
                        $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(cons.a6)
                      )
                    )
                  ]
                )
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors = F2(
        function(aliases, constructors) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$join,
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              $the_sett$elm_pretty_printer$Pretty$string("| "),
              $the_sett$elm_pretty_printer$Pretty$line
            ),
            A2(
              $elm$core$List$map,
              $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor(aliases),
              constructors
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyCustomType = F2(
        function(aliases, type_) {
          var customTypePretty = A2(
            $the_sett$elm_pretty_printer$Pretty$nest,
            4,
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              A2(
                $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors,
                aliases,
                $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(type_.dS)
              ),
              A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $the_sett$elm_pretty_printer$Pretty$string("= "),
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  $the_sett$elm_pretty_printer$Pretty$line,
                  $the_sett$elm_pretty_printer$Pretty$words(
                    _List_fromArray(
                      [
                        $the_sett$elm_pretty_printer$Pretty$string("type"),
                        $the_sett$elm_pretty_printer$Pretty$string(
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(type_.x)
                        ),
                        $the_sett$elm_pretty_printer$Pretty$words(
                          A2(
                            $elm$core$List$map,
                            $the_sett$elm_pretty_printer$Pretty$string,
                            $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(type_.bQ)
                          )
                        )
                      ]
                    )
                  )
                )
              )
            )
          );
          return $the_sett$elm_pretty_printer$Pretty$lines(
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
                  $mdgriffith$elm_codegen$Internal$Write$prettyDocumentation,
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(type_.aN)
                ),
                customTypePretty
              ]
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses = F2(
        function(context, expression) {
          var shouldRemove = function(expr) {
            var _v3 = _Utils_Tuple3(context.O, context.N, expr);
            _v3$1:
              while (true) {
                if (_v3.a) {
                  return true;
                } else {
                  switch (_v3.c.$) {
                    case 1:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return context.j < 11 ? true : false;
                      }
                    case 3:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        var _v4 = _v3.c;
                        return true;
                      }
                    case 7:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 8:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 9:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 10:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 11:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 12:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 13:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 18:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 19:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 20:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        var _v5 = _v3.c;
                        return true;
                      }
                    case 21:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return true;
                      }
                    case 22:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        var _v6 = _v3.c;
                        return true;
                      }
                    default:
                      if (_v3.b) {
                        break _v3$1;
                      } else {
                        return false;
                      }
                  }
                }
              }
            return true;
          };
          var removeParens = function(expr) {
            if (expr.$ === 14) {
              var innerExpr = expr.a;
              return shouldRemove(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExpr)
              ) ? removeParens(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExpr)
              ) : expr;
            } else {
              return expr;
            }
          };
          var addParens = function(expr) {
            var _v1 = _Utils_Tuple3(context.O, context.N, expr);
            _v1$4:
              while (true) {
                if (!_v1.a && !_v1.b) {
                  switch (_v1.c.$) {
                    case 15:
                      return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr)
                      );
                    case 16:
                      return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr)
                      );
                    case 17:
                      return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr)
                      );
                    case 4:
                      var _v2 = _v1.c;
                      return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr)
                      );
                    default:
                      break _v1$4;
                  }
                } else {
                  break _v1$4;
                }
              }
            return expr;
          };
          return addParens(
            removeParens(expression)
          );
        }
      );
      var $the_sett$elm_pretty_printer$Internals$Column = function(a) {
        return { $: 7, a };
      };
      var $the_sett$elm_pretty_printer$Pretty$column = $the_sett$elm_pretty_printer$Internals$Column;
      var $the_sett$elm_pretty_printer$Internals$Nesting = function(a) {
        return { $: 6, a };
      };
      var $the_sett$elm_pretty_printer$Pretty$nesting = $the_sett$elm_pretty_printer$Internals$Nesting;
      var $the_sett$elm_pretty_printer$Pretty$align = function(doc) {
        return $the_sett$elm_pretty_printer$Pretty$column(
          function(currentColumn) {
            return $the_sett$elm_pretty_printer$Pretty$nesting(
              function(indentLvl) {
                return A2($the_sett$elm_pretty_printer$Pretty$nest, currentColumn - indentLvl, doc);
              }
            );
          }
        );
      };
      var $elm$core$Basics$modBy = _Basics_modBy;
      var $mdgriffith$elm_codegen$Internal$Write$decrementIndent = F2(
        function(currentIndent, spaces) {
          var modded = A2($elm$core$Basics$modBy, 4, currentIndent - spaces);
          return !modded ? 4 : modded;
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$doubleLines = $the_sett$elm_pretty_printer$Pretty$join(
        A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$line)
      );
      var $mdgriffith$elm_codegen$Internal$Write$escapeChar = function(val) {
        switch (val) {
          case "\\":
            return "\\\\";
          case "'":
            return "\\'";
          case "	":
            return "\\t";
          case "\n":
            return "\\n";
          default:
            var c = val;
            return $elm$core$String$fromChar(c);
        }
      };
      var $elm$core$String$fromFloat = _String_fromNumber;
      var $the_sett$elm_pretty_printer$Internals$copy = F2(
        function(i, s) {
          return !i ? "" : _Utils_ap(
            s,
            A2($the_sett$elm_pretty_printer$Internals$copy, i - 1, s)
          );
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$hang = F2(
        function(spaces, doc) {
          return $the_sett$elm_pretty_printer$Pretty$align(
            A2($the_sett$elm_pretty_printer$Pretty$nest, spaces, doc)
          );
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$indent = F2(
        function(spaces, doc) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$hang,
            spaces,
            A2(
              $the_sett$elm_pretty_printer$Pretty$append,
              $the_sett$elm_pretty_printer$Pretty$string(
                A2($the_sett$elm_pretty_printer$Internals$copy, spaces, " ")
              ),
              doc
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$optionalGroup = F2(
        function(flag, doc) {
          return flag ? doc : $the_sett$elm_pretty_printer$Pretty$group(doc);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$precedence = function(symbol) {
        switch (symbol) {
          case ">>":
            return 9;
          case "<<":
            return 9;
          case "^":
            return 8;
          case "*":
            return 7;
          case "/":
            return 7;
          case "//":
            return 7;
          case "%":
            return 7;
          case "rem":
            return 7;
          case "+":
            return 6;
          case "-":
            return 6;
          case "++":
            return 5;
          case "::":
            return 5;
          case "==":
            return 4;
          case "/=":
            return 4;
          case "<":
            return 4;
          case ">":
            return 4;
          case "<=":
            return 4;
          case ">=":
            return 4;
          case "&&":
            return 3;
          case "||":
            return 2;
          case "|>":
            return 0;
          case "<|":
            return 0;
          default:
            return 0;
        }
      };
      var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function(a) {
        return { $: 14, a };
      };
      var $mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses = F2(
        function(isTop, pattern) {
          var shouldRemove = function(pat) {
            var _v5 = _Utils_Tuple2(isTop, pat);
            _v5$2:
              while (true) {
                switch (_v5.b.$) {
                  case 12:
                    if (!_v5.a) {
                      var _v6 = _v5.b;
                      return false;
                    } else {
                      break _v5$2;
                    }
                  case 13:
                    var _v7 = _v5.b;
                    return false;
                  default:
                    break _v5$2;
                }
              }
            return isTop;
          };
          var removeParens = function(pat) {
            if (pat.$ === 14) {
              var innerPat = pat.a;
              return shouldRemove(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(innerPat)
              ) ? removeParens(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(innerPat)
              ) : pat;
            } else {
              return pat;
            }
          };
          var addParens = function(pat) {
            var _v1 = _Utils_Tuple2(isTop, pat);
            _v1$2:
              while (true) {
                if (!_v1.a) {
                  switch (_v1.b.$) {
                    case 12:
                      if (_v1.b.b.b) {
                        var _v2 = _v1.b;
                        var _v3 = _v2.b;
                        return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(pat)
                        );
                      } else {
                        break _v1$2;
                      }
                    case 13:
                      var _v4 = _v1.b;
                      return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(pat)
                      );
                    default:
                      break _v1$2;
                  }
                } else {
                  break _v1$2;
                }
              }
            return pat;
          };
          return addParens(
            removeParens(pattern)
          );
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$braces = function(doc) {
        return A3(
          $the_sett$elm_pretty_printer$Pretty$surround,
          $the_sett$elm_pretty_printer$Pretty$char("{"),
          $the_sett$elm_pretty_printer$Pretty$char("}"),
          doc
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$quotes = function(doc) {
        return A3(
          $the_sett$elm_pretty_printer$Pretty$surround,
          $the_sett$elm_pretty_printer$Pretty$char('"'),
          $the_sett$elm_pretty_printer$Pretty$char('"'),
          doc
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$singleQuotes = function(doc) {
        return A3(
          $the_sett$elm_pretty_printer$Pretty$surround,
          $the_sett$elm_pretty_printer$Pretty$char("'"),
          $the_sett$elm_pretty_printer$Pretty$char("'"),
          doc
        );
      };
      var $rtfeldman$elm_hex$Hex$unsafeToDigit = function(num) {
        unsafeToDigit:
          while (true) {
            switch (num) {
              case 0:
                return "0";
              case 1:
                return "1";
              case 2:
                return "2";
              case 3:
                return "3";
              case 4:
                return "4";
              case 5:
                return "5";
              case 6:
                return "6";
              case 7:
                return "7";
              case 8:
                return "8";
              case 9:
                return "9";
              case 10:
                return "a";
              case 11:
                return "b";
              case 12:
                return "c";
              case 13:
                return "d";
              case 14:
                return "e";
              case 15:
                return "f";
              default:
                var $temp$num = num;
                num = $temp$num;
                continue unsafeToDigit;
            }
          }
      };
      var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
        function(digits, num) {
          unsafePositiveToDigits:
            while (true) {
              if (num < 16) {
                return A2(
                  $elm$core$List$cons,
                  $rtfeldman$elm_hex$Hex$unsafeToDigit(num),
                  digits
                );
              } else {
                var $temp$digits = A2(
                  $elm$core$List$cons,
                  $rtfeldman$elm_hex$Hex$unsafeToDigit(
                    A2($elm$core$Basics$modBy, 16, num)
                  ),
                  digits
                ), $temp$num = num / 16 | 0;
                digits = $temp$digits;
                num = $temp$num;
                continue unsafePositiveToDigits;
              }
            }
        }
      );
      var $rtfeldman$elm_hex$Hex$toString = function(num) {
        return $elm$core$String$fromList(
          num < 0 ? A2(
            $elm$core$List$cons,
            "-",
            A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)
          ) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num)
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner = F3(
        function(aliases, isTop, pattern) {
          var _v0 = A2($mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses, isTop, pattern);
          switch (_v0.$) {
            case 0:
              return $the_sett$elm_pretty_printer$Pretty$string("_");
            case 1:
              return $the_sett$elm_pretty_printer$Pretty$string("()");
            case 2:
              var val = _v0.a;
              return $mdgriffith$elm_codegen$Internal$Write$singleQuotes(
                $the_sett$elm_pretty_printer$Pretty$string(
                  $mdgriffith$elm_codegen$Internal$Write$escapeChar(val)
                )
              );
            case 3:
              var val = _v0.a;
              return $mdgriffith$elm_codegen$Internal$Write$quotes(
                $the_sett$elm_pretty_printer$Pretty$string(val)
              );
            case 4:
              var val = _v0.a;
              return $the_sett$elm_pretty_printer$Pretty$string(
                $elm$core$String$fromInt(val)
              );
            case 5:
              var val = _v0.a;
              return $the_sett$elm_pretty_printer$Pretty$string(
                $rtfeldman$elm_hex$Hex$toString(val)
              );
            case 6:
              var val = _v0.a;
              return $the_sett$elm_pretty_printer$Pretty$string(
                $elm$core$String$fromFloat(val)
              );
            case 7:
              var vals = _v0.a;
              return $the_sett$elm_pretty_printer$Pretty$parens(
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  $the_sett$elm_pretty_printer$Pretty$space,
                  A2(
                    $the_sett$elm_pretty_printer$Pretty$a,
                    A2(
                      $the_sett$elm_pretty_printer$Pretty$join,
                      $the_sett$elm_pretty_printer$Pretty$string(", "),
                      A2(
                        $elm$core$List$map,
                        A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, true),
                        $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(vals)
                      )
                    ),
                    $the_sett$elm_pretty_printer$Pretty$space
                  )
                )
              );
            case 8:
              var fields = _v0.a;
              return $the_sett$elm_pretty_printer$Pretty$braces(
                A3(
                  $the_sett$elm_pretty_printer$Pretty$surround,
                  $the_sett$elm_pretty_printer$Pretty$space,
                  $the_sett$elm_pretty_printer$Pretty$space,
                  A2(
                    $the_sett$elm_pretty_printer$Pretty$join,
                    $the_sett$elm_pretty_printer$Pretty$string(", "),
                    A2(
                      $elm$core$List$map,
                      $the_sett$elm_pretty_printer$Pretty$string,
                      $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(fields)
                    )
                  )
                )
              );
            case 9:
              var hdPat = _v0.a;
              var tlPat = _v0.b;
              return $the_sett$elm_pretty_printer$Pretty$words(
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
                      aliases,
                      false,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(hdPat)
                    ),
                    $the_sett$elm_pretty_printer$Pretty$string("::"),
                    A3(
                      $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
                      aliases,
                      false,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(tlPat)
                    )
                  ]
                )
              );
            case 10:
              var listPats = _v0.a;
              if (!listPats.b) {
                return $the_sett$elm_pretty_printer$Pretty$string("[]");
              } else {
                var open = A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  $the_sett$elm_pretty_printer$Pretty$space,
                  $the_sett$elm_pretty_printer$Pretty$string("[")
                );
                var close = A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  $the_sett$elm_pretty_printer$Pretty$string("]"),
                  $the_sett$elm_pretty_printer$Pretty$space
                );
                return A3(
                  $the_sett$elm_pretty_printer$Pretty$surround,
                  open,
                  close,
                  A2(
                    $the_sett$elm_pretty_printer$Pretty$join,
                    $the_sett$elm_pretty_printer$Pretty$string(", "),
                    A2(
                      $elm$core$List$map,
                      A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
                      $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(listPats)
                    )
                  )
                );
              }
            case 11:
              var _var = _v0.a;
              return $the_sett$elm_pretty_printer$Pretty$string(_var);
            case 12:
              var qnRef = _v0.a;
              var listPats = _v0.b;
              return $the_sett$elm_pretty_printer$Pretty$words(
                A2(
                  $elm$core$List$cons,
                  A2(
                    $the_sett$elm_pretty_printer$Pretty$a,
                    $the_sett$elm_pretty_printer$Pretty$string(qnRef.x),
                    A2($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot, aliases, qnRef.ci)
                  ),
                  A2(
                    $elm$core$List$map,
                    A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
                    $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(listPats)
                  )
                )
              );
            case 13:
              var pat = _v0.a;
              var name = _v0.b;
              return $the_sett$elm_pretty_printer$Pretty$words(
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
                      aliases,
                      false,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(pat)
                    ),
                    $the_sett$elm_pretty_printer$Pretty$string("as"),
                    $the_sett$elm_pretty_printer$Pretty$string(
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(name)
                    )
                  ]
                )
              );
            default:
              var pat = _v0.a;
              return $the_sett$elm_pretty_printer$Pretty$parens(
                A3(
                  $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
                  aliases,
                  true,
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(pat)
                )
              );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyArgs = F2(
        function(aliases, args) {
          return $the_sett$elm_pretty_printer$Pretty$words(
            A2(
              $elm$core$List$map,
              A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
              args
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$escape = function(val) {
        return A3(
          $elm$core$String$replace,
          "	",
          "\\t",
          A3(
            $elm$core$String$replace,
            "\n",
            "\\n",
            A3(
              $elm$core$String$replace,
              '"',
              '\\"',
              A3($elm$core$String$replace, "\\", "\\\\", val)
            )
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$tripleQuotes = function(doc) {
        return A3(
          $the_sett$elm_pretty_printer$Pretty$surround,
          $the_sett$elm_pretty_printer$Pretty$string('"""'),
          $the_sett$elm_pretty_printer$Pretty$string('"""'),
          doc
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyLiteral = function(val) {
        return A2($elm$core$String$contains, "\n", val) ? $mdgriffith$elm_codegen$Internal$Write$tripleQuotes(
          $the_sett$elm_pretty_printer$Pretty$string(val)
        ) : $mdgriffith$elm_codegen$Internal$Write$quotes(
          $the_sett$elm_pretty_printer$Pretty$string(
            $mdgriffith$elm_codegen$Internal$Write$escape(val)
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyPattern = F2(
        function(aliases, pattern) {
          return A3($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, true, pattern);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettySignature = F2(
        function(aliases, sig) {
          return $the_sett$elm_pretty_printer$Pretty$group(
            A2(
              $the_sett$elm_pretty_printer$Pretty$nest,
              4,
              $the_sett$elm_pretty_printer$Pretty$lines(
                _List_fromArray(
                  [
                    $the_sett$elm_pretty_printer$Pretty$words(
                      _List_fromArray(
                        [
                          $the_sett$elm_pretty_printer$Pretty$string(
                            $mdgriffith$elm_codegen$Internal$Compiler$denode(sig.x)
                          ),
                          $the_sett$elm_pretty_printer$Pretty$string(":")
                        ]
                      )
                    ),
                    A2(
                      $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation,
                      aliases,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(sig.aF)
                    )
                  ]
                )
              )
            )
          );
        }
      );
      var $the_sett$elm_pretty_printer$Pretty$tightline = A2($the_sett$elm_pretty_printer$Internals$Line, "", "");
      var $elm$core$String$padLeft = F3(
        function(n, _char, string) {
          return _Utils_ap(
            A2(
              $elm$core$String$repeat,
              n - $elm$core$String$length(string),
              $elm$core$String$fromChar(_char)
            ),
            string
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$toHexString = function(val) {
        var padWithZeros = function(str) {
          var length = $elm$core$String$length(str);
          return length < 2 ? A3($elm$core$String$padLeft, 2, "0", str) : length > 2 && length < 4 ? A3($elm$core$String$padLeft, 4, "0", str) : length > 4 && length < 8 ? A3($elm$core$String$padLeft, 8, "0", str) : str;
        };
        return "0x" + padWithZeros(
          $elm$core$String$toUpper(
            $rtfeldman$elm_hex$Hex$toString(val)
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$topContext = { N: false, O: true, j: 11 };
      var $elm$core$List$unzip = function(pairs) {
        var step = F2(
          function(_v0, _v1) {
            var x = _v0.a;
            var y = _v0.b;
            var xs = _v1.a;
            var ys = _v1.b;
            return _Utils_Tuple2(
              A2($elm$core$List$cons, x, xs),
              A2($elm$core$List$cons, y, ys)
            );
          }
        );
        return A3(
          $elm$core$List$foldr,
          step,
          _Utils_Tuple2(_List_Nil, _List_Nil),
          pairs
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyApplication = F3(
        function(aliases, indent, exprs) {
          var _v30 = A2(
            $elm$core$Tuple$mapSecond,
            $elm$core$List$any($elm$core$Basics$identity),
            $elm$core$List$unzip(
              A2(
                $elm$core$List$map,
                A3(
                  $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                  aliases,
                  { N: false, O: false, j: 11 },
                  4
                ),
                $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(exprs)
              )
            )
          );
          var prettyExpressions = _v30.a;
          var alwaysBreak = _v30.b;
          return _Utils_Tuple2(
            A2(
              $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
              alwaysBreak,
              $the_sett$elm_pretty_printer$Pretty$align(
                A2(
                  $the_sett$elm_pretty_printer$Pretty$nest,
                  indent,
                  $the_sett$elm_pretty_printer$Pretty$lines(prettyExpressions)
                )
              )
            ),
            alwaysBreak
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock = F3(
        function(aliases, indent, caseBlock) {
          var prettyCase = function(_v29) {
            var pattern = _v29.a;
            var expr = _v29.b;
            return A2(
              $the_sett$elm_pretty_printer$Pretty$indent,
              indent,
              A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                A2(
                  $the_sett$elm_pretty_printer$Pretty$indent,
                  4,
                  A4(
                    $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                    aliases,
                    $mdgriffith$elm_codegen$Internal$Write$topContext,
                    4,
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)
                  ).a
                ),
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  $the_sett$elm_pretty_printer$Pretty$line,
                  A2(
                    $the_sett$elm_pretty_printer$Pretty$a,
                    $the_sett$elm_pretty_printer$Pretty$string(" ->"),
                    A2(
                      $mdgriffith$elm_codegen$Internal$Write$prettyPattern,
                      aliases,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(pattern)
                    )
                  )
                )
              )
            );
          };
          var patternsPart = $mdgriffith$elm_codegen$Internal$Write$doubleLines(
            A2($elm$core$List$map, prettyCase, caseBlock.q)
          );
          var casePart = function() {
            var _v28 = A4(
              $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
              aliases,
              $mdgriffith$elm_codegen$Internal$Write$topContext,
              4,
              $mdgriffith$elm_codegen$Internal$Compiler$denode(caseBlock.a)
            );
            var caseExpression = _v28.a;
            var alwaysBreak = _v28.b;
            return A2(
              $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
              alwaysBreak,
              $the_sett$elm_pretty_printer$Pretty$lines(
                _List_fromArray(
                  [
                    A2(
                      $the_sett$elm_pretty_printer$Pretty$nest,
                      indent,
                      A2(
                        $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                        alwaysBreak,
                        $the_sett$elm_pretty_printer$Pretty$lines(
                          _List_fromArray(
                            [
                              $the_sett$elm_pretty_printer$Pretty$string("case"),
                              caseExpression
                            ]
                          )
                        )
                      )
                    ),
                    $the_sett$elm_pretty_printer$Pretty$string("of")
                  ]
                )
              )
            );
          }();
          return _Utils_Tuple2(
            $the_sett$elm_pretty_printer$Pretty$align(
              $the_sett$elm_pretty_printer$Pretty$lines(
                _List_fromArray(
                  [casePart, patternsPart]
                )
              )
            ),
            true
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyExpression = F2(
        function(aliases, expression) {
          return A4($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner, aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, expression).a;
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner = F4(
        function(aliases, context, indent, expression) {
          var _v26 = A2($mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses, context, expression);
          switch (_v26.$) {
            case 0:
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$string("()"),
                false
              );
            case 1:
              var exprs = _v26.a;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyApplication, aliases, indent, exprs);
            case 2:
              var symbol = _v26.a;
              var dir = _v26.b;
              var exprl = _v26.c;
              var exprr = _v26.d;
              return A6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication, aliases, indent, symbol, dir, exprl, exprr);
            case 3:
              var modl = _v26.a;
              var val = _v26.b;
              return _Utils_Tuple2(
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  $the_sett$elm_pretty_printer$Pretty$string(val),
                  A2($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot, aliases, modl)
                ),
                false
              );
            case 4:
              var exprBool = _v26.a;
              var exprTrue = _v26.b;
              var exprFalse = _v26.c;
              return A5($mdgriffith$elm_codegen$Internal$Write$prettyIfBlock, aliases, indent, exprBool, exprTrue, exprFalse);
            case 5:
              var symbol = _v26.a;
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$parens(
                  $the_sett$elm_pretty_printer$Pretty$string(symbol)
                ),
                false
              );
            case 6:
              var symbol = _v26.a;
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$string(symbol),
                false
              );
            case 7:
              var val = _v26.a;
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$string(
                  $elm$core$String$fromInt(val)
                ),
                false
              );
            case 8:
              var val = _v26.a;
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$string(
                  $mdgriffith$elm_codegen$Internal$Write$toHexString(val)
                ),
                false
              );
            case 9:
              var val = _v26.a;
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$string(
                  $elm$core$String$fromFloat(val)
                ),
                false
              );
            case 10:
              var expr = _v26.a;
              var _v27 = A4(
                $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                aliases,
                $mdgriffith$elm_codegen$Internal$Write$topContext,
                4,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)
              );
              var prettyExpr = _v27.a;
              var alwaysBreak = _v27.b;
              return _Utils_Tuple2(
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  prettyExpr,
                  $the_sett$elm_pretty_printer$Pretty$string("-")
                ),
                alwaysBreak
              );
            case 11:
              var val = _v26.a;
              return _Utils_Tuple2(
                $mdgriffith$elm_codegen$Internal$Write$prettyLiteral(val),
                false
              );
            case 12:
              var val = _v26.a;
              return _Utils_Tuple2(
                $mdgriffith$elm_codegen$Internal$Write$singleQuotes(
                  $the_sett$elm_pretty_printer$Pretty$string(
                    $mdgriffith$elm_codegen$Internal$Write$escapeChar(val)
                  )
                ),
                false
              );
            case 13:
              var exprs = _v26.a;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression, aliases, indent, exprs);
            case 14:
              var expr = _v26.a;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression, aliases, indent, expr);
            case 15:
              var letBlock = _v26.a;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyLetBlock, aliases, indent, letBlock);
            case 16:
              var caseBlock = _v26.a;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock, aliases, indent, caseBlock);
            case 17:
              var lambda = _v26.a;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression, aliases, indent, lambda);
            case 18:
              var setters = _v26.a;
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr, aliases, setters);
            case 19:
              var exprs = _v26.a;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyList, aliases, indent, exprs);
            case 20:
              var expr = _v26.a;
              var field = _v26.b;
              return A3($mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess, aliases, expr, field);
            case 21:
              var field = _v26.a;
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$string(field),
                false
              );
            case 22:
              var _var = _v26.a;
              var setters = _v26.b;
              return A4($mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression, aliases, indent, _var, setters);
            default:
              var val = _v26.a;
              return _Utils_Tuple2(
                $the_sett$elm_pretty_printer$Pretty$string("glsl"),
                true
              );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyFun = F2(
        function(aliases, fn) {
          return $the_sett$elm_pretty_printer$Pretty$lines(
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
                  $mdgriffith$elm_codegen$Internal$Write$prettyDocumentation,
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(fn.aN)
                ),
                A2(
                  $mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
                  $mdgriffith$elm_codegen$Internal$Write$prettySignature(aliases),
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(fn.eR)
                ),
                A2(
                  $mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation,
                  aliases,
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(fn.bp)
                )
              ]
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation = F2(
        function(aliases, impl) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$nest,
            4,
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              A2(
                $mdgriffith$elm_codegen$Internal$Write$prettyExpression,
                aliases,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(impl.a)
              ),
              A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $the_sett$elm_pretty_printer$Pretty$line,
                $the_sett$elm_pretty_printer$Pretty$words(
                  _List_fromArray(
                    [
                      $the_sett$elm_pretty_printer$Pretty$string(
                        $mdgriffith$elm_codegen$Internal$Compiler$denode(impl.x)
                      ),
                      A2(
                        $mdgriffith$elm_codegen$Internal$Write$prettyArgs,
                        aliases,
                        $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(impl.a6)
                      ),
                      $the_sett$elm_pretty_printer$Pretty$string("=")
                    ]
                  )
                )
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyIfBlock = F5(
        function(aliases, indent, exprBool, exprTrue, exprFalse) {
          var innerIfBlock = F3(
            function(innerExprBool, innerExprTrue, innerExprFalse) {
              var truePart = A2(
                $the_sett$elm_pretty_printer$Pretty$indent,
                indent,
                A4(
                  $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                  aliases,
                  $mdgriffith$elm_codegen$Internal$Write$topContext,
                  4,
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprTrue)
                ).a
              );
              var ifPart = function() {
                var _v25 = A4(
                  $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                  aliases,
                  $mdgriffith$elm_codegen$Internal$Write$topContext,
                  4,
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprBool)
                );
                var prettyBoolExpr = _v25.a;
                var alwaysBreak = _v25.b;
                return A2(
                  $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                  alwaysBreak,
                  $the_sett$elm_pretty_printer$Pretty$lines(
                    _List_fromArray(
                      [
                        A2(
                          $the_sett$elm_pretty_printer$Pretty$nest,
                          indent,
                          A2(
                            $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                            alwaysBreak,
                            $the_sett$elm_pretty_printer$Pretty$lines(
                              _List_fromArray(
                                [
                                  $the_sett$elm_pretty_printer$Pretty$string("if"),
                                  A4(
                                    $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                                    aliases,
                                    $mdgriffith$elm_codegen$Internal$Write$topContext,
                                    4,
                                    $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprBool)
                                  ).a
                                ]
                              )
                            )
                          )
                        ),
                        $the_sett$elm_pretty_printer$Pretty$string("then")
                      ]
                    )
                  )
                );
              }();
              var falsePart = function() {
                var _v24 = $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprFalse);
                if (_v24.$ === 4) {
                  var nestedExprBool = _v24.a;
                  var nestedExprTrue = _v24.b;
                  var nestedExprFalse = _v24.c;
                  return A3(innerIfBlock, nestedExprBool, nestedExprTrue, nestedExprFalse);
                } else {
                  return _List_fromArray(
                    [
                      A2(
                        $the_sett$elm_pretty_printer$Pretty$indent,
                        indent,
                        A4(
                          $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                          aliases,
                          $mdgriffith$elm_codegen$Internal$Write$topContext,
                          4,
                          $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprFalse)
                        ).a
                      )
                    ]
                  );
                }
              }();
              var elsePart = A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $the_sett$elm_pretty_printer$Pretty$string("else"),
                $the_sett$elm_pretty_printer$Pretty$line
              );
              var context = $mdgriffith$elm_codegen$Internal$Write$topContext;
              if (!falsePart.b) {
                return _List_Nil;
              } else {
                if (!falsePart.b.b) {
                  var falseExpr = falsePart.a;
                  return _List_fromArray(
                    [ifPart, truePart, elsePart, falseExpr]
                  );
                } else {
                  var hd = falsePart.a;
                  var tl = falsePart.b;
                  return A2(
                    $elm$core$List$append,
                    _List_fromArray(
                      [
                        ifPart,
                        truePart,
                        $the_sett$elm_pretty_printer$Pretty$words(
                          _List_fromArray(
                            [elsePart, hd]
                          )
                        )
                      ]
                    ),
                    tl
                  );
                }
              }
            }
          );
          var prettyExpressions = A3(innerIfBlock, exprBool, exprTrue, exprFalse);
          return _Utils_Tuple2(
            $the_sett$elm_pretty_printer$Pretty$align(
              $the_sett$elm_pretty_printer$Pretty$lines(prettyExpressions)
            ),
            true
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression = F3(
        function(aliases, indent, lambda) {
          var _v22 = A4(
            $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
            aliases,
            $mdgriffith$elm_codegen$Internal$Write$topContext,
            4,
            $mdgriffith$elm_codegen$Internal$Compiler$denode(lambda.a)
          );
          var prettyExpr = _v22.a;
          var alwaysBreak = _v22.b;
          return _Utils_Tuple2(
            A2(
              $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
              alwaysBreak,
              $the_sett$elm_pretty_printer$Pretty$align(
                A2(
                  $the_sett$elm_pretty_printer$Pretty$nest,
                  indent,
                  $the_sett$elm_pretty_printer$Pretty$lines(
                    _List_fromArray(
                      [
                        A2(
                          $the_sett$elm_pretty_printer$Pretty$a,
                          $the_sett$elm_pretty_printer$Pretty$string(" ->"),
                          A2(
                            $the_sett$elm_pretty_printer$Pretty$a,
                            $the_sett$elm_pretty_printer$Pretty$words(
                              A2(
                                $elm$core$List$map,
                                A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
                                $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(lambda.s)
                              )
                            ),
                            $the_sett$elm_pretty_printer$Pretty$string("\\")
                          )
                        ),
                        prettyExpr
                      ]
                    )
                  )
                )
              )
            ),
            alwaysBreak
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyLetBlock = F3(
        function(aliases, indent, letBlock) {
          return _Utils_Tuple2(
            $the_sett$elm_pretty_printer$Pretty$align(
              $the_sett$elm_pretty_printer$Pretty$lines(
                _List_fromArray(
                  [
                    $the_sett$elm_pretty_printer$Pretty$string("let"),
                    A2(
                      $the_sett$elm_pretty_printer$Pretty$indent,
                      indent,
                      $mdgriffith$elm_codegen$Internal$Write$doubleLines(
                        A2(
                          $elm$core$List$map,
                          A2($mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration, aliases, indent),
                          $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(letBlock.ak)
                        )
                      )
                    ),
                    $the_sett$elm_pretty_printer$Pretty$string("in"),
                    A4(
                      $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                      aliases,
                      $mdgriffith$elm_codegen$Internal$Write$topContext,
                      4,
                      $mdgriffith$elm_codegen$Internal$Compiler$denode(letBlock.a)
                    ).a
                  ]
                )
              )
            ),
            true
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration = F3(
        function(aliases, indent, letDecl) {
          if (!letDecl.$) {
            var fn = letDecl.a;
            return A2($mdgriffith$elm_codegen$Internal$Write$prettyFun, aliases, fn);
          } else {
            var pattern = letDecl.a;
            var expr = letDecl.b;
            return A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              A2(
                $the_sett$elm_pretty_printer$Pretty$indent,
                indent,
                A4(
                  $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                  aliases,
                  $mdgriffith$elm_codegen$Internal$Write$topContext,
                  4,
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)
                ).a
              ),
              A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $the_sett$elm_pretty_printer$Pretty$line,
                $the_sett$elm_pretty_printer$Pretty$words(
                  _List_fromArray(
                    [
                      A3(
                        $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
                        aliases,
                        false,
                        $mdgriffith$elm_codegen$Internal$Compiler$denode(pattern)
                      ),
                      $the_sett$elm_pretty_printer$Pretty$string("=")
                    ]
                  )
                )
              )
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyList = F3(
        function(aliases, indent, exprs) {
          var open = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$space,
            $the_sett$elm_pretty_printer$Pretty$string("[")
          );
          var close = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string("]"),
            $the_sett$elm_pretty_printer$Pretty$line
          );
          if (!exprs.b) {
            return _Utils_Tuple2(
              $the_sett$elm_pretty_printer$Pretty$string("[]"),
              false
            );
          } else {
            var _v20 = A2(
              $elm$core$Tuple$mapSecond,
              $elm$core$List$any($elm$core$Basics$identity),
              $elm$core$List$unzip(
                A2(
                  $elm$core$List$map,
                  A3(
                    $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                    aliases,
                    $mdgriffith$elm_codegen$Internal$Write$topContext,
                    A2($mdgriffith$elm_codegen$Internal$Write$decrementIndent, indent, 2)
                  ),
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(exprs)
                )
              )
            );
            var prettyExpressions = _v20.a;
            var alwaysBreak = _v20.b;
            return _Utils_Tuple2(
              A2(
                $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                alwaysBreak,
                $the_sett$elm_pretty_printer$Pretty$align(
                  A3(
                    $the_sett$elm_pretty_printer$Pretty$surround,
                    open,
                    close,
                    A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)
                  )
                )
              ),
              alwaysBreak
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication = F6(
        function(aliases, indent, symbol, dir, exprl, exprr) {
          return symbol === "<|" ? A6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft, aliases, indent, symbol, dir, exprl, exprr) : A6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight, aliases, indent, symbol, dir, exprl, exprr);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft = F6(
        function(aliases, indent, symbol, _v16, exprl, exprr) {
          var context = {
            N: true,
            O: false,
            j: $mdgriffith$elm_codegen$Internal$Write$precedence(symbol)
          };
          var _v17 = A4(
            $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
            aliases,
            context,
            4,
            $mdgriffith$elm_codegen$Internal$Compiler$denode(exprr)
          );
          var prettyExpressionRight = _v17.a;
          var alwaysBreakRight = _v17.b;
          var _v18 = A4(
            $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
            aliases,
            context,
            4,
            $mdgriffith$elm_codegen$Internal$Compiler$denode(exprl)
          );
          var prettyExpressionLeft = _v18.a;
          var alwaysBreakLeft = _v18.b;
          var alwaysBreak = alwaysBreakLeft || alwaysBreakRight;
          return _Utils_Tuple2(
            A2(
              $the_sett$elm_pretty_printer$Pretty$nest,
              4,
              A2(
                $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                alwaysBreak,
                $the_sett$elm_pretty_printer$Pretty$lines(
                  _List_fromArray(
                    [
                      $the_sett$elm_pretty_printer$Pretty$words(
                        _List_fromArray(
                          [
                            prettyExpressionLeft,
                            $the_sett$elm_pretty_printer$Pretty$string(symbol)
                          ]
                        )
                      ),
                      prettyExpressionRight
                    ]
                  )
                )
              )
            ),
            alwaysBreak
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight = F6(
        function(aliases, indent, symbol, _v11, exprl, exprr) {
          var expandExpr = F3(
            function(innerIndent, context, expr) {
              if (expr.$ === 2) {
                var sym = expr.a;
                var left = expr.c;
                var right = expr.d;
                return A4(innerOpApply, false, sym, left, right);
              } else {
                return _List_fromArray(
                  [
                    A4($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner, aliases, context, innerIndent, expr)
                  ]
                );
              }
            }
          );
          var innerOpApply = F4(
            function(isTop, sym, left, right) {
              var innerIndent = A2(
                $mdgriffith$elm_codegen$Internal$Write$decrementIndent,
                4,
                $elm$core$String$length(symbol) + 1
              );
              var leftIndent = isTop ? indent : innerIndent;
              var context = {
                N: "<|" === sym,
                O: false,
                j: $mdgriffith$elm_codegen$Internal$Write$precedence(sym)
              };
              var rightSide = A3(
                expandExpr,
                innerIndent,
                context,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(right)
              );
              if (rightSide.b) {
                var _v14 = rightSide.a;
                var hdExpr = _v14.a;
                var hdBreak = _v14.b;
                var tl = rightSide.b;
                return A2(
                  $elm$core$List$append,
                  A3(
                    expandExpr,
                    leftIndent,
                    context,
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(left)
                  ),
                  A2(
                    $elm$core$List$cons,
                    _Utils_Tuple2(
                      A2(
                        $the_sett$elm_pretty_printer$Pretty$a,
                        hdExpr,
                        A2(
                          $the_sett$elm_pretty_printer$Pretty$a,
                          $the_sett$elm_pretty_printer$Pretty$space,
                          $the_sett$elm_pretty_printer$Pretty$string(sym)
                        )
                      ),
                      hdBreak
                    ),
                    tl
                  )
                );
              } else {
                return _List_Nil;
              }
            }
          );
          var _v12 = A2(
            $elm$core$Tuple$mapSecond,
            $elm$core$List$any($elm$core$Basics$identity),
            $elm$core$List$unzip(
              A4(innerOpApply, true, symbol, exprl, exprr)
            )
          );
          var prettyExpressions = _v12.a;
          var alwaysBreak = _v12.b;
          return _Utils_Tuple2(
            A2(
              $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
              alwaysBreak,
              $the_sett$elm_pretty_printer$Pretty$align(
                A2(
                  $the_sett$elm_pretty_printer$Pretty$join,
                  A2($the_sett$elm_pretty_printer$Pretty$nest, indent, $the_sett$elm_pretty_printer$Pretty$line),
                  prettyExpressions
                )
              )
            ),
            alwaysBreak
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression = F3(
        function(aliases, indent, expr) {
          var open = $the_sett$elm_pretty_printer$Pretty$string("(");
          var close = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string(")"),
            $the_sett$elm_pretty_printer$Pretty$tightline
          );
          var _v10 = A4(
            $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
            aliases,
            $mdgriffith$elm_codegen$Internal$Write$topContext,
            A2($mdgriffith$elm_codegen$Internal$Write$decrementIndent, indent, 1),
            $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)
          );
          var prettyExpr = _v10.a;
          var alwaysBreak = _v10.b;
          return _Utils_Tuple2(
            A2(
              $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
              alwaysBreak,
              $the_sett$elm_pretty_printer$Pretty$align(
                A3(
                  $the_sett$elm_pretty_printer$Pretty$surround,
                  open,
                  close,
                  A2($the_sett$elm_pretty_printer$Pretty$nest, 1, prettyExpr)
                )
              )
            ),
            alwaysBreak
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess = F3(
        function(aliases, expr, field) {
          var _v9 = A4(
            $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
            aliases,
            $mdgriffith$elm_codegen$Internal$Write$topContext,
            4,
            $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)
          );
          var prettyExpr = _v9.a;
          var alwaysBreak = _v9.b;
          return _Utils_Tuple2(
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              $the_sett$elm_pretty_printer$Pretty$string(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(field)
              ),
              A2($the_sett$elm_pretty_printer$Pretty$a, $mdgriffith$elm_codegen$Internal$Write$dot, prettyExpr)
            ),
            alwaysBreak
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr = F2(
        function(aliases, setters) {
          var open = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$space,
            $the_sett$elm_pretty_printer$Pretty$string("{")
          );
          var close = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string("}"),
            $the_sett$elm_pretty_printer$Pretty$line
          );
          if (!setters.b) {
            return _Utils_Tuple2(
              $the_sett$elm_pretty_printer$Pretty$string("{}"),
              false
            );
          } else {
            var _v8 = A2(
              $elm$core$Tuple$mapSecond,
              $elm$core$List$any($elm$core$Basics$identity),
              $elm$core$List$unzip(
                A2(
                  $elm$core$List$map,
                  $mdgriffith$elm_codegen$Internal$Write$prettySetter(aliases),
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(setters)
                )
              )
            );
            var prettyExpressions = _v8.a;
            var alwaysBreak = _v8.b;
            return _Utils_Tuple2(
              A2(
                $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                alwaysBreak,
                $the_sett$elm_pretty_printer$Pretty$align(
                  A3(
                    $the_sett$elm_pretty_printer$Pretty$surround,
                    open,
                    close,
                    A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)
                  )
                )
              ),
              alwaysBreak
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression = F4(
        function(aliases, indent, _var, setters) {
          var open = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$line,
            $the_sett$elm_pretty_printer$Pretty$words(
              _List_fromArray(
                [
                  $the_sett$elm_pretty_printer$Pretty$string("{"),
                  $the_sett$elm_pretty_printer$Pretty$string(
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(_var)
                  )
                ]
              )
            )
          );
          var close = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string("}"),
            $the_sett$elm_pretty_printer$Pretty$line
          );
          var addBarToFirst = function(exprs) {
            if (!exprs.b) {
              return _List_Nil;
            } else {
              var hd = exprs.a;
              var tl = exprs.b;
              return A2(
                $elm$core$List$cons,
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  hd,
                  $the_sett$elm_pretty_printer$Pretty$string("| ")
                ),
                tl
              );
            }
          };
          if (!setters.b) {
            return _Utils_Tuple2(
              $the_sett$elm_pretty_printer$Pretty$string("{}"),
              false
            );
          } else {
            var _v5 = A2(
              $elm$core$Tuple$mapSecond,
              $elm$core$List$any($elm$core$Basics$identity),
              $elm$core$List$unzip(
                A2(
                  $elm$core$List$map,
                  $mdgriffith$elm_codegen$Internal$Write$prettySetter(aliases),
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(setters)
                )
              )
            );
            var prettyExpressions = _v5.a;
            var alwaysBreak = _v5.b;
            return _Utils_Tuple2(
              A2(
                $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                alwaysBreak,
                $the_sett$elm_pretty_printer$Pretty$align(
                  A3(
                    $the_sett$elm_pretty_printer$Pretty$surround,
                    $the_sett$elm_pretty_printer$Pretty$empty,
                    close,
                    A2(
                      $the_sett$elm_pretty_printer$Pretty$nest,
                      indent,
                      A2(
                        $the_sett$elm_pretty_printer$Pretty$a,
                        A2(
                          $the_sett$elm_pretty_printer$Pretty$separators,
                          ", ",
                          addBarToFirst(prettyExpressions)
                        ),
                        open
                      )
                    )
                  )
                )
              ),
              alwaysBreak
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettySetter = F2(
        function(aliases, _v2) {
          var fld = _v2.a;
          var val = _v2.b;
          var _v3 = A4(
            $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
            aliases,
            $mdgriffith$elm_codegen$Internal$Write$topContext,
            4,
            $mdgriffith$elm_codegen$Internal$Compiler$denode(val)
          );
          var prettyExpr = _v3.a;
          var alwaysBreak = _v3.b;
          return _Utils_Tuple2(
            A2(
              $the_sett$elm_pretty_printer$Pretty$nest,
              4,
              A2(
                $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                alwaysBreak,
                $the_sett$elm_pretty_printer$Pretty$lines(
                  _List_fromArray(
                    [
                      $the_sett$elm_pretty_printer$Pretty$words(
                        _List_fromArray(
                          [
                            $the_sett$elm_pretty_printer$Pretty$string(
                              $mdgriffith$elm_codegen$Internal$Compiler$denode(fld)
                            ),
                            $the_sett$elm_pretty_printer$Pretty$string("=")
                          ]
                        )
                      ),
                      prettyExpr
                    ]
                  )
                )
              )
            ),
            alwaysBreak
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression = F3(
        function(aliases, indent, exprs) {
          var open = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$space,
            $the_sett$elm_pretty_printer$Pretty$string("(")
          );
          var close = A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$string(")"),
            $the_sett$elm_pretty_printer$Pretty$line
          );
          if (!exprs.b) {
            return _Utils_Tuple2(
              $the_sett$elm_pretty_printer$Pretty$string("()"),
              false
            );
          } else {
            var _v1 = A2(
              $elm$core$Tuple$mapSecond,
              $elm$core$List$any($elm$core$Basics$identity),
              $elm$core$List$unzip(
                A2(
                  $elm$core$List$map,
                  A3(
                    $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
                    aliases,
                    $mdgriffith$elm_codegen$Internal$Write$topContext,
                    A2($mdgriffith$elm_codegen$Internal$Write$decrementIndent, indent, 2)
                  ),
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(exprs)
                )
              )
            );
            var prettyExpressions = _v1.a;
            var alwaysBreak = _v1.b;
            return _Utils_Tuple2(
              A2(
                $mdgriffith$elm_codegen$Internal$Write$optionalGroup,
                alwaysBreak,
                $the_sett$elm_pretty_printer$Pretty$align(
                  A3(
                    $the_sett$elm_pretty_printer$Pretty$surround,
                    open,
                    close,
                    A2($the_sett$elm_pretty_printer$Pretty$separators, ", ", prettyExpressions)
                  )
                )
              ),
              alwaysBreak
            );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyDestructuring = F3(
        function(aliases, pattern, expr) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$nest,
            4,
            $the_sett$elm_pretty_printer$Pretty$lines(
              _List_fromArray(
                [
                  $the_sett$elm_pretty_printer$Pretty$words(
                    _List_fromArray(
                      [
                        A2($mdgriffith$elm_codegen$Internal$Write$prettyPattern, aliases, pattern),
                        $the_sett$elm_pretty_printer$Pretty$string("=")
                      ]
                    )
                  ),
                  A2($mdgriffith$elm_codegen$Internal$Write$prettyExpression, aliases, expr)
                ]
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyInfix = function(infix_) {
        var dirToString = function(direction) {
          switch (direction) {
            case 0:
              return "left";
            case 1:
              return "right";
            default:
              return "non";
          }
        };
        return $the_sett$elm_pretty_printer$Pretty$words(
          _List_fromArray(
            [
              $the_sett$elm_pretty_printer$Pretty$string("infix"),
              $the_sett$elm_pretty_printer$Pretty$string(
                dirToString(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.f)
                )
              ),
              $the_sett$elm_pretty_printer$Pretty$string(
                $elm$core$String$fromInt(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.j)
                )
              ),
              $the_sett$elm_pretty_printer$Pretty$parens(
                $the_sett$elm_pretty_printer$Pretty$string(
                  $mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.i)
                )
              ),
              $the_sett$elm_pretty_printer$Pretty$string("="),
              $the_sett$elm_pretty_printer$Pretty$string(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.g)
              )
            ]
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration = F2(
        function(aliases, sig) {
          return $the_sett$elm_pretty_printer$Pretty$words(
            _List_fromArray(
              [
                $the_sett$elm_pretty_printer$Pretty$string("port"),
                A2($mdgriffith$elm_codegen$Internal$Write$prettySignature, aliases, sig)
              ]
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias = F2(
        function(aliases, tAlias) {
          var typeAliasPretty = A2(
            $the_sett$elm_pretty_printer$Pretty$nest,
            4,
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              A2(
                $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation,
                aliases,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(tAlias.aF)
              ),
              A2(
                $the_sett$elm_pretty_printer$Pretty$a,
                $the_sett$elm_pretty_printer$Pretty$line,
                $the_sett$elm_pretty_printer$Pretty$words(
                  _List_fromArray(
                    [
                      $the_sett$elm_pretty_printer$Pretty$string("type alias"),
                      $the_sett$elm_pretty_printer$Pretty$string(
                        $mdgriffith$elm_codegen$Internal$Compiler$denode(tAlias.x)
                      ),
                      $the_sett$elm_pretty_printer$Pretty$words(
                        A2(
                          $elm$core$List$map,
                          $the_sett$elm_pretty_printer$Pretty$string,
                          $mdgriffith$elm_codegen$Internal$Compiler$denodeAll(tAlias.bQ)
                        )
                      ),
                      $the_sett$elm_pretty_printer$Pretty$string("=")
                    ]
                  )
                )
              )
            )
          );
          return $the_sett$elm_pretty_printer$Pretty$lines(
            _List_fromArray(
              [
                A2(
                  $mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
                  $mdgriffith$elm_codegen$Internal$Write$prettyDocumentation,
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(tAlias.aN)
                ),
                typeAliasPretty
              ]
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration = F2(
        function(aliases, decl) {
          switch (decl.$) {
            case 0:
              var fn = decl.a;
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyFun, aliases, fn);
            case 1:
              var tAlias = decl.a;
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias, aliases, tAlias);
            case 2:
              var type_ = decl.a;
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyCustomType, aliases, type_);
            case 3:
              var sig = decl.a;
              return A2($mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration, aliases, sig);
            case 4:
              var infix_ = decl.a;
              return $mdgriffith$elm_codegen$Internal$Write$prettyInfix(infix_);
            default:
              var pattern = decl.a;
              var expr = decl.b;
              return A3(
                $mdgriffith$elm_codegen$Internal$Write$prettyDestructuring,
                aliases,
                $mdgriffith$elm_codegen$Internal$Compiler$denode(pattern),
                $mdgriffith$elm_codegen$Internal$Compiler$denode(expr)
              );
          }
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyDeclarations = F2(
        function(aliases, decls) {
          return A3(
            $elm$core$List$foldl,
            F2(
              function(decl, doc) {
                switch (decl.$) {
                  case 1:
                    var content = decl.a;
                    return A2(
                      $the_sett$elm_pretty_printer$Pretty$a,
                      $the_sett$elm_pretty_printer$Pretty$line,
                      A2(
                        $the_sett$elm_pretty_printer$Pretty$a,
                        $the_sett$elm_pretty_printer$Pretty$line,
                        A2(
                          $the_sett$elm_pretty_printer$Pretty$a,
                          $the_sett$elm_pretty_printer$Pretty$string(content + "\n"),
                          doc
                        )
                      )
                    );
                  case 2:
                    var source = decl.a;
                    return A2(
                      $the_sett$elm_pretty_printer$Pretty$a,
                      $the_sett$elm_pretty_printer$Pretty$line,
                      A2(
                        $the_sett$elm_pretty_printer$Pretty$a,
                        $the_sett$elm_pretty_printer$Pretty$line,
                        A2(
                          $the_sett$elm_pretty_printer$Pretty$a,
                          $the_sett$elm_pretty_printer$Pretty$line,
                          A2(
                            $the_sett$elm_pretty_printer$Pretty$a,
                            $the_sett$elm_pretty_printer$Pretty$string(source),
                            doc
                          )
                        )
                      )
                    );
                  default:
                    var innerDecl = decl.c;
                    return A2(
                      $the_sett$elm_pretty_printer$Pretty$a,
                      $the_sett$elm_pretty_printer$Pretty$line,
                      A2(
                        $the_sett$elm_pretty_printer$Pretty$a,
                        $the_sett$elm_pretty_printer$Pretty$line,
                        A2(
                          $the_sett$elm_pretty_printer$Pretty$a,
                          $the_sett$elm_pretty_printer$Pretty$line,
                          A2(
                            $the_sett$elm_pretty_printer$Pretty$a,
                            A2($mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration, aliases, innerDecl),
                            doc
                          )
                        )
                      )
                    );
                }
              }
            ),
            $the_sett$elm_pretty_printer$Pretty$empty,
            decls
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Comments$delimeters = function(doc) {
        return A2(
          $the_sett$elm_pretty_printer$Pretty$a,
          $the_sett$elm_pretty_printer$Pretty$string("-}"),
          A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            $the_sett$elm_pretty_printer$Pretty$line,
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              doc,
              $the_sett$elm_pretty_printer$Pretty$string("{-| ")
            )
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Comments$getParts = function(_v0) {
        var parts = _v0;
        return $elm$core$List$reverse(parts);
      };
      var $mdgriffith$elm_codegen$Internal$Comments$DocTags = function(a) {
        return { $: 2, a };
      };
      var $mdgriffith$elm_codegen$Internal$Comments$fitAndSplit = F2(
        function(width, tags) {
          if (!tags.b) {
            return _List_Nil;
          } else {
            var t = tags.a;
            var ts = tags.b;
            var _v1 = A3(
              $elm$core$List$foldl,
              F2(
                function(tag, _v2) {
                  var allSplits = _v2.a;
                  var curSplit = _v2.b;
                  var remaining = _v2.c;
                  return _Utils_cmp(
                    $elm$core$String$length(tag),
                    remaining
                  ) < 1 ? _Utils_Tuple3(
                    allSplits,
                    A2($elm$core$List$cons, tag, curSplit),
                    remaining - $elm$core$String$length(tag)
                  ) : _Utils_Tuple3(
                    _Utils_ap(
                      allSplits,
                      _List_fromArray(
                        [
                          $elm$core$List$reverse(curSplit)
                        ]
                      )
                    ),
                    _List_fromArray(
                      [tag]
                    ),
                    width - $elm$core$String$length(tag)
                  );
                }
              ),
              _Utils_Tuple3(
                _List_Nil,
                _List_fromArray(
                  [t]
                ),
                width - $elm$core$String$length(t)
              ),
              ts
            );
            var splitsExceptLast = _v1.a;
            var lastSplit = _v1.b;
            return _Utils_ap(
              splitsExceptLast,
              _List_fromArray(
                [
                  $elm$core$List$reverse(lastSplit)
                ]
              )
            );
          }
        }
      );
      var $elm$core$List$sort = function(xs) {
        return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
      };
      var $mdgriffith$elm_codegen$Internal$Comments$mergeDocTags = function(innerParts) {
        var _v0 = A3(
          $elm$core$List$foldr,
          F2(
            function(part, _v1) {
              var accum = _v1.a;
              var context = _v1.b;
              if (context.$ === 1) {
                if (part.$ === 2) {
                  var tags2 = part.a;
                  return _Utils_Tuple2(
                    accum,
                    $elm$core$Maybe$Just(tags2)
                  );
                } else {
                  var otherPart = part;
                  return _Utils_Tuple2(
                    A2($elm$core$List$cons, otherPart, accum),
                    $elm$core$Maybe$Nothing
                  );
                }
              } else {
                var contextTags = context.a;
                if (part.$ === 2) {
                  var tags2 = part.a;
                  return _Utils_Tuple2(
                    accum,
                    $elm$core$Maybe$Just(
                      _Utils_ap(contextTags, tags2)
                    )
                  );
                } else {
                  var otherPart = part;
                  return _Utils_Tuple2(
                    A2(
                      $elm$core$List$cons,
                      otherPart,
                      A2(
                        $elm$core$List$cons,
                        $mdgriffith$elm_codegen$Internal$Comments$DocTags(
                          $elm$core$List$sort(contextTags)
                        ),
                        accum
                      )
                    ),
                    $elm$core$Maybe$Nothing
                  );
                }
              }
            }
          ),
          _Utils_Tuple2(_List_Nil, $elm$core$Maybe$Nothing),
          innerParts
        );
        var partsExceptMaybeFirst = _v0.a;
        var maybeFirstPart = _v0.b;
        if (maybeFirstPart.$ === 1) {
          return partsExceptMaybeFirst;
        } else {
          var tags = maybeFirstPart.a;
          return A2(
            $elm$core$List$cons,
            $mdgriffith$elm_codegen$Internal$Comments$DocTags(
              $elm$core$List$sort(tags)
            ),
            partsExceptMaybeFirst
          );
        }
      };
      var $mdgriffith$elm_codegen$Internal$Comments$layoutTags = F2(
        function(width, parts) {
          return A3(
            $elm$core$List$foldr,
            F2(
              function(part, _v0) {
                var accumParts = _v0.a;
                var accumDocTags = _v0.b;
                if (part.$ === 2) {
                  var tags = part.a;
                  var splits = A2($mdgriffith$elm_codegen$Internal$Comments$fitAndSplit, width, tags);
                  return _Utils_Tuple2(
                    _Utils_ap(
                      A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Comments$DocTags, splits),
                      accumParts
                    ),
                    _Utils_ap(accumDocTags, splits)
                  );
                } else {
                  var otherPart = part;
                  return _Utils_Tuple2(
                    A2($elm$core$List$cons, otherPart, accumParts),
                    accumDocTags
                  );
                }
              }
            ),
            _Utils_Tuple2(_List_Nil, _List_Nil),
            $mdgriffith$elm_codegen$Internal$Comments$mergeDocTags(parts)
          );
        }
      );
      var $the_sett$elm_pretty_printer$Internals$NLine = F3(
        function(a, b, c) {
          return { $: 2, a, b, c };
        }
      );
      var $the_sett$elm_pretty_printer$Internals$NNil = { $: 0 };
      var $the_sett$elm_pretty_printer$Internals$NText = F3(
        function(a, b, c) {
          return { $: 1, a, b, c };
        }
      );
      var $the_sett$elm_pretty_printer$Internals$fits = F2(
        function(w, normal) {
          fits:
            while (true) {
              if (w < 0) {
                return false;
              } else {
                switch (normal.$) {
                  case 0:
                    return true;
                  case 1:
                    var text = normal.a;
                    var innerNormal = normal.b;
                    var $temp$w = w - $elm$core$String$length(text), $temp$normal = innerNormal(0);
                    w = $temp$w;
                    normal = $temp$normal;
                    continue fits;
                  default:
                    return true;
                }
              }
            }
        }
      );
      var $the_sett$elm_pretty_printer$Internals$better = F4(
        function(w, k, doc, doc2Fn) {
          return A2($the_sett$elm_pretty_printer$Internals$fits, w - k, doc) ? doc : doc2Fn(0);
        }
      );
      var $the_sett$elm_pretty_printer$Internals$best = F3(
        function(width, startCol, x) {
          var be = F3(
            function(w, k, docs) {
              be:
                while (true) {
                  if (!docs.b) {
                    return $the_sett$elm_pretty_printer$Internals$NNil;
                  } else {
                    switch (docs.a.b.$) {
                      case 0:
                        var _v1 = docs.a;
                        var i = _v1.a;
                        var _v2 = _v1.b;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = ds;
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                      case 1:
                        var _v3 = docs.a;
                        var i = _v3.a;
                        var _v4 = _v3.b;
                        var doc = _v4.a;
                        var doc2 = _v4.b;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2(
                          $elm$core$List$cons,
                          _Utils_Tuple2(
                            i,
                            doc(0)
                          ),
                          A2(
                            $elm$core$List$cons,
                            _Utils_Tuple2(
                              i,
                              doc2(0)
                            ),
                            ds
                          )
                        );
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                      case 2:
                        var _v5 = docs.a;
                        var i = _v5.a;
                        var _v6 = _v5.b;
                        var j = _v6.a;
                        var doc = _v6.b;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2(
                          $elm$core$List$cons,
                          _Utils_Tuple2(
                            i + j,
                            doc(0)
                          ),
                          ds
                        );
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                      case 3:
                        var _v7 = docs.a;
                        var i = _v7.a;
                        var _v8 = _v7.b;
                        var text = _v8.a;
                        var maybeTag = _v8.b;
                        var ds = docs.b;
                        return A3(
                          $the_sett$elm_pretty_printer$Internals$NText,
                          text,
                          function(_v9) {
                            return A3(
                              be,
                              w,
                              k + $elm$core$String$length(text),
                              ds
                            );
                          },
                          maybeTag
                        );
                      case 4:
                        var _v10 = docs.a;
                        var i = _v10.a;
                        var _v11 = _v10.b;
                        var vsep = _v11.b;
                        var ds = docs.b;
                        return A3(
                          $the_sett$elm_pretty_printer$Internals$NLine,
                          i,
                          vsep,
                          function(_v12) {
                            return A3(
                              be,
                              w,
                              i + $elm$core$String$length(vsep),
                              ds
                            );
                          }
                        );
                      case 5:
                        var _v13 = docs.a;
                        var i = _v13.a;
                        var _v14 = _v13.b;
                        var doc = _v14.a;
                        var doc2 = _v14.b;
                        var ds = docs.b;
                        return A4(
                          $the_sett$elm_pretty_printer$Internals$better,
                          w,
                          k,
                          A3(
                            be,
                            w,
                            k,
                            A2(
                              $elm$core$List$cons,
                              _Utils_Tuple2(i, doc),
                              ds
                            )
                          ),
                          function(_v15) {
                            return A3(
                              be,
                              w,
                              k,
                              A2(
                                $elm$core$List$cons,
                                _Utils_Tuple2(i, doc2),
                                ds
                              )
                            );
                          }
                        );
                      case 6:
                        var _v16 = docs.a;
                        var i = _v16.a;
                        var fn = _v16.b.a;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2(
                          $elm$core$List$cons,
                          _Utils_Tuple2(
                            i,
                            fn(i)
                          ),
                          ds
                        );
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                      default:
                        var _v17 = docs.a;
                        var i = _v17.a;
                        var fn = _v17.b.a;
                        var ds = docs.b;
                        var $temp$w = w, $temp$k = k, $temp$docs = A2(
                          $elm$core$List$cons,
                          _Utils_Tuple2(
                            i,
                            fn(k)
                          ),
                          ds
                        );
                        w = $temp$w;
                        k = $temp$k;
                        docs = $temp$docs;
                        continue be;
                    }
                  }
                }
            }
          );
          return A3(
            be,
            width,
            startCol,
            _List_fromArray(
              [
                _Utils_Tuple2(0, x)
              ]
            )
          );
        }
      );
      var $the_sett$elm_pretty_printer$Internals$layout = function(normal) {
        var layoutInner = F2(
          function(normal2, acc) {
            layoutInner:
              while (true) {
                switch (normal2.$) {
                  case 0:
                    return acc;
                  case 1:
                    var text = normal2.a;
                    var innerNormal = normal2.b;
                    var maybeTag = normal2.c;
                    var $temp$normal2 = innerNormal(0), $temp$acc = A2($elm$core$List$cons, text, acc);
                    normal2 = $temp$normal2;
                    acc = $temp$acc;
                    continue layoutInner;
                  default:
                    var i = normal2.a;
                    var sep = normal2.b;
                    var innerNormal = normal2.c;
                    var norm = innerNormal(0);
                    if (norm.$ === 2) {
                      var $temp$normal2 = innerNormal(0), $temp$acc = A2($elm$core$List$cons, "\n" + sep, acc);
                      normal2 = $temp$normal2;
                      acc = $temp$acc;
                      continue layoutInner;
                    } else {
                      var $temp$normal2 = innerNormal(0), $temp$acc = A2(
                        $elm$core$List$cons,
                        "\n" + (A2($the_sett$elm_pretty_printer$Internals$copy, i, " ") + sep),
                        acc
                      );
                      normal2 = $temp$normal2;
                      acc = $temp$acc;
                      continue layoutInner;
                    }
                }
              }
          }
        );
        return $elm$core$String$concat(
          $elm$core$List$reverse(
            A2(layoutInner, normal, _List_Nil)
          )
        );
      };
      var $the_sett$elm_pretty_printer$Pretty$pretty = F2(
        function(w, doc) {
          return $the_sett$elm_pretty_printer$Internals$layout(
            A3($the_sett$elm_pretty_printer$Internals$best, w, 0, doc)
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Comments$prettyCode = function(val) {
        return A2(
          $the_sett$elm_pretty_printer$Pretty$indent,
          4,
          $the_sett$elm_pretty_printer$Pretty$string(val)
        );
      };
      var $mdgriffith$elm_codegen$Internal$Comments$prettyMarkdown = function(val) {
        return $the_sett$elm_pretty_printer$Pretty$string(val);
      };
      var $mdgriffith$elm_codegen$Internal$Comments$prettyTags = function(tags) {
        return $the_sett$elm_pretty_printer$Pretty$words(
          _List_fromArray(
            [
              $the_sett$elm_pretty_printer$Pretty$string("@docs"),
              A2(
                $the_sett$elm_pretty_printer$Pretty$join,
                $the_sett$elm_pretty_printer$Pretty$string(", "),
                A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, tags)
              )
            ]
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Comments$prettyCommentPart = function(part) {
        switch (part.$) {
          case 0:
            var val = part.a;
            return $mdgriffith$elm_codegen$Internal$Comments$prettyMarkdown(val);
          case 1:
            var val = part.a;
            return $mdgriffith$elm_codegen$Internal$Comments$prettyCode(val);
          default:
            var tags = part.a;
            return $mdgriffith$elm_codegen$Internal$Comments$prettyTags(tags);
        }
      };
      var $mdgriffith$elm_codegen$Internal$Comments$prettyFileComment = F2(
        function(width, comment) {
          var _v0 = A2(
            $mdgriffith$elm_codegen$Internal$Comments$layoutTags,
            width,
            $mdgriffith$elm_codegen$Internal$Comments$getParts(comment)
          );
          var parts = _v0.a;
          var splits = _v0.b;
          return _Utils_Tuple2(
            A2(
              $the_sett$elm_pretty_printer$Pretty$pretty,
              width,
              $mdgriffith$elm_codegen$Internal$Comments$delimeters(
                $the_sett$elm_pretty_printer$Pretty$lines(
                  A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Comments$prettyCommentPart, parts)
                )
              )
            ),
            splits
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$prettyDefaultModuleData = function(moduleData) {
        return $the_sett$elm_pretty_printer$Pretty$words(
          _List_fromArray(
            [
              $the_sett$elm_pretty_printer$Pretty$string("module"),
              $mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.ci)
              ),
              $mdgriffith$elm_codegen$Internal$Write$prettyExposing(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.d1)
              )
            ]
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyEffectModuleData = function(moduleData) {
        var prettyCmdAndSub = F2(
          function(maybeCmd, maybeSub) {
            var _v0 = _Utils_Tuple2(maybeCmd, maybeSub);
            if (!_v0.a.$) {
              if (!_v0.b.$) {
                var cmdName = _v0.a.a;
                var subName = _v0.b.a;
                return $elm$core$Maybe$Just(
                  $the_sett$elm_pretty_printer$Pretty$words(
                    _List_fromArray(
                      [
                        $the_sett$elm_pretty_printer$Pretty$string("where { command ="),
                        $the_sett$elm_pretty_printer$Pretty$string(cmdName),
                        $the_sett$elm_pretty_printer$Pretty$string(","),
                        $the_sett$elm_pretty_printer$Pretty$string("subscription ="),
                        $the_sett$elm_pretty_printer$Pretty$string(subName),
                        $the_sett$elm_pretty_printer$Pretty$string("}")
                      ]
                    )
                  )
                );
              } else {
                var cmdName = _v0.a.a;
                var _v3 = _v0.b;
                return $elm$core$Maybe$Just(
                  $the_sett$elm_pretty_printer$Pretty$words(
                    _List_fromArray(
                      [
                        $the_sett$elm_pretty_printer$Pretty$string("where { command ="),
                        $the_sett$elm_pretty_printer$Pretty$string(cmdName),
                        $the_sett$elm_pretty_printer$Pretty$string("}")
                      ]
                    )
                  )
                );
              }
            } else {
              if (_v0.b.$ === 1) {
                var _v1 = _v0.a;
                var _v2 = _v0.b;
                return $elm$core$Maybe$Nothing;
              } else {
                var _v4 = _v0.a;
                var subName = _v0.b.a;
                return $elm$core$Maybe$Just(
                  $the_sett$elm_pretty_printer$Pretty$words(
                    _List_fromArray(
                      [
                        $the_sett$elm_pretty_printer$Pretty$string("where { subscription ="),
                        $the_sett$elm_pretty_printer$Pretty$string(subName),
                        $the_sett$elm_pretty_printer$Pretty$string("}")
                      ]
                    )
                  )
                );
              }
            }
          }
        );
        return $the_sett$elm_pretty_printer$Pretty$words(
          _List_fromArray(
            [
              $the_sett$elm_pretty_printer$Pretty$string("effect module"),
              $mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.ci)
              ),
              A2(
                $mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
                $elm$core$Basics$identity,
                A2(
                  prettyCmdAndSub,
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(moduleData.dQ),
                  $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(moduleData.eW)
                )
              ),
              $mdgriffith$elm_codegen$Internal$Write$prettyExposing(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.d1)
              )
            ]
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyPortModuleData = function(moduleData) {
        return $the_sett$elm_pretty_printer$Pretty$words(
          _List_fromArray(
            [
              $the_sett$elm_pretty_printer$Pretty$string("port module"),
              $mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.ci)
              ),
              $mdgriffith$elm_codegen$Internal$Write$prettyExposing(
                $mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.d1)
              )
            ]
          )
        );
      };
      var $mdgriffith$elm_codegen$Internal$Write$prettyModule = function(mod) {
        switch (mod.$) {
          case 0:
            var defaultModuleData = mod.a;
            return $mdgriffith$elm_codegen$Internal$Write$prettyDefaultModuleData(defaultModuleData);
          case 1:
            var defaultModuleData = mod.a;
            return $mdgriffith$elm_codegen$Internal$Write$prettyPortModuleData(defaultModuleData);
          default:
            var effectModuleData = mod.a;
            return $mdgriffith$elm_codegen$Internal$Write$prettyEffectModuleData(effectModuleData);
        }
      };
      var $mdgriffith$elm_codegen$Internal$Write$prepareLayout = F2(
        function(width, file) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$a,
            A2($mdgriffith$elm_codegen$Internal$Write$prettyDeclarations, file.dE, file.ak),
            A2(
              $the_sett$elm_pretty_printer$Pretty$a,
              $mdgriffith$elm_codegen$Internal$Write$importsPretty(file.b),
              function(doc) {
                var _v0 = file.bj;
                if (_v0.$ === 1) {
                  return doc;
                } else {
                  var fileComment = _v0.a;
                  var _v1 = A2($mdgriffith$elm_codegen$Internal$Comments$prettyFileComment, width, fileComment);
                  var fileCommentStr = _v1.a;
                  var innerTags = _v1.b;
                  return A2(
                    $the_sett$elm_pretty_printer$Pretty$a,
                    $the_sett$elm_pretty_printer$Pretty$line,
                    A2(
                      $the_sett$elm_pretty_printer$Pretty$a,
                      $mdgriffith$elm_codegen$Internal$Write$prettyComments(
                        _List_fromArray(
                          [fileCommentStr]
                        )
                      ),
                      doc
                    )
                  );
                }
              }(
                A2(
                  $the_sett$elm_pretty_printer$Pretty$a,
                  $the_sett$elm_pretty_printer$Pretty$line,
                  A2(
                    $the_sett$elm_pretty_printer$Pretty$a,
                    $the_sett$elm_pretty_printer$Pretty$line,
                    $mdgriffith$elm_codegen$Internal$Write$prettyModule(file.W)
                  )
                )
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$pretty = F2(
        function(width, file) {
          return A2(
            $the_sett$elm_pretty_printer$Pretty$pretty,
            width,
            A2($mdgriffith$elm_codegen$Internal$Write$prepareLayout, width, file)
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Write$write = $mdgriffith$elm_codegen$Internal$Write$pretty(80);
      var $mdgriffith$elm_codegen$Elm$render = F2(
        function(toDocComment, fileDetails) {
          var mod = fileDetails.W;
          var exposedGroups = $mdgriffith$elm_codegen$Internal$Compiler$getExposedGroups(fileDetails.dL);
          var exposed = $mdgriffith$elm_codegen$Internal$Compiler$getExposed(fileDetails.dL);
          var body = $mdgriffith$elm_codegen$Internal$Write$write(
            {
              dE: fileDetails.dE,
              bj: $elm$core$Maybe$Just(
                A2(
                  $mdgriffith$elm_codegen$Internal$Comments$addPart,
                  $mdgriffith$elm_codegen$Internal$Comments$emptyComment,
                  $mdgriffith$elm_codegen$Internal$Comments$Markdown(
                    function() {
                      if (!exposedGroups.b) {
                        return "";
                      } else {
                        return "\n" + A2(
                          $elm$core$String$join,
                          "\n\n",
                          toDocComment(exposedGroups)
                        );
                      }
                    }()
                  )
                )
              ),
              ak: fileDetails.dL,
              b: A2(
                $elm$core$List$filterMap,
                $mdgriffith$elm_codegen$Internal$Compiler$makeImport(fileDetails.dE),
                fileDetails.b
              ),
              W: ($mdgriffith$elm_codegen$Internal$Compiler$hasPorts(fileDetails.dL) ? $stil4m$elm_syntax$Elm$Syntax$Module$PortModule : $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule)(
                {
                  d1: function() {
                    if (!exposed.b) {
                      return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                        $stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
                      );
                    } else {
                      return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                        $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
                          $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(exposed)
                        )
                      );
                    }
                  }(),
                  ci: $mdgriffith$elm_codegen$Internal$Compiler$nodify(mod)
                }
              )
            }
          );
          return {
            dT: body,
            eE: A2($elm$core$String$join, "/", mod) + ".elm"
          };
        }
      );
      var $mdgriffith$elm_codegen$Elm$fileWith = F3(
        function(mod, options, decs) {
          return A2(
            $mdgriffith$elm_codegen$Elm$render,
            options.S,
            {
              dE: options.dE,
              dL: decs,
              b: A3(
                $mdgriffith$elm_codegen$Elm$reduceDeclarationImports,
                mod,
                decs,
                _Utils_Tuple2($elm$core$Set$empty, _List_Nil)
              ).b,
              aV: "",
              W: mod
            }
          );
        }
      );
      var $author$project$Gen$Json$Decode$moduleName_ = _List_fromArray(
        ["Json", "Decode"]
      );
      var $author$project$Gen$Json$Decode$annotation_ = {
        G: function(decoderArg0) {
          return A3(
            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
            _List_fromArray(
              ["Json", "Decode"]
            ),
            "Decoder",
            _List_fromArray(
              [decoderArg0]
            )
          );
        },
        bx: A3(
          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
          _List_fromArray(
            ["Json", "Decode"]
          ),
          "Error",
          _List_Nil
        ),
        dq: A4(
          $mdgriffith$elm_codegen$Elm$Annotation$alias,
          $author$project$Gen$Json$Decode$moduleName_,
          "Value",
          _List_Nil,
          A3(
            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
            _List_fromArray(
              ["Json", "Encode"]
            ),
            "Value",
            _List_Nil
          )
        )
      };
      var $author$project$Gen$Time$call_ = {
        bm: F2(
          function(customZoneArg, customZoneArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$int,
                          $mdgriffith$elm_codegen$Elm$Annotation$list(
                            $mdgriffith$elm_codegen$Elm$Annotation$record(
                              _List_fromArray(
                                [
                                  _Utils_Tuple2("start", $mdgriffith$elm_codegen$Elm$Annotation$int),
                                  _Utils_Tuple2("offset", $mdgriffith$elm_codegen$Elm$Annotation$int)
                                ]
                              )
                            )
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Time"]
                        ),
                        "Zone",
                        _List_Nil
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "customZone"
                }
              ),
              _List_fromArray(
                [customZoneArg, customZoneArg0]
              )
            );
          }
        ),
        bz: F2(
          function(everyArg, everyArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$float,
                          A2(
                            $mdgriffith$elm_codegen$Elm$Annotation$function,
                            _List_fromArray(
                              [
                                A3(
                                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                                  _List_fromArray(
                                    ["Time"]
                                  ),
                                  "Posix",
                                  _List_Nil
                                )
                              ]
                            ),
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_Nil,
                        "Sub",
                        _List_fromArray(
                          [
                            $mdgriffith$elm_codegen$Elm$Annotation$var("msg")
                          ]
                        )
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "every"
                }
              ),
              _List_fromArray(
                [everyArg, everyArg0]
              )
            );
          }
        ),
        ej: function(millisToPosixArg) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [$mdgriffith$elm_codegen$Elm$Annotation$int]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Time"]
                      ),
                      "Posix",
                      _List_Nil
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Time"]
                ),
                x: "millisToPosix"
              }
            ),
            _List_fromArray(
              [millisToPosixArg]
            )
          );
        },
        eH: function(posixToMillisArg) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [
                        A3(
                          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                          _List_fromArray(
                            ["Time"]
                          ),
                          "Posix",
                          _List_Nil
                        )
                      ]
                    ),
                    $mdgriffith$elm_codegen$Elm$Annotation$int
                  )
                ),
                ab: _List_fromArray(
                  ["Time"]
                ),
                x: "posixToMillis"
              }
            ),
            _List_fromArray(
              [posixToMillisArg]
            )
          );
        },
        c7: F2(
          function(toDayArg, toDayArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$int
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toDay"
                }
              ),
              _List_fromArray(
                [toDayArg, toDayArg0]
              )
            );
          }
        ),
        c8: F2(
          function(toHourArg, toHourArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$int
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toHour"
                }
              ),
              _List_fromArray(
                [toHourArg, toHourArg0]
              )
            );
          }
        ),
        da: F2(
          function(toMillisArg, toMillisArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$int
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toMillis"
                }
              ),
              _List_fromArray(
                [toMillisArg, toMillisArg0]
              )
            );
          }
        ),
        db: F2(
          function(toMinuteArg, toMinuteArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$int
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toMinute"
                }
              ),
              _List_fromArray(
                [toMinuteArg, toMinuteArg0]
              )
            );
          }
        ),
        dc: F2(
          function(toMonthArg, toMonthArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Time"]
                        ),
                        "Month",
                        _List_Nil
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toMonth"
                }
              ),
              _List_fromArray(
                [toMonthArg, toMonthArg0]
              )
            );
          }
        ),
        de: F2(
          function(toSecondArg, toSecondArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$int
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toSecond"
                }
              ),
              _List_fromArray(
                [toSecondArg, toSecondArg0]
              )
            );
          }
        ),
        dh: F2(
          function(toWeekdayArg, toWeekdayArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Time"]
                        ),
                        "Weekday",
                        _List_Nil
                      )
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toWeekday"
                }
              ),
              _List_fromArray(
                [toWeekdayArg, toWeekdayArg0]
              )
            );
          }
        ),
        di: F2(
          function(toYearArg, toYearArg0) {
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Zone",
                            _List_Nil
                          ),
                          A3(
                            $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                            _List_fromArray(
                              ["Time"]
                            ),
                            "Posix",
                            _List_Nil
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$int
                    )
                  ),
                  ab: _List_fromArray(
                    ["Time"]
                  ),
                  x: "toYear"
                }
              ),
              _List_fromArray(
                [toYearArg, toYearArg0]
              )
            );
          }
        )
      };
      var $author$project$Gen$Json$Decode$int = $mdgriffith$elm_codegen$Elm$value(
        {
          Z: $elm$core$Maybe$Just(
            A3(
              $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
              _List_fromArray(
                ["Json", "Decode"]
              ),
              "Decoder",
              _List_fromArray(
                [$mdgriffith$elm_codegen$Elm$Annotation$int]
              )
            )
          ),
          ab: _List_fromArray(
            ["Json", "Decode"]
          ),
          x: "int"
        }
      );
      var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction = function(a) {
        return { $: 21, a };
      };
      var $mdgriffith$elm_codegen$Elm$popLastAndDenodeLast = function(lst) {
        var _v0 = $elm$core$List$reverse(lst);
        if (!_v0.b) {
          return $elm$core$Maybe$Nothing;
        } else {
          var last = _v0.a;
          var initReverse = _v0.b;
          return $elm$core$Maybe$Just(
            _Utils_Tuple2(
              $elm$core$List$reverse(initReverse),
              $mdgriffith$elm_codegen$Internal$Compiler$denode(last)
            )
          );
        }
      };
      var $mdgriffith$elm_codegen$Elm$betaReduce = function(e) {
        var extractLastArg = function(arg2) {
          _v0$2:
            while (true) {
              switch (arg2.$) {
                case 3:
                  if (!arg2.a.b) {
                    var n = arg2.b;
                    return $elm$core$Maybe$Just(n);
                  } else {
                    break _v0$2;
                  }
                case 14:
                  var p = arg2.a;
                  return extractLastArg(
                    $mdgriffith$elm_codegen$Internal$Compiler$denode(p)
                  );
                default:
                  break _v0$2;
              }
            }
          return $elm$core$Maybe$Nothing;
        };
        if (e.$ === 17) {
          var args = e.a.s;
          var expression = e.a.a;
          var _v2 = $mdgriffith$elm_codegen$Elm$popLastAndDenodeLast(args);
          if (!_v2.$ && _v2.a.b.$ === 11) {
            var _v3 = _v2.a;
            var initLambdaArgs = _v3.a;
            var lastLambdaArg = _v3.b.a;
            var _v4 = $mdgriffith$elm_codegen$Internal$Compiler$denode(expression);
            switch (_v4.$) {
              case 20:
                var argNode = _v4.a;
                var fieldNode = _v4.b;
                var fieldName = $mdgriffith$elm_codegen$Internal$Compiler$denode(fieldNode);
                var arg = $mdgriffith$elm_codegen$Internal$Compiler$denode(argNode);
                if (arg.$ === 3 && !arg.a.b) {
                  var argName = arg.b;
                  return _Utils_eq(argName, lastLambdaArg) ? $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction("." + fieldName) : e;
                } else {
                  return e;
                }
              case 1:
                var applicationArgs = _v4.a;
                var _v6 = $mdgriffith$elm_codegen$Elm$popLastAndDenodeLast(applicationArgs);
                if (!_v6.$) {
                  if (!_v6.a.a.b) {
                    var _v7 = _v6.a;
                    var uniqueApplicationArg = _v7.b;
                    return _Utils_eq(
                      extractLastArg(uniqueApplicationArg),
                      $elm$core$Maybe$Just(lastLambdaArg)
                    ) ? A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, _List_Nil, "identity") : e;
                  } else {
                    var _v8 = _v6.a;
                    var initApplicationArgs = _v8.a;
                    var lastApplicationArg = _v8.b;
                    if (_Utils_eq(
                      extractLastArg(lastApplicationArg),
                      $elm$core$Maybe$Just(lastLambdaArg)
                    )) {
                      if ($elm$core$List$isEmpty(initLambdaArgs)) {
                        if (initApplicationArgs.b && !initApplicationArgs.b.b) {
                          var s = initApplicationArgs.a;
                          return $mdgriffith$elm_codegen$Elm$betaReduce(
                            $mdgriffith$elm_codegen$Internal$Compiler$denode(s)
                          );
                        } else {
                          return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(initApplicationArgs);
                        }
                      } else {
                        return $mdgriffith$elm_codegen$Elm$betaReduce(
                          $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
                            {
                              s: initLambdaArgs,
                              a: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                                $stil4m$elm_syntax$Elm$Syntax$Expression$Application(initApplicationArgs)
                              )
                            }
                          )
                        );
                      }
                    } else {
                      return e;
                    }
                  }
                } else {
                  return e;
                }
              default:
                return e;
            }
          } else {
            return e;
          }
        } else {
          return e;
        }
      };
      var $mdgriffith$elm_codegen$Elm$functionReduced = F2(
        function(argBaseName, toExpression) {
          return $mdgriffith$elm_codegen$Internal$Compiler$expression(
            function(index) {
              var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$getName, argBaseName, index);
              var arg1Name = _v0.a;
              var newIndex = _v0.b;
              var argType = $mdgriffith$elm_codegen$Elm$Annotation$var(arg1Name);
              var arg1 = $mdgriffith$elm_codegen$Elm$value(
                {
                  Z: $elm$core$Maybe$Just(argType),
                  ab: _List_Nil,
                  x: arg1Name
                }
              );
              var _v1 = toExpression(arg1);
              var toExpr = _v1;
              var _return = toExpr(newIndex);
              return {
                Z: function() {
                  var _v2 = _return.Z;
                  if (_v2.$ === 1) {
                    var err = _v2.a;
                    return _return.Z;
                  } else {
                    var returnAnnotation = _v2.a;
                    return $elm$core$Result$Ok(
                      {
                        dE: returnAnnotation.dE,
                        d: returnAnnotation.d,
                        $7: A2(
                          $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                            $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(arg1Name)
                          ),
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.$7)
                        )
                      }
                    );
                  }
                }(),
                a: $mdgriffith$elm_codegen$Elm$betaReduce(
                  $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
                    {
                      s: _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                            $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(arg1Name)
                          )
                        ]
                      ),
                      a: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.a)
                    }
                  )
                ),
                b: _return.b
              };
            }
          );
        }
      );
      var $author$project$Gen$Json$Decode$map = F2(
        function(mapArg, mapArg0) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [
                        A2(
                          $mdgriffith$elm_codegen$Elm$Annotation$function,
                          _List_fromArray(
                            [
                              $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                            ]
                          ),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                        ),
                        A3(
                          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                          _List_fromArray(
                            ["Json", "Decode"]
                          ),
                          "Decoder",
                          _List_fromArray(
                            [
                              $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                            ]
                          )
                        )
                      ]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                        ]
                      )
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Json", "Decode"]
                ),
                x: "map"
              }
            ),
            _List_fromArray(
              [
                A2($mdgriffith$elm_codegen$Elm$functionReduced, "mapUnpack", mapArg),
                mapArg0
              ]
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Elm$Annotation$maybe = function(maybeArg) {
        return A3(
          $mdgriffith$elm_codegen$Elm$Annotation$typed,
          _List_Nil,
          "Maybe",
          _List_fromArray(
            [maybeArg]
          )
        );
      };
      var $mdgriffith$elm_codegen$Elm$Annotation$unit = { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, Z: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit, b: _List_Nil };
      var $author$project$Gen$Json$Decode$values_ = {
        a4: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Decode"]
                        ),
                        "Decoder",
                        _List_fromArray(
                          [
                            $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                          ]
                        )
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "andThen"
          }
        ),
        a7: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Array"]
                        ),
                        "Array",
                        _List_fromArray(
                          [
                            $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                          ]
                        )
                      )
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "array"
          }
        ),
        a8: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$string),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "at"
          }
        ),
        bd: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$bool]
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "bool"
          }
        ),
        bq: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    $mdgriffith$elm_codegen$Elm$Annotation$string
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Result"]
                  ),
                  "Result",
                  _List_fromArray(
                    [
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Decode"]
                        ),
                        "Error",
                        _List_Nil
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "decodeString"
          }
        ),
        br: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Result"]
                  ),
                  "Result",
                  _List_fromArray(
                    [
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Decode"]
                        ),
                        "Error",
                        _List_Nil
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "decodeValue"
          }
        ),
        bt: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Dict"]
                        ),
                        "Dict",
                        _List_fromArray(
                          [
                            $mdgriffith$elm_codegen$Elm$Annotation$string,
                            $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                          ]
                        )
                      )
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "dict"
          }
        ),
        by: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Error",
                      _List_Nil
                    )
                  ]
                ),
                $mdgriffith$elm_codegen$Elm$Annotation$string
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "errorToString"
          }
        ),
        bB: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$string]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "fail"
          }
        ),
        an: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$string,
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "field"
          }
        ),
        bH: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$float]
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "float"
          }
        ),
        bV: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$int,
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "index"
          }
        ),
        aR: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$int]
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "int"
          }
        ),
        b0: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$list(
                        A2(
                          $mdgriffith$elm_codegen$Elm$Annotation$tuple,
                          $mdgriffith$elm_codegen$Elm$Annotation$string,
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        )
                      )
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "keyValuePairs"
          }
        ),
        b3: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [$mdgriffith$elm_codegen$Elm$Annotation$unit]
                      ),
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Decode"]
                        ),
                        "Decoder",
                        _List_fromArray(
                          [
                            $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                          ]
                        )
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "lazy"
          }
        ),
        b4: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$list(
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                      )
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "list"
          }
        ),
        b5: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map"
          }
        ),
        b6: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map2"
          }
        ),
        b7: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map3"
          }
        ),
        b8: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map4"
          }
        ),
        b9: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map5"
          }
        ),
        ca: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("f")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("f")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map6"
          }
        ),
        cb: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("f"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("g")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("f")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("g")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map7"
          }
        ),
        cc: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("f"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("g"),
                          $mdgriffith$elm_codegen$Elm$Annotation$var("h")
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("c")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("d")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("e")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("f")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("g")
                        ]
                      )
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("h")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "map8"
          }
        ),
        cf: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$maybe(
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                      )
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "maybe"
          }
        ),
        cq: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "null"
          }
        ),
        cr: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$maybe(
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                      )
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "nullable"
          }
        ),
        av: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$list(
                      A3(
                        $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                        _List_fromArray(
                          ["Json", "Decode"]
                        ),
                        "Decoder",
                        _List_fromArray(
                          [
                            $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                          ]
                        )
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "oneOf"
          }
        ),
        cv: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$Annotation$function,
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a"),
                          $mdgriffith$elm_codegen$Elm$Annotation$list(
                            $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                          )
                        ]
                      ),
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("value")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "oneOrMore"
          }
        ),
        cX: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [$mdgriffith$elm_codegen$Elm$Annotation$string]
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "string"
          }
        ),
        c$: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Json", "Decode"]
                  ),
                  "Decoder",
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  )
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "succeed"
          }
        ),
        dq: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3(
                $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                _List_fromArray(
                  ["Json", "Decode"]
                ),
                "Decoder",
                _List_fromArray(
                  [
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Value",
                      _List_Nil
                    )
                  ]
                )
              )
            ),
            ab: _List_fromArray(
              ["Json", "Decode"]
            ),
            x: "value"
          }
        )
      };
      var $author$project$EosType$generateDecoder = function(eosType) {
        switch (eosType.$) {
          case 0:
            return $author$project$Gen$Json$Decode$values_.bd;
          case 1:
            return $author$project$Gen$Json$Decode$values_.aR;
          case 2:
            return $author$project$Gen$Json$Decode$values_.bH;
          case 3:
            return $author$project$Gen$Eos$TimePoint$values_.G;
          case 4:
            return $author$project$Gen$Eos$TimePointSec$values_.G;
          case 5:
            return A2($author$project$Gen$Json$Decode$map, $author$project$Gen$Time$call_.ej, $author$project$Gen$Json$Decode$int);
          case 6:
            return $author$project$Gen$Eos$Name$values_.G;
          case 7:
            return $author$project$Gen$Json$Decode$values_.cX;
          case 8:
            return $author$project$Gen$Eos$Checksum$values_.G;
          case 9:
            return $author$project$Gen$Eos$PublicKey$values_.G;
          case 10:
            return $author$project$Gen$Eos$Signature$values_.G;
          case 11:
            return $author$project$Gen$Eos$Symbol$values_.G;
          case 12:
            return $author$project$Gen$Eos$SymbolCode$values_.G;
          case 13:
            return $author$project$Gen$Eos$Asset$values_.G;
          case 14:
            return $author$project$Gen$Eos$ExtendedAsset$values_.G;
          default:
            var innerType = eosType.a;
            return A2(
              $mdgriffith$elm_codegen$Elm$apply,
              $author$project$Gen$Json$Decode$values_.b4,
              _List_fromArray(
                [
                  $author$project$EosType$generateDecoder(innerType)
                ]
              )
            );
        }
      };
      var $author$project$Context$prefixed = F2(
        function(context, suffix) {
          return A2(
            $elm$core$List$map,
            $elm_community$string_extra$String$Extra$classify,
            _Utils_ap(
              A2($elm$core$String$split, ".", context.bk),
              suffix
            )
          );
        }
      );
      var $author$project$Gen$Json$Decode$Pipeline$required = F3(
        function(requiredArg, requiredArg0, requiredArg1) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$function,
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Elm$Annotation$string,
                        A3(
                          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                          _List_fromArray(
                            ["Json", "Decode"]
                          ),
                          "Decoder",
                          _List_fromArray(
                            [
                              $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                            ]
                          )
                        ),
                        A3(
                          $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                          _List_fromArray(
                            ["Json", "Decode"]
                          ),
                          "Decoder",
                          _List_fromArray(
                            [
                              A2(
                                $mdgriffith$elm_codegen$Elm$Annotation$function,
                                _List_fromArray(
                                  [
                                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                                  ]
                                ),
                                $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                              )
                            ]
                          )
                        )
                      ]
                    ),
                    A3(
                      $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                      _List_fromArray(
                        ["Json", "Decode"]
                      ),
                      "Decoder",
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Elm$Annotation$var("b")
                        ]
                      )
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Json", "Decode", "Pipeline"]
                ),
                x: "required"
              }
            ),
            _List_fromArray(
              [
                $mdgriffith$elm_codegen$Elm$string(requiredArg),
                requiredArg0,
                requiredArg1
              ]
            )
          );
        }
      );
      var $author$project$Gen$Json$Decode$succeed = function(succeedArg) {
        return A2(
          $mdgriffith$elm_codegen$Elm$apply,
          $mdgriffith$elm_codegen$Elm$value(
            {
              Z: $elm$core$Maybe$Just(
                A2(
                  $mdgriffith$elm_codegen$Elm$Annotation$function,
                  _List_fromArray(
                    [
                      $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                    ]
                  ),
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_fromArray(
                      ["Json", "Decode"]
                    ),
                    "Decoder",
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                      ]
                    )
                  )
                )
              ),
              ab: _List_fromArray(
                ["Json", "Decode"]
              ),
              x: "succeed"
            }
          ),
          _List_fromArray(
            [succeedArg]
          )
        );
      };
      var $author$project$Generate$Table$Decoder$generate = F2(
        function(context, table) {
          return A2(
            $mdgriffith$elm_codegen$Elm$withDocumentation,
            "Decoder for the " + (table.x + " table."),
            A2(
              $mdgriffith$elm_codegen$Elm$declaration,
              $elm_community$string_extra$String$Extra$camelize(table.x),
              A2(
                $mdgriffith$elm_codegen$Elm$withType,
                $author$project$Gen$Json$Decode$annotation_.G(
                  A2(
                    $mdgriffith$elm_codegen$Elm$Annotation$named,
                    A2(
                      $author$project$Context$prefixed,
                      context,
                      _List_fromArray(
                        ["Table"]
                      )
                    ),
                    $elm_community$string_extra$String$Extra$classify(table.x)
                  )
                ),
                A3(
                  $elm$core$List$foldl,
                  F2(
                    function(column, expression) {
                      return A3(
                        $author$project$Gen$Json$Decode$Pipeline$required,
                        column.x,
                        $author$project$EosType$generateDecoder(column.$7),
                        expression
                      );
                    }
                  ),
                  $author$project$Gen$Json$Decode$succeed(
                    $mdgriffith$elm_codegen$Elm$value(
                      {
                        Z: $elm$core$Maybe$Nothing,
                        ab: A2(
                          $author$project$Context$prefixed,
                          context,
                          _List_fromArray(
                            ["Table"]
                          )
                        ),
                        x: $elm_community$string_extra$String$Extra$classify(table.x)
                      }
                    )
                  ),
                  table.bi
                )
              )
            )
          );
        }
      );
      var $mdgriffith$elm_codegen$Internal$Types$bool = A2(
        $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
        $mdgriffith$elm_codegen$Internal$Types$nodify(
          _Utils_Tuple2(_List_Nil, "Bool")
        ),
        _List_Nil
      );
      var $mdgriffith$elm_codegen$Elm$bool = function(on) {
        return function(_v0) {
          return {
            Z: $elm$core$Result$Ok(
              { dE: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, d: $elm$core$Dict$empty, $7: $mdgriffith$elm_codegen$Internal$Types$bool }
            ),
            a: A2(
              $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue,
              _List_Nil,
              on ? "True" : "False"
            ),
            b: _List_Nil
          };
        };
      };
      var $elm$core$Tuple$pair = F2(
        function(a, b) {
          return _Utils_Tuple2(a, b);
        }
      );
      var $mdgriffith$elm_codegen$Internal$Compiler$DuplicateFieldInRecord = function(a) {
        return { $: 5, a };
      };
      var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function(a) {
        return { $: 18, a };
      };
      var $mdgriffith$elm_codegen$Elm$record = function(fields) {
        return $mdgriffith$elm_codegen$Internal$Compiler$expression(
          function(index) {
            var unified = A3(
              $elm$core$List$foldl,
              F2(
                function(_v4, found) {
                  var unformattedFieldName = _v4.a;
                  var fieldExpression = _v4.b;
                  var fieldName = $mdgriffith$elm_codegen$Internal$Compiler$formatValue(unformattedFieldName);
                  var _v5 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, found.bV, fieldExpression);
                  var newIndex = _v5.a;
                  var exp = _v5.b;
                  return {
                    K: function() {
                      if (A2($elm$core$Set$member, fieldName, found.az)) {
                        return A2(
                          $elm$core$List$cons,
                          $mdgriffith$elm_codegen$Internal$Compiler$DuplicateFieldInRecord(fieldName),
                          found.K
                        );
                      } else {
                        var _v6 = exp.Z;
                        if (_v6.$ === 1) {
                          if (!_v6.a.b) {
                            return found.K;
                          } else {
                            var errs = _v6.a;
                            return _Utils_ap(errs, found.K);
                          }
                        } else {
                          var ann = _v6.a;
                          return found.K;
                        }
                      }
                    }(),
                    L: function() {
                      var _v7 = exp.Z;
                      if (_v7.$ === 1) {
                        var err = _v7.a;
                        return found.L;
                      } else {
                        var ann = _v7.a;
                        return A2(
                          $elm$core$List$cons,
                          _Utils_Tuple2(
                            $mdgriffith$elm_codegen$Internal$Compiler$formatValue(fieldName),
                            ann
                          ),
                          found.L
                        );
                      }
                    }(),
                    bF: A2(
                      $elm$core$List$cons,
                      _Utils_Tuple2(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName),
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(exp.a)
                      ),
                      found.bF
                    ),
                    b: _Utils_ap(exp.b, found.b),
                    bV: newIndex,
                    az: A2($elm$core$Set$insert, fieldName, found.az)
                  };
                }
              ),
              { K: _List_Nil, L: _List_Nil, bF: _List_Nil, b: _List_Nil, bV: index, az: $elm$core$Set$empty },
              fields
            );
            return {
              Z: function() {
                var _v0 = unified.K;
                if (!_v0.b) {
                  return $elm$core$Result$Ok(
                    {
                      dE: A3(
                        $elm$core$List$foldl,
                        F2(
                          function(_v1, gathered) {
                            var name = _v1.a;
                            var ann = _v1.b;
                            return A2($mdgriffith$elm_codegen$Internal$Compiler$mergeAliases, ann.dE, gathered);
                          }
                        ),
                        $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
                        unified.L
                      ),
                      d: A3(
                        $elm$core$List$foldl,
                        F2(
                          function(_v2, gathered) {
                            var name = _v2.a;
                            var ann = _v2.b;
                            return A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, ann.d, gathered);
                          }
                        ),
                        $elm$core$Dict$empty,
                        unified.L
                      ),
                      $7: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                          A2(
                            $elm$core$List$map,
                            function(_v3) {
                              var name = _v3.a;
                              var ann = _v3.b;
                              return _Utils_Tuple2(
                                $mdgriffith$elm_codegen$Internal$Compiler$nodify(name),
                                $mdgriffith$elm_codegen$Internal$Compiler$nodify(ann.$7)
                              );
                            },
                            $elm$core$List$reverse(unified.L)
                          )
                        )
                      )
                    }
                  );
                } else {
                  var errs = _v0;
                  return $elm$core$Result$Err(errs);
                }
              }(),
              a: $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
                $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
                  $elm$core$List$reverse(unified.bF)
                )
              ),
              b: unified.b
            };
          }
        );
      };
      var $author$project$Gen$Eos$Query$make_ = {
        bv: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Eighth"
          }
        ),
        bG: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Fifth"
          }
        ),
        bI: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Fourth"
          }
        ),
        cn: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Ninth"
          }
        ),
        cA: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Primary"
          }
        ),
        aB: function(ar0) {
          return A2(
            $mdgriffith$elm_codegen$Elm$apply,
            $mdgriffith$elm_codegen$Elm$value(
              {
                Z: $elm$core$Maybe$Just(
                  A3(
                    $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                    _List_Nil,
                    "Query",
                    _List_fromArray(
                      [
                        $mdgriffith$elm_codegen$Elm$Annotation$var("response")
                      ]
                    )
                  )
                ),
                ab: _List_fromArray(
                  ["Eos", "Query"]
                ),
                x: "Query"
              }
            ),
            _List_fromArray(
              [ar0]
            )
          );
        },
        cI: function(response_args) {
          return A2(
            $mdgriffith$elm_codegen$Elm$withType,
            A4(
              $mdgriffith$elm_codegen$Elm$Annotation$alias,
              _List_fromArray(
                ["Eos", "Query"]
              ),
              "Response",
              _List_fromArray(
                [
                  $mdgriffith$elm_codegen$Elm$Annotation$var("response")
                ]
              ),
              $mdgriffith$elm_codegen$Elm$Annotation$record(
                _List_fromArray(
                  [
                    _Utils_Tuple2("hasMore", $mdgriffith$elm_codegen$Elm$Annotation$bool),
                    _Utils_Tuple2(
                      "nextCursor",
                      A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Cursor", _List_Nil)
                    ),
                    _Utils_Tuple2(
                      "result",
                      $mdgriffith$elm_codegen$Elm$Annotation$list(
                        $mdgriffith$elm_codegen$Elm$Annotation$var("response")
                      )
                    )
                  ]
                )
              )
            ),
            $mdgriffith$elm_codegen$Elm$record(
              _List_fromArray(
                [
                  A2($elm$core$Tuple$pair, "hasMore", response_args.d9),
                  A2($elm$core$Tuple$pair, "nextCursor", response_args.en),
                  A2($elm$core$Tuple$pair, "result", response_args.eP)
                ]
              )
            )
          );
        },
        cN: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Secondary"
          }
        ),
        cS: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Seventh"
          }
        ),
        cT: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Sixth"
          }
        ),
        c4: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Tenth"
          }
        ),
        c5: $mdgriffith$elm_codegen$Elm$value(
          {
            Z: $elm$core$Maybe$Just(
              A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, "Index", _List_Nil)
            ),
            ab: _List_fromArray(
              ["Eos", "Query"]
            ),
            x: "Tertiary"
          }
        )
      };
      var $mdgriffith$elm_codegen$Internal$Compiler$getAnnotation = function(exp) {
        return exp.Z;
      };
      var $mdgriffith$elm_codegen$Elm$maybe = function(maybeContent) {
        return function(index) {
          if (maybeContent.$ === 1) {
            return {
              Z: $elm$core$Result$Ok(
                A2(
                  $mdgriffith$elm_codegen$Internal$Compiler$getInnerInference,
                  index,
                  $mdgriffith$elm_codegen$Elm$Annotation$maybe(
                    $mdgriffith$elm_codegen$Elm$Annotation$var("a")
                  )
                )
              ),
              a: A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, _List_Nil, "Nothing"),
              b: _List_Nil
            };
          } else {
            var contentExp = maybeContent.a;
            var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, contentExp);
            var content = _v1.b;
            return {
              Z: A2(
                $elm$core$Result$map,
                function(ann) {
                  return {
                    dE: ann.dE,
                    d: ann.d,
                    $7: A2(
                      $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
                      $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                        _Utils_Tuple2(_List_Nil, "Maybe")
                      ),
                      _List_fromArray(
                        [
                          $mdgriffith$elm_codegen$Internal$Compiler$nodify(ann.$7)
                        ]
                      )
                    )
                  };
                },
                $mdgriffith$elm_codegen$Internal$Compiler$getAnnotation(content)
              ),
              a: $stil4m$elm_syntax$Elm$Syntax$Expression$Application(
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, _List_Nil, "Just")
                    ),
                    $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
                        $mdgriffith$elm_codegen$Internal$Compiler$nodify(content.a)
                      )
                    )
                  ]
                )
              ),
              b: $mdgriffith$elm_codegen$Internal$Compiler$getImports(content)
            };
          }
        };
      };
      var $mdgriffith$elm_codegen$Elm$nothing = $mdgriffith$elm_codegen$Elm$maybe($elm$core$Maybe$Nothing);
      var $author$project$Generate$Table$Query$generateQuery = F2(
        function(context, table) {
          return A2(
            $mdgriffith$elm_codegen$Elm$declaration,
            $elm_community$string_extra$String$Extra$camelize(table.x),
            A2(
              $mdgriffith$elm_codegen$Elm$withType,
              A2(
                $mdgriffith$elm_codegen$Elm$Annotation$function,
                _List_fromArray(
                  [
                    $mdgriffith$elm_codegen$Elm$Annotation$record(
                      _List_fromArray(
                        [
                          _Utils_Tuple2("scope", $mdgriffith$elm_codegen$Elm$Annotation$string)
                        ]
                      )
                    )
                  ]
                ),
                A3(
                  $mdgriffith$elm_codegen$Elm$Annotation$namedWith,
                  _List_fromArray(
                    ["Eos", "Query"]
                  ),
                  "Query",
                  _List_fromArray(
                    [
                      A2(
                        $mdgriffith$elm_codegen$Elm$Annotation$named,
                        A2(
                          $author$project$Context$prefixed,
                          context,
                          _List_fromArray(
                            ["Table"]
                          )
                        ),
                        $elm_community$string_extra$String$Extra$camelize(table.x)
                      )
                    ]
                  )
                )
              ),
              A2(
                $mdgriffith$elm_codegen$Elm$fn,
                _Utils_Tuple2(
                  "arg",
                  $elm$core$Maybe$Just(
                    $mdgriffith$elm_codegen$Elm$Annotation$record(
                      _List_fromArray(
                        [
                          _Utils_Tuple2("scope", $mdgriffith$elm_codegen$Elm$Annotation$string)
                        ]
                      )
                    )
                  )
                ),
                function(arg) {
                  return $author$project$Gen$Eos$Query$make_.aB(
                    $mdgriffith$elm_codegen$Elm$record(
                      _List_fromArray(
                        [
                          _Utils_Tuple2(
                            "scope",
                            A2($mdgriffith$elm_codegen$Elm$get, "scope", arg)
                          ),
                          _Utils_Tuple2("indexPosition", $mdgriffith$elm_codegen$Elm$nothing),
                          _Utils_Tuple2("lowerBound", $mdgriffith$elm_codegen$Elm$nothing),
                          _Utils_Tuple2("upperBound", $mdgriffith$elm_codegen$Elm$nothing),
                          _Utils_Tuple2("limit", $mdgriffith$elm_codegen$Elm$nothing),
                          _Utils_Tuple2(
                            "reverse",
                            $mdgriffith$elm_codegen$Elm$bool(false)
                          ),
                          _Utils_Tuple2(
                            "baseUrl",
                            $mdgriffith$elm_codegen$Elm$string(context.dK)
                          ),
                          _Utils_Tuple2(
                            "contract",
                            $mdgriffith$elm_codegen$Elm$string(context.bk)
                          ),
                          _Utils_Tuple2(
                            "table",
                            $mdgriffith$elm_codegen$Elm$string(table.x)
                          ),
                          _Utils_Tuple2(
                            "decoder",
                            $mdgriffith$elm_codegen$Elm$value(
                              {
                                Z: $elm$core$Maybe$Nothing,
                                ab: A2(
                                  $author$project$Context$prefixed,
                                  context,
                                  _List_fromArray(
                                    ["Table", "Decoder"]
                                  )
                                ),
                                x: $elm_community$string_extra$String$Extra$camelize(table.x)
                              }
                            )
                          )
                        ]
                      )
                    )
                  );
                }
              )
            )
          );
        }
      );
      var $author$project$Generate$Action$getNameBranch = function(action) {
        return A3(
          $mdgriffith$elm_codegen$Elm$Case$branch1,
          $elm_community$string_extra$String$Extra$classify(action.x),
          _Utils_Tuple2(
            "_",
            $author$project$Generate$Action$actionParameter(action)
          ),
          function(_v0) {
            return $mdgriffith$elm_codegen$Elm$string(action.x);
          }
        );
      };
      var $author$project$Generate$Action$getName = function(actions) {
        return A2(
          $mdgriffith$elm_codegen$Elm$declaration,
          "getName",
          A2(
            $mdgriffith$elm_codegen$Elm$fn,
            _Utils_Tuple2(
              "action",
              $elm$core$Maybe$Just(
                A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action")
              )
            ),
            function(actionArg) {
              return A3(
                $mdgriffith$elm_codegen$Elm$Case$custom,
                actionArg,
                A2($mdgriffith$elm_codegen$Elm$Annotation$named, _List_Nil, "Action"),
                A2($elm$core$List$map, $author$project$Generate$Action$getNameBranch, actions)
              );
            }
          )
        );
      };
      var $mdgriffith$elm_codegen$Elm$Variant = F2(
        function(a, b) {
          return { $: 0, a, b };
        }
      );
      var $mdgriffith$elm_codegen$Elm$variantWith = $mdgriffith$elm_codegen$Elm$Variant;
      var $author$project$Generate$Action$actionVariant = function(action) {
        return A2(
          $mdgriffith$elm_codegen$Elm$variantWith,
          $elm_community$string_extra$String$Extra$camelize(action.x),
          _List_fromArray(
            [
              $author$project$Generate$Action$actionParameter(action)
            ]
          )
        );
      };
      var $mdgriffith$elm_codegen$Elm$customType = F2(
        function(name, variants) {
          return A3(
            $mdgriffith$elm_codegen$Internal$Compiler$Declaration,
            $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
            A2(
              $elm$core$List$concatMap,
              function(_v0) {
                var listAnn = _v0.b;
                return A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, listAnn);
              },
              variants
            ),
            $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(
              {
                dS: A2(
                  $elm$core$List$map,
                  function(_v1) {
                    var varName = _v1.a;
                    var vars = _v1.b;
                    return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                      {
                        a6: A2(
                          $elm$core$List$map,
                          A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, $mdgriffith$elm_codegen$Internal$Compiler$nodify),
                          vars
                        ),
                        x: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                          $mdgriffith$elm_codegen$Internal$Compiler$formatType(varName)
                        )
                      }
                    );
                  },
                  variants
                ),
                aN: $elm$core$Maybe$Nothing,
                bQ: A2(
                  $elm$core$List$concatMap,
                  function(_v2) {
                    var listAnn = _v2.b;
                    return A2(
                      $elm$core$List$concatMap,
                      A2(
                        $elm$core$Basics$composeL,
                        $elm$core$List$map($mdgriffith$elm_codegen$Internal$Compiler$nodify),
                        $mdgriffith$elm_codegen$Internal$Compiler$getGenerics
                      ),
                      listAnn
                    );
                  },
                  variants
                ),
                x: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                  $mdgriffith$elm_codegen$Internal$Compiler$formatType(name)
                )
              }
            )
          );
        }
      );
      var $author$project$Generate$Action$type_ = function(actions) {
        return A2(
          $mdgriffith$elm_codegen$Elm$withDocumentation,
          "Represents an action that can be sent to the blockchain.\n\nYou can [encode](#encode) it and send it through a port to eosjs or similar.",
          A2(
            $mdgriffith$elm_codegen$Elm$customType,
            "Action",
            A2($elm$core$List$map, $author$project$Generate$Action$actionVariant, actions)
          )
        );
      };
      var $mdgriffith$elm_codegen$Elm$alias = F2(
        function(name, innerAnnotation) {
          return A3(
            $mdgriffith$elm_codegen$Internal$Compiler$Declaration,
            $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
            $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(innerAnnotation),
            $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
              {
                aN: $elm$core$Maybe$Nothing,
                bQ: A2(
                  $elm$core$List$map,
                  $mdgriffith$elm_codegen$Internal$Compiler$nodify,
                  $mdgriffith$elm_codegen$Internal$Compiler$getGenerics(innerAnnotation)
                ),
                x: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                  $mdgriffith$elm_codegen$Internal$Compiler$formatType(name)
                ),
                aF: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
                  $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(innerAnnotation)
                )
              }
            )
          );
        }
      );
      var $author$project$Generate$Table$type_ = function(table) {
        return A2(
          $mdgriffith$elm_codegen$Elm$withDocumentation,
          "Type representing the " + (table.x + " table."),
          A2(
            $mdgriffith$elm_codegen$Elm$alias,
            $elm_community$string_extra$String$Extra$camelize(table.x),
            $mdgriffith$elm_codegen$Elm$Annotation$record(
              A2(
                $elm$core$List$map,
                function(column) {
                  return _Utils_Tuple2(
                    $elm_community$string_extra$String$Extra$camelize(column.x),
                    $author$project$EosType$toAnnotation(column.$7)
                  );
                },
                table.bi
              )
            )
          )
        );
      };
      var $author$project$Generate$filesFromAbi = F3(
        function(base, context, abi) {
          var fileName = function(suffix) {
            return _Utils_ap(
              base,
              A2($author$project$Context$prefixed, context, suffix)
            );
          };
          var autoGeneratedWarning = "This file was automatically generated by NeoVier/elm-eos. Do not edit it by hand!";
          var prefixedFile = F2(
            function(suffix, _v0) {
              var docs = _v0.S;
              return A2(
                $mdgriffith$elm_codegen$Elm$fileWith,
                fileName(suffix),
                {
                  dE: _List_Nil,
                  S: function(groupsAndMembers) {
                    return A2(
                      $elm$core$List$cons,
                      autoGeneratedWarning,
                      docs(groupsAndMembers)
                    );
                  }
                }
              );
            }
          );
          return _List_fromArray(
            [
              A3(
                prefixedFile,
                _List_fromArray(
                  ["Action"]
                ),
                {
                  S: function(groupsAndMembers) {
                    return A2(
                      $elm$core$List$cons,
                      "This file contains all of the actions for the " + (context.bk + " contract. In order to send an action to the blockchain, create an [Action](#Action), [encode](#encode) it, and send through a port to eosjs, or similar."),
                      A2($elm$core$List$map, $mdgriffith$elm_codegen$Elm$docs, groupsAndMembers)
                    );
                  }
                },
                _List_fromArray(
                  [
                    A2(
                      $mdgriffith$elm_codegen$Elm$exposeWith,
                      {
                        T: true,
                        U: $elm$core$Maybe$Just("Action")
                      },
                      $author$project$Generate$Action$type_(abi.Y)
                    ),
                    A2(
                      $mdgriffith$elm_codegen$Elm$exposeWith,
                      {
                        T: true,
                        U: $elm$core$Maybe$Just("Encoding")
                      },
                      $author$project$Generate$Action$encode(context)
                    ),
                    A2(
                      $mdgriffith$elm_codegen$Elm$exposeWith,
                      {
                        T: true,
                        U: $elm$core$Maybe$Just("Encoding")
                      },
                      $author$project$Generate$Action$encodeSingleAction(abi.Y)
                    ),
                    $author$project$Generate$Action$getName(abi.Y)
                  ]
                )
              ),
              A3(
                prefixedFile,
                _List_fromArray(
                  ["Table"]
                ),
                {
                  S: function(groupsAndMembers) {
                    return A2(
                      $elm$core$List$cons,
                      "This file contains Elm types that represent all of the tables for the " + (context.bk + (" contract. You can query them with functions from the " + (A2(
                        $elm$core$String$join,
                        ".",
                        A2(
                          $elm$core$List$map,
                          $elm_community$string_extra$String$Extra$classify,
                          fileName(
                            _List_fromArray(
                              ["Table", "Query"]
                            )
                          )
                        )
                      ) + " module, and perform the queries with [Eos.Query.send](Eos-Query#send)"))),
                      A2($elm$core$List$map, $mdgriffith$elm_codegen$Elm$docs, groupsAndMembers)
                    );
                  }
                },
                A2(
                  $elm$core$List$map,
                  A2(
                    $elm$core$Basics$composeR,
                    $author$project$Generate$Table$type_,
                    $mdgriffith$elm_codegen$Elm$exposeWith(
                      {
                        T: true,
                        U: $elm$core$Maybe$Just("Tables")
                      }
                    )
                  ),
                  abi.ah
                )
              ),
              A3(
                prefixedFile,
                _List_fromArray(
                  ["Table", "Decoder"]
                ),
                {
                  S: function(groupsAndMembers) {
                    return A2(
                      $elm$core$List$cons,
                      "This file contains functions that decode the results of queries to the blockchain into types from " + (A2(
                        $elm$core$String$join,
                        ".",
                        A2(
                          $elm$core$List$map,
                          $elm_community$string_extra$String$Extra$classify,
                          fileName(
                            _List_fromArray(
                              ["Table"]
                            )
                          )
                        )
                      ) + ". You probably won't need these! Just use [Eos.Query](Eos-Query), which will automatically decode things for you."),
                      A2($elm$core$List$map, $mdgriffith$elm_codegen$Elm$docs, groupsAndMembers)
                    );
                  }
                },
                A2(
                  $elm$core$List$map,
                  A2(
                    $elm$core$Basics$composeR,
                    $author$project$Generate$Table$Decoder$generate(context),
                    $mdgriffith$elm_codegen$Elm$exposeWith(
                      {
                        T: true,
                        U: $elm$core$Maybe$Just("Decoders")
                      }
                    )
                  ),
                  abi.ah
                )
              ),
              A3(
                prefixedFile,
                _List_fromArray(
                  ["Table", "Query"]
                ),
                {
                  S: function(groupsAndMembers) {
                    return A2(
                      $elm$core$List$cons,
                      "This is the file you want to use to query the blockchain for data, along with [Eos.Query.send](Eos-Query#send).",
                      A2($elm$core$List$map, $mdgriffith$elm_codegen$Elm$docs, groupsAndMembers)
                    );
                  }
                },
                A2(
                  $elm$core$List$map,
                  A2(
                    $elm$core$Basics$composeR,
                    $author$project$Generate$Table$Query$generateQuery(context),
                    $mdgriffith$elm_codegen$Elm$exposeWith(
                      {
                        T: true,
                        U: $elm$core$Maybe$Just("Queries")
                      }
                    )
                  ),
                  abi.ah
                )
              )
            ]
          );
        }
      );
      var $author$project$Generate$files = F2(
        function(base, abis) {
          return A2(
            $elm$core$List$concatMap,
            function(_v0) {
              var contract = _v0.bk;
              var baseUrl = _v0.dK;
              var abi = _v0.dA;
              return A3(
                $author$project$Generate$filesFromAbi,
                base,
                { dK: baseUrl, bk: contract },
                abi
              );
            },
            abis
          );
        }
      );
      var $author$project$Main$update = F3(
        function(cliOptions, msg, model) {
          switch (msg.$) {
            case 0:
              if (msg.a.$ === 1) {
                var error = msg.a.a;
                return _Utils_Tuple2(
                  model,
                  $author$project$Main$PrintAndExitFailure(error)
                );
              } else {
                var abis = msg.a.a;
                return _Utils_Tuple2(
                  model,
                  $author$project$Main$WriteToFiles(
                    {
                      d5: A2($author$project$Generate$files, cliOptions.aK, abis),
                      eD: cliOptions.eD
                    }
                  )
                );
              }
            case 1:
              return _Utils_Tuple2(
                model,
                $author$project$Main$PrintAndExitSuccess("\u2705 Generated files")
              );
            case 2:
              return _Utils_Tuple2(
                model,
                $author$project$Main$PrintAndExitFailure("Something went wrong when I tried to write the files. Check the error above.\n")
              );
            default:
              var error = msg.a;
              return _Utils_Tuple2(
                model,
                $author$project$Main$PrintAndExitFailure(
                  "I got a weird internal error, when trying to decode something from a port:\n\n	" + ($elm$json$Json$Decode$errorToString(error) + "\n\nIf you're up for it, please open an issue with the error message above, on this URL: https://github.com/NeoVier/elm-eos/issues.\n")
                )
              );
          }
        }
      );
      var $author$project$Main$main = $dillonkearns$elm_cli_options_parser$Cli$Program$stateful(
        {
          dR: $author$project$Main$config,
          ec: F2(
            function(flags, cliOptions) {
              return A2(
                $elm$core$Tuple$mapSecond,
                $author$project$Main$effectToCmd,
                A2($author$project$Main$init, flags, cliOptions)
              );
            }
          ),
          eJ: A2($elm$core$Basics$composeR, $author$project$InteropDefinitions$PrintAndExitFailure, $author$project$InteropPorts$fromElm),
          eK: A2($elm$core$Basics$composeR, $author$project$InteropDefinitions$PrintAndExitSuccess, $author$project$InteropPorts$fromElm),
          eX: $author$project$Main$subscriptions,
          e4: F3(
            function(cliOptions, msg, model) {
              return A2(
                $elm$core$Tuple$mapSecond,
                $author$project$Main$effectToCmd,
                A3($author$project$Main$update, cliOptions, msg, model)
              );
            }
          )
        }
      );
      _Platform_export({ "Main": { "init": $author$project$Main$main(
        A2(
          $elm$json$Json$Decode$andThen,
          function(versionMessage) {
            return A2(
              $elm$json$Json$Decode$andThen,
              function(argv) {
                return $elm$json$Json$Decode$succeed(
                  { dH: argv, e6: versionMessage }
                );
              },
              A2(
                $elm$json$Json$Decode$field,
                "argv",
                $elm$json$Json$Decode$list($elm$json$Json$Decode$string)
              )
            );
          },
          A2($elm$json$Json$Decode$field, "versionMessage", $elm$json$Json$Decode$string)
        )
      )(0) } });
    })(exports);
  }
});

// node_modules/xhr2/lib/xhr2.js
var require_xhr2 = __commonJS({
  "node_modules/xhr2/lib/xhr2.js"(exports, module2) {
    (function() {
      var InvalidStateError, NetworkError, ProgressEvent, SecurityError, SyntaxError, XMLHttpRequest2, XMLHttpRequestEventTarget, XMLHttpRequestUpload, http, https, os, url;
      XMLHttpRequestEventTarget = function() {
        class XMLHttpRequestEventTarget2 {
          constructor() {
            this.onloadstart = null;
            this.onprogress = null;
            this.onabort = null;
            this.onerror = null;
            this.onload = null;
            this.ontimeout = null;
            this.onloadend = null;
            this._listeners = {};
          }
          addEventListener(eventType, listener) {
            var base;
            eventType = eventType.toLowerCase();
            (base = this._listeners)[eventType] || (base[eventType] = []);
            this._listeners[eventType].push(listener);
            return void 0;
          }
          removeEventListener(eventType, listener) {
            var index;
            eventType = eventType.toLowerCase();
            if (this._listeners[eventType]) {
              index = this._listeners[eventType].indexOf(listener);
              if (index !== -1) {
                this._listeners[eventType].splice(index, 1);
              }
            }
            return void 0;
          }
          dispatchEvent(event) {
            var eventType, j, len, listener, listeners;
            event.currentTarget = event.target = this;
            eventType = event.type;
            if (listeners = this._listeners[eventType]) {
              for (j = 0, len = listeners.length; j < len; j++) {
                listener = listeners[j];
                listener.call(this, event);
              }
            }
            if (listener = this[`on${eventType}`]) {
              listener.call(this, event);
            }
            return void 0;
          }
        }
        ;
        XMLHttpRequestEventTarget2.prototype.onloadstart = null;
        XMLHttpRequestEventTarget2.prototype.onprogress = null;
        XMLHttpRequestEventTarget2.prototype.onabort = null;
        XMLHttpRequestEventTarget2.prototype.onerror = null;
        XMLHttpRequestEventTarget2.prototype.onload = null;
        XMLHttpRequestEventTarget2.prototype.ontimeout = null;
        XMLHttpRequestEventTarget2.prototype.onloadend = null;
        return XMLHttpRequestEventTarget2;
      }.call(this);
      http = require("http");
      https = require("https");
      os = require("os");
      url = require("url");
      XMLHttpRequest2 = function() {
        class XMLHttpRequest3 extends XMLHttpRequestEventTarget {
          constructor(options) {
            super();
            this.onreadystatechange = null;
            this._anonymous = options && options.anon;
            this.readyState = XMLHttpRequest3.UNSENT;
            this.response = null;
            this.responseText = "";
            this.responseType = "";
            this.responseURL = "";
            this.status = 0;
            this.statusText = "";
            this.timeout = 0;
            this.upload = new XMLHttpRequestUpload(this);
            this._method = null;
            this._url = null;
            this._sync = false;
            this._headers = null;
            this._loweredHeaders = null;
            this._mimeOverride = null;
            this._request = null;
            this._response = null;
            this._responseParts = null;
            this._responseHeaders = null;
            this._aborting = null;
            this._error = null;
            this._loadedBytes = 0;
            this._totalBytes = 0;
            this._lengthComputable = false;
          }
          open(method, url2, async, user, password) {
            var xhrUrl;
            method = method.toUpperCase();
            if (method in this._restrictedMethods) {
              throw new SecurityError(`HTTP method ${method} is not allowed in XHR`);
            }
            xhrUrl = this._parseUrl(url2);
            if (async === void 0) {
              async = true;
            }
            switch (this.readyState) {
              case XMLHttpRequest3.UNSENT:
              case XMLHttpRequest3.OPENED:
              case XMLHttpRequest3.DONE:
                null;
                break;
              case XMLHttpRequest3.HEADERS_RECEIVED:
              case XMLHttpRequest3.LOADING:
                null;
            }
            this._method = method;
            this._url = xhrUrl;
            this._sync = !async;
            this._headers = {};
            this._loweredHeaders = {};
            this._mimeOverride = null;
            this._setReadyState(XMLHttpRequest3.OPENED);
            this._request = null;
            this._response = null;
            this.status = 0;
            this.statusText = "";
            this._responseParts = [];
            this._responseHeaders = null;
            this._loadedBytes = 0;
            this._totalBytes = 0;
            this._lengthComputable = false;
            return void 0;
          }
          setRequestHeader(name, value) {
            var loweredName;
            if (this.readyState !== XMLHttpRequest3.OPENED) {
              throw new InvalidStateError("XHR readyState must be OPENED");
            }
            loweredName = name.toLowerCase();
            if (this._restrictedHeaders[loweredName] || /^sec\-/.test(loweredName) || /^proxy-/.test(loweredName)) {
              console.warn(`Refused to set unsafe header "${name}"`);
              return void 0;
            }
            value = value.toString();
            if (loweredName in this._loweredHeaders) {
              name = this._loweredHeaders[loweredName];
              this._headers[name] = this._headers[name] + ", " + value;
            } else {
              this._loweredHeaders[loweredName] = name;
              this._headers[name] = value;
            }
            return void 0;
          }
          send(data) {
            if (this.readyState !== XMLHttpRequest3.OPENED) {
              throw new InvalidStateError("XHR readyState must be OPENED");
            }
            if (this._request) {
              throw new InvalidStateError("send() already called");
            }
            switch (this._url.protocol) {
              case "file:":
                this._sendFile(data);
                break;
              case "http:":
              case "https:":
                this._sendHttp(data);
                break;
              default:
                throw new NetworkError(`Unsupported protocol ${this._url.protocol}`);
            }
            return void 0;
          }
          abort() {
            if (!this._request) {
              return;
            }
            this._request.abort();
            this._setError();
            this._dispatchProgress("abort");
            this._dispatchProgress("loadend");
            return void 0;
          }
          getResponseHeader(name) {
            var loweredName;
            if (!this._responseHeaders) {
              return null;
            }
            loweredName = name.toLowerCase();
            if (loweredName in this._responseHeaders) {
              return this._responseHeaders[loweredName];
            } else {
              return null;
            }
          }
          getAllResponseHeaders() {
            var lines, name, value;
            if (!this._responseHeaders) {
              return "";
            }
            lines = function() {
              var ref, results;
              ref = this._responseHeaders;
              results = [];
              for (name in ref) {
                value = ref[name];
                results.push(`${name}: ${value}`);
              }
              return results;
            }.call(this);
            return lines.join("\r\n");
          }
          overrideMimeType(newMimeType) {
            if (this.readyState === XMLHttpRequest3.LOADING || this.readyState === XMLHttpRequest3.DONE) {
              throw new InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
            }
            this._mimeOverride = newMimeType.toLowerCase();
            return void 0;
          }
          nodejsSet(options) {
            var baseUrl, parsedUrl;
            if ("httpAgent" in options) {
              this.nodejsHttpAgent = options.httpAgent;
            }
            if ("httpsAgent" in options) {
              this.nodejsHttpsAgent = options.httpsAgent;
            }
            if ("baseUrl" in options) {
              baseUrl = options.baseUrl;
              if (baseUrl !== null) {
                parsedUrl = url.parse(baseUrl, false, true);
                if (!parsedUrl.protocol) {
                  throw new SyntaxError("baseUrl must be an absolute URL");
                }
              }
              this.nodejsBaseUrl = baseUrl;
            }
            return void 0;
          }
          static nodejsSet(options) {
            XMLHttpRequest3.prototype.nodejsSet(options);
            return void 0;
          }
          _setReadyState(newReadyState) {
            var event;
            this.readyState = newReadyState;
            event = new ProgressEvent("readystatechange");
            this.dispatchEvent(event);
            return void 0;
          }
          _sendFile() {
            if (this._url.method !== "GET") {
              throw new NetworkError("The file protocol only supports GET");
            }
            throw new Error("Protocol file: not implemented");
          }
          _sendHttp(data) {
            if (this._sync) {
              throw new Error("Synchronous XHR processing not implemented");
            }
            if (data != null && (this._method === "GET" || this._method === "HEAD")) {
              console.warn(`Discarding entity body for ${this._method} requests`);
              data = null;
            } else {
              data || (data = "");
            }
            this.upload._setData(data);
            this._finalizeHeaders();
            this._sendHxxpRequest();
            return void 0;
          }
          _sendHxxpRequest() {
            var agent, hxxp, request;
            if (this._url.protocol === "http:") {
              hxxp = http;
              agent = this.nodejsHttpAgent;
            } else {
              hxxp = https;
              agent = this.nodejsHttpsAgent;
            }
            request = hxxp.request({
              hostname: this._url.hostname,
              port: this._url.port,
              path: this._url.path,
              auth: this._url.auth,
              method: this._method,
              headers: this._headers,
              agent
            });
            this._request = request;
            if (this.timeout) {
              request.setTimeout(this.timeout, () => {
                return this._onHttpTimeout(request);
              });
            }
            request.on("response", (response) => {
              return this._onHttpResponse(request, response);
            });
            request.on("error", (error) => {
              return this._onHttpRequestError(request, error);
            });
            this.upload._startUpload(request);
            if (this._request === request) {
              this._dispatchProgress("loadstart");
            }
            return void 0;
          }
          _finalizeHeaders() {
            var base;
            this._headers["Connection"] = "keep-alive";
            this._headers["Host"] = this._url.host;
            if (this._anonymous) {
              this._headers["Referer"] = "about:blank";
            }
            (base = this._headers)["User-Agent"] || (base["User-Agent"] = this._userAgent);
            this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
            return void 0;
          }
          _onHttpResponse(request, response) {
            var lengthString;
            if (this._request !== request) {
              return;
            }
            switch (response.statusCode) {
              case 301:
              case 302:
              case 303:
              case 307:
              case 308:
                this._url = this._parseUrl(response.headers["location"]);
                this._method = "GET";
                if ("content-type" in this._loweredHeaders) {
                  delete this._headers[this._loweredHeaders["content-type"]];
                  delete this._loweredHeaders["content-type"];
                }
                if ("Content-Type" in this._headers) {
                  delete this._headers["Content-Type"];
                }
                delete this._headers["Content-Length"];
                this.upload._reset();
                this._finalizeHeaders();
                this._sendHxxpRequest();
                return;
            }
            this._response = response;
            this._response.on("data", (data) => {
              return this._onHttpResponseData(response, data);
            });
            this._response.on("end", () => {
              return this._onHttpResponseEnd(response);
            });
            this._response.on("close", () => {
              return this._onHttpResponseClose(response);
            });
            this.responseURL = this._url.href.split("#")[0];
            this.status = this._response.statusCode;
            this.statusText = http.STATUS_CODES[this.status];
            this._parseResponseHeaders(response);
            if (lengthString = this._responseHeaders["content-length"]) {
              this._totalBytes = parseInt(lengthString);
              this._lengthComputable = true;
            } else {
              this._lengthComputable = false;
            }
            return this._setReadyState(XMLHttpRequest3.HEADERS_RECEIVED);
          }
          _onHttpResponseData(response, data) {
            if (this._response !== response) {
              return;
            }
            this._responseParts.push(data);
            this._loadedBytes += data.length;
            if (this.readyState !== XMLHttpRequest3.LOADING) {
              this._setReadyState(XMLHttpRequest3.LOADING);
            }
            return this._dispatchProgress("progress");
          }
          _onHttpResponseEnd(response) {
            if (this._response !== response) {
              return;
            }
            this._parseResponse();
            this._request = null;
            this._response = null;
            this._setReadyState(XMLHttpRequest3.DONE);
            this._dispatchProgress("load");
            return this._dispatchProgress("loadend");
          }
          _onHttpResponseClose(response) {
            var request;
            if (this._response !== response) {
              return;
            }
            request = this._request;
            this._setError();
            request.abort();
            this._setReadyState(XMLHttpRequest3.DONE);
            this._dispatchProgress("error");
            return this._dispatchProgress("loadend");
          }
          _onHttpTimeout(request) {
            if (this._request !== request) {
              return;
            }
            this._setError();
            request.abort();
            this._setReadyState(XMLHttpRequest3.DONE);
            this._dispatchProgress("timeout");
            return this._dispatchProgress("loadend");
          }
          _onHttpRequestError(request, error) {
            if (this._request !== request) {
              return;
            }
            this._setError();
            request.abort();
            this._setReadyState(XMLHttpRequest3.DONE);
            this._dispatchProgress("error");
            return this._dispatchProgress("loadend");
          }
          _dispatchProgress(eventType) {
            var event;
            event = new ProgressEvent(eventType);
            event.lengthComputable = this._lengthComputable;
            event.loaded = this._loadedBytes;
            event.total = this._totalBytes;
            this.dispatchEvent(event);
            return void 0;
          }
          _setError() {
            this._request = null;
            this._response = null;
            this._responseHeaders = null;
            this._responseParts = null;
            return void 0;
          }
          _parseUrl(urlString) {
            var absoluteUrlString, index, password, user, xhrUrl;
            if (this.nodejsBaseUrl === null) {
              absoluteUrlString = urlString;
            } else {
              absoluteUrlString = url.resolve(this.nodejsBaseUrl, urlString);
            }
            xhrUrl = url.parse(absoluteUrlString, false, true);
            xhrUrl.hash = null;
            if (xhrUrl.auth && (typeof user !== "undefined" && user !== null || typeof password !== "undefined" && password !== null)) {
              index = xhrUrl.auth.indexOf(":");
              if (index === -1) {
                if (!user) {
                  user = xhrUrl.auth;
                }
              } else {
                if (!user) {
                  user = xhrUrl.substring(0, index);
                }
                if (!password) {
                  password = xhrUrl.substring(index + 1);
                }
              }
            }
            if (user || password) {
              xhrUrl.auth = `${user}:${password}`;
            }
            return xhrUrl;
          }
          _parseResponseHeaders(response) {
            var loweredName, name, ref, value;
            this._responseHeaders = {};
            ref = response.headers;
            for (name in ref) {
              value = ref[name];
              loweredName = name.toLowerCase();
              if (this._privateHeaders[loweredName]) {
                continue;
              }
              if (this._mimeOverride !== null && loweredName === "content-type") {
                value = this._mimeOverride;
              }
              this._responseHeaders[loweredName] = value;
            }
            if (this._mimeOverride !== null && !("content-type" in this._responseHeaders)) {
              this._responseHeaders["content-type"] = this._mimeOverride;
            }
            return void 0;
          }
          _parseResponse() {
            var arrayBuffer, buffer, i, j, jsonError, ref, view;
            if (Buffer.concat) {
              buffer = Buffer.concat(this._responseParts);
            } else {
              buffer = this._concatBuffers(this._responseParts);
            }
            this._responseParts = null;
            switch (this.responseType) {
              case "text":
                this._parseTextResponse(buffer);
                break;
              case "json":
                this.responseText = null;
                try {
                  this.response = JSON.parse(buffer.toString("utf-8"));
                } catch (error1) {
                  jsonError = error1;
                  this.response = null;
                }
                break;
              case "buffer":
                this.responseText = null;
                this.response = buffer;
                break;
              case "arraybuffer":
                this.responseText = null;
                arrayBuffer = new ArrayBuffer(buffer.length);
                view = new Uint8Array(arrayBuffer);
                for (i = j = 0, ref = buffer.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                  view[i] = buffer[i];
                }
                this.response = arrayBuffer;
                break;
              default:
                this._parseTextResponse(buffer);
            }
            return void 0;
          }
          _parseTextResponse(buffer) {
            var e;
            try {
              this.responseText = buffer.toString(this._parseResponseEncoding());
            } catch (error1) {
              e = error1;
              this.responseText = buffer.toString("binary");
            }
            this.response = this.responseText;
            return void 0;
          }
          _parseResponseEncoding() {
            var contentType, encoding, match;
            encoding = null;
            if (contentType = this._responseHeaders["content-type"]) {
              if (match = /\;\s*charset\=(.*)$/.exec(contentType)) {
                return match[1];
              }
            }
            return "utf-8";
          }
          _concatBuffers(buffers) {
            var buffer, j, k, len, len1, length, target;
            if (buffers.length === 0) {
              return Buffer.alloc(0);
            }
            if (buffers.length === 1) {
              return buffers[0];
            }
            length = 0;
            for (j = 0, len = buffers.length; j < len; j++) {
              buffer = buffers[j];
              length += buffer.length;
            }
            target = Buffer.alloc(length);
            length = 0;
            for (k = 0, len1 = buffers.length; k < len1; k++) {
              buffer = buffers[k];
              buffer.copy(target, length);
              length += buffer.length;
            }
            return target;
          }
        }
        ;
        XMLHttpRequest3.prototype.onreadystatechange = null;
        XMLHttpRequest3.prototype.readyState = null;
        XMLHttpRequest3.prototype.response = null;
        XMLHttpRequest3.prototype.responseText = null;
        XMLHttpRequest3.prototype.responseType = null;
        XMLHttpRequest3.prototype.status = null;
        XMLHttpRequest3.prototype.timeout = null;
        XMLHttpRequest3.prototype.upload = null;
        XMLHttpRequest3.prototype.UNSENT = 0;
        XMLHttpRequest3.UNSENT = 0;
        XMLHttpRequest3.prototype.OPENED = 1;
        XMLHttpRequest3.OPENED = 1;
        XMLHttpRequest3.prototype.HEADERS_RECEIVED = 2;
        XMLHttpRequest3.HEADERS_RECEIVED = 2;
        XMLHttpRequest3.prototype.LOADING = 3;
        XMLHttpRequest3.LOADING = 3;
        XMLHttpRequest3.prototype.DONE = 4;
        XMLHttpRequest3.DONE = 4;
        XMLHttpRequest3.prototype.nodejsHttpAgent = http.globalAgent;
        XMLHttpRequest3.prototype.nodejsHttpsAgent = https.globalAgent;
        XMLHttpRequest3.prototype.nodejsBaseUrl = null;
        XMLHttpRequest3.prototype._restrictedMethods = {
          CONNECT: true,
          TRACE: true,
          TRACK: true
        };
        XMLHttpRequest3.prototype._restrictedHeaders = {
          "accept-charset": true,
          "accept-encoding": true,
          "access-control-request-headers": true,
          "access-control-request-method": true,
          connection: true,
          "content-length": true,
          cookie: true,
          cookie2: true,
          date: true,
          dnt: true,
          expect: true,
          host: true,
          "keep-alive": true,
          origin: true,
          referer: true,
          te: true,
          trailer: true,
          "transfer-encoding": true,
          upgrade: true,
          via: true
        };
        XMLHttpRequest3.prototype._privateHeaders = {
          "set-cookie": true,
          "set-cookie2": true
        };
        XMLHttpRequest3.prototype._userAgent = `Mozilla/5.0 (${os.type()} ${os.arch()}) node.js/${process.versions.node} v8/${process.versions.v8}`;
        return XMLHttpRequest3;
      }.call(this);
      module2.exports = XMLHttpRequest2;
      XMLHttpRequest2.XMLHttpRequest = XMLHttpRequest2;
      SecurityError = class SecurityError extends Error {
        constructor() {
          super();
        }
      };
      XMLHttpRequest2.SecurityError = SecurityError;
      InvalidStateError = class InvalidStateError extends Error {
        constructor() {
          super();
        }
      };
      InvalidStateError = class InvalidStateError extends Error {
      };
      XMLHttpRequest2.InvalidStateError = InvalidStateError;
      NetworkError = class NetworkError extends Error {
        constructor() {
          super();
        }
      };
      XMLHttpRequest2.SyntaxError = SyntaxError;
      SyntaxError = class SyntaxError extends Error {
        constructor() {
          super();
        }
      };
      ProgressEvent = function() {
        class ProgressEvent2 {
          constructor(type) {
            this.type = type;
            this.target = null;
            this.currentTarget = null;
            this.lengthComputable = false;
            this.loaded = 0;
            this.total = 0;
          }
        }
        ;
        ProgressEvent2.prototype.bubbles = false;
        ProgressEvent2.prototype.cancelable = false;
        ProgressEvent2.prototype.target = null;
        ProgressEvent2.prototype.loaded = null;
        ProgressEvent2.prototype.lengthComputable = null;
        ProgressEvent2.prototype.total = null;
        return ProgressEvent2;
      }.call(this);
      XMLHttpRequest2.ProgressEvent = ProgressEvent;
      XMLHttpRequestUpload = class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
        constructor(request) {
          super();
          this._request = request;
          this._reset();
        }
        _reset() {
          this._contentType = null;
          this._body = null;
          return void 0;
        }
        _setData(data) {
          var body, i, j, k, offset, ref, ref1, view;
          if (typeof data === "undefined" || data === null) {
            return;
          }
          if (typeof data === "string") {
            if (data.length !== 0) {
              this._contentType = "text/plain;charset=UTF-8";
            }
            this._body = Buffer.from(data, "utf8");
          } else if (Buffer.isBuffer(data)) {
            this._body = data;
          } else if (data instanceof ArrayBuffer) {
            body = Buffer.alloc(data.byteLength);
            view = new Uint8Array(data);
            for (i = j = 0, ref = data.byteLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
              body[i] = view[i];
            }
            this._body = body;
          } else if (data.buffer && data.buffer instanceof ArrayBuffer) {
            body = Buffer.alloc(data.byteLength);
            offset = data.byteOffset;
            view = new Uint8Array(data.buffer);
            for (i = k = 0, ref1 = data.byteLength; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
              body[i] = view[i + offset];
            }
            this._body = body;
          } else {
            throw new Error(`Unsupported send() data ${data}`);
          }
          return void 0;
        }
        _finalizeHeaders(headers, loweredHeaders) {
          if (this._contentType) {
            if (!("content-type" in loweredHeaders)) {
              headers["Content-Type"] = this._contentType;
            }
          }
          if (this._body) {
            headers["Content-Length"] = this._body.length.toString();
          }
          return void 0;
        }
        _startUpload(request) {
          if (this._body) {
            request.write(this._body);
          }
          request.end();
          return void 0;
        }
      };
      XMLHttpRequest2.XMLHttpRequestUpload = XMLHttpRequestUpload;
    }).call(exports);
  }
});

// src/index.ts
var import_Main = __toESM(require_Main());

// package.json
var version = "1.0.0";

// src/index.ts
var import_promises = __toESM(require("fs/promises"));
var import_path = __toESM(require("path"));
global.XMLHttpRequest = require_xhr2();
var app = import_Main.Elm.Main.init({
  node: null,
  flags: {
    argv: process.argv,
    versionMessage: version
  }
});
app.ports.interopFromElm.subscribe((fromElm) => {
  switch (fromElm.tag) {
    case "printAndExitFailure": {
      console.log(fromElm.data.message);
      break;
    }
    case "printAndExitSuccess": {
      console.log(fromElm.data.message);
      break;
    }
    case "writeToFiles": {
      Promise.all(
        fromElm.data.files.map(async (file) => {
          const actualPath = import_path.default.join(fromElm.data.output, file.path);
          const dirname = import_path.default.dirname(actualPath);
          await import_promises.default.mkdir(dirname, { recursive: true });
          return import_promises.default.writeFile(actualPath, file.contents, { flag: "w+" });
        })
      ).then(() => {
        app.ports.interopToElm.send({ tag: "finishedWritingToFiles" });
      }).catch((err) => {
        console.log(err);
        app.ports.interopToElm.send({
          tag: "finishedWritingToFilesWithError"
        });
      });
    }
  }
});
