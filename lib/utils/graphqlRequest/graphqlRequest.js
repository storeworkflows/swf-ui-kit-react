"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = graphqlRequest;

var _apolloLink = require("apollo-link");

var _batchHttpLink = _interopRequireDefault(require("./batchHttpLink"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_GQL_ENDPOINT = '/api/now/graphql';

function graphqlRequest() {
  var operationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = {
    method: 'POST',
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
  };
  return (0, _crossFetch["default"])(DEFAULT_GQL_ENDPOINT, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0dRTF9FTkRQT0lOVCIsImdyYXBocWxSZXF1ZXN0Iiwib3BlcmF0aW9uTmFtZSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIm9wdGlvbnMiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsIndpbmRvdyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxrQkFBN0I7O0FBRWUsU0FBU0MsY0FBVCxHQUFzRjtBQUFBLE1BQTlEQyxhQUE4RCx1RUFBOUMsRUFBOEM7QUFBQSxNQUExQ0MsS0FBMEMsdUVBQWxDLEVBQWtDO0FBQUEsTUFBOUJDLFNBQThCLHVFQUFsQixFQUFrQjtBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTtBQUNqRyxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsSUFBQUEsTUFBTSxFQUFFLE1BREk7QUFFWkMsSUFBQUEsV0FBVyxFQUFFLGFBRkQ7QUFHWkgsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwsOEJBQXdCSSxNQUFNLENBQUNDLGtCQUYxQjtBQUdMLHFCQUFlLDBFQUhWLENBR3FGOztBQUhyRixLQUhHO0FBUVpDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBQztBQUNsQlgsTUFBQUEsYUFBYSxFQUFFLEVBREc7QUFFbEJDLE1BQUFBLEtBQUssRUFBTEEsS0FGa0I7QUFHbEJDLE1BQUFBLFNBQVMsRUFBVEE7QUFIa0IsS0FBRCxDQUFmO0FBUk0sR0FBaEI7QUFjQSxTQUFPLDRCQUFNSixvQkFBTixFQUE0Qk0sT0FBNUIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWtlUHJvbWlzZSwgZXhlY3V0ZX0gZnJvbSBcImFwb2xsby1saW5rXCI7XG5pbXBvcnQgYmF0Y2hIdHRwTGluayBmcm9tIFwiLi9iYXRjaEh0dHBMaW5rXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XG5cbmNvbnN0IERFRkFVTFRfR1FMX0VORFBPSU5UID0gJy9hcGkvbm93L2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncmFwaHFsUmVxdWVzdChvcGVyYXRpb25OYW1lID0gJycsIHF1ZXJ5ID0ge30sIHZhcmlhYmxlcyA9IHt9LCBoZWFkZXJzID0ge30pIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICdYLVRyYW5zYWN0aW9uLVNvdXJjZSc6IHdpbmRvdy50cmFuc2FjdGlvbl9zb3VyY2UsXG4gICAgICAgICAgICAnWC1Vc2VyVG9rZW4nOiBcImQxNWVmNTgzZGJkNjYwMTAzZDlhY2EzMjM5OTYxOWI1MDMwOTcyMGQzMzc3YzQxZTljOGEwM2VjMGI1MGE1MmRjYWVjMmRhYlwiIC8vd2luZG93LmdfY2tcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoW3tcbiAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IFwiXCIsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHZhcmlhYmxlc1xuICAgICAgICB9XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKERFRkFVTFRfR1FMX0VORFBPSU5ULCBvcHRpb25zKVxufSJdfQ==