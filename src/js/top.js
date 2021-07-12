(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bike = exports.Car = void 0;

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vechicle = /*#__PURE__*/function () {
  function Vechicle(name, wheels) {
    _classCallCheck(this, Vechicle);

    this.name = name;
    this.wheels = wheels;
  }

  _createClass(Vechicle, [{
    key: "spec",
    value: function spec() {
      console.log("この乗り物の名前は" + this.name + "です。車輪の数は" + this.wheels + "個です。");
    }
  }]);

  return Vechicle;
}();

var Car = /*#__PURE__*/function (_Vechicle) {
  _inherits(Car, _Vechicle);

  var _super = _createSuper(Car);

  function Car(name, maker) {
    var _this;

    _classCallCheck(this, Car);

    _this = _super.call(this, name, 4);
    _this.maker = maker;
    return _this;
  }

  _createClass(Car, [{
    key: "spec",
    value: function spec() {
      _get(_getPrototypeOf(Car.prototype), "spec", this).call(this);

      console.log(this.maker + "で製造されています。");
    }
  }]);

  return Car;
}(Vechicle);

exports.Car = Car;

var Bike = /*#__PURE__*/function (_Vechicle2) {
  _inherits(Bike, _Vechicle2);

  var _super2 = _createSuper(Bike);

  function Bike(name) {
    _classCallCheck(this, Bike);

    return _super2.call(this, name, 2);
  }

  return Bike;
}(Vechicle);

exports.Bike = Bike;

},{}],2:[function(require,module,exports){
'use strict';

var _Vechicle = require("./module/Vechicle");

var car = new _Vechicle.Car("消防車", "トヨタ");
car.spec();
var bike = new _Vechicle.Bike("白バイ");
bike.spec();

},{"./module/Vechicle":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3JjL2VzL21vZHVsZS9WZWNoaWNsZS5qcyIsIl9zcmMvZXMvdG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLFE7QUFDSixvQkFBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7Ozs7V0FDRCxnQkFBTztBQUNMLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxjQUFjLEtBQUssSUFBbkIsR0FBMEIsVUFBMUIsR0FBdUMsS0FBSyxNQUE1QyxHQUFxRCxNQUFqRTtBQUNEOzs7Ozs7SUFHRyxHOzs7OztBQUNKLGVBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUN2Qiw4QkFBTSxJQUFOLEVBQVksQ0FBWjtBQUNBLFVBQUssS0FBTCxHQUFhLEtBQWI7QUFGdUI7QUFHeEI7Ozs7V0FDRCxnQkFBTztBQUNMOztBQUNBLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFLLEtBQUwsR0FBYSxZQUF6QjtBQUNEOzs7O0VBUmUsUTs7OztJQVdaLEk7Ozs7O0FBQ0osZ0JBQVksSUFBWixFQUFrQjtBQUFBOztBQUFBLDhCQUNWLElBRFUsRUFDSixDQURJO0FBRWpCOzs7RUFIZ0IsUTs7Ozs7QUN2Qm5COztBQUVBOztBQUVBLElBQUksR0FBRyxHQUFHLElBQUksYUFBSixDQUFRLEtBQVIsRUFBZSxLQUFmLENBQVY7QUFDQSxHQUFHLENBQUMsSUFBSjtBQUVBLElBQUksSUFBSSxHQUFHLElBQUksY0FBSixDQUFTLEtBQVQsQ0FBWDtBQUNBLElBQUksQ0FBQyxJQUFMIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgVmVjaGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHdoZWVscykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMud2hlZWxzID0gd2hlZWxzO1xyXG4gIH1cclxuICBzcGVjKCkge1xyXG4gICAgY29uc29sZS5sb2coXCLjgZPjga7kuZfjgornianjga7lkI3liY3jga9cIiArIHRoaXMubmFtZSArIFwi44Gn44GZ44CC6LuK6Lyq44Gu5pWw44GvXCIgKyB0aGlzLndoZWVscyArIFwi5YCL44Gn44GZ44CCXCIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQ2FyIGV4dGVuZHMgVmVjaGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG1ha2VyKSB7XHJcbiAgICBzdXBlcihuYW1lLCA0KTtcclxuICAgIHRoaXMubWFrZXIgPSBtYWtlcjtcclxuICB9XHJcbiAgc3BlYygpIHtcclxuICAgIHN1cGVyLnNwZWMoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubWFrZXIgKyBcIuOBp+ijvemAoOOBleOCjOOBpuOBhOOBvuOBmeOAglwiKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJpa2UgZXh0ZW5kcyBWZWNoaWNsZSB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgc3VwZXIobmFtZSwgMik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBDYXIsIEJpa2UgfTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgeyBDYXIsIEJpa2UgfSBmcm9tICcuL21vZHVsZS9WZWNoaWNsZSc7XHJcblxyXG5sZXQgY2FyID0gbmV3IENhcihcIua2iOmYsui7ilwiLCBcIuODiOODqOOCv1wiKTtcclxuY2FyLnNwZWMoKTtcclxuXHJcbmxldCBiaWtlID0gbmV3IEJpa2UoXCLnmb3jg5DjgqRcIik7XHJcbmJpa2Uuc3BlYygpO1xyXG4iXX0=
