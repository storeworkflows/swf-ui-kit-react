"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postFilter = exports.fetchGroupList = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var url, _ref$params, params, result, response, resultJson;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params;
            _context.prev = 1;
            _context.next = 4;
            return fetch(url, _objectSpread(_objectSpread({}, params), {}, {
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
            result = Array.isArray(resultJson.result) ? resultJson.result.slice(0) : resultJson;
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

  return function fetchRequest(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var prepareQueryParams = function prepareQueryParams(obj) {
  return Object.keys(obj).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
};

var fetchGroupList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var endpoint, queryParams, query, url, params;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpoint = "/api/now/table/sys_user_group";
            queryParams = {
              sysparm_query: "active=true",
              sysparm_fields: "sys_id,name,description"
            };
            query = prepareQueryParams(queryParams);
            url = "".concat(endpoint, "?").concat(query);
            params = {
              method: "GET"
            };
            _context2.next = 7;
            return fetchRequest({
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
    }, _callee2);
  }));

  return function fetchGroupList() {
    return _ref3.apply(this, arguments);
  };
}();

exports.fetchGroupList = fetchGroupList;

var postFilter = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var url, params;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = '/api/now/table/sys_filter';
            params = {
              method: 'POST',
              body: JSON.stringify(data)
            };
            _context3.next = 4;
            return fetchRequest({
              url: url,
              params: params
            });

          case 4:
            return _context3.abrupt("return", _context3.sent);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function postFilter(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.postFilter = postFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9GaWx0ZXJDb25kaXRpb25CdWlsZGVyL0NvbXBvbmVudHMvRmlsdGVyU2F2ZXIvUmVxdWVzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiZmV0Y2hSZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJ3aW5kb3ciLCJ0cmFuc2FjdGlvbl9zb3VyY2UiLCJnX2NrIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0SnNvbiIsInJlc3VsdCIsIkFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwiY29uc29sZSIsImVycm9yIiwicHJlcGFyZVF1ZXJ5UGFyYW1zIiwib2JqIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImsiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiZmV0Y2hHcm91cExpc3QiLCJlbmRwb2ludCIsInF1ZXJ5UGFyYW1zIiwic3lzcGFybV9xdWVyeSIsInN5c3Bhcm1fZmllbGRzIiwicXVlcnkiLCJtZXRob2QiLCJwb3N0RmlsdGVyIiwiZGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVk7QUFBQSxzRUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLFlBQUFBLEdBQVQsUUFBU0EsR0FBVCxxQkFBY0MsTUFBZCxFQUFjQSxNQUFkLDRCQUF1QixFQUF2QjtBQUFBO0FBQUE7QUFBQSxtQkFHVUMsS0FBSyxDQUFDRixHQUFELGtDQUNyQkMsTUFEcUI7QUFFeEJFLGNBQUFBLFdBQVcsRUFBRSxhQUZXO0FBR3hCQyxjQUFBQSxPQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCx3Q0FBd0JDLE1BQU0sQ0FBQ0Msa0JBRjFCO0FBR0wsK0JBQWVELE1BQU0sQ0FBQ0U7QUFIakI7QUFIZSxlQUhmOztBQUFBO0FBR1BDLFlBQUFBLFFBSE87QUFBQTtBQUFBLG1CQVlZQSxRQUFRLENBQUNDLElBQVQsRUFaWjs7QUFBQTtBQVlQQyxZQUFBQSxVQVpPO0FBY2JDLFlBQUFBLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNILFVBQVUsQ0FBQ0MsTUFBekIsSUFBbUNELFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQkcsS0FBbEIsQ0FBd0IsQ0FBeEIsQ0FBbkMsR0FBaUVKLFVBQTFFO0FBZGE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQmJLLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUjs7QUFoQmE7QUFBQSw2Q0FrQlZMLE1BbEJVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpaLFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O0FBcUJBLElBQU1rQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsR0FBWixFQUMvQkcsR0FEK0IsQ0FDM0IsVUFBQUMsQ0FBQztBQUFBLFdBQUlDLGtCQUFrQixDQUFDRCxDQUFELENBQWxCLEdBQXdCLEdBQXhCLEdBQThCQyxrQkFBa0IsQ0FBQ0wsR0FBRyxDQUFDSSxDQUFELENBQUosQ0FBcEQ7QUFBQSxHQUQwQixFQUUvQkUsSUFGK0IsQ0FFMUIsR0FGMEIsQ0FBVDtBQUFBLENBQTNCOztBQUtBLElBQU1DLGNBQWM7QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsWUFBQUEsUUFEYTtBQUViQyxZQUFBQSxXQUZhLEdBRUM7QUFDaEJDLGNBQUFBLGFBQWEsRUFBRSxhQURDO0FBRWhCQyxjQUFBQSxjQUFjLEVBQUU7QUFGQSxhQUZEO0FBTWJDLFlBQUFBLEtBTmEsR0FNTGIsa0JBQWtCLENBQUNVLFdBQUQsQ0FOYjtBQVFiM0IsWUFBQUEsR0FSYSxhQVFKMEIsUUFSSSxjQVFRSSxLQVJSO0FBU2I3QixZQUFBQSxNQVRhLEdBU0o7QUFDWDhCLGNBQUFBLE1BQU0sRUFBRTtBQURHLGFBVEk7QUFBQTtBQUFBLG1CQWFOaEMsWUFBWSxDQUFDO0FBQUVDLGNBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPQyxjQUFBQSxNQUFNLEVBQU5BO0FBQVAsYUFBRCxDQWJOOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZHdCLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7Ozs7QUFnQkEsSUFBTU8sVUFBVTtBQUFBLHNFQUFHLGtCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUakMsWUFBQUEsR0FEUyxHQUNILDJCQURHO0FBRVRDLFlBQUFBLE1BRlMsR0FFQTtBQUNYOEIsY0FBQUEsTUFBTSxFQUFFLE1BREc7QUFFWEcsY0FBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZjtBQUZLLGFBRkE7QUFBQTtBQUFBLG1CQU9GbEMsWUFBWSxDQUFDO0FBQUVDLGNBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPQyxjQUFBQSxNQUFNLEVBQU5BO0FBQVAsYUFBRCxDQVBWOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVitCLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaFJlcXVlc3QgPSBhc3luYyAoeyB1cmwsIHBhcmFtcyA9IHt9IH0pID0+IHtcclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICdYLVRyYW5zYWN0aW9uLVNvdXJjZSc6IHdpbmRvdy50cmFuc2FjdGlvbl9zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAnWC1Vc2VyVG9rZW4nOiB3aW5kb3cuZ19ja1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdEpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IEFycmF5LmlzQXJyYXkocmVzdWx0SnNvbi5yZXN1bHQpID8gcmVzdWx0SnNvbi5yZXN1bHQuc2xpY2UoMCwpIDogcmVzdWx0SnNvbjtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlUXVlcnlQYXJhbXMgPSAob2JqKSA9PiBPYmplY3Qua2V5cyhvYmopXHJcbiAgICAubWFwKGsgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSkpXHJcbiAgICAuam9pbignJicpO1xyXG5cclxuXHJcbmNvbnN0IGZldGNoR3JvdXBMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBgL2FwaS9ub3cvdGFibGUvc3lzX3VzZXJfZ3JvdXBgO1xyXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgc3lzcGFybV9xdWVyeTogXCJhY3RpdmU9dHJ1ZVwiLFxyXG4gICAgICAgIHN5c3Bhcm1fZmllbGRzOiBcInN5c19pZCxuYW1lLGRlc2NyaXB0aW9uXCJcclxuICAgIH1cclxuICAgIGNvbnN0IHF1ZXJ5ID0gcHJlcGFyZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBgJHtlbmRwb2ludH0/JHtxdWVyeX1gO1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoUmVxdWVzdCh7IHVybCwgcGFyYW1zIH0pXHJcbn1cclxuXHJcbmNvbnN0IHBvc3RGaWx0ZXIgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gJy9hcGkvbm93L3RhYmxlL3N5c19maWx0ZXInO1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoUmVxdWVzdCh7IHVybCwgcGFyYW1zIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaEdyb3VwTGlzdCxcclxuICAgIHBvc3RGaWx0ZXJcclxufSJdfQ==