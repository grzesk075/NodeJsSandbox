"use strict";
exports.__esModule = true;
var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    MyLogger.prototype.log = function (msg) {
        console.log(msg);
    };
    return MyLogger;
}());
exports["default"] = MyLogger;
var l = new MyLogger();
l.log("Test ąśżźć");
