"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REQUEST_UTILS = void 0;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var REQUEST_UTILS = {
  prepareQueryParams: function prepareQueryParams(obj) {
    return Object.keys(obj).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
    }).join('&');
  },
  fetchRequest: function () {
    var _fetchRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var url, params, result, response, resultJson;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _ref.url, params = _ref.params;
              _context.prev = 1;
              _context.next = 4;
              return (0, _crossFetch["default"])(url, _objectSpread(_objectSpread({}, params), {}, {
                credentials: 'same-origin',
                headers: {
                  'content-type': "application/json",
                  'X-Transaction-Source': window.transaction_source,
                  'X-UserToken': window.g_ck
                }
              }));

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              resultJson = _context.sent;
              result = resultJson.result;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 14:
              return _context.abrupt("return", result);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    function fetchRequest(_x) {
      return _fetchRequest.apply(this, arguments);
    }

    return fetchRequest;
  }(),
  fetchTableData: function () {
    var _fetchTableData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
      var table, queryParams, endpoint, query, url, params;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              table = _ref2.table, queryParams = _ref2.queryParams;
              endpoint = "".concat(window.location.origin, "/api/now/ui/meta/").concat(table);
              query = queryParams ? this.prepareQueryParams(queryParams) : "";
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: "GET"
              };
              _context2.next = 7;
              return this.fetchRequest({
                url: url,
                params: params
              });

            case 7:
              return _context2.abrupt("return", _context2.sent);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function fetchTableData(_x2) {
      return _fetchTableData.apply(this, arguments);
    }

    return fetchTableData;
  }(),
  fetchReferenceData: function () {
    var _fetchReferenceData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
      var table, queryParams, endpoint, query, url, params;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              table = _ref3.table, queryParams = _ref3.queryParams;
              endpoint = "".concat(window.location.origin, "/api/now/table/").concat(table);
              query = queryParams ? this.prepareQueryParams(queryParams) : "";
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: "GET"
              };
              _context3.next = 7;
              return this.fetchRequest({
                url: url,
                params: params
              });

            case 7:
              return _context3.abrupt("return", _context3.sent);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function fetchReferenceData(_x3) {
      return _fetchReferenceData.apply(this, arguments);
    }

    return fetchReferenceData;
  }(),
  fetchFilterTemplates: function () {
    var _fetchFilterTemplates = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
      var table, filter, endpoint, queryParams, query, url, params;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              table = _ref4.table, filter = _ref4.filter;
              endpoint = "".concat(window.location.origin, "/api/now/table/sys_filter");
              queryParams = {
                sysparm_query: "table=".concat(table, "^").concat(filter),
                sysparm_fields: "filter,sys_id,sys_name,table,title,user,group"
              };
              query = this.prepareQueryParams(queryParams);
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: "GET"
              };
              _context4.next = 8;
              return this.fetchRequest({
                url: url,
                params: params
              });

            case 8:
              return _context4.abrupt("return", _context4.sent);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function fetchFilterTemplates(_x4) {
      return _fetchFilterTemplates.apply(this, arguments);
    }

    return fetchFilterTemplates;
  }(),
  fetchGroup: function () {
    var _fetchGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref5) {
      var sys_id, endpoint, queryParams, query, url, params;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sys_id = _ref5.sys_id;
              endpoint = "".concat(window.location.origin, "/api/now/table/sys_user_group");
              queryParams = {
                sysparm_query: "sys_id=".concat(sys_id)
              };
              query = this.prepareQueryParams(queryParams);
              url = "".concat(endpoint, "?").concat(query);
              params = {
                method: "GET"
              };
              _context5.next = 8;
              return this.fetchRequest({
                url: url,
                params: params
              });

            case 8:
              return _context5.abrupt("return", _context5.sent);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function fetchGroup(_x5) {
      return _fetchGroup.apply(this, arguments);
    }

    return fetchGroup;
  }()
};
exports.REQUEST_UTILS = REQUEST_UTILS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL3V0aWxzL19yZXF1ZXN0VXRpbHMuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9VVElMUyIsInByZXBhcmVRdWVyeVBhcmFtcyIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsImZldGNoUmVxdWVzdCIsInVybCIsInBhcmFtcyIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIndpbmRvdyIsInRyYW5zYWN0aW9uX3NvdXJjZSIsImdfY2siLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHRKc29uIiwicmVzdWx0IiwiY29uc29sZSIsImVycm9yIiwiZmV0Y2hUYWJsZURhdGEiLCJ0YWJsZSIsInF1ZXJ5UGFyYW1zIiwiZW5kcG9pbnQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInF1ZXJ5IiwibWV0aG9kIiwiZmV0Y2hSZWZlcmVuY2VEYXRhIiwiZmV0Y2hGaWx0ZXJUZW1wbGF0ZXMiLCJmaWx0ZXIiLCJzeXNwYXJtX3F1ZXJ5Iiwic3lzcGFybV9maWVsZHMiLCJmZXRjaEdyb3VwIiwic3lzX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsYUFBYSxHQUFHO0FBQ3pCQyxFQUFBQSxrQkFBa0IsRUFBRSw0QkFBU0MsR0FBVCxFQUFjO0FBQzlCLFdBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQ0VHLEdBREYsQ0FDTSxVQUFBQyxDQUFDO0FBQUEsYUFBSUMsa0JBQWtCLENBQUNELENBQUQsQ0FBbEIsR0FBd0IsR0FBeEIsR0FBOEJDLGtCQUFrQixDQUFDTCxHQUFHLENBQUNJLENBQUQsQ0FBSixDQUFwRDtBQUFBLEtBRFAsRUFFRUUsSUFGRixDQUVPLEdBRlAsQ0FBUDtBQUdILEdBTHdCO0FBTXpCQyxFQUFBQSxZQUFZO0FBQUEsZ0ZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF6RGUsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnY3Jvc3MtZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVRJTFMgPSB7XHJcbiAgICBwcmVwYXJlUXVlcnlQYXJhbXM6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopXHJcbiAgICAgICAgICAgICAgICAubWFwKGsgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSkpXHJcbiAgICAgICAgICAgICAgICAuam9pbignJicpO1xyXG4gICAgfSxcclxuICAgIGZldGNoUmVxdWVzdDogYXN5bmMgZnVuY3Rpb24oe3VybCwgcGFyYW1zfSkge1xyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAnWC1UcmFuc2FjdGlvbi1Tb3VyY2UnOiB3aW5kb3cudHJhbnNhY3Rpb25fc291cmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0SnNvbi5yZXN1bHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hUYWJsZURhdGE6IGFzeW5jIGZ1bmN0aW9uKHt0YWJsZSwgcXVlcnlQYXJhbXN9KSB7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L3VpL21ldGEvJHt0YWJsZX1gO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcnlQYXJhbXMgPyB0aGlzLnByZXBhcmVRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcykgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke2VuZHBvaW50fT8ke3F1ZXJ5fWBcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaFJlcXVlc3Qoe3VybCwgcGFyYW1zfSlcclxuICAgIH0sXHJcbiAgICBmZXRjaFJlZmVyZW5jZURhdGE6IGFzeW5jIGZ1bmN0aW9uKHt0YWJsZSwgcXVlcnlQYXJhbXN9KSB7XHJcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvbm93L3RhYmxlLyR7dGFibGV9YDtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5UGFyYW1zID8gdGhpcy5wcmVwYXJlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpIDogXCJcIjtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHtlbmRwb2ludH0/JHtxdWVyeX1gO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoUmVxdWVzdCh7dXJsLCBwYXJhbXN9KVxyXG4gICAgfSxcclxuICAgIGZldGNoRmlsdGVyVGVtcGxhdGVzOiBhc3luYyBmdW5jdGlvbiAoe3RhYmxlLCBmaWx0ZXJ9KXtcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwaS9ub3cvdGFibGUvc3lzX2ZpbHRlcmA7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHN5c3Bhcm1fcXVlcnk6IGB0YWJsZT0ke3RhYmxlfV4ke2ZpbHRlcn1gLFxyXG4gICAgICAgICAgICBzeXNwYXJtX2ZpZWxkczogXCJmaWx0ZXIsc3lzX2lkLHN5c19uYW1lLHRhYmxlLHRpdGxlLHVzZXIsZ3JvdXBcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnByZXBhcmVRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9PyR7cXVlcnl9YDtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoUmVxdWVzdCh7dXJsLCBwYXJhbXN9KTtcclxuICAgIH0sXHJcbiAgICBmZXRjaEdyb3VwOiBhc3luYyBmdW5jdGlvbiAoe3N5c19pZH0pIHtcclxuICAgICAgICBjb25zdCBlbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwaS9ub3cvdGFibGUvc3lzX3VzZXJfZ3JvdXBgO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzeXNwYXJtX3F1ZXJ5OiBgc3lzX2lkPSR7c3lzX2lkfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnByZXBhcmVRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9PyR7cXVlcnl9YDtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoUmVxdWVzdCh7dXJsLCBwYXJhbXN9KTtcclxuICAgIH1cclxufTsiXX0=