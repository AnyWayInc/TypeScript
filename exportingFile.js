"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Obj = exports.A = void 0;
var A;
(function (A) {
    A.a = 5;
})(A = exports.A || (exports.A = {}));
exports.Obj = {};
//Default export может быть только 1 
function run() {
    console.log('run');
}
exports.default = run;
