"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRequest = exports.uploadRequest = exports.downloadRequest = void 0;

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var errorMessage = function errorMessage(error, delay) {
  var errorIcon = "exclamation-circle";
  return {
    systemMessages: [{
      content: error.toString(),
      icon: errorIcon,
      delay: delay
    }]
  };
};

var downloadRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(attachmentSysId, delay) {
    var _window, _window2, url, requestOptions, response, data, error;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!attachmentSysId) {
              _context.next = 19;
              break;
            }

            url = "/api/now/attachment/".concat(attachmentSysId);
            requestOptions = {
              method: 'GET',
              credentials: 'same-origin',
              headers: {
                'content-type': "application/json",
                'X-Transaction-Source': (_window = window) === null || _window === void 0 ? void 0 : _window.transaction_source,
                'X-UserToken': (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.g_ck
              }
            };
            _context.prev = 3;
            _context.next = 6;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;

            if (response.ok) {
              _context.next = 13;
              break;
            }

            error = data && data.message || response.statusText;
            return _context.abrupt("return", errorMessage(error, delay));

          case 13:
            return _context.abrupt("return", data.result);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 16]]);
  }));

  return function downloadRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.downloadRequest = downloadRequest;

var uploadRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file, tableSysId, tableName, delay) {
    var url, modifiedTableName, data, requestOptions, response, _data, error;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(tableName && tableSysId)) {
              _context2.next = 24;
              break;
            }

            url = "/api/now/attachment/upload";
            modifiedTableName = 'ZZ_YY' + tableName;
            data = new FormData();
            data.append('table_name', modifiedTableName);
            data.append('table_sys_id', tableSysId);
            data.append('file', file);
            requestOptions = {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              },
              body: data
            };
            _context2.prev = 8;
            _context2.next = 11;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 11:
            response = _context2.sent;
            _context2.next = 14;
            return response === null || response === void 0 ? void 0 : response.json();

          case 14:
            _data = _context2.sent;

            if (response.ok) {
              _context2.next = 18;
              break;
            }

            error = _data && _data.message || response.statusText;
            return _context2.abrupt("return", errorMessage(error, delay));

          case 18:
            return _context2.abrupt("return", _data.result);

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](8);
            console.log(_context2.t0);

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 21]]);
  }));

  return function uploadRequest(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.uploadRequest = uploadRequest;

var deleteRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(attachmentSysId, delay) {
    var url, requestOptions, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!attachmentSysId) {
              _context3.next = 14;
              break;
            }

            url = "/api/now/attachment/".concat(attachmentSysId);
            requestOptions = {
              method: 'DELETE',
              credentials: 'same-origin',
              headers: {
                'content-type': "application/json",
                'X-Transaction-Source': window.transaction_source,
                'X-UserToken': window.g_ck
              }
            };
            _context3.prev = 3;
            _context3.next = 6;
            return (0, _crossFetch["default"])(url, requestOptions);

          case 6:
            response = _context3.sent;

            if (response.ok) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", errorMessage(response.statusText, delay));

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 11]]);
  }));

  return function deleteRequest(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteRequest = deleteRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdHRhY2htZW50L19yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJlcnJvck1lc3NhZ2UiLCJlcnJvciIsImRlbGF5IiwiZXJyb3JJY29uIiwic3lzdGVtTWVzc2FnZXMiLCJjb250ZW50IiwidG9TdHJpbmciLCJpY29uIiwiZG93bmxvYWRSZXF1ZXN0IiwiYXR0YWNobWVudFN5c0lkIiwidXJsIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJ3aW5kb3ciLCJ0cmFuc2FjdGlvbl9zb3VyY2UiLCJnX2NrIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9rIiwibWVzc2FnZSIsInN0YXR1c1RleHQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkUmVxdWVzdCIsImZpbGUiLCJ0YWJsZVN5c0lkIiwidGFibGVOYW1lIiwibW9kaWZpZWRUYWJsZU5hbWUiLCJGb3JtRGF0YSIsImFwcGVuZCIsImJvZHkiLCJkZWxldGVSZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ25DLE1BQUlDLFNBQVMsR0FBRyxvQkFBaEI7QUFDQSxTQUFNO0FBQ0ZDLElBQUFBLGNBQWMsRUFBRSxDQUFDO0FBQUNDLE1BQUFBLE9BQU8sRUFBRUosS0FBSyxDQUFDSyxRQUFOLEVBQVY7QUFBNEJDLE1BQUFBLElBQUksRUFBRUosU0FBbEM7QUFBNkNELE1BQUFBLEtBQUssRUFBRUE7QUFBcEQsS0FBRDtBQURkLEdBQU47QUFHSCxDQUxEOztBQU9PLElBQU1NLGVBQWU7QUFBQSxxRUFBRyxpQkFBT0MsZUFBUCxFQUF3QlAsS0FBeEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUN2Qk8sZUFEdUI7QUFBQTtBQUFBO0FBQUE7O0FBRW5CQyxZQUFBQSxHQUZtQixpQ0FF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QUFrQ0EsSUFBTVEsYUFBYTtBQUFBLHNFQUFHLGtCQUFPMUIsZUFBUCxFQUF3QlAsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ3JCTyxlQURxQjtBQUFBO0FBQUE7QUFBQTs7QUFFakJDLFlBQUFBLEdBRmlCLGlDQUVZRCxlQUZaO0FBSWZFLFlBQUFBLGNBSmUsR0FJRTtBQUNuQkMsY0FBQUEsTUFBTSxFQUFFLFFBRFc7QUFFbkJDLGNBQUFBLFdBQVcsRUFBRSxhQUZNO0FBR25CQyxjQUFBQSxPQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCx3Q0FBd0JDLE1BQU0sQ0FBQ0Msa0JBRjFCO0FBR0wsK0JBQWVELE1BQU0sQ0FBQ0U7QUFIakI7QUFIVSxhQUpGO0FBQUE7QUFBQTtBQUFBLG1CQWVNLDRCQUFNUCxHQUFOLEVBQVdDLGNBQVgsQ0FmTjs7QUFBQTtBQWVYTyxZQUFBQSxRQWZXOztBQUFBLGdCQWdCWkEsUUFBUSxDQUFDRyxFQWhCRztBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FpQk5yQixZQUFZLENBQUNrQixRQUFRLENBQUNLLFVBQVYsRUFBc0JyQixLQUF0QixDQWpCTjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBb0JqQnVCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFwQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJTLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImNyb3NzLWZldGNoXCI7XHJcblxyXG5jb25zdCBlcnJvck1lc3NhZ2UgPSAoZXJyb3IsIGRlbGF5KSA9PiB7XHJcbiAgICBsZXQgZXJyb3JJY29uID0gXCJleGNsYW1hdGlvbi1jaXJjbGVcIlxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHN5c3RlbU1lc3NhZ2VzOiBbe2NvbnRlbnQ6IGVycm9yLnRvU3RyaW5nKCksIGljb246IGVycm9ySWNvbiwgZGVsYXk6IGRlbGF5fV1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkb3dubG9hZFJlcXVlc3QgPSBhc3luYyAoYXR0YWNobWVudFN5c0lkLCBkZWxheSkgPT4ge1xyXG4gICAgaWYgKGF0dGFjaG1lbnRTeXNJZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSBgL2FwaS9ub3cvYXR0YWNobWVudC8ke2F0dGFjaG1lbnRTeXNJZH1gO1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICdYLVRyYW5zYWN0aW9uLVNvdXJjZSc6IHdpbmRvdz8udHJhbnNhY3Rpb25fc291cmNlLFxyXG4gICAgICAgICAgICAgICAgJ1gtVXNlclRva2VuJzogd2luZG93Py5nX2NrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2UoZXJyb3IsIGRlbGF5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBsb2FkUmVxdWVzdCA9IGFzeW5jIChmaWxlLCB0YWJsZVN5c0lkLCB0YWJsZU5hbWUsIGRlbGF5KSA9PiB7XHJcbiAgICBpZiAodGFibGVOYW1lICYmIHRhYmxlU3lzSWQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYC9hcGkvbm93L2F0dGFjaG1lbnQvdXBsb2FkYDtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRUYWJsZU5hbWUgPSAnWlpfWVknICsgdGFibGVOYW1lO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgndGFibGVfbmFtZScsIG1vZGlmaWVkVGFibGVOYW1lKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgndGFibGVfc3lzX2lkJywgdGFibGVTeXNJZCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IGRhdGFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucylcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlPy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2UoZXJyb3IsIGRlbGF5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUmVxdWVzdCA9IGFzeW5jIChhdHRhY2htZW50U3lzSWQsIGRlbGF5KSA9PiB7XHJcbiAgICBpZiAoYXR0YWNobWVudFN5c0lkKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAvYXBpL25vdy9hdHRhY2htZW50LyR7YXR0YWNobWVudFN5c0lkfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgJ1gtVHJhbnNhY3Rpb24tU291cmNlJzogd2luZG93LnRyYW5zYWN0aW9uX3NvdXJjZSxcclxuICAgICAgICAgICAgICAgICdYLVVzZXJUb2tlbic6IHdpbmRvdy5nX2NrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2UocmVzcG9uc2Uuc3RhdHVzVGV4dCwgZGVsYXkpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19