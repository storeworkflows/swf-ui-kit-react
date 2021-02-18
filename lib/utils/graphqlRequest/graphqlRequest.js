"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = graphqlRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9ncmFwaHFsUmVxdWVzdC9ncmFwaHFsUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0dRTF9FTkRQT0lOVCIsImdyYXBocWxSZXF1ZXN0Iiwib3BlcmF0aW9uTmFtZSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIm9wdGlvbnMiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsIndpbmRvdyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxrQkFBN0I7O0FBRWUsU0FBU0MsY0FBVCxHQUFzRjtBQUFBLE1BQTlEQyxhQUE4RCx1RUFBOUMsRUFBOEM7QUFBQSxNQUExQ0MsS0FBMEMsdUVBQWxDLEVBQWtDO0FBQUEsTUFBOUJDLFNBQThCLHVFQUFsQixFQUFrQjtBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTtBQUNqRyxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsSUFBQUEsTUFBTSxFQUFFLE1BREk7QUFFWkMsSUFBQUEsV0FBVyxFQUFFLGFBRkQ7QUFHWkgsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsc0JBQWdCLGtCQURYO0FBRUwsOEJBQXdCSSxNQUFNLENBQUNDLGtCQUYxQjtBQUdMLHFCQUFlLDBFQUhWLENBR3FGOztBQUhyRixLQUhHO0FBUVpDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBQztBQUNsQlgsTUFBQUEsYUFBYSxFQUFFLEVBREc7QUFFbEJDLE1BQUFBLEtBQUssRUFBTEEsS0FGa0I7QUFHbEJDLE1BQUFBLFNBQVMsRUFBVEE7QUFIa0IsS0FBRCxDQUFmO0FBUk0sR0FBaEI7QUFjQSxTQUFPLDRCQUFNSixvQkFBTixFQUE0Qk0sT0FBNUIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiY3Jvc3MtZmV0Y2hcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRfR1FMX0VORFBPSU5UID0gJy9hcGkvbm93L2dyYXBocWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3JhcGhxbFJlcXVlc3Qob3BlcmF0aW9uTmFtZSA9ICcnLCBxdWVyeSA9IHt9LCB2YXJpYWJsZXMgPSB7fSwgaGVhZGVycyA9IHt9KSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAnWC1UcmFuc2FjdGlvbi1Tb3VyY2UnOiB3aW5kb3cudHJhbnNhY3Rpb25fc291cmNlLFxyXG4gICAgICAgICAgICAnWC1Vc2VyVG9rZW4nOiBcImQxNWVmNTgzZGJkNjYwMTAzZDlhY2EzMjM5OTYxOWI1MDMwOTcyMGQzMzc3YzQxZTljOGEwM2VjMGI1MGE1MmRjYWVjMmRhYlwiIC8vd2luZG93LmdfY2tcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFt7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICB2YXJpYWJsZXNcclxuICAgICAgICB9XSlcclxuICAgIH1cclxuICAgIHJldHVybiBmZXRjaChERUZBVUxUX0dRTF9FTkRQT0lOVCwgb3B0aW9ucylcclxufSJdfQ==