(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "voice",
    value: function voice() {
      console.log("".concat(this.name, " is ").concat(this.age, " years old"));
    }
  }]);

  return Person;
}();

var _default = Person;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
'use strict';

var _Person = _interopRequireDefault(require("./module/Person"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var profile = new _Person["default"]('Mt.Yamada', '32');
profile.voice();

},{"./module/Person":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc3JjL2VzL21vZHVsZS9QZXJzb24uanMiLCJfc3JjL2VzL3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7O0lBRU0sTTtBQUNKLGtCQUFZLElBQVosRUFBa0IsR0FBbEIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssR0FBTCxHQUFXLEdBQVg7QUFDRDs7Ozs0QkFDTztBQUNOLE1BQUEsT0FBTyxDQUFDLEdBQVIsV0FBZSxLQUFLLElBQXBCLGlCQUErQixLQUFLLEdBQXBDO0FBQ0Q7Ozs7OztlQUdZLE07Ozs7QUNaZjs7QUFFQTs7OztBQUVBLElBQUksT0FBTyxHQUFHLElBQUksa0JBQUosQ0FBVyxXQUFYLEVBQXdCLElBQXhCLENBQWQ7QUFDQSxPQUFPLENBQUMsS0FBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFBlcnNvbiB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgYWdlKXtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICB9XHJcbiAgdm9pY2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGlzICR7dGhpcy5hZ2V9IHllYXJzIG9sZGApOyBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUGVyc29uIGZyb20gJy4vbW9kdWxlL1BlcnNvbic7XHJcblxyXG5sZXQgcHJvZmlsZSA9IG5ldyBQZXJzb24oJ010LllhbWFkYScsICczMicpO1xyXG5wcm9maWxlLnZvaWNlKCk7Il19
