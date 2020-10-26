(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bike = exports.Car = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3JjL2VzL21vZHVsZS9WZWNoaWNsZS5qcyIsIl9zcmMvZXMvdG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLFE7QUFDSixvQkFBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0Q7Ozs7MkJBQ007QUFDTCxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBYyxLQUFLLElBQW5CLEdBQTBCLFVBQTFCLEdBQXVDLEtBQUssTUFBNUMsR0FBcUQsTUFBakU7QUFDRDs7Ozs7O0lBR0csRzs7Ozs7QUFDSixlQUFZLElBQVosRUFBa0IsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFDdkIsOEJBQU0sSUFBTixFQUFZLENBQVo7QUFDQSxVQUFLLEtBQUwsR0FBYSxLQUFiO0FBRnVCO0FBR3hCOzs7OzJCQUNNO0FBQ0w7O0FBQ0EsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQUssS0FBTCxHQUFhLFlBQXpCO0FBQ0Q7Ozs7RUFSZSxROzs7O0lBV1osSTs7Ozs7QUFDSixnQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsOEJBQ1YsSUFEVSxFQUNKLENBREk7QUFFakI7OztFQUhnQixROzs7OztBQ3ZCbkI7O0FBRUE7O0FBRUEsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFKLENBQVEsS0FBUixFQUFlLEtBQWYsQ0FBVjtBQUNBLEdBQUcsQ0FBQyxJQUFKO0FBRUEsSUFBSSxJQUFJLEdBQUcsSUFBSSxjQUFKLENBQVMsS0FBVCxDQUFYO0FBQ0EsSUFBSSxDQUFDLElBQUwiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBWZWNoaWNsZSB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgd2hlZWxzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy53aGVlbHMgPSB3aGVlbHM7XHJcbiAgfVxyXG4gIHNwZWMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuOBk+OBruS5l+OCiueJqeOBruWQjeWJjeOBr1wiICsgdGhpcy5uYW1lICsgXCLjgafjgZnjgILou4rovKrjga7mlbDjga9cIiArIHRoaXMud2hlZWxzICsgXCLlgIvjgafjgZnjgIJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBDYXIgZXh0ZW5kcyBWZWNoaWNsZSB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbWFrZXIpIHtcclxuICAgIHN1cGVyKG5hbWUsIDQpO1xyXG4gICAgdGhpcy5tYWtlciA9IG1ha2VyO1xyXG4gIH1cclxuICBzcGVjKCkge1xyXG4gICAgc3VwZXIuc3BlYygpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5tYWtlciArIFwi44Gn6KO96YCg44GV44KM44Gm44GE44G+44GZ44CCXCIpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQmlrZSBleHRlbmRzIFZlY2hpY2xlIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICBzdXBlcihuYW1lLCAyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhciwgQmlrZSB9OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IENhciwgQmlrZSB9IGZyb20gJy4vbW9kdWxlL1ZlY2hpY2xlJztcclxuXHJcbmxldCBjYXIgPSBuZXcgQ2FyKFwi5raI6Ziy6LuKXCIsIFwi44OI44Oo44K/XCIpO1xyXG5jYXIuc3BlYygpO1xyXG5cclxubGV0IGJpa2UgPSBuZXcgQmlrZShcIueZveODkOOCpFwiKTtcclxuYmlrZS5zcGVjKCk7XHJcbiJdfQ==
