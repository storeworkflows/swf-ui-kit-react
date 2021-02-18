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

var DEFAULT_GQL_ENDPOINT = '/api/now/graphql';

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
      'X-UserToken': "d15ef583dbd660103d9aca32399619b50309720d3377c41e9c8a03ec0b50a52dcaec2dab" //window.g_ck

    },
    body: JSON.stringify([{
      operationName: "",
      query: query,
      variables: variables
    }])
  });

  return (0, _crossFetch["default"])(DEFAULT_GQL_ENDPOINT, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0dRTF9FTkRQT0lOVCIsImdyYXBocWxSZXF1ZXN0Iiwib3BlcmF0aW9uTmFtZSIsInF1ZXJ5IiwidmFyaWFibGVzIiwicGFyYW1zIiwib3B0aW9ucyIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIndpbmRvdyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxrQkFBN0I7O0FBRWUsU0FBU0MsY0FBVCxPQUF1RjtBQUFBLGdDQUE5REMsYUFBOEQ7QUFBQSxNQUE5REEsYUFBOEQsbUNBQTlDLEVBQThDO0FBQUEsd0JBQTFDQyxLQUEwQztBQUFBLE1BQTFDQSxLQUEwQywyQkFBbEMsRUFBa0M7QUFBQSw0QkFBOUJDLFNBQThCO0FBQUEsTUFBOUJBLFNBQThCLCtCQUFsQixFQUFrQjtBQUFBLHlCQUFkQyxNQUFjO0FBQUEsTUFBZEEsTUFBYyw0QkFBTCxFQUFLOztBQUNsRyxNQUFNQyxPQUFPO0FBQ1RDLElBQUFBLE1BQU0sRUFBRTtBQURDLEtBRU5GLE1BRk07QUFHVEcsSUFBQUEsV0FBVyxFQUFFLGFBSEo7QUFJVEMsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwsOEJBQXdCQyxNQUFNLENBQUNDLGtCQUYxQjtBQUdMLHFCQUFlLDBFQUhWLENBR3FGOztBQUhyRixLQUpBO0FBU1RDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBQztBQUNsQlosTUFBQUEsYUFBYSxFQUFFLEVBREc7QUFFbEJDLE1BQUFBLEtBQUssRUFBTEEsS0FGa0I7QUFHbEJDLE1BQUFBLFNBQVMsRUFBVEE7QUFIa0IsS0FBRCxDQUFmO0FBVEcsSUFBYjs7QUFlQSxTQUFPLDRCQUFNSixvQkFBTixFQUE0Qk0sT0FBNUIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJjcm9zcy1mZXRjaFwiO1xyXG5cclxuY29uc3QgREVGQVVMVF9HUUxfRU5EUE9JTlQgPSAnL2FwaS9ub3cvZ3JhcGhxbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncmFwaHFsUmVxdWVzdCh7b3BlcmF0aW9uTmFtZSA9ICcnLCBxdWVyeSA9IHt9LCB2YXJpYWJsZXMgPSB7fSwgcGFyYW1zID0ge319KSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgJ1gtVXNlclRva2VuJzogXCJkMTVlZjU4M2RiZDY2MDEwM2Q5YWNhMzIzOTk2MTliNTAzMDk3MjBkMzM3N2M0MWU5YzhhMDNlYzBiNTBhNTJkY2FlYzJkYWJcIiAvL3dpbmRvdy5nX2NrXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbe1xyXG4gICAgICAgICAgICBvcGVyYXRpb25OYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgdmFyaWFibGVzXHJcbiAgICAgICAgfV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goREVGQVVMVF9HUUxfRU5EUE9JTlQsIG9wdGlvbnMpXHJcbn0iXX0=