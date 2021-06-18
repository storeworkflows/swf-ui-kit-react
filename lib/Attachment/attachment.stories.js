"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoMockData = exports.MockUpload = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Attachment = _interopRequireDefault(require("./Attachment"));

var _storybookAddonMock = _interopRequireDefault(require("storybook-addon-mock"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'swf-ui-kit/Input/Attachment',
  component: _Attachment["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Attachment["default"], _objectSpread({}, args));
};

var MockUpload = Template.bind({});
exports.MockUpload = MockUpload;
MockUpload.decorators = [_storybookAddonMock["default"]];
MockUpload.args = {
  label: "Attachment",
  message: [{
    content: "example message",
    status: "green"
  }],
  tableName: "test",
  tableSysId: "test"
};
MockUpload.parameters = {
  mockData: [{
    url: '/api/now/attachment/upload',
    method: 'POST',
    status: 200,
    response: JSON.stringify({
      result: {
        sys_id: -1
      }
    })
  }, {
    url: '/api/now/attachment/-1',
    method: 'DELETE',
    status: 200
  }]
};
var NoMockData = Template.bind({});
exports.NoMockData = NoMockData;
NoMockData.args = {
  label: "Attachment"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L2F0dGFjaG1lbnQuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkF0dGFjaG1lbnQiLCJUZW1wbGF0ZSIsImFyZ3MiLCJNb2NrVXBsb2FkIiwiYmluZCIsImRlY29yYXRvcnMiLCJ3aXRoTW9jayIsImxhYmVsIiwibWVzc2FnZSIsImNvbnRlbnQiLCJzdGF0dXMiLCJ0YWJsZU5hbWUiLCJ0YWJsZVN5c0lkIiwicGFyYW1ldGVycyIsIm1vY2tEYXRhIiwidXJsIiwibWV0aG9kIiwicmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0Iiwic3lzX2lkIiwiTm9Nb2NrRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxLQUFLLEVBQUUsNkJBREk7QUFFWEMsRUFBQUEsU0FBUyxFQUFFQztBQUZBLEM7OztBQU1mLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQ7QUFBQSxzQkFBVSxxQkFBQyxzQkFBRCxvQkFBZ0JBLElBQWhCLEVBQVY7QUFBQSxDQUFqQjs7QUFHTyxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBbkI7O0FBQ1BELFVBQVUsQ0FBQ0UsVUFBWCxHQUF3QixDQUFDQyw4QkFBRCxDQUF4QjtBQUNBSCxVQUFVLENBQUNELElBQVgsR0FBa0I7QUFDZEssRUFBQUEsS0FBSyxFQUFFLFlBRE87QUFFZEMsRUFBQUEsT0FBTyxFQUFFLENBQUM7QUFBQ0MsSUFBQUEsT0FBTyxFQUFFLGlCQUFWO0FBQTZCQyxJQUFBQSxNQUFNLEVBQUU7QUFBckMsR0FBRCxDQUZLO0FBR2RDLEVBQUFBLFNBQVMsRUFBRSxNQUhHO0FBSWRDLEVBQUFBLFVBQVUsRUFBRTtBQUpFLENBQWxCO0FBTUFULFVBQVUsQ0FBQ1UsVUFBWCxHQUF3QjtBQUNwQkMsRUFBQUEsUUFBUSxFQUFFLENBQUM7QUFDSEMsSUFBQUEsR0FBRyxFQUFFLDRCQURGO0FBRUhDLElBQUFBLE1BQU0sRUFBRSxNQUZMO0FBR0hOLElBQUFBLE1BQU0sRUFBRSxHQUhMO0FBSUhPLElBQUFBLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDckJDLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUFYO0FBRGEsS0FBZjtBQUpQLEdBQUQsRUFRTjtBQUNJTixJQUFBQSxHQUFHLEVBQUUsd0JBRFQ7QUFFSUMsSUFBQUEsTUFBTSxFQUFFLFFBRlo7QUFHSU4sSUFBQUEsTUFBTSxFQUFFO0FBSFosR0FSTTtBQURVLENBQXhCO0FBaUJPLElBQU1ZLFVBQVUsR0FBR3JCLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBbkI7O0FBQ1BrQixVQUFVLENBQUNwQixJQUFYLEdBQWtCO0FBQ2RLLEVBQUFBLEtBQUssRUFBRTtBQURPLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgQXR0YWNobWVudCB9IGZyb20gJy4vQXR0YWNobWVudCc7XHJcbmltcG9ydCB3aXRoTW9jayBmcm9tICdzdG9yeWJvb2stYWRkb24tbW9jayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0aXRsZTogJ3N3Zi11aS1raXQvSW5wdXQvQXR0YWNobWVudCcsXHJcbiAgICBjb21wb25lbnQ6IEF0dGFjaG1lbnRcclxufTtcclxuXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8QXR0YWNobWVudCB7Li4uYXJnc30gLz5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTW9ja1VwbG9hZCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5Nb2NrVXBsb2FkLmRlY29yYXRvcnMgPSBbd2l0aE1vY2tdO1xyXG5Nb2NrVXBsb2FkLmFyZ3MgPSB7XHJcbiAgICBsYWJlbDogXCJBdHRhY2htZW50XCIsXHJcbiAgICBtZXNzYWdlOiBbe2NvbnRlbnQ6IFwiZXhhbXBsZSBtZXNzYWdlXCIsIHN0YXR1czogXCJncmVlblwifV0sXHJcbiAgICB0YWJsZU5hbWU6IFwidGVzdFwiLFxyXG4gICAgdGFibGVTeXNJZDogXCJ0ZXN0XCJcclxufTtcclxuTW9ja1VwbG9hZC5wYXJhbWV0ZXJzID0ge1xyXG4gICAgbW9ja0RhdGE6IFt7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvbm93L2F0dGFjaG1lbnQvdXBsb2FkJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgICAgICByZXNwb25zZTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiB7IHN5c19pZDogLTF9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL25vdy9hdHRhY2htZW50Ly0xJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAyMDBcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTm9Nb2NrRGF0YSA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5Ob01vY2tEYXRhLmFyZ3MgPSB7XHJcbiAgICBsYWJlbDogXCJBdHRhY2htZW50XCIsXHJcbn07XHJcblxyXG5cclxuXHJcbiJdfQ==