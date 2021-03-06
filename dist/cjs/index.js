"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function get() {
    return _withTheme["default"];
  }
});
exports.utils = exports["default"] = void 0;

var _Form = _interopRequireDefault(require("./components/Form"));

var _withTheme = _interopRequireDefault(require("./withTheme"));

var utils = _interopRequireWildcard(require("./utils"));

exports.utils = utils;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Form["default"];
exports["default"] = _default;