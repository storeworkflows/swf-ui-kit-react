"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = graphqlRequest;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_GQL_ENDPOINT = 'api/now/graphql';

function graphqlRequest(_ref) {
  var _ref$operationName = _ref.operationName,
      operationName = _ref$operationName === void 0 ? '' : _ref$operationName,
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? {} : _ref$query,
      _ref$variables = _ref.variables,
      variables = _ref$variables === void 0 ? {} : _ref$variables,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params;

  var options = _objectSpread(_objectSpread({
    method: 'POST'
  }, params), {}, {
    credentials: 'same-origin',
    headers: {
      'content-type': "application/json",
      'X-Transaction-Source': window.transaction_source,
      'X-UserToken': window.g_ck
    },
    body: JSON.stringify([{
      operationName: operationName,
      query: query,
      variables: variables
    }])
  });

  return (0, _crossFetch["default"])(DEFAULT_GQL_ENDPOINT, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0dRTF9FTkRQT0lOVCIsImdyYXBocWxSZXF1ZXN0Iiwib3BlcmF0aW9uTmFtZSIsInF1ZXJ5IiwidmFyaWFibGVzIiwicGFyYW1zIiwib3B0aW9ucyIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIndpbmRvdyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImdfY2siLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsaUJBQTdCOztBQUVlLFNBQVNDLGNBQVQsT0FBdUY7QUFBQSxnQ0FBOURDLGFBQThEO0FBQUEsTUFBOURBLGFBQThELG1DQUE5QyxFQUE4QztBQUFBLHdCQUExQ0MsS0FBMEM7QUFBQSxNQUExQ0EsS0FBMEMsMkJBQWxDLEVBQWtDO0FBQUEsNEJBQTlCQyxTQUE4QjtBQUFBLE1BQTlCQSxTQUE4QiwrQkFBbEIsRUFBa0I7QUFBQSx5QkFBZEMsTUFBYztBQUFBLE1BQWRBLE1BQWMsNEJBQUwsRUFBSzs7QUFDbEcsTUFBTUMsT0FBTztBQUNUQyxJQUFBQSxNQUFNLEVBQUU7QUFEQyxLQUVORixNQUZNO0FBR1RHLElBQUFBLFdBQVcsRUFBRSxhQUhKO0FBSVRDLElBQUFBLE9BQU8sRUFBRTtBQUNMLHNCQUFnQixrQkFEWDtBQUVMLDhCQUF3QkMsTUFBTSxDQUFDQyxrQkFGMUI7QUFHTCxxQkFBZUQsTUFBTSxDQUFDRTtBQUhqQixLQUpBO0FBU1RDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBQztBQUNsQmIsTUFBQUEsYUFBYSxFQUFiQSxhQURrQjtBQUVsQkMsTUFBQUEsS0FBSyxFQUFMQSxLQUZrQjtBQUdsQkMsTUFBQUEsU0FBUyxFQUFUQTtBQUhrQixLQUFELENBQWY7QUFURyxJQUFiOztBQWVBLFNBQU8sNEJBQU1KLG9CQUFOLEVBQTRCTSxPQUE1QixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XHJcblxyXG5jb25zdCBERUZBVUxUX0dRTF9FTkRQT0lOVCA9ICdhcGkvbm93L2dyYXBocWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3JhcGhxbFJlcXVlc3Qoe29wZXJhdGlvbk5hbWUgPSAnJywgcXVlcnkgPSB7fSwgdmFyaWFibGVzID0ge30sIHBhcmFtcyA9IHt9fSkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICdYLVRyYW5zYWN0aW9uLVNvdXJjZSc6IHdpbmRvdy50cmFuc2FjdGlvbl9zb3VyY2UsXHJcbiAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbe1xyXG4gICAgICAgICAgICBvcGVyYXRpb25OYW1lLFxyXG4gICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgdmFyaWFibGVzXHJcbiAgICAgICAgfV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goREVGQVVMVF9HUUxfRU5EUE9JTlQsIG9wdGlvbnMpXHJcbn0iXX0=