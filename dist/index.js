'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = groupBy;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function groupBy(list, group) {
  if (typeof group !== 'string') {
    throw new TypeError('Expected "group" to be an string');
  }

  var keys = list.map(function (item) {
    return item[group];
  });
  var uniq = [].concat(_toConsumableArray(new Set(keys)));
  var dict = uniq.reduce(function (prev, next) {
    return _extends({}, prev, _defineProperty({}, next, []));
  }, {});

  list.forEach(function (item) {
    return dict[item[group]].push(item);
  });

  return dict;
}